import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  Download,
  Image,
  MessageCircle,
  Sparkles,
  Wand2,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const benefits = [
  "AI 生图提示词模板",
  "小红书可直接发布的案例思路",
  "适合普通人上手的操作步骤",
  "持续更新的 AI 工具玩法",
];

const faceReadingPrompt = `请根据我上传的人像照片，生成一张竖版东方玄学风格的「面相玄学分析报告」海报。

设计要求：
- 画面比例：竖版海报，适合小红书发布。
- 视觉风格：古典羊皮纸背景、东方美学、宋代卷轴、玄学分析报告、金色标注线、红色印章、细致信息图。
- 主体：保留人物真实五官气质，在脸部周围加入 01-12 的金色圆形编号标记，并用虚线连接到对应面部区域。
- 标题：面相玄学分析报告。
- 副标题：你的先天特质与未来趋势解读。
- 顶部信息栏包含：分析对象、面相类型、五行倾向、分析维度。
- 右侧做「面相十二宫解析」列表，每一项包含：特征、解析、趋势、建议。
- 底部加入「五行能量分析」「性格与天赋」「综合评分」三个模块。
- 色彩：米黄色、棕色、金色、墨黑、朱红印章色，整体高级、神秘、信息密度高。
- 字体感觉：标题用中文书法/宋体风，正文用清晰中文排版。
- 输出效果：像一张完整的 AI 面相分析报告，不要杂乱，不要低清晰度，不要乱码。`;

const palmReadingPrompt = `请根据我上传的手掌照片，生成一张竖版东方玄学风格的「手相玄学分析报告」海报。

设计要求：
- 画面比例：竖版海报，适合小红书发布。
- 视觉风格：古典羊皮纸背景、东方智慧、掌中乾坤、传统中式边框、云纹、竹子、八卦/阴阳淡纹、红色印章。
- 主体：保留真实手掌照片，把手掌放在画面中央，掌心清晰可见。
- 在掌纹上叠加彩色分析线，包括生命线、智慧线、感情线、事业线、太阳线、财运线、健康线。
- 加入 01-13 的圆形编号标记，并用虚线/箭头连接到对应手指、掌丘、掌纹和手腕纹。
- 标题：手相玄学分析报告。
- 副标题：你的先天特质与未来趋势解读。
- 顶部信息栏包含：分析对象、手型、五行倾向、分析维度。
- 左侧加入「掌纹总览」图例，标明不同颜色对应的掌纹类型。
- 右侧加入 13 条手相观察，每条包含：特征、趋势、建议。
- 底部加入「五行能量分布」「性格特质」「综合评分」「近期趋势与提醒」模块。
- 色彩：米黄色、棕色、金色、墨黑、朱红印章色，搭配少量彩色掌纹标注。
- 字体感觉：标题用中文书法/宋体风，正文用清晰中文排版。
- 输出效果：像一张完整的 AI 手相分析报告，信息丰富但布局有序，不要乱码，不要低清晰度。`;

const featuredCases = [
  {
    title: "AI 面相玄学分析报告",
    label: "上传人像照片",
    image: "/images/ai-face-reading-effect.jpg",
    alt: "AI 面相玄学分析报告效果图",
    desc: "把普通人像照生成一张东方玄学风格的信息图海报，适合做小红书封面和互动内容。",
    highlights: ["视觉冲击强", "一张照片即可尝试", "适合评论区领取提示词"],
  },
  {
    title: "AI 手相玄学分析报告",
    label: "上传手掌照片",
    image: "/images/ai-palm-reading-effect.jpg",
    alt: "AI 手相玄学分析报告效果图",
    desc: "把手掌照片生成手相分析报告，叠加掌纹线、编号标注和中式报告排版。",
    highlights: ["玩法新奇", "适合朋友之间转发", "提示词可直接复用"],
  },
];

const promptLibrary = [
  {
    title: "东方玄学面相报告提示词",
    usage: "上传一张清晰人像图，再复制提示词生成信息图海报。",
    prompt: faceReadingPrompt,
  },
  {
    title: "东方玄学手相报告提示词",
    usage: "上传一张掌心清晰、光线充足的手掌图，再复制提示词生成手相分析海报。",
    prompt: palmReadingPrompt,
  },
];

const contentTypes = [
  "AI 玄学报告",
  "AI 图像改造",
  "AI 图鉴百科",
  "AI 情绪价值",
  "AI 副业效率",
];

