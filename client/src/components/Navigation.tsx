/*
Component: Navigation
Design: Minimal refined navigation
- Fixed top navigation with backdrop blur
- Bitcoin orange active states
- Theme toggle with Sun/Moon animation
- Mobile: Sheet drawer with hamburger menu
*/

import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Github, Twitter, Sun, Moon, Menu } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const { theme, toggleTheme, switchable } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { path: "/", label: "首页" },
    { path: "/projects", label: "项目" },
    { path: "/blog", label: "博客" },
    { path: "/about", label: "关于" },
    { path: "/contact", label: "联系" },
  ];

  const ThemeToggle = () =>
    switchable ? (
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="hover:bg-muted relative"
        aria-label="切换主题"
      >
        <AnimatePresence mode="wait" initial={false}>
          {theme === "dark" ? (
            <motion.span
              key="moon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute"
            >
              <Moon className="w-4 h-4" />
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute"
            >
              <Sun className="w-4 h-4" />
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
    ) : null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border transition-colors duration-300">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">₿</span>
              </div>
              <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                北海
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    location === item.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Right side: social + theme + mobile menu */}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hidden md:flex hover:text-primary hover:bg-muted"
            >
              <a
                href="https://github.com/beihaili"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hidden md:flex hover:text-primary hover:bg-muted"
            >
              <a
                href="https://x.com/bhbtc1337"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </Button>

            <ThemeToggle />

            {/* Mobile hamburger */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden hover:bg-muted"
                  aria-label="菜单"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 pt-12">
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <Link key={item.path} href={item.path}>
                      <span
                        onClick={() => setMobileOpen(false)}
                        className={`block px-4 py-3 rounded-md text-sm font-medium cursor-pointer transition-colors duration-200 ${
                          location === item.path
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  ))}

                  <div className="mt-6 pt-6 border-t border-border flex items-center gap-2 px-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="hover:text-primary hover:bg-muted"
                    >
                      <a
                        href="https://github.com/beihaili"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="hover:text-primary hover:bg-muted"
                    >
                      <a
                        href="https://x.com/bhbtc1337"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                      >
                        <Twitter className="w-4 h-4" />
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
