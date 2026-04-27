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

const pastLifePrompt = `请根据我上传的人像照片，生成一张竖版东方玄学风格的「前世身份档案报告」海报。

设计要求：
- 画面比例：竖版 3:4 海报，适合小红书发布。
- 视觉风格：东方玄学、古籍档案、前世今生、命运卷轴、复古羊皮纸、金色线条、红色印章、神秘但高级。
- 主体：保留人物真实五官和气质，将人物放在画面中央，生成带有古风/史诗感的半身肖像，不要过度改变本人长相。
- 标题：前世身份档案报告。
- 副标题：从你的气质里，看见另一段人生剧本。
- 顶部信息栏包含：分析对象、前世身份、时代背景、人格关键词、命运主线。
- 右侧加入「前世身份解析」模块，包含：身份设定、性格特质、天赋能力、情感课题、财富模式、今生提醒。
- 左侧加入 01-09 的金色编号标注，用细线连接到人物五官、眼神、姿态、服饰和气场区域。
- 底部加入三个小模块：「前世关键词」「今生优势」「近期提醒」。
- 色彩：米黄色、棕色、金色、墨黑、朱红印章色，整体神秘、精致、信息密度高。
- 字体感觉：标题用中文书法/宋体风，正文用清晰中文排版。
- 输出效果：像一张完整的 AI 前世身份分析报告，画面高级有故事感，不要杂乱，不要低清晰度，不要乱码。`;

const catAtlasPrompt = `请生成一张 3:4 比例的「猫咪品种自然百科图鉴」海报。

主题：布偶猫、缅因猫、英国短毛猫、波斯猫、苏格兰折耳猫、孟加拉猫、西伯利亚猫、阿比西尼亚猫、暹罗猫、挪威森林猫。

设计要求：
- 风格：自然历史博物馆百科页、复古科学插画、高级信息图、旧羊皮纸背景。
- 背景：米黄色复古纸张，轻微水渍、纸张纤维、旧书边缘。
- 构图：9-15 个主体密集但有秩序地排列，中央主体略大，周围主体错落分布，形成 3D 层次。
- 主体：每只猫都要高度真实，毛发、眼睛、体型特征清晰。
- 标题：顶部大字「猫咪品种图鉴」，中文必须清晰可读。
- 标签：每只猫旁边标注中文名称 + 简短说明，可加入小号英文名。
- 装饰：细线标注、分类编号、复古印章、S/A/B/C 等级徽章、古铜金和暗红色点缀。
- 输出：博物馆级百科信息图，文字清晰，不要乱码，不要品牌 logo。`;

const ragdollEncyclopediaPrompt = `请生成一张 3:4 比例的「布偶猫百科图解」海报。

设计要求：
- 风格：复古自然百科、高级科学插画、米黄色旧纸张、细腻边框、复古印章。
- 中央主体：一只高度真实、毛发蓬松、蓝眼睛清晰的布偶猫，占据 C 位，并呈现轻微 3D 跳出纸面的效果。
- 留白：主体周围保留适当留白，增强视觉冲击。
- 知识模块：四周加入 6-8 个清晰模块，包括外貌特征、性格特点、体型结构、毛发护理、饮食建议、适合人群、品种起源、常见注意事项。
- 连接：每个模块用细线、箭头、标注连接到猫咪对应部位。
- 标题：主标题「布偶猫图解百科」，中文书法或宋体风。
- 正文：简体中文，清晰可读，不要乱码。
- 输出：专业百科杂志页面，信息密集但排版有序，不要品牌 logo。`;

