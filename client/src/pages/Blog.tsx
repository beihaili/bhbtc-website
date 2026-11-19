import { useState } from "react";
import { Link, useSearch } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import {
  allTags,
  bitcoinCategories,
  categories,
  postsNewestFirst,
} from "@/data/blogPosts";

export default function Blog() {
  const search = useSearch();
  const pillar = new URLSearchParams(search).get("pillar");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const bitcoinOnly =
    pillar === "bitcoin" && selectedCategory === null && selectedTag === null;

  const filteredPosts = postsNewestFirst().filter(post => {
    if (selectedCategory && post.category !== selectedCategory) return false;
    if (bitcoinOnly && !bitcoinCategories.includes(post.category)) return false;
    if (selectedTag && !post.tags.includes(selectedTag)) return false;
    return true;
  });

  const lede = bitcoinOnly
    ? "这一栏是比特币这条线：开发笔记，以及持有、自托管和币本位的随笔。历史写作和更早的入门文章在「写作」里。"
    : "十二篇文章都还在。分类换成了比特币开发笔记、持有随笔、历史与写作、开源与入门。";

  return (
    <div className="site-page">
      <Navigation />

      <main className="flex-1">
        <PageHeader
          kicker={bitcoinOnly ? "比特币" : "写作"}
          title={bitcoinOnly ? "开发笔记与持有随笔" : "文章"}
          lede={lede}
        />

        <section className="border-b border-border">
          <div className="container py-6">
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className={
                  selectedCategory === null
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }
              >
                {bitcoinOnly ? "此线全部" : "全部分类"}
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "text-foreground underline decoration-primary underline-offset-4"
                      : "text-muted-foreground hover:text-foreground"
                  }
                >
                  {category}
                </button>
              ))}
            </div>

            <details className="mt-4 text-sm">
              <summary className="cursor-pointer text-muted-foreground">
                按标签
              </summary>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                <button
                  type="button"
                  onClick={() => setSelectedTag(null)}
                  className={
                    selectedTag === null
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }
                >
                  全部标签
                </button>
                {allTags.map(tag => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSelectedTag(tag)}
                    className={
                      selectedTag === tag
                        ? "text-foreground underline decoration-primary underline-offset-4"
                        : "text-muted-foreground hover:text-foreground"
                    }
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </details>

            {bitcoinOnly && (
              <p className="mt-4 text-sm text-muted-foreground">
                <Link href="/projects" className="underline underline-offset-4">
                  项目
                </Link>
                <span className="px-2" aria-hidden="true">
                  ·
                </span>
                <Link href="/blog" className="underline underline-offset-4">
                  看全部写作
                </Link>
              </p>
            )}
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container">
            {filteredPosts.length === 0 ? (
              <p className="text-muted-foreground">没有符合条件的文章。</p>
            ) : (
              <ol className="max-w-[42rem] divide-y divide-border border-y border-border">
                {filteredPosts.map(post => (
                  <li key={post.id} className="py-7">
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
                    <h2 className="mt-2 font-serif text-2xl leading-snug">
                      <Link
                        href={`/blog/${post.id}`}
                        className="hover:text-primary"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-3 leading-8 text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
