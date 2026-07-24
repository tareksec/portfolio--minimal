import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState, type ReactNode } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import {
  Github,
  Linkedin,
  Facebook,
  BookOpen,
  MapPin,
  Circle,
  Download,
  ArrowRight,
  Shield,
  Lock,
  Terminal,
  Network,
  Code2,
  Award,
  Home as HomeIcon,
  User,
  FolderKanban,
  Mail,
  FileText,
  Send,
  Briefcase,
  X,
  ExternalLink,
  Github as GithubIcon,
  Clock,
  ArrowUp,
  Sun,
  Moon,
  Phone,
} from "lucide-react";
import heroArt from "@/assets/hero-character.jpeg";
import certGoogle from "@/assets/cert-google.png";
import certEc from "@/assets/cert-eccouncil.png";
import certCisco from "@/assets/cert-cisco.png";
import logoImg from "@/assets/logo.png";
import cvPdf from "@/assets/cv.pdf";
import certAws from "@/assets/aws.png";
import certOpswat from "@/assets/OPSWAT.png";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

// ─────────────────────────────────────────────────────────────
// Cursor Trail
// ─────────────────────────────────────────────────────────────
function CursorTrail() {
  const dotRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;
    const dot = dotRef.current;
    if (!dot) return;
    let tx = -100, ty = -100, cx = -100, cy = -100;
    let rafId: number;
    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    document.addEventListener("mousemove", onMove);
    const tick = () => {
      cx += (tx - cx) * 0.14;
      cy += (ty - cy) * 0.14;
      dot.style.transform = `translate(${cx - 6}px, ${cy - 6}px)`;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => { document.removeEventListener("mousemove", onMove); cancelAnimationFrame(rafId); };
  }, []);
  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 rounded-full bg-primary opacity-60 blur-[1px]"
      style={{ boxShadow: "0 0 10px 4px color-mix(in oklab, var(--neon) 50%, transparent)", willChange: "transform" }}
    />
  );
}

// ─────────────────────────────────────────────────────────────
// Loading Screen
// ─────────────────────────────────────────────────────────────
function LoadingScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2000);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-background"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img src={logoImg} alt="techvrs" className="h-12 w-auto drop-shadow-md" />
        </motion.div>
        <div className="h-0.5 w-52 overflow-hidden rounded-full bg-border">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="h-full rounded-full bg-primary"
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-mono text-xs tracking-widest text-muted-foreground"
        >
          Initializing secure connection…
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// 3D Tilt Card wrapper
// ─────────────────────────────────────────────────────────────
function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isTouchDevice = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice) return;
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 9}deg) rotateY(${x * 9}deg) scale(1.01)`;
  };
  const onMouseLeave = () => {
    const el = cardRef.current;
    if (el) el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
  };
  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certs" },
  { id: "contact", label: "Contact" },
];

const ROLES = [
  "SOC-Focused Security Analyst | SIEM · MITRE ATT&CK · Threat Detection",
  "Penetration Tester",
  "Web App Security Enthusiast",
];

function Portfolio() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen onDone={() => setLoading(false)} />}</AnimatePresence>
      <CursorTrail />
      <div className="relative min-h-screen overflow-x-hidden text-foreground">
        <div className="pointer-events-none fixed inset-0 grid-bg opacity-40" aria-hidden />
        <TopNav />
        <main>
          <Hero />
          <About />
          <NowCard />
          <Experience />
          {/* <Testimonials /> */}
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
        <GlassDock />
        <Toaster position="bottom-right" richColors />
      </div>
    </>
  );
}

// ─────────────────────────────────────────────────────────────
// Theme toggle (in-memory, no localStorage)
// ─────────────────────────────────────────────────────────────
function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") root.classList.add("light");
    else root.classList.remove("light");
  }, [theme]);
  return { theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) };
}

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="ml-1 flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-all hover:scale-110 hover:bg-primary/15 hover:text-primary"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="flex"
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

// ─────────────────────────────────────────────────────────────
// TopNav
// ─────────────────────────────────────────────────────────────
function TopNav() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="fixed left-1/2 top-4 z-50 -translate-x-1/2 sm:top-6 hidden md:block">
      <nav className="glass-strong flex items-center gap-1 rounded-full px-2 py-1.5 shadow-2xl shadow-black/40">
        <a
          href="https://techvrs.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-1 flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-sm font-bold text-primary transition-all hover:scale-105"
          aria-label="techvrs home"
        >
          <span className="text-accent">&gt;_</span>
          <span>techvrs</span>
        </a>
        {NAV.map((item) => {
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`group relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
              {!isActive && (
                <span className="absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              )}
            </a>
          );
        })}
        <Link
          to="/blog"
          className="group relative rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="relative z-10">Blog</span>
          <span className="absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}

