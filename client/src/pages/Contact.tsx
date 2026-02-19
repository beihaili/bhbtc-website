/*
Page: Contact
Design: Professional contact form with validation
- Clean form layout
- Input validation
- Success/error states
*/

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, MessageSquare, Send, Github, Twitter } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("请填写所有必填字段");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("请输入有效的邮箱地址");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("消息已发送!我会尽快回复您。");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "邮件联系",
      description: "通过表单发送消息,我会在 24 小时内回复",
      action: "填写表单",
    },
    {
      icon: Github,
      title: "GitHub",
      description: "在我的开源项目中提交 Issue 或 PR",
      action: "访问 GitHub",
      link: "https://github.com/beihaili",
    },
    {
      icon: Twitter,
      title: "Twitter",
      description: "在 Twitter 上关注我,了解最新动态",
      action: "关注我",
      link: "https://x.com/bhbtc1337",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Page Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-transparent"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              联系我
            </h1>
            <p className="text-lg text-muted-foreground">
              有任何问题或想法?欢迎与我交流
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {contactMethods.map((method) => (
              <Card key={method.title} className="border-border/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                  {method.link ? (
                    <Button variant="outline" size="sm" asChild>
                      <a href={method.link} target="_blank" rel="noopener noreferrer">
                        {method.action}
                      </a>
                    </Button>
                  ) : (
                    <span className="text-sm text-primary">{method.action}</span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  发送消息
                </CardTitle>
                <CardDescription>
                  填写下方表单,我会尽快回复您的消息
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
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
                      placeholder="请输入您的消息内容..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        发送中...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
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

      {/* Additional Info */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">期待与您交流</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              无论您是对比特币、Web3 感兴趣的新人,还是想讨论技术问题的开发者,
              或是希望合作的伙伴,我都非常欢迎您的来信。
              让我们一起推动去中心化技术的发展,传播比特币的理想。
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
