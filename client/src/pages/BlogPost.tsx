import { useEffect, useRef, useState } from "react";
import { Link, useRoute } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GiscusComments from "@/components/GiscusComments";
import BTCDonation from "@/components/BTCDonation";
import TableOfContents, { type TocItem } from "@/components/TableOfContents";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Share2,
  Tag,
} from "lucide-react";
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
        <main className="flex flex-1 items-center justify-center px-4">
          <div className="max-w-md text-center">
            <h1 className="text-4xl font-black">文章未找到</h1>
            <p className="mt-4 text-muted-foreground">
              抱歉，您访问的文章不存在
            </p>
            <Button className="mt-6 rounded-full" asChild>
              <Link href="/blog">返回博客列表</Link>
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

      <main className="flex-1 overflow-hidden">
        <section className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
          <img
            src="/images/bitcoin-history-bg.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-[0.28]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/[0.82] via-background/[0.94] to-background" />

          <div className="container relative z-10">
            <div className="mx-auto max-w-4xl">
              <Button
                variant="ghost"
                size="sm"
                className="mb-8 rounded-full"
                asChild
              >
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  返回博客
                </Link>
              </Button>

              <div className="mb-5 flex flex-wrap items-center gap-3">
                <Badge variant="secondary" className="rounded-full">
                  {post.category}
                </Badge>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>

              <h1 className="text-4xl font-black leading-tight md:text-6xl">
                {post.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
                {post.excerpt}
              </p>

              <div className="mt-8 flex flex-col gap-4 border-t border-border/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-12 w-12 rounded-full border-2 border-primary/25"
                  />
                  <div>
                    <p className="font-black">{post.author.name}</p>
                    <p className="text-sm text-muted-foreground">
                      比特币开发者 · 教育者
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <BTCDonation />
                  <Button
                    variant="outline"
                    className="rounded-full"
                    onClick={handleShare}
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    分享
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container">
            <div className="flex justify-center gap-10">
              <article className="w-full max-w-3xl rounded-[2rem] border border-border/60 bg-card/[0.82] p-6 shadow-2xl shadow-black/5 backdrop-blur md:p-9 dark:bg-white/[0.08]">
                <div
                  ref={articleRef}
                  className={`prose prose-lg max-w-none ${
                    theme === "dark" ? "prose-invert" : ""
                  }`}
                >
                  <Streamdown>{post.content}</Streamdown>
                </div>

                <div className="mt-12 border-t border-border pt-8">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="rounded-full"
                      >
                        <Tag className="mr-1 h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl border border-primary/20 bg-primary/[0.07] p-6 sm:flex-row sm:items-center">
                  <div>
                    <p className="font-black">觉得有帮助？</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      用 BTC 打赏支持作者继续创作
                    </p>
                  </div>
                  <BTCDonation />
                </div>

                <GiscusComments />
              </article>

              {tocItems.length > 0 && (
                <aside className="hidden w-56 shrink-0 xl:block">
                  <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-3xl border border-border/60 bg-card/[0.72] p-4 backdrop-blur dark:bg-white/[0.08]">
                    <TableOfContents items={tocItems} />
                  </div>
                </aside>
              )}
            </div>
          </div>
        </section>

        {relatedPosts.length > 0 && (
          <section className="bg-card/35 py-20">
            <div className="container">
              <div className="mx-auto max-w-5xl">
                <h2 className="mb-8 text-3xl font-black">相关文章</h2>
                <div className="grid gap-5 md:grid-cols-2">
                  {relatedPosts.map(relatedPost => (
                    <article
                      key={relatedPost.id}
                      className="elevated-card rounded-3xl p-6"
                    >
                      <Badge variant="secondary" className="mb-4 rounded-full">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="text-xl font-black leading-tight transition-colors hover:text-primary">
                        <Link href={`/blog/${relatedPost.id}`}>
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="mt-4 line-clamp-2 leading-7 text-muted-foreground">
                        {relatedPost.excerpt}
                      </p>
                      <Button
                        variant="ghost"
                        className="mt-5 rounded-full px-0 text-primary hover:px-4"
                        asChild
                      >
                        <Link href={`/blog/${relatedPost.id}`}>
                          继续阅读
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
