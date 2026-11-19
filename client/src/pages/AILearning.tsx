import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

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

const contentTypes = [
  "AI 玄学报告",
  "AI 图像改造",
  "AI 图鉴百科",
  "AI 情绪价值",
  "AI 副业效率",
];

const steps = ["扫码关注", "私信关键词：AI", "领取提示词", "照着案例练习"];

type PromptItem = {
  title: string;
  intro: string;
  prompt: string;
  image?: string;
  alt?: string;
};

const groups: {
  id: string;
  title: string;
  intro: string;
  items: PromptItem[];
}[] = [
  {
    id: "infographic",
    title: "信息图与百科",
    intro:
      "用一张图把一个主题讲清楚。练习的是主体、分区、标注，以及可读的简体中文。",
    items: [
      {
        title: "猫咪品种图鉴",
        intro:
          "十个品种排成一张博物馆式百科页。适合先做群像封面，再拆成单品种系列。",
        prompt: catAtlasPrompt,
      },
      {
        title: "布偶猫百科图解",
        intro:
          "一只猫放在中间，四周用细线连到外貌、性格、护理和起源。适合做连续栏目。",
        prompt: ragdollEncyclopediaPrompt,
      },
      {
        title: "大蒜的一生",
        intro:
          "同一头大蒜做横向切片，从生到发芽、变质。重点是主体连续，不要画成好几颗蒜。",
        prompt: garlicLifePrompt,
      },
    ],
  },
  {
    id: "portrait",
    title: "人像视觉实验",
    intro:
      "小红书时期的海报实验：上传一张照片，生成带编号和说明的报告。玄学叙事是当时的传播外壳，提示词仍按原样保留。",
    items: [
      {
        title: "面相报告",
        intro:
          "上传清晰人像，生成竖版「面相玄学分析报告」。脸上有 01–12 的标注，右侧是十二宫解析。",
        prompt: faceReadingPrompt,
        image: "/images/ai-face-reading-effect.jpg",
        alt: "AI 面相玄学分析报告效果图",
      },
      {
        title: "手相报告",
        intro:
          "上传掌心清楚的手掌照片，在掌纹上叠加生命线、智慧线等彩色标注，并排出 13 条观察。",
        prompt: palmReadingPrompt,
        image: "/images/ai-palm-reading-effect.jpg",
        alt: "AI 手相玄学分析报告效果图",
      },
      {
        title: "前世身份档案",
        intro:
          "同一张人像做成古风半身肖像和档案页，右侧写身份、性格、天赋和今生提醒。",
        prompt: pastLifePrompt,
      },
    ],
  },
  {
    id: "medical",
    title: "医美对比实验",
    intro:
      "左右双栏的视觉模拟：左边标出想改的地方，右边给出术后效果。只作为修图玩法保留，不构成医美建议，也不是真实案例。",
    items: [
      {
        title: "医美前后对比蓝图",
        intro:
          "上传清晰人像，生成同一人物、同一角度的术前分析和术后效果。差异要看得出，但提示词要求不要换脸、不要塑料皮肤。",
        prompt: medicalBeautyBeforeAfterPrompt,
      },
    ],
  },
];

function PromptCard({ item }: { item: PromptItem }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(item.prompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article className="border-t border-border py-8">
      <h3 className="font-serif text-2xl leading-snug">{item.title}</h3>
      <p className="mt-3 max-w-[42rem] leading-8 text-muted-foreground">
        {item.intro}
      </p>
      {item.image ? (
        <img src={item.image} alt={item.alt} className="mt-5 w-full max-w-md" />
      ) : null}
      <button
        type="button"
        onClick={copy}
        className="mt-4 text-sm underline underline-offset-4"
      >
        {copied ? "已复制" : "复制提示词"}
      </button>
      <pre className="prompt-block mt-4 max-h-[28rem] overflow-auto p-4 text-left font-mono text-[0.8125rem] leading-7 whitespace-pre-wrap">
        {item.prompt}
      </pre>
    </article>
  );
}

export default function AILearning() {
  return (
    <div className="site-page">
      <Navigation />

      <main className="flex-1">
        <PageHeader
          kicker="AI"
          title="实验与工具玩法"
          lede="这里是我试过的生图提示词。不讲模型原理，只保留能复制、能换一张照片再试的文本。原来的条目都还在，只是按用途分成三组。"
        />

        <section className="border-b border-border">
          <div className="container py-8">
            <ul className="flex max-w-[40rem] flex-col gap-2 text-sm leading-7 text-muted-foreground">
              {benefits.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {groups.map(group => (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className="underline underline-offset-4"
                >
                  {group.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {groups.map(group => (
          <section
            key={group.id}
            id={group.id}
            className="scroll-mt-20 border-b border-border"
          >
            <div className="container py-12 md:py-16">
              <h2 className="font-serif text-3xl">{group.title}</h2>
              <p className="mt-4 max-w-[40rem] leading-8 text-muted-foreground">
                {group.intro}
              </p>
              <div className="mt-4 max-w-[48rem]">
                {group.items.map(item => (
                  <PromptCard key={item.title} item={item} />
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="border-b border-border">
          <div className="container py-12">
            <h2 className="font-serif text-2xl">还会继续补的方向</h2>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
              {contentTypes.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="red-note" className="py-12 md:py-16">
          <div className="container grid gap-8 md:grid-cols-[16rem_1fr] md:items-start">
            <img
              src="/images/xiaohongshu-ai-qr.jpg"
              alt="北海 AI版 小红书二维码"
              className="w-full max-w-[16rem]"
            />
            <div className="max-w-[36rem]">
              <h2 className="font-serif text-2xl">资料从这里领</h2>
              <p className="mt-3 leading-8 text-muted-foreground">
                小红书号 6735187043。关注「北海
                AI版」，私信关键词「AI」，领取提示词、工具清单和更多案例。
              </p>
              <ol className="mt-5 space-y-2 text-sm">
                {steps.map((step, index) => (
                  <li key={step}>
                    <span className="text-muted-foreground">{index + 1}. </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