const garlicLifePrompt = `以「大蒜的一生」为主题生成一张竖版 3:4 科普信息图。

关键要求：
- 画面中必须是「一个完整的单体大蒜」，通过横向切片表现同一头大蒜在不同时间阶段的变化。
- 不能画成多个独立大蒜拼接，主体结构要连续、形状一致，只是在不同切片区域呈现不同成熟度。
- 主体居中横向展开，被均匀分割为 4-6 段。
- 从左到右：未成熟 → 成熟 → 过熟 → 发芽 → 变质。

每一段体现真实变化：
- 颜色变化：洁白/微青 → 饱满洁白 → 发黄 → 发芽 → 霉变发黑。
- 质地变化：紧实 → 饱满 → 软化/皱缩 → 发芽消耗养分 → 腐坏。
- 特征变化：蒜皮、蒜瓣、出芽、出水、霉点等。

每个阶段配中文说明：阶段名称、外观特点、内部变化（水分/糖分/风味变化）、食用建议（推荐 / 适合烹饪 / 谨慎 / 不可食用）。
设计风格：极简米色浅背景、高真实感摄影风格、清晰分割线、小红书中文科普排版、✔️/⚠️ 标识、顶部标题「大蒜的一生」、手机端清晰易读，不要乱码，不要品牌 logo。`;

