/*
Page: Blog
Design: Clean blog listing with filtering
- Blog post cards
- Category and tag filtering
- Search functionality
*/

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Link } from "wouter";
import { blogPosts, categories, allTags } from "@/data/blogPosts";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = blogPosts.filter(post => {
    if (selectedCategory && post.category !== selectedCategory) return false;
    if (selectedTag && !post.tags.includes(selectedTag)) return false;
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Page Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-transparent"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              博客文章
            </h1>
            <p className="text-lg text-muted-foreground">
              分享关于比特币、Web3 和开源的思考
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Category Filter */}
            <div>
              <h3 className="text-sm font-semibold mb-3 text-muted-foreground">分类</h3>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                >
                  全部
                </Button>
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Tag Filter */}
            <div>
              <h3 className="text-sm font-semibold mb-3 text-muted-foreground">标签</h3>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedTag === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(null)}
                >
                  全部
                </Button>
                {allTags.map(tag => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 pb-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-lg text-muted-foreground">暂无符合条件的文章</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="group hover:shadow-xl transition-all duration-300 border-border/50 flex flex-col"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary">{post.category}</Badge>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        <Link href={`/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 3).map(tag => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button variant="ghost" size="sm" className="gap-2 group-hover:gap-3 transition-all" asChild>
                          <Link href={`/blog/${post.id}`}>
                            阅读
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">订阅更新</h2>
            <p className="text-lg text-muted-foreground">
              在 Twitter 上关注我,第一时间获取新文章通知
            </p>
            <div className="pt-4">
              <Button size="lg" variant="default" asChild>
                <a href="https://x.com/bhbtc1337" target="_blank" rel="noopener noreferrer">
                  关注 @bhbtc1337
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
