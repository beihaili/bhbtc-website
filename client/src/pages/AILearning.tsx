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
  FileText,
  Flame,
  MessageCircle,
  Send,
  Sparkles,
  Wand2,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const benefits = [
  "从 X 优质博主里筛 AI 灵感",
  "改造成小红书标题、封面和图文结构",
  "沉淀可复制提示词和操作步骤",
  "每次新增案例都更新到这个页面",
];

const workflow = [
  {
    icon: Send,
    title: "你丢素材",
    desc: "X 链接、截图、原文都可以，不用提前整理。",
  },
  {
    icon: Bot,
    title: "我做判断",
    desc: "提炼原帖核心，判断普通人是否看得懂、能不能复刻、有没有小红书传播点。",
  },
  {
    icon: Wand2,
    title: "改成选题",
    desc: "输出标题、封面文案、正文结构、提示词、评论区引导和标签。",
  },
  {
    icon: ClipboardList,
    title: "更新网页",
    desc: "把值得沉淀的案例追加到这里，慢慢变成「北海 AI版」选题库。",
  },
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

const seedCases = [
  {
    id: "ai-face-palm-reading",
    date: "已上线",
    source: "X 灵感改造 / GPT Image 2 玄学报告玩法",
    verdict: "值得做",
    category: "AI 玄学报告",
    title: "GPT Image 2 玄学分析：面相/手相报告",
    originalCore:
      "把用户上传的人像或手掌照片，改造成东方玄学风格的信息图报告，让结果既像可晒图的海报，又像一份私人分析。",
    xiaohongshuHook:
      "玄学自带讨论度，AI 生图自带新鲜感，用户只需要一张照片就能复刻，评论区天然会问「提示词怎么写」。",
    titleIdeas: [
      "我用 AI 给自己做了一份面相报告，准到离谱",
      "GPT Image 2 这个玄学玩法，小红书会疯传",
      "上传一张照片，AI 直接生成你的命运分析报告",
      "别只会修图了，AI 现在能做手相/面相海报",
      "这个 AI 提示词太适合评论区引流了",
    ],
    coverCopy: {
      main: "AI 给我算了一下面相",
      sub: "附同款提示词，上传照片就能做",
    },
    postStructure: [
      "第 1 张：最终效果图 + 强钩子标题",
      "第 2 张：原图和 AI 报告对比",
      "第 3 张：这个玩法为什么容易火",
      "第 4 张：面相报告提示词",
      "第 5 张：手相报告提示词",
      "第 6 张：避坑说明：图片清晰、文字不要太小、不要迷信",
      "第 7 张：评论区引导领取完整版提示词",
    ],
    promptOrWorkflow:
      "上传清晰人像/手掌图 → 复制对应提示词 → 生成 3:4 竖版海报 → 挑选文字最清晰的一张 → 加小红书标题和说明。",
    cta: "想要同款提示词，可以评论「玄学」，我发你面相+手相两个版本。",
    tags: ["AI教程", "小红书运营", "GPTImage", "AI生图", "玄学", "提示词"],
  },
];

const promptLibrary = [
  {
    title: "东方玄学面相报告提示词",
    image: "/images/ai-face-reading-effect.jpg",
    alt: "AI 面相玄学分析报告效果图",
    usage: "上传一张清晰人像图，再复制提示词生成信息图海报。",
    prompt: faceReadingPrompt,
  },
  {
    title: "东方玄学手相报告提示词",
    image: "/images/ai-palm-reading-effect.jpg",
    alt: "AI 手相玄学分析报告效果图",
    usage: "上传一张掌心清晰、光线充足的手掌图，再复制提示词生成手相分析海报。",
    prompt: palmReadingPrompt,
  },
];

const categories = [
  {
    name: "AI 玄学报告",
    desc: "手相、面相、星盘、塔罗、人格报告，负责点击和评论互动。",
  },
  {
    name: "AI 图像玩法",
    desc: "GPT Image、Midjourney、Flux 的视觉案例，适合做封面对比。",
  },
  {
    name: "情绪价值内容",
    desc: "人生剧本、未来来信、年度关键词、恋爱人格，适合收藏转发。",
  },
  {
    name: "图鉴百科系列",
    desc: "万物图鉴、食物的一生、宠物百科，适合做长期栏目。",
  },
  {
    name: "副业效率案例",
    desc: "用 AI 做封面、资料包、海报、脚本和自动化工作流。",
  },
];

const steps = ["发来 X 链接/截图", "提炼爆点", "改成小红书案例", "追加到网页"];

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
                  北海 AI版 · AI 爆款案例库
                </div>

                <div className="space-y-5">
                  <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                    从 X 挖 AI 灵感，
                    <span className="block bg-gradient-to-r from-[#ff2442] via-[#ff7a59] to-[#ffb86c] bg-clip-text text-transparent">
                      改造成小红书可复制案例
                    </span>
                  </h1>
                  <p className="max-w-2xl text-base leading-8 text-[#6f5751] md:text-lg dark:text-[#dec8c0]">
                    这里不只是资料包，而是「北海
                    AI版」的选题工作台：每次看到优质 X
                    灵感，都拆成标题、封面、图文结构、提示词和引流话术，持续沉淀成可复用案例库。
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    size="lg"
                    className="h-12 rounded-full bg-[#ff2442] px-7 text-base font-bold text-white shadow-lg shadow-[#ff2442]/25 hover:bg-[#e51d39]"
                    asChild
                  >
                    <a href="#case-library">
                      看最新选题库
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-full border-[#ff2442]/25 bg-white/70 px-7 text-base font-bold text-[#ff2442] hover:bg-[#fff0f2] dark:bg-white/10 dark:hover:bg-white/15"
                    asChild
                  >
                    <a href="#red-note">关注领取提示词</a>
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
                        ，领取提示词和实战案例。
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="workflow" className="py-14 md:py-20">
          <div className="container">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#ff2442]/10 px-3 py-1 text-sm font-bold text-[#ff2442]">
                <BookOpenCheck className="h-4 w-4" />
                选题自动化流程
              </div>
              <h2 className="text-3xl font-black md:text-4xl">
                以后发一个 X 灵感，就沉淀一个案例
              </h2>
              <p className="mt-4 text-[#7a625c] dark:text-[#dec8c0]">
                用轻量方案
                A：你负责发现好东西，我负责拆解、改写、归档和更新网页。
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-4">
              {workflow.map((item, index) => {
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

        <section id="case-library" className="py-14 md:py-20">
          <div className="container">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#ff2442]/10 px-3 py-1 text-sm font-bold text-[#ff2442]">
                <Flame className="h-4 w-4" />
                最新选题库
              </div>
              <h2 className="text-3xl font-black md:text-4xl">
                每个案例都按小红书发布标准整理
              </h2>
              <p className="mt-4 text-[#7a625c] dark:text-[#dec8c0]">
                新案例会放在最上方，包含原帖核心、爆点判断、标题、封面、结构、提示词和评论区引导。
              </p>
            </div>

            <div className="space-y-6">
              {seedCases.map(item => (
                <Card
                  key={item.id}
                  className="overflow-hidden rounded-[2rem] border-[#ffd7df] bg-white/90 shadow-sm dark:border-white/10 dark:bg-white/10"
                >
                  <CardContent className="p-0">
                    <div className="grid gap-0 lg:grid-cols-[0.8fr_1.2fr]">
                      <div className="bg-gradient-to-br from-[#ff2442] via-[#ff6b8a] to-[#ffb86c] p-6 text-white md:p-8">
                        <div className="mb-5 flex flex-wrap gap-2">
                          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold">
                            {item.verdict}
                          </span>
                          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold">
                            {item.category}
                          </span>
                        </div>
                        <p className="mb-3 text-sm font-bold opacity-85">
                          {item.date} · {item.source}
                        </p>
                        <h3 className="text-3xl font-black leading-tight">
                          {item.title}
                        </h3>
                        <div className="mt-6 rounded-3xl bg-white/16 p-4 backdrop-blur">
                          <p className="text-sm font-bold opacity-80">
                            封面文案
                          </p>
                          <p className="mt-2 text-2xl font-black">
                            {item.coverCopy.main}
                          </p>
                          <p className="mt-1 text-sm opacity-90">
                            {item.coverCopy.sub}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-6 p-6 md:p-8">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="rounded-3xl bg-[#fff8f5] p-5 ring-1 ring-[#ff2442]/10 dark:bg-white/5">
                            <p className="mb-2 text-sm font-black text-[#ff2442]">
                              原帖核心
                            </p>
                            <p className="leading-7 text-[#765f59] dark:text-[#dec8c0]">
                              {item.originalCore}
                            </p>
                          </div>
                          <div className="rounded-3xl bg-[#fff8f5] p-5 ring-1 ring-[#ff2442]/10 dark:bg-white/5">
                            <p className="mb-2 text-sm font-black text-[#ff2442]">
                              小红书爆点
                            </p>
                            <p className="leading-7 text-[#765f59] dark:text-[#dec8c0]">
                              {item.xiaohongshuHook}
                            </p>
                          </div>
                        </div>

                        <div>
                          <p className="mb-3 text-sm font-black text-[#ff2442]">
                            推荐标题
                          </p>
                          <div className="grid gap-2 md:grid-cols-2">
                            {item.titleIdeas.map(title => (
                              <div
                                key={title}
                                className="rounded-2xl bg-[#fff8f5] px-4 py-3 text-sm font-bold text-[#4d3833] ring-1 ring-[#ff2442]/10 dark:bg-white/5 dark:text-[#fff7f4]"
                              >
                                {title}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="grid gap-4 lg:grid-cols-2">
                          <div>
                            <p className="mb-3 text-sm font-black text-[#ff2442]">
                              图文结构
                            </p>
                            <ol className="space-y-2 text-sm leading-6 text-[#765f59] dark:text-[#dec8c0]">
                              {item.postStructure.map(step => (
                                <li
                                  key={step}
                                  className="rounded-2xl bg-[#fff8f5] p-3 ring-1 ring-[#ff2442]/10 dark:bg-white/5"
                                >
                                  {step}
                                </li>
                              ))}
                            </ol>
                          </div>
                          <div className="space-y-4">
                            <div>
                              <p className="mb-3 text-sm font-black text-[#ff2442]">
                                复刻流程
                              </p>
                              <p className="rounded-2xl bg-[#2b1b18] p-4 text-sm leading-7 text-[#fff7f4]">
                                {item.promptOrWorkflow}
                              </p>
                            </div>
                            <div>
                              <p className="mb-3 text-sm font-black text-[#ff2442]">
                                评论区引导
                              </p>
                              <p className="rounded-2xl bg-[#fff8f5] p-4 text-sm font-bold leading-7 text-[#4d3833] ring-1 ring-[#ff2442]/10 dark:bg-white/5 dark:text-[#fff7f4]">
                                {item.cta}
                              </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {item.tags.map(tag => (
                                <span
                                  key={tag}
                                  className="rounded-full bg-[#ff2442]/10 px-3 py-1 text-xs font-bold text-[#ff2442]"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
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
                <FileText className="h-4 w-4" />
                爆款类型库
              </div>
              <h2 className="text-3xl font-black md:text-4xl">
                后续重点追踪这些 AI 内容方向
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {categories.map(item => (
                <Card
                  key={item.name}
                  className="h-full rounded-3xl border-[#ffd7df] bg-white/85 shadow-sm dark:border-white/10 dark:bg-white/10"
                >
                  <CardContent className="p-5">
                    <h3 className="mb-3 text-lg font-black text-[#ff2442]">
                      {item.name}
                    </h3>
                    <p className="text-sm leading-7 text-[#765f59] dark:text-[#dec8c0]">
                      {item.desc}
                    </p>
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
                <Sparkles className="h-4 w-4" />
                可复制提示词
              </div>
              <h2 className="text-3xl font-black md:text-4xl">
                先沉淀这两个玄学报告模板
              </h2>
              <p className="mt-4 text-[#7a625c] dark:text-[#dec8c0]">
                每个新选题如果有提示词，也会继续追加到这个区域。
              </p>
            </div>

            <div className="space-y-8">
              {promptLibrary.map(item => (
                <div
                  key={item.title}
                  className="grid items-start gap-6 lg:grid-cols-[0.95fr_1.05fr]"
                >
                  <Card className="overflow-hidden rounded-[2rem] border-[#ead4c5] bg-[#fffdf8] shadow-xl shadow-[#8b5a2b]/10 dark:border-white/10 dark:bg-white/10">
                    <CardContent className="p-3 md:p-4">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full rounded-[1.5rem] object-cover"
                      />
                    </CardContent>
                  </Card>

                  <Card className="rounded-[2rem] border-[#ffd7df] bg-white/90 shadow-sm dark:border-white/10 dark:bg-white/10">
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
                </div>
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
                      更新方式
                    </div>
                    <h2 className="text-3xl font-black md:text-4xl">
                      发我一个灵感，就能补一条案例
                    </h2>
                    <p className="mt-4 leading-8 text-[#765f59] dark:text-[#dec8c0]">
                      你在 X
                      看到好内容后，直接把链接、截图或原文发来。我会先输出拆解稿，再把值得保留的内容更新到这个页面。
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
                想要同款提示词？先从一份资料包开始
              </h2>
              <p className="mx-auto mt-4 max-w-xl leading-8 text-[#765f59] dark:text-[#dec8c0]">
                评论区来的朋友，可以直接扫码关注「北海
                AI版」，我会把实用工具、选题拆解和实战案例持续整理出来。
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
