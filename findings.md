# Findings & Decisions

## Requirements (用户确认)
- ✅ 偏向极简高级感，功能精而不杂
- ✅ 支持白天/夜间模式切换
- ✅ 支持 Markdown 渲染 (已有基础)
- ✅ 支持 Giscus 评论系统
- ✅ 支持 BTC 地址打赏: `12eS2k1frjtBYbCyLQR7GUmSrayko3S4L2`
- ✅ 展示个人成果 (项目页面)
- ✅ 整体要高级好看
- ❌ 不需要兴趣爱好展示
- ❌ 不需要 Lightning Network
- ⚠️ 阅读模式待确认是否保留

## Research Findings

### 项目架构
- **框架**: React 19.2.1 + Vite 7.1.7 + TypeScript 5.6.3
- **样式**: Tailwind CSS 4.1.14 + shadcn/ui (new-york style, 52 个组件) + tw-animate-css
- **路由**: wouter 3.3.5 (轻量路由，有 pnpm patch)
- **动画**: framer-motion 12.23.22 (已安装但**完全未使用**)
- **Markdown**: streamdown 1.4.0 (用于 BlogPost 渲染)
- **图表**: recharts 2.15.2 (已安装)
- **表单**: react-hook-form 7.64.0 + zod 4.1.12
- **Toast**: sonner 2.0.7
- **部署**: Vercel (纯静态 SPA, `dist/public`)
- **包管理**: pnpm 10.4.1
- **分析**: Umami analytics

### 现有页面 (7个)
| 页面 | 文件 | 状态 |
|------|------|------|
| 首页 | `pages/Home.tsx` | 完整 — Hero (avatar + 标题 + CTA) + 2 项目卡片 + 关于预览 |
| 项目 | `pages/Projects.tsx` | 完整 — 2 个项目详情卡片，交替布局 |
| 博客列表 | `pages/Blog.tsx` | 完整 — 分类/标签筛选 |
| 博客详情 | `pages/BlogPost.tsx` | 完整 — streamdown Markdown + prose-invert + 相关文章 |
| 关于 | `pages/About.tsx` | 完整 — 个人介绍 + 核心价值 + 时间线 + 技能 + CTA |
| 联系 | `pages/Contact.tsx` | 完整 — 表单 (模拟提交) + 3 联系方式卡片 |
| 404 | `pages/NotFound.tsx` | 完整 |

### 现有组件
| 组件 | 文件 | 用途 |
|------|------|------|
| Navigation | `components/Navigation.tsx` | 顶部固定导航栏 (`bg-background/80 backdrop-blur-lg`)，无移动端菜单! |
| Footer | `components/Footer.tsx` | 底部版权 + GitHub/Twitter 链接 |
| ThemeProvider | `contexts/ThemeContext.tsx` | 主题切换 (`switchable` 预埋但未启用) |
| ErrorBoundary | `components/ErrorBoundary.tsx` | 错误边界 |
| UI 组件 | `components/ui/*.tsx` | shadcn/ui 52 个组件 (含 Sheet 可用于移动端菜单) |

### 设计系统现状
- **字体**: Space Grotesk (标题 700) + Inter (正文 400/500/600) + JetBrains Mono (代码 400/500)
- **配色**: 仅暗色模式 (OKLCH 色值):
  - 背景: `oklch(0.15 0.02 240)` — 深海军蓝
  - 前景: `oklch(0.95 0.01 240)` — 近白
  - 主色: `oklch(0.65 0.15 45)` — Bitcoin 橙 (偏暗)
  - 强调: `oklch(0.65 0.12 230)` — 柔蓝
  - 次要: `oklch(0.45 0.18 285)` — 紫色
  - 边框: `oklch(0.3 0.02 240)` — 暗海军蓝边框
  - 圆角: `0.5rem` (8px)
- **动画**: 仅 CSS keyframes (fadeIn, fadeInUp, gradient)，framer-motion 完全未用
- **问题**: 无 light 模式变量、无移动端导航、主题切换未启用

### 博客数据
- 4 篇文章，硬编码在 `data/blogPosts.ts` (template literal Markdown 字符串)
- 分类: 比特币、Web3、开源
- 作者: 北海，使用 `/images/profile-avatar.png`

### 模板调研结论
调研了 AstroPaper、Blowfish (Hugo)、Chirpy (Jekyll)、Tailwind Nextjs Starter Blog、Nextra、Paper (Hugo) 等主流模板后，决定**不迁移**：
- 所有高质量模板都使用不同框架 (Next.js/Astro/Hugo/Jekyll)，迁移成本 30-40h
- 现有代码库升级成本仅 15-20h，且已有更先进的技术栈
- 视觉定制需求使模板优势消失 (模板也需要大量修改以匹配 Bitcoin 橙品牌色)
- 借鉴设计细节：AstroPaper 排版尺度、Blowfish 卡片悬停、Nextra 的 TOC 侧边栏