const steps = ["扫码关注", "私信关键词：AI", "领取提示词", "照着案例练习"];

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
                  北海 AI版 · 给普通人的 AI 玩法资料库
                </div>

                <div className="space-y-5">
                  <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                    收藏这些 AI 玩法，
                    <span className="block bg-gradient-to-r from-[#ff2442] via-[#ff7a59] to-[#ffb86c] bg-clip-text text-transparent">
                      直接照着做出作品
                    </span>
                  </h1>
                  <p className="max-w-2xl text-base leading-8 text-[#6f5751] md:text-lg dark:text-[#dec8c0]">
                    这里整理我正在实测的 AI 工具用法、提示词模板和小红书案例。
                    不讲复杂概念，只放普通人能看懂、能复制、能马上试的内容。
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    size="lg"
                    className="h-12 rounded-full bg-[#ff2442] px-7 text-base font-bold text-white shadow-lg shadow-[#ff2442]/25 hover:bg-[#e51d39]"
                    asChild
                  >
                    <a href="#cases">
                      看案例和提示词
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-full border-[#ff2442]/25 bg-white/70 px-7 text-base font-bold text-[#ff2442] hover:bg-[#fff0f2] dark:bg-white/10 dark:hover:bg-white/15"
                    asChild
                  >
                    <a href="#red-note">扫码领取资料</a>
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
                        ，领取提示词和实战资料。
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="cases" className="py-14 md:py-20">
          <div className="container">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#ff2442]/10 px-3 py-1 text-sm font-bold text-[#ff2442]">
                <Image className="h-4 w-4" />
                精选 AI 案例
              </div>
              <h2 className="text-3xl font-black md:text-4xl">
                先从这两个玄学报告玩法开始
              </h2>
              <p className="mt-4 text-[#7a625c] dark:text-[#dec8c0]">
                上传一张照片，复制提示词，就能生成适合小红书发布的信息图海报。
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {featuredCases.map(item => (
                <Card
                  key={item.title}
                  className="overflow-hidden rounded-[2rem] border-[#ffd7df] bg-white/90 shadow-xl shadow-[#ff2442]/10 dark:border-white/10 dark:bg-white/10"
                >
                  <CardContent className="p-3 md:p-4">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full rounded-[1.5rem] object-cover"
                    />
                    <div className="space-y-4 p-4 md:p-5">
                      <div className="inline-flex rounded-full bg-[#ff2442]/10 px-3 py-1 text-xs font-bold text-[#ff2442]">
                        {item.label}
                      </div>
                      <h3 className="text-2xl font-black">{item.title}</h3>
                      <p className="leading-7 text-[#765f59] dark:text-[#dec8c0]">
                        {item.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map(highlight => (
                          <span
                            key={highlight}
                            className="rounded-full bg-[#fff8f5] px-3 py-1 text-xs font-bold text-[#5b4540] ring-1 ring-[#ff2442]/10 dark:bg-white/5 dark:text-[#fff7f4]"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#ff2442]/10 px-3 py-1 text-sm font-bold text-[#ff2442]">
                <BookOpenCheck className="h-4 w-4" />
                资料会继续补充
              </div>
              <h2 className="text-3xl font-black md:text-4xl">
                后面会更新更多 AI 玩法
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {contentTypes.map(item => (
                <div
                  key={item}
                  className="rounded-3xl bg-white/85 p-5 text-center text-base font-black text-[#ff2442] shadow-sm ring-1 ring-[#ff2442]/10 dark:bg-white/10"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#ff2442]/10 px-3 py-1 text-sm font-bold text-[#ff2442]">
                <Sparkles className="h-4 w-4" />
                可复制提示词
              </div>
              <h2 className="text-3xl font-black md:text-4xl">
                复制下面提示词，上传照片就能试
              </h2>
              <p className="mt-4 text-[#7a625c] dark:text-[#dec8c0]">
                如果生成结果文字不够清晰，可以多生成几次，选择排版最稳定的一张。
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {promptLibrary.map(item => (
                <Card
                  key={item.title}
                  className="rounded-[2rem] border-[#ffd7df] bg-white/90 shadow-sm dark:border-white/10 dark:bg-white/10"
                >
                  <CardContent className="space-y-5 p-6 md:p-8">
                    <div>
                      <div className="mb-3 inline-flex rounded-full bg-[#ff2442] px-3 py-1 text-xs font-bold text-white">
                        可直接复制使用
                      </div>
                      <h3 className="text-2xl font-black">{item.title}</h3>
                      <p className="mt-3 leading-7 text-[#765f59] dark:text-[#dec8c0]">
                        {item.usage}
                      </p>
                    </div>

                    <pre className="max-h-[560px] overflow-auto whitespace-pre-wrap rounded-3xl bg-[#2b1b18] p-5 text-left text-sm leading-7 text-[#fff7f4] shadow-inner">
                      {item.prompt}
                    </pre>
                  </CardContent>
                </Card>
              ))}
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
                      4 步领取 AI 资料包
                    </h2>
                    <p className="mt-4 leading-8 text-[#765f59] dark:text-[#dec8c0]">
                      关注「北海
                      AI版」，私信关键词「AI」，领取提示词、工具清单和更多实战案例。
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
              <h2 className="text-3xl font-black">想要更多 AI 玩法？</h2>
              <p className="mx-auto mt-4 max-w-xl leading-8 text-[#765f59] dark:text-[#dec8c0]">
                扫码关注「北海 AI版」，我会持续整理普通人也能上手的 AI
                工具、提示词和案例。
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