// ─────────────────────────────────────────────────────────────
// Particle Network Background
// ─────────────────────────────────────────────────────────────
function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let particles: { x: number; y: number; vx: number; vy: number }[] = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(80, Math.floor((width * height) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }));
    };

    const getColors = () => {
      const isLight = document.documentElement.classList.contains("light");
      return isLight
        ? { dot: "rgba(30, 130, 90, 0.55)", line: "rgba(30, 130, 90, " }
        : { dot: "rgba(120, 240, 180, 0.55)", line: "rgba(120, 240, 180, " };
    };

    const tick = () => {
      const { dot, line } = getColors();
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        ctx.fillStyle = dot;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
      const max = 130;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < max) {
            ctx.strokeStyle = `${line}${((1 - d / max) * 0.18).toFixed(3)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden />;
}

// ─────────────────────────────────────────────────────────────
// Flip-fade role text
// ─────────────────────────────────────────────────────────────
function FlipFadeRoles() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-block" style={{ perspective: 800 }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLES[i]}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 90, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-block font-mono text-primary"
          style={{ transformStyle: "preserve-3d" }}
        >
          {ROLES[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// ─────────────────────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-4 pt-32 pb-20 sm:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="aurora-layer" />
        <div className="aurora-layer-2" />
      </div>
      <div className="absolute inset-0">
        <ParticleNetwork />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-muted-foreground">Available for freelance work</span>
          </div>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient-neon">Md Tarek</span>
          </h1>

          <p className="min-h-[2.5rem] text-2xl font-medium sm:text-3xl">
            <FlipFadeRoles />
          </p>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Cybersecurity Analyst and Penetration Tester focused on Web Application Security and Network Defense. Drawing on an SEO background, I apply deep analytical thinking to map attack surfaces, hunt for misconfigurations, and implement robust mitigations.
          </p>

          <div className="flex flex-wrap gap-3 text-sm">
            <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              Dhaka, Bangladesh
            </span>
            <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-muted-foreground">
              <Circle className="h-3.5 w-3.5 fill-primary text-primary" />
              Available Now
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="glow-pulse group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_0_28px_var(--neon)]"
            >
              Hire Me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold text-foreground transition-all duration-300 hover:bg-foreground hover:text-background hover:shadow-[0_0_20px_var(--cyan-glow)]"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>

          <SocialRow />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto flex w-full max-w-sm items-center justify-center"
        >
          {/* Ambient glow behind photo */}
          <div className="pointer-events-none absolute inset-0 -z-10 blur-[80px]">
            <div className="mx-auto h-3/4 w-3/4 translate-y-8 rounded-full bg-primary/30" />
          </div>

          <div className="relative">
            {/* Photo container with gradient ring */}
            <div className="hero-photo-ring relative mx-auto h-80 w-80 rounded-full p-1 sm:h-96 sm:w-96">
              <div className="h-full w-full overflow-hidden rounded-full bg-background">
                <img
                  src={heroArt}
                  alt="Portrait of Md Tarek — Cybersecurity Analyst"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            {/* Floating tech icons around the photo */}
            <FloatingIcon className="-left-4 top-8 sm:-left-6 sm:top-10" delay={0}>
              <Lock className="h-5 w-5 text-primary" />
            </FloatingIcon>
            <FloatingIcon className="-right-4 top-20 sm:-right-6 sm:top-24" delay={0.5}>
              <Shield className="h-5 w-5 text-accent" />
            </FloatingIcon>
            <FloatingIcon className="-left-2 bottom-20 sm:-left-4 sm:bottom-24" delay={1}>
              <Code2 className="h-5 w-5 text-primary" />
            </FloatingIcon>
            <FloatingIcon className="-right-2 bottom-6 sm:-right-4 sm:bottom-8" delay={1.5}>
              <Terminal className="h-5 w-5 text-accent" />
            </FloatingIcon>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingIcon({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
      className={`glass absolute flex h-11 w-11 items-center justify-center rounded-2xl shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
}

