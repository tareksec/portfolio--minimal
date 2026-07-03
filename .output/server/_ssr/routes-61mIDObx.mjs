import { a as __toESM } from "../_runtime.mjs";
import { n as motion, r as AnimatePresence, t as useInView } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Circle, D as Award, E as BookOpen, O as ArrowUp, S as Clock, T as Briefcase, _ as FileText, a as Shield, b as Download, c as Network, d as Mail, f as Lock, g as FolderKanban, h as Github, i as Sun, k as ArrowRight, l as Moon, m as House, n as User, o as Send, p as Linkedin, r as Terminal, t as X, u as MapPin, v as Facebook, x as CodeXml, y as ExternalLink } from "../_libs/lucide-react.mjs";
import "../_libs/emailjs__browser.mjs";
import { t as useForm } from "../_libs/react-hook-form.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-61mIDObx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_character_default = "/assets/hero-character-FlFw3Ual.png";
var cert_google_default = "/assets/cert-google-CI-QIbZu.png";
var cert_eccouncil_default = "/assets/cert-eccouncil-BP448ptB.png";
var cert_cisco_default = "/assets/cert-cisco-SqWj5RZR.png";
function CursorTrail() {
	const dotRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (window.matchMedia("(hover: none)").matches) return;
		const dot = dotRef.current;
		if (!dot) return;
		let tx = -100, ty = -100, cx = -100, cy = -100;
		let rafId;
		const onMove = (e) => {
			tx = e.clientX;
			ty = e.clientY;
		};
		document.addEventListener("mousemove", onMove);
		const tick = () => {
			cx += (tx - cx) * .14;
			cy += (ty - cy) * .14;
			dot.style.transform = `translate(${cx - 6}px, ${cy - 6}px)`;
			rafId = requestAnimationFrame(tick);
		};
		rafId = requestAnimationFrame(tick);
		return () => {
			document.removeEventListener("mousemove", onMove);
			cancelAnimationFrame(rafId);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: dotRef,
		"aria-hidden": true,
		className: "pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 rounded-full bg-primary opacity-60 blur-[1px]",
		style: {
			boxShadow: "0 0 10px 4px color-mix(in oklab, var(--neon) 50%, transparent)",
			willChange: "transform"
		}
	});
}
function LoadingScreen({ onDone }) {
	(0, import_react.useEffect)(() => {
		const t = setTimeout(onDone, 2e3);
		return () => clearTimeout(t);
	}, [onDone]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 1 },
		exit: { opacity: 0 },
		transition: {
			duration: .7,
			ease: "easeInOut"
		},
		className: "fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 12
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: { duration: .5 },
			className: "flex flex-col items-center gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "font-mono text-4xl font-bold",
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: { delay: .2 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent",
							children: ">_"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "techvrs"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-0.5 w-52 overflow-hidden rounded-full bg-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { width: "0%" },
						animate: { width: "100%" },
						transition: {
							duration: 1.7,
							delay: .3,
							ease: [
								.4,
								0,
								.2,
								1
							]
						},
						className: "h-full rounded-full bg-primary"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: { delay: .5 },
					className: "font-mono text-xs tracking-widest text-muted-foreground",
					children: "Initializing secure connection…"
				})
			]
		})
	});
}
function TiltCard({ children, className = "" }) {
	const cardRef = (0, import_react.useRef)(null);
	const isTouchDevice = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;
	const onMouseMove = (e) => {
		if (isTouchDevice) return;
		const el = cardRef.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width - .5;
		const y = (e.clientY - rect.top) / rect.height - .5;
		el.style.transform = `perspective(900px) rotateX(${-y * 9}deg) rotateY(${x * 9}deg) scale(1.01)`;
	};
	const onMouseLeave = () => {
		const el = cardRef.current;
		if (el) el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: cardRef,
		className: `tilt-card ${className}`,
		onMouseMove,
		onMouseLeave,
		children
	});
}
var NAV = [
	{
		id: "home",
		label: "Home"
	},
	{
		id: "about",
		label: "About"
	},
	{
		id: "projects",
		label: "Projects"
	},
	{
		id: "skills",
		label: "Skills"
	},
	{
		id: "certifications",
		label: "Certs"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
var ROLES = [
	"Cybersecurity Analyst",
	"Penetration Tester",
	"Web App Security Enthusiast"
];
function Portfolio() {
	const [loading, setLoading] = (0, import_react.useState)(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingScreen, { onDone: () => setLoading(false) }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CursorTrail, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative min-h-screen overflow-x-hidden text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none fixed inset-0 grid-bg opacity-40",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopNav, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NowCard, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Certifications, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassDock, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
					position: "bottom-right",
					richColors: true
				})
			]
		})
	] });
}
function useTheme() {
	const [theme, setTheme] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		const root = document.documentElement;
		if (theme === "light") root.classList.add("light");
		else root.classList.remove("light");
	}, [theme]);
	return {
		theme,
		toggle: () => setTheme((t) => t === "dark" ? "light" : "dark")
	};
}
function ThemeToggle() {
	const { theme, toggle } = useTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: toggle,
		"aria-label": "Toggle theme",
		className: "ml-1 flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-all hover:scale-110 hover:bg-primary/15 hover:text-primary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			mode: "wait",
			initial: false,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				initial: {
					rotate: -90,
					opacity: 0
				},
				animate: {
					rotate: 0,
					opacity: 1
				},
				exit: {
					rotate: 90,
					opacity: 0
				},
				transition: { duration: .25 },
				className: "flex",
				children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
			}, theme)
		})
	});
}
function TopNav() {
	const [active, setActive] = (0, import_react.useState)("home");
	(0, import_react.useEffect)(() => {
		const obs = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) setActive(e.target.id);
			});
		}, { rootMargin: "-40% 0px -55% 0px" });
		NAV.forEach((n) => {
			const el = document.getElementById(n.id);
			if (el) obs.observe(el);
		});
		return () => obs.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed left-1/2 top-4 z-50 -translate-x-1/2 sm:top-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "glass-strong flex items-center gap-1 rounded-full px-2 py-1.5 shadow-2xl shadow-black/40",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "https://techvrs.com",
					target: "_blank",
					rel: "noopener noreferrer",
					className: "mr-1 flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-sm font-bold text-primary transition-all hover:scale-105",
					"aria-label": "techvrs home",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-accent",
						children: ">_"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "techvrs" })]
				}),
				NAV.map((item) => {
					const isActive = active === item.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `#${item.id}`,
						className: `group relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
						children: [
							isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								layoutId: "nav-pill",
								className: "absolute inset-0 rounded-full bg-primary",
								transition: {
									type: "spring",
									stiffness: 400,
									damping: 32
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative z-10",
								children: item.label
							}),
							!isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" })
						]
					}, item.id);
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog",
					className: "group relative rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative z-10",
						children: "Blog"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})
			]
		})
	});
}
function ParticleNetwork() {
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let raf = 0;
		let width = 0;
		let height = 0;
		let particles = [];
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
			const count = Math.min(80, Math.floor(width * height / 18e3));
			particles = Array.from({ length: count }, () => ({
				x: Math.random() * width,
				y: Math.random() * height,
				vx: (Math.random() - .5) * .3,
				vy: (Math.random() - .5) * .3
			}));
		};
		const getColors = () => {
			return document.documentElement.classList.contains("light") ? {
				dot: "rgba(30, 130, 90, 0.55)",
				line: "rgba(30, 130, 90, "
			} : {
				dot: "rgba(120, 240, 180, 0.55)",
				line: "rgba(120, 240, 180, "
			};
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
			for (let i = 0; i < particles.length; i++) for (let j = i + 1; j < particles.length; j++) {
				const a = particles[i];
				const b = particles[j];
				const dx = a.x - b.x;
				const dy = a.y - b.y;
				const d = Math.sqrt(dx * dx + dy * dy);
				if (d < max) {
					ctx.strokeStyle = `${line}${((1 - d / max) * .18).toFixed(3)})`;
					ctx.lineWidth = .6;
					ctx.beginPath();
					ctx.moveTo(a.x, a.y);
					ctx.lineTo(b.x, b.y);
					ctx.stroke();
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		className: "pointer-events-none absolute inset-0 h-full w-full",
		"aria-hidden": true
	});
}
function FlipFadeRoles() {
	const [i, setI] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2600);
		return () => clearInterval(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "relative inline-block",
		style: { perspective: 800 },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			mode: "wait",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				initial: {
					rotateX: -90,
					opacity: 0
				},
				animate: {
					rotateX: 0,
					opacity: 1
				},
				exit: {
					rotateX: 90,
					opacity: 0
				},
				transition: {
					duration: .5,
					ease: "easeOut"
				},
				className: "inline-block font-mono text-primary",
				style: { transformStyle: "preserve-3d" },
				children: ROLES[i]
			}, ROLES[i])
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative flex min-h-screen items-center px-4 pt-32 pb-20 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aurora-layer" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aurora-layer-2" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParticleNetwork, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .7 },
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex h-2 w-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-primary" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Available for freelance work"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl",
							children: ["Hi, I'm ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-neon",
								children: "Md Tarek"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "min-h-[2.5rem] text-2xl font-medium sm:text-3xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlipFadeRoles, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
							children: "I am an aspiring Cybersecurity Analyst and Penetration Tester with a solid foundation in Web Application Security and Network Defense. Transitioning from an SEO background, I bring a unique blend of analytical thinking and technical curiosity to identifying and mitigating security vulnerabilities."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }), "Based in [City, Country]"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-3.5 w-3.5 fill-primary text-primary" }), "Available Now"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-4 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "glow-pulse group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_0_28px_var(--neon)]",
								children: ["Hire Me", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#",
								className: "group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold text-foreground transition-all duration-300 hover:bg-foreground hover:text-background hover:shadow-[0_0_20px_var(--cyan-glow)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Download CV"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialRow, {})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .9
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						duration: .9,
						delay: .2
					},
					className: "relative mx-auto w-full max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-0 -z-10 blur-3xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto h-full w-full rounded-full bg-primary/25" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "float-slow relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_character_default,
								alt: "Illustration of Md Tarek working on a laptop",
								width: 512,
								height: 512,
								className: "mx-auto h-auto w-full drop-shadow-[0_0_60px_var(--neon)]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingIcon, {
								className: "top-6 left-0",
								delay: 0,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-5 w-5 text-primary" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingIcon, {
								className: "top-24 right-0",
								delay: .5,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-5 w-5 text-accent" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingIcon, {
								className: "bottom-24 left-0",
								delay: 1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "h-5 w-5 text-primary" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingIcon, {
								className: "bottom-8 right-4",
								delay: 1.5,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "h-5 w-5 text-accent" })
							})
						]
					})]
				})]
			})
		]
	});
}
function FloatingIcon({ children, className = "", delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		animate: { y: [
			0,
			-10,
			0
		] },
		transition: {
			duration: 4,
			repeat: Infinity,
			delay,
			ease: "easeInOut"
		},
		className: `glass absolute flex h-11 w-11 items-center justify-center rounded-2xl shadow-lg ${className}`,
		children
	});
}
function SocialRow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center gap-3 pt-2",
		children: [
			{
				icon: Github,
				href: "https://github.com/tareksec",
				label: "GitHub"
			},
			{
				icon: Linkedin,
				href: "https://www.linkedin.com/in/mdtarek404",
				label: "LinkedIn"
			},
			{
				icon: Facebook,
				href: "https://www.facebook.com/tarekulislam123",
				label: "Facebook"
			},
			{
				icon: BookOpen,
				href: "https://medium.com/@mdtareksec",
				label: "Medium"
			}
		].map(({ icon: Icon, href, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href,
			target: "_blank",
			rel: "noreferrer noopener",
			"aria-label": label,
			className: "glass flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:text-primary hover:shadow-lg hover:shadow-primary/30",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
		}, label))
	});
}
function Reveal({ children, delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-80px"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		initial: {
			opacity: 0,
			y: 30
		},
		animate: inView ? {
			opacity: 1,
			y: 0
		} : {},
		transition: {
			duration: .6,
			delay,
			ease: "easeOut"
		},
		children
	});
}
function SectionHeader({ eyebrow, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-12 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-xs uppercase tracking-[0.3em] text-primary",
			children: eyebrow
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-3 text-4xl font-bold tracking-tight sm:text-5xl",
			children: title
		})]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "px-4 py-24 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "About",
					title: "Analytical mind, security instinct."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "glass rounded-3xl p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-lg leading-relaxed text-muted-foreground",
							children: [
								"My path into cybersecurity started with search — understanding how systems rank, respond, and fail. That same curiosity now drives how I probe web applications, examine network traffic, and think like an adversary. I focus on",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground",
									children: "web application security, network defense, and hands-on penetration testing"
								}),
								", constantly learning through labs, CTFs, and real-world reports."
							]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-3xl p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs uppercase tracking-widest text-primary",
								children: "GitHub Activity"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://github.com/tareksec",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "block overflow-hidden rounded-xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "https://ghchart.rshah.org/2da44e/tareksec",
								alt: "GitHub contribution graph for tareksec",
								className: "w-full",
								loading: "lazy"
							})
						})]
					})
				})
			]
		})
	});
}
function NowCard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-4xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-2xl border-l-[3px] border-primary p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-widest text-primary",
						children: "Now — What I'm doing"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[10px] text-muted-foreground",
						children: "Updated Jul 2026"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground",
								children: "Learning → "
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Microsoft Security Analyst cert"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground",
								children: "Building → "
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Python recon automation toolkit"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground",
								children: "Focused on → "
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Network defense & blue team ops"
							})]
						})
					]
				})]
			}) })
		})
	});
}
var TESTIMONIALS = [
	{
		quote: "Tarek brings a rare mix of analytical thinking and hands-on technical curiosity to every security challenge. His reports are clear, thorough, and actionable.",
		name: "Alex R.",
		role: "Mentor · Security Consultant",
		initials: "AR"
	},
	{
		quote: "Working with Tarek on our web security audit was a great experience. He identified issues we had missed for months and explained every finding in plain language.",
		name: "Sara M.",
		role: "Client · Startup Founder",
		initials: "SM"
	},
	{
		quote: "One of the most driven self-starters I've seen. Tarek is constantly pushing his skills forward — from studying CVEs to running lab exercises on his own time.",
		name: "J. K.",
		role: "Colleague · CTF Team",
		initials: "JK"
	}
];
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 py-24 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Testimonials",
					title: "What others say."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 md:grid-cols-3",
					children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass group flex h-full flex-col gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex-1 text-sm leading-relaxed text-muted-foreground italic",
								children: [
									"“",
									t.quote,
									"”"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 border-t border-border pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 font-mono text-xs font-semibold text-primary",
									children: t.initials
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: t.role
								})] })]
							})]
						})
					}, t.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .3,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-center font-mono text-xs text-muted-foreground",
						children: "* Placeholder testimonials — replace with real recommendations."
					})
				})
			]
		})
	});
}
var EXPERIENCE = [{
	role: "Freelancer — SEO Specialist",
	org: "Independent",
	duration: "20XX – Present  · editable",
	desc: "Delivered analytical SEO strategies for clients, sharpening research, data interpretation, and reporting skills that translate directly into security analysis."
}, {
	role: "Cybersecurity Projects / Self-Study",
	org: "Personal Lab · editable",
	duration: "Ongoing",
	desc: "Practicing web application pentesting, network defense, and vulnerability analysis through certifications, home labs, and CTF platforms."
}];
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 py-24 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Experience",
				title: "The transition into security."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent sm:left-1/2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-8",
					children: EXPERIENCE.map((exp, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: idx * .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `relative flex gap-6 sm:grid sm:grid-cols-2 sm:gap-10 ${idx % 2 ? "sm:[&>*:first-child]:col-start-2" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_16px] shadow-primary sm:left-1/2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `glass ml-12 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 sm:ml-0 ${idx % 2 ? "sm:mr-10" : "sm:ml-10"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-1 flex items-center gap-2 text-sm text-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono",
											children: exp.duration
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-semibold",
										children: exp.role
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: exp.org
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted-foreground",
										children: exp.desc
									})
								]
							})]
						})
					}, exp.role))
				})]
			})]
		})
	});
}
var SKILLS = [
	{
		icon: Network,
		title: "Network Security",
		desc: "Traffic analysis, firewalls, IDS/IPS fundamentals.",
		pct: 72
	},
	{
		icon: Shield,
		title: "Web Application Security",
		desc: "OWASP Top 10, secure code review, common vuln classes.",
		pct: 80
	},
	{
		icon: Terminal,
		title: "Penetration Testing",
		desc: "Recon, enumeration, exploitation, reporting.",
		pct: 68
	},
	{
		icon: CodeXml,
		title: "Linux",
		desc: "Command line, hardening, shell scripting.",
		pct: 78
	},
	{
		icon: CodeXml,
		title: "Python (Security Scripting)",
		desc: "Automation, tooling, and lightweight exploit dev.",
		pct: 65
	},
	{
		icon: Lock,
		title: "Network Defense (NDE)",
		desc: "Defensive monitoring, IDS/IPS tuning, log analysis.",
		pct: 70
	}
];
function SkillBar({ pct, delay }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-60px"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "mt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-1 flex justify-between font-mono text-[10px] text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "proficiency" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [pct, "%"] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `skill-bar-track ${inView ? "skill-bar-animate" : ""}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "skill-bar-fill",
				style: {
					"--skill-pct": `${pct}%`,
					animationDelay: `${delay}s`
				}
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "skill-bar-scan",
				style: { animationDelay: `${delay}s` }
			})]
		})]
	});
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "skills",
		className: "px-4 py-24 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Skills",
				title: "Foundations I'm building on."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: SKILLS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: s.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillBar, {
									pct: s.pct,
									delay: i * .1
								})
							]
						})
					})
				}, s.title))
			})]
		})
	});
}
var PROJECTS = [
	{
		title: "Web App Vulnerability Report",
		tag: "OWASP · editable",
		desc: "Sample write-up of a simulated web app pentest covering recon, exploitation, and remediation.",
		tech: [
			"Burp Suite",
			"OWASP ZAP",
			"Nmap",
			"Python"
		],
		github: "#",
		problem: "A deliberately vulnerable web application needed a full black-box assessment against OWASP Top 10 risks.",
		approach: "Performed recon, mapped attack surface, tested for injection, broken auth, IDOR, and misconfigurations. Documented reproduction steps and impact.",
		outcome: "Delivered a structured pentest report with severity ratings, PoC screenshots, and prioritized remediation guidance."
	},
	{
		title: "Home Lab Network Defense",
		tag: "Blue Team · editable",
		desc: "Segmented lab with IDS/IPS monitoring, log analysis pipeline, and simulated attacker traffic.",
		tech: [
			"pfSense",
			"Suricata",
			"ELK Stack",
			"Wireshark"
		],
		github: "#",
		problem: "Needed a controlled environment to practice detection engineering against realistic threats.",
		approach: "Built VLAN-segmented network with Suricata IDS forwarding to ELK. Replayed known malicious PCAPs and tuned rules.",
		outcome: "Improved detection coverage for common C2 and reconnaissance patterns; created custom dashboards for triage."
	},
	{
		title: "Python Recon Toolkit",
		tag: "Tooling · editable",
		desc: "Small scripts for subdomain discovery, port scanning helpers, and reporting automation.",
		tech: [
			"Python",
			"asyncio",
			"Requests"
		],
		github: "#",
		problem: "Repetitive recon steps were slowing down engagement kick-offs.",
		approach: "Wrote modular async CLI tools for subdomain enumeration, tech fingerprinting, and CSV export of findings.",
		outcome: "Cut recon time roughly in half and standardized output formats for downstream analysis."
	}
];
function Projects() {
	const [open, setOpen] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "projects",
		className: "px-4 py-24 sm:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Projects",
				title: "Things I've broken (safely)."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-3",
				children: PROJECTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpen(p),
						className: "glass group relative h-full w-full overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity group-hover:opacity-100" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs uppercase tracking-widest text-accent",
								children: p.tag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-lg font-semibold",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: p.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-1.5",
								children: p.tech.slice(0, 3).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-md bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary",
									children: t
								}, t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 inline-flex items-center gap-1.5 text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100",
								children: ["View case study ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
							})
						]
					})
				}, p.title))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			className: "fixed inset-0 z-[60] flex items-center justify-center p-4",
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-background/80 backdrop-blur-sm",
				onClick: () => setOpen(null)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					scale: .95,
					y: 20
				},
				animate: {
					opacity: 1,
					scale: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					scale: .95,
					y: 20
				},
				className: "glass-strong relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen(null),
						"aria-label": "Close",
						className: "absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition hover:bg-primary/10 hover:text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs uppercase tracking-widest text-accent",
						children: open.tag
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 text-2xl font-bold",
						children: open.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: open.desc
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-1.5",
						children: open.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-md bg-primary/10 px-2 py-1 font-mono text-xs text-primary",
							children: t
						}, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs uppercase tracking-widest text-primary",
								children: "Problem"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 leading-relaxed text-muted-foreground",
								children: open.problem
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs uppercase tracking-widest text-primary",
								children: "Approach"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 leading-relaxed text-muted-foreground",
								children: open.approach
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs uppercase tracking-widest text-primary",
								children: "Outcome"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 leading-relaxed text-muted-foreground",
								children: open.outcome
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [open.github && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: open.github,
							target: "_blank",
							rel: "noreferrer noopener",
							className: "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:border-primary/60 hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" }), " GitHub"]
						}), open.demo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: open.demo,
							target: "_blank",
							rel: "noreferrer noopener",
							className: "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:scale-105",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" }), " Live Demo"]
						})]
					})
				]
			})]
		}) })]
	});
}
var CERTS = [
	{
		title: "Google Cybersecurity Professional Certificate",
		issuer: "Google · Coursera (9-course program)",
		date: "Jan 24, 2026",
		verify: "https://coursera.org/verify/professional-cert/VUOP1P0YBNG1",
		image: cert_google_default,
		featured: true
	},
	{
		title: "Ethical Hacker",
		issuer: "Cisco Networking Academy",
		date: "May 19, 2026",
		verify: "https://media.licdn.com/dms/image/v2/D5622AQGv6_RvUZ9fjA/feedshare-image-high-res/B56Z4.6HWHGUAU-/0/1779171882652?e=1783555200&v=beta&t=_pz0b3jmxkXTPkUcrJr_mXBk3uANflhMrWz-CfeSJTg",
		image: cert_cisco_default
	},
	{
		title: "NDE-112-51: Network Defense Essentials (NDE)",
		issuer: "EC-Council via edX",
		date: "Jan 24, 2026",
		verify: "https://courses.edx.org/certificates/bcc0a5b938ba4c55a450a82960c83320",
		image: cert_eccouncil_default
	},
	{
		title: "Microsoft Certified: Security Analyst",
		issuer: "Microsoft",
		date: "Expected 2026",
		inProgress: true
	}
];
function Certifications() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "certifications",
		className: "px-4 py-24 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Certifications",
				title: "Verified credentials."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: CERTS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: `glass group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/20 ${c.featured ? "lg:col-span-2 lg:row-span-1" : ""}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-all group-hover:bg-primary/25" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `flex ${c.featured ? "h-14 w-14" : "h-11 w-11"} shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: c.featured ? "h-7 w-7" : "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [
										c.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono text-[10px] uppercase tracking-widest text-primary",
											children: "Flagship"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: `font-semibold ${c.featured ? "text-xl" : "text-base"}`,
											children: c.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-muted-foreground",
											children: c.issuer
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-0.5 font-mono text-xs text-muted-foreground",
											children: c.date
										})
									]
								})]
							}),
							c.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative mt-5 overflow-hidden rounded-xl border border-border bg-background/40",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.image,
									alt: c.title,
									className: `h-auto w-full object-contain ${c.featured ? "" : "max-h-56"}`,
									loading: "lazy"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "relative mt-5 flex-1" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative mt-4",
								children: c.inProgress ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1.5 text-xs font-semibold text-accent",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5" }), " In Progress"]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: c.verify,
									target: "_blank",
									rel: "noreferrer noopener",
									className: "inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-foreground transition hover:border-primary/60 hover:bg-primary/10 hover:text-primary",
									children: ["Verify ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
								})
							})
						]
					})
				}, c.title))
			})]
		})
	});
}
function Contact() {
	const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
	const onSubmit = async (data) => {
		toast.error("Email service not configured yet. Please add EmailJS credentials.");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "px-4 py-24 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Contact",
				title: "Let's talk security."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-[1.2fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit(onSubmit),
						className: "glass space-y-4 rounded-3xl p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
									label: "Name",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										placeholder: "Your name",
										...register("name", { required: "Name is required" }),
										className: "w-full rounded-xl border border-border bg-input/30 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"
									}), errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-red-500",
										children: errors.name.message
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
									label: "Email",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										placeholder: "you@domain.com",
										...register("email", {
											required: "Email is required",
											pattern: {
												value: /^\S+@\S+\.\S+$/,
												message: "Invalid email address"
											}
										}),
										className: "w-full rounded-xl border border-border bg-input/30 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"
									}), errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-red-500",
										children: errors.email.message
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
								label: "Message",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 5,
									placeholder: "Tell me about your project or engagement...",
									...register("message", {
										required: "Message is required",
										minLength: {
											value: 10,
											message: "Message must be at least 10 characters"
										}
									}),
									className: "w-full resize-none rounded-xl border border-border bg-input/30 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"
								}), errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-red-500",
									children: errors.message.message
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: isSubmitting,
								className: "glow-pulse inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_28px_var(--neon)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100",
								children: [
									isSubmitting ? "Sending…" : "Send Message",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
								]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass flex h-full flex-col justify-between gap-6 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs uppercase tracking-widest text-primary",
									children: "Direct"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 text-2xl font-bold",
									children: "Prefer email?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "Reach out any time — I typically respond within 24 hours."
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-muted-foreground",
										children: "your.email@example.com — replace"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "[City, Country] — editable"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialRow, {})
						]
					})
				})]
			})]
		})
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1.5 block font-mono text-xs uppercase tracking-widest text-muted-foreground",
			children: label
		}), children]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border/50 px-4 py-10 pb-28 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-center gap-5 sm:flex-row sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 font-mono text-sm text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-accent",
					children: ">_"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://techvrs.com",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "text-primary hover:underline",
						children: "techvrs.com"
					}),
					" — All rights reserved"
				] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialRow, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "ml-2 inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition hover:border-primary/60 hover:text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-3.5 w-3.5" }), " Back to top"]
				})]
			})]
		})
	});
}
function GlassDock() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-5 left-1/2 z-40 -translate-x-1/2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass-strong flex items-end gap-1.5 rounded-2xl px-3 py-2 shadow-2xl shadow-black/50",
			children: [
				{
					icon: House,
					label: "Home",
					href: "#home"
				},
				{
					icon: User,
					label: "About",
					href: "#about"
				},
				{
					icon: FolderKanban,
					label: "Projects",
					href: "#projects"
				},
				{
					icon: Award,
					label: "Certs",
					href: "#certifications"
				},
				{
					icon: BookOpen,
					label: "Blog",
					to: "/blog"
				},
				{
					icon: Mail,
					label: "Contact",
					href: "#contact"
				},
				{
					icon: FileText,
					label: "Resume",
					href: "#"
				}
			].map(({ icon: Icon, label, href, to }) => {
				const cls = "group relative flex h-11 w-11 items-center justify-center rounded-xl text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:scale-125 hover:bg-primary/15 hover:text-primary";
				const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "pointer-events-none absolute -top-9 whitespace-nowrap rounded-md bg-popover px-2 py-1 text-xs font-medium text-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100",
					children: label
				})] });
				return to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to,
					"aria-label": label,
					className: cls,
					children: inner
				}, label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href,
					"aria-label": label,
					className: cls,
					children: inner
				}, label);
			})
		})
	});
}
//#endregion
export { Portfolio as component };
