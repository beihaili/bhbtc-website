export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  repo: string;
  title: string;
  subtitle: string;
  summary: string;
  points: string[];
  links: ProjectLink[];
  status: string;
};

export const publishedProjects: Project[] = [
  {
    repo: "Stories-about-Bitcoin",
    title: "比特币那些事儿",
    subtitle: "Stories about Bitcoin",
    summary:
      "以网文笔法，把比特币的历史写成故事，而不是教科书。中英双语，从 1976 年写到 2025 年，共 39 章。",
    points: [
      "中文、英文都可以在线阅读",
      "Release v3.0 提供电子书下载",
      "公开仓库的主要语言是 Python 和 JavaScript",
    ],
    links: [
      {
        label: "阅读中文",
        href: "https://beihaili.github.io/Stories-about-Bitcoin/zh/",
      },
      {
        label: "阅读英文",
        href: "https://beihaili.github.io/Stories-about-Bitcoin/en/",
      },
      {
        label: "电子书",
        href: "https://github.com/beihaili/Stories-about-Bitcoin/releases/tag/v3.0",
      },
      {
        label: "源码",
        href: "https://github.com/beihaili/Stories-about-Bitcoin",
      },
    ],
    status: "",
  },
  {
    repo: "Get-Started-with-Web3",
    title: "Get Started with Web3",
    subtitle: "开源双语 Web3 课程",
    summary:
      "给初学者、构建者和智能体的开源双语课程。11 个模块、62 篇课文，包含 AI Tutor、徽章、版本化 REST API、llms.txt 和只读 MCP。范围从钱包、比特币、以太坊，写到 DeFi、二层、DAO 和智能账户。",
    points: [
      "在线课程站仍由该仓库的 GitHub Pages 提供",
      "仓库简介写明它是 AI-native 的 Web3 课程",
      "另有中文说明 README.zh.md",
    ],
    links: [
      {
        label: "打开课程",
        href: "https://beihaili.github.io/Get-Started-with-Web3/",
      },
      {
        label: "中文说明",
        href: "https://github.com/beihaili/Get-Started-with-Web3/blob/main/README.zh.md",
      },
      {
        label: "源码",
        href: "https://github.com/beihaili/Get-Started-with-Web3",
      },
    ],
    status: "",
  },
];

export const draftProjects: Project[] = [
  {
    repo: "sats4tokens",
    title: "sats4tokens",
    subtitle: "待北海确认",
    summary:
      "用 Lightning 或 Cashu ecash 支付聪，换取有额度上限的 AI API key。无注册、无 KYC，每笔付款只入账一次。",
    points: [
      "原创仓库，不是 fork",
      "仓库主页为 https://sats4tokens.bhbtc.xyz",
      "README 写明站点跑在主网，使用真实聪",
    ],
    links: [
      { label: "打开站点", href: "https://sats4tokens.bhbtc.xyz" },
      { label: "源码", href: "https://github.com/beihaili/sats4tokens" },
    ],
    status: "草稿。是否放进正式项目，待北海确认。",
  },
  {
    repo: "Bitcoin-Study-Quests",
    title: "Bitcoin Study Quests",
    subtitle: "待北海确认",
    summary:
      "中文优先的比特币学习任务：私钥、UTXO、节点、Script、多签、闪电网络和隐私。第一季是 14 天，每项任务要求读一小段材料并交出具体产出。",
    points: [
      "原创仓库，公开页面没有单独的网站",
      "公开贡献记录目前是 1 次提交，时间为 2026-06-26",
      "README 写明不提供投资建议，实验只用 signet 或 testnet",
    ],
    links: [
      {
        label: "源码",
        href: "https://github.com/beihaili/Bitcoin-Study-Quests",
      },
      {
        label: "中文说明",
        href: "https://github.com/beihaili/Bitcoin-Study-Quests/blob/main/README.zh.md",
      },
    ],
    status: "草稿。公开记录较久没有新提交，是否仍在维护，待北海确认。",
  },
  {
    repo: "btcaaron",
    title: "btcaaron",
    subtitle: "待北海确认",
    summary:
      "上游 aaron-recompile/btcaaron 的简介是：支持 Legacy、SegWit 和 Taproot 的比特币测试网交易工具。beihaili/btcaaron 是这个仓库的 fork。",
    points: [
      "与上游 main 相比：ahead 0，behind 62",
      "最近的公开提交作者是 aaron-recompile，不是 beihaili",
      "因此不能把它写成北海正在维护的项目",
    ],
    links: [
      { label: "fork", href: "https://github.com/beihaili/btcaaron" },
      {
        label: "上游",
        href: "https://github.com/aaron-recompile/btcaaron",
      },
    ],
    status: "草稿。是否在本站提及，以及它和上游的关系，待北海确认。",
  },
];

export const trackedRepos = [...publishedProjects, ...draftProjects].map(
  project => project.repo
);
