import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import RepoCounts from "@/components/RepoCounts";
import { useRepoStats } from "@/hooks/useRepoStats";
import {
  draftProjects,
  publishedProjects,
  trackedRepos,
  type Project,
} from "@/data/projects";

function ProjectBlock({
  project,
  stats,
  ready,
}: {
  project: Project;
  stats: ReturnType<typeof useRepoStats>["stats"];
  ready: boolean;
}) {
  return (
    <article className="border-b border-border py-10 last:border-b-0">
      <p className="text-sm text-primary">{project.subtitle}</p>
      <h2 className="mt-2 font-serif text-3xl leading-snug">{project.title}</h2>
      <p className="mt-4 max-w-[40rem] leading-8 text-muted-foreground">
        {project.summary}
      </p>
      <ul className="mt-4 max-w-[40rem] list-disc space-y-1 pl-5 text-sm leading-7 text-muted-foreground">
        {project.points.map(point => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <div className="mt-4">
        <RepoCounts repo={project.repo} stats={stats} ready={ready} />
      </div>
      {project.status ? (
        <p className="mt-3 max-w-[40rem] text-sm leading-7 text-primary">
          {project.status}
        </p>
      ) : null}
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {project.links.map(link => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-border underline-offset-4 hover:decoration-primary"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  const { stats, ready } = useRepoStats(trackedRepos);

  return (
    <div className="site-page">
      <Navigation />

      <main className="flex-1">
        <PageHeader
          kicker="比特币"
          title="公开作品"
          lede="介绍摘自仓库自己的 README 和简介，不另写宣传语。星标和 fork 打开页面时向 GitHub 读取，读不到就不显示数字。"
        />

        <section>
          <div className="container">
            {publishedProjects.map(project => (
              <ProjectBlock
                key={project.repo}
                project={project}
                stats={stats}
                ready={ready}
              />
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-muted/40">
          <div className="container py-12 md:py-16">
            <p className="text-sm text-primary">草稿 · 待北海确认</p>
            <h2 className="page-title mt-3 max-w-[16em] text-[clamp(1.7rem,1rem+2vw,2.4rem)]">
              可能放进来的仓库
            </h2>
            <p className="mt-4 max-w-[40rem] leading-8 text-muted-foreground">
              下面三则只记录公开页面上能核对的事实，还没有放进正式介绍。请北海决定留、改，还是不展示。
            </p>
            {draftProjects.map(project => (
              <ProjectBlock
                key={project.repo}
                project={project}
                stats={stats}
                ready={ready}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
