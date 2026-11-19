import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="site-page">
      <Navigation />
      <main className="flex flex-1 items-center">
        <div className="container py-28">
          <p className="text-sm text-primary">404</p>
          <h1 className="page-title mt-3">这一页不存在</h1>
          <p className="mt-4 max-w-md leading-8 text-muted-foreground">
            地址可能写错了，或者页面已经挪走。可以从首页或文章重新开始。
          </p>
          <div className="mt-6 flex gap-5 text-sm">
            <Link href="/" className="underline underline-offset-4">
              首页
            </Link>
            <Link href="/blog" className="underline underline-offset-4">
              写作
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
