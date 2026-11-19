import type { RepoStat } from "@/hooks/useRepoStats";

export default function RepoCounts({
  repo,
  stats,
  ready,
}: {
  repo: string;
  stats: Record<string, RepoStat | null>;
  ready: boolean;
}) {
  if (!ready) {
    return <p className="text-sm text-muted-foreground">正在读取 GitHub…</p>;
  }

  const stat = stats[repo];
  if (!stat) {
    return (
      <p className="text-sm text-muted-foreground">
        星标和 fork 以 GitHub 页面为准
      </p>
    );
  }

  return (
    <p className="text-sm tabular-nums text-muted-foreground">
      {stat.stars} 星标 · {stat.forks} 次 fork
    </p>
  );
}
