import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactMethods = [
  {
    title: "邮件",
    description: "适合合作、技术问题和正式沟通",
    action: "libohan0218@gmail.com",
    link: "mailto:libohan0218@gmail.com",
  },
  {
    title: "GitHub",
    description: "适合项目 Issue、PR 和代码讨论",
    action: "github.com/beihaili",
    link: "https://github.com/beihaili",
  },
  {
    title: "Twitter",
    description: "适合关注动态、轻量交流和内容反馈",
    action: "@bhbtc1337",
    link: "https://x.com/bhbtc1337",
  },
];

const topics = ["比特币", "写作", "AI 实验", "开源项目", "Web3 教程"];

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

      <main className="flex-1">
        <PageHeader
          kicker="联系"
          title="有问题、想法或合作，可以直接发来"
          lede="比特币、写作、开源项目、AI 实验都可以聊。描述越具体，越容易给出有用的回复。"
        />

        <section className="py-12 md:py-16">
          <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <ul className="divide-y divide-border border-y border-border">
                {contactMethods.map(method => (
                  <li key={method.title} className="py-4">
                    <p className="text-sm text-muted-foreground">
                      {method.title}
                    </p>
                    <a
                      href={method.link}
                      target={
                        method.link.startsWith("mailto:") ? undefined : "_blank"
                      }
                      rel={
                        method.link.startsWith("mailto:")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="mt-1 inline-block underline underline-offset-4"
                    >
                      {method.action}
                    </a>
                    <p className="mt-1 text-sm leading-7 text-muted-foreground">
                      {method.description}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-7 text-muted-foreground">
                技术问题最好附上仓库、复现步骤或截图。合作直接说明目标、时间线，以及希望我参与的部分。
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-sm text-muted-foreground">
                {topics.map(topic => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="max-w-xl space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
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

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "发送中..." : "发送消息"}
              </Button>
              <p className="text-sm text-muted-foreground">
                未配置 Formspree 时会打开本地邮件客户端。
              </p>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
