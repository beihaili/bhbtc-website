/*
Page: About
Design: Personal introduction with timeline and values
- Profile section with avatar
- Timeline of journey
- Core values and beliefs
*/

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BTCDonation from "@/components/BTCDonation";
import { Heart, Users, Lightbulb, Target, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "开源精神",
      description: "相信知识应该自由流动，相信协作的力量。通过开源项目，让更多人受益于技术的进步。",
    },
    {
      icon: Lightbulb,
      title: "理想主义",
      description: "比特币不仅是技术，更是一种理想。去中心化、抗审查、个人主权，这些理念值得传播。",
    },
    {
      icon: Users,
      title: "教育为本",
      description: "降低学习门槛，用通俗易懂的方式讲解复杂概念。让每个人都能理解并参与到这场革命中。",
    },
    {
      icon: Target,
      title: "长期主义",
      description: "币本位思维，坚持长期价值。不追逐短期热点，专注于真正有意义的事情。",
    },
  ];

  const timeline = [
    {
      year: "2021",
      title: "进入 Web3 世界",
      description: "开始深入学习比特币和区块链技术，被去中心化的理念深深吸引。",
    },
    {
      year: "2023",
      title: "创建教育项目",
      description: "启动《Get Started with Web3》项目，帮助更多新人入门 Web3。",
    },
    {
      year: "2024",
      title: "撰写比特币通史",
      description: "开始《比特币那些事儿》的写作，用叙事的方式讲述比特币历史。",
    },
    {
      year: "2025",
      title: "持续贡献",
      description: "继续完善项目，扩大影响力，让更多人理解比特币的价值。",
    },
  ];

  const skills = [
    "比特币历史研究",
    "Web3 技术教育",
    "技术写作",
    "开源项目管理",
    "React 开发",
    "区块链技术",
    "密码学基础",
    "社区运营",
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
              关于我
            </h1>
            <p className="text-lg text-muted-foreground">
              币本位 · 比特币与 Web3 的教育者与传播者
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border/50">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/50 shadow-lg shadow-primary/20">
                        <img 
                          src="/images/profile-avatar.png" 
                          alt="北海" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-3xl">₿</span>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 space-y-6 text-center md:text-left">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">北海 (bhbtc)</h2>
                      <p className="text-lg text-muted-foreground">比特币与 Web3 教育者</p>
                    </div>

                    <p className="text-base text-muted-foreground leading-relaxed">
                      我是北海，一个坚定的比特币信仰者和 Web3 教育者。
                      从 2021 年开始深入研究比特币和区块链技术，被其背后的去中心化理念和密码朋克精神深深吸引。
                      我相信技术可以改变世界，相信开源和协作的力量，
                      更相信每个人都应该拥有掌握自己财富和数据的权利。
                    </p>

                    <p className="text-base text-muted-foreground leading-relaxed">
                      通过《比特币那些事儿》和《Get Started with Web3》两个开源项目，
                      我希望用生动的叙事和清晰的教程，让更多人理解比特币的历史价值，
                      掌握 Web3 的核心技能，成为这场技术革命的参与者而非旁观者。
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-3 justify-center md:justify-start pt-2">
                      <Button variant="outline" size="sm" className="gap-2" asChild>
                        <a href="https://github.com/beihaili" target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2" asChild>
                        <a href="https://x.com/bhbtc1337" target="_blank" rel="noopener noreferrer">
                          <Twitter className="w-4 h-4" />
                          Twitter
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">核心价值观</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value) => (
                <Card key={value.title} className="border-border/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 bg-card/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">我的旅程</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={item.year} className="relative pl-20">
                    {/* Year Badge */}
                    <div className="absolute left-0 w-16 h-16 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{item.year}</span>
                    </div>

                    {/* Content */}
                    <Card className="border-border/50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">技能与专长</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="text-sm px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">保持联系</h2>
            <p className="text-lg text-muted-foreground">
              如果你对比特币、Web3 或我的项目感兴趣，
              欢迎在 GitHub 或 Twitter 上关注我，一起交流学习。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" variant="default" className="gap-2" asChild>
                <a href="https://github.com/beihaili" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="https://x.com/bhbtc1337" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5" />
                  Twitter
                </a>
              </Button>
              <BTCDonation />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
