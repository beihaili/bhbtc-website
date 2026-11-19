import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { postsNewestFirst } from "@/data/blogPosts";

const pillars = [
  {
    index: "01",
    title: "比特币",
    text: "协议、钱包和自托管。开发笔记记下 BOSS Challenge 里拆开的问题，项目页放公开仓库里能核对的作品。",
    links: [
      { href: "/blog?pillar=bitcoin", label: "开发笔记与持有随笔" },
      { href: "/projects", label: "项目" },
    ],
  },
  {
    index: "02",
    title: "写作",
    text: "随笔、历史，以及把一件事讲到别人能复述。十二篇文章都还在，只按现在的三条线重新归类。",
    links: [{ href: "/blog", label: "全部文章" }],
  },
  {
    index: "03",
    title: "AI",
    text: "实验和工具玩法。小红书时期的提示词仍完整保留，按信息图、人像实验和医美模拟重新分组。",
    links: [{ href: "/ai", label: "AI 实验与工具玩法" }],
  },
];

export default function Home() {
  const latest = postsNewestFirst().slice(0, 4);

  return (
    <div className="site-page">
      <Navigation />

      <main className="flex-1">
        <header className="border-b border-border pt-24 pb-14 md:pt-32 md:pb-20">
          <div className="container">
            <p className="text-sm text-primary">北海 · bhbtc</p>
            <h1 className="page-title mt-4 max-w-[12em]">
              写比特币，也写给读比特币的人。
            </h1>
            <p className="mt-6 max-w-[40rem] text-base leading-8 text-muted-foreground md:text-lg">
              我是北海，比特币开发者、教育者和写作者。正在读 Bitcoin Core
              与闪电网络，把持有和历史写成文章，也把 AI 当成可以亲手试的工具。
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <Link
                href="/blog"
                className="text-foreground underline decoration-primary/60 underline-offset-4"
              >
                阅读文章
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                关于我
              </Link>
            </div>
          </div>
        </header>

        <section className="border-b border-border" aria-label="三条主线">
          <div className="container md:grid md:grid-cols-3">
            {pillars.map(pillar => (
              <article
                key={pillar.title}
                className="border-b border-border py-8 last:border-b-0 md:border-b-0 md:border-l md:px-8 md:py-12 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
              >
                <p className="text-xs tracking-[0.18em] text-muted-foreground">
                  {pillar.index}
                </p>
                <h2 className="mt-3 font-serif text-2xl">{pillar.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {pillar.text}
                </p>
                <div className="mt-5 flex flex-col items-start gap-2 text-sm">
                  {pillar.links.map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="underline decoration-border underline-offset-4 hover:decoration-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container">
            <div className="mb-2 flex items-baseline justify-between gap-4">
              <h2 className="font-serif text-2xl">最近的文章</h2>
              <Link
                href="/blog"
                className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                全部
              </Link>
            </div>
            <ol className="divide-y divide-border border-y border-border">
              {latest.map(post => (
                <li key={post.id} className="py-6">
                  <p className="text-sm text-muted-foreground">
                    <time dateTime={post.date}>{post.date}</time>
                    <span className="px-2" aria-hidden="true">
                      ·
                    </span>
                    {post.category}
                    <span className="px-2" aria-hidden="true">
                      ·
                    </span>
                    {post.readTime}
                  </p>
                  <h3 className="mt-2 font-serif text-xl leading-snug md:text-2xl">
                    <Link
                      href={`/blog/${post.id}`}
                      className="hover:text-primary"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2 max-w-[40rem] text-sm leading-7 text-muted-foreground md:text-base">
                    {post.excerpt}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-10 text-sm text-muted-foreground">
              代码即信任 · 私钥即主权 · 开源即协作
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
