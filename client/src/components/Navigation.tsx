import { useState } from "react";
import { Link, useLocation, useSearch } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Github, Menu, Moon, Sun, Twitter } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";

const primaryNav = [
  { href: "/", label: "首页", id: "home" },
  { href: "/blog?pillar=bitcoin", label: "比特币", id: "bitcoin" },
  { href: "/blog", label: "写作", id: "writing" },
  { href: "/ai", label: "AI", id: "ai" },
  { href: "/about", label: "关于", id: "about" },
];

const secondaryNav = [
  { href: "/projects", label: "项目", id: "projects" },
  { href: "/contact", label: "联系", id: "contact" },
];

function isActive(id: string, location: string, search: string) {
  const pillar = new URLSearchParams(search).get("pillar");
  const onBlogList = location === "/blog";
  const onArticle = location.startsWith("/blog/");

  if (id === "home") return location === "/";
  if (id === "bitcoin") return onBlogList && pillar === "bitcoin";
  if (id === "writing")
    return onArticle || (onBlogList && pillar !== "bitcoin");
  if (id === "ai") return location === "/ai";
  if (id === "about") return location === "/about";
  if (id === "projects") return location === "/projects";
  if (id === "contact") return location === "/contact";
  return false;
}

export default function Navigation() {
  const [location] = useLocation();
  const search = useSearch();
  const { theme, toggleTheme, switchable } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const itemClass = (id: string) =>
    isActive(id, location, search)
      ? "text-foreground"
      : "text-muted-foreground hover:text-foreground";

  const ThemeToggle = () =>
    switchable ? (
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="relative hover:bg-muted"
        aria-label="切换主题"
      >
        <AnimatePresence mode="wait" initial={false}>
          {theme === "dark" ? (
            <motion.span
              key="moon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute"
            >
              <Moon className="h-4 w-4" />
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute"
            >
              <Sun className="h-4 w-4" />
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
    ) : null;

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container">
        <div className="flex h-14 items-center justify-between gap-4">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="font-serif text-lg text-foreground">北海</span>
            <span className="text-xs text-muted-foreground">bhbtc</span>
          </Link>

          <div className="hidden items-center gap-5 md:flex">
            {primaryNav.map(item => (
              <Link
                key={item.id}
                href={item.href}
                className={`text-sm ${itemClass(item.id)}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <Link
              href="/projects"
              className={`mr-2 hidden text-sm md:inline ${itemClass("projects")}`}
            >
              项目
            </Link>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hidden hover:bg-muted hover:text-primary md:flex"
            >
              <a
                href="https://github.com/beihaili"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hidden hover:bg-muted hover:text-primary md:flex"
            >
              <a
                href="https://x.com/bhbtc1337"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
            <ThemeToggle />

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-muted md:hidden"
                  aria-label="菜单"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 pt-12">
                <div className="flex flex-col gap-1">
                  {primaryNav.map(item => (
                    <Link key={item.id} href={item.href}>
                      <span
                        onClick={() => setMobileOpen(false)}
                        className={`block px-3 py-3 text-sm ${itemClass(item.id)}`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  ))}
                  <div className="mt-4 border-t border-border pt-4">
                    {secondaryNav.map(item => (
                      <Link key={item.id} href={item.href}>
                        <span
                          onClick={() => setMobileOpen(false)}
                          className={`block px-3 py-3 text-sm ${itemClass(item.id)}`}
                        >
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2 px-3">
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href="https://github.com/beihaili"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href="https://x.com/bhbtc1337"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
