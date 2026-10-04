import { T as e, d as t, v as n, w as r } from "./_react-D4KM8XEu.js";
import { C as i } from "./chunk-OB3PAWPO-CAV1KLte.js";
import { r as a, t as o } from "./use-navigate-with-base-path-CjM3S5Z7.js";
import { K as s, P as c, U as l, Z as u, q as d, v as f } from "./use-activity-pub-queries-C5sHP1nj.js";
import { D as p, E as m, N as h, a as g, ft as _, g as v, i as y, l as b, n as x, pt as S, r as C } from "./routes-YnsvZ4ZW.js";
import { i as w, t as T } from "./x-Df_RdoAk.js";
import { c as E, u as D } from "./content-formatters-DdWZWlsa.js";
import { t as O } from "./hash-Dh2FCykU.js";
import { t as k } from "./separator-CqYGFHQe.js";
import "./layout-DGSP79W3.js";
//#region src/views/feed/components/feed-input.tsx
var A = i(), j = ({ user: e }) => /* @__PURE__ */ (0, A.jsx)(b, { children: /* @__PURE__ */ (0, A.jsxs)("div", {
	className: "relative my-5 w-full hover:cursor-pointer",
	children: [/* @__PURE__ */ (0, A.jsx)("div", {
		className: "pointer-events-none absolute top-4 left-4",
		children: /* @__PURE__ */ (0, A.jsx)(E, { author: e })
	}), /* @__PURE__ */ (0, A.jsx)("div", {
		"aria-label": "New post",
		className: "text inset-0 flex h-[72px] w-full items-center justify-start rounded-lg bg-white pl-[68px] text-left text-[1.5rem] font-normal tracking-normal text-gray-500 shadow-[0_5px_24px_0px_rgba(0,0,0,0.02),0px_2px_5px_0px_rgba(0,0,0,0.07),0px_0px_1px_0px_rgba(0,0,0,0.25)] transition-all hover:bg-white hover:shadow-[0_5px_24px_0px_rgba(0,0,0,0.05),0px_14px_12px_-9px_rgba(0,0,0,0.07),0px_0px_1px_0px_rgba(0,0,0,0.25)] dark:border dark:border-gray-950 dark:bg-black dark:shadow-none dark:hover:border-gray-800 dark:hover:bg-black dark:hover:shadow-none",
		children: "What's new?"
	})]
}) });
//#endregion
//#region src/views/feed/components/suggested-profiles.tsx
t();
var M = () => {
	let t = r(null), i = o(), [s, l] = e(!1), [d, f] = e(!0), { suggestedProfilesQuery: h, updateSuggestedProfile: g } = c("index", 10), { data: v = [], isLoading: y } = h, b = () => {
		let e = t.current;
		if (!e) return;
		let n = e.scrollLeft > 0, r = e.scrollLeft < e.scrollWidth - e.clientWidth;
		l(n), f(r);
	};
	if (n(() => {
		b();
	}, [v]), !y && (!v || v.length < 4)) return null;
	let x = (e) => {
		g(e.id, { followedByMe: !0 });
	}, C = (e) => {
		g(e.id, { followedByMe: !1 });
	};
	return /* @__PURE__ */ (0, A.jsxs)(A.Fragment, { children: [/* @__PURE__ */ (0, A.jsxs)("div", {
		className: "pt-4 pb-7",
		children: [/* @__PURE__ */ (0, A.jsxs)("div", {
			className: "mb-3 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, A.jsx)(u, {
				className: "text-lg font-semibold text-black dark:text-white",
				children: "More people to follow"
			}), /* @__PURE__ */ (0, A.jsx)(a, {
				className: "px-0 font-medium text-gray-700 hover:text-black dark:text-gray-600 dark:hover:text-white",
				variant: "link",
				onClick: () => i("/explore"),
				children: "Find more →"
			})]
		}), /* @__PURE__ */ (0, A.jsxs)("div", {
			className: "relative",
			children: [
				s && /* @__PURE__ */ (0, A.jsx)(a, {
					className: "absolute top-1/2 -left-10 z-10 size-10 -translate-y-1/2 text-gray-700 hover:bg-transparent max-lg:hidden dark:text-gray-600 dark:hover:text-white",
					variant: "ghost",
					onClick: () => {
						let e = t.current;
						e && e.scrollBy({
							left: -352,
							behavior: "smooth"
						});
					},
					children: /* @__PURE__ */ (0, A.jsx)(S, { className: "size-6!" })
				}),
				d && /* @__PURE__ */ (0, A.jsx)(a, {
					className: "absolute top-1/2 -right-10 z-10 size-10 -translate-y-1/2 text-gray-700 hover:bg-transparent max-lg:hidden dark:text-gray-600 dark:hover:text-white",
					variant: "ghost",
					onClick: () => {
						let e = t.current;
						e && e.scrollBy({
							left: 352,
							behavior: "smooth"
						});
					},
					children: /* @__PURE__ */ (0, A.jsx)(_, { className: "size-6!" })
				}),
				/* @__PURE__ */ (0, A.jsx)("div", {
					ref: t,
					className: "flex snap-x snap-mandatory gap-4 overflow-x-auto",
					style: {
						scrollbarWidth: "none",
						msOverflowStyle: "none"
					},
					onScroll: b,
					children: (y ? Array(10).fill(null) : v || []).map((e, t) => /* @__PURE__ */ (0, A.jsxs)("div", {
						className: "relative w-40 shrink-0 snap-start rounded-lg bg-gray-100 p-4 dark:bg-gray-950/30",
						onClick: !y && e ? () => i(`/profile/${e.handle}`) : void 0,
						children: [/* @__PURE__ */ (0, A.jsx)(a, {
							className: "absolute top-1 right-2 hidden p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
							variant: "link",
							onClick: (t) => {
								t.stopPropagation(), e?.id;
							},
							children: /* @__PURE__ */ (0, A.jsx)(T, { className: "size-4" })
						}), /* @__PURE__ */ (0, A.jsxs)("div", {
							className: "flex flex-col items-center text-center",
							children: [
								/* @__PURE__ */ (0, A.jsx)("div", {
									className: "mb-3",
									children: y ? /* @__PURE__ */ (0, A.jsx)(D, { className: "size-16 rounded-full" }) : /* @__PURE__ */ (0, A.jsx)(m, {
										actor: e,
										align: "center",
										children: /* @__PURE__ */ (0, A.jsx)("div", { children: /* @__PURE__ */ (0, A.jsx)(E, {
											author: {
												icon: { url: e?.avatarUrl || "" },
												name: e?.name || "",
												handle: e?.handle || ""
											},
											size: "md"
										}) })
									})
								}),
								/* @__PURE__ */ (0, A.jsx)("span", {
									className: "mb-6 w-full truncate font-semibold text-black dark:text-white",
									children: y ? /* @__PURE__ */ (0, A.jsx)(D, { className: "h-5 w-32" }) : e?.name || ""
								}),
								y ? /* @__PURE__ */ (0, A.jsx)(D, { className: "h-8 w-16" }) : /* @__PURE__ */ (0, A.jsx)(p, {
									following: e?.followedByMe || !1,
									handle: e?.handle || "",
									type: "primary",
									onFollow: () => e && x(e),
									onUnfollow: () => e && C(e)
								})
							]
						})]
					}, e?.id || `loading-${t}`))
				})
			]
		})]
	}), /* @__PURE__ */ (0, A.jsx)(k, {})] });
};
//#endregion
//#region src/views/feed/components/feed-list.tsx
t();
var N = ({ isLoading: e, activities: t, user: i, fetchNextPage: c, hasNextPage: l, isFetchingNextPage: u }) => {
	let d = o(), f = r(null), p = r(null), m = r(null);
	n(() => (f.current && f.current.disconnect(), f.current = new IntersectionObserver((e) => {
		e[0].isIntersecting && l && !u && c();
	}), p.current && f.current.observe(p.current), m.current && f.current.observe(m.current), () => {
		f.current && f.current.disconnect();
	}), [
		l,
		u,
		c
	]);
	let _ = Math.max(0, Math.floor(t.length * .75) - 1);
	return /* @__PURE__ */ (0, A.jsx)(g, { children: /* @__PURE__ */ (0, A.jsx)("div", {
		className: "flex w-full flex-col",
		children: /* @__PURE__ */ (0, A.jsx)("div", {
			className: "w-full",
			children: t.length > 0 ? /* @__PURE__ */ (0, A.jsx)("div", {
				className: "my-4",
				children: /* @__PURE__ */ (0, A.jsx)("div", {
					className: "mx-auto flex items-start gap-11",
					children: /* @__PURE__ */ (0, A.jsx)("div", {
						className: "flex w-full min-w-0 flex-col items-center",
						children: /* @__PURE__ */ (0, A.jsxs)("div", {
							className: "flex w-full max-w-[620px] min-w-0 flex-col items-start",
							children: [
								/* @__PURE__ */ (0, A.jsx)(j, { user: i }),
								/* @__PURE__ */ (0, A.jsxs)("ul", {
									className: "mx-auto flex w-full flex-col px-4 max-lg:px-0",
									"data-testid": "feed-list",
									children: [t.map((n, r) => /* @__PURE__ */ (0, A.jsxs)("li", {
										"data-testid": "feed-item",
										"data-test-view-article": !0,
										children: [
											/* @__PURE__ */ (0, A.jsx)(v, {
												actor: n.actor,
												allowDelete: n.object.authored,
												commentCount: n.object.replyCount ?? 0,
												isLoading: e,
												isPending: s(n.id),
												layout: "feed",
												likeCount: n.object.likeCount ?? 0,
												object: n.object,
												repostCount: n.object.repostCount ?? 0,
												type: n.type,
												onClick: () => {
													d(`/notes/${encodeURIComponent(n.id)}`);
												}
											}),
											r < t.length - 1 && /* @__PURE__ */ (0, A.jsx)(k, {}),
											r === 3 && /* @__PURE__ */ (0, A.jsx)(M, {}),
											r === _ && /* @__PURE__ */ (0, A.jsx)("div", {
												ref: p,
												className: "h-1"
											})
										]
									}, `${n.id}-${n.type}-${r}`)), u && /* @__PURE__ */ (0, A.jsx)("li", {
										className: "flex flex-col items-center justify-center gap-4 text-center",
										children: /* @__PURE__ */ (0, A.jsx)(h, { size: "md" })
									})]
								}),
								/* @__PURE__ */ (0, A.jsx)("div", {
									ref: m,
									className: "h-1"
								})
							]
						})
					})
				})
			}) : /* @__PURE__ */ (0, A.jsx)("div", {
				className: "flex w-full flex-col items-center gap-10",
				children: /* @__PURE__ */ (0, A.jsxs)("div", {
					className: "mt-4 flex w-full max-w-[620px] flex-col items-center",
					children: [/* @__PURE__ */ (0, A.jsx)(j, { user: i }), /* @__PURE__ */ (0, A.jsx)("div", {
						className: "mt-[-128px]",
						children: /* @__PURE__ */ (0, A.jsxs)(y, { children: [
							/* @__PURE__ */ (0, A.jsx)(C, { children: /* @__PURE__ */ (0, A.jsx)(O, {}) }),
							/* @__PURE__ */ (0, A.jsxs)("div", { children: [
								"The Feed is the stream of thoughts and",
								" ",
								/* @__PURE__ */ (0, A.jsx)("span", {
									className: "text-black dark:text-white",
									children: "bite-sized updates"
								}),
								" from people you follow in the Social Web. It's looking a little empty right now but once the people you follow start posting, their updates will show up here."
							] }),
							/* @__PURE__ */ (0, A.jsx)(b, { children: /* @__PURE__ */ (0, A.jsxs)(a, {
								className: "text-white dark:text-black",
								children: [/* @__PURE__ */ (0, A.jsx)(w, {}), "Write your first note"]
							}) })
						] })
					})]
				})
			})
		})
	}) });
};
//#endregion
//#region src/views/feed/feed.tsx
t();
var P = () => {
	let { feedQuery: e } = f({ enabled: !0 }), { data: t, error: n, fetchNextPage: r, hasNextPage: i, isFetchingNextPage: a, isLoading: o } = e, s = t?.pages.flatMap((e) => e.posts) ?? Array.from({ length: 5 }, (e, t) => ({
		id: `placeholder-${t}`,
		object: {}
	})), { data: c } = l("index");
	return n && d(n) ? /* @__PURE__ */ (0, A.jsx)(x, {
		errorCode: n.code,
		statusCode: n.statusCode
	}) : /* @__PURE__ */ (0, A.jsx)(N, {
		activities: s,
		fetchNextPage: r,
		hasNextPage: i,
		isFetchingNextPage: a,
		isLoading: o,
		user: c
	});
};
//#endregion
export { P as default };

//# sourceMappingURL=feed-C8D6LTr5.js.map