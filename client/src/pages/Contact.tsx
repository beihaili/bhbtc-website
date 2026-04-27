import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Github,
  Mail,
  MessageSquare,
  Send,
  Twitter,
} from "lucide-react";
import { toast } from "sonner";

const contactMethods = [
  {
    icon: Mail,
    title: "邮件联系",
    description: "适合合作、技术问题和正式沟通",
    action: "发送邮件",
    link: "mailto:libohan0218@gmail.com",
  },
  {
    icon: Github,
    title: "GitHub",
    description: "适合项目 Issue、PR 和代码讨论",
    action: "访问 GitHub",
    link: "https://github.com/beihaili",
  },
  {
    icon: Twitter,
    title: "Twitter",
    description: "适合关注动态、轻量交流和内容反馈",
    action: "关注我",
    link: "https://x.com/bhbtc1337",
  },
];

const topics = ["比特币开发", "开源项目", "Web3 教程", "AI 内容实验"];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("请填写所有必填字段");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("请输入有效的邮箱地址");
      return;
    }

    setIsSubmitting(true);

    try {
      const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
      if (!formspreeId) {
        const mailto = `mailto:libohan0218@gmail.com?subject=${encodeURIComponent(
          formData.subject || "来自网站的消息"
        )}&body=${encodeURIComponent(
          `来自: ${formData.name} (${formData.email})\n\n${formData.message}`
        )}`;
        window.open(mailto, "_blank");
        toast.success("已打开邮件客户端，请发送邮件。");
        setIsSubmitting(false);
        return;
      }

      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("消息已发送！我会尽快回复您。");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("发送失败，请稍后重试或直接发送邮件。");
      }
    } catch {
      toast.error("网络错误，请稍后重试。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="site-page">
      <Navigation />

      <main className="flex-1 overflow-hidden">
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-36 md:pb-24">
          <img
            src="/images/web3-project-bg.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-[0.24]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/[0.84] via-background/95 to-background" />
          <div className="container relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <div className="section-kicker mb-5">
                <MessageSquare className="h-4 w-4" />
                联系我
              </div>
              <h1 className="text-4xl font-black leading-tight md:text-6xl">
                有问题、想法或合作，可以直接发来
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                比特币、Web3、开源项目、AI 内容实验都可以聊。描述越具体，
                我越容易给出有用的回复。
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container">
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
              {contactMethods.map(method => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.title}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="elevated-card rounded-3xl p-6"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-xl font-black">{method.title}</h2>
                    <p className="mt-3 min-h-14 leading-7 text-muted-foreground">
                      {method.description}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                      {method.action}
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="rounded-[2rem] border border-primary/25 bg-[#120b0d] p-6 text-white shadow-2xl shadow-primary/10 md:p-8">
                <div className="section-kicker mb-5 border-white/[0.15] bg-white/10 text-[#ffb16a]">
                  <Mail className="h-4 w-4" />
                  写信前可以带上这些信息
                </div>
                <h2 className="text-3xl font-black">让沟通更高效</h2>
                <p className="mt-4 leading-8 text-white/[0.72]">
                  如果是技术问题，最好附上仓库、复现步骤或截图。如果是合作，
                  直接说明目标、时间线和你希望我参与的部分。
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {topics.map(topic => (
                    <div
                      key={topic}
                      className="rounded-2xl border border-white/[0.12] bg-white/10 px-4 py-3 font-bold"
                    >
                      {topic}
                    </div>
                  ))}
                </div>
              </div>

              <Card className="rounded-[2rem] border-border/60 bg-card/90 shadow-2xl shadow-black/5 dark:bg-white/[0.08]">
                <CardHeader className="p-6 md:p-8">
                  <CardTitle className="flex items-center gap-2 text-2xl font-black">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    发送消息
                  </CardTitle>
                  <CardDescription>
                    未配置 Formspree 时会自动打开本地邮件客户端
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0 md:p-8 md:pt-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          姓名 <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="您的姓名"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          邮箱 <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">主题</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="消息主题"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        消息 <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="请直接写清楚背景、目标和你希望我帮忙的地方..."
                        rows={7}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="h-12 w-full rounded-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "发送中..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          发送消息
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
