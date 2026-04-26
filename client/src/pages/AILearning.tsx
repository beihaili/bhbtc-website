import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpenCheck,
  Bot,
  CheckCircle2,
  ClipboardList,
  Download,
  MessageCircle,
  Sparkles,
  Wand2,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const benefits = [
  "ChatGPT / DeepSeek 常用提示词模板",
  "小红书 AI 选题、标题、封面工作流",
  "AI 写文案、做图片、剪视频工具清单",
  "普通人可复制的 AI 副业入门路径",
];

const lessons = [
  {
    icon: Bot,
    title: "AI 工具入门",
    desc: "从 ChatGPT、DeepSeek、Claude 到常用插件，先把工具用顺手。",
  },
  {
    icon: Wand2,
    title: "内容创作提效",
    desc: "用 AI 做选题、笔记、脚本、封面和评论回复，适合小红书运营。",
  },
  {
    icon: ClipboardList,
    title: "副业实战清单",
    desc: "整理适合普通人的 AI 赚钱案例，不画饼，只做能执行的小步骤。",
  },
];

const steps = ["扫码关注", "私信关键词：AI", "领取资料包", "跟着清单练习"];

export default function AILearning() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fff8f5] text-[#2b1b18] dark:bg-[#160f12] dark:text-[#fff7f4]">
      <Navigation />

      <main className="flex-1 overflow-hidden">
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-[#ff6b8a]/25 blur-3xl" />
            <div className="absolute right-[-10%] top-36 h-80 w-80 rounded-full bg-[#ffd1a6]/50 blur-3xl dark:bg-[#ff7a59]/20" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fff8f5] to-transparent dark:from-[#160f12]" />
          </div>

          <div className="container">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <motion.div
                variants={fadeUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5 }}
                className="space-y-7"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-[#ff4d6d]/20 bg-white/80 px-4 py-2 text-sm font-medium text-[#d92345] shadow-sm backdrop-blur dark:bg-white/10 dark:text-[#ff9aad]">
                  <Sparkles className="h-4 w-4" />
                  给普通人的 AI 学习资料库
                </div>

                <div className="space-y-5">
                  <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                    零基础学 AI，
                    <span className="block bg-gradient-to-r from-[#ff2442] via-[#ff7a59] to-[#ffb86c] bg-clip-text text-transparent">
                      把工具变成赚钱能力
                    </span>
                  </h1>
                  <p className="max-w-2xl text-base leading-8 text-[#6f5751] md:text-lg dark:text-[#dec8c0]">
                    我是「北海 AI版」，正在尝试把 AI 变成赚钱工具的普通人。
                    这里整理了 AI
                    工具、提示词、小红书内容创作和副业实战资料，适合从 0
                    开始跟着做。
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    size="lg"
                    className="h-12 rounded-full bg-[#ff2442] px-7 text-base font-bold text-white shadow-lg shadow-[#ff2442]/25 hover:bg-[#e51d39]"
                    asChild
                  >
                    <a href="#red-note">
                      扫码领取资料
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-full border-[#ff2442]/25 bg-white/70 px-7 text-base font-bold text-[#ff2442] hover:bg-[#fff0f2] dark:bg-white/10 dark:hover:bg-white/15"
                    asChild
                  >
                    <a href="#content">先看看有什么</a>
                  </Button>
                </div>

                <div className="grid max-w-2xl gap-3 sm:grid-cols-2">
                  {benefits.map(item => (
                    <div
                      key={item}
                      className="flex items-start gap-2 rounded-2xl bg-white/75 p-3 text-sm text-[#5b4540] shadow-sm ring-1 ring-[#ff2442]/10 backdrop-blur dark:bg-white/10 dark:text-[#f5ded7]"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#ff2442]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5, delay: 0.15 }}
                id="red-note"
                className="relative mx-auto w-full max-w-md"
              >
                <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#ff2442]/20 via-[#ffd1dc]/40 to-[#ffe5b4]/40 blur-2xl" />
                <Card className="relative overflow-hidden rounded-[2rem] border-white/70 bg-white p-3 shadow-2xl shadow-[#ff2442]/10 dark:border-white/10 dark:bg-[#23161b]">
                  <CardContent className="space-y-5 p-3">
                    <div className="overflow-hidden rounded-[1.5rem] border border-[#f2e1dc] bg-[#fff8f5] dark:border-white/10 dark:bg-white/5">
                      <img
                        src="/images/xiaohongshu-ai-qr.jpg"
                        alt="北海 AI版 小红书二维码"
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="space-y-3 px-1 pb-1 text-center">
                      <div className="inline-flex items-center rounded-full bg-[#ff2442] px-4 py-1.5 text-sm font-bold text-white">
                        小红书号：6735187043
                      </div>
                      <p className="text-sm leading-6 text-[#6f5751] dark:text-[#dec8c0]">
                        扫码找到我，关注后私信
                        <span className="font-bold text-[#ff2442]">「AI」</span>
                        ，领取入门资料包。
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="content" className="py-14 md:py-20">
          <div className="container">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#ff2442]/10 px-3 py-1 text-sm font-bold text-[#ff2442]">
                <BookOpenCheck className="h-4 w-4" />
                资料包内容
              </div>
              <h2 className="text-3xl font-black md:text-4xl">
                不用到处搜，从这 3 件事开始
              </h2>
              <p className="mt-4 text-[#7a625c] dark:text-[#dec8c0]">
                页面不是卖焦虑，而是把 AI 学习拆成可以当天行动的小清单。
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {lessons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <Card className="h-full rounded-3xl border-[#ffd7df] bg-white/85 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ff2442]/10 dark:border-white/10 dark:bg-white/10">
                      <CardContent className="space-y-5 p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff2442]/10 text-[#ff2442]">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="mb-2 text-xl font-black">
                            {item.title}
                          </h3>
                          <p className="leading-7 text-[#765f59] dark:text-[#dec8c0]">
                            {item.desc}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container">
            <div className="rounded-[2rem] bg-gradient-to-br from-[#ff2442] via-[#ff6b8a] to-[#ffb86c] p-1 shadow-2xl shadow-[#ff2442]/20">
              <div className="rounded-[1.8rem] bg-white/92 p-6 md:p-10 dark:bg-[#21151a]/95">
                <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#ff2442]/10 px-3 py-1 text-sm font-bold text-[#ff2442]">
                      <Download className="h-4 w-4" />
                      领取方式
                    </div>
                    <h2 className="text-3xl font-black md:text-4xl">
                      4 步开始你的 AI 学习
                    </h2>
                    <p className="mt-4 leading-8 text-[#765f59] dark:text-[#dec8c0]">
                      收藏这个页面，扫码关注小红书。资料会持续更新，适合边学边做、边做边变现。
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-4">
                    {steps.map((step, index) => (
                      <div
                        key={step}
                        className="rounded-3xl bg-[#fff8f5] p-4 text-center ring-1 ring-[#ff2442]/10 dark:bg-white/10"
                      >
                        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#ff2442] text-sm font-black text-white">
                          {index + 1}
                        </div>
                        <div className="text-sm font-bold">{step}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 pt-8">
          <div className="container">
            <div className="mx-auto max-w-3xl rounded-[2rem] border border-[#ffd7df] bg-white/85 p-8 text-center shadow-sm dark:border-white/10 dark:bg-white/10">
              <MessageCircle className="mx-auto mb-4 h-10 w-10 text-[#ff2442]" />
              <h2 className="text-3xl font-black">
                想系统学 AI？先从一份资料包开始
              </h2>
              <p className="mx-auto mt-4 max-w-xl leading-8 text-[#765f59] dark:text-[#dec8c0]">
                评论区来的朋友，可以直接扫码关注「北海
                AI版」，我会把实用工具和实战案例持续整理出来。
              </p>
              <Button
                size="lg"
                className="mt-7 h-12 rounded-full bg-[#ff2442] px-8 text-base font-bold text-white shadow-lg shadow-[#ff2442]/25 hover:bg-[#e51d39]"
                asChild
              >
                <a href="#red-note">去扫码关注</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
