/*
Component: TableOfContents
Renders a sticky sidebar TOC from pre-extracted heading items.
Active section is highlighted via IntersectionObserver.
*/

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface TocItem {
  level: number;  // 2 or 3
  text: string;
  id: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the topmost visible heading
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0% -60% 0%",
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="文章目录">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
        目录
      </p>
      <ul className="space-y-0.5 border-l border-border">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(item.id);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                  setActiveId(item.id);
                }
              }}
              className={cn(
                "block py-1 text-sm leading-snug transition-colors duration-150",
                "hover:text-foreground",
                item.level === 3 ? "pl-6" : "pl-3",
                activeId === item.id
                  ? "text-primary font-medium border-l-2 border-primary -ml-px"
                  : "text-muted-foreground border-l-2 border-transparent -ml-px"
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
