import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Filter,
  Rss,
  Tag,
} from "lucide-react";
import { allTags, blogPosts, categories } from "@/data/blogPosts";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = blogPosts.filter(post => {
    if (selectedCategory && post.category !== selectedCategory) return false;
    if (selectedTag && !post.tags.includes(selectedTag)) return false;
    return true;
  });

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <div className="site-page">
      <Navigation />

      <main className="flex-1 overflow-hidden">
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-36 md:pb-24">
          <img
            src="/images/blockchain-tech.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-[0.28]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/[0.82] via-background/[0.94] to-background" />
          <div className="container relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <div className="section-kicker mb-5">
                <BookOpen className="h-4 w-4" />
                博客文章
              </div>
              <h1 className="text-4xl font-black leading-tight md:text-6xl">
                记录比特币、Web3 和开源学习中的关键问题
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                不写泛泛而谈的观点，更多记录我在 BOSS Challenge、钱包、
                闪电网络和自托管实践里真正拆过的问题。
              </p>
            </div>
          </div>
        </section>

        <section className="pb-10">
          <div className="container">
            <div className="mx-auto max-w-6xl rounded-[2rem] border border-border/60 bg-card/[0.75] p-5 shadow-xl shadow-black/5 backdrop-blur md:p-6">
              <div className="mb-5 flex items-center gap-2 text-sm font-black text-muted-foreground">
                <Filter className="h-4 w-4 text-primary" />
                筛选文章
              </div>

              <div className="space-y-5">
                <div>
                  <div className="mb-3 text-sm font-bold text-muted-foreground">
                    分类
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant={
                        selectedCategory === null ? "default" : "outline"
                      }
                      size="sm"
                      className="rounded-full"
                      onClick={() => setSelectedCategory(null)}
                    >
                      全部
                    </Button>
                    {categories.map(category => (
                      <Button
                        key={category}
                        variant={
                          selectedCategory === category ? "default" : "outline"
                        }
                        size="sm"
                        className="rounded-full"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-3 text-sm font-bold text-muted-foreground">
                    标签
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant={selectedTag === null ? "default" : "outline"}
                      size="sm"
                      className="rounded-full"
                      onClick={() => setSelectedTag(null)}
                    >
                      全部
                    </Button>
                    {allTags.map(tag => (
                      <Button
                        key={tag}
                        variant={selectedTag === tag ? "default" : "outline"}
                        size="sm"
                        className="rounded-full"
                        onClick={() => setSelectedTag(tag)}
                      >
                        {tag}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              {filteredPosts.length === 0 ? (
                <div className="rounded-[2rem] border border-border/60 bg-card/[0.75] py-20 text-center">
                  <p className="text-lg text-muted-foreground">
                    暂无符合条件的文章
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  {featuredPost && (
                    <article className="elevated-card overflow-hidden rounded-[2rem]">
                      <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
                        <div className="relative min-h-[260px] overflow-hidden bg-[#160f12] p-8 text-white md:min-h-[360px]">
                          <img
                            src="/images/bitcoin-history-bg.jpg"
                            alt=""
                            aria-hidden="true"
                            className="absolute inset-0 h-full w-full object-cover opacity-[0.42]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/20" />
                          <div className="relative flex h-full flex-col justify-between">
                            <Badge className="w-fit rounded-full bg-primary text-primary-foreground">
                              最新文章
                            </Badge>
                            <div>
                              <div className="mb-4 flex flex-wrap gap-3 text-sm text-white/[0.72]">
                                <span className="flex items-center gap-1.5">
                                  <Calendar className="h-4 w-4" />
                                  {featuredPost.date}
                                </span>
                                <span className="flex items-center gap-1.5">
                                  <Clock className="h-4 w-4" />
                                  {featuredPost.readTime}
                                </span>
                              </div>
                              <h2 className="text-3xl font-black leading-tight md:text-4xl">
                                {featuredPost.title}
                              </h2>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 md:p-8">
                          <Badge
                            variant="secondary"
                            className="mb-5 rounded-full"
                          >
                            {featuredPost.category}
                          </Badge>
                          <p className="text-lg leading-8 text-muted-foreground">
                            {featuredPost.excerpt}
                          </p>
                          <div className="mt-7 flex flex-wrap gap-2">
                            {featuredPost.tags.slice(0, 5).map(tag => (
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
                          <Button className="mt-8 rounded-full" asChild>
                            <Link href={`/blog/${featuredPost.id}`}>
                              阅读全文
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </article>
                  )}

                  <div className="grid gap-5 md:grid-cols-2">
                    {remainingPosts.map(post => (
                      <article
                        key={post.id}
                        className="elevated-card flex min-h-[300px] flex-col rounded-3xl p-6"
                      >
                        <div className="mb-5 flex flex-wrap items-center gap-3">
                          <Badge variant="secondary" className="rounded-full">
                            {post.category}
                          </Badge>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3.5 w-3.5" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3.5 w-3.5" />
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="text-2xl font-black leading-tight transition-colors hover:text-primary">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className="mt-4 line-clamp-3 leading-7 text-muted-foreground">
                          {post.excerpt}
                        </p>

                        <div className="mt-auto pt-6">
                          <div className="mb-5 flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map(tag => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="rounded-full text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button
                            variant="ghost"
                            className="rounded-full px-0 font-bold text-primary hover:px-4"
                            asChild
                          >
                            <Link href={`/blog/${post.id}`}>
                              阅读
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="bg-card/35 py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <div className="section-kicker mb-4">
                <Rss className="h-4 w-4" />
                订阅更新
              </div>
              <h2 className="text-3xl font-black md:text-5xl">
                新文章会优先同步到 X
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                关注 @bhbtc1337，获取比特币开发、Web3 教程和 AI
                内容实验的最新记录。
              </p>
              <Button size="lg" className="mt-8 rounded-full" asChild>
                <a
                  href="https://x.com/bhbtc1337"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  关注 @bhbtc1337
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