function SocialRow() {
  const socials = [
    { icon: Github, href: "https://github.com/tareksec", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mdtarek404", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/tarekulislam123", label: "Facebook" },
    { icon: BookOpen, href: "https://medium.com/@mdtareksec", label: "Medium" },
  ];
  return (
    <div className="flex items-center gap-3 pt-2">
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={label}
          className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:text-primary hover:shadow-lg hover:shadow-primary/30"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <Reveal>
          <SectionHeader eyebrow="About" title="Analytical mind, security instinct." />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass rounded-3xl p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
            <p className="text-lg leading-relaxed text-muted-foreground">
              My path into cybersecurity started with search engine algorithms — analyzing how systems 
              rank, respond, and fail. That same analytical rigor now drives how I probe web
              applications, monitor network traffic, and anticipate adversarial tactics. I focus on{" "}
              <span className="text-foreground">
                web application security, active network defense, and hands-on penetration testing
              </span>
              . Whether I'm building SIEM dashboards or exploiting vulnerable VMs, I approach every challenge with an investigative mindset.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Most recently, I built SOC Sentinel — a live SOC dashboard that triages real Wazuh SIEM alerts and maps them to MITRE ATT&CK techniques.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="glass rounded-3xl p-6">
            <div className="mb-3 flex items-center gap-2">
              <Github className="h-4 w-4 text-primary" />
              <span className="font-mono text-xs uppercase tracking-widest text-primary">GitHub Activity</span>
            </div>
            <a href="https://github.com/tareksec" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-xl">
              <img
                src="https://ghchart.rshah.org/2da44e/tareksec"
                alt="GitHub contribution graph for tareksec"
                className="w-full"
                loading="lazy"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Now Card
// ─────────────────────────────────────────────────────────────
function NowCard() {
  return (
    <section className="px-4 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="glass rounded-2xl border-l-[3px] border-primary p-6">
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">Now — What I&apos;m doing</p>
              <span className="font-mono text-[10px] text-muted-foreground">Updated Jul 2026</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="text-sm">
                <span className="font-semibold text-foreground">Preparing → </span>
                <span className="text-muted-foreground">Microsoft SC-200 (Security Operations Analyst)</span>
              </div>
              <div className="text-sm">
                <span className="font-semibold text-foreground">Building → </span>
                <span className="text-muted-foreground">SOC Sentinel v2 — LLM-based alert classification (GPT-4o-mini)</span>
              </div>
              <div className="text-sm">
                <span className="font-semibold text-foreground">Focused on → </span>
                <span className="text-muted-foreground">Network defense &amp; blue team ops</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Testimonials
// ─────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote: "Tarek brings a rare mix of analytical thinking and hands-on technical curiosity to every security challenge. His reports are clear, thorough, and actionable.",
    name: "Alex R.",
    role: "Mentor · Security Consultant",
    initials: "AR",
  },
  {
    quote: "Working with Tarek on our web security audit was a great experience. He identified issues we had missed for months and explained every finding in plain language.",
    name: "Sara M.",
    role: "Client · Startup Founder",
    initials: "SM",
  },
  {
    quote: "One of the most driven self-starters I've seen. Tarek is constantly pushing his skills forward — from studying CVEs to running lab exercises on his own time.",
    name: "J. K.",
    role: "Colleague · CTF Team",
    initials: "JK",
  },
];

function Testimonials() {
  return (
    <section className="px-4 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader eyebrow="Testimonials" title="What others say." />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="glass group flex h-full flex-col gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 font-mono text-xs font-semibold text-primary">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <p className="mt-6 text-center font-mono text-xs text-muted-foreground">
            * Placeholder testimonials — replace with real recommendations.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const EXPERIENCE = [
  {
    role: "Freelancer — SEO Specialist",
    org: "Independent",
    duration: "[START DATE] – [END DATE or Present]",
    desc: "Delivered analytical SEO strategies for clients, sharpening research, data interpretation, and reporting skills that translate directly into security analysis.",
  },
  {
    role: "Cybersecurity Projects / Self-Study",
    org: "Personal Lab",
    duration: "[START DATE] – Present",
    desc: "Practicing web application pentesting, network defense, and vulnerability analysis through certifications, home labs, and CTF platforms.",
  },
];

function Experience() {
  return (
    <section className="px-4 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeader eyebrow="Experience" title="The transition into security." />
        </Reveal>
        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent sm:left-1/2" />
          <div className="space-y-8">
            {EXPERIENCE.map((exp, idx) => (
              <Reveal key={exp.role} delay={idx * 0.1}>
                <div
                  className={`relative flex gap-6 sm:grid sm:grid-cols-2 sm:gap-10 ${
                    idx % 2 ? "sm:[&>*:first-child]:col-start-2" : ""
                  }`}
                >
                  <div className="absolute left-4 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_16px] shadow-primary sm:left-1/2" />
                  <div className={`glass ml-12 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 sm:ml-0 ${idx % 2 ? "sm:mr-10" : "sm:ml-10"}`}>
                    <div className="mb-1 flex items-center gap-2 text-sm text-primary">
                      <Briefcase className="h-3.5 w-3.5" />
                      <span className="font-mono">{exp.duration}</span>
                    </div>
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground">{exp.org}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{exp.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const SKILLS = [
  { icon: Network, title: "Network Security", desc: "Traffic analysis, firewalls, IDS/IPS fundamentals.", evidence: "Wireshark, pfSense, Suricata labs" },
  { icon: Shield, title: "Web Application Security", desc: "OWASP Top 10, secure code review, common vuln classes.", evidence: "Burp Suite, OWASP ZAP, TryHackMe Web Fundamentals" },
  { icon: Terminal, title: "Penetration Testing", desc: "Recon, enumeration, exploitation, reporting.", evidence: "HackTheBox, Nmap, Metasploit, Cisco Ethical Hacker" },
  { icon: Code2, title: "Linux", desc: "Command line, hardening, shell scripting.", evidence: "Bash scripting, Ubuntu/Kali environments" },
  { icon: Code2, title: "Python (Security Scripting)", desc: "Automation, tooling, and lightweight exploit dev.", evidence: "Custom async recon tools, API integration" },
  { icon: Lock, title: "Network Defense (NDE)", desc: "Defensive monitoring, IDS/IPS tuning, log analysis.", evidence: "EC-Council NDE Certification, ELK stack" },
  { icon: Shield, title: "SIEM & Threat Framework Mapping", desc: "Wazuh SIEM deployment, MITRE ATT&CK technique mapping, alert triage and severity classification.", evidence: "Wazuh, OpenSearch, Streamlit, 11k+ alerts triaged" },
];

function SkillEvidence({ evidence, delay }: { evidence: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="mt-4 border-t border-border/50 pt-3 opacity-0 transition-opacity duration-700" style={{ opacity: inView ? 1 : 0, transitionDelay: `${delay}s` }}>
      <div className="flex items-start gap-2">
        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] text-primary">
          ✓
        </span>
        <span className="font-mono text-xs leading-relaxed text-muted-foreground">
          {evidence}
        </span>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader eyebrow="Skills" title="Foundations I'm building on." />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <TiltCard className="h-full">
                <div className="glass group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/20">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <SkillEvidence evidence={s.evidence} delay={i * 0.1} />
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Projects with modal
// ─────────────────────────────────────────────────────────────
type Project = {
  title: string;
  tag: string;
  desc: string;
  tech: string[];
  github?: string;
  demo?: string;
  problem: string;
  approach: string;
  outcome: string;
  featured?: boolean;
  image?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Phishing Triage Kill Chain Analyzer",
    tag: "SOC / Threat Intel",
    featured: true,
    image: "/phishing-arch.png",
    demo: "https://email.techvrs.com/",
    desc: "An AI-powered internal tool for SOC analysts to ingest, analyze, and triage suspicious emails. Maps threats to the Cyber Kill Chain and MITRE ATT&CK frameworks, cross-referencing extracted URLs against VirusTotal and urlscan.io. Features AI-driven threat analysis, dual-source URL reputation checking, dynamic kill chain visualization, deep email parsing (SPF/DKIM/DMARC), interactive SOC chatbot, and a 0–100 risk scoring engine.",
    tech: ["Node.js", "React", "Vite", "MySQL", "OpenRouter LLM", "VirusTotal API", "urlscan.io"],
    github: "https://github.com/tareksec/Phishing-Triage-Kill-Chain-Analyzer",
    problem: "SOC analysts lacked a unified tool to rapidly triage suspicious emails with automated threat intelligence and kill chain context.",
    approach: "Built a full-stack platform with Express backend parsing .eml files via mailparser, enriching URLs through parallel VirusTotal and urlscan.io checks, and leveraging OpenRouter LLMs for automated threat analysis and kill chain mapping.",
    outcome: "Delivered a complete triage workflow — from .eml upload to AI-generated risk scores and kill chain visualization — cutting email analysis time from 15+ minutes to under 2 minutes.",
  },
  {
    title: "AI-Powered Alert Triage with MITRE ATT&CK Auto-Tagging",
    tag: "SIEM / SOC",
    featured: true,
    image: "/alert-dashboard.png",
    desc: "A SOC console that pulls live alerts from a Wazuh SIEM deployment (Azure VM), auto-tags each with its MITRE ATT&CK technique, and renders severity breakdown, top techniques, and a full triage queue in a Streamlit dashboard. Deployed and tested end-to-end against a live feed of 11,893+ real alerts.",
    tech: ["Wazuh", "Python", "MITRE ATT&CK", "Streamlit", "OpenSearch API"],
    github: "https://github.com/tareksec/-AI-Powered-Alert-Triage-System-with-MITRE-ATT-CK-Auto-Tagging",
    problem: "Raw SIEM alerts lacked immediate context and MITRE ATT&CK mapping, making triage slow and manual.",
    approach: "Built a Streamlit dashboard pulling live alerts from an Azure Wazuh VM via OpenSearch API, implementing auto-tagging for techniques and severity.",
    outcome: "Successfully tested against 11,893+ real alerts, providing instant visibility into top techniques and accelerating triage.",
  },
  {
    title: "Local Network Traffic Analysis & MITM Lab",
    tag: "Network Security / Blue Team",
    desc: "Built a hands-on lab using mitmproxy and Scapy to intercept and analyze traffic on an authorized local network, covering reconnaissance, interception, and custom traffic analysis scripting. Documented defense and mitigation strategies against MITM-style attacks, including certificate pinning and VPN usage.",
    tech: ["mitmproxy", "Scapy", "Python", "Wireshark"],
    github: "https://github.com/tareksec/local-Network-Traffic-Analysis-MITM-Lab",
    problem: "Needed a controlled environment to study network interception techniques and validate defensive measures against Man-in-the-Middle attacks.",
    approach: "Configured a local lab network, deployed mitmproxy for HTTP/S interception, and wrote custom Scapy scripts to analyze packet flows and test certificate pinning bypasses.",
    outcome: "Successfully demonstrated practical MITM attack vectors and documented concrete mitigation strategies for securing local network traffic.",
  },
  {
    title: "Web Vulnerability Scanning & WordPress Security Hardening",
    tag: "Web Application Security",
    desc: "Used Acunetix and related web vulnerability scanners to identify security flaws across WordPress sites and web applications. Diagnosed and remediated vulnerabilities using Wordfence, reducing attack surface and improving overall site security posture.",
    tech: ["Acunetix", "WordPress", "Wordfence"],
    problem: "Target WordPress environments required a comprehensive security audit to identify and remediate known vulnerabilities.",
    approach: "Conducted automated vulnerability scans using Acunetix, manually verified findings, and deployed Wordfence for continuous monitoring and firewall protection.",
    outcome: "Significantly reduced the attack surface by hardening configurations, patching identified flaws, and implementing active defense mechanisms.",
  },
  {
    title: "LLM Fine-Tuning on Azure VM",
    tag: "AI / Cloud / ML",
    desc: "Trained and fine-tuned a large language model on custom datasets using Azure virtual machine infrastructure, gaining hands-on experience with cloud-based ML workflows.",
    tech: ["Azure", "LLM Fine-Tuning", "Python"],
    problem: "Required scalable compute resources to fine-tune an open-source LLM on a specialized dataset.",
    approach: "Provisioned and configured GPU-accelerated Azure virtual machines, prepared custom training datasets, and executed the fine-tuning pipeline using Python ML frameworks.",
    outcome: "Successfully deployed a fine-tuned model capable of specialized tasks, establishing a reusable cloud-based ML workflow.",
  }
];

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const isFeatured = project.featured;
  return (
    <button
      onClick={onClick}
      className={`project-card group relative h-full w-full overflow-hidden rounded-2xl text-left transition-all duration-500 ${
        isFeatured
          ? "project-card-featured p-0"
          : "glass p-6 hover:-translate-y-2 hover:border-accent/50 hover:shadow-2xl hover:shadow-primary/15"
      }`}
    >
      {/* Animated gradient border for featured */}
      {isFeatured && (
        <>
          <div className="project-border-glow absolute -inset-px z-0 rounded-2xl" />
          <div className="relative z-10 flex h-full flex-col rounded-[calc(1rem-1px)] bg-background p-6 sm:p-8">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary font-mono text-xs font-bold text-primary-foreground">
                {String(index).padStart(2, "0")}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary">Featured</span>
              <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-accent">{project.tag}</span>
            </div>
            <h3 className="text-xl font-bold leading-tight sm:text-2xl">{project.title}</h3>
            <p className="mt-3 flex-1 overflow-hidden text-sm leading-relaxed text-muted-foreground line-clamp-4">{project.desc}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.slice(0, 5).map((t) => (
                <span key={t} className="rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] font-medium text-primary ring-1 ring-primary/20">
                  {t}
                </span>
              ))}
              {project.tech.length > 5 && (
                <span className="rounded-full bg-muted px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                  +{project.tech.length - 5}
                </span>
              )}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                Explore case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:scale-105"
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:border-primary/60 hover:text-primary"
                >
                  <GithubIcon className="h-4 w-4" /> GitHub
                </a>
              )}
            </div>
          </div>
        </>
      )}

      {/* Regular project card */}
      {!isFeatured && (
        <>
          {/* Shimmer overlay */}
          <div className="project-shimmer absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {/* Top gradient line */}
          <div className="absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          {/* Glow backdrop */}
          <div className="absolute -right-12 -top-12 z-0 h-32 w-32 rounded-full bg-primary/0 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />
          
          <div className="relative z-20">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">{project.tag}</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 font-mono text-xs font-bold text-primary/60 transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                {String(index).padStart(2, "0")}
              </span>
            </div>
            <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">{project.title}</h3>
            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{project.desc}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.slice(0, 3).map((t) => (
                <span key={t} className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <div className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                View case study <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <GithubIcon className="h-3.5 w-3.5" /> GitHub
                </a>
              )}
            </div>
          </div>
        </>
      )}
    </button>
  );
}

function Projects() {
  const [open, setOpen] = useState<Project | null>(null);
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const regularProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative px-4 py-24 sm:px-8">
      {/* Section background accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.03] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader eyebrow="Projects" title="Things I've broken (safely)." />
        </Reveal>

        {/* Featured projects row */}
        {featuredProjects.length > 0 && (
          <div className={`mb-6 grid gap-5 ${featuredProjects.length > 1 ? "lg:grid-cols-2" : ""}`}>
            {featuredProjects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <ProjectCard project={p} index={i + 1} onClick={() => setOpen(p)} />
              </Reveal>
            ))}
          </div>
        )}

        {/* Regular projects grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {regularProjects.map((p, i) => (
            <Reveal key={p.title} delay={(i + 1) * 0.1}>
              <ProjectCard project={p} index={i + 2} onClick={() => setOpen(p)} />
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setOpen(null)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass-strong relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-8"
            >
              <button
                onClick={() => setOpen(null)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition hover:bg-primary/10 hover:text-primary"
              >
                <X className="h-4 w-4" />
              </button>
              <span className="font-mono text-xs uppercase tracking-widest text-accent">{open.tag}</span>
              <h3 className="mt-2 text-2xl font-bold">{open.title}</h3>
              <p className="mt-2 text-muted-foreground">{open.desc}</p>
              {open.image && (
                <div className="mt-6 overflow-hidden rounded-xl border border-border">
                  <img src={open.image} alt={open.title} className="h-auto w-full object-cover" />
                </div>
              )}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {open.tech.map((t) => (
                  <span key={t} className="rounded-md bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 space-y-4 text-sm">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">Problem</p>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{open.problem}</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">Approach</p>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{open.approach}</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">Outcome</p>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{open.outcome}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {open.github && (
                  <a
                    href={open.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:border-primary/60 hover:text-primary"
                  >
                    <GithubIcon className="h-4 w-4" /> GitHub
                  </a>
                )}
                {open.demo && (
                  <a
                    href={open.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:scale-105"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Certifications
// ─────────────────────────────────────────────────────────────
type Cert = {
  title: string;
  issuer: string;
  date: string;
  verify?: string;
  image?: string;
  featured?: boolean;
  inProgress?: boolean;
  desc?: string;
};

const CERTS: Cert[] = [
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google · Coursera (9-course program)",
    date: "Jan 24, 2026",
    verify: "https://coursera.org/verify/professional-cert/VUOP1P0YBNG1",
    image: certGoogle,
    featured: true,
  },
  {
    title: "Ethical Hacker",
    issuer: "Cisco Networking Academy",
    date: "May 19, 2026",
    verify: "https://www.credly.com/badges/948bcd84-6552-486e-a713-6e0d38ce2919",
    image: certCisco,
  },
  {
    title: "NDE-112-51: Network Defense Essentials (NDE)",
    issuer: "EC-Council via edX",
    date: "Jan 24, 2026",
    verify: "https://courses.edx.org/certificates/bcc0a5b938ba4c55a450a82960c83320",
    image: certEc,
  },
  {
    title: "Microsoft Certified: Security Analyst",
    issuer: "Microsoft",
    date: "Expected 2026",
    inProgress: true,
  },
];

const ADDITIONAL_CERTS: Cert[] = [
  {
    title: "Foundations of Prompt Engineering",
    issuer: "AWS Training and Certification",
    date: "Date TBD",
    image: certAws,
    verify: "blob:https://skillbuilder.aws/3cca1d35-67e8-4036-ad97-ea06fae2b3da",
  },
  {
    title: "Introduction to Critical Infrastructure Protection (ICIP)",
    issuer: "OPSWAT",
    date: "Date TBD",
    image: certOpswat,
    verify: "https://www.credly.com/badges/33321fa1-4a68-47f4-8ad0-5d05a4844025",
  }
];

function Certifications() {
  const [activeTab, setActiveTab] = useState<"main" | "additional">("main");
  const [openCert, setOpenCert] = useState<Cert | null>(null);

  return (
    <section id="certifications" className="px-4 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader eyebrow="Certifications" title="Verified credentials." />
        </Reveal>

        {ADDITIONAL_CERTS.length > 0 && (
          <Reveal delay={0.1}>
            <div className="mb-12 mt-8 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 p-1.5 backdrop-blur-md">
                <button
                  onClick={() => setActiveTab("main")}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                    activeTab === "main"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  Main Certifications
                </button>
                <button
                  onClick={() => setActiveTab("additional")}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                    activeTab === "additional"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  Additional
                </button>
              </div>
            </div>
          </Reveal>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {(activeTab === "main" ? CERTS : ADDITIONAL_CERTS).map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <article
                  onClick={() => setOpenCert(c)}
                  className={`glass group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/20 ${
                    c.featured ? "lg:col-span-2 lg:row-span-1" : ""
                  }`}
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-all group-hover:bg-primary/25" />
                  <div className="relative flex items-start gap-4">
                    <div
                      className={`flex ${
                        c.featured ? "h-14 w-14" : "h-11 w-11"
                      } shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary`}
                    >
                      <Award className={c.featured ? "h-7 w-7" : "h-5 w-5"} />
                    </div>
                    <div className="min-w-0 flex-1">
                      {c.featured && (
                        <p className="font-mono text-[10px] uppercase tracking-widest text-primary">Flagship</p>
                      )}
                      <h3 className={`font-semibold ${c.featured ? "text-xl" : "text-base"}`}>{c.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
                      <p className="mt-0.5 font-mono text-xs text-muted-foreground">{c.date}</p>
                    </div>
                  </div>

                  {c.image && (
                    <div className="relative mt-5 overflow-hidden rounded-xl border border-border bg-background/40">
                      <img
                        src={c.image}
                        alt={c.title}
                        className={`h-auto w-full object-contain ${c.featured ? "" : "max-h-56"}`}
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="relative mt-5 flex-1" />
                  <div className="relative mt-4">
                    {c.inProgress ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1.5 text-xs font-semibold text-accent">
                        <Clock className="h-3.5 w-3.5" /> In Progress
                      </span>
                    ) : (
                      <a
                        href={c.verify}
                        target="_blank"
                        rel="noreferrer noopener"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-foreground transition hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                      >
                        Verify <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {openCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            >
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setOpenCert(null)} />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="glass-strong relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl p-8"
              >
                <button
                  onClick={() => setOpenCert(null)}
                  aria-label="Close"
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition hover:bg-primary/10 hover:text-primary"
                >
                  <X className="h-4 w-4" />
                </button>
                
                <div className="flex items-start gap-4">
                  <div
                    className={`flex ${
                      openCert.featured ? "h-14 w-14" : "h-11 w-11"
                    } shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary`}
                  >
                    <Award className={openCert.featured ? "h-7 w-7" : "h-5 w-5"} />
                  </div>
                  <div>
                    {openCert.featured && (
                      <p className="font-mono text-[10px] uppercase tracking-widest text-primary">Flagship</p>
                    )}
                    <h3 className="text-xl font-bold">{openCert.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{openCert.issuer}</p>
                    <p className="mt-0.5 font-mono text-xs text-muted-foreground">{openCert.date}</p>
                  </div>
                </div>

                {openCert.desc && (
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{openCert.desc}</p>
                )}

                {openCert.image && (
                  <div className="mt-6 overflow-hidden rounded-xl border border-border bg-background/40">
                    <img src={openCert.image} alt={openCert.title} className="h-auto w-full object-contain" />
                  </div>
                )}

                <div className="mt-6">
                  {openCert.inProgress ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-4 py-2 text-sm font-semibold text-accent">
                      <Clock className="h-4 w-4" /> In Progress
                    </span>
                  ) : (
                    <a
                      href={openCert.verify}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:scale-105"
                    >
                      <ExternalLink className="h-4 w-4" /> Verify Credential
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

function ObfuscatedContact({ icon: Icon, type, value }: { icon: any; type: string; value: string }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="flex items-center gap-3">
      <Icon className="h-4 w-4 text-primary" />
      {revealed ? (
        <span className="font-mono text-muted-foreground">{value}</span>
      ) : (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="font-mono text-xs text-primary/80 transition-colors hover:text-primary hover:underline"
        >
          Click to reveal {type}
        </button>
      )}
    </div>
  );
}

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Email service not configured yet. Please add EmailJS credentials.");
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        publicKey,
      );
      toast.success("Message sent! I'll get back to you within 24 hours.");
      reset();
    } catch {
      toast.error("Failed to send message. Please try again or email directly.");
    }
  };

  return (
    <section id="contact" className="px-4 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeader eyebrow="Contact" title="Let's talk security." />
        </Reveal>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit(onSubmit)} className="glass space-y-4 rounded-3xl p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name">
                  <input
                    type="text"
                    placeholder="Your name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full rounded-xl border border-border bg-input/30 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                  )}
                </Field>
                <Field label="Email">
                  <input
                    type="email"
                    placeholder="you@domain.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email address" },
                    })}
                    className="w-full rounded-xl border border-border bg-input/30 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                  )}
                </Field>
              </div>
              <Field label="Message">
                <textarea
                  rows={5}
                  placeholder="Tell me about your project or engagement..."
                  {...register("message", { required: "Message is required", minLength: { value: 10, message: "Message must be at least 10 characters" } })}
                  className="w-full resize-none rounded-xl border border-border bg-input/30 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                )}
              </Field>
              <button
                type="submit"
                disabled={isSubmitting}
                className="glow-pulse inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_28px_var(--neon)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
              >
                {isSubmitting ? "Sending…" : "Send Message"} <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass flex h-full flex-col justify-between gap-6 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-primary">Direct</p>
                <h3 className="mt-2 text-2xl font-bold">Prefer email?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Reach out any time — I typically respond within 24 hours.
                </p>
              </div>
              <div className="space-y-3 text-sm">
                <ObfuscatedContact icon={Mail} type="email" value="mdtarekcom376@gmail.com" />
                <ObfuscatedContact icon={Phone} type="WhatsApp" value="+880 1903-878932" />
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Dhaka, Bangladesh</span>
                </div>
              </div>
              <SocialRow />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 px-4 py-10 pb-28 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
          <img src={logoImg} alt="techvrs" className="h-6 w-auto" />
          <span>© {new Date().getFullYear()} <a href="https://techvrs.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">techvrs.com</a> — All rights reserved</span>
        </div>
        <div className="flex items-center gap-4">
          <SocialRow />
          <a
            href="#home"
            className="ml-2 inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition hover:border-primary/60 hover:text-primary"
          >
            <ArrowUp className="h-3.5 w-3.5" /> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

function GlassDock() {
  const items: { icon: typeof HomeIcon; label: string; href?: string; to?: string }[] = [
    { icon: HomeIcon, label: "Home", href: "#home" },
    { icon: User, label: "About", href: "#about" },
    { icon: FolderKanban, label: "Projects", href: "#projects" },
    { icon: Award, label: "Certs", href: "#certifications" },
    { icon: BookOpen, label: "Blog", to: "/blog" },
    { icon: Mail, label: "Contact", href: "#contact" },
    { icon: FileText, label: "Resume", href: "#" },
  ];
  return (
    <div className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2 md:hidden">
      <div className="glass-strong flex items-end gap-1.5 rounded-2xl px-3 py-2 shadow-2xl shadow-black/50">
        {items.map(({ icon: Icon, label, href, to }) => {
          const cls =
            "group relative flex h-11 w-11 items-center justify-center rounded-xl text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:scale-125 hover:bg-primary/15 hover:text-primary";
          const inner = (
            <>
              <Icon className="h-5 w-5" />
              <span className="pointer-events-none absolute -top-9 whitespace-nowrap rounded-md bg-popover px-2 py-1 text-xs font-medium text-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                {label}
              </span>
            </>
          );
          return to ? (
            <Link key={label} to={to} aria-label={label} className={cls}>
              {inner}
            </Link>
          ) : (
            <a key={label} href={href} aria-label={label} className={cls}>
              {inner}
            </a>
          );
        })}
      </div>
    </div>
  );
}
