import { A as e, S as t, T as n, a as r, d as i, g as a, v as o, w as s } from "./_react-D4KM8XEu.js";
import { C as c, d as l } from "./chunk-OB3PAWPO-CAV1KLte.js";
import { F as u, J as d, W as f, o as p, r as m, t as ee } from "./use-navigate-with-base-path-CjM3S5Z7.js";
import { F as h, K as g, b as _, h as v, q as y } from "./use-activity-pub-queries-C5sHP1nj.js";
import { $ as b, C as x, D as te, E as S, J as C, K as w, N as T, O as E, S as D, T as O, W as ne, X as re, Z as ie, _ as ae, a as oe, et as se, g as k, h as ce, n as le, q as A, s as ue, v as de, w as fe, x as pe, y as me } from "./routes-YnsvZ4ZW.js";
import { a as he, c as ge, f as j, i as M, l as _e, n as N, r as P, t as F, u as I } from "./content-formatters-DdWZWlsa.js";
import { t as L } from "./inbox-CZavrUXY.js";
import { i as ve, n as ye, r as be, t as xe } from "./use-reply-chain-data-CvKPmz22.js";
import { t as Se } from "./separator-CqYGFHQe.js";
import "./layout-DGSP79W3.js";
import { t as R } from "./topic-filter-DwL3N0NK.js";
var z = p("minus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}]]);
//#endregion
//#region ../shade/es/components/ui/empty-indicator.js
i();
var B = c(), V = r.forwardRef(({ children: e, className: t, ...n }, r) => /* @__PURE__ */ (0, B.jsx)("div", {
	ref: r,
	className: f("flex size-12 max-h-12 max-w-12 items-center justify-center rounded-full bg-muted [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-muted-foreground", t),
	...n,
	children: e
}));
V.displayName = "EmptyBadge";
var H = r.forwardRef(({ children: e, className: t, title: n, description: r, actions: i, ...a }, o) => /* @__PURE__ */ (0, B.jsxs)("div", {
	ref: o,
	className: f("flex flex-col items-center justify-center gap-3 text-center", t),
	...a,
	children: [
		/* @__PURE__ */ (0, B.jsx)(V, { children: e }),
		/* @__PURE__ */ (0, B.jsxs)("div", {
			className: "flex max-w-[320px] flex-col gap-1.5",
			children: [/* @__PURE__ */ (0, B.jsx)("h3", {
				className: "text-md font-medium tracking-normal text-pretty text-foreground",
				children: n
			}), r && /* @__PURE__ */ (0, B.jsx)("p", {
				className: "text-sm leading-tight text-pretty text-muted-foreground",
				children: r
			})]
		}),
		i && /* @__PURE__ */ (0, B.jsx)("div", {
			className: "flex items-center gap-2",
			children: i
		})
	]
}));
//#endregion
//#region src/views/inbox/components/customizer.tsx
H.displayName = "EmptyIndicator", i();
var U = [
	"1.5rem",
	"1.6rem",
	"1.7rem",
	"1.8rem",
	"2rem"
], W = {
	BACKGROUND_COLOR: "ghost-ap-background-color",
	FONT_SIZE: "ghost-ap-font-size",
	FONT_FAMILY: "ghost-ap-font-family",
	FONT_STYLE: "ghost-ap-font-style"
}, G = {
	SYSTEM: {
		id: "system",
		color: "#fff",
		background: "bg-white dark:bg-black",
		button: "bg-white dark:bg-black",
		border: "border-black/[8%] dark:border-gray-950"
	},
	SEPIA: {
		id: "sepia",
		color: "#FCF8F1",
		background: "bg-[#FCF8F1]",
		button: "bg-[#FCF8F1] hover:bg-black/[3%] text-black hover:text-black",
		border: "border-black/[8%]"
	},
	LIGHT: {
		id: "light",
		color: "#fff",
		background: "bg-white",
		button: "hover:bg-black/[3%] text-black hover:text-black",
		border: "border-black/[8%] dark:border-gray-950"
	},
	DARK: {
		id: "dark",
		color: "#15171a",
		background: "bg-black",
		button: "text-white dark:bg-black dark:hover:bg-gray-900",
		border: "border-black/[8%] dark:border-gray-950"
	}
}, Ce = () => {
	let [e, t] = n(() => localStorage.getItem(W.BACKGROUND_COLOR)?.toUpperCase() || "SYSTEM"), [r, i] = n(() => {
		let e = localStorage.getItem(W.FONT_SIZE);
		return e ? parseInt(e) : 2;
	}), [a, s] = n(() => localStorage.getItem(W.FONT_STYLE) || "sans");
	return o(() => {
		localStorage.setItem(W.FONT_SIZE, r.toString());
	}, [r]), o(() => {
		localStorage.setItem(W.FONT_STYLE, a);
	}, [a]), {
		backgroundColor: e,
		currentFontSizeIndex: r,
		fontStyle: a,
		handleColorChange: (e) => {
			t(e), localStorage.setItem(W.BACKGROUND_COLOR, G[e].id);
		},
		setFontStyle: s,
		increaseFontSize: () => {
			i((e) => Math.min(e + 1, U.length - 1));
		},
		decreaseFontSize: () => {
			i((e) => Math.max(e - 1, 0));
		},
		resetFontSize: () => i(2),
		fontSize: U[r]
	};
}, we = ({ backgroundColor: e, currentFontSizeIndex: t, fontStyle: n, onColorChange: r, onFontStyleChange: i, onDecreaseFontSize: a, onIncreaseFontSize: o, onResetFontSize: s, onOpenChange: c }) => /* @__PURE__ */ (0, B.jsx)(Te, {
	backgroundColor: e,
	currentFontSizeIndex: t,
	fontStyle: n,
	isActiveColor: (t) => e === t,
	isActiveFont: (e) => n === e,
	onColorChange: r,
	onDecreaseFontSize: a,
	onFontStyleChange: i,
	onIncreaseFontSize: o,
	onOpenChange: c,
	onResetFontSize: s
}), Te = ({ backgroundColor: e, isActiveColor: t, isActiveFont: n, onColorChange: r, onFontStyleChange: i, currentFontSizeIndex: a, onDecreaseFontSize: o, onIncreaseFontSize: s, onResetFontSize: c, onOpenChange: l }) => /* @__PURE__ */ (0, B.jsxs)(ne, {
	modal: !1,
	onOpenChange: l,
	children: [/* @__PURE__ */ (0, B.jsx)(A, {
		asChild: !0,
		children: /* @__PURE__ */ (0, B.jsx)(m, {
			"aria-label": "Reading options",
			className: `size-9 rounded-full ${G[e].button}`,
			variant: "ghost",
			children: /* @__PURE__ */ (0, B.jsx)(u.Typography, { className: "size-[18px]!" })
		})
	}), /* @__PURE__ */ (0, B.jsx)(w, {
		align: "end",
		className: "w-[224px]",
		onCloseAutoFocus: (e) => e.preventDefault(),
		onOpenAutoFocus: (e) => e.preventDefault(),
		children: /* @__PURE__ */ (0, B.jsxs)("div", {
			className: "flex flex-col gap-4",
			children: [
				/* @__PURE__ */ (0, B.jsxs)("div", {
					className: "flex items-center justify-between gap-[6px]",
					children: [
						/* @__PURE__ */ (0, B.jsx)(m, {
							className: `h-7 flex-1 rounded-[6px] bg-gray-200 p-0 text-[1.1rem] text-black hover:bg-gray-300 dark:bg-gray-950 dark:text-white dark:hover:bg-gray-900 [&_svg]:size-[14px] ${t("SYSTEM") ? "outline-2 outline-green" : ""}`,
							variant: "secondary",
							onClick: () => r("SYSTEM"),
							children: "Auto"
						}),
						/* @__PURE__ */ (0, B.jsx)(m, {
							className: `h-7 flex-1 rounded-[6px] bg-[#ece6d9] p-0 hover:bg-[#ece6d9] ${t("SEPIA") ? "outline-2 outline-green" : "border border-[#ece6d9]"}`,
							onClick: () => r("SEPIA")
						}),
						/* @__PURE__ */ (0, B.jsx)(m, {
							className: `h-7 flex-1 rounded-[6px] bg-white p-0 hover:bg-white ${t("LIGHT") ? "outline-2 outline-green" : "border border-gray-200"}`,
							onClick: () => r("LIGHT")
						}),
						/* @__PURE__ */ (0, B.jsx)(m, {
							className: `h-7 flex-1 rounded-[6px] bg-black p-0 hover:bg-black dark:border dark:border-gray-950 ${t("DARK") ? "outline-2 outline-green" : ""}`,
							onClick: () => r("DARK")
						})
					]
				}),
				/* @__PURE__ */ (0, B.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, B.jsxs)(m, {
						className: `flex h-auto w-full flex-col gap-1 rounded-[6px] bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-950 dark:text-white dark:hover:bg-gray-900 ${n("sans") && "outline-2 outline-green"}`,
						variant: "secondary",
						onClick: () => i("sans"),
						children: [/* @__PURE__ */ (0, B.jsx)("span", {
							className: "text-[2rem] leading-none font-bold",
							children: "Aa"
						}), /* @__PURE__ */ (0, B.jsx)("span", {
							className: "text-[1.1rem]",
							children: "System"
						})]
					}), /* @__PURE__ */ (0, B.jsxs)(m, {
						className: `flex h-auto w-full flex-col gap-1 rounded-[6px] bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-950 dark:text-white dark:hover:bg-gray-900 ${n("serif") && "outline-2 outline-green"}`,
						variant: "secondary",
						onClick: () => i("serif"),
						children: [/* @__PURE__ */ (0, B.jsx)("span", {
							className: "pt-1 font-serif text-[2rem] leading-none font-bold",
							children: "Aa"
						}), /* @__PURE__ */ (0, B.jsx)("span", {
							className: "font-serif text-[1.2rem]",
							children: "Serif"
						})]
					})]
				}),
				/* @__PURE__ */ (0, B.jsxs)("div", {
					className: "flex gap-2",
					children: [
						/* @__PURE__ */ (0, B.jsx)(m, {
							"aria-label": "Decrease text size",
							className: "h-8 w-full rounded-[6px] bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-950 dark:text-white dark:hover:bg-gray-900 [&_svg]:size-[14px]",
							disabled: a === 0,
							variant: "secondary",
							onClick: o,
							children: /* @__PURE__ */ (0, B.jsx)(z, {})
						}),
						/* @__PURE__ */ (0, B.jsx)(m, {
							"aria-label": "Reset text size",
							className: "h-8 w-full rounded-[6px] bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-950 dark:text-white dark:hover:bg-gray-900",
							variant: "secondary",
							onClick: c,
							children: /* @__PURE__ */ (0, B.jsx)("span", {
								className: "text-[1.6rem] font-bold",
								children: "Aa"
							})
						}),
						/* @__PURE__ */ (0, B.jsx)(m, {
							"aria-label": "Increase text size",
							className: "h-8 w-full rounded-[6px] bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-950 dark:text-white dark:hover:bg-gray-900 [&_svg]:size-[14px]",
							disabled: a === U.length - 1,
							variant: "secondary",
							onClick: s,
							children: /* @__PURE__ */ (0, B.jsx)(j, {})
						})
					]
				})
			]
		})
	})]
});
//#endregion
//#region src/components/feed/table-of-contents.tsx
i();
var Ee = ({ tocItems: e, iframeElement: t, modalRef: i, className: a = "visible! absolute inset-y-0 right-7 z-40 hidden lg:block!", onOpenChange: s }) => {
	let [c, l] = n(null), u = r.useRef(!1);
	return o(() => {
		if (!t?.contentDocument || e.length <= 1) return;
		let n = i.current;
		if (!n) return;
		let r = () => {
			if (u.current) return;
			let r = t.contentDocument;
			if (!r) return;
			let i = n.scrollTop, a = e.map((e) => r.getElementById(e.id)).filter((e) => e !== null).map((e) => ({
				id: e.id,
				top: e.offsetTop
			}));
			if (!a.length) return;
			let o = a.reduce((e, t) => t.top - 100 <= i ? t : e);
			l(o?.id || null);
		}, a = () => {
			requestAnimationFrame(r);
		};
		return n.addEventListener("scroll", a), r(), () => {
			n.removeEventListener("scroll", a);
		};
	}, [
		t,
		e,
		i
	]), e.length <= 1 ? null : /* @__PURE__ */ (0, B.jsx)("div", {
		className: a,
		children: /* @__PURE__ */ (0, B.jsx)("div", {
			className: "sticky top-1/2 -translate-y-1/2",
			children: /* @__PURE__ */ (0, B.jsx)(Oe, {
				activeHeading: c || "",
				items: e,
				onItemClick: (e) => {
					if (!t?.contentDocument) return;
					let n = t.contentDocument.getElementById(e);
					n && i.current && (u.current = !0, l(e), i.current.scrollTo({
						top: n.offsetTop - 20,
						behavior: "smooth"
					}), setTimeout(() => {
						u.current = !1;
					}, 1e3));
				},
				onOpenChange: s
			})
		})
	});
}, K = {
	1: "w-3",
	2: "w-2",
	3: "w-1"
}, De = {
	1: "pl-2",
	2: "pl-6",
	3: "pl-10"
}, Oe = ({ items: e, activeHeading: t, onItemClick: i, onOpenChange: a }) => {
	let [o, s] = n(!1), c = r.useRef();
	if (r.useEffect(() => () => {
		c.current && clearTimeout(c.current);
	}, []), e.length === 0) return null;
	let l = (e) => Math.min(e, 3), u = (e) => K[l(e)], d = (e) => De[l(e)], f = () => {
		c.current && clearTimeout(c.current), s(!0), a?.(!0);
	}, p = () => {
		c.current = setTimeout(() => {
			s(!1), a?.(!1);
		}, 100);
	};
	return /* @__PURE__ */ (0, B.jsxs)(ne, {
		modal: !1,
		open: o,
		onOpenChange: s,
		children: [/* @__PURE__ */ (0, B.jsx)(A, {
			asChild: !0,
			children: /* @__PURE__ */ (0, B.jsx)("div", {
				className: "absolute top-1/2 right-2 flex -translate-y-1/2 flex-col items-end gap-2 rounded-md p-2 text-base dark:bg-black",
				onMouseEnter: f,
				onMouseLeave: p,
				children: e.map((e) => /* @__PURE__ */ (0, B.jsx)("div", { className: `h-[2px] rounded-sm ${t === e.id ? "bg-black dark:bg-white" : "bg-gray-400 dark:bg-gray-700"} pr-1 transition-all ${u(e.level)}` }, e.id))
			})
		}), /* @__PURE__ */ (0, B.jsx)(w, {
			align: "center",
			className: "w-[240px] p-2",
			side: "left",
			sideOffset: -28,
			onCloseAutoFocus: (e) => e.preventDefault(),
			onMouseEnter: f,
			onMouseLeave: p,
			onOpenAutoFocus: (e) => e.preventDefault(),
			children: /* @__PURE__ */ (0, B.jsx)("nav", {
				"aria-label": "Table of contents navigation",
				className: "max-h-[60vh] overflow-y-auto",
				role: "navigation",
				children: e.map((e) => /* @__PURE__ */ (0, B.jsx)("button", {
					className: `line-clamp-2 block w-full cursor-pointer rounded py-1 text-left text-sm leading-tight ${t === e.id ? "text-black dark:text-white" : "text-gray-700 dark:text-gray-600"} hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-950 dark:hover:text-white ${d(e.level)}`,
					type: "button",
					onClick: () => i(e.id),
					children: /* @__PURE__ */ (0, B.jsx)("span", {
						className: "line-clamp-2",
						children: e.text
					})
				}, e.id))
			})
		})]
	});
}, ke = () => "<style>\n\n/* Variables */\n\n:root {\n    --color-white: #fff;\n    --color-lighter-gray: rgb(0 0 0 / 0.05);\n    --color-light-gray: #e6e6e6;\n    --color-mid-gray: #ccc;\n    --color-dark-gray: #444;\n    --color-darker-gray: #15171a;\n    --color-black: #000;\n    --color-primary-text: var(--color-darker-gray);\n    --color-secondary-text: rgb(124 139 154);\n    --color-border: rgb(0 0 0 / 0.08);\n    --color-dark-border: rgb(0 0 0 / 0.55);\n    --background-color: #fff;\n    --font-sans: Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n    --font-serif: \"EB Garamond\", Georgia, Times, serif;\n    --font-serif-alt: Georgia, Times, serif;\n    --font-mono: \"JetBrains Mono\", Menlo, Consolas, Monaco, \"Liberation Mono\", \"Lucida Console\", monospace;\n    --letter-spacing: 0;\n    --container-width: 1320px;\n    --container-gap: clamp(24px, 1.7032rem + 1.9355vw, 48px);\n    --ghost-accent-color: #15171a;\n}\n\n:root.has-light-text,\n:is(.gh-navigation, .gh-footer).has-accent-color {\n    --color-lighter-gray: rgb(255 255 255 / 0.1);\n    --color-darker-gray: #fff;\n    --color-secondary-text: rgb(255 255 255 / 0.64);\n    --color-border: rgb(255 255 255 / 0.15);\n    --color-dark-border: rgb(255 255 255 / 0.5);\n    --background-color: #15171a;\n}\n\n/* Resets */\n\n*, *::before, *::after {\n    box-sizing: border-box;\n}\n\n* {\n    margin: 0;\n}\n\nhtml {\n    font-size: 62.5%;\n}\n\nbody {\n    font-family: var(--font-sans);\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\nimg, picture, video, canvas, svg {\n    display: block;\n    height: auto;\n    max-width: 100%;\n}\n\niframe {\n    display: block;\n}\n\ninput, button, textarea, select {\n    font: inherit;\n}\n\np, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n}\n\nh1, h2, h3, h4, h5, h6 {\n    font-family: var(--font-sans);\n    line-height: 1.2;\n}\n\n/* Globals */\n\nhtml {\n    --container-width: 840px;\n    --content-width: 640px;\n}\n\nbody {\n    font-family: var(--font-sans);\n    font-size: 1.6rem;\n    background-color: var(--background-color);\n    color: var(--color-primary-text);\n}\n\na {\n    color: var(--color-darker-gray);\n    text-decoration: none;\n}\n\na:not([class]):hover {\n    opacity: 0.8;\n}\n\n.gh-canvas,\n.kg-width-full.kg-content-wide {\n    --main: min(var(--content-width, 720px), 100% - var(--container-gap) * 2);\n    --wide: minmax(0, calc((var(--container-width, 1200px) - var(--content-width, 720px)) / 2));\n    --full: minmax(var(--container-gap), 1fr);\n\n    display: grid;\n    grid-template-columns:\n        [full-start] var(--full)\n        [wide-start] var(--wide)\n        [main-start] var(--main) [main-end]\n        var(--wide) [wide-end]\n        var(--full) [full-end];\n}\n\n.gh-canvas > * {\n    grid-column: main;\n}\n\n.kg-width-wide,\n.kg-content-wide > div {\n    grid-column: full;\n}\n\n.kg-width-full {\n    grid-column: full;\n}\n\n/* Article */\n\n.gh-article-header {\n    margin: 24px 0 40px;\n}\n\n.gh-article-title {\n    font-weight: 700;\n    text-wrap: pretty;\n    font-size: 3.6rem;\n    letter-spacing: -0.015em;\n    line-height: 1.1;\n}\n\n.gh-article-excerpt {\n    margin-top: 12px;\n    font-size: calc(var(--font-size) * 1.06 * var(--font-size-multiplier, 1));\n    line-height: 1.4;\n    text-wrap: pretty;\n}\n\n.has-serif-body .gh-article-excerpt {\n    font-family: var(--font-serif-alt);\n}\n\n.gh-article-meta {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    margin-top: 16px;\n}\n\n.gh-article-meta:hover {\n    opacity: 1;\n}\n\n.gh-article-author-image {\n    display: flex;\n    margin-right: 8px;\n    margin-left: 6px;\n}\n\n.gh-article-author-image span {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    width: 46px;\n    height: 46px;\n    overflow: hidden;\n    margin: 0 -8px;\n    background-color: #F4F5F6;\n    border-radius: 50%;\n    border: 3px solid var(--background-color);\n}\n\nhtml.has-sepia-bg .gh-article-author-image span {\n    background-color: #EFEDE6;\n}\n\nhtml.has-light-text .gh-article-author-image span {\n    background-color: #394047;\n}\n\n.gh-article-author-image span:first-child {\n    z-index: 10;\n}\n\n.gh-article-author-image span:nth-child(2) {\n    z-index: 9;\n}\n\n.gh-article-author-image span:nth-child(3) {\n    z-index: 8;\n}\n\n.gh-article-author-image img {\n    position: absolute;\n    inset: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.gh-article-author-image svg {\n    width: 18px;\n    height: 18px;\n    color: #95A1AD;\n}\n\n.gh-article-meta-wrapper {\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    margin-top: -2px;\n}\n\n.gh-article-author-name {\n    font-size: 1.5rem;\n    font-weight: 600;\n    letter-spacing: -0.008em;\n}\n\n.gh-article-source {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    font-size: 1.5rem;\n    line-height: 1.2;\n    color: var(--color-secondary-text);\n    width: fit-content;\n}\n\n.gh-article-source svg {\n    width: 12px;\n    height: 12px;\n    margin-top: 1px;\n}\n\n.gh-article-meta:hover .gh-article-source {\n    text-decoration: underline;\n}\n\n.gh-article-image {\n    grid-column: full;\n    margin-top: 40px;\n}\n\n.gh-article-image img {\n    width: 100%;\n}\n\n/* Content */\n\n/* Content refers to styling all page and post content that is\ncreated within the Ghost editor. The main content handles\nheadings, text, images and lists. We deal with cards lower down. */\n\n.gh-content {\n    font-size: calc(var(--font-size) * var(--font-size-multiplier, 1));\n    overflow-x: hidden;\n    letter-spacing: var(--letter-spacing);\n    line-height: var(--line-height);\n}\n\n/* Default vertical spacing */\n.gh-content > * + * {\n    margin-top: calc(28px * var(--content-spacing-factor, 1));\n    margin-bottom: 0;\n}\n\n/* Remove space between full-width cards */\n.gh-content > .kg-width-full + .kg-width-full:not(.kg-width-full.kg-card-hascaption + .kg-width-full) {\n    margin-top: 0;\n}\n\n/* Add back a top margin to all headings,\nunless a heading is the very first element in the post content */\n.gh-content > [id]:not(:first-child) {\n    margin-top: calc(40px * var(--content-spacing-factor, 1));\n}\n\n/* Add a small margin between a heading and paragraph after it */\n.gh-content > [id] + p {\n    margin-top: calc(12px * var(--content-spacing-factor, 1));\n}\n\n/* A larger margin before/after dividers, blockquotes and embeds */\n.gh-content > :is(hr, blockquote, iframe) {\n    position: relative;\n    margin-top: calc(48px * var(--content-spacing-factor, 1)) !important;\n}\n\n.gh-content > :is(hr, blockquote, iframe) + * {\n    margin-top: calc(48px * var(--content-spacing-factor, 1)) !important;\n}\n\n/* Now the content typography styles */\n.gh-content [id] {\n    letter-spacing: -0.005em;\n}\n\n.gh-content h1 {\n    font-size: 1.9em;\n}\n\n.gh-content h2 {\n    font-size: 1.6em;\n}\n\n.gh-content h3 {\n    font-size: 1.3em;\n}\n\n.gh-content h4 {\n    font-size: 1.2em;\n}\n\n.gh-content h5 {\n    font-size: 1.1em;\n}\n\n.gh-content h6 {\n    font-size: 1em;\n}\n\n.gh-content a:not([class]) {\n    color: #14B8FF;\n    text-decoration: underline;\n}\n\nhtml.has-light-text .gh-content a:not([class]) {\n    color: #14B8FF;\n}\n\nhtml.has-sepia-bg .gh-content a:not([class]) {\n    color: #DD6B02;\n}\n\n.gh-content .kg-callout-card .kg-callout-text,\n.gh-content .kg-toggle-card .kg-toggle-content > :is(ul, ol, p) {\n    font-size: 0.95em;\n}\n\n.has-serif-body .gh-content > blockquote,\n.has-serif-body .gh-content > ol,\n.has-serif-body .gh-content > ul,\n.has-serif-body .gh-content > dl,\n.has-serif-body .gh-content > p,\n.has-serif-body .gh-content .kg-callout-text,\n.has-serif-body .gh-content .kg-toggle-content > ol,\n.has-serif-body .gh-content .kg-toggle-content > ul,\n.has-serif-body .gh-content .kg-toggle-content > p {\n    font-family: var(--font-serif-alt);\n}\n\n.gh-content :is(ul, ol) {\n    padding-left: 28px;\n}\n\n.gh-content :is(li + li, li :is(ul, ol)) {\n    margin-top: 8px;\n}\n\n.gh-content ol ol li {\n    list-style-type: lower-alpha;\n}\n\n.gh-content ol ol ol li {\n    list-style-type: lower-roman;\n}\n\n.gh-content hr {\n    width: 100%;\n    height: 1px;\n    background-color: var(--color-border);\n    border: 0;\n}\n\n.gh-content .gh-table {\n    overflow-x: scroll;\n    -webkit-overflow-scrolling: touch;\n}\n\n.gh-content .gh-table table {\n    width: 100%;\n    font-family: var(--font-sans);\n    font-size: 1.5rem;\n    white-space: nowrap;\n    vertical-align: top;\n    border-spacing: 0;\n    border-collapse: collapse;\n}\n\n.gh-content .gh-table table th {\n    font-size: 1.2rem;\n    font-weight: 700;\n    color: var(--color-darkgrey);\n    text-align: left;\n    text-transform: uppercase;\n    letter-spacing: 0.2px;\n}\n\n.gh-content .gh-table table :is(th, td),\n.gh-content .gh-table table td {\n    padding: 6px 12px;\n    border-bottom: 1px solid var(--color-border);\n}\n\n.gh-content .gh-table table :is(th, td):first-child {\n    padding-left: 0;\n}\n\n.gh-content .gh-table table :is(th, td):last-child {\n    padding-right: 0;\n}\n\n.gh-content pre {\n    overflow: auto;\n    padding: 16px;\n    font-size: 1.5rem;\n    line-height: 1.5em;\n    background: var(--color-lighter-gray);\n    border-radius: 6px;\n    font-family: var(--font-mono);\n}\n\n.gh-content :not(pre) > code {\n    vertical-align: baseline;\n    padding: 0.15em 0.4em;\n    font-weight: 400;\n    font-size: 0.95em;\n    line-height: 1em;\n    background: var(--color-lighter-gray);\n    border-radius: 0.25em;\n    font-family: var(--font-mono);\n}\n\n.gh-content mark {\n    color: inherit;\n    background: rgb(255 225 54 / 25%);\n}\n\n/* Cards */\n\n/* Add extra margin before/after any cards, except for when immediately preceeded by a heading */\n\n.gh-content :not(.kg-card):not(table):not([id]) + :is(.kg-card, table) {\n    margin-top: calc(48px * var(--content-spacing-factor, 1));\n}\n\n.gh-content :is(.kg-card, table) + :not(.kg-card):not(table):not([id]) {\n    margin-top: calc(48px * var(--content-spacing-factor, 1));\n}\n\n.gh-content :not(.kg-card):not([id]) + .kg-card.kg-width-full {\n    margin-top: calc(68px * var(--content-spacing-factor, 1));\n}\n\n.gh-content .kg-card.kg-width-full + :not(.kg-card):not([id]) {\n    margin-top: calc(68px * var(--content-spacing-factor, 1));\n}\n\n.kg-image {\n    margin-right: auto;\n    margin-left: auto;\n}\n\n.kg-embed-card {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n}\n\n.kg-image-card a:hover,\n.kg-gallery-image a:hover {\n    opacity: 1 !important;\n}\n\nblockquote:not([class]) {\n    padding-left: 2rem;\n    border-left: 4px solid var(--ghost-accent-color);\n}\n\nblockquote.kg-blockquote-alt {\n    font-style: normal;\n    font-weight: 400;\n    color: var(--color-secondary-text);\n}\n\n.has-serif-body .kg-header-card h3.kg-header-card-subheader {\n    font-family: var(--font-serif);\n}\n\n.has-serif-body .kg-product-card-description :is(p, ul, ol) {\n    font-family: var(--font-serif-alt);\n}\n\n/* Caption */\n\nfigcaption {\n    margin-top: 12px;\n    font-size: 1.3rem;\n    text-align: center;\n}\n\n.kg-card.kg-width-full figcaption {\n    padding: 0 16px;\n}\n\nfigcaption a {\n    color: rgb(29 78 216);\n    text-decoration: underline;\n}\n\n/* Paid content styles */\n\n.gh-paid-content-notice {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 8px;\n    padding: 36px;\n    background: rgba(0, 0, 0, 0.035);\n    border-radius: 14px;\n    font-size: 16px;\n}\n\nhtml.has-light-text .gh-paid-content-notice {\n    background: rgba(255, 255, 255, 0.035);\n}\n\n.gh-paid-content-notice h3 {\n    letter-spacing: -0.015em !important;\n}\n\n.gh-paid-content-notice p {\n    max-width: 350px;\n    text-align: center;\n    line-height: 1.3em;\n}\n\n.gh-paid-content-cta {\n    display: block;\n    color: var(--background-color) !important;\n    background: var(--color-primary-text);\n    text-decoration: none !important;\n    font-weight: 600;\n    font-size: 0.9em;\n    padding: 8px 16px;\n    margin-top: 8px;\n    border-radius: 6px;\n}\n\n/* Design settings /*\n\n.has-serif-body {\n    --font-size-multiplier: 1.1;\n}\n\n.has-serif-body .gh-content > blockquote,\n.has-serif-body .gh-content > ol,\n.has-serif-body .gh-content > ul,\n.has-serif-body .gh-content > dl,\n.has-serif-body .gh-content > p,\n.has-serif-body .gh-content .kg-callout-card .kg-callout-text,\n.has-serif-body .gh-content .kg-toggle-card .kg-toggle-content > ol,\n.has-serif-body .gh-content .kg-toggle-card .kg-toggle-content > ul,\n.has-serif-body .gh-content .kg-toggle-card .kg-toggle-content > p {\n    font-family: var(--font-serif-alt);\n}\n\n</style>", Ae = /* @__PURE__ */ e({ default: () => je }), je = "(function () {\n  const handleAudioPlayer = function (audioElementContainer) {\n    const audioPlayerContainer = audioElementContainer.querySelector('.kg-audio-player-container');\n    const playIconContainer = audioElementContainer.querySelector('.kg-audio-play-icon');\n    const pauseIconContainer = audioElementContainer.querySelector('.kg-audio-pause-icon');\n    const seekSlider = audioElementContainer.querySelector('.kg-audio-seek-slider');\n    const playbackRateContainer = audioElementContainer.querySelector('.kg-audio-playback-rate');\n    const muteIconContainer = audioElementContainer.querySelector('.kg-audio-mute-icon');\n    const unmuteIconContainer = audioElementContainer.querySelector('.kg-audio-unmute-icon');\n    const volumeSlider = audioElementContainer.querySelector('.kg-audio-volume-slider');\n    const audio = audioElementContainer.querySelector('audio');\n    const durationContainer = audioElementContainer.querySelector('.kg-audio-duration');\n    const currentTimeContainer = audioElementContainer.querySelector('.kg-audio-current-time');\n    let playbackRates = [\n      {\n        rate: 0.75,\n        label: '0.7×',\n      },\n      {\n        rate: 1.0,\n        label: '1×',\n      },\n      {\n        rate: 1.25,\n        label: '1.2×',\n      },\n      {\n        rate: 1.75,\n        label: '1.7×',\n      },\n      {\n        rate: 2.0,\n        label: '2×',\n      },\n    ];\n\n    let raf = null;\n    let currentPlaybackRateIdx = 1;\n\n    const whilePlaying = () => {\n      seekSlider.value = Math.floor(audio.currentTime);\n      currentTimeContainer.textContent = calculateTime(seekSlider.value);\n      audioPlayerContainer.style.setProperty(\n        '--seek-before-width',\n        `${(seekSlider.value / seekSlider.max) * 100}%`,\n      );\n      raf = requestAnimationFrame(whilePlaying);\n    };\n\n    const showRangeProgress = (rangeInput) => {\n      if (rangeInput === seekSlider) {\n        audioPlayerContainer.style.setProperty(\n          '--seek-before-width',\n          (rangeInput.value / rangeInput.max) * 100 + '%',\n        );\n      } else {\n        audioPlayerContainer.style.setProperty(\n          '--volume-before-width',\n          (rangeInput.value / rangeInput.max) * 100 + '%',\n        );\n      }\n    };\n\n    const calculateTime = (secs) => {\n      const minutes = Math.floor(secs / 60);\n      const seconds = Math.floor(secs % 60);\n      const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;\n      return `${minutes}:${returnedSeconds}`;\n    };\n\n    const displayDuration = () => {\n      durationContainer.textContent = calculateTime(audio.duration);\n    };\n\n    const setSliderMax = () => {\n      seekSlider.max = Math.floor(audio.duration);\n    };\n\n    const displayBufferedAmount = () => {\n      if (audio.buffered.length > 0) {\n        const bufferedAmount = Math.floor(audio.buffered.end(audio.buffered.length - 1));\n        audioPlayerContainer.style.setProperty(\n          '--buffered-width',\n          `${(bufferedAmount / seekSlider.max) * 100}%`,\n        );\n      }\n    };\n\n    if (audio.readyState > 0) {\n      displayDuration();\n      setSliderMax();\n      displayBufferedAmount();\n    } else {\n      audio.addEventListener('loadedmetadata', () => {\n        displayDuration();\n        setSliderMax();\n        displayBufferedAmount();\n      });\n    }\n\n    playIconContainer.addEventListener('click', () => {\n      playIconContainer.classList.add('kg-audio-hide');\n      pauseIconContainer.classList.remove('kg-audio-hide');\n      audio.play();\n      requestAnimationFrame(whilePlaying);\n    });\n\n    pauseIconContainer.addEventListener('click', () => {\n      pauseIconContainer.classList.add('kg-audio-hide');\n      playIconContainer.classList.remove('kg-audio-hide');\n      audio.pause();\n      cancelAnimationFrame(raf);\n    });\n\n    muteIconContainer.addEventListener('click', () => {\n      muteIconContainer.classList.add('kg-audio-hide');\n      unmuteIconContainer.classList.remove('kg-audio-hide');\n      audio.muted = false;\n    });\n\n    unmuteIconContainer.addEventListener('click', () => {\n      unmuteIconContainer.classList.add('kg-audio-hide');\n      muteIconContainer.classList.remove('kg-audio-hide');\n      audio.muted = true;\n    });\n\n    playbackRateContainer.addEventListener('click', () => {\n      let nextPlaybackRate = playbackRates[(currentPlaybackRateIdx + 1) % 5];\n      currentPlaybackRateIdx = currentPlaybackRateIdx + 1;\n      audio.playbackRate = nextPlaybackRate.rate;\n      playbackRateContainer.textContent = nextPlaybackRate.label;\n    });\n\n    audio.addEventListener('progress', displayBufferedAmount);\n\n    seekSlider.addEventListener('input', (e) => {\n      showRangeProgress(e.target);\n      currentTimeContainer.textContent = calculateTime(seekSlider.value);\n      if (!audio.paused) {\n        cancelAnimationFrame(raf);\n      }\n    });\n\n    seekSlider.addEventListener('change', () => {\n      audio.currentTime = seekSlider.value;\n      if (!audio.paused) {\n        requestAnimationFrame(whilePlaying);\n      }\n    });\n\n    volumeSlider.addEventListener('input', (e) => {\n      const value = e.target.value;\n      showRangeProgress(e.target);\n      audio.volume = value / 100;\n    });\n  };\n\n  const audioCardElements = document.querySelectorAll('.kg-audio-card');\n\n  for (let i = 0; i < audioCardElements.length; i++) {\n    handleAudioPlayer(audioCardElements[i]);\n  }\n})();\n", Me = /* @__PURE__ */ e({ default: () => Ne }), Ne = "(function () {\n  const images = document.querySelectorAll('.kg-gallery-image img');\n  images.forEach(function (image) {\n    const container = image.closest('.kg-gallery-image');\n    const width = image.attributes.width.value;\n    const height = image.attributes.height.value;\n    const ratio = width / height;\n    container.style.flex = ratio + ' 1 0%';\n  });\n})();\n", Pe = /* @__PURE__ */ e({ default: () => Fe }), Fe = "(function () {\n  const toggleHeadingElements = document.getElementsByClassName('kg-toggle-heading');\n\n  const toggleFn = function (event) {\n    const targetElement = event.target;\n    const parentElement = targetElement.closest('.kg-toggle-card');\n    var toggleState = parentElement.getAttribute('data-kg-toggle-state');\n    if (toggleState === 'close') {\n      parentElement.setAttribute('data-kg-toggle-state', 'open');\n    } else {\n      parentElement.setAttribute('data-kg-toggle-state', 'close');\n    }\n  };\n\n  for (let i = 0; i < toggleHeadingElements.length; i++) {\n    toggleHeadingElements[i].addEventListener('click', toggleFn, false);\n  }\n})();\n", Ie = /* @__PURE__ */ e({ default: () => Le }), Le = "(function () {\n  const handleVideoPlayer = function (videoElementContainer) {\n    const videoPlayer = videoElementContainer.querySelector('.kg-video-player');\n    const videoPlayerContainer = videoElementContainer.querySelector('.kg-video-player-container');\n    const playIconContainer = videoElementContainer.querySelector('.kg-video-play-icon');\n    const pauseIconContainer = videoElementContainer.querySelector('.kg-video-pause-icon');\n    const seekSlider = videoElementContainer.querySelector('.kg-video-seek-slider');\n    const playbackRateContainer = videoElementContainer.querySelector('.kg-video-playback-rate');\n    const muteIconContainer = videoElementContainer.querySelector('.kg-video-mute-icon');\n    const unmuteIconContainer = videoElementContainer.querySelector('.kg-video-unmute-icon');\n    const volumeSlider = videoElementContainer.querySelector('.kg-video-volume-slider');\n    const videoEl = videoElementContainer.querySelector('video');\n    const durationContainer = videoElementContainer.querySelector('.kg-video-duration');\n    const currentTimeContainer = videoElementContainer.querySelector('.kg-video-current-time');\n    const largePlayIcon = videoElementContainer.querySelector('.kg-video-large-play-icon');\n    const videoOverlay = videoElementContainer.querySelector('.kg-video-overlay');\n    let playbackRates = [\n      {\n        rate: 0.75,\n        label: '0.7×',\n      },\n      {\n        rate: 1.0,\n        label: '1×',\n      },\n      {\n        rate: 1.25,\n        label: '1.2×',\n      },\n      {\n        rate: 1.75,\n        label: '1.7×',\n      },\n      {\n        rate: 2.0,\n        label: '2×',\n      },\n    ];\n\n    let raf = null;\n    let currentPlaybackRateIdx = 1;\n    if (!!videoEl.loop) {\n      largePlayIcon.classList.add('kg-video-hide-animated');\n      videoOverlay.classList.add('kg-video-hide-animated');\n    }\n    const whilePlaying = () => {\n      seekSlider.value = Math.floor(videoEl.currentTime);\n      currentTimeContainer.textContent = calculateTime(seekSlider.value);\n      videoPlayer.style.setProperty(\n        '--seek-before-width',\n        `${(seekSlider.value / seekSlider.max) * 100}%`,\n      );\n      raf = requestAnimationFrame(whilePlaying);\n    };\n\n    const showRangeProgress = (rangeInput) => {\n      if (rangeInput === seekSlider) {\n        videoPlayer.style.setProperty(\n          '--seek-before-width',\n          (rangeInput.value / rangeInput.max) * 100 + '%',\n        );\n      } else {\n        videoPlayer.style.setProperty(\n          '--volume-before-width',\n          (rangeInput.value / rangeInput.max) * 100 + '%',\n        );\n      }\n    };\n\n    const calculateTime = (secs) => {\n      const minutes = Math.floor(secs / 60);\n      const seconds = Math.floor(secs % 60);\n      const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;\n      return `${minutes}:${returnedSeconds}`;\n    };\n\n    const displayDuration = () => {\n      durationContainer.textContent = calculateTime(videoEl.duration);\n    };\n\n    const setSliderMax = () => {\n      seekSlider.max = Math.floor(videoEl.duration);\n    };\n\n    const displayBufferedAmount = () => {\n      if (videoEl.buffered.length > 0) {\n        const bufferedAmount = Math.floor(videoEl.buffered.end(videoEl.buffered.length - 1));\n        videoPlayer.style.setProperty(\n          '--buffered-width',\n          `${(bufferedAmount / seekSlider.max) * 100}%`,\n        );\n      }\n    };\n\n    if (videoEl.readyState > 0) {\n      displayDuration();\n      setSliderMax();\n      displayBufferedAmount();\n      if (videoEl.autoplay) {\n        raf = requestAnimationFrame(whilePlaying);\n        playIconContainer.classList.add('kg-video-hide');\n        pauseIconContainer.classList.remove('kg-video-hide');\n      }\n      if (videoEl.muted) {\n        unmuteIconContainer.classList.add('kg-video-hide');\n        muteIconContainer.classList.remove('kg-video-hide');\n      }\n    } else {\n      videoEl.addEventListener('loadedmetadata', () => {\n        displayDuration();\n        setSliderMax();\n        displayBufferedAmount();\n        if (videoEl.autoplay) {\n          raf = requestAnimationFrame(whilePlaying);\n          playIconContainer.classList.add('kg-video-hide');\n          pauseIconContainer.classList.remove('kg-video-hide');\n        }\n        if (videoEl.muted) {\n          unmuteIconContainer.classList.add('kg-video-hide');\n          muteIconContainer.classList.remove('kg-video-hide');\n        }\n      });\n    }\n\n    videoElementContainer.onmouseover = () => {\n      if (!videoEl.loop) {\n        videoPlayerContainer.classList.remove('kg-video-hide-animated');\n      }\n    };\n\n    videoElementContainer.onmouseleave = () => {\n      const isPlaying = !!(\n        videoEl.currentTime > 0 &&\n        !videoEl.paused &&\n        !videoEl.ended &&\n        videoEl.readyState > 2\n      );\n      if (isPlaying) {\n        videoPlayerContainer.classList.add('kg-video-hide-animated');\n      }\n    };\n\n    videoElementContainer.addEventListener('click', () => {\n      if (!videoEl.loop) {\n        const isPlaying = !!(\n          videoEl.currentTime > 0 &&\n          !videoEl.paused &&\n          !videoEl.ended &&\n          videoEl.readyState > 2\n        );\n        if (isPlaying) {\n          handleOnPause();\n        } else {\n          handleOnPlay();\n        }\n      }\n    });\n\n    videoEl.onplay = () => {\n      largePlayIcon.classList.add('kg-video-hide-animated');\n      videoOverlay.classList.add('kg-video-hide-animated');\n      playIconContainer.classList.add('kg-video-hide');\n      pauseIconContainer.classList.remove('kg-video-hide');\n    };\n\n    const handleOnPlay = () => {\n      largePlayIcon.classList.add('kg-video-hide-animated');\n      videoOverlay.classList.add('kg-video-hide-animated');\n      playIconContainer.classList.add('kg-video-hide');\n      pauseIconContainer.classList.remove('kg-video-hide');\n      videoEl.play();\n      raf = requestAnimationFrame(whilePlaying);\n    };\n\n    const handleOnPause = () => {\n      pauseIconContainer.classList.add('kg-video-hide');\n      playIconContainer.classList.remove('kg-video-hide');\n      videoEl.pause();\n      cancelAnimationFrame(raf);\n    };\n\n    largePlayIcon.addEventListener('click', (event) => {\n      event.stopPropagation();\n      handleOnPlay();\n    });\n\n    playIconContainer.addEventListener('click', (event) => {\n      event.stopPropagation();\n      handleOnPlay();\n    });\n\n    pauseIconContainer.addEventListener('click', (event) => {\n      event.stopPropagation();\n      handleOnPause();\n    });\n\n    muteIconContainer.addEventListener('click', (event) => {\n      event.stopPropagation();\n      muteIconContainer.classList.add('kg-video-hide');\n      unmuteIconContainer.classList.remove('kg-video-hide');\n      videoEl.muted = false;\n    });\n\n    unmuteIconContainer.addEventListener('click', (event) => {\n      event.stopPropagation();\n      unmuteIconContainer.classList.add('kg-video-hide');\n      muteIconContainer.classList.remove('kg-video-hide');\n      videoEl.muted = true;\n    });\n\n    playbackRateContainer.addEventListener('click', (event) => {\n      event.stopPropagation();\n      let nextPlaybackRate = playbackRates[(currentPlaybackRateIdx + 1) % 5];\n      currentPlaybackRateIdx = currentPlaybackRateIdx + 1;\n      videoEl.playbackRate = nextPlaybackRate.rate;\n      playbackRateContainer.textContent = nextPlaybackRate.label;\n    });\n\n    videoEl.addEventListener('progress', displayBufferedAmount);\n\n    seekSlider.addEventListener('input', (e) => {\n      e.stopPropagation();\n      showRangeProgress(e.target);\n      currentTimeContainer.textContent = calculateTime(seekSlider.value);\n      if (!videoEl.paused) {\n        cancelAnimationFrame(raf);\n      }\n    });\n\n    seekSlider.addEventListener('change', (event) => {\n      event.stopPropagation();\n      videoEl.currentTime = seekSlider.value;\n      if (!videoEl.paused) {\n        requestAnimationFrame(whilePlaying);\n      }\n    });\n\n    volumeSlider.addEventListener('click', (event) => {\n      event.stopPropagation();\n    });\n\n    seekSlider.addEventListener('click', (event) => {\n      event.stopPropagation();\n    });\n\n    volumeSlider.addEventListener('input', (e) => {\n      e.stopPropagation();\n      const value = e.target.value;\n      showRangeProgress(e.target);\n      videoEl.volume = value / 100;\n    });\n  };\n\n  const setVideoContainerAspectRatio = function (videoCard) {\n    const container = videoCard.querySelector('.kg-video-container');\n    const video = container.querySelector('video');\n    if (container && video.width && video.height) {\n      const aspectRatio = ((video.height / video.width) * 100).toFixed(3);\n      container.style.paddingBottom = `${aspectRatio}%`;\n    }\n  };\n\n  const videoCardElements = document.querySelectorAll('.kg-video-card');\n\n  for (let i = 0; i < videoCardElements.length; i++) {\n    setVideoContainerAspectRatio(videoCardElements[i]);\n    handleVideoPlayer(videoCardElements[i]);\n  }\n})();\n", Re = /* @__PURE__ */ e({ default: () => ze }), ze = ".kg-audio-card,\n.kg-audio-card * {\n  box-sizing: border-box;\n}\n\n.kg-audio-card {\n  display: flex;\n  width: 100%;\n  min-height: 96px;\n  border-radius: 6px;\n  padding: 4px;\n  background: #fff;\n  color: #222;\n  box-shadow: inset 0 0 0 1px rgba(124, 139, 154, 0.25);\n  font-family:\n    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',\n    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n}\n\n.kg-audio-card + .kg-audio-card {\n  margin-top: 1em;\n}\n\n.kg-audio-thumbnail {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80px;\n  min-width: 80px;\n  margin: 8px;\n  background: transparent;\n  object-fit: cover;\n  aspect-ratio: 1/1;\n  border-radius: 3px;\n}\n\n.kg-audio-thumbnail.placeholder {\n  background: var(--ghost-accent-color);\n}\n\n.kg-audio-thumbnail.placeholder svg {\n  width: 24px;\n  height: 24px;\n  fill: white;\n}\n\n.kg-audio-player-container {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  --seek-before-width: 0%;\n  --volume-before-width: 100%;\n  --buffered-width: 0%;\n}\n\n.kg-audio-title {\n  width: 100%;\n  margin: 8px 0 0 0;\n  padding: 8px 12px;\n  border: none;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.15em;\n  background: transparent;\n}\n\n.kg-audio-player {\n  display: flex;\n  flex-grow: 1;\n  align-items: center;\n  padding: 8px 12px;\n}\n\n.kg-audio-current-time {\n  min-width: 38px;\n  padding: 0 4px;\n  font-family: inherit;\n  font-size: 12.5px;\n  font-weight: 500;\n  line-height: 1em;\n  white-space: nowrap;\n}\n\n.kg-audio-time {\n  width: 56px;\n  color: #ababab;\n  font-family: inherit;\n  font-size: 12.5px;\n  font-weight: 500;\n  line-height: 1em;\n  white-space: nowrap;\n}\n\n.kg-audio-duration {\n  padding: 0 4px;\n}\n\n.kg-audio-play-icon,\n.kg-audio-pause-icon {\n  position: relative;\n  bottom: 1px;\n  padding: 0px 4px 0 0;\n  font-size: 0;\n  background: transparent;\n}\n\n.kg-audio-hide {\n  display: none !important;\n}\n\n.kg-audio-play-icon svg,\n.kg-audio-pause-icon svg {\n  width: 14px;\n  height: 14px;\n  fill: currentColor;\n}\n\n.kg-audio-seek-slider {\n  flex-grow: 1;\n  margin: 0 4px;\n}\n\n@media (max-width: 640px) {\n  .kg-audio-seek-slider {\n    display: none;\n  }\n}\n\n.kg-audio-playback-rate {\n  min-width: 37px;\n  padding: 0 4px;\n  font-family: inherit;\n  font-size: 12.5px;\n  font-weight: 600;\n  line-height: 1em;\n  text-align: left;\n  background: transparent;\n  white-space: nowrap;\n}\n\n@media (max-width: 640px) {\n  .kg-audio-playback-rate {\n    padding-left: 8px;\n  }\n}\n\n.kg-audio-mute-icon,\n.kg-audio-unmute-icon {\n  position: relative;\n  bottom: -1px;\n  padding: 0 4px;\n  font-size: 0;\n  background: transparent;\n}\n\n@media (max-width: 640px) {\n  .kg-audio-mute-icon,\n  .kg-audio-unmute-icon {\n    margin-left: auto;\n  }\n}\n\n.kg-audio-mute-icon svg,\n.kg-audio-unmute-icon svg {\n  width: 16px;\n  height: 16px;\n  fill: currentColor;\n}\n\n.kg-audio-volume-slider {\n  width: 80px;\n}\n\n@media (max-width: 400px) {\n  .kg-audio-volume-slider {\n    display: none;\n  }\n}\n\n.kg-audio-seek-slider::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  width: var(--seek-before-width) !important;\n  height: 4px;\n  cursor: pointer;\n  background-color: currentColor;\n  border-radius: 2px;\n}\n\n.kg-audio-volume-slider::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  width: var(--volume-before-width) !important;\n  height: 4px;\n  cursor: pointer;\n  background-color: currentColor;\n  border-radius: 2px;\n}\n\n/* Resetting browser styles\n/* --------------------------------------------------------------- */\n\n.kg-audio-player-container input[type='range'] {\n  position: relative;\n  -webkit-appearance: none;\n  background: transparent;\n}\n\n.kg-audio-player-container input[type='range']:focus {\n  outline: none;\n}\n\n.kg-audio-player-container input[type='range']::-webkit-slider-thumb {\n  -webkit-appearance: none;\n}\n\n.kg-audio-player-container input[type='range']::-ms-track {\n  cursor: pointer;\n  border-color: transparent;\n  color: transparent;\n  background: transparent;\n}\n\n.kg-audio-player-container button {\n  display: flex;\n  align-items: center;\n  border: 0;\n  cursor: pointer;\n}\n\n.kg-audio-player-container input[type='range'] {\n  height: auto;\n  padding: 0;\n  border: 0;\n}\n\n/* Chrome & Safari styles\n/* --------------------------------------------------------------- */\n\n.kg-audio-player-container input[type='range']::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 4px;\n  cursor: pointer;\n  background: rgba(124, 139, 154, 0.25);\n  border-radius: 2px;\n}\n\n.kg-audio-player-container input[type='range']::-webkit-slider-thumb {\n  position: relative;\n  box-sizing: content-box;\n  width: 13px;\n  height: 13px;\n  margin: -5px 0 0 0;\n  border: 0;\n  cursor: pointer;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow:\n    0 0 0 1px rgba(0, 0, 0, 0.08),\n    0 1px 4px rgba(0, 0, 0, 0.24);\n}\n\n.kg-audio-player-container input[type='range']:active::-webkit-slider-thumb {\n  transform: scale(1.2);\n}\n\n/* Firefox styles\n/* --------------------------------------------------------------- */\n\n.kg-audio-player-container input[type='range']::-moz-range-track {\n  width: 100%;\n  height: 4px;\n  cursor: pointer;\n  background: rgba(124, 139, 154, 0.25);\n  border-radius: 2px;\n}\n\n.kg-audio-player-container input[type='range']::-moz-range-progress {\n  background: currentColor;\n  border-radius: 2px;\n}\n\n.kg-audio-player-container input[type='range']::-moz-range-thumb {\n  box-sizing: content-box;\n  width: 13px;\n  height: 13px;\n  border: 0;\n  cursor: pointer;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow:\n    0 0 0 1px rgba(0, 0, 0, 0.08),\n    0 1px 4px rgba(0, 0, 0, 0.24);\n}\n\n.kg-audio-player-container input[type='range']:active::-moz-range-thumb {\n  transform: scale(1.2);\n}\n\n/* Edge & IE styles\n/* --------------------------------------------------------------- */\n\n.kg-audio-player-container input[type='range']::-ms-track {\n  width: 100%;\n  height: 3px;\n  border: solid transparent;\n  color: transparent;\n  cursor: pointer;\n  background: transparent;\n}\n\n.kg-audio-player-container input[type='range']::-ms-fill-lower {\n  background: #fff;\n}\n\n.kg-audio-player-container input[type='range']::-ms-fill-upper {\n  background: currentColor;\n}\n\n.kg-audio-player-container input[type='range']::-ms-thumb {\n  box-sizing: content-box;\n  width: 13px;\n  height: 13px;\n  border: 0;\n  cursor: pointer;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow:\n    0 0 0 1px rgba(0, 0, 0, 0.08),\n    0 1px 4px rgba(0, 0, 0, 0.24);\n}\n\n.kg-audio-player-container input[type='range']:active::-ms-thumb {\n  transform: scale(1.2);\n}\n", Be = /* @__PURE__ */ e({ default: () => q }), q = ".kg-blockquote-alt {\n  font-size: 1.5em;\n  font-style: italic;\n  line-height: 1.7em;\n  text-align: center;\n  padding: 0 2.5em;\n}\n\n@media (max-width: 800px) {\n  .kg-blockquote-alt {\n    font-size: 1.4em;\n    padding-left: 2em;\n    padding-right: 2em;\n  }\n}\n\n@media (max-width: 600px) {\n  .kg-blockquote-alt {\n    font-size: 1.2em;\n    padding-left: 1.75em;\n    padding-right: 1.75em;\n  }\n}\n", Ve = /* @__PURE__ */ e({ default: () => He }), He = ".kg-bookmark-card,\n.kg-bookmark-card * {\n  box-sizing: border-box;\n}\n\n.kg-bookmark-card,\n.kg-bookmark-publisher {\n  position: relative;\n  /* width: 100%; */\n}\n\n.kg-bookmark-card a.kg-bookmark-container,\n.kg-bookmark-card a.kg-bookmark-container:hover {\n  display: flex;\n  background: #fff;\n  text-decoration: none;\n  border-radius: 6px;\n  border: 1px solid rgb(124 139 154 / 25%);\n  overflow: hidden;\n  color: #222;\n}\n\n.kg-bookmark-content {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  flex-basis: 100%;\n  align-items: flex-start;\n  justify-content: flex-start;\n  padding: 20px;\n  overflow: hidden;\n  font-family:\n    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',\n    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n}\n\n.kg-bookmark-title {\n  font-size: 15px;\n  line-height: 1.4em;\n  font-weight: 600;\n}\n\n.kg-bookmark-description {\n  display: -webkit-box;\n  font-size: 14px;\n  line-height: 1.5em;\n  margin-top: 3px;\n  font-weight: 400;\n  max-height: 44px;\n  overflow-y: hidden;\n  opacity: 0.7;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.kg-bookmark-metadata {\n  display: flex;\n  align-items: center;\n  margin-top: 22px;\n  width: 100%;\n  font-size: 14px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n\n.kg-bookmark-metadata > *:not(img) {\n  opacity: 0.7;\n}\n\n.kg-bookmark-icon {\n  width: 20px;\n  height: 20px;\n  margin-right: 6px;\n}\n\n.kg-bookmark-author,\n.kg-bookmark-publisher {\n  display: inline;\n}\n\n.kg-bookmark-publisher {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 240px;\n  white-space: nowrap;\n  display: block;\n  line-height: 1.65em;\n}\n\n.kg-bookmark-metadata > span:nth-of-type(2) {\n  font-weight: 400;\n}\n\n.kg-bookmark-metadata > span:nth-of-type(2):before {\n  content: '•';\n  margin: 0 6px;\n}\n\n.kg-bookmark-metadata > span:last-of-type {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.kg-bookmark-thumbnail {\n  position: relative;\n  flex-grow: 1;\n  min-width: 33%;\n}\n\n.kg-bookmark-thumbnail img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 0 2px 2px 0;\n}\n", J = /* @__PURE__ */ e({ default: () => Ue }), Ue = ".kg-button-card,\n.kg-button-card * {\n  box-sizing: border-box;\n}\n\n.kg-button-card {\n  display: flex;\n  position: static;\n  align-items: center;\n  width: 100%;\n  justify-content: center;\n}\n\n.kg-button-card.kg-align-left {\n  justify-content: flex-start;\n}\n\n.kg-button-card a.kg-btn {\n  display: flex;\n  position: static;\n  align-items: center;\n  padding: 0 1.2em;\n  height: 2.4em;\n  line-height: 1em;\n  font-family:\n    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',\n    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n  font-size: 0.95em;\n  font-weight: 600;\n  text-decoration: none;\n  border-radius: 5px;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.kg-button-card a.kg-btn:hover {\n  opacity: 0.85;\n}\n\n.kg-button-card a.kg-btn-accent {\n  background-color: var(--ghost-accent-color);\n  color: #fff;\n}\n", We = /* @__PURE__ */ e({ default: () => Y }), Y = ".kg-callout-card,\n.kg-callout-card * {\n  box-sizing: border-box;\n}\n\n.kg-callout-card {\n  display: flex;\n  padding: 1.2em 1.6em;\n  border-radius: 8px;\n}\n\n.kg-callout-card-grey {\n  background: rgba(124, 139, 154, 0.13);\n}\n\n.kg-callout-card-white {\n  background: transparent;\n  box-shadow: inset 0 0 0 1px rgba(124, 139, 154, 0.2);\n}\n\n.kg-callout-card-blue {\n  background: rgba(33, 172, 232, 0.12);\n}\n\n.kg-callout-card-green {\n  background: rgba(52, 183, 67, 0.12);\n}\n\n.kg-callout-card-yellow {\n  background: rgba(240, 165, 15, 0.13);\n}\n\n.kg-callout-card-red {\n  background: rgba(209, 46, 46, 0.11);\n}\n\n.kg-callout-card-pink {\n  background: rgba(225, 71, 174, 0.11);\n}\n\n.kg-callout-card-purple {\n  background: rgba(135, 85, 236, 0.12);\n}\n\n.kg-callout-card-accent {\n  background: var(--ghost-accent-color);\n  color: #fff;\n}\n\n.kg-callout-card.kg-callout-card-accent a {\n  color: #fff;\n  text-decoration: underline;\n}\n\n.kg-callout-card div.kg-callout-emoji {\n  padding-right: 0.8em;\n  line-height: 1.25em;\n  font-size: 1.15em;\n}\n\n.kg-callout-card div.kg-callout-text {\n  font-size: 0.95em;\n  line-height: 1.5em;\n}\n\n.kg-callout-card + .kg-callout-card {\n  margin-top: 1em;\n}\n", Ge = /* @__PURE__ */ e({ default: () => Ke }), Ke = ".kg-collection-card {\n  width: 100%;\n  margin-top: 6vmin;\n}\n\n.kg-collection-card + * {\n  margin-top: 6vmin;\n}\n\n.kg-collection-card-title {\n  margin: 0.8rem 0 1.6rem 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\na.kg-collection-card-post-wrapper {\n  text-decoration: none;\n  color: var(--text-color);\n}\n\na.kg-collection-card-post-wrapper:hover {\n  opacity: 1;\n}\n\n.kg-collection-card-post {\n  display: flex;\n  gap: 3.2rem;\n}\n\n.kg-collection-card-img {\n  position: relative;\n  aspect-ratio: 3/2;\n}\n\n.kg-collection-card-img img {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\na.kg-collection-card-post-wrapper:hover img {\n  opacity: 0.92;\n  transition: all 0.2s ease;\n}\n\n.kg-collection-card-content {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.6rem;\n}\n\nh2.kg-collection-card-post-title {\n  margin: 0;\n  font-size: 2.4rem;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n\np.kg-collection-card-post-excerpt {\n  margin-top: 1.2rem;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  line-height: 1.4;\n}\n\n.kg-collection-card-post-meta {\n  display: flex;\n  opacity: 0.5;\n  margin-top: 1.2rem;\n  font-size: 1.3rem;\n  font-weight: 500;\n}\n\n/* List layout */\n\n.kg-collection-card-list {\n  display: flex;\n  flex-direction: column;\n  gap: 3.2rem;\n}\n\n@media (max-width: 767px) {\n  .kg-collection-card-list .kg-collection-card-post {\n    flex-direction: column;\n  }\n}\n\n.kg-collection-card-list .kg-collection-card-img {\n  flex: 0 0 30%;\n}\n\n/* Grid layout */\n\n.kg-collection-card-grid {\n  display: grid;\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n  gap: 2.4rem;\n}\n\n@media (min-width: 640px) {\n  .kg-collection-card-grid:not(.columns-1) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (min-width: 1024px) {\n  .kg-collection-card-grid:not(.columns-1):not(.columns-2) {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 3.2rem;\n  }\n\n  .kg-collection-card-grid.columns-1 {\n    gap: 4.8rem;\n  }\n\n  .kg-collection-card-grid.columns-2 {\n    gap: 4rem;\n  }\n}\n\n@media (min-width: 1280px) {\n  .kg-collection-card-grid:not(.columns-1):not(.columns-2):not(.columns-3) {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n}\n\n.kg-collection-card-grid .kg-collection-card-post {\n  flex-direction: column;\n  gap: 1.2rem;\n}\n\n@media (min-width: 1024px) {\n  .kg-collection-card-grid.columns-1 .kg-collection-card-post {\n    gap: 2rem;\n  }\n\n  .kg-collection-card-grid.columns-2 .kg-collection-card-post {\n    gap: 1.6rem;\n  }\n}\n\n.kg-collection-card-grid.columns-1 .kg-collection-card-img,\n.kg-collection-card-grid.columns-2 .kg-collection-card-img {\n  aspect-ratio: 16/9;\n}\n\n.kg-collection-card-grid .kg-collection-card-content {\n  font-size: 1.5rem;\n}\n\n@media (min-width: 640px) {\n  .kg-collection-card-grid .kg-collection-card-content {\n    font-size: 1.6rem;\n  }\n}\n\n@media (min-width: 1024px) {\n  .kg-collection-card-grid.columns-1 .kg-collection-card-content {\n    font-size: 1.8rem;\n  }\n\n  .kg-collection-card-grid.columns-3 .kg-collection-card-content,\n  .kg-collection-card-grid.columns-4 .kg-collection-card-content {\n    font-size: 1.5rem;\n  }\n}\n\n.kg-collection-card-grid h2.kg-collection-card-post-title {\n  font-size: 1.7rem;\n}\n\n.kg-collection-card-grid .kg-collection-card-post-meta {\n  font-size: 1.25rem;\n}\n\n@media (min-width: 640px) {\n  .kg-collection-card-grid h2.kg-collection-card-post-title {\n    font-size: 1.9rem;\n  }\n\n  .kg-collection-card-grid.columns-1 h2.kg-collection-card-post-title {\n    font-size: 2.4rem;\n  }\n\n  .kg-collection-card-grid:not(.columns-3):not(.columns-4) .kg-collection-card-post-meta {\n    font-size: 1.3rem;\n  }\n}\n\n@media (min-width: 1024px) {\n  .kg-collection-card-grid.columns-1 h2.kg-collection-card-post-title {\n    font-size: 3.6rem;\n  }\n\n  .kg-collection-card-grid.columns-2 h2.kg-collection-card-post-title {\n    font-size: 2.4rem;\n  }\n\n  .kg-collection-card-grid.columns-1 .kg-collection-card-post-meta {\n    font-size: 1.4rem;\n  }\n}\n\n@media (min-width: 1280px) {\n  .kg-collection-card-grid.columns-4 h2.kg-collection-card-post-title {\n    font-size: 1.7rem;\n  }\n}\n", qe = /* @__PURE__ */ e({ default: () => X }), X = ".kg-cta-card,\n.kg-cta-card * {\n  box-sizing: border-box;\n}\n\n.kg-cta-card {\n  display: flex;\n  flex-direction: column;\n  border-radius: 8px;\n}\n\n.kg-cta-bg-grey {\n  background: rgba(151, 163, 175, 0.14);\n}\n\n.kg-cta-bg-white {\n  background: transparent;\n  box-shadow: inset 0 0 0 1px rgba(124, 139, 154, 0.2);\n}\n\n.kg-cta-bg-blue {\n  background: rgba(33, 172, 232, 0.12);\n}\n\n.kg-cta-bg-green {\n  background: rgba(52, 183, 67, 0.12);\n}\n\n.kg-cta-bg-yellow {\n  background: rgba(240, 165, 15, 0.13);\n}\n\n.kg-cta-bg-red {\n  background: rgba(209, 46, 46, 0.11);\n}\n\n.kg-cta-bg-pink {\n  background: rgba(225, 71, 174, 0.11);\n}\n\n.kg-cta-bg-purple {\n  background: rgba(135, 85, 236, 0.12);\n}\n\n.kg-cta-sponsor-label-wrapper {\n  margin: 0 1.5em;\n  padding: 0.7em 0;\n  border-bottom: 1px solid rgba(124, 139, 154, 0.2);\n}\n\n@media (max-width: 600px) {\n  .kg-cta-sponsor-label-wrapper {\n    margin: 0 1.25em;\n    padding: 0.5em 0;\n  }\n}\n\n.kg-cta-bg-none .kg-cta-sponsor-label-wrapper {\n  margin: 0;\n  padding-top: 0;\n}\n\n.kg-cta-has-img\n  .kg-cta-sponsor-label-wrapper:not(.kg-cta-bg-none .kg-cta-sponsor-label-wrapper):not(\n    .kg-cta-minimal .kg-cta-sponsor-label-wrapper\n  ),\n.kg-cta-bg-none.kg-cta-no-dividers .kg-cta-sponsor-label-wrapper {\n  border-bottom: 0;\n}\n\n.kg-cta-sponsor-label {\n  font-family:\n    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',\n    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  text-wrap: pretty;\n}\n\n.kg-cta-sponsor-label span:not(a span) {\n  color: color-mix(in srgb, currentColor 45%, transparent);\n}\n\n.kg-cta-sponsor-label a,\n.kg-cta-sponsor-label a span {\n  color: currentColor;\n  transition: opacity 0.15s ease-in-out;\n}\n\n.kg-cta-sponsor-label a:hover,\n.kg-cta-sponsor-label a:hover span {\n  color: currentColor;\n  opacity: 0.85;\n}\n\n.kg-cta-link-accent .kg-cta-sponsor-label a {\n  color: var(--ghost-accent-color);\n}\n\n.kg-cta-content {\n  display: flex;\n  padding: 1.5em;\n  gap: 1.5em;\n}\n\n@media (max-width: 600px) {\n  .kg-cta-content {\n    padding: 1.25em;\n    gap: 1.25em;\n  }\n}\n\n.kg-cta-has-img\n  .kg-cta-sponsor-label-wrapper\n  + .kg-cta-content:not(.kg-cta-bg-none .kg-cta-content):not(.kg-cta-minimal .kg-cta-content) {\n  padding-top: 0;\n}\n\n.kg-cta-bg-none .kg-cta-content {\n  padding: 1.5em 0;\n  border-bottom: 1px solid rgba(124, 139, 154, 0.2);\n}\n\n.kg-cta-bg-none.kg-cta-no-dividers .kg-cta-content {\n  padding: 0;\n  border-bottom: none;\n}\n\n.kg-cta-bg-none:not(.kg-cta-no-dividers)\n  .kg-cta-content:not(.kg-cta-sponsor-label-wrapper + .kg-cta-content) {\n  border-top: 1px solid rgba(124, 139, 154, 0.2);\n}\n\n@media (max-width: 600px) {\n  .kg-cta-bg-none .kg-cta-content {\n    padding: 1.25em 0;\n  }\n}\n\n.kg-cta-minimal .kg-cta-content {\n  flex-direction: row;\n}\n\n@media (max-width: 600px) {\n  .kg-cta-minimal .kg-cta-content {\n    flex-direction: column;\n    gap: 1.6rem;\n  }\n}\n\n.kg-cta-immersive .kg-cta-content {\n  flex-direction: column;\n}\n\n.kg-cta-content-inner {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5em;\n}\n\n@media (max-width: 600px) {\n  .kg-cta-content-inner {\n    gap: 1.25em;\n  }\n}\n\n.kg-cta-immersive.kg-cta-centered .kg-cta-content-inner {\n  align-items: center;\n}\n\n.kg-cta-image-container {\n  flex-shrink: 0;\n}\n\n.kg-cta-image-container img {\n  width: 100%;\n  height: auto;\n  margin: 0;\n  object-fit: cover;\n  border-radius: 6px;\n}\n\n.kg-cta-minimal .kg-cta-image-container img {\n  width: 64px;\n  height: 64px;\n}\n\n@media (max-width: 600px) {\n  .kg-cta-minimal .kg-cta-image-container img {\n    width: 52px;\n    height: 52px;\n  }\n}\n\n.kg-cta-text p {\n  margin: 0;\n  line-height: 1.5em;\n  text-wrap: pretty;\n}\n\n.kg-cta-bg-none .kg-cta-text p {\n  line-height: unset;\n}\n\n.kg-cta-immersive.kg-cta-centered .kg-cta-text {\n  text-align: center;\n}\n\n.kg-cta-text p + p {\n  margin-top: 1.25em;\n}\n\n.kg-cta-text a {\n  color: currentColor;\n  transition: opacity 0.15s ease-in-out;\n}\n\n.kg-cta-text a:hover {\n  color: currentColor;\n  opacity: 0.85;\n}\n\n.kg-cta-link-accent .kg-cta-text a {\n  color: var(--ghost-accent-color);\n}\n\na.kg-cta-button {\n  display: flex;\n  position: static;\n  align-items: center;\n  justify-content: center;\n  padding: 0 1em;\n  height: 2.5em;\n  font-family:\n    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',\n    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n  font-size: 0.95em;\n  font-weight: 500;\n  line-height: 1.65;\n  text-decoration: none;\n  border-radius: 6px;\n  transition: opacity 0.15s ease-in-out;\n}\n\na.kg-cta-button:hover {\n  opacity: 0.85;\n}\n\na.kg-cta-button.kg-style-accent {\n  background-color: var(--ghost-accent-color);\n}\n\na.kg-cta-button {\n  width: max-content;\n}\n\n.kg-cta-immersive.kg-cta-has-img a.kg-cta-button {\n  width: 100%;\n}\n", Je = /* @__PURE__ */ e({ default: () => Ye }), Ye = ".kg-file-card,\n.kg-file-card * {\n  box-sizing: border-box;\n}\n\n.kg-file-card {\n  display: flex;\n}\n\n.kg-file-card a.kg-file-card-container {\n  display: flex;\n  align-items: stretch;\n  justify-content: space-between;\n  color: inherit;\n  padding: 12px;\n  min-height: 92px;\n  background: #fff;\n  color: #222;\n  border: 1px solid rgb(124 139 154 / 25%);\n  border-radius: 5px;\n  transition: all ease-in-out 0.35s;\n  text-decoration: none;\n  width: 100%;\n  font-family:\n    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',\n    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n}\n\n.kg-file-card a.kg-file-card-container:hover {\n  border: 1px solid rgb(124 139 154 / 35%);\n}\n\n.kg-file-card-contents {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin: 4px 8px;\n  width: 100%;\n}\n\n.kg-file-card-title {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.3em;\n}\n\n.kg-file-card-caption {\n  font-size: 14px;\n  line-height: 1.3em;\n  opacity: 0.7;\n}\n\n.kg-file-card-title + .kg-file-card-caption {\n  flex-grow: 1;\n  margin-top: 3px;\n}\n\n.kg-file-card-metadata {\n  display: inline;\n  font-size: 14px;\n  line-height: 1.3em;\n  margin-top: 5px;\n}\n\n.kg-file-card-filename {\n  display: inline;\n  font-weight: 500;\n}\n\n.kg-file-card-filesize {\n  display: inline-block;\n  font-size: 14px;\n  opacity: 0.6;\n}\n\n.kg-file-card-filesize:before {\n  display: inline-block;\n  content: '\\2022';\n  margin-left: 6px;\n  margin-right: 6px;\n}\n\n.kg-file-card-icon {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 80px;\n  min-width: 80px;\n  height: 100%;\n  min-height: 80px;\n}\n\n.kg-file-card-icon:before {\n  position: absolute;\n  display: block;\n  content: '';\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: currentColor;\n  opacity: 0.06;\n  transition: opacity ease-in-out 0.35s;\n  border-radius: 3px;\n}\n\n.kg-file-card a.kg-file-card-container:hover .kg-file-card-icon:before {\n  opacity: 0.08;\n}\n\n.kg-file-card-icon svg {\n  width: 24px;\n  height: 24px;\n  color: var(--ghost-accent-color);\n}\n\n/* Size variations */\n.kg-file-card-medium a.kg-file-card-container {\n  min-height: 72px;\n}\n\n.kg-file-card-medium .kg-file-card-caption {\n  opacity: 1;\n  font-weight: 500;\n}\n\n.kg-file-card-small a.kg-file-card-container {\n  align-items: center;\n  min-height: 52px;\n}\n\n.kg-file-card-small .kg-file-card-metadata {\n  font-size: 14px;\n  margin-top: 0;\n}\n\n.kg-file-card-small .kg-file-card-icon svg {\n  width: 20px;\n  height: 20px;\n}\n\n.kg-file-card + .kg-file-card {\n  margin-top: 1em;\n}\n", Xe = /* @__PURE__ */ e({ default: () => Z }), Z = ".kg-gallery-card,\n.kg-gallery-card * {\n  box-sizing: border-box;\n}\n\n.kg-gallery-card,\n.kg-image-card {\n  --gap: 1.2rem;\n}\n\n.kg-image-card:not(.kg-card-hascaption) + .kg-image-card,\n.kg-image-card:not(.kg-card-hascaption) + .kg-gallery-card,\n.kg-gallery-card:not(.kg-card-hascaption) + .kg-image-card,\n.kg-gallery-card:not(.kg-card-hascaption) + .kg-gallery-card {\n  margin-top: var(--gap);\n}\n\n.kg-gallery-container {\n  position: relative;\n}\n\n.kg-gallery-row {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.kg-gallery-image img {\n  display: block;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.kg-gallery-row:not(:first-of-type) {\n  margin: var(--gap) 0 0;\n}\n\n.kg-gallery-image:not(:first-of-type) {\n  margin: 0 0 0 var(--gap);\n}\n\n@media (max-width: 600px) {\n  .kg-gallery-card,\n  .kg-image-card {\n    --gap: 0.6rem;\n  }\n}\n", Ze = /* @__PURE__ */ e({ default: () => Qe }), Qe = ".kg-header-card,\n.kg-header-card * {\n  box-sizing: border-box;\n}\n\n.kg-header-card {\n  padding: 12vmin 4em;\n  min-height: 60vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.kg-header-card.kg-size-small {\n  padding-top: 14vmin;\n  padding-bottom: 14vmin;\n  min-height: 40vh;\n}\n\n.kg-header-card.kg-size-large {\n  padding-top: 18vmin;\n  padding-bottom: 18vmin;\n  min-height: 80vh;\n}\n\n.kg-header-card.kg-align-left {\n  text-align: left;\n  align-items: flex-start;\n}\n\n.kg-header-card.kg-style-dark {\n  background: #151515;\n  color: #ffffff;\n}\n\n.kg-header-card.kg-style-light {\n  background-color: #fafafa;\n}\n\n.kg-header-card.kg-style-accent {\n  background-color: var(--ghost-accent-color);\n}\n\n.kg-header-card.kg-style-image {\n  position: relative;\n  background-color: #e7e7e7;\n  background-size: cover;\n  background-position: center;\n}\n\n.kg-header-card.kg-style-image::before {\n  position: absolute;\n  display: block;\n  content: '';\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));\n}\n\n.kg-header-card h2.kg-header-card-header {\n  font-size: 5em;\n  font-weight: 700;\n  line-height: 1.1em;\n  letter-spacing: -0.01em;\n  margin: 0;\n}\n\n.kg-header-card h2.kg-header-card-header strong {\n  font-weight: 800;\n}\n\n.kg-header-card.kg-size-small h2.kg-header-card-header {\n  font-size: 4em;\n}\n\n.kg-header-card.kg-size-large h2.kg-header-card-header {\n  font-size: 6em;\n}\n\n.kg-header-card h3.kg-header-card-subheader {\n  font-size: 1.5em;\n  font-weight: 500;\n  line-height: 1.4em;\n  margin: 0;\n  max-width: 40em;\n}\n\n.kg-header-card h2 + h3.kg-header-card-subheader {\n  margin: 0.35em 0 0;\n}\n\n.kg-header-card h3.kg-header-card-subheader strong {\n  font-weight: 600;\n}\n\n.kg-header-card.kg-size-small h3.kg-header-card-subheader {\n  font-size: 1.25em;\n}\n\n.kg-header-card.kg-size-large h3.kg-header-card-subheader {\n  font-size: 1.75em;\n}\n\n.kg-header-card:not(.kg-style-light) h2.kg-header-card-header,\n.kg-header-card:not(.kg-style-light) h3.kg-header-card-subheader {\n  color: #ffffff;\n}\n\n.kg-header-card.kg-style-accent h3.kg-header-card-subheader,\n.kg-header-card.kg-style-image h3.kg-header-card-subheader {\n  opacity: 1;\n}\n\n.kg-header-card.kg-style-image h2.kg-header-card-header,\n.kg-header-card.kg-style-image h3.kg-header-card-subheader,\n.kg-header-card.kg-style-image a.kg-header-card-button {\n  z-index: 999;\n}\n\n.kg-header-card h2.kg-header-card-header a,\n.kg-header-card h3.kg-header-card-subheader a {\n  color: var(--ghost-accent-color);\n}\n\n.kg-header-card.kg-style-accent h2.kg-header-card-header a,\n.kg-header-card.kg-style-accent h3.kg-header-card-subheader a,\n.kg-header-card.kg-style-image h2.kg-header-card-header a,\n.kg-header-card.kg-style-image h3.kg-header-card-subheader a {\n  color: #fff;\n}\n\n.kg-header-card a.kg-header-card-button {\n  display: flex;\n  position: static;\n  align-items: center;\n  fill: #fff;\n  background: #fff;\n  border-radius: 3px;\n  outline: none;\n  font-family:\n    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',\n    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n  font-size: 1.05em;\n  font-weight: 600;\n  line-height: 1em;\n  text-align: center;\n  text-decoration: none;\n  letter-spacing: 0.2px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #151515;\n  height: 2.7em;\n  padding: 0 1.2em;\n  transition: opacity 0.2s ease;\n}\n\n.kg-header-card h2 + a.kg-header-card-button,\n.kg-header-card h3 + a.kg-header-card-button {\n  margin: 1.75em 0 0;\n}\n\n.kg-header-card a.kg-header-card-button:hover {\n  opacity: 0.85;\n}\n\n.kg-header-card.kg-size-large a.kg-header-card-button {\n  font-size: 1.1em;\n  height: 2.9em;\n}\n\n.kg-header-card.kg-size-large h2 + a.kg-header-card-button,\n.kg-header-card.kg-size-large h3 + a.kg-header-card-button {\n  margin-top: 2em;\n}\n\n.kg-header-card.kg-size-small a.kg-header-card-button {\n  height: 2.4em;\n  font-size: 1em;\n}\n\n.kg-header-card.kg-size-small h2 + a.kg-header-card-button,\n.kg-header-card.kg-size-small h3 + a.kg-header-card-button {\n  margin-top: 1.5em;\n}\n\n.kg-header-card.kg-style-image a.kg-header-card-button,\n.kg-header-card.kg-style-dark a.kg-header-card-button {\n  background: #fff;\n  color: #151515;\n}\n\n.kg-header-card.kg-style-light a.kg-header-card-button {\n  background: var(--ghost-accent-color);\n  color: #fff;\n}\n\n.kg-header-card.kg-style-accent a.kg-header-card-button {\n  background: #fff;\n  color: #151515;\n}\n\n@media (max-width: 640px) {\n  .kg-header-card {\n    padding-left: 1em;\n    padding-right: 1em;\n  }\n\n  .kg-header-card h2.kg-header-card-header {\n    font-size: 3.5em;\n  }\n\n  .kg-header-card.kg-size-large h2.kg-header-card-header {\n    font-size: 4em;\n  }\n\n  .kg-header-card.kg-size-small h2.kg-header-card-header {\n    font-size: 3em;\n  }\n\n  .kg-header-card h3.kg-header-card-subheader {\n    font-size: 1.25em;\n  }\n\n  .kg-header-card.kg-size-large h3.kg-header-card-subheader {\n    font-size: 1.5em;\n  }\n\n  .kg-header-card.kg-size-small h3.kg-header-card-subheader {\n    font-size: 1em;\n  }\n}\n", $e = /* @__PURE__ */ e({ default: () => et }), et = ".kg-header-card.kg-v2 {\n  position: relative;\n  padding: 0;\n  min-height: initial;\n  text-align: initial;\n}\n\n.kg-header-card.kg-v2,\n.kg-header-card.kg-v2 * {\n  box-sizing: border-box;\n}\n\n.kg-header-card.kg-v2 a,\n.kg-header-card.kg-v2 a span {\n  color: currentColor;\n}\n\n.kg-header-card.kg-style-accent.kg-v2 {\n  background-color: var(--ghost-accent-color);\n}\n\n.kg-header-card-content {\n  width: 100%;\n}\n\n.kg-layout-split .kg-header-card-content {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.kg-header-card-text {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  height: 100%;\n  padding: min(6.4vmax, 120px) min(4vmax, 80px);\n  background-size: cover;\n  background-position: center;\n  text-align: left;\n}\n\n.kg-width-wide .kg-header-card-text {\n  padding: min(10vmax, 220px) min(6.4vmax, 140px);\n}\n\n.kg-width-full .kg-header-card-text {\n  padding: min(12vmax, 260px) 0;\n}\n\n.kg-layout-split .kg-header-card-text {\n  padding: min(12vmax, 260px) min(4vmax, 80px);\n}\n\n.kg-layout-split.kg-content-wide .kg-header-card-text {\n  padding: min(10vmax, 220px) 0 min(10vmax, 220px) min(4vmax, 80px);\n}\n\n.kg-layout-split.kg-content-wide.kg-swapped .kg-header-card-text {\n  padding: min(10vmax, 220px) min(4vmax, 80px) min(10vmax, 220px) 0;\n}\n\n.kg-swapped .kg-header-card-text {\n  grid-row: 1;\n}\n\n.kg-header-card-text.kg-align-center {\n  align-items: center;\n  text-align: center;\n}\n\n.kg-header-card.kg-style-image h2.kg-header-card-heading,\n.kg-header-card.kg-style-image .kg-header-card-subheading,\n.kg-header-card.kg-style-image.kg-v2 .kg-header-card-button {\n  z-index: 999;\n}\n\n/* Background image */\n\n.kg-header-card > picture > .kg-header-card-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  background-color: #ffffff;\n  pointer-events: none;\n}\n\n/* Split layout image */\n\n.kg-header-card-content .kg-header-card-image {\n  width: 100%;\n  /* this will force the image to follow the signup card height */\n  height: 0;\n  min-height: 100%;\n  /**/\n  object-fit: cover;\n  object-position: center;\n}\n\n.kg-content-wide .kg-header-card-content .kg-header-card-image {\n  height: 100%;\n  padding: 5.6em 0;\n  object-fit: contain;\n}\n\n/* Heading */\n\n.kg-header-card h2.kg-header-card-heading {\n  margin: 0;\n  font-size: clamp(1.7em, 4vw, 2.5em);\n  font-weight: 700;\n  line-height: 1.05em;\n  letter-spacing: -0.01em;\n}\n\n.kg-header-card.kg-width-wide h2.kg-header-card-heading {\n  font-size: clamp(1.7em, 5vw, 3.3em);\n}\n\n.kg-header-card.kg-width-full h2.kg-header-card-heading {\n  font-size: clamp(1.9em, 5.6vw, 4.2em);\n}\n\n.kg-header-card.kg-width-full.kg-layout-split h2.kg-header-card-heading {\n  font-size: clamp(1.9em, 4vw, 3.3em);\n}\n\n/* Subheading */\n\n.kg-header-card-subheading {\n  margin: 0 0 2em;\n}\n\n.kg-header-card .kg-header-card-subheading {\n  max-width: 40em;\n  margin: 0;\n  font-size: clamp(1.05em, 2vw, 1.4em);\n  font-weight: 500;\n  line-height: 1.2em;\n}\n\n.kg-header-card h2 + .kg-header-card-subheading {\n  margin: 0.6em 0 0;\n}\n\n.kg-header-card .kg-header-card-subheading strong {\n  font-weight: 600;\n}\n\n.kg-header-card.kg-width-wide .kg-header-card-subheading {\n  font-size: clamp(1.05em, 2vw, 1.55em);\n}\n\n.kg-header-card.kg-width-full\n  .kg-header-card-subheading:not(.kg-layout-split .kg-header-card-subheading) {\n  max-width: min(65vmax, 1200px);\n  font-size: clamp(1.05em, 2vw, 1.7em);\n}\n\n.kg-header-card.kg-width-full.kg-layout-split .kg-header-card-subheading {\n  font-size: clamp(1.05em, 2vw, 1.55em);\n}\n\n.kg-header-card.kg-v2 .kg-header-card-button {\n  display: flex;\n  position: relative;\n  align-items: center;\n  height: 2.9em;\n  min-height: 46px;\n  padding: 0 1.2em;\n  outline: none;\n  border: none;\n  font-size: 1em;\n  font-weight: 600;\n  line-height: 1em;\n  text-align: center;\n  text-decoration: none;\n  letter-spacing: 0.2px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  border-radius: 3px;\n  transition: opacity 0.2s ease;\n}\n\n.kg-header-card.kg-v2 .kg-header-card-button.kg-style-accent {\n  background-color: var(--ghost-accent-color);\n}\n\n.kg-header-card.kg-v2 h2 + .kg-header-card-button,\n.kg-header-card.kg-v2 p + .kg-header-card-button {\n  margin: 1.5em 0 0;\n}\n\n.kg-header-card.kg-v2 .kg-header-card-button:hover {\n  opacity: 0.85;\n}\n\n.kg-header-card.kg-v2.kg-width-wide .kg-header-card-button {\n  font-size: 1.05em;\n}\n\n.kg-header-card.kg-v2.kg-width-wide h2 + .kg-header-card-button,\n.kg-header-card.kg-v2.kg-width-wide p + .kg-header-card-button {\n  margin-top: 1.75em;\n}\n\n.kg-header-card.kg-v2.kg-width-full .kg-header-card-button {\n  font-size: 1.1em;\n}\n\n.kg-header-card.kg-v2.kg-width-full h2 + .kg-header-card-button,\n.kg-header-card.kg-v2.kg-width-full p + .kg-header-card-button {\n  margin-top: 2em;\n}\n\n/* Responsive styles */\n\n@media (max-width: 640px) {\n  .kg-layout-split .kg-header-card-content {\n    grid-template-columns: 1fr;\n  }\n\n  .kg-width-wide .kg-header-card-text {\n    padding: min(6.4vmax, 120px) min(4vmax, 80px);\n  }\n\n  .kg-layout-split.kg-content-wide .kg-header-card-text,\n  .kg-layout-split.kg-content-wide.kg-swapped .kg-header-card-text {\n    padding: min(9.6vmax, 180px) 0;\n  }\n\n  .kg-header-card.kg-width-full\n    .kg-header-card-subheading:not(.kg-layout-split .kg-header-card-subheading) {\n    max-width: unset;\n  }\n\n  .kg-header-card-content\n    .kg-header-card-image:not(.kg-content-wide .kg-header-card-content .kg-header-card-image) {\n    height: auto;\n    min-height: unset;\n    aspect-ratio: 1 / 1;\n  }\n\n  .kg-content-wide .kg-header-card-content .kg-header-card-image {\n    padding: 1.7em 0 0;\n  }\n\n  .kg-content-wide.kg-swapped .kg-header-card-content .kg-header-card-image {\n    padding: 0 0 1.7em;\n  }\n\n  .kg-header-card.kg-v2 .kg-header-card-button {\n    height: 2.9em;\n  }\n\n  .kg-header-card.kg-v2.kg-width-wide .kg-header-card-button,\n  .kg-header-card.kg-v2.kg-width-full .kg-header-card-button {\n    font-size: 1em;\n  }\n}\n", tt = /* @__PURE__ */ e({ default: () => nt }), nt = ".kg-nft-card,\n.kg-nft-card * {\n  box-sizing: border-box;\n}\n\n.kg-nft-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.kg-nft-card a.kg-nft-card-container {\n  position: static;\n  display: flex;\n  flex: auto;\n  flex-direction: column;\n  text-decoration: none;\n  font-family:\n    -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu,\n    roboto, noto, 'segoe ui', arial, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  box-shadow:\n    0 2px 6px -2px rgb(0 0 0 / 10%),\n    0 0 1px rgb(0 0 0 / 40%);\n  width: 100%;\n  max-width: 512px;\n  color: #222;\n  background: #fff;\n  border-radius: 5px;\n  transition: none;\n}\n\n.kg-nft-card * {\n  position: static;\n}\n\n.kg-nft-metadata {\n  padding: 20px;\n  width: 100%;\n}\n\n.kg-nft-image {\n  border-radius: 5px 5px 0 0;\n  width: 100%;\n}\n\n.kg-nft-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 20px;\n}\n\n.kg-nft-header h4.kg-nft-title {\n  font-family: inherit;\n  font-size: 19px;\n  font-weight: 700;\n  line-height: 1.3em;\n  min-width: unset;\n  max-width: unset;\n  margin: 0;\n  color: #222;\n}\n\n.kg-nft-opensea-logo {\n  margin-top: 2px;\n  width: 100px;\n  object-fit: scale-down;\n}\n\n.kg-nft-creator {\n  font-family: inherit;\n  line-height: 1.4em;\n  margin: 4px 0 0;\n  color: #ababab;\n}\n\n.kg-nft-creator span {\n  font-weight: 500;\n  color: #222;\n}\n\n.kg-nft-card p.kg-nft-description {\n  font-family: inherit;\n  font-size: 14px;\n  line-height: 1.4em;\n  margin: 20px 0 0;\n  color: #222;\n}\n", rt = /* @__PURE__ */ e({ default: () => it }), it = ".kg-product-card,\n.kg-product-card * {\n  box-sizing: border-box;\n}\n\n.kg-product-card {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n}\n\n.kg-product-card-container {\n  display: grid;\n  grid-template-columns: auto min-content;\n  align-items: center;\n  grid-row-gap: 16px;\n  background: transparent;\n  max-width: 550px;\n  padding: 20px;\n  width: 100%;\n  background: #fff;\n  color: #222;\n  border-radius: 5px;\n  box-shadow: inset 0 0 0 1px rgb(124 139 154 / 25%);\n  font-family:\n    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',\n    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n}\n\n.kg-product-card-image {\n  grid-column: 1 / 3;\n  justify-self: center;\n  height: auto;\n}\n\n.kg-product-card-title-container {\n  grid-column: 1 / 2;\n}\n\n.kg-product-card h4.kg-product-card-title {\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 21px;\n  margin-top: 0;\n  margin-bottom: 0;\n  line-height: 1.15em;\n}\n\n.kg-product-card-description {\n  grid-column: 1 / 3;\n}\n\n.kg-product-card .kg-product-card-description p,\n.kg-product-card .kg-product-card-description ol,\n.kg-product-card .kg-product-card-description ul {\n  font-size: 14px;\n  line-height: 1.5em;\n  opacity: 0.7;\n  margin-bottom: 0;\n}\n\n.kg-product-card .kg-product-card-description p:first-of-type {\n  margin-top: -4px;\n}\n\n.kg-product-card .kg-product-card-description p:not(:first-of-type),\n.kg-product-card .kg-product-card-description ul,\n.kg-product-card .kg-product-card-description ol {\n  margin-top: 0.95em;\n}\n\n.kg-product-card .kg-product-card-description li + li {\n  margin-top: 0.5em;\n}\n\n.kg-product-card-rating {\n  display: flex;\n  align-items: center;\n  grid-column: 2 / 3;\n  align-self: start;\n  justify-self: end;\n  padding-left: 16px;\n}\n\n@media (max-width: 400px) {\n  .kg-product-card-title-container {\n    grid-column: 1 / 3;\n  }\n\n  .kg-product-card-rating {\n    grid-column: 1 / 3;\n    justify-self: start;\n    margin-top: -15px;\n    padding-left: 0;\n  }\n}\n\n.kg-product-card-rating-star {\n  height: 20px;\n  width: 20px;\n}\n\n.kg-product-card-rating-star svg {\n  width: 16px;\n  height: 16px;\n  fill: currentColor;\n  opacity: 0.15;\n}\n\n.kg-product-card-rating-active.kg-product-card-rating-star svg {\n  opacity: 1;\n}\n\n.kg-product-card a.kg-product-card-button {\n  justify-content: center;\n  grid-column: 1 / 3;\n  display: flex;\n  position: static;\n  align-items: center;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1em;\n  text-decoration: none;\n  width: 100%;\n  height: 38px;\n  border-radius: 6px;\n  padding: 0 12px;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.kg-product-card a.kg-product-card-btn-accent {\n  background-color: var(--ghost-accent-color);\n  color: #fff;\n}\n", at = /* @__PURE__ */ e({ default: () => ot }), ot = ".kg-signup-card {\n  position: relative;\n}\n\n.kg-signup-card,\n.kg-signup-card * {\n  box-sizing: border-box;\n}\n\n.kg-signup-card a,\n.kg-signup-card a span {\n  color: currentColor;\n}\n\n.kg-signup-card.kg-style-accent {\n  background-color: var(--ghost-accent-color);\n}\n\n.kg-layout-split .kg-signup-card-content {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.kg-signup-card-text {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  height: 100%;\n  padding: min(4vmax, 80px);\n  background-size: cover;\n  background-position: center;\n  text-align: left;\n}\n\n.kg-width-wide .kg-signup-card-text {\n  padding: min(6.4vmax, 120px);\n}\n\n.kg-width-full .kg-signup-card-text {\n  padding: min(12vmax, 260px) 0;\n}\n\n.kg-layout-split .kg-signup-card-text {\n  padding: min(12vmax, 260px) min(4vmax, 80px);\n}\n\n.kg-layout-split.kg-content-wide .kg-signup-card-text {\n  padding: min(10vmax, 220px) 0 min(10vmax, 220px) min(4vmax, 80px);\n}\n\n.kg-layout-split.kg-content-wide.kg-swapped .kg-signup-card-text {\n  padding: min(10vmax, 220px) min(4vmax, 80px) min(10vmax, 220px) 0;\n}\n\n.kg-swapped .kg-signup-card-text {\n  grid-row: 1;\n}\n\n.kg-signup-card-text.kg-align-center {\n  align-items: center;\n  text-align: center;\n}\n\n.kg-signup-card.kg-style-image h2.kg-signup-card-heading,\n.kg-signup-card.kg-style-image .kg-signup-card-subheading,\n.kg-signup-card.kg-style-image .kg-signup-card-button {\n  z-index: 999;\n}\n\n/* Background image */\n\n.kg-signup-card > picture > .kg-signup-card-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  background-color: #ffffff;\n  pointer-events: none;\n}\n\n/* Split layout image */\n\n.kg-signup-card-content .kg-signup-card-image {\n  width: 100%;\n  /* this will force the image to follow the signup card height */\n  height: 0;\n  min-height: 100%;\n  /**/\n  object-fit: cover;\n  object-position: center;\n}\n\n.kg-content-wide .kg-signup-card-content .kg-signup-card-image {\n  height: 100%;\n  padding: 5.6em 0;\n  object-fit: contain;\n}\n\n/* Heading */\n\n.kg-signup-card h2.kg-signup-card-heading {\n  margin: 0;\n  font-size: clamp(1.7em, 4vw, 2.5em);\n  font-weight: 700;\n  line-height: 1.05em;\n  letter-spacing: -0.01em;\n}\n\n.kg-signup-card.kg-width-wide h2.kg-signup-card-heading {\n  font-size: clamp(1.7em, 5vw, 3.3em);\n}\n\n.kg-signup-card.kg-width-full h2.kg-signup-card-heading {\n  font-size: clamp(1.9em, 5.6vw, 4.2em);\n}\n\n.kg-signup-card.kg-width-full.kg-layout-split h2.kg-signup-card-heading {\n  font-size: clamp(1.9em, 4vw, 3.3em);\n}\n\n/* Subheading */\n\n.kg-signup-card-subheading {\n  margin: 0 0 2em;\n}\n\n.kg-signup-card .kg-signup-card-subheading {\n  max-width: 40em;\n  margin: 0;\n  font-size: clamp(1.05em, 2vw, 1.4em);\n  font-weight: 500;\n  line-height: 1.2em;\n}\n\n.kg-signup-card h2 + .kg-signup-card-subheading {\n  margin: 0.6em 0 0;\n}\n\n.kg-signup-card .kg-signup-card-subheading strong {\n  font-weight: 600;\n}\n\n.kg-signup-card.kg-width-wide .kg-signup-card-subheading {\n  font-size: clamp(1.05em, 2vw, 1.55em);\n}\n\n.kg-signup-card.kg-width-full\n  .kg-signup-card-subheading:not(.kg-layout-split .kg-signup-card-subheading) {\n  max-width: min(65vmax, 1200px);\n  font-size: clamp(1.05em, 2vw, 1.7em);\n}\n\n.kg-signup-card.kg-width-full.kg-layout-split .kg-signup-card-subheading {\n  font-size: clamp(1.05em, 2vw, 1.55em);\n}\n\n/* Subscribe form */\n\n.kg-signup-card-form {\n  position: relative;\n  display: flex;\n  flex-shrink: 0;\n  width: 100%;\n}\n\n.kg-align-center .kg-signup-card-form {\n  justify-content: center;\n}\n\n.kg-signup-card-heading + .kg-signup-card-form,\n.kg-signup-card-subheading + .kg-signup-card-form {\n  margin: min(2.4vmax, 48px) 0 0;\n}\n\n.kg-width-wide .kg-signup-card-heading + .kg-signup-card-form,\n.kg-width-wide .kg-signup-card-subheading + .kg-signup-card-form {\n  margin: min(3.2vmax, 64px) 0 0;\n}\n\n.kg-width-full .kg-signup-card-heading + .kg-signup-card-form,\n.kg-width-full .kg-signup-card-subheading + .kg-signup-card-form {\n  margin: min(4vmax, 80px) 0 0;\n}\n\n.kg-signup-card-fields {\n  display: flex;\n  width: 100%;\n  padding: 3px;\n  background: #ffffff;\n  border: 1px solid #e6e6e6;\n  border-radius: 4px;\n}\n\n.kg-width-wide .kg-signup-card-fields,\n.kg-width-full .kg-signup-card-fields {\n  width: 100%;\n  max-width: 500px;\n}\n\n.kg-signup-card-input {\n  width: 100%;\n  height: 2.9em;\n  min-height: 46px;\n  margin: 0 3px 0 0;\n  padding: 12px 16px;\n  border: none;\n  background: #ffffff;\n  font-size: 1.1em;\n}\n\n.kg-signup-card-input:focus,\n.kg-signup-card-input:focus-visible {\n  outline: none;\n}\n\n.kg-signup-card-button {\n  display: flex;\n  position: relative;\n  align-items: center;\n  height: 2.9em;\n  min-height: 46px;\n  height: 100%;\n  padding: 0 1.2em;\n  outline: none;\n  border: none;\n  font-size: 1em;\n  font-weight: 600;\n  line-height: 1em;\n  text-align: center;\n  text-decoration: none;\n  letter-spacing: 0.2px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  border-radius: 3px;\n  transition: opacity 0.2s ease;\n  cursor: pointer;\n}\n\n.kg-signup-card-button.kg-style-accent {\n  background-color: var(--ghost-accent-color);\n}\n\n.kg-signup-card h2 + .kg-signup-card-button,\n.kg-signup-card p + .kg-signup-card-button {\n  margin: 1.5em 0 0;\n}\n\n.kg-signup-card .kg-signup-card-button:hover {\n  opacity: 0.85;\n}\n\n.kg-signup-card.kg-width-wide .kg-signup-card-button {\n  font-size: 1.05em;\n}\n\n.kg-signup-card.kg-width-wide h2 + .kg-signup-card-button,\n.kg-signup-card.kg-width-wide p + .kg-signup-card-button {\n  margin-top: 1.75em;\n}\n\n.kg-signup-card.kg-width-full .kg-signup-card-button {\n  font-size: 1.1em;\n}\n\n.kg-signup-card.kg-width-full h2 + .kg-signup-card-button,\n.kg-signup-card.kg-width-full p + .kg-signup-card-button {\n  margin-top: 2em;\n}\n\n/* Subscribe form states */\n\n.kg-signup-card-success,\n.kg-signup-card-error {\n  display: none;\n}\n\n.kg-signup-card-form.success .kg-signup-card-fields {\n  display: none;\n}\n\n.kg-signup-card-form.success .kg-signup-card-success {\n  display: flex;\n  align-items: center;\n  height: 3em;\n  font-size: 1.25em;\n  font-weight: 500;\n  line-height: 1.4em;\n}\n\n.kg-signup-card-form.error .kg-signup-card-fields {\n  border: 1px solid #ff0000;\n  box-shadow: inset 0 0 0 1px rgba(255, 0, 0, 0.2);\n}\n\n.kg-signup-card-form.error .kg-signup-card-error {\n  position: absolute;\n  bottom: calc(-1rem - 1.6em);\n  display: block;\n  font-size: inherit;\n}\n\n.kg-signup-card-button-loading {\n  position: absolute;\n  inset: 0;\n  align-items: center;\n  justify-content: center;\n  display: none;\n}\n\n.kg-signup-card-form.loading .kg-signup-card-button-default {\n  color: transparent;\n}\n\n.kg-signup-card-form.loading .kg-signup-card-button-loading {\n  display: flex;\n}\n\n/* Disclaimer */\n\n.kg-signup-card-disclaimer {\n  margin: 1rem 0 0;\n}\n\n.kg-signup-card-form.success + .kg-signup-card-disclaimer,\n.kg-signup-card-form.error + .kg-signup-card-disclaimer {\n  visibility: hidden;\n}\n\n/* Responsive styles */\n\n@media (max-width: 640px) {\n  .kg-layout-split .kg-signup-card-content {\n    grid-template-columns: 1fr;\n  }\n\n  .kg-width-wide .kg-signup-card-text {\n    padding: min(6.4vmax, 120px) min(4vmax, 80px);\n  }\n\n  .kg-layout-split.kg-content-wide .kg-signup-card-text,\n  .kg-layout-split.kg-content-wide.kg-swapped .kg-signup-card-text {\n    padding: min(9.6vmax, 180px) 0;\n  }\n\n  .kg-signup-card.kg-width-full\n    .kg-signup-card-subheading:not(.kg-layout-split .kg-signup-card-subheading) {\n    max-width: unset;\n  }\n\n  .kg-signup-card-content\n    .kg-signup-card-image:not(.kg-content-wide .kg-signup-card-content .kg-signup-card-image) {\n    height: auto;\n    min-height: unset;\n    aspect-ratio: 1 / 1;\n  }\n\n  .kg-content-wide .kg-signup-card-content .kg-signup-card-image {\n    padding: 1.7em 0 0;\n  }\n\n  .kg-content-wide.kg-swapped .kg-signup-card-content .kg-signup-card-image {\n    padding: 0 0 1.7em;\n  }\n\n  .kg-signup-card-input {\n    height: 2.9em;\n    padding: 6px 12px;\n    font-size: 1em;\n  }\n\n  .kg-signup-card-button {\n    height: 2.9em;\n  }\n\n  .kg-signup-card.kg-width-wide .kg-signup-card-button,\n  .kg-signup-card.kg-width-full .kg-signup-card-button {\n    font-size: 1em;\n  }\n}\n", st = /* @__PURE__ */ e({ default: () => ct }), ct = ".kg-toggle-card,\n.kg-toggle-card * {\n  box-sizing: border-box;\n}\n\n.kg-toggle-card {\n  background: transparent;\n  box-shadow: inset 0 0 0 1px rgba(124, 139, 154, 0.25);\n  border-radius: 4px;\n  padding: 1.2em;\n}\n\n.kg-toggle-card[data-kg-toggle-state='close'] .kg-toggle-content {\n  height: 0;\n  overflow: hidden;\n  transition:\n    opacity 0.5s ease,\n    top 0.35s ease;\n  opacity: 0;\n  top: -0.5em;\n  position: relative;\n}\n\n.kg-toggle-content {\n  height: auto;\n  opacity: 1;\n  transition:\n    opacity 1s ease,\n    top 0.35s ease;\n  top: 0;\n  position: relative;\n}\n\n.kg-toggle-card[data-kg-toggle-state='close'] svg {\n  transform: unset;\n}\n\n.kg-toggle-heading {\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.kg-toggle-card h4.kg-toggle-heading-text {\n  font-size: 1.15em;\n  font-weight: 700;\n  line-height: 1.3em;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.kg-toggle-content p:first-of-type {\n  margin-top: 0.5em;\n}\n\n.kg-toggle-card .kg-toggle-content p,\n.kg-toggle-card .kg-toggle-content ol,\n.kg-toggle-card .kg-toggle-content ul {\n  font-size: 0.95em;\n  line-height: 1.5em;\n  margin-top: 0.95em;\n  margin-bottom: 0;\n}\n\n.kg-toggle-card li + li {\n  margin-top: 0.5em;\n}\n\n.kg-toggle-card-icon {\n  height: 24px;\n  width: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 1em;\n  padding: 0;\n  background: none;\n  border: 0;\n  cursor: pointer;\n}\n\n.kg-toggle-heading svg {\n  width: 14px;\n  color: rgba(124, 139, 154, 0.5);\n  transition: all 0.3s;\n  transform: rotate(-180deg);\n}\n\n.kg-toggle-heading path {\n  fill: none;\n  stroke: currentcolor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.5;\n  fill-rule: evenodd;\n}\n\n.kg-toggle-card + .kg-toggle-card {\n  margin-top: 1em;\n}\n", lt = /* @__PURE__ */ e({ default: () => ut }), ut = ".kg-transistor-card {\n  display: flex;\n  justify-content: center;\n}\n\n.kg-transistor-placeholder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2.4rem;\n  width: 100%;\n  max-width: 100%;\n  padding: 3rem 2.4rem;\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border: 1px solid color-mix(in srgb, currentColor 14%, transparent);\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.04);\n  background: color-mix(in srgb, currentColor 4%, transparent);\n  color: inherit;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n.kg-transistor-icon {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n  width: 116px;\n  height: 116px;\n  border-radius: 14px;\n  background: var(--ghost-accent-color, #b8a5ac);\n  color: #fff;\n}\n\n.kg-transistor-icon svg {\n  display: block;\n  width: 56px;\n  height: 56px;\n}\n\n.kg-transistor-content {\n  min-width: 0;\n  max-width: 640px;\n}\n\n.kg-transistor-title {\n  margin: 0;\n  color: inherit;\n  font-size: 2.3rem;\n  font-weight: 600;\n  line-height: 1.2;\n}\n\n.kg-transistor-description {\n  margin-top: 1.6rem;\n  color: inherit;\n  font-size: 1.6rem;\n  line-height: 1.5;\n  opacity: 0.65;\n}\n\n@media (max-width: 640px) {\n  .kg-transistor-placeholder {\n    gap: 1.6rem;\n    padding: 2.4rem 1.8rem;\n  }\n\n  .kg-transistor-icon {\n    width: 88px;\n    height: 88px;\n    border-radius: 12px;\n  }\n\n  .kg-transistor-icon svg {\n    width: 44px;\n    height: 44px;\n  }\n\n  .kg-transistor-title {\n    font-size: 1.8rem;\n  }\n\n  .kg-transistor-description {\n    margin-top: 1rem;\n    font-size: 1.45rem;\n  }\n}\n", dt = /* @__PURE__ */ e({ default: () => ft }), ft = ".kg-video-card,\n.kg-video-card * {\n  box-sizing: border-box;\n}\n\n.kg-video-card {\n  position: relative;\n  --seek-before-width: 0%;\n  --volume-before-width: 100%;\n  --buffered-width: 0%;\n}\n\n.kg-video-card video {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\n.kg-video-container {\n  position: relative;\n  height: 0;\n  width: 100%;\n  overflow: hidden;\n}\n\n.kg-video-container video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.kg-video-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-image: linear-gradient(\n    180deg,\n    rgba(0, 0, 0, 0.3) 0,\n    transparent 70%,\n    transparent 100%\n  );\n  z-index: 999;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.kg-video-large-play-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 72px;\n  height: 72px;\n  padding: 0;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 50%;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.kg-video-large-play-icon svg {\n  width: 20px;\n  height: auto;\n  margin-left: 2px;\n  fill: #fff;\n}\n\n.kg-video-player-container {\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 80px;\n  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));\n  z-index: 999;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.kg-video-player {\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  z-index: 9999;\n  padding: 12px 16px;\n  font-family:\n    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',\n    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.kg-video-current-time {\n  min-width: 38px;\n  padding: 0 4px;\n  color: #fff;\n  font-family: inherit;\n  font-size: 12.5px;\n  font-weight: 500;\n  line-height: 1.4em;\n  white-space: nowrap;\n}\n\n.kg-video-time {\n  color: rgba(255, 255, 255, 0.6);\n  font-family: inherit;\n  font-size: 12.5px;\n  font-weight: 500;\n  line-height: 1.4em;\n  white-space: nowrap;\n}\n\n.kg-video-duration {\n  padding: 0 4px;\n}\n\n.kg-video-play-icon,\n.kg-video-pause-icon {\n  position: relative;\n  padding: 0px 4px 0 0;\n  font-size: 0;\n  background: transparent;\n}\n\n.kg-video-hide {\n  display: none !important;\n}\n\n.kg-video-hide-animated {\n  opacity: 0 !important;\n  transition: opacity 0.2s ease-in-out;\n  cursor: initial;\n}\n\n.kg-video-play-icon svg,\n.kg-video-pause-icon svg {\n  width: 14px;\n  height: 14px;\n  fill: #fff;\n}\n\n.kg-video-seek-slider {\n  flex-grow: 1;\n  margin: 0 4px;\n}\n\n@media (max-width: 520px) {\n  .kg-video-seek-slider {\n    display: none;\n  }\n}\n\n.kg-video-playback-rate {\n  min-width: 37px;\n  padding: 0 4px;\n  color: #fff;\n  font-family: inherit;\n  font-size: 12.5px;\n  font-weight: 600;\n  line-height: 1.4em;\n  text-align: left;\n  background: transparent;\n  white-space: nowrap;\n}\n\n@media (max-width: 520px) {\n  .kg-video-playback-rate {\n    padding-left: 8px;\n  }\n}\n\n.kg-video-mute-icon,\n.kg-video-unmute-icon {\n  position: relative;\n  bottom: -1px;\n  padding: 0 4px;\n  font-size: 0;\n  background: transparent;\n}\n\n@media (max-width: 520px) {\n  .kg-video-mute-icon,\n  .kg-video-unmute-icon {\n    margin-left: auto;\n  }\n}\n\n.kg-video-mute-icon svg,\n.kg-video-unmute-icon svg {\n  width: 16px;\n  height: 16px;\n  fill: #fff;\n}\n\n.kg-video-volume-slider {\n  width: 80px;\n}\n\n@media (max-width: 300px) {\n  .kg-video-volume-slider {\n    display: none;\n  }\n}\n\n.kg-video-seek-slider::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  width: var(--seek-before-width) !important;\n  height: 4px;\n  cursor: pointer;\n  background-color: #ebeef0;\n  border-radius: 2px;\n}\n\n.kg-video-volume-slider::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  width: var(--volume-before-width) !important;\n  height: 4px;\n  cursor: pointer;\n  background-color: #ebeef0;\n  border-radius: 2px;\n}\n\n/* Resetting browser styles\n/* --------------------------------------------------------------- */\n\n.kg-video-card input[type='range'] {\n  position: relative;\n  -webkit-appearance: none;\n  background: transparent;\n}\n\n.kg-video-card input[type='range']:focus {\n  outline: none;\n}\n\n.kg-video-card input[type='range']::-webkit-slider-thumb {\n  -webkit-appearance: none;\n}\n\n.kg-video-card input[type='range']::-ms-track {\n  cursor: pointer;\n  border-color: transparent;\n  color: transparent;\n  background: transparent;\n}\n\n.kg-video-card button {\n  display: flex;\n  align-items: center;\n  border: 0;\n  cursor: pointer;\n}\n\n.kg-video-card input[type='range'] {\n  height: auto;\n  padding: 0;\n  border: 0;\n}\n\n/* Chrome & Safari styles\n/* --------------------------------------------------------------- */\n\n.kg-video-card input[type='range']::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 4px;\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 2px;\n}\n\n.kg-video-card input[type='range']::-webkit-slider-thumb {\n  position: relative;\n  box-sizing: content-box;\n  width: 13px;\n  height: 13px;\n  margin: -5px 0 0 0;\n  border: 0;\n  cursor: pointer;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow:\n    0 0 0 1px rgba(0, 0, 0, 0.08),\n    0 1px 4px rgba(0, 0, 0, 0.24);\n}\n\n.kg-video-card input[type='range']:active::-webkit-slider-thumb {\n  transform: scale(1.2);\n}\n\n/* Firefox styles\n/* --------------------------------------------------------------- */\n\n.kg-video-card input[type='range']::-moz-range-track {\n  width: 100%;\n  height: 4px;\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 2px;\n}\n\n.kg-video-card input[type='range']::-moz-range-progress {\n  background: #ebeef0;\n  border-radius: 2px;\n}\n\n.kg-video-card input[type='range']::-moz-range-thumb {\n  box-sizing: content-box;\n  width: 13px;\n  height: 13px;\n  border: 0;\n  cursor: pointer;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow:\n    0 0 0 1px rgba(0, 0, 0, 0.08),\n    0 1px 4px rgba(0, 0, 0, 0.24);\n}\n\n.kg-video-card input[type='range']:active::-moz-range-thumb {\n  transform: scale(1.2);\n}\n\n/* Edge & IE styles\n/* --------------------------------------------------------------- */\n\n.kg-video-card input[type='range']::-ms-track {\n  width: 100%;\n  height: 3px;\n  border: solid transparent;\n  color: transparent;\n  cursor: pointer;\n  background: transparent;\n}\n\n.kg-video-card input[type='range']::-ms-fill-lower {\n  background: #fff;\n}\n\n.kg-video-card input[type='range']::-ms-fill-upper {\n  background: #ebeef0;\n}\n\n.kg-video-card input[type='range']::-ms-thumb {\n  box-sizing: content-box;\n  width: 13px;\n  height: 13px;\n  border: 0;\n  cursor: pointer;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow:\n    0 0 0 1px rgba(0, 0, 0, 0.08),\n    0 1px 4px rgba(0, 0, 0, 0.24);\n}\n\n.kg-video-card input[type='range']:active::-ms-thumb {\n  transform: scale(1.2);\n}\n", pt = /* #__PURE__ */ Object.assign({
	"../../ghost/core/core/frontend/src/cards/js/audio.js": Ae,
	"../../ghost/core/core/frontend/src/cards/js/gallery.js": Me,
	"../../ghost/core/core/frontend/src/cards/js/toggle.js": Pe,
	"../../ghost/core/core/frontend/src/cards/js/video.js": Ie
}), mt = /* #__PURE__ */ Object.assign({
	"../../ghost/core/core/frontend/src/cards/css/audio.css": Re,
	"../../ghost/core/core/frontend/src/cards/css/blockquote.css": Be,
	"../../ghost/core/core/frontend/src/cards/css/bookmark.css": Ve,
	"../../ghost/core/core/frontend/src/cards/css/button.css": J,
	"../../ghost/core/core/frontend/src/cards/css/callout.css": We,
	"../../ghost/core/core/frontend/src/cards/css/collection.css": Ge,
	"../../ghost/core/core/frontend/src/cards/css/cta.css": qe,
	"../../ghost/core/core/frontend/src/cards/css/file.css": Je,
	"../../ghost/core/core/frontend/src/cards/css/gallery.css": Xe,
	"../../ghost/core/core/frontend/src/cards/css/header.css": Ze,
	"../../ghost/core/core/frontend/src/cards/css/header_v2.css": $e,
	"../../ghost/core/core/frontend/src/cards/css/nft.css": tt,
	"../../ghost/core/core/frontend/src/cards/css/product.css": rt,
	"../../ghost/core/core/frontend/src/cards/css/signup.css": at,
	"../../ghost/core/core/frontend/src/cards/css/toggle.css": st,
	"../../ghost/core/core/frontend/src/cards/css/transistor.css": lt,
	"../../ghost/core/core/frontend/src/cards/css/video.css": dt
}), ht = Object.values(pt).map((e) => e.default).join("\n\n"), gt = Object.values(mt).map((e) => e.default).join("\n\n");
//#endregion
//#region src/views/inbox/components/reader.tsx
i();
var Q = "gh-sensitive-media-hidden", _t = "audio, canvas, embed, iframe, img, object, picture, source, svg, video", vt = ({ postUrl: e, heading: r, image: i, excerpt: c, authors: l, html: u, hideMedia: d = !1, backgroundColor: f, fontSize: p, fontStyle: m, onHeadingsExtracted: ee, onIframeLoad: h, onLoadingChange: g, isPopoverOpen: _ }) => {
	let v = s(null), [y, b] = n(!0), [x, te] = n("0px"), S = s(null), C = document.documentElement.classList.contains("dark") && f === "SYSTEM" || f === "DARK", w = ke(), T = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(hover: none) and (pointer: coarse)").matches, E = t(() => he(M(T ? F(u) : u)), [u, T]), D = a(() => {
		let e = v.current, t = e?.contentDocument;
		if (!t) return;
		let n = t.documentElement;
		if (n.classList.contains(Q) === d) return;
		n.classList.toggle(Q, d);
		let r = e.contentWindow;
		r && typeof r.resizeIframe == "function" && r.resizeIframe();
	}, [d]), O = `
        <html class="${d ? `${Q} ` : ""}has-${C ? "light" : "dark"}-text has-${m}-body ${f === "SEPIA" && "has-sepia-bg"}">
        <head>
            ${w}
            <style>
                :root {
                    --font-size: ${p};
                }
                body {
                    margin: 0;
                    padding: 0;
                    overflow-y: hidden;
                }
                .has-sepia-bg {
                    --background-color: #FCF8F1;
                }
                .${Q} .gh-article-image,
                .${Q} .gh-content :is(${_t}) {
                    display: none !important;
                }
            </style>
            <style>
                ${gt}
            </style>

            <script>
                function resizeIframe() {
                    const height = document.body.scrollHeight;
                    window.parent.postMessage({
                        type: 'resize',
                        bodyHeight: height,
                        isLoaded: true
                    }, '*');
                }

                // Initialize resize observers
                function setupResizeObservers() {
                    // ResizeObserver for overall size changes
                    const resizeObserver = new ResizeObserver(() => {
                        resizeIframe();
                    });
                    resizeObserver.observe(document.body);

                    // MutationObserver for DOM changes
                    const mutationObserver = new MutationObserver(() => {
                        resizeIframe();
                    });
                    mutationObserver.observe(document.body, {
                        childList: true,
                        subtree: true,
                        attributes: true
                    });

                    // Handle window resize
                    window.addEventListener('resize', resizeIframe);

                    // Initial resize
                    resizeIframe();

                    // Clean up function
                    return () => {
                        resizeObserver.disconnect();
                        mutationObserver.disconnect();
                        window.removeEventListener('resize', resizeIframe);
                    };
                }

                // Wait for images to load
                function waitForImages() {
                    const images = document.getElementsByTagName('img');
                    Promise.all(Array.from(images).map(img => {
                        if (img.complete) return Promise.resolve();
                        return new Promise(resolve => {
                            img.onload = resolve;
                            img.onerror = resolve;
                        });
                    })).then(resizeIframe);
                }

                // Handle external resize triggers
                window.addEventListener('message', (event) => {
                    if (event.data.type === 'triggerResize') {
                        resizeIframe();
                    }
                });

                // Initialize everything once DOM is ready
                document.addEventListener('DOMContentLoaded', () => {
                    setupResizeObservers();
                    waitForImages();
                });
            <\/script>

            <!-- Reframe.js — a plugin that makes iframes and videos responsive -->
            <script>!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).reframe=t()}(this,function(){"use strict";function t(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var i=Array(e),o=0,t=0;t<n;t++)for(var r=arguments[t],f=0,d=r.length;f<d;f++,o++)i[o]=r[f];return i}return function(e,s){return void 0===s&&(s="js-reframe"),("string"==typeof e?t(document.querySelectorAll(e)):"length"in e?t(e):[e]).forEach(function(e){var t,n,i,o,r,f,d,l;-1!==e.className.split(" ").indexOf(s)||-1<e.style.width.indexOf("%")||(i=e.getAttribute("height")||e.offsetHeight,o=e.getAttribute("width")||e.offsetWidth,r=("string"==typeof i?parseInt(i):i)/("string"==typeof o?parseInt(o):o)*100,(f=document.createElement("div")).className=s,(d=f.style).position="relative",d.width="100%",d.paddingTop=r+"%",(l=e.style).position="absolute",l.width="100%",l.height="100%",l.left="0",l.top="0",null!==(t=e.parentNode)&&void 0!==t&&t.insertBefore(f,e),null!==(n=e.parentNode)&&void 0!==n&&n.removeChild(e),f.appendChild(e))})}});<\/script>
        </head>
        <body>
            <header class='gh-article-header gh-canvas'>
                <h1 class='gh-article-title is-title' data-test-article-heading>${N(r)}</h1>
                ${c ? `<p class='gh-article-excerpt'>${N(c)}</p>` : ""}
                <a href="${e && P(e) ? N(e) : "#"}" target="_blank" rel="noopener noreferrer" class="gh-article-meta">
                    ${l && l.length > 0 ? `
                        <div class="gh-article-author-image">
                        ${l.map((e) => `
                                <span>
                                    ${e.profile_image ? `<img src="${N(e.profile_image)}" alt="${N(e.name)}">` : "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" height=\"24\" width=\"24\"><path d=\"M6.75 6a5.25 5.25 0 1 0 10.5 0 5.25 5.25 0 1 0 -10.5 0\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"></path><path d=\"M2.25 23.25a9.75 9.75 0 0 1 19.5 0\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"></path></svg>"}
                                </span>
                            `).join("")}
                        </div>
                    ` : ""}
                    <div class="gh-article-meta-wrapper">
                        ${l && l.length > 0 ? `
                            <span class="gh-article-author-name">
                                ${l.length > 1 ? `${N(l[0].name)} and ${l.length - 1} ${l.length - 1 == 1 ? "other" : "others"}` : N(l[0].name)}
                            </span>
                        ` : ""}
                        <span class="gh-article-source">${e && P(e) ? N(new URL(e).hostname) : ""} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg></span>
                    </div>
                </a>
                ${i ? `
                <figure class='gh-article-image'>
                    <img src='${N(i)}' alt='${N(r)}' />
                </figure>
                ` : ""}
            </header>
            <div class='gh-content gh-canvas is-body'>
                ${E}
            </div>
            <script>
                (function () {
                    const sources = [
                        '.gh-content iframe[src*="youtube.com"]',
                        '.gh-content iframe[src*="youtube-nocookie.com"]',
                        '.gh-content iframe[src*="player.vimeo.com"]',
                        '.gh-content iframe[src*="kickstarter.com"][src*="video.html"]',
                        '.gh-content object',
                        '.gh-content embed',
                    ];
                    reframe(document.querySelectorAll(sources.join(',')));
                })();
            <\/script>
            <script>
                ${ht}
            <\/script>
        </body>
        </html>
    `;
	return o(() => {
		let t = v.current;
		if (!t) return;
		let n = (e) => {
			if (e.data.type === "resize") {
				let n = `${e.data.bodyHeight + 24}px`;
				te(n), t.style.height = n, e.data.isLoaded && b(!1);
			}
		}, a = (e) => {
			if (e.key === "Escape") {
				e.preventDefault(), e.stopPropagation();
				let t = new KeyboardEvent("keydown", {
					key: "Escape",
					code: "Escape",
					keyCode: 27,
					which: 27,
					bubbles: !0,
					cancelable: !0
				});
				document.dispatchEvent(t);
			}
		}, o = () => {
			let e = t.contentWindow;
			e && e.addEventListener("keydown", a), D();
		};
		t.addEventListener("load", o), window.addEventListener("message", n);
		let s = [
			E,
			r,
			c ?? "",
			i ?? "",
			e ?? "",
			(l ?? []).map((e) => `${e.name}\0${e.profile_image}`).join("\n")
		].join("\n");
		return S.current !== s && (S.current = s, b(!0), t.srcdoc = O), () => {
			window.removeEventListener("message", n), t.removeEventListener("load", o);
			let e = t.contentWindow;
			e && e.removeEventListener("keydown", a);
		};
	}, [
		E,
		l,
		c,
		r,
		O,
		i,
		e,
		D
	]), o(() => {
		D();
	}, [D]), o(() => {
		let e = v.current;
		if (!e) return;
		let t = e.contentDocument || e.contentWindow?.document;
		if (!t) return;
		let n = t.documentElement;
		n.style.setProperty("--font-size", p), n.classList.remove("has-sans-body", "has-serif-body"), n.classList.add(`has-${m}-body`), n.classList.remove("has-dark-text", "has-light-text"), n.classList.add(`has-${C ? "light" : "dark"}-text`), f === "SEPIA" ? n.classList.add("has-sepia-bg") : n.classList.remove("has-sepia-bg");
		let r = e.contentWindow;
		if (r && typeof r.resizeIframe == "function") r.resizeIframe();
		else {
			let e = new Event("resize");
			t.dispatchEvent(e);
		}
	}, [
		p,
		m,
		f,
		C
	]), o(() => {
		let e = v.current;
		if (!e) return;
		let t = () => {
			if (!e.contentDocument) return;
			let t = Array.from(e.contentDocument.querySelectorAll(".gh-content > :is(h2, h3, h4, h5, h6)[id]"));
			if (t.length === 0) return;
			let n = Math.min(...t.map((e) => parseInt(e.tagName[1]))), r = t.map((e, t) => {
				let r = `heading-${t}`;
				e.id = r;
				let i = parseInt(e.tagName[1]) - n + 1;
				return {
					id: r,
					text: e.textContent || "",
					level: i,
					element: e
				};
			});
			ee?.(r), h?.(e);
		};
		return e.addEventListener("load", t), () => e.removeEventListener("load", t);
	}, [ee, h]), o(() => {
		g?.(y);
	}, [y, g]), /* @__PURE__ */ (0, B.jsx)("div", {
		className: "w-full pb-6",
		children: /* @__PURE__ */ (0, B.jsxs)("div", {
			className: "relative -mx-6",
			children: [y && /* @__PURE__ */ (0, B.jsxs)("div", {
				className: "mx-auto mt-6 w-full max-w-[640px] max-lg:px-4",
				children: [
					/* @__PURE__ */ (0, B.jsxs)("div", {
						className: "mb-6 flex flex-col gap-2",
						children: [/* @__PURE__ */ (0, B.jsx)(I, { className: "h-8" }), /* @__PURE__ */ (0, B.jsx)(I, { className: "h-8 w-full max-w-md" })]
					}),
					/* @__PURE__ */ (0, B.jsx)(I, {
						className: "mt-2 h-4",
						count: 4,
						randomize: !0
					}),
					/* @__PURE__ */ (0, B.jsx)(I, { className: "mt-8 h-[400px]" }),
					/* @__PURE__ */ (0, B.jsx)(I, {
						className: "mt-2 h-4",
						containerClassName: "block mt-7 mb-4",
						count: 8,
						randomize: !0
					})
				]
			}), /* @__PURE__ */ (0, B.jsx)("iframe", {
				ref: v,
				id: "gh-ap-article-iframe",
				style: {
					width: "100%",
					border: "none",
					height: x,
					overflow: "hidden",
					opacity: +!y,
					transition: "opacity 0.2s ease-in-out",
					pointerEvents: _ ? "none" : "auto"
				},
				title: "Embedded Content"
			})]
		})
	});
}, yt = () => /* @__PURE__ */ (0, B.jsx)("div", { className: "h-px bg-black/[8%] dark:bg-gray-950" });
function bt(e) {
	return new DOMParser().parseFromString(e, "text/html").querySelector(_t) !== null;
}
var $ = /* @__PURE__ */ new Map(), xt = ({ postId: e = null, onClose: i }) => {
	let { backgroundColor: c, currentFontSizeIndex: l, fontStyle: u, fontSize: d, handleColorChange: f, setFontStyle: p, increaseFontSize: m, decreaseFontSize: h, resetFontSize: _ } = Ce(), v = s(null), [y, b] = n(!1), [C, w] = n(!1), [ne, re] = n(/* @__PURE__ */ new Set()), [ie, oe] = n(/* @__PURE__ */ new Set()), [se, le] = n(/* @__PURE__ */ new Set()), [A, he] = n(!1), j = s(null), M = s(null), { post: N, processedReplies: P, isLoading: F, loadMoreChildren: L, loadMoreChildReplies: Se, hasMoreChildren: R, hasMoreChildReplies: z } = xe(e ?? "", { includeAncestors: !1 }), V = N, H = V?.object, U = V?.actor, W = V?.object?.metadata?.ghostAuthors, Te = H?.replyCount ?? 0, K = H?.content ?? "", De = typeof H?.image == "string" ? H.image : H?.image?.url, Oe = t(() => bt(K), [K]), { contentWarning: ke, shouldHideContentWarning: Ae, shouldHideSensitiveMedia: je, canHideSensitiveMedia: Me, revealSensitiveMedia: Ne, hideSensitiveMedia: Pe, revealContentWarning: Fe } = pe({
		contentWarning: H?.contentWarning,
		sensitive: H?.sensitive,
		hasMedia: !!De || (H ? me(H) !== null : !1) || Oe,
		resetKey: e ?? void 0
	});
	o(() => {
		if (!R) return;
		j.current && j.current.disconnect();
		let e = v.current;
		if (e) return j.current = new IntersectionObserver(async (e) => {
			if (e[0].isIntersecting && R && !A) {
				he(!0);
				try {
					await L();
				} catch (e) {
					console.error("Failed to load more top-level replies:", e);
				} finally {
					he(!1);
				}
			}
		}, {
			root: e,
			rootMargin: "200px"
		}), M.current && j.current.observe(M.current), () => {
			j.current && j.current.disconnect();
		};
	}, [
		R,
		A,
		L
	]);
	function Ie() {}
	function Le(e) {
		re((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : (n.add(e), oe((t) => {
				let n = new Set(t);
				return n.add(e), n;
			})), n;
		});
	}
	async function Re(e, t) {
		if (!se.has(e)) {
			le((t) => new Set(t).add(e));
			try {
				Se && await Se(t);
			} catch (e) {
				console.error("Failed to load more replies for chain:", e);
			} finally {
				le((t) => {
					let n = new Set(t);
					return n.delete(e), n;
				});
			}
		}
	}
	let ze = () => {}, Be = s(null), q = "640px", [Ve, He] = n(0), [J, Ue] = n(!0), [We] = ue(He, 100);
	o(() => {
		let e = v.current, t = document.getElementById("object-content"), n = () => {
			if (J || !e || !t) return;
			let n = t.getBoundingClientRect(), r = e.getBoundingClientRect();
			if (n.height <= r.height) {
				We(100);
				return;
			}
			let i = Math.max(0, r.top - n.top), a = t.offsetHeight - e.offsetHeight, o = Math.min(Math.max(i / a * 100, 0), 100), s = Math.round(o / 1) * 1;
			We(s);
		};
		if (J) return;
		let r = new MutationObserver(n);
		return t && r.observe(t, {
			childList: !0,
			subtree: !0,
			characterData: !0
		}), e?.addEventListener("scroll", n), n(), () => {
			e?.removeEventListener("scroll", n), r.disconnect();
		};
	}, [J, We]);
	let [Y, Ge] = n([]), [Ke, qe] = n(null), [X, Je] = n(null), Ye = a((e) => {
		Ge(e);
	}, []), Xe = a((e) => {
		Je(e);
	}, []);
	o(() => {
		if (!X?.contentDocument || !Y.length) return;
		let e = setTimeout(() => {
			let e = v.current;
			if (!e) return;
			let t = () => {
				let t = X.contentDocument;
				if (!t || !t.documentElement) return;
				let n = e.scrollTop, r = Y.map((e) => t.getElementById(e.id)).filter((e) => e !== null).map((e) => ({
					element: e,
					id: e.id,
					top: e.offsetTop
				}));
				if (!r.length) return;
				let i = null;
				for (let e of r) if (e.top - 100 <= n) i = e;
				else break;
				qe(i?.id || null);
			};
			return e.addEventListener("scroll", t), t(), () => {
				e.removeEventListener("scroll", t);
			};
		}, 100);
		return () => clearTimeout(e);
	}, [
		X,
		Y,
		Ke
	]);
	let Z = ee();
	return o(() => {
		let t = v.current;
		return () => {
			t && e && $.set(e, t.scrollTop);
		};
	}, [e]), o(() => {
		if (!J && !F && e && v.current) {
			let t = $.get(e);
			t !== void 0 && t > 0 && setTimeout(() => {
				v.current && (v.current.scrollTop = t);
			}, 100);
		}
	}, [
		J,
		F,
		e
	]), F ? /* @__PURE__ */ (0, B.jsx)("div", {
		className: `max-h-full overflow-auto rounded-md ${c === "DARK" && "dark"} ${(c === "LIGHT" || c === "SEPIA") && "light"} ${G[c].background}`,
		children: /* @__PURE__ */ (0, B.jsx)("div", {
			className: "flex h-full flex-col",
			children: /* @__PURE__ */ (0, B.jsxs)("div", {
				className: "relative flex-1",
				children: [/* @__PURE__ */ (0, B.jsx)("div", {
					className: `sticky top-0 z-50 flex h-[102px] items-center justify-center rounded-t-md border-b max-md:h-[68px] ${G[c].background} ${G[c].border}`,
					children: /* @__PURE__ */ (0, B.jsxs)("div", {
						className: "grid w-full px-8 max-lg:px-4",
						style: { gridTemplateColumns: `1fr minmax(0,${q}) 1fr` },
						children: [
							/* @__PURE__ */ (0, B.jsx)("div", {
								className: "flex items-center",
								children: /* @__PURE__ */ (0, B.jsx)(E, {
									className: G[c].button,
									onClick: i
								})
							}),
							/* @__PURE__ */ (0, B.jsxs)("div", {
								className: "col-[2/3] mx-auto flex w-full items-center gap-3 max-md:hidden",
								children: [/* @__PURE__ */ (0, B.jsx)(I, { className: "size-10 rounded-full" }), /* @__PURE__ */ (0, B.jsxs)("div", {
									className: "grow pt-1",
									children: [/* @__PURE__ */ (0, B.jsx)(I, { className: "w-full" }), /* @__PURE__ */ (0, B.jsx)(I, { className: "w-2/3" })]
								})]
							}),
							/* @__PURE__ */ (0, B.jsx)("div", {
								className: "col-[3/4] flex items-center justify-end gap-2",
								children: /* @__PURE__ */ (0, B.jsx)(we, {
									backgroundColor: c,
									currentFontSizeIndex: l,
									fontStyle: u,
									onColorChange: f,
									onDecreaseFontSize: h,
									onFontStyleChange: p,
									onIncreaseFontSize: m,
									onOpenChange: b,
									onResetFontSize: _
								})
							})
						]
					})
				}), /* @__PURE__ */ (0, B.jsx)("div", {
					className: "relative flex-1 max-lg:px-4",
					children: /* @__PURE__ */ (0, B.jsxs)("div", {
						className: "mx-auto mt-11 w-full max-w-[640px]",
						children: [
							/* @__PURE__ */ (0, B.jsxs)("div", {
								className: "mb-6 flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, B.jsx)(I, { className: "h-8" }), /* @__PURE__ */ (0, B.jsx)(I, { className: "h-8 w-full max-w-md" })]
							}),
							/* @__PURE__ */ (0, B.jsx)(I, {
								className: "mt-2 h-4",
								count: 4,
								randomize: !0
							}),
							/* @__PURE__ */ (0, B.jsx)(I, { className: "mt-8 h-[400px]" }),
							/* @__PURE__ */ (0, B.jsx)(I, {
								className: "mt-2 h-4",
								containerClassName: "block mt-7 mb-4",
								count: 8,
								randomize: !0
							})
						]
					})
				})]
			})
		})
	}) : N ? /* @__PURE__ */ (0, B.jsx)("div", {
		ref: v,
		className: `max-h-full overflow-auto rounded-md ${c === "DARK" && "dark"} ${(c === "LIGHT" || c === "SEPIA") && "light"} ${G[c].background}`,
		"data-scrollable-container": !0,
		children: /* @__PURE__ */ (0, B.jsx)(B.Fragment, { children: /* @__PURE__ */ (0, B.jsxs)("div", {
			className: "flex h-full flex-col",
			children: [/* @__PURE__ */ (0, B.jsxs)("div", {
				className: "relative flex-1",
				children: [/* @__PURE__ */ (0, B.jsx)("div", {
					className: `sticky top-0 z-50 flex h-[102px] items-center justify-center rounded-t-md border-b max-md:h-[68px] ${G[c].background} ${G[c].border}`,
					children: /* @__PURE__ */ (0, B.jsxs)("div", {
						className: "grid w-full px-8 max-lg:px-4",
						style: { gridTemplateColumns: `1fr minmax(0,${q}) 1fr` },
						children: [
							/* @__PURE__ */ (0, B.jsx)("div", {
								className: "flex items-center",
								children: /* @__PURE__ */ (0, B.jsx)(E, {
									className: G[c].button,
									onClick: i
								})
							}),
							/* @__PURE__ */ (0, B.jsxs)("div", {
								className: "col-[2/3] mx-auto flex w-full items-center justify-between gap-3 max-md:hidden",
								children: [/* @__PURE__ */ (0, B.jsx)(S, {
									actor: U,
									isCurrentUser: H.authored,
									children: /* @__PURE__ */ (0, B.jsxs)("div", {
										className: "flex cursor-pointer items-center gap-3",
										children: [/* @__PURE__ */ (0, B.jsx)("div", {
											className: "relative z-10 pt-0.5",
											children: /* @__PURE__ */ (0, B.jsx)(ge, { author: U })
										}), /* @__PURE__ */ (0, B.jsxs)("div", {
											className: "relative z-10 mt-0.5 flex min-w-0 cursor-pointer flex-col overflow-visible text-[1.5rem]",
											onClick: (e) => x(U, Z, e),
											children: [/* @__PURE__ */ (0, B.jsx)("div", {
												className: "flex w-full",
												children: /* @__PURE__ */ (0, B.jsx)("span", {
													className: "min-w-0 truncate font-semibold whitespace-nowrap text-black hover:underline dark:text-white",
													children: F ? /* @__PURE__ */ (0, B.jsx)(I, { className: "w-20" }) : U.name
												})
											}), /* @__PURE__ */ (0, B.jsxs)("div", {
												className: "flex w-full",
												children: [!F && /* @__PURE__ */ (0, B.jsx)("span", {
													className: "truncate text-gray-700 after:mx-1 after:font-normal after:text-gray-700 after:content-[\"·\"]",
													children: _e(U)
												}), /* @__PURE__ */ (0, B.jsx)("span", {
													className: "text-gray-700",
													children: F ? /* @__PURE__ */ (0, B.jsx)(I, { className: "w-[120px]" }) : D(H, !H.authored)
												})]
											})]
										})]
									})
								}), !H.authored && !F && /* @__PURE__ */ (0, B.jsx)(te, {
									following: U.followedByMe ?? !1,
									handle: _e(U)
								})]
							}),
							/* @__PURE__ */ (0, B.jsx)("div", {
								className: "col-[3/4] flex items-center justify-end gap-2",
								children: /* @__PURE__ */ (0, B.jsx)(we, {
									backgroundColor: c,
									currentFontSizeIndex: l,
									fontStyle: u,
									onColorChange: f,
									onDecreaseFontSize: h,
									onFontStyleChange: p,
									onIncreaseFontSize: m,
									onOpenChange: b,
									onResetFontSize: _
								})
							})
						]
					})
				}), /* @__PURE__ */ (0, B.jsxs)("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ (0, B.jsx)(Ee, {
						iframeElement: X,
						modalRef: v,
						tocItems: Y,
						onOpenChange: w
					}), !F && /* @__PURE__ */ (0, B.jsx)("div", {
						className: "grow overflow-y-auto",
						children: /* @__PURE__ */ (0, B.jsxs)("div", {
							className: "mx-auto px-6 pt-5 pb-10",
							style: { maxWidth: "904px" },
							children: [
								/* @__PURE__ */ (0, B.jsxs)("div", {
									className: "flex flex-col items-center pb-8",
									id: "object-content",
									children: [Ae && ke ? /* @__PURE__ */ (0, B.jsx)(ce, {
										className: "w-full",
										label: ke,
										onReveal: Fe
									}) : /* @__PURE__ */ (0, B.jsxs)(B.Fragment, { children: [
										je && /* @__PURE__ */ (0, B.jsx)(de, {
											className: "w-full",
											onReveal: Ne
										}),
										Me && /* @__PURE__ */ (0, B.jsx)("div", {
											className: "mb-3 flex w-full justify-end",
											children: /* @__PURE__ */ (0, B.jsx)(ae, {
												layout: "inline",
												onHide: Pe
											})
										}),
										/* @__PURE__ */ (0, B.jsx)("div", {
											className: "w-full",
											children: /* @__PURE__ */ (0, B.jsx)(vt, {
												authors: W,
												backgroundColor: c,
												excerpt: H.summary ?? "",
												fontSize: d,
												fontStyle: u,
												heading: H.name,
												hideMedia: je,
												html: K,
												image: De,
												isPopoverOpen: y || C,
												postUrl: H?.url || "",
												onHeadingsExtracted: Ye,
												onIframeLoad: Xe,
												onLoadingChange: Ue
											})
										})
									] }), /* @__PURE__ */ (0, B.jsx)("div", {
										className: "-ml-3 w-full",
										style: { maxWidth: q },
										children: /* @__PURE__ */ (0, B.jsx)(O, {
											actor: U,
											commentCount: Te,
											layout: "modal",
											likeCount: H.likeCount ?? 0,
											object: H,
											repostCount: H.repostCount ?? 0,
											onLikeClick: ze
										})
									})]
								}),
								H.type === "Tombstone" && /* @__PURE__ */ (0, B.jsx)(be, { last: !0 }),
								/* @__PURE__ */ (0, B.jsxs)("div", {
									className: "mx-auto w-full border-t border-black/[8%] dark:border-gray-950",
									style: { maxWidth: q },
									children: [/* @__PURE__ */ (0, B.jsx)(ve, { object: H }), /* @__PURE__ */ (0, B.jsx)(yt, {})]
								}),
								F && /* @__PURE__ */ (0, B.jsx)(T, { size: "lg" }),
								/* @__PURE__ */ (0, B.jsxs)("div", {
									ref: Be,
									className: "mx-auto w-full",
									style: { maxWidth: q },
									children: [P.map((t, n) => {
										let i = n === P.length - 1, a = t.mainReply.id, o = ne.has(a), s = ie.has(a), c = se.has(a), l = t.chain.length > 0;
										return /* @__PURE__ */ (0, B.jsxs)(r.Fragment, { children: [
											/* @__PURE__ */ (0, B.jsx)(k, {
												actor: t.mainReply.actor,
												allowDelete: t.mainReply.object.authored,
												commentCount: t.mainReply.object.replyCount ?? 0,
												isChainParent: l,
												isPending: g(t.mainReply.id),
												last: !l,
												layout: "reply",
												likeCount: t.mainReply.object.likeCount ?? 0,
												object: t.mainReply.object,
												parentId: H.id,
												repostCount: t.mainReply.object.repostCount ?? 0,
												type: "Note",
												onClick: () => {
													let n = v.current;
													n && e && $.set(e, n.scrollTop), Z(`/notes/${encodeURIComponent(t.mainReply.id)}`);
												},
												onDelete: Ie
											}),
											l && t.chain[0] && /* @__PURE__ */ (0, B.jsx)(k, {
												actor: t.chain[0].actor,
												allowDelete: t.chain[0].object.authored,
												commentCount: t.chain[0].object.replyCount ?? 0,
												isChainContinuation: !0,
												isPending: g(t.chain[0].id),
												last: t.chain.length === 1,
												layout: "reply",
												likeCount: t.chain[0].object.likeCount ?? 0,
												object: t.chain[0].object,
												parentId: H.id,
												repostCount: t.chain[0].object.repostCount ?? 0,
												type: "Note",
												onClick: () => {
													let n = v.current;
													n && e && $.set(e, n.scrollTop), Z(`/notes/${encodeURIComponent(t.chain[0].id)}`);
												},
												onDelete: Ie
											}, t.chain[0].id),
											l && o && t.chain.slice(1).map((r, i) => {
												let a = i === t.chain.slice(1).length - 1, o = z && z(n), s = a && o;
												return /* @__PURE__ */ (0, B.jsx)(k, {
													actor: r.actor,
													allowDelete: r.object.authored,
													commentCount: r.object.replyCount ?? 0,
													isChainContinuation: !0,
													isPending: g(r.id),
													last: a && !s,
													layout: "reply",
													likeCount: r.object.likeCount ?? 0,
													object: r.object,
													parentId: H.id,
													repostCount: r.object.repostCount ?? 0,
													type: "Note",
													onClick: () => {
														let t = v.current;
														t && e && $.set(e, t.scrollTop), Z(`/notes/${encodeURIComponent(r.id)}`);
													},
													onDelete: Ie
												}, r.id);
											}),
											l && t.chain.length > 1 && !o && /* @__PURE__ */ (0, B.jsx)(ye, {
												variant: "expand",
												onClick: () => Le(a)
											}),
											l && o && s && z && z(n) && /* @__PURE__ */ (0, B.jsx)(ye, {
												loading: c,
												variant: "loadMore",
												onClick: () => Re(a, n)
											}),
											!i && /* @__PURE__ */ (0, B.jsx)(yt, {})
										] }, t.mainReply.id);
									}), A && /* @__PURE__ */ (0, B.jsx)("div", {
										className: "flex flex-col items-center justify-center text-center",
										children: /* @__PURE__ */ (0, B.jsx)(T, { size: "md" })
									})]
								}),
								R && /* @__PURE__ */ (0, B.jsx)("div", {
									ref: M,
									className: "h-1"
								})
							]
						})
					})]
				})]
			}), !F && /* @__PURE__ */ (0, B.jsxs)("div", {
				className: "pointer-events-none visible! sticky bottom-0 hidden items-end justify-between px-10 pb-[42px] lg:flex!",
				children: [/* @__PURE__ */ (0, B.jsx)("div", {
					className: "pointer-events-auto text-gray-600",
					children: fe(H.content ?? "")
				}), /* @__PURE__ */ (0, B.jsxs)("div", {
					className: "pointer-events-auto min-w-10 text-right text-gray-600 transition-all duration-200 ease-out",
					children: [Ve, "%"]
				}, Ve)]
			})]
		}) })
	}) : /* @__PURE__ */ (0, B.jsx)("div", {
		className: `max-h-full overflow-auto rounded-md ${c === "DARK" && "dark"} ${(c === "LIGHT" || c === "SEPIA") && "light"} ${G[c].background}`,
		children: /* @__PURE__ */ (0, B.jsx)("div", {
			className: "flex h-full flex-col",
			children: /* @__PURE__ */ (0, B.jsx)("div", {
				className: "relative flex-1",
				children: /* @__PURE__ */ (0, B.jsx)("div", {
					className: `sticky top-0 z-50 flex h-[102px] items-center justify-center rounded-t-md border-b max-md:h-[68px] ${G[c].background} ${G[c].border}`,
					children: /* @__PURE__ */ (0, B.jsxs)("div", {
						className: "grid w-full px-8 max-lg:px-4",
						style: { gridTemplateColumns: `1fr minmax(0,${q}) 1fr` },
						children: [/* @__PURE__ */ (0, B.jsx)("div", {
							className: "flex items-center",
							children: /* @__PURE__ */ (0, B.jsx)(E, {
								className: G[c].button,
								onClick: i
							})
						}), /* @__PURE__ */ (0, B.jsx)("div", {
							className: "col-[2/3] mx-auto flex w-full items-center gap-3 max-md:hidden",
							children: /* @__PURE__ */ (0, B.jsx)("div", {
								className: "grow text-center",
								children: /* @__PURE__ */ (0, B.jsx)("span", { children: "Error loading article." })
							})
						})]
					})
				})
			})
		})
	});
};
//#endregion
//#region src/views/inbox/components/inbox-list.tsx
i();
var St = ({ isLoading: e, activities: t, currentTopic: r, fetchNextPage: i, hasNextPage: a, isFetchingNextPage: c, onTopicChange: u }) => {
	let f = ee(), { canGoBack: p, goBack: _ } = d(), [v, y] = n(!1), x = l(), { topicsQuery: te } = h(), { data: S } = te, w = S && S.topics.length > 0;
	o(() => {
		y(!!x.postId);
	}, [x.postId]);
	let E = s(null), D = s(null), O = s(null);
	o(() => (E.current && E.current.disconnect(), E.current = new IntersectionObserver((e) => {
		e[0].isIntersecting && a && !c && i();
	}), D.current && E.current.observe(D.current), O.current && E.current.observe(O.current), () => {
		E.current && E.current.disconnect();
	}), [
		a,
		c,
		i
	]);
	let ne = Math.max(0, Math.floor(t.length * .75) - 1);
	return /* @__PURE__ */ (0, B.jsxs)(oe, { children: [
		w && /* @__PURE__ */ (0, B.jsx)(R, {
			currentTopic: r,
			excludeTopics: ["top"],
			onTopicChange: u
		}),
		/* @__PURE__ */ (0, B.jsx)("div", {
			className: "flex w-full flex-col",
			children: /* @__PURE__ */ (0, B.jsx)("div", {
				className: "w-full",
				children: t.length > 0 ? /* @__PURE__ */ (0, B.jsx)("div", {
					className: "my-4",
					children: /* @__PURE__ */ (0, B.jsx)("div", {
						className: "mx-auto flex min-h-[calc(100dvh_-_117px)] items-start gap-11",
						children: /* @__PURE__ */ (0, B.jsx)("div", {
							className: "flex w-full min-w-0 flex-col items-center",
							children: /* @__PURE__ */ (0, B.jsxs)("div", {
								className: "flex w-full min-w-0 flex-col items-start",
								children: [/* @__PURE__ */ (0, B.jsxs)("ul", {
									className: "mx-auto flex w-full flex-col",
									"data-testid": "inbox-list",
									children: [t.map((n, r) => /* @__PURE__ */ (0, B.jsxs)("li", {
										"data-testid": "inbox-item",
										"data-test-view-article": !0,
										children: [
											/* @__PURE__ */ (0, B.jsx)(k, {
												actor: n.actor,
												allowDelete: n.object.authored,
												commentCount: n.object.replyCount ?? 0,
												isLoading: e,
												isPending: g(n.id),
												layout: "inbox",
												likeCount: n.object.likeCount ?? 0,
												object: n.object,
												repostCount: n.object.repostCount ?? 0,
												type: n.type,
												onClick: () => {
													f(`/reader/${encodeURIComponent(n.id)}`);
												}
											}),
											r < t.length - 1 && /* @__PURE__ */ (0, B.jsx)(Se, {}),
											r === ne && /* @__PURE__ */ (0, B.jsx)("div", {
												ref: D,
												className: "h-1"
											})
										]
									}, `${n.id}-${n.type}-${r}`)), c && /* @__PURE__ */ (0, B.jsx)("li", {
										className: "flex flex-col items-center justify-center gap-4 text-center",
										children: /* @__PURE__ */ (0, B.jsx)(T, { size: "md" })
									})]
								}), /* @__PURE__ */ (0, B.jsx)("div", {
									ref: O,
									className: "h-1"
								})]
							})
						})
					})
				}) : r === "following" ? /* @__PURE__ */ (0, B.jsx)("div", {
					className: "mt-[24vh]",
					children: /* @__PURE__ */ (0, B.jsx)(H, {
						actions: w ? /* @__PURE__ */ (0, B.jsx)(m, {
							onClick: () => f("/explore"),
							children: "Find accounts to follow →"
						}) : /* @__PURE__ */ (0, B.jsx)(m, {
							asChild: !0,
							children: /* @__PURE__ */ (0, B.jsx)("a", {
								href: "https://explore.ghost.org/social-web",
								rel: "noopener noreferrer",
								target: "_blank",
								children: "Find accounts to follow →"
							})
						}),
						description: "Start following publishers to see their long-form posts here.",
						title: "Your Reader is empty",
						children: /* @__PURE__ */ (0, B.jsx)(L, {})
					})
				}) : /* @__PURE__ */ (0, B.jsx)("div", {
					className: "mt-[24vh]",
					children: /* @__PURE__ */ (0, B.jsx)(H, {
						description: "Explore other topics for more content.",
						title: "Nothing here yet",
						children: /* @__PURE__ */ (0, B.jsx)(L, {})
					})
				})
			})
		}),
		/* @__PURE__ */ (0, B.jsx)(C, {
			open: v,
			onOpenChange: (e) => {
				e || (p ? _() : f("/reader")), y(e);
			},
			children: /* @__PURE__ */ (0, B.jsxs)(re, {
				className: "inset-y-3 h-[calc(100vh-24px)] w-screen max-w-[calc(100vw-24px)] animate-none! p-0 focus:outline-hidden dark:bg-gray-950",
				children: [/* @__PURE__ */ (0, B.jsxs)(b, {
					className: "hidden",
					children: [/* @__PURE__ */ (0, B.jsx)(se, { children: "Reader" }), /* @__PURE__ */ (0, B.jsx)(ie, { children: "Ghost reader for long form articles" })]
				}), x.postId && /* @__PURE__ */ (0, B.jsx)(xt, {
					postId: x.postId,
					onClose: () => {
						p ? _() : f("/reader");
					}
				})]
			})
		})
	] });
};
//#endregion
//#region src/views/inbox/inbox.tsx
i();
var Ct = () => {
	let [e, t] = n("following"), { inboxQuery: r } = _({ enabled: e === "following" }), { discoveryFeedQuery: i } = v({
		enabled: e !== "following",
		topic: e
	}), { data: a, error: o, fetchNextPage: s, hasNextPage: c, isFetchingNextPage: l, isLoading: u } = e === "following" ? r : i, d = o && y(o) && o.statusCode === 404 && e !== "following";
	return o && y(o) && !d ? /* @__PURE__ */ (0, B.jsx)(le, {
		errorCode: o.code,
		statusCode: o.statusCode
	}) : /* @__PURE__ */ (0, B.jsx)(St, {
		activities: d ? [] : a?.pages.flatMap((e) => e.posts) ?? Array.from({ length: 5 }, (e, t) => ({
			id: `placeholder-${t}`,
			object: {}
		})),
		currentTopic: e,
		fetchNextPage: s,
		hasNextPage: c,
		isFetchingNextPage: l,
		isLoading: u,
		onTopicChange: t
	});
};
//#endregion
export { Ct as default };

//# sourceMappingURL=inbox-CtI-cuhk.js.map