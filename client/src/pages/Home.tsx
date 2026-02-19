/*
Page: Home
Design: Minimal & Refined
- Clean hero with framer-motion entry animations
- Featured projects with subtle hover effects
- Bitcoin orange brand color
*/

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, BookOpen, Code2, Github, Star, GitFork, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            {/* Avatar */}
            <motion.div
              className="flex justify-center"
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg">
                  <img
                    src="/images/profile-avatar.png"
                    alt="北海"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-md">
                  <span className="text-lg font-bold text-primary-foreground">₿</span>
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold"
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              北海 <span className="text-primary">bhbtc</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl text-muted-foreground"
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              币本位 · 比特币与 Web3 教育者
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed"
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              致力于用生动的叙事方式讲述比特币历史，用清晰的教程引导 Web3 新人入门。
              让复杂的技术概念变得易懂，让理想主义的火种继续传递。
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" className="gap-2 group" asChild>
                <Link href="/projects">
                  探索项目
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="https://github.com/beihaili" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-9 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-muted-foreground/40 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">核心项目</h2>
            <p className="text-muted-foreground">开源 · 教育 · 理想主义</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 border-border/60 overflow-hidden h-full">
                <div
                  className="h-44 bg-cover bg-center relative"
                  style={{ backgroundImage: "url(/images/bitcoin-history-bg.png)" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-1">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      比特币那些事儿
                    </CardTitle>
                    <BookOpen className="w-5 h-5 text-primary shrink-0" />
                  </div>
                  <CardDescription>首部中文比特币通史 · 1976–2025</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    用《明朝那些事儿》的风格，讲述从哈耶克的货币理论到扩容战争的完整历史画卷。
                    23 个章节，生动叙事，深入理解比特币背后的理想主义。
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-primary" />5
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5" />0
                    </span>
                    <span className="text-xs">Shell · HTML</span>
                  </div>
                  <div className="flex gap-2 pt-1">
                    <Button variant="default" size="sm" className="gap-1.5" asChild>
                      <a href="https://beihaili.github.io/Stories-about-Bitcoin/" target="_blank" rel="noopener noreferrer">
                        在线阅读
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1.5" asChild>
                      <a href="https://github.com/beihaili/Stories-about-Bitcoin" target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3" />
                        源码
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 border-border/60 overflow-hidden h-full">
                <div
                  className="h-44 bg-cover bg-center relative"
                  style={{ backgroundImage: "url(/images/web3-project-bg.png)" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-1">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      Get Started with Web3
                    </CardTitle>
                    <Code2 className="w-5 h-5 text-primary shrink-0" />
                  </div>
                  <CardDescription>Web3 入门教程 · 从零到精通</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    现代化的 React 学习平台，支持 AI 助教、Web3 钱包集成和互动演示。
                    整合开源社区优质资源，为 Web3 新人提供最直观的入门指南。
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-primary" />561
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5" />44
                    </span>
                    <span className="text-xs">React · Python · JS</span>
                  </div>
                  <div className="flex gap-2 pt-1">
                    <Button variant="default" size="sm" className="gap-1.5" asChild>
                      <a href="https://beihaili.github.io/Get-Started-with-Web3/" target="_blank" rel="noopener noreferrer">
                        开始学习
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1.5" asChild>
                      <a href="https://github.com/beihaili/Get-Started-with-Web3" target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3" />
                        源码
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Button variant="ghost" className="gap-2 group text-muted-foreground hover:text-foreground" asChild>
              <Link href="/projects">
                查看所有项目
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <motion.div
            className="max-w-2xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">关于我</h2>
            <p className="text-muted-foreground leading-relaxed">
              我是北海，一个比特币和 Web3 的教育者与传播者。
              相信技术可以改变世界，相信开源精神和去中心化的理想。
              通过写作和开源项目，让更多人理解比特币的价值，成为这场技术革命的参与者。
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">
                了解更多
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
