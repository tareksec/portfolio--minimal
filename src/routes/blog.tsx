import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, Calendar, Clock, ExternalLink, Rss } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Md Tarek | techvrs" },
      { name: "description", content: "Cybersecurity writing by Md Tarek — penetration testing notes, web app security walk-throughs, and analyst learnings on techvrs.com." },
      { property: "og:title", content: "Blog — Md Tarek | techvrs" },
      { property: "og:description", content: "Cybersecurity writing by Md Tarek — pentesting, web app security, and analyst notes." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const MEDIUM_URL = "https://medium.com/@mdtareksec";

type Post = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: "Pentesting" | "Web Security" | "Career" | "Write-ups";
  featured?: boolean;
};

const POSTS: Post[] = [
  {
    title: "From SEO to Security: My First 90 Days as an Aspiring Pentester — editable",
    excerpt: "How the analytical habits I built in SEO translated directly into recon, reporting, and adversarial thinking during my transition into cybersecurity.",
    date: "Mar 12, 2026",
    readTime: "8 min read",
    category: "Career",
    featured: true,
  },
  {
    title: "Recon Fundamentals for Web App Pentesting — editable",
    excerpt: "A structured approach to passive and active reconnaissance before touching a single request.",
    date: "Feb 22, 2026",
    readTime: "6 min read",
    category: "Pentesting",
  },
  {
    title: "Reading Your First OWASP Top 10 Report — editable",
    excerpt: "A beginner-friendly walk-through of how to interpret and act on a Top 10 assessment.",
    date: "Feb 05, 2026",
    readTime: "5 min read",
    category: "Web Security",
  },
  {
    title: "Building a Home Blue-Team Lab — editable",
    excerpt: "From pfSense segmentation to Suricata + ELK detection pipelines on a budget.",
    date: "Jan 18, 2026",
    readTime: "10 min read",
    category: "Write-ups",
  },
  {
    title: "IDOR in the Wild: A Guided Walk-through — editable",
    excerpt: "Breaking down a real-world Insecure Direct Object Reference finding from discovery to remediation.",
    date: "Jan 04, 2026",
    readTime: "7 min read",
    category: "Write-ups",
  },
];

const CATEGORY_COLORS: Record<Post["category"], string> = {
  Pentesting: "bg-primary/10 text-primary border-primary/30",
  "Web Security": "bg-accent/10 text-accent border-accent/30",
  Career: "bg-foreground/10 text-foreground border-foreground/20",
  "Write-ups": "bg-primary/10 text-primary border-primary/30",
};

const FILTERS = ["All", "Pentesting", "Web Security", "Career", "Write-ups"] as const;
type Filter = (typeof FILTERS)[number];

function BlogPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const featured = POSTS.find((p) => p.featured) ?? POSTS[0];
  const rest = useMemo(
    () => POSTS.filter((p) => p !== featured).filter((p) => filter === "All" || p.category === filter),
    [filter, featured],
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden px-4 py-16 text-foreground sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Top bar */}
        <div className="mb-10 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition hover:border-primary/60 hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
          <a
            href={MEDIUM_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
          >
            <BookOpen className="h-4 w-4" /> Follow on Medium
          </a>
        </div>

        {/* Header */}
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Blog</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Notes from the terminal.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Thoughts on cybersecurity, pentesting, and my journey from SEO to security.
            Live posts publish to Medium — the cards below are editable placeholders
            until the RSS feed is wired in.
          </p>
        </div>

        {/* Featured post */}
        <motion.a
          href={MEDIUM_URL}
          target="_blank"
          rel="noreferrer noopener"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="group mt-14 block overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
        >
          <div className="grid gap-0 md:grid-cols-[1.1fr_1fr]">
            <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-transparent">
              <BookOpen className="h-16 w-16 text-primary/50 transition-transform duration-500 group-hover:scale-110" />
              <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary backdrop-blur">
                Featured
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${CATEGORY_COLORS[featured.category]}`}>
                  {featured.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" /> {featured.date}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" /> {featured.readTime}
                </span>
              </div>
              <h2 className="text-2xl font-bold leading-tight transition-colors group-hover:text-primary sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Read Full Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </motion.a>

        {/* Filter bar */}
        <div className="mt-14 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Post grid */}
        {rest.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <motion.a
                key={p.title}
                href={MEDIUM_URL}
                target="_blank"
                rel="noreferrer noopener"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-transparent">
                  <BookOpen className="h-10 w-10 text-primary/50 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${CATEGORY_COLORS[p.category]}`}>
                      {p.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                      <Clock className="h-3 w-3" /> {p.readTime}
                    </span>
                  </div>
                  <h3 className="line-clamp-2 text-lg font-semibold leading-snug transition-colors group-hover:text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {p.date}
                    </span>
                    <span className="inline-flex items-center gap-1 font-medium text-primary">
                      Read <ExternalLink className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-border p-12 text-center">
            <BookOpen className="mx-auto h-8 w-8 text-muted-foreground" />
            <p className="mt-3 text-sm text-muted-foreground">No posts in this category yet.</p>
          </div>
        )}

        {/* CTA banner */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-secondary/40 px-8 py-8 sm:flex-row">
          <div>
            <h3 className="text-lg font-semibold">Want more?</h3>
            <p className="text-sm text-muted-foreground">
              Follow <span className="text-primary">techvrs</span> on Medium for new posts.
            </p>
          </div>
          <a
            href={MEDIUM_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
          >
            <Rss className="h-4 w-4" /> Follow on Medium
          </a>
        </div>
      </div>
    </div>
  );
}