## Technical Decisions
| Decision | Rationale |
|----------|-----------|
| 保持 React 19 + Vite 7 + Tailwind 4 栈 | 已是最领先技术栈，迁移无意义 |
| 不采用外部模板，仅借鉴设计 | 迁移成本 > 升级成本，且视觉需要定制 |
| 复用 ThemeContext，开启 switchable | 代码已预埋，最小改动 |
| Light 模式通过 `html:not(.dark)` CSS 变量覆盖 | 遵循 Tailwind 4 custom variant 惯例 |
| Giscus 作为评论系统 | 开源、GitHub 原生、无后端、自动适配主题 |
| qrcode.react 生成 BTC QR 码 | 无后端依赖，纯静态部署 |
| framer-motion 替换 CSS 动画 | 已安装，API 优雅，可实现更精致的入场/滚动动画 |
| shadcn Sheet 组件做移动端菜单 | 已安装，无需额外依赖 |
| 阅读模式用 CSS class 切换 | 轻量，无需额外状态管理 |

## Issues Encountered
| Issue | Resolution |
|-------|------------|
| 移动端导航链接隐藏无替代方案 | Phase 3 用 Sheet 组件添加抽屉菜单 |
| ThemeProvider switchable 默认 false | Phase 3 改为 true |
| 仅有 dark 模式 CSS 变量 (OKLCH) | Phase 3 补充完整 light 模式变量 |
| `prose-invert` 硬编码在 BlogPost | Phase 3 改为动态切换 `prose-invert` 基于主题 |
| framer-motion 安装了但没用 | Phase 3 替换 CSS keyframes 动画 |
| Contact 表单为模拟提交 | 不影响本次升级，后续可集成 Formspree/Resend |

## Phase 2 Architecture Decisions (完整设计方案)

### 2.1 Light/Dark 双主题 CSS 变量系统

**方案**: 在 `index.css` 中新增 `.light` (即 `html:not(.dark)`) 的 CSS 变量覆盖块

**Light 模式配色设计** (极简高级感):
- 背景: `oklch(0.98 0.005 240)` — 近白，带极微蓝灰调
- 前景: `oklch(0.15 0.02 240)` — 深炭灰（和暗色背景对称）
- Card: `oklch(0.96 0.005 240)` — 比背景稍深的卡片
- Primary: `oklch(0.60 0.16 45)` — Bitcoin 橙（light 下稍深以保对比度）
- Accent: `oklch(0.50 0.10 230)` — 柔蓝（light 下深化）
- Muted: `oklch(0.90 0.005 240)` — 浅灰
- Muted-foreground: `oklch(0.45 0.02 240)` — 中灰文字
- Border: `oklch(0.85 0.01 240)` — 浅边框
- Input: `oklch(0.92 0.005 240)` — 输入框背景
- Secondary: `oklch(0.55 0.12 285)` — 紫色（light 下饱和度降低）

**实现**: `html:not(.dark)` 选择器覆盖 (Tailwind 4 不需要 `@custom-variant` 单独声明，直接 CSS)

**主题初始化**: ThemeContext 中 `defaultTheme` 改为根据 `prefers-color-scheme` 检测，同时保留 localStorage 覆盖

### 2.2 主题切换 UI

**方案**: Navigation.tsx 右侧社交链接区域添加 Sun/Moon 图标按钮

**技术细节**:
- 使用 lucide-react 的 `Sun` 和 `Moon` 图标
- 用 framer-motion `AnimatePresence` + `motion.span` 实现 rotate+scale 进出动画
- 按钮样式: `hover:text-primary hover:bg-primary/10` (和现有 GitHub/Twitter 按钮一致)
- dark 显示 Sun (切换到 light)，light 显示 Moon (切换到 dark)
- 过渡动画: rotate(180deg) + opacity 0→1, 持续 300ms

### 2.3 Giscus 评论集成方案

**Repo 方案**: 使用已有的 `beihaili/bhbtc-website` GitHub 仓库（如果 Discussions 已开启），或用户确认后创建新 repo

**集成步骤**:
1. GitHub 仓库开启 Discussions (Settings → Features → Discussions)
2. 安装 giscus GitHub App 到该 repo
3. `pnpm add @giscus/react`
4. 创建 `client/src/components/GiscusComments.tsx`
5. 使用 `mapping="pathname"` 自动按 URL 路径匹配讨论
6. `theme` 根据 `useTheme()` 动态传入: `"light"` 或 `"dark"`
7. 在 `BlogPost.tsx` Tags 区域下方插入 `<GiscusComments />`

