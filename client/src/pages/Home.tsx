import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Code2,
  ExternalLink,
  Github,
  GitFork,
  RadioTower,
  ShieldCheck,
  Sparkles,
  Star,
  Terminal,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const stats = [
  { value: "23", label: "比特币通史章节" },
  { value: "600+", label: "开源项目 Star" },
  { value: "BOSS", label: "Bitcoin Core 训练" },
];

const featuredProjects = [
  {
    title: "比特币那些事儿",
    description: "用叙事写清楚比特币从货币理论、密码朋克到扩容战争的完整脉络。",
    image: "/images/bitcoin-history-bg.jpg",
    icon: BookOpen,
    meta: "中文比特币通史 · 1976-2025",
    stars: 5,
    forks: 0,
    href: "https://beihaili.github.io/Stories-about-Bitcoin/",
    repo: "https://github.com/beihaili/Stories-about-Bitcoin",
  },
  {
    title: "Get Started with Web3",
    description:
      "把 Web3 学习路径、AI 助教、钱包集成和互动演示整理成现代化入门平台。",
    image: "/images/web3-project-bg.jpg",
    icon: Code2,
    meta: "React 学习平台 · Web3 入门",
    stars: 585,
    forks: 47,
    href: "https://beihaili.github.io/Get-Started-with-Web3/",
    repo: "https://github.com/beihaili/Get-Started-with-Web3",
  },
];

const lanes = [
  {
    icon: ShieldCheck,
    title: "Bitcoin Core",
    text: "沿着 UTXO、Taproot、闪电网络继续往底层协议推进。",
  },
  {
    icon: Terminal,
    title: "开源写作",
    text: "把复杂技术写成普通人能读完、能复述、能行动的内容。",
  },
  {
    icon: RadioTower,
    title: "AI 内容实验",
    text: "把优质 X 灵感改造成小红书案例库，持续测试传播效率。",
  },
];

export default function Home() {
  return (
    <div className="site-page">
      <Navigation />

      <main className="flex-1 overflow-hidden">
        <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-16">
          <img
            src="/images/blockchain-network.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-55"
          />
          <div className="hero-image-overlay absolute inset-0" />

          <div className="container relative z-10 py-20 md:py-28">
            <div className="max-w-4xl">
              <motion.div
                variants={fadeUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5 }}
                className="section-kicker mb-7 bg-black/25 text-[#ffb16a] dark:border-primary/35"
              >
                <Sparkles className="h-4 w-4" />
                北海 · bhbtc
              </motion.div>

              <motion.h1
                variants={fadeUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5, delay: 0.08 }}
                className="max-w-3xl text-5xl font-black leading-[1.04] text-white md:text-7xl"
              >
                写代码、写历史，
                <span className="block bg-gradient-to-r from-[#ff8a3d] via-[#ff4d6d] to-[#7be7d5] bg-clip-text text-transparent">
                  把比特币讲清楚
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5, delay: 0.16 }}
                className="mt-7 max-w-2xl text-base leading-8 text-white/[0.78] md:text-lg"
              >
                正在从 Bitcoin Holder 进化为 Bitcoin Contributor。参与 Chaincode
                Labs BOSS Challenge，死磕 Bitcoin Core 底层协议，
                同时用开源教程、技术写作和 AI 内容实验降低理解门槛。
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5, delay: 0.24 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <Button
                  size="lg"
                  className="h-12 rounded-full bg-[#ff6b2c] px-7 text-base font-bold text-white shadow-xl shadow-[#ff6b2c]/25 hover:bg-[#ff7a3d]"
                  asChild
                >
                  <Link href="/projects">
                    看项目
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-white/20 bg-white/10 px-7 text-base font-bold text-white hover:bg-white/[0.16]"
                  asChild
                >
                  <Link href="/ai">进入 AI 案例库</Link>
                </Button>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5, delay: 0.32 }}
                className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3"
              >
                {stats.map(item => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/[0.12] bg-white/[0.09] p-4 backdrop-blur"
                  >
                    <div className="text-2xl font-black text-white">
                      {item.value}
                    </div>
                    <div className="mt-1 text-sm text-white/[0.62]">
                      {item.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="section-kicker mb-4">
                <Terminal className="h-4 w-4" />
                当前主线
              </div>
              <h2 className="text-3xl font-black md:text-5xl">
                三条线并行推进
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                技术学习、开源表达和内容实验不是三件分散的事，它们共同指向一个目标：
                把复杂系统变成更多人能理解、能参与的公共知识。
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {lanes.map((lane, index) => {
                const Icon = lane.icon;
                return (
                  <div
                    key={lane.title}
                    className="elevated-card rounded-3xl p-6"
                  >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-black">{lane.title}</h3>
                    <p className="mt-3 leading-7 text-muted-foreground">
                      {lane.text}
                    </p>
                    <div className="mt-5 text-sm font-black text-primary">
                      0{index + 1}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-card/35 py-20 md:py-28">
          <div className="container">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <div className="section-kicker mb-4">
                  <BookOpen className="h-4 w-4" />
                  代表项目
                </div>
                <h2 className="text-3xl font-black md:text-5xl">
                  用开源项目承载长期内容
                </h2>
              </div>
              <Button
                variant="outline"
                className="rounded-full border-primary/25 bg-background/60"
                asChild
              >
                <Link href="/projects">
                  查看全部
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {featuredProjects.map(project => {
                const Icon = project.icon;
                return (
                  <article
                    key={project.title}
                    className="elevated-card group overflow-hidden rounded-3xl"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/[0.78] via-black/15 to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5">
                        <div className="mb-3 inline-flex items-center rounded-full bg-white/[0.14] px-3 py-1 text-sm font-bold text-white backdrop-blur">
                          {project.meta}
                        </div>
                        <h3 className="flex items-center gap-3 text-2xl font-black text-white">
                          <Icon className="h-6 w-6 text-[#ffb16a]" />
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <div className="space-y-5 p-6">
                      <p className="leading-7 text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Star className="h-4 w-4 text-primary" />
                          {project.stars}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <GitFork className="h-4 w-4" />
                          {project.forks}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" className="rounded-full" asChild>
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            打开项目
                            <ExternalLink className="ml-2 h-3.5 w-3.5" />
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-full"
                          asChild
                        >
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-3.5 w-3.5" />
                            源码
                          </a>
                        </Button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container">
            <div className="relative overflow-hidden rounded-[2rem] border border-primary/25 bg-[#120b0d] p-8 text-white shadow-2xl shadow-primary/10 md:p-12">
              <img
                src="/images/bitcoin-abstract.jpg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#120b0d] via-[#120b0d]/[0.88] to-[#120b0d]/70" />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
                <div>
                  <div className="section-kicker mb-4 border-white/[0.15] bg-white/10 text-[#ffb16a]">
                    <ShieldCheck className="h-4 w-4" />
                    长期主义
                  </div>
                  <h2 className="text-3xl font-black md:text-5xl">
                    不追逐热闹，持续把底层问题搞懂
                  </h2>
                  <p className="mt-5 max-w-2xl leading-8 text-white/[0.72]">
                    从钱包怎么凑
                    UTXO、闪电支付怎么路由，到为什么自托管才是真正拥有，
                    我更关心那些能穿越周期的问题。
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {["代码即信任", "私钥即主权", "开源即协作"].map(item => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/[0.12] bg-white/10 px-5 py-4 text-lg font-black backdrop-blur"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
