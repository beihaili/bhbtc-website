import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Code2,
  ExternalLink,
  Github,
  GitFork,
  Layers,
  Star,
  Users,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "比特币那些事儿",
    subtitle: "Stories about Bitcoin",
    description:
      "首部中文比特币通史，用《明朝那些事儿》的风格讲述从 1976 年哈耶克的货币理论到 2017 年扩容战争的完整历史画卷。",
    longDescription:
      "这是一个开源中文比特币历史写作项目，致力于用生动叙事展现比特币诞生前后的关键历史时刻。项目包含 23 个章节，涵盖创世纪、初出茅庐、风起云涌、暗潮汹涌、覆灭与分化等多个时期。",
    icon: BookOpen,
    image: "/images/bitcoin-history-bg.jpg",
    stars: 5,
    forks: 0,
    tech: ["HonKit", "GitBook", "Shell", "HTML"],
    features: [
      "23 个章节完整叙事",
      "中英文双语版本",
      "《明朝那些事儿》风格",
      "在线阅读 + PDF 下载",
      "开源社区协作",
    ],
    links: {
      demo: "https://beihaili.github.io/Stories-about-Bitcoin/",
      github: "https://github.com/beihaili/Stories-about-Bitcoin",
    },
    timeline: "1976-2025",
    contributors: 2,
    accent: "orange",
  },
  {
    id: 2,
    title: "Get Started with Web3",
    subtitle: "Web3 入门指南",
    description:
      "现代化的 Web3 学习平台，支持 AI 助教、Web3 钱包集成和互动演示。整合开源社区优质资源，为 Web3 新人提供最直观的入门指南。",
    longDescription:
      "自学入门 Web3 不是一件容易的事。这个项目梳理了最简单直观的小白入门教程，采用 React 19、Vite、Tailwind CSS 等现代技术栈，提供交互式学习体验。",
    icon: Code2,
    image: "/images/web3-project-bg.jpg",
    stars: 585,
    forks: 47,
    tech: ["React 19", "Vite", "Tailwind CSS", "Python", "JavaScript"],
    features: [
      "现代化 React 界面",
      "AI 助教功能",
      "Web3 钱包集成",
      "互动式演示工具",
      "Cyberpunk 风格设计",
      "响应式移动端支持",
    ],
    links: {
      demo: "https://beihaili.github.io/Get-Started-with-Web3/",
      github: "https://github.com/beihaili/Get-Started-with-Web3",
    },
    timeline: "持续更新",
    contributors: 6,
    accent: "cyan",
  },
];

const accentStyles = {
  orange: {
    icon: "bg-[#ff6b2c]/12 text-[#ff8a3d]",
    bullet: "bg-[#ff8a3d]",
    button: "bg-[#ff6b2c] text-white hover:bg-[#ff7a3d]",
    ring: "border-[#ff8a3d]/25",
  },
  cyan: {
    icon: "bg-[#69e7d0]/12 text-[#69e7d0]",
    bullet: "bg-[#69e7d0]",
    button: "bg-[#18bfa7] text-white hover:bg-[#20d4bb]",
    ring: "border-[#69e7d0]/25",
  },
};

export default function Projects() {
  return (
    <div className="site-page">
      <Navigation />

      <main className="flex-1 overflow-hidden">
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-36 md:pb-24">
          <img
            src="/images/web3-tech.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/[0.94] to-background" />
          <div className="container relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <div className="section-kicker mb-5">
                <Layers className="h-4 w-4" />
                开源项目
              </div>
              <h1 className="text-4xl font-black leading-tight md:text-6xl">
                用代码和文字，把复杂技术做成可入口的作品
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                项目不追求堆数量，而是围绕比特币、Web3
                入门和公共知识沉淀，把长期内容做成可持续维护的开源资产。
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container">
            <div className="mx-auto grid max-w-6xl gap-8">
              {projects.map((project, index) => {
                const Icon = project.icon;
                const styles =
                  accentStyles[project.accent as keyof typeof accentStyles];

                return (
                  <article
                    key={project.id}
                    className={`elevated-card overflow-hidden rounded-[2rem] ${styles.ring}`}
                  >
                    <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                      <div
                        className={`relative min-h-[320px] overflow-hidden ${
                          index % 2 === 1 ? "lg:order-2" : ""
                        }`}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/[0.82] via-black/20 to-transparent" />
                        <div className="absolute left-6 right-6 bottom-6">
                          <Badge className="mb-4 rounded-full bg-white/[0.14] text-white hover:bg-white/[0.18]">
                            <Calendar className="mr-1 h-3.5 w-3.5" />
                            {project.timeline}
                          </Badge>
                          <h2 className="text-3xl font-black text-white md:text-4xl">
                            {project.title}
                          </h2>
                          <p className="mt-2 text-white/70">
                            {project.subtitle}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`p-6 md:p-8 ${
                          index % 2 === 1 ? "lg:order-1" : ""
                        }`}
                      >
                        <div className="mb-7 flex items-start gap-4">
                          <div
                            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${styles.icon}`}
                          >
                            <Icon className="h-7 w-7" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-black">
                              {project.description}
                            </h3>
                          </div>
                        </div>

                        <p className="leading-8 text-muted-foreground">
                          {project.longDescription}
                        </p>

                        <div className="mt-7 grid gap-3 sm:grid-cols-3">
                          {[
                            {
                              icon: Star,
                              label: "Stars",
                              value: project.stars,
                            },
                            {
                              icon: GitFork,
                              label: "Forks",
                              value: project.forks,
                            },
                            {
                              icon: Users,
                              label: "贡献者",
                              value: project.contributors,
                            },
                          ].map(item => {
                            const StatIcon = item.icon;
                            return (
                              <div
                                key={item.label}
                                className="rounded-2xl bg-background/60 p-4 ring-1 ring-border/70"
                              >
                                <StatIcon className="mb-2 h-4 w-4 text-primary" />
                                <div className="text-2xl font-black">
                                  {item.value}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {item.label}
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <div className="mt-7">
                          <h4 className="mb-3 text-sm font-black text-muted-foreground">
                            技术栈
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map(tech => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="rounded-full bg-background/50"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mt-7 grid gap-3 sm:grid-cols-2">
                          {project.features.map(feature => (
                            <div
                              key={feature}
                              className="flex items-center gap-3 rounded-2xl bg-background/50 px-4 py-3 text-sm font-medium"
                            >
                              <span
                                className={`h-2 w-2 shrink-0 rounded-full ${styles.bullet}`}
                              />
                              {feature}
                            </div>
                          ))}
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                          <Button
                            className={`rounded-full px-6 ${styles.button}`}
                            asChild
                          >
                            <a
                              href={project.links.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              访问项目
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                          <Button
                            variant="outline"
                            className="rounded-full"
                            asChild
                          >
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              查看源码
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-card/35 py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <div className="section-kicker mb-4">
                <Github className="h-4 w-4" />
                参与贡献
              </div>
              <h2 className="text-3xl font-black md:text-5xl">
                这些项目都欢迎 Issue、PR 和反馈
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                你可以提交修正、补充资料、提出新选题，或者把项目分享给真正需要的人。
              </p>
              <Button size="lg" className="mt-8 rounded-full" asChild>
                <a
                  href="https://github.com/beihaili"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  访问 GitHub
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
