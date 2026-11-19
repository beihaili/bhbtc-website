import { Github, Mail, Twitter } from "lucide-react";
import { Link } from "wouter";

const links = [
  { label: "首页", href: "/" },
  { label: "比特币", href: "/blog?pillar=bitcoin" },
  { label: "写作", href: "/blog" },
  { label: "AI", href: "/ai" },
  { label: "项目", href: "/projects" },
  { label: "关于", href: "/about" },
  { label: "联系", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-border">
      <div className="container py-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <p className="font-serif text-lg">北海</p>
            <p className="mt-2 max-w-sm text-sm leading-7 text-muted-foreground">
              比特币开发者、教育者和写作者。三条线：比特币、写作、AI。
            </p>
          </div>

          <div>
            <p className="text-sm text-foreground">站内</p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {links.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-foreground">作品</p>
            <div className="mt-3 space-y-2 text-sm">
              <a
                href="https://beihaili.github.io/Stories-about-Bitcoin/zh/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground"
              >
                比特币那些事儿
              </a>
              <a
                href="https://github.com/beihaili/Get-Started-with-Web3"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground"
              >
                Get Started with Web3
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            © {currentYear} 北海（bhbtc）
          </p>
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
                  className="text-muted-foreground hover:text-foreground"
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
