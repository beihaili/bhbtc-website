import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BTCDonation from "@/components/BTCDonation";
import { Github, Twitter } from "lucide-react";

const values = [
  {
    title: "开源精神",
    description:
      "相信知识应该自由流动，相信协作的力量。通过开源项目，让更多人受益于技术进步。",
  },
  {
    title: "理想主义",
    description:
      "比特币不仅是技术，更是一种关于去中心化、抗审查和个人主权的长期信念。",
  },
  {
    title: "教育为本",
    description:
      "降低学习门槛，用通俗易懂的方式讲解复杂概念，让新人可以真正参与进来。",
  },
  {
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

      <main className="flex-1">
        <header className="border-b border-border pt-24 pb-12 md:pt-28 md:pb-16">
          <div className="container grid gap-10 md:grid-cols-[12rem_1fr] md:items-start">
            <img
              src="/images/profile-avatar.png"
              alt="北海"
              className="h-36 w-36 rounded-sm object-cover md:h-48 md:w-48"
            />
            <div className="max-w-[40rem]">
              <p className="text-sm text-primary">关于</p>
              <h1 className="page-title mt-3">
                从 Bitcoin Holder 到 Bitcoin Contributor
              </h1>
              <p className="mt-6 leading-8 text-muted-foreground">
                我是北海，参与 Chaincode Labs BOSS Challenge，死磕 Bitcoin Core
                底层协议。从 Taproot、Schnorr
                签名到闪电网络，用代码读懂比特币的每一层设计。坚信代码即信任，相信数学比任何机构都可靠。
              </p>
              <p className="mt-4 leading-8 text-muted-foreground">
                通过《比特币那些事儿》和《Get Started with
                Web3》两个开源项目，我希望用叙事和教程让更多人读懂比特币历史与技术，掌握自己的私钥，成为技术革命的参与者而非旁观者。
              </p>
              <p className="mt-4 leading-8 text-muted-foreground">
                这个站按三条线来读：比特币、写作、AI。AI
                页放的是实验和工具玩法，包括一批仍完整保留的小红书提示词。
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
                <a
                  href="https://github.com/beihaili"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 underline underline-offset-4"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="https://x.com/bhbtc1337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 underline underline-offset-4"
                >
                  <Twitter className="h-4 w-4" />
                  Twitter
                </a>
                <BTCDonation />
              </div>
            </div>
          </div>
        </header>

        <section className="border-b border-border py-12 md:py-16">
          <div className="container">
            <h2 className="font-serif text-2xl">
              做长期、可信、可被复用的内容
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {values.map(value => (
                <article key={value.title} className="max-w-[36rem]">
                  <h3 className="font-serif text-xl">{value.title}</h3>
                  <p className="mt-2 leading-8 text-muted-foreground">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border py-12 md:py-16">
          <div className="container grid gap-8 md:grid-cols-[16rem_1fr]">
            <div>
              <h2 className="font-serif text-2xl">路径</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                这不是简历时间线，更像是一个长期学习系统：每一年都把一个新问题拆开，再把拆开的过程写出来、开源出来。
              </p>
            </div>
            <ol className="divide-y divide-border border-y border-border">
              {timeline.map(item => (
                <li
                  key={item.year}
                  className="grid gap-2 py-5 sm:grid-cols-[5rem_1fr]"
                >
                  <p className="font-serif text-xl text-primary">{item.year}</p>
                  <div>
                    <h3 className="font-serif text-lg">{item.title}</h3>
                    <p className="mt-1 leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <h2 className="font-serif text-2xl">常写、常读的题目</h2>
            <ul className="mt-6 flex max-w-[40rem] flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
              {skills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