**GiscusComments 组件接口**:
```tsx
<Giscus
  repo="beihaili/bhbtc-website"  // 待确认
  repoId="..."                    // 从 giscus.app 获取
  category="Announcements"
  categoryId="..."
  mapping="pathname"
  reactionsEnabled="1"
  emitMetadata="0"
  inputPosition="top"
  theme={theme === "dark" ? "dark" : "light"}
  lang="zh-CN"
/>
```

**⚠️ 待确认**: Giscus repo 名称（主仓库还是新建 comments repo）

### 2.4 BTC 打赏组件方案

**地址**: `12eS2k1frjtBYbCyLQR7GUmSrayko3S4L2`

**UI 方案**: Dialog 弹窗（精致，不突兀）

**组件结构** (`BTCDonation.tsx`):
- 触发器: 在 BlogPost 底部 + About 页面各放一个 `<BTCDonation />` 组件
- 弹窗内容:
  - 标题: "打赏作者" + Bitcoin 图标
  - QR 码: `qrcode.react` 生成 `bitcoin:12eS2k1frjtBYbCyLQR7GUmSrayko3S4L2`
  - 地址文本: 截断显示 + 一键复制 (toast 提示)
  - 底部说明文字: "扫描二维码或复制地址向作者打赏比特币，感谢支持！"
- 触发按钮样式: `variant="outline"` + Bitcoin 橙色 hover

**依赖**: `pnpm add qrcode.react`

**QR 码尺寸**: 200x200，浅色背景（弹窗内），`fgColor` 跟随主题

### 2.5 阅读模式方案

**决定**: 保留，但简化为 2 种模式（减少复杂度）:
- **标准模式** (default): 正常导航 + `max-w-3xl` 内容宽度
- **专注模式**: 隐藏 Footer，导航简化，`max-w-2xl` (65ch)，字号 +2px，更大行高

**实现**:
- `ReadingModeContext` (type: `"normal" | "focus"`)
- BlogPost 页面右上角添加切换按钮 (Book/BookOpen 图标)
- CSS class: `.reading-focus` 添加到 `<article>` 元素，用 Tailwind arbitrary 值控制

**⚠️ 待实现时确认**: 是否值得添加这个功能（可选，Phase 3 最后实现）

### 2.6 视觉升级方向

**核心原则**: 极简高级感 — 少即是多，每个元素都有呼吸感

**具体方向**:
1. **配色调整**: 降低整体饱和度，以留白为主，Bitcoin 橙作为唯一强调色
2. **排版升级**:
   - 段落间距: `mb-6` (24px)，行高: `leading-relaxed` (1.625)
   - 标题层次: H1 3.5rem/700, H2 2.25rem/600, H3 1.5rem/600
   - 最大阅读宽度: `max-w-3xl` (prose 建议 65ch)
3. **动画升级** (framer-motion 替代 CSS keyframes):
   - 页面入场: `motion.div` + `initial={{opacity:0, y:20}}` + `animate={{opacity:1, y:0}}`
   - 卡片悬停: `whileHover={{y:-4, shadow}}` (Blowfish 风格)
   - 主题切换: `AnimatePresence` + icon 旋转
4. **视觉噪音减少**:
   - 移除或弱化 `.gradient-animate` 大背景渐变
   - `glow-orange/glow-cyan` 降低强度（已在现有版本移除 text-shadow）
   - 卡片边框更细 (`border-border/30`)、阴影更微妙
5. **首页 Hero 重设计**:
   - 居中布局，更大头像 (120px)，标题更大 (4xl-5xl)
   - 副标题使用 `text-muted-foreground`，细体 400
   - CTA 按钮间距增大
6. **移动端汉堡菜单**: shadcn `Sheet` 从右侧滑入，包含所有导航 + 主题切换 + 社交链接

## Resources
- shadcn/ui 文档: https://ui.shadcn.com
- Giscus: https://giscus.app
- @giscus/react: https://github.com/giscus/giscus-component
- qrcode.react: https://github.com/zpao/qrcode.react
- Framer Motion: https://www.framer.com/motion
- Tailwind Typography: https://tailwindcss.com/docs/typography-plugin
- AstroPaper (设计参考): https://github.com/satnaing/astro-paper
- Blowfish (设计参考): https://github.com/nunocoracao/blowfish

## Visual/Browser Findings
<!-- Update after every 2 view/browser operations -->
- 当前网站仅有暗色模式，整体为 Digital Punk Narrative 风格 (但已柔化，glow 效果已移除)
- 字体系统完整且高质量 (Space Grotesk + Inter + JetBrains Mono)
- 基础动画已有但不够丰富 (仅 CSS fadeIn/fadeInUp)
- 52 个 shadcn/ui 组件已就位，组件库丰富
