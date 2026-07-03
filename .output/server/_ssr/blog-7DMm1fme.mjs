import { a as __toESM } from "../_runtime.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowLeft, E as BookOpen, S as Clock, k as ArrowRight, s as Rss, w as Calendar, y as ExternalLink } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-7DMm1fme.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MEDIUM_URL = "https://medium.com/@mdtareksec";
var POSTS = [
	{
		title: "From SEO to Security: My First 90 Days as an Aspiring Pentester — editable",
		excerpt: "How the analytical habits I built in SEO translated directly into recon, reporting, and adversarial thinking during my transition into cybersecurity.",
		date: "Mar 12, 2026",
		readTime: "8 min read",
		category: "Career",
		featured: true
	},
	{
		title: "Recon Fundamentals for Web App Pentesting — editable",
		excerpt: "A structured approach to passive and active reconnaissance before touching a single request.",
		date: "Feb 22, 2026",
		readTime: "6 min read",
		category: "Pentesting"
	},
	{
		title: "Reading Your First OWASP Top 10 Report — editable",
		excerpt: "A beginner-friendly walk-through of how to interpret and act on a Top 10 assessment.",
		date: "Feb 05, 2026",
		readTime: "5 min read",
		category: "Web Security"
	},
	{
		title: "Building a Home Blue-Team Lab — editable",
		excerpt: "From pfSense segmentation to Suricata + ELK detection pipelines on a budget.",
		date: "Jan 18, 2026",
		readTime: "10 min read",
		category: "Write-ups"
	},
	{
		title: "IDOR in the Wild: A Guided Walk-through — editable",
		excerpt: "Breaking down a real-world Insecure Direct Object Reference finding from discovery to remediation.",
		date: "Jan 04, 2026",
		readTime: "7 min read",
		category: "Write-ups"
	}
];
var CATEGORY_COLORS = {
	Pentesting: "bg-primary/10 text-primary border-primary/30",
	"Web Security": "bg-accent/10 text-accent border-accent/30",
	Career: "bg-foreground/10 text-foreground border-foreground/20",
	"Write-ups": "bg-primary/10 text-primary border-primary/30"
};
var FILTERS = [
	"All",
	"Pentesting",
	"Web Security",
	"Career",
	"Write-ups"
];
function BlogPage() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const featured = POSTS.find((p) => p.featured) ?? POSTS[0];
	const rest = (0, import_react.useMemo)(() => POSTS.filter((p) => p !== featured).filter((p) => filter === "All" || p.category === filter), [filter, featured]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative min-h-screen overflow-x-hidden px-4 py-16 text-foreground sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition hover:border-primary/60 hover:text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: MEDIUM_URL,
						target: "_blank",
						rel: "noreferrer noopener",
						className: "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-4 w-4" }), " Follow on Medium"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase tracking-[0.3em] text-primary",
							children: "Blog"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 text-4xl font-bold tracking-tight sm:text-5xl",
							children: "Notes from the terminal."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-2xl text-muted-foreground",
							children: "Thoughts on cybersecurity, pentesting, and my journey from SEO to security. Live posts publish to Medium — the cards below are editable placeholders until the RSS feed is wired in."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
					href: MEDIUM_URL,
					target: "_blank",
					rel: "noreferrer noopener",
					initial: {
						opacity: 0,
						y: 24
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .5 },
					className: "group mt-14 block overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-0 md:grid-cols-[1.1fr_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-transparent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-16 w-16 text-primary/50 transition-transform duration-500 group-hover:scale-110" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary backdrop-blur",
								children: "Featured"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-center p-8 sm:p-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-3 flex flex-wrap items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${CATEGORY_COLORS[featured.category]}`,
											children: featured.category
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1 text-xs text-muted-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3 w-3" }),
												" ",
												featured.date
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1 text-xs text-muted-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }),
												" ",
												featured.readTime
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-2xl font-bold leading-tight transition-colors group-hover:text-primary sm:text-3xl",
									children: featured.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-muted-foreground",
									children: featured.excerpt
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary",
									children: ["Read Full Article ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 flex flex-wrap justify-center gap-2",
					children: FILTERS.map((f) => {
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setFilter(f),
							className: `rounded-full border px-4 py-1.5 text-sm font-medium transition ${filter === f ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"}`,
							children: f
						}, f);
					})
				}),
				rest.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: rest.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
						href: MEDIUM_URL,
						target: "_blank",
						rel: "noreferrer noopener",
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .4,
							delay: i * .08
						},
						className: "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-transparent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-10 w-10 text-primary/50 transition-transform duration-500 group-hover:scale-110" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-2 flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `rounded-full border px-2 py-0.5 text-[10px] font-medium ${CATEGORY_COLORS[p.category]}`,
										children: p.category
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 text-[11px] text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }),
											" ",
											p.readTime
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "line-clamp-2 text-lg font-semibold leading-snug transition-colors group-hover:text-primary",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground",
									children: p.excerpt
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-center justify-between text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3 w-3" }),
											" ",
											p.date
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 font-medium text-primary",
										children: ["Read ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
									})]
								})
							]
						})]
					}, p.title))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 rounded-2xl border border-dashed border-border p-12 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "mx-auto h-8 w-8 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: "No posts in this category yet."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-secondary/40 px-8 py-8 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-semibold",
						children: "Want more?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground",
						children: [
							"Follow ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "techvrs"
							}),
							" on Medium for new posts."
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: MEDIUM_URL,
						target: "_blank",
						rel: "noreferrer noopener",
						className: "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rss, { className: "h-4 w-4" }), " Follow on Medium"]
					})]
				})
			]
		})
	});
}
//#endregion
export { BlogPage as component };
