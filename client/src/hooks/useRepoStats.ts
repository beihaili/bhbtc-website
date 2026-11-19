import { useEffect, useState } from "react";

export type RepoStat = {
  stars: number;
  forks: number;
};

type RepoStatsState = {
  ready: boolean;
  stats: Record<string, RepoStat | null>;
};

export function useRepoStats(repos: readonly string[]): RepoStatsState {
  const key = repos.join("|");
  const [state, setState] = useState<RepoStatsState>({
    ready: false,
    stats: {},
  });

  useEffect(() => {
    const names = key.split("|").filter(Boolean);
    let cancelled = false;

    const emptyStats = () => {
      const stats: Record<string, RepoStat | null> = {};
      names.forEach(name => {
        stats[name] = null;
      });
      return stats;
    };

    fetch(
      "https://api.github.com/users/beihaili/repos?per_page=100&sort=updated"
    )
      .then(async res => {
        if (!res.ok) return null;
        const data: unknown = await res.json();
        if (!Array.isArray(data)) return null;
        return data;
      })
      .then(repos => {
        if (cancelled) return;
        const stats = emptyStats();
        repos?.forEach(repo => {
          if (!repo || typeof repo !== "object") return;
          const record = repo as {
            name?: unknown;
            stargazers_count?: unknown;
            forks_count?: unknown;
          };
          if (typeof record.name !== "string" || !names.includes(record.name)) {
            return;
          }
          if (
            typeof record.stargazers_count !== "number" ||
            typeof record.forks_count !== "number"
          ) {
            return;
          }
          stats[record.name] = {
            stars: record.stargazers_count,
            forks: record.forks_count,
          };
        });
        setState({ ready: true, stats });
      })
      .catch(() => {
        if (cancelled) return;
        setState({ ready: true, stats: emptyStats() });
      });

    return () => {
      cancelled = true;
    };
  }, [key]);

  return state;
}
