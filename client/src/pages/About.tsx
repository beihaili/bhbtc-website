import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BTCDonation from "@/components/BTCDonation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Github,
  Heart,
  Lightbulb,
  Target,
  Twitter,
  Users,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "开源精神",
    description:
      "相信知识应该自由流动，相信协作的力量。通过开源项目，让更多人受益于技术进步。",
  },
  {
    icon: Lightbulb,
    title: "理想主义",
    description:
      "比特币不仅是技术，更是一种关于去中心化、抗审查和个人主权的长期信念。",
  },
  {
    icon: Users,
    title: "教育为本",
    description:
      "降低学习门槛，用通俗易懂的方式讲解复杂概念，让新人可以真正参与进来。",
  },
  {
    icon: Target,
    title: "长期主义",
    description: "不追逐短期热点，专注于能穿越周期的技术、写作和公共知识沉淀。",
  },
];

const timeline = [
  {
    year: "2021",
    title: "进入 Web3 世界",
    description: "开始深入学习比特币和区块链技术，被去中心化理念吸引。",
  },
  {
    year: "2023",
    title: "创建教育项目",
    description: "启动 Get Started with Web3，帮助更多新人从零入门。",
  },
  {
    year: "2024",
    title: "撰写比特币通史",
    description: "开始《比特币那些事儿》，用叙事方式梳理比特币历史。",
  },
  {
    year: "2025",
    title: "深入 Bitcoin Core",
    description:
      "参与 Chaincode Labs BOSS Challenge，系统学习底层协议，向 Bitcoin Contributor 迈进。",
  },
];

const skills = [
  "Bitcoin Core",
  "Taproot / Schnorr",
  "闪电网络",
  "密码学",
  "UTXO 模型",
  "比特币历史研究",
  "技术写作",
  "开源项目管理",
  "React 开发",
  "Web3 教育",
];

export default function About() {
  return (
    <div className="site-page">
      <Navigation />

      <main className="flex-1 overflow-hidden">
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-36 md:pb-24">
          <img
            src="/images/bitcoin-abstract.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/[0.82] via-background/[0.94] to-background" />
          <div className="container relative z-10">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div className="mx-auto w-full max-w-sm lg:mx-0">
                <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-card/80 p-4 shadow-2xl shadow-primary/10 backdrop-blur">
                  <img
                    src="/images/profile-avatar.png"
                    alt="北海"
                    className="aspect-square w-full rounded-[1.5rem] object-cover"
                  />
                  <div className="absolute bottom-7 left-7 rounded-full bg-primary px-4 py-2 text-sm font-black text-primary-foreground shadow-lg">
                    ₿ bhbtc
                  </div>
                </div>
              </div>

              <div>
                <div className="section-kicker mb-5">
                  <Target className="h-4 w-4" />
                  关于我
                </div>
                <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                  从 Bitcoin Holder 到 Bitcoin Contributor
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                  我是北海，参与 Chaincode Labs BOSS Challenge，死磕 Bitcoin
                  Core 底层协议。从 Taproot、Schnorr
                  签名到闪电网络，用代码读懂比特币的每一层设计。
                  坚信代码即信任，相信数学比任何机构都可靠。
                </p>
                <p className="mt-4 max-w-3xl leading-8 text-muted-foreground">
                  通过《比特币那些事儿》和《Get Started with
                  Web3》两个开源项目，我希望用叙事和教程让更多人读懂比特币历史与技术，
                  掌握自己的私钥，成为技术革命的参与者而非旁观者。
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button className="rounded-full" asChild>
                    <a
                      href="https://github.com/beihaili"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" className="rounded-full" asChild>
                    <a
                      href="https://x.com/bhbtc1337"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="mr-2 h-4 w-4" />
                      Twitter
                    </a>
                  </Button>
                  <BTCDonation />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="section-kicker mb-4">
                <Heart className="h-4 w-4" />
                核心价值观
              </div>
              <h2 className="text-3xl font-black md:text-5xl">
                做长期、可信、可被复用的内容
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {values.map(value => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="elevated-card rounded-3xl p-6"
                  >
                    <div className="flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black">{value.title}</h3>
                        <p className="mt-3 leading-7 text-muted-foreground">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-card/35 py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <div className="section-kicker mb-4">
                  <ArrowRight className="h-4 w-4" />
                  我的旅程
                </div>
                <h2 className="text-3xl font-black md:text-5xl">
                  从学习者到贡献者，路径越来越清晰
                </h2>
                <p className="mt-5 leading-8 text-muted-foreground">
                  这不是简历时间线，更像是一个长期学习系统：每一年都把一个新问题拆开，
                  再把拆开的过程写出来、开源出来。
                </p>
              </div>

              <div className="space-y-4">
                {timeline.map(item => (
                  <div
                    key={item.year}
                    className="grid gap-4 rounded-3xl border border-border/60 bg-background/55 p-5 md:grid-cols-[7rem_1fr]"
                  >
                    <div className="text-3xl font-black text-primary">
                      {item.year}
                    </div>
                    <div>
                      <h3 className="text-xl font-black">{item.title}</h3>
                      <p className="mt-2 leading-7 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <div className="section-kicker mb-4">
                <Lightbulb className="h-4 w-4" />
                技能与专长
              </div>
              <h2 className="text-3xl font-black md:text-5xl">
                技术栈围绕比特币、写作和产品化表达展开
              </h2>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {skills.map(skill => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="rounded-full px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