const medicalBeautyBeforeAfterPrompt = `你是一位顶尖医美整形视觉设计师、面部美学分析师与高端人像修图蓝图设计师。请生成一张真实高清的「医美整容术前术后对比蓝图」，采用左右双栏并排布局，整体呈现高端专业医疗美容广告级质感，像真实整形机构的术前术后案例展示图。

【核心目标】
这张图的重点不是普通修图，而是「医美整形前后强对比案例图」。前后必须为同一人物、同一角度、同一表情、同一光线方向，但术后效果要比术前明显提升，形成一眼可见的强烈差异。要求前后差异明显大于普通磨皮修图，重点突出鼻部、轮廓、眼周、中面部、皮肤、年轻化等部位的变化。整体风格必须真实、高清、专业、高级、自然，不能夸张畸形，也不能塑料假脸。

【整体画面要求】
- 横向双栏构图，左右并排。
- 左侧为「术前分析」，右侧为「术后效果」。
- 左右之间有清晰分隔线。
- 同一人物，同一拍摄视角，同一脸部朝向，同一表情，同一构图比例。
- 人物脸部占画面主体，最好是胸像或半身近景，确保五官与轮廓细节清晰可见。
- 画面重点聚焦脸部，不要让服装或背景喧宾夺主。
- 背景采用干净简洁的白色、浅灰色或高级医美空间背景。
- 整体画质要高清、细节清楚、皮肤纹理自然可见。

【左侧面板：术前分析】
- 展示未经修饰的术前原始人像。
- 左侧必须保留明显的术前问题，但不要丑化到失真，要像真实普通人术前状态。
- 术前问题要相对更明显一些，以拉开前后差距，包括但不限于：面部轮廓偏钝、下颌线模糊、下面部略宽、下巴后缩或比例欠佳、鼻梁偏低、鼻头圆钝偏大、鼻翼略宽、双眼不够有神、黑眼圈明显、眼袋明显、眼周浮肿、中面部略凹、法令纹较明显、面部轻微不对称、眉形凌乱、皮肤暗沉、肤色不均、面颊轻微泛红、T区或面部有油光、皮肤纹理粗糙、牙齿轻微发黄、发丝毛躁、碎发较多、头发蓬松度不足。
- 用精准红色医美分析标注指出需要改善的位置。
- 标注方式包含：红色箭头、红色圆圈、红色虚线、红色辅助线、红色手绘网格、面部比例分析线。
- 每个问题点旁边都要有简短清晰的中文修整指令。
- 左侧必须有「术前分析」标题。
- 左侧整体效果像专业医生或医美机构做的术前分析图。

【左侧必须出现的中文标注指令】
- 细化皮肤纹理
- 减少面部油光
- 均匀肤色
- 改善面部泛红
- 调整眉形线条
- 优化眼部轮廓
- 淡化黑眼圈
- 改善眼袋浮肿
- 抬高鼻梁
- 缩小鼻头
- 收窄鼻翼
- 提升中面部饱满度
- 淡化法令纹
- 清晰下颌线
- 收窄下面部轮廓
- 优化下巴比例
- 改善面部对称感
- 轻微提亮牙齿
- 整理碎发
- 增加头发自然蓬松感
- 平衡整体光线
- 柔化背景

【右侧面板：术后效果】
- 根据左侧全部红色标注与中文指令，生成术后明显改善的人像。
- 术后效果必须明显优于术前，做到一眼就能看出「医美整形后」的变化。
- 术后变化必须比普通修图明显得多，但依然真实自然。
- 右侧只展示术后最终效果，不添加红色标注。
- 右侧必须有「术后效果」标题。

【术后必须强化的变化】
1. 鼻部变化必须明显：鼻梁明显抬高，鼻背线条更直更挺，鼻头明显缩小，更精致秀气，鼻翼明显收窄，鼻部整体立体度显著增强。
2. 面部轮廓变化必须明显：下颌线更清晰利落，下面部明显更收窄，脸型更流畅、更小巧、更精致，下巴比例更协调，视觉上有明显「小脸化、精致化、轮廓优化」效果。
3. 眼周变化必须明显：黑眼圈明显淡化，眼袋和浮肿明显减少，眼裂形态更流畅，眼睛更有神采，保持自然亚洲审美。
4. 中面部年轻化变化必须明显：中面部饱满度提升，苹果肌支撑感更好，法令纹明显变浅，面部整体更年轻、更饱满。
5. 皮肤变化必须明显：皮肤更细腻、更透亮、肤色更均匀、暗沉明显改善、泛红明显减少、油光明显减少，但保留自然真实的皮肤纹理。
6. 细节精致化变化：眉形更整齐、更有设计感，牙齿轻微提亮但自然，发丝更整洁，碎发减少，头发更蓬松自然，补光更均衡，背景更柔和。

【差异强化要求】
- 术前与术后差异必须明显拉大。
- 不要只是轻微修饰，不要只是简单磨皮。
- 要突出「鼻综合提升 + 轮廓优化 + 眼周年轻化 + 肤质提升」的综合医美变化。
- 前后差异应达到真实医美案例图的级别。
- 术前更普通，术后更精致、更上镜、更年轻，但仍然是同一个人。
- 保留人物原有身份特征，不要换脸，不要变成另一个人。

【文字与标注要求】
- 左侧所有标注文字必须是中文。
- 中文标注要简短清晰、专业易读。
- 标注排布整齐，避免遮挡关键五官。
- 不要出现乱码，不要出现错误文字。
- 左侧有红色分析标注，右侧无标注。

【风格要求】
- 真实摄影风
- 高清人像
- 专业医美案例展示风
- 高级、干净、简洁
- 像正规整形机构宣传案例图
- 不是插画，不是漫画，不是概念图

【负面要求】
- 不要漫画风
- 不要插画风
- 不要夸张畸形整容
- 不要整成网红假脸
- 不要塑料皮肤
- 不要过度磨皮
- 不要AI感过强
- 不要让术后变成完全不同的人
- 不要低清晰度
- 不要普通拼图感
- 不要额外说明文字
- 不要复杂杂乱背景
- 不要出现英文字标注
- 不要文字乱码

【最终输出要求】
只输出一张左右双栏医美整容前后对比蓝图成图：
- 左侧：「术前分析」——未经修饰的术前原始人像 + 红色医美分析标注 + 中文修整指令
- 右侧：「术后效果」——明显改善后的自然真实术后人像
最终效果必须真实、高清、专业、高级，并且前后差异显著，一眼可见整容医美前后变化。`;

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
  {
    title: "前世身份档案报告提示词",
    usage: "上传一张清晰人像图，再复制提示词生成前世身份档案海报。",
    prompt: pastLifePrompt,
  },
  {
    title: "猫咪品种自然百科图鉴提示词",
    usage: "适合做图鉴类封面，先用群像海报吸引点击，后续可拆单个品种做系列。",
    prompt: catAtlasPrompt,
  },
  {
    title: "布偶猫百科图解提示词",
    usage: "适合做单体百科图，突出一个主体和周围知识模块，方便做连续栏目。",
    prompt: ragdollEncyclopediaPrompt,
  },
  {
    title: "大蒜的一生科普信息图提示词",
    usage: "适合做食物科普系列，用同一主体的阶段变化提高收藏和转发。",
    prompt: garlicLifePrompt,
  },
  {
    title: "医美微整容前后对比图提示词",
    usage:
      "上传清晰人像，生成左右双栏医美风前后对比蓝图。仅用于 AI 视觉模拟与修图玩法展示，不构成医美建议或真实案例。",
    prompt: medicalBeautyBeforeAfterPrompt,
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
