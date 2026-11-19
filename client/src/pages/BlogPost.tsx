import { useEffect, useRef, useState } from "react";
import { Link, useRoute } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GiscusComments from "@/components/GiscusComments";
import BTCDonation from "@/components/BTCDonation";
import TableOfContents, { type TocItem } from "@/components/TableOfContents";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Streamdown } from "streamdown";
import { toast } from "sonner";
import { useTheme } from "@/contexts/ThemeContext";

function slugify(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[\s\u3000]+/g, "-")
    .replace(/[^\w\u4e00-\u9fff-]/g, "")
    .replace(/^-+|-+$/g, "");
}

function articleBody(title: string, content: string) {
  const lines = content.replace(/^\n/, "").split("\n");
  if (lines[0]?.startsWith("# ")) {
    const heading = lines[0].replace(/^#\s+/, "").trim();
    if (heading === title.trim()) {
      return lines.slice(1).join("\n").replace(/^\n/, "");
    }
  }
  return content;
}

export default function BlogPost() {
  const [, params] = useRoute("/blog/:id");
  const { theme } = useTheme();
  const post = blogPosts.find(p => p.id === params?.id);
  const articleRef = useRef<HTMLDivElement>(null);
  const [tocItems, setTocItems] = useState<TocItem[]>([]);

  useEffect(() => {
    if (!articleRef.current || !post) return;

    const timer = setTimeout(() => {
      if (!articleRef.current) return;
      const headings =
        articleRef.current.querySelectorAll<HTMLElement>("h2, h3");
      const items: TocItem[] = [];
      const seen = new Map<string, number>();

      headings.forEach(heading => {
        const text = heading.textContent ?? "";
        let id = slugify(text) || "heading";
        const count = seen.get(id) ?? 0;

        seen.set(id, count + 1);
        if (count > 0) id = `${id}-${count}`;

        heading.id = id;
        items.push({ level: parseInt(heading.tagName[1], 10), text, id });
      });

      setTocItems(items);
    }, 80);

    return () => clearTimeout(timer);
  }, [post]);

  if (!post) {
    return (
      <div className="site-page">
        <Navigation />
        <main className="flex flex-1 items-center justify-center px-6 pt-24">
          <div className="max-w-md text-center">
            <h1 className="page-title">文章未找到</h1>
            <p className="mt-4 text-muted-foreground">
              这篇地址没有对应的文章。
            </p>
            <Button className="mt-6" asChild>
              <Link href="/blog">返回写作</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("链接已复制到剪贴板");
  };

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  return (
    <div className="site-page">
      <Navigation />

      <main className="flex-1">
        <header className="border-b border-border pt-24 pb-10 md:pt-28 md:pb-12">
          <div className="container">
            <div className="max-w-[40rem]">
              <p className="text-sm">
                <Link
                  href="/blog"
                  className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  写作
                </Link>
                <span className="px-2 text-muted-foreground" aria-hidden="true">
                  /
                </span>
                <span className="text-primary">{post.category}</span>
              </p>
              <h1 className="page-title mt-4">{post.title}</h1>
              <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
                {post.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2 text-foreground">
                  <img
                    src={post.author.avatar}
                    alt=""
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  {post.author.name}
                </span>
                <time dateTime={post.date}>{post.date}</time>
                <span>{post.readTime}</span>
                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 hover:text-foreground"
                >
                  <Share2 className="h-3.5 w-3.5" />
                  复制链接
                </button>
                <BTCDonation />
              </div>
            </div>
          </div>
        </header>

        <section className="py-10 md:py-14">
          <div className="container">
            <div className="flex justify-center gap-14">
              <article className="w-full max-w-[40rem] min-w-0">
                <div
                  ref={articleRef}
                  className={`prose ${theme === "dark" ? "prose-invert" : ""}`}
                >
                  <Streamdown>
                    {articleBody(post.title, post.content)}
                  </Streamdown>
                </div>

                <div className="mt-10 flex flex-wrap gap-x-3 gap-y-2 border-t border-border pt-6 text-sm text-muted-foreground">
                  {post.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
                  <p className="text-sm text-muted-foreground">
                    觉得有帮助，可以用 BTC 打赏，支持继续写下去。
                  </p>
                  <BTCDonation />
                </div>

                <GiscusComments />
              </article>

              {tocItems.length > 0 && (
                <aside className="hidden w-52 shrink-0 xl:block">
                  <div className="sticky top-24">
                    <TableOfContents items={tocItems} />
                  </div>
                </aside>
              )}
            </div>
          </div>
        </section>

        {relatedPosts.length > 0 && (
          <section className="border-t border-border py-12">
            <div className="container">
              <h2 className="font-serif text-2xl">同一分类</h2>
              <div className="mt-6 grid gap-8 md:grid-cols-2">
                {relatedPosts.map(relatedPost => (
                  <article key={relatedPost.id} className="max-w-[36rem]">
                    <p className="text-sm text-muted-foreground">
                      {relatedPost.date}
                      <span className="px-2" aria-hidden="true">
                        ·
                      </span>
                      {relatedPost.category}
                    </p>
                    <h3 className="mt-2 font-serif text-xl leading-snug">
                      <Link
                        href={`/blog/${relatedPost.id}`}
                        className="hover:text-primary"
                      >
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-7 text-muted-foreground">
                      {relatedPost.excerpt}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
