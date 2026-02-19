# Task Plan: 升级个人网站 bhbtc.xyz

## Goal
升级个人网站，偏向极简高级感。文字优美，支持白天/夜间模式切换，支持 Markdown，支持评论 (Giscus)，支持给 BTC 地址打赏，展示个人成果。功能不必太多，精而不杂。继续在现有 React 19 + Vite 7 + Tailwind 4 + shadcn/ui 基础上升级，不迁移框架。

## Current Phase
Phase 3

## Phases

### Phase 1: Requirements & Discovery — 深度分析现有代码与需求差距
- [x] 分析现有项目结构 (React 19 + Vite 7 + Tailwind 4 + shadcn/ui + wouter)
- [x] 审查已有页面: Home, Projects, About, Blog, BlogPost, Contact, NotFound
- [x] 审查现有 ThemeContext (已有 dark/light 切换逻辑，但 `switchable` 默认 false，且无 UI 切换按钮)
- [x] 审查博客系统 (硬编码在 blogPosts.ts 中，用 streamdown 渲染 Markdown)
- [x] 审查设计系统 (Digital Punk Narrative 风格，只有暗色模式 CSS 变量)
- [x] 确认用户的 BTC 打赏地址 → `12eS2k1frjtBYbCyLQR7GUmSrayko3S4L2`，不需要 Lightning
- [x] 确认评论系统偏好 → Giscus (GitHub Discussions)，需要帮用户创建 repo
- [x] 确认设计方向 → 偏向极简高级感，功能不必太多，兴趣爱好可以不要
- [x] 调研网络上的极简高级感博客模板 (AstroPaper, Blowfish, Chirpy, Tailwind Nextjs Starter Blog, Nextra 等)
- [x] 评估是否采用模板 → **决定继续升级现有代码库**，原因：现有栈已领先(React 19/Tailwind 4)，迁移成本远大于升级成本，视觉定制需求使模板优势消失
- **Status:** complete

### Phase 2: Planning & Architecture — 技术方案与架构设计
- [x] 确定极简高级感的设计语言：借鉴 AstroPaper 的排版尺度、Blowfish 的卡片悬停、Nextra 的 TOC 侧边栏
- [x] 设计完整的 Light/Dark 双主题 CSS 变量系统
  - 当前只有 dark 变量 (在 `:root` 中用 OKLCH)
  - 需要新增 `html:not(.dark)` 或 `.light` 的完整 light 模式配色
  - 参考 shadcn/ui neutral 色板 + 自定义 Bitcoin 橙主色
- [x] 设计主题切换 UI：Navigation 栏添加 Sun/Moon 切换按钮 (带过渡动画)
- [x] 设计 Giscus 评论集成方案
  - 需要创建 GitHub repo 并开启 Discussions
  - 安装 `@giscus/react`
  - 在 BlogPost 底部集成，自动跟随 light/dark 主题
- [x] 设计 BTC 打赏组件方案
  - 用 `qrcode.react` 生成 QR 码
  - 地址展示 + 一键复制
  - 可放在 BlogPost 底部 + About 页面
  - UI: 精致弹窗/卡片，Bitcoin 橙色主题
- [x] 设计多种阅读模式方案 (如果保留)
  - 决定: 保留 2 种模式 (标准 + 专注)，去掉沉浸模式
  - 用 ReadingModeContext + CSS class 实现
- [x] 规划视觉升级方向
  - 从 Digital Punk 过渡到极简高级感
  - 保留 Bitcoin 橙作为品牌色，减少赛博朋克感
  - 更精致的排版间距、微妙动画 (framer-motion)、优雅渐变
  - 移动端汉堡菜单 (shadcn Sheet 组件)
- **Status:** complete

### Phase 3: Implementation — 分步实现
- [x] **3.1 主题系统升级** (优先级最高)
  - [x] 在 `index.css` 中新增 `:root` (light) + `.dark` 完整双主题 CSS 变量
  - [x] 修改 `App.tsx` 中 ThemeProvider: `switchable={true}`
  - [x] 在 `Navigation.tsx` 添加 Sun/Moon 主题切换按钮 (framer-motion 旋转动画)
  - [x] 处理 `prose` 样式：light 模式移除 `prose-invert`，动态切换
- [x] **3.2 移动端导航** (优先级高)
  - [x] 用 shadcn `Sheet` 组件实现移动端侧边抽屉菜单
  - [x] 汉堡菜单按钮 (md: 以下显示)
  - [x] 抽屉内包含所有导航链接 + 社交链接
- [ ] **3.3 Markdown 渲染增强** (待实现)
  - [ ] 优化 prose 排版：更好的间距、引用块、代码块样式
  - [ ] 自动生成文章目录 TOC (可选)
- [x] **3.4 评论系统 (Giscus)**
  - [x] 安装 `@giscus/react`
  - [x] 创建 `GiscusComments.tsx` 组件，适配 light/dark 主题
  - [x] 在 `BlogPost.tsx` 底部集成评论区
- [x] **3.5 BTC 打赏功能**
  - [x] 安装 `qrcode.react`
  - [x] 创建 `BTCDonation.tsx` 组件 (QR 码 + 地址复制 + Dialog 弹窗)
  - [x] 在 BlogPost 和 About 页面集成打赏入口
