/*
Page: BlogPost
Design: Clean article reading experience
- Full article content with markdown rendering
- Author info and metadata
- Giscus comments and BTC donation
- Related posts suggestions
*/

import { useRoute, Link } from "wouter";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GiscusComments from "@/components/GiscusComments";
import BTCDonation from "@/components/BTCDonation";
import TableOfContents, { type TocItem } from "@/components/TableOfContents";
import { Calendar, Clock, ArrowLeft, Tag, Share2 } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Streamdown } from "streamdown";
import { toast } from "sonner";
import { useTheme } from "@/contexts/ThemeContext";

/** Convert heading text to a URL-safe slug for anchor IDs. */
function slugify(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[\s\u3000]+/g, "-")         // spaces → dash
    .replace(/[^\w\u4e00-\u9fff-]/g, "")  // keep word chars, CJK, dashes
    .replace(/^-+|-+$/g, "");             // trim leading/trailing dashes
}

export default function BlogPost() {
  const [, params] = useRoute("/blog/:id");
  const { theme } = useTheme();
  const post = blogPosts.find(p => p.id === params?.id);
  const articleRef = useRef<HTMLDivElement>(null);
  const [tocItems, setTocItems] = useState<TocItem[]>([]);

  // After Streamdown renders, collect h2/h3 elements, assign id attributes,
  // and build the TOC item list.
  useEffect(() => {
    if (!articleRef.current || !post) return;

    // Small timeout allows Streamdown streaming output to finish.
    const timer = setTimeout(() => {
      if (!articleRef.current) return;
      const headings = articleRef.current.querySelectorAll<HTMLElement>("h2, h3");
      const items: TocItem[] = [];
      const seen = new Map<string, number>();

      headings.forEach((heading) => {
        const text = heading.textContent ?? "";
        let id = slugify(text) || "heading";

        // Deduplicate slugs (e.g. two sections with same name)
        const count = seen.get(id) ?? 0;
        seen.set(id, count + 1);
        if (count > 0) id = `${id}-${count}`;

        heading.id = id;
        const level = parseInt(heading.tagName[1], 10);
        items.push({ level, text, id });
      });

      setTocItems(items);
    }, 80);

    return () => clearTimeout(timer);
  }, [post?.id]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">文章未找到</h1>
            <p className="text-muted-foreground">抱歉,您访问的文章不存在</p>
            <Button asChild>
              <Link href="/blog">返回博客列表</Link>
            </Button>
          </div>
        </div>
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
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Article */}
      <article className="pt-32 pb-20">
        <div className="container">
          {/* Two-column layout: article + sticky TOC on xl+ screens */}
          <div className="flex gap-10 justify-center">

            {/* Main Article Column */}
            <div className="w-full max-w-3xl min-w-0">
              {/* Back Button */}
              <Button variant="ghost" size="sm" className="gap-2 mb-8 -ml-2" asChild>
                <Link href="/blog">
                  <ArrowLeft className="w-4 h-4" />
                  返回博客
                </Link>
              </Button>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge variant="secondary">{post.category}</Badge>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Author & Actions */}
              <div className="flex items-center justify-between pb-8 mb-8 border-b border-border">
                <div className="flex items-center gap-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-11 h-11 rounded-full border-2 border-primary/20"
                  />
                  <div>
                    <p className="font-semibold text-sm">{post.author.name}</p>
                    <p className="text-xs text-muted-foreground">作者</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <BTCDonation />
                  <Button variant="outline" size="sm" className="gap-2" onClick={handleShare}>
                    <Share2 className="w-4 h-4" />
                    分享
                  </Button>
                </div>
              </div>

              {/* Article Content */}
              <div
                ref={articleRef}
                className={`prose prose-lg max-w-none ${theme === "dark" ? "prose-invert" : ""}`}
              >
                <Streamdown>{post.content}</Streamdown>
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-sm">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* BTC Donation — inline card */}
              <div className="mt-10 p-6 rounded-xl border border-primary/20 bg-primary/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-sm">觉得有帮助？</p>
                  <p className="text-sm text-muted-foreground">用 BTC 打赏支持作者继续创作</p>
                </div>
                <BTCDonation />
              </div>

              {/* Giscus Comments */}
              <GiscusComments />
            </div>

            {/* TOC Sidebar — visible only on xl+ and when TOC has items */}
            {tocItems.length > 0 && (
              <aside className="hidden xl:block w-52 shrink-0">
                <div className="sticky top-32 max-h-[calc(100vh-9rem)] overflow-y-auto pb-4">
                  <TableOfContents items={tocItems} />
                </div>
              </aside>
            )}

          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">相关文章</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card
                    key={relatedPost.id}
                    className="group hover:shadow-md transition-all duration-200 border-border/60"
                  >
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                        <Link href={`/blog/${relatedPost.id}`}>
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {relatedPost.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {relatedPost.readTime}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
