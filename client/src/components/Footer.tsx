import { Github, Mail, Twitter } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "首页", href: "/" },
    { label: "AI案例库", href: "/ai" },
    { label: "项目", href: "/projects" },
    { label: "博客", href: "/blog" },
    { label: "关于", href: "/about" },
    { label: "联系", href: "/contact" },
  ];

  return (
    <footer className="mt-20 border-t border-border/70 bg-[#090b10] text-white">
      <div className="container py-10">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr_0.9fr] md:items-start">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-black text-primary-foreground">
                ₿
              </div>
              <div>
                <div className="font-black">北海 bhbtc</div>
                <div className="text-sm text-white/[0.52]">Bitcoin & Web3</div>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/[0.58]">
              币本位 · 比特币开发者 ·
              教育者。用开源写作和代码，把复杂技术讲清楚。
            </p>
          </div>

          <div>
            <div className="mb-4 text-sm font-black text-white/[0.72]">
              站内导航
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {links.map(item => (
                <Link key={item.href} href={item.href}>
                  <span className="text-white/[0.56] transition-colors hover:text-primary">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-sm font-black text-white/[0.72]">
              项目入口
            </div>
            <div className="space-y-3 text-sm">
              <a
                href="https://github.com/beihaili/Get-Started-with-Web3"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/[0.56] transition-colors hover:text-primary"
              >
                Get Started with Web3
              </a>
              <a
                href="https://github.com/beihaili/Stories-about-Bitcoin"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/[0.56] transition-colors hover:text-primary"
              >
                比特币那些事儿
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-white/[0.45]">
            © {currentYear} 北海 (bhbtc). All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            {[
              {
                href: "https://github.com/beihaili",
                label: "GitHub",
                icon: Github,
              },
              {
                href: "https://x.com/bhbtc1337",
                label: "Twitter",
                icon: Twitter,
              },
              {
                href: "mailto:libohan0218@gmail.com",
                label: "Email",
                icon: Mail,
              },
            ].map(item => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={
                    item.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    item.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/[0.62] transition-colors hover:border-primary/40 hover:text-primary"
                  aria-label={item.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
