"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useApp } from "@/context/AppContext";
import { portfolioData, services, skills, projects, testimonials, contacts } from "@/data/portfolio";
import { 
  Send, Mail, Code2, Server, ShieldCheck, ArrowUpRight, Copy, Check, 
  Sparkles, Sun, Moon, Globe, Menu, X, Layout, Smartphone, Zap, Quote, Loader2
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const { lang, setLang } = useApp();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const t = portfolioData[lang];
  const isRtl = lang === "fa";

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "خطایی رخ داد.");
      }
    } catch {
      setStatus("error");
      setErrorMessage(lang === "fa" ? "مشکلی در برقراری ارتباط پیش آمد." : "Something went wrong.");
    }
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout": return <Layout className="w-6 h-6" />;
      case "Smartphone": return <Smartphone className="w-6 h-6" />;
      case "Server": return <Server className="w-6 h-6" />;
      default: return <Zap className="w-6 h-6" />;
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen font-sans bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden w-full relative">
      
      {/* Floating Header */}
      <header className="fixed top-5 left-0 right-0 z-50 px-4">
        <div className="max-w-5xl mx-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-lg rounded-2xl h-14 px-6 flex items-center justify-between">
          <a href="#about" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm group-hover:scale-105 transition-transform bg-black">
              <Image
                src="/logo.jpg"
                alt="Arad Dev Logo"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
            <span className="text-base font-extrabold tracking-tight">
              Arad<span className="text-primary">.Dev</span>
            </span>
          </a>
          
          <div className="flex items-center gap-3 sm:gap-6">
            <nav className="hidden md:flex items-center gap-5 text-sm font-semibold text-slate-600 dark:text-slate-300">
              <a href="#about" className="hover:text-primary transition-colors">{t.nav.about}</a>
              <a href="#services" className="hover:text-primary transition-colors">{t.nav.services}</a>
              <a href="#skills" className="hover:text-primary transition-colors">{t.nav.skills}</a>
              <a href="#projects" className="hover:text-primary transition-colors">{t.nav.projects}</a>
              <a href="#testimonials" className="hover:text-primary transition-colors">{t.nav.testimonials}</a>
              <a href="#contact" className="hover:text-primary transition-colors">{t.nav.contact}</a>
            </nav>

            <div className="flex items-center gap-2 border-l dark:border-slate-800 pl-3 ltr:border-l ltr:pl-3 ltr:border-r-0 rtl:border-r rtl:pr-3 rtl:border-l-0">
              <button
                onClick={() => setLang(lang === "fa" ? "en" : "fa")}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold flex items-center gap-1 transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                {lang === "fa" ? "EN" : "فا"}
              </button>

              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <Menu className="w-5 h-5 text-slate-800 dark:text-slate-200" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-md md:hidden"
            />

            <motion.aside
              initial={{ x: isRtl ? "100%" : "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: isRtl ? "100%" : "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`fixed top-0 bottom-0 ${isRtl ? "right-0" : "left-0"} z-50 w-72 bg-white dark:bg-slate-900 shadow-2xl p-6 flex flex-col justify-between md:hidden border-l dark:border-slate-800`}
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800 bg-black">
                      <Image
                        src="/logo.jpg"
                        alt="Arad Dev Logo"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <span className="text-base font-extrabold text-slate-900 dark:text-white">Arad.Dev</span>
                  </div>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-3 mt-6">
                  <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">{t.nav.about}</a>
                  <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">{t.nav.services}</a>
                  <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">{t.nav.skills}</a>
                  <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">{t.nav.projects}</a>
                  <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">{t.nav.testimonials}</a>
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">{t.nav.contact}</a>
                </nav>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 text-center">
                © {new Date().getFullYear()} Arad Vafaei
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="about" className="pt-32 md:pt-40 pb-20 px-6 max-w-6xl mx-auto flex flex-col justify-center min-h-[85vh] overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/50 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 tracking-wide">{t.badge}</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">{t.name}</h1>
            <p className="text-lg md:text-xl font-medium text-primary mt-3">{t.role}</p>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl mt-6 leading-relaxed">{t.description}</p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#contact" className="px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]">
                {t.buttons.contact}
              </a>
              <a href={contacts.github} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-800 font-medium hover:border-primary hover:text-primary transition-all flex items-center gap-2">
                <FaGithub className="w-5 h-5" /> {t.buttons.github}
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="absolute w-64 h-64 max-w-full bg-blue-500/20 rounded-full blur-3xl -z-10" />
            
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border border-slate-200/60 dark:border-slate-800 shadow-2xl bg-slate-100 dark:bg-slate-900 group">
              <Image
                src="/hero.png"
                alt="Arad Dev Hero"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold mb-12">
            {t.servicesTitle}
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((srv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    {getServiceIcon(srv.icon)}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{srv.title[lang]}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{srv.desc[lang]}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 max-w-6xl mx-auto px-6 overflow-hidden">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold mb-12">
          {t.skillsTitle}
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform">
                {idx === 0 ? <Code2 className="w-6 h-6" /> : idx === 1 ? <Server className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
              </div>
              <h3 className="text-xl font-bold mb-4">{skillGroup.category[lang]}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span key={i} className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium px-3 py-1.5 rounded-lg border border-slate-200/50 dark:border-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold mb-12">
            {t.projectsTitle}
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((proj, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold mb-3">{proj.title[lang]}</h3>
                  
                  <div className="space-y-2 mb-6 text-sm">
                    <p className="text-slate-600 dark:text-slate-400">
                      <strong className="text-slate-900 dark:text-slate-200">{lang === "fa" ? "چالش: " : "Challenge: "}</strong>
                      {proj.challenge[lang]}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      <strong className="text-slate-900 dark:text-slate-200">{lang === "fa" ? "راهکار: " : "Solution: "}</strong>
                      {proj.solution[lang]}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tech.map((tech, i) => (
                      <span key={i} className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-md font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a href={proj.demoUrl} target="_blank" rel="noreferrer" className="text-primary font-semibold text-sm flex items-center gap-1 hover:underline">
                    {lang === "fa" ? "دمو آنلاین" : "Live Demo"} <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white text-sm flex items-center gap-1">
                    <FaGithub className="w-4 h-4" /> Source
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 max-w-6xl mx-auto px-6 overflow-hidden">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold mb-12">
          {t.testimonialsTitle}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm relative flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 left-6 ltr:right-6 ltr:left-auto" />
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 italic">
                "{item.comment[lang]}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary text-white font-bold text-xs flex items-center justify-center">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{item.name}</h4>
                  <span className="text-xs text-slate-500">{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section + Form */}
      <footer id="contact" className="relative bg-slate-950 text-white pt-20 pb-10 border-t border-slate-800/80 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 pb-16 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3 className="text-2xl font-bold">{t.contactTitle}</h3>
            </div>
            <p className="text-slate-400 mb-8 text-sm max-w-md">{t.contactDesc}</p>
            
            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 border border-slate-800 max-w-md">
                <div className="flex items-center gap-3">
                  <Send className="w-4 h-4 text-primary" />
                  <span className="text-sm text-slate-200">Telegram: @v1arad</span>
                </div>
                <button onClick={() => handleCopy("@v1arad", "telegram")} className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white">
                  {copiedKey === "telegram" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 border border-slate-800 max-w-md">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm text-slate-200">Email: aradvafaee1@gmail.com</span>
                </div>
                <button onClick={() => handleCopy("aradvafaee1@gmail.com", "email")} className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white">
                  {copiedKey === "email" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a href={contacts.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-primary transition-all">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href={contacts.telegram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-primary transition-all">
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-6 md:p-8 rounded-2xl">
            <h4 className="text-lg font-bold mb-6">{lang === "fa" ? "ارسال پیام مستقیم" : "Send a Direct Message"}</h4>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-2">{lang === "fa" ? "نام شما" : "Your Name"}</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={lang === "fa" ? "مثلا: علی رضایی" : "John Doe"}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-2">{lang === "fa" ? "ایمیل شما" : "Your Email"}</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-2">{lang === "fa" ? "متن پیام" : "Your Message"}</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={lang === "fa" ? "جزئیات پروژه یا درخواست خود را بنویسید..." : "Write your message..."}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 px-6 rounded-xl bg-primary text-white font-medium hover:bg-primary-hover transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === "loading" ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {lang === "fa" ? "ارسال پیام" : "Send Message"}
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="text-emerald-400 text-xs text-center mt-2 font-medium">
                  {lang === "fa" ? "پیام شما با موفقیت ارسال شد!" : "Message sent successfully!"}
                </p>
              )}

              {status === "error" && (
                <p className="text-rose-400 text-xs text-center mt-2 font-medium">{errorMessage}</p>
              )}
            </form>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-8 border-t border-slate-900 text-center text-slate-500 text-xs">
          © {new Date().getFullYear()} Arad Vafaei. All rights reserved.
        </div>
      </footer>

    </div>
  );
}