/*
Page: Projects
Design: Detailed project showcase with technical information
- Project cards with hover effects
- Technology stack badges
- Links to live demos and repositories
*/

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen, Code2, Github, Star, GitFork, ExternalLink, Calendar, Users } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "比特币那些事儿",
      subtitle: "Stories about Bitcoin",
      description: "首部中文比特币通史，用《明朝那些事儿》的风格讲述从 1976 年哈耶克的货币理论到 2017 年扩容战争的完整历史画卷。",
      longDescription: "这是一个开源的中文比特币历史写作项目，致力于用生动有趣的叙事方式，为读者展现比特币诞生前后的关键历史时刻。项目包含 23 个章节，涵盖创世纪、初出茅庐、风起云涌、暗潮汹涌、覆灭与分化等多个时期。",
      icon: BookOpen,
      image: "/images/bitcoin-history-bg.png",
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
      color: "primary",
      timeline: "1976-2025",
      contributors: 2,
    },
    {
      id: 2,
      title: "Get Started with Web3",
      subtitle: "Web3 入门指南",
      description: "现代化的 Web3 学习平台，支持 AI 助教、Web3 钱包集成和互动演示。整合开源社区优质资源，为 Web3 新人提供最直观的入门指南。",
      longDescription: "自学入门 Web3 不是一件容易的事，作为一个刚刚入门 Web3 的新人，我梳理了最简单直观的 Web3 小白入门教程。项目采用 React 19、Vite、Tailwind CSS 等现代技术栈，提供交互式学习体验。",
      icon: Code2,
      image: "/images/web3-project-bg.png",
      stars: 561,
      forks: 44,
      tech: ["React 19", "Vite", "Tailwind CSS", "Python", "JavaScript"],
      features: [
        "现代化 React 界面",
        "AI 助教功能 (Gemini)",
        "Web3 钱包集成 (MetaMask)",
        "互动式演示工具",
        "Cyberpunk 风格设计",
        "响应式移动端支持",
      ],
      links: {
        demo: "https://beihaili.github.io/Get-Started-with-Web3/",
        github: "https://github.com/beihaili/Get-Started-with-Web3",
      },
      color: "accent",
      timeline: "持续更新",
      contributors: 6,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Page Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-transparent"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              开源项目
            </h1>
            <p className="text-lg text-muted-foreground">
              用代码和文字传播比特币与 Web3 的理想
            </p>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-12 pb-20">
        <div className="container">
          <div className="space-y-16 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className="overflow-hidden border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Project Image */}
                  <div 
                    className={`relative h-64 md:h-auto bg-cover bg-center ${index % 2 === 1 ? 'md:order-2' : ''}`}
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-transparent"></div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge variant="secondary" className="backdrop-blur-sm">
                        <project.icon className="w-3 h-3 mr-1" />
                        {project.timeline}
                      </Badge>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className={`p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-3xl mb-2 flex items-center gap-3">
                        <project.icon className={`w-8 h-8 text-${project.color}`} />
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {project.subtitle}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.longDescription}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <Star className={`w-4 h-4 text-${project.color}`} />
                          <span className="font-medium">{project.stars}</span>
                          <span className="text-muted-foreground">Stars</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <GitFork className="w-4 h-4" />
                          <span className="font-medium">{project.forks}</span>
                          <span className="text-muted-foreground">Forks</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span className="font-medium">{project.contributors}</span>
                          <span className="text-muted-foreground">贡献者</span>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="text-sm font-semibold mb-2">技术栈</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="text-sm font-semibold mb-2">核心特性</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                          {project.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2">
                              <div className={`w-1 h-1 rounded-full bg-${project.color}`}></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-2">
                        <Button 
                          size="default" 
                          className={`gap-2 ${project.color === 'accent' ? 'bg-accent hover:bg-accent/90' : ''}`}
                          asChild
                        >
                          <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                            访问项目
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button variant="outline" size="default" className="gap-2" asChild>
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                            查看源码
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">
              参与贡献
            </h2>
            <p className="text-lg text-muted-foreground">
              这些项目都是开源的，欢迎任何形式的贡献！
              无论是提交 Issue、Pull Request，还是分享给更多人，
              都是对项目最大的支持。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" variant="default" className="gap-2" asChild>
                <a href="https://github.com/beihaili" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  访问 GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