- [ ] **3.6 阅读模式** (跳过，精简功能)
- [x] **3.7 视觉高级感升级**
  - [x] 整体风格从 Digital Punk 过渡到极简高级感
  - [x] 用 framer-motion 添加微妙的入场/滚动动画
  - [x] 优化首页 Hero 设计 (更简洁大气)
  - [x] 优化卡片设计 (微妙阴影、悬停效果)
  - [x] 简化视觉噪音 (减少不必要的装饰元素)
- **Status:** in_progress

### Phase 4: Testing & Verification
- [ ] Light 模式全页面视觉检查 (7个页面)
- [ ] Dark 模式全页面视觉检查 (7个页面)
- [ ] 主题切换动画流畅性验证
- [ ] 移动端响应式测试 (导航、布局、字体)
- [ ] Markdown 渲染测试 (代码块、表格、列表、引用、链接、TOC)
- [ ] 评论系统功能测试 (Giscus 加载、主题跟随)
- [ ] BTC 打赏流程测试 (QR 码显示、地址复制)
- [ ] 阅读模式切换测试 (如果实现)
- [ ] 构建验证 (`pnpm run build` 无报错)
- [ ] Lighthouse 性能检测 (确保升级不影响性能)
- [ ] 修复发现的问题
- **Status:** pending

### Phase 5: Delivery
- [ ] 最终代码审查与清理
- [ ] 更新 progress.md 和 findings.md
- [ ] 确保 Vercel 部署配置正确
- [ ] 清理不再使用的文件和依赖
- [ ] 向用户展示成果并收集反馈
- **Status:** pending

## Key Questions
1. **BTC 打赏地址**: `12eS2k1frjtBYbCyLQR7GUmSrayko3S4L2`，不需要 Lightning Network ✅
2. **评论系统**: Giscus (GitHub Discussions)。需要创建 repo 并开启 Discussions ✅
3. **设计风格**: 偏向极简高级感，不要 Digital Punk 了 ✅
4. **兴趣爱好**: 不需要兴趣爱好展示，功能精简 ✅
5. **是否迁移框架**: 不迁移，继续现有 React 19 + Vite 7 + Tailwind 4 ✅
6. ⚠️ **待确认：阅读模式是否保留？** 还是简化为只有"标准"和"专注"两种？
7. ⚠️ **待确认：博客内容未来是否需要从 blogPosts.ts 迁移到 MDX 文件？** (本次不做，但需要确认方向)
8. ⚠️ **待确认：Giscus 使用哪个 GitHub repo？** 需要帮用户创建

## Decisions Made
| Decision | Rationale |
|----------|-----------|
| 技术栈保持现有 React 19 + Vite 7 + Tailwind 4 | 现有栈完全够用且领先，迁移成本 (30-40h) 远大于升级成本 (15-20h) |
| 不迁移到 AstroPaper/Blowfish/Next.js 等模板 | 迁移需要完全重写，且定制视觉后模板优势消失 |
| ThemeContext 已有框架，只需开启 switchable 并补充 light 变量 | 减少改动量，复用现有代码 |
| 设计方向从 Digital Punk → 极简高级感 | 用户明确要求 |
| Giscus 作为评论系统 | 开源、基于 GitHub Discussions、无需后端、自动适配主题 |
| 阅读模式用 Context + CSS 实现 | 轻量方案，无需额外库 |
| BTC 打赏用 qrcode.react 前端生成 QR 码 | 无需后端，用户直接扫码支付 |
| 借鉴但不采用外部模板的设计细节 | AstroPaper 排版、Blowfish 卡片悬停、Nextra TOC |

## Errors Encountered
| Error | Attempt | Resolution |
|-------|---------|------------|
|       | 1       |            |

## Notes
- 现有 ThemeProvider 的 `switchable` 参数已预埋，App.tsx 中设为 false，改为 true 即可开启
- 当前只有 dark 模式的 CSS 变量 (在 :root 中用 OKLCH)，light 模式需要新增完整配色
- 博客内容硬编码在 blogPosts.ts，4 篇文章，如要支持更多文章可考虑后续迁移到 MDX
- streamdown 已在 BlogPost 中使用来渲染 Markdown
- @tailwindcss/typography 已安装但 prose 样式需要适配双主题
- 移动端缺少汉堡菜单 (nav links 在 md: 以下 hidden)
- framer-motion 已安装但完全未使用 (当前动画全是 CSS keyframes)
- 部署在 Vercel (纯静态 SPA，rewrites 到 index.html)
- shadcn/ui 有 52 个组件已安装，包括 Sheet (可用于移动端抽屉菜单)
- next-themes 已安装但未使用 (自定义 ThemeContext 代替)
- recharts 已安装 (可用于成果数据可视化)
- 字体系统完整: Space Grotesk (标题) + Inter (正文) + JetBrains Mono (代码)
- Update phase status as you progress: pending -> in_progress -> complete
- Re-read this plan before major decisions
- Log ALL errors - they help avoid repetition
