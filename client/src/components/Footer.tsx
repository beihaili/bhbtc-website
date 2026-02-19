/*
Component: Footer
Design: Minimalist footer with social links and copyright
- Dark background with subtle border
- Centered layout
*/

import { Github, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {currentYear} 北海 (bhbtc). 币本位 · Bitcoin & Web3
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/beihaili"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/bhbtc1337"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 text-sm">
            <a
              href="https://github.com/beihaili/Get-Started-with-Web3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Get Started with Web3
            </a>
            <span className="text-muted-foreground/50">·</span>
            <a
              href="https://github.com/beihaili/Stories-about-Bitcoin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              比特币那些事儿
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
