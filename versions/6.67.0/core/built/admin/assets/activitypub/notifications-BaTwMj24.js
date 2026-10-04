import { a as e, d as t, v as n, w as r } from "./_react-D4KM8XEu.js";
import { C as i } from "./chunk-OB3PAWPO-CAV1KLte.js";
import { G as a, a as o, o as s, r as c, t as l } from "./use-navigate-with-base-path-CjM3S5Z7.js";
import { q as u, w as d } from "./use-activity-pub-queries-C5sHP1nj.js";
import { C as f, D as p, E as m, N as h, S as g, T as _, a as v, b as y, h as b, i as x, n as S, r as C, v as w, x as T } from "./routes-YnsvZ4ZW.js";
import { a as E } from "./x-Df_RdoAk.js";
import { c as D, o as O, s as k, u as A } from "./content-formatters-DdWZWlsa.js";
import { a as j } from "./avatar-BxanGW2x.js";
import { t as M } from "./reply-DeRhejVn.js";
import "./layout-DGSP79W3.js";
var N = s("at-sign", [["circle", {
	cx: "12",
	cy: "12",
	r: "4",
	key: "4exip2"
}], ["path", {
	d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",
	key: "7n84p3"
}]]), P = s("repeat-2", [
	["path", {
		d: "m2 9 3-3 3 3",
		key: "1ltn5i"
	}],
	["path", {
		d: "M13 18H7a2 2 0 0 1-2-2V6",
		key: "1r6tfw"
	}],
	["path", {
		d: "m22 15-3 3-3-3",
		key: "4rnwn2"
	}],
	["path", {
		d: "M11 6h6a2 2 0 0 1 2 2v10",
		key: "2f72bc"
	}]
]), F = s("user-round-check", [
	["path", {
		d: "M2 21a8 8 0 0 1 13.292-6",
		key: "bjp14o"
	}],
	["circle", {
		cx: "10",
		cy: "8",
		r: "5",
		key: "o932ke"
	}],
	["path", {
		d: "m16 19 2 2 4-4",
		key: "1b14m6"
	}]
]);
//#endregion
//#region src/views/notifications/components/notification-icon.tsx
t();
var I = i(), L = ({ notificationType: e, size: t = "lg", className: n }) => {
	let r, i = "", a = "white", o = t === "sm" ? 13 : 20, s = t === "sm" ? 2 : 1.5;
	switch (e) {
		case "follow":
			r = /* @__PURE__ */ (0, I.jsx)(F, {
				className: `-mt-0.5 -mr-0.5 ${t === "sm" && "size-[11px]"}`,
				color: a,
				size: o,
				strokeWidth: s
			}), i = "bg-blue-600";
			break;
		case "like":
			r = /* @__PURE__ */ (0, I.jsx)(j, {
				className: `${t === "sm" ? "size-[11px]" : "mt-px size-5"}`,
				color: a,
				strokeWidth: s
			}), i = "bg-pink-600";
			break;
		case "reply":
			r = /* @__PURE__ */ (0, I.jsx)(M, {
				className: "mr-px mb-px",
				color: a,
				size: o,
				strokeWidth: s
			}), i = "bg-purple-600";
			break;
		case "repost":
			r = /* @__PURE__ */ (0, I.jsx)(P, {
				color: a,
				size: o,
				strokeWidth: s
			}), i = "bg-green-500";
			break;
		case "mention":
			r = /* @__PURE__ */ (0, I.jsx)(N, {
				className: `${t === "sm" ? "size-[12px]" : "size-5"}`,
				color: a,
				size: o,
				strokeWidth: s
			}), i = "bg-orange-500";
			break;
	}
	return /* @__PURE__ */ (0, I.jsx)("div", {
		className: `flex ${t === "sm" ? "size-5" : "size-9"} items-center justify-center rounded-full ${i} ${n && n}`,
		children: r
	});
};
//#endregion
//#region src/views/notifications/components/notification-item.tsx
t();
var R = e.createContext(void 0), z = ({ isGrouped: e, centerAlign: t, children: n, onClick: r, url: i, className: a }) => /* @__PURE__ */ (0, I.jsx)(R.Provider, {
	value: {
		onClick: r,
		url: i
	},
	children: /* @__PURE__ */ (0, I.jsx)("div", {
		className: `group relative -mx-4 -my-px ${e ? "grid" : "flex"} ${t ? "items-center" : "items-start"} break-anywhere cursor-pointer grid-cols-[auto_1fr] gap-x-4 gap-y-2.5 rounded-lg px-4 py-5 text-left hover:bg-gray-100 ${a}`,
		role: "button",
		onClick: r,
		children: n
	})
});
//#endregion
//#region src/components/global/separator.tsx
z.Icon = ({ size: e = "lg", type: t }) => /* @__PURE__ */ (0, I.jsx)("div", {
	className: "col-start-1 row-start-1",
	children: /* @__PURE__ */ (0, I.jsx)(L, {
		notificationType: t,
		size: e
	})
}), z.Avatars = ({ children: e }) => /* @__PURE__ */ (0, I.jsx)("div", {
	className: "col-start-2 row-start-1 flex gap-2",
	children: e
}), z.Content = ({ children: e }) => /* @__PURE__ */ (0, I.jsx)("div", {
	className: "col-start-2 row-start-2 -mt-0.5 grow overflow-hidden",
	children: e
}), t();
var B = () => /* @__PURE__ */ (0, I.jsx)("div", { className: "h-px w-full bg-gray-200 dark:bg-gray-950" });
//#endregion
//#region src/views/notifications/notifications.tsx
t();
function V(e) {
	let t = 1440 * 60 * 1e3, n = new Date(e).getTime();
	return (Math.floor(n / t) * t).toString();
}
function H(e) {
	let t = {}, n = null, r = 0;
	return e.forEach((e) => {
		e.type !== n && (r += 1, n = e.type);
		let i = "", a = `_${V(e.createdAt)}`, o = `_seq${r}`;
		switch (e.type) {
			case "like":
				e.post?.id && (i = `like_${e.post.id}${a}${o}`);
				break;
			case "reply":
				i = `reply_${e.id}`;
				break;
			case "repost":
				e.post?.id && (i = `repost_${e.post.id}${a}${o}`);
				break;
			case "follow":
				i = `follow_${a}${o}`;
				break;
			case "mention":
				i = `mention_${e.id}`;
				break;
		}
		t[i] || (t[i] = {
			id: e.id,
			type: e.type,
			actors: [],
			post: e.post,
			inReplyTo: e.inReplyTo,
			createdAt: e.createdAt
		}), t[i].actors.find((t) => t.id === e.actor.id) || t[i].actors.push(e.actor);
	}), Object.values(t);
}
var U = ({ group: e }) => {
	let [t, ...n] = e.actors, r = n.length > 0, i = n.length, o = l(), s = /* @__PURE__ */ (0, I.jsxs)(I.Fragment, { children: [/* @__PURE__ */ (0, I.jsx)(m, {
		actor: t,
		align: "center",
		isCurrentUser: !1,
		children: /* @__PURE__ */ (0, I.jsx)("span", {
			className: "cursor-pointer font-semibold hover:underline text-black dark:text-white",
			onClick: (e) => {
				e?.stopPropagation(), t.handle && f(t.handle, o);
			},
			children: t.name
		})
	}), r && ` and ${a(i)} ${i > 1 ? "others" : "other"}`] });
	switch (e.type) {
		case "follow": return /* @__PURE__ */ (0, I.jsxs)(I.Fragment, { children: [s, " followed you"] });
		case "like": return /* @__PURE__ */ (0, I.jsxs)(I.Fragment, { children: [
			s,
			" liked your ",
			e.post?.type === "article" ? "post" : "note"
		] });
		case "repost": return /* @__PURE__ */ (0, I.jsxs)(I.Fragment, { children: [
			s,
			" reposted your ",
			e.post?.type === "article" ? "post" : "note"
		] });
		case "reply":
			if (e.inReplyTo && typeof e.inReplyTo != "string") return s;
			break;
		case "mention": return s;
	}
	return /* @__PURE__ */ (0, I.jsx)(I.Fragment, {});
}, W = ({ content: e, className: t, stripTags: i = [] }) => {
	let a = r(null), o = l();
	return n(() => {
		let e = a.current;
		if (!e) return;
		let t = (e) => {
			let t = e.target.closest("a[data-profile]");
			if (t) {
				let n = t.getAttribute("data-profile")?.trim();
				/^@([\w.-]+)@([\w-]+\.[\w.-]+[a-zA-Z])$/.test(n || "") && n && (e.preventDefault(), e.stopPropagation(), f(n, o));
			}
		};
		return e.addEventListener("click", t), () => {
			e.removeEventListener("click", t);
		};
	}, [o, e]), /* @__PURE__ */ (0, I.jsx)("div", {
		dangerouslySetInnerHTML: { __html: O(k(e || "", i)) },
		ref: a,
		className: t
	});
}, G = ({ post: e, variant: t }) => {
	let n = e?.attachments ?? [], r = n.length > 0, { contentWarning: i, shouldHideContentWarning: a, shouldHideSensitiveMedia: o, revealSensitiveMedia: s, revealContentWarning: c } = T({
		contentWarning: e?.contentWarning,
		sensitive: e?.sensitive,
		hasMedia: r,
		resetKey: e?.id
	});
	return e ? a && i ? t === "inline" ? /* @__PURE__ */ (0, I.jsxs)("button", {
		className: "mt-0.5 block max-w-full truncate text-left text-sm text-gray-700 hover:text-black dark:text-gray-600 dark:hover:text-white",
		type: "button",
		onClick: c,
		children: [
			/* @__PURE__ */ (0, I.jsx)("span", {
				className: "font-semibold",
				children: "Content warning:"
			}),
			" ",
			i,
			" ",
			/* @__PURE__ */ (0, I.jsx)("span", {
				className: "font-semibold",
				children: "Show"
			})
		]
	}) : /* @__PURE__ */ (0, I.jsx)(b, {
		className: "mt-2.5",
		label: i,
		size: "compact",
		onReveal: c
	}) : t === "inline" ? /* @__PURE__ */ (0, I.jsxs)("div", {
		className: "ap-note-content mt-0.5 line-clamp-1 text-sm text-pretty text-gray-700 dark:text-gray-600",
		children: [e.type === "article" && e.title && /* @__PURE__ */ (0, I.jsxs)(I.Fragment, { children: [e.title, " — "] }), /* @__PURE__ */ (0, I.jsx)("span", { dangerouslySetInnerHTML: { __html: O(k(e.content || "")) } })]
	}) : /* @__PURE__ */ (0, I.jsxs)("div", {
		className: "mt-2.5 rounded-md bg-gray-100 px-5 py-[14px] group-hover:bg-gray-200 dark:bg-gray-950/30 group-hover:dark:bg-black/40",
		children: [/* @__PURE__ */ (0, I.jsx)(W, {
			className: "ap-note-content text-pretty",
			content: e.content || "",
			stripTags: ["a"]
		}), r && /* @__PURE__ */ (0, I.jsxs)("div", {
			className: "relative mt-2.5 aspect-square w-[calc(20%-6.4px)] min-w-[96px] overflow-hidden rounded-md [&_img]:absolute [&_img]:inset-0 [&_img]:mt-0 [&_img]:size-full [&_img]:max-h-none [&_img]:max-w-none [&_img]:object-cover [&>.attachment-gallery]:absolute [&>.attachment-gallery]:inset-0 [&>.attachment-gallery]:mt-0 [&>.attachment-gallery]:grid [&>.attachment-gallery]:size-full",
			children: [y({
				type: "Note",
				attachment: n
			}), o && /* @__PURE__ */ (0, I.jsx)(w, {
				showLabel: !1,
				size: "compact",
				isLayered: !0,
				onReveal: s
			})]
		})]
	}) : null;
}, K = () => {
	let [t, i] = e.useState({}), s = l(), m = (e) => {
		i((t) => ({
			...t,
			[e]: !t[e]
		}));
	}, y = () => {}, { data: b, error: w, fetchNextPage: T, hasNextPage: O, isFetchingNextPage: k, isLoading: j } = d("index"), M = b?.pages.flatMap((e) => H(e.notifications)) ?? Array(10).fill({ actors: [{}] }), N = r(null), P = r(null);
	n(() => (N.current && N.current.disconnect(), N.current = new IntersectionObserver((e) => {
		e[0].isIntersecting && O && !k && T();
	}), P.current && N.current.observe(P.current), () => {
		N.current && N.current.disconnect();
	}), [
		O,
		k,
		T
	]);
	let F = (e, t) => {
		switch (e.type) {
			case "like":
				e.post && s(`/${e.post.type === "article" ? "reader" : "notes"}/${encodeURIComponent(e.post.id)}`);
				break;
			case "reply":
				e.post && e.inReplyTo && s(`/notes/${encodeURIComponent(e.post.id)}`);
				break;
			case "repost":
				e.post && s(`/${e.post.type === "article" ? "reader" : "notes"}/${encodeURIComponent(e.post.id)}`);
				break;
			case "follow":
				e.actors.length > 1 ? m(e.id || `${e.type}_${t}`) : e.actors[0]?.handle && f(e.actors[0].handle, s);
				break;
			case "mention":
				e.post && s(`/notes/${encodeURIComponent(e.post.id)}`);
				break;
		}
	};
	return w && u(w) ? /* @__PURE__ */ (0, I.jsx)(S, {
		errorCode: w.code,
		statusCode: w.statusCode
	}) : /* @__PURE__ */ (0, I.jsx)(v, { children: /* @__PURE__ */ (0, I.jsxs)("div", {
		className: "z-0 flex w-full flex-col items-center",
		children: [j === !1 && M.length === 0 && /* @__PURE__ */ (0, I.jsxs)(x, { children: [/* @__PURE__ */ (0, I.jsx)(C, { children: /* @__PURE__ */ (0, I.jsx)(E, {}) }), "Quiet for now, but not for long! When someone likes, boosts, or replies to you, you'll find it here."] }), M.length > 0 && /* @__PURE__ */ (0, I.jsxs)(I.Fragment, { children: [
			/* @__PURE__ */ (0, I.jsx)("div", {
				className: "my-8 flex w-full max-w-[620px] flex-col max-md:mt-5",
				children: M.map((n, r) => /* @__PURE__ */ (0, I.jsxs)(e.Fragment, { children: [/* @__PURE__ */ (0, I.jsxs)(z, {
					centerAlign: n.actors.length < 2 && n.type === "follow",
					className: "hover:bg-gray-100 dark:hover:bg-gray-950",
					isGrouped: n.actors.length > 1,
					onClick: () => F(n, r),
					children: [
						j ? /* @__PURE__ */ (0, I.jsx)(A, {
							className: "rounded-full",
							containerClassName: "flex h-10 w-10"
						}) : n.actors.length > 1 ? /* @__PURE__ */ (0, I.jsx)(z.Icon, { type: n.type }) : /* @__PURE__ */ (0, I.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, I.jsx)(D, {
								author: {
									icon: { url: n.actors[0].avatarUrl || "" },
									name: n.actors[0].name,
									handle: n.actors[0].handle
								},
								size: "notification"
							}, n.actors[0].id), /* @__PURE__ */ (0, I.jsx)(L, {
								className: "absolute -right-1 -bottom-1 z-10 border-2 border-white dark:border-black",
								notificationType: n.type,
								size: "sm"
							})]
						}),
						n.actors.length > 1 && /* @__PURE__ */ (0, I.jsx)(z.Avatars, { children: /* @__PURE__ */ (0, I.jsxs)("div", {
							className: "flex w-full flex-col",
							children: [/* @__PURE__ */ (0, I.jsxs)("div", {
								className: "relative flex w-fit items-center pl-2",
								children: [
									!t[n.id || `${n.type}_${r}`] && n.actors.slice(0, 5).map((e) => /* @__PURE__ */ (0, I.jsx)(D, {
										author: {
											icon: { url: e.avatarUrl || "" },
											name: e.name,
											handle: e.handle
										},
										className: "-ml-2 bg-[#F3F3F3]! outline-2 outline-white group-hover:bg-[#EDEEF0]! group-hover:outline-gray-100 dark:outline-black group-hover:dark:outline-gray-950",
										size: "notification"
									}, e.id)),
									n.actors.length > 5 && !t[n.id || `${n.type}_${r}`] && /* @__PURE__ */ (0, I.jsx)("div", {
										className: "absolute right-[28px] z-10 flex size-9 items-center justify-center rounded-full bg-black/50 text-base font-semibold tracking-tightest text-white",
										children: `+${a(n.actors.length - 5)}`
									}),
									n.actors.length > 1 && /* @__PURE__ */ (0, I.jsxs)(c, {
										className: `group flex items-center gap-0.5 text-gray-700 hover:bg-transparent hover:text-black dark:text-gray-600 dark:hover:text-white ${t[n.id || `${n.type}_${r}`] ? "ml-[-20px]" : "ml-0 w-[28px]"}`,
										variant: "ghost",
										onClick: (e) => {
											e?.stopPropagation(), m(n.id || `${n.type}_${r}`);
										},
										children: [/* @__PURE__ */ (0, I.jsx)(o, {
											className: `${t[n.id || `${n.type}_${r}`] ? "rotate-180" : ""}`,
											size: 20,
											strokeWidth: 1.5
										}), t[n.id || `${n.type}_${r}`] ? "Hide" : /* @__PURE__ */ (0, I.jsx)("span", {
											className: "sr-only",
											children: "Show all"
										})]
									})
								]
							}), /* @__PURE__ */ (0, I.jsx)("div", {
								className: `overflow-hidden transition-all duration-300 ease-in-out  ${t[n.id || `${n.type}_${r}`] ? "mb-2 max-h-[1384px] opacity-100" : "max-h-0 opacity-0"}`,
								children: t[n.id || `${n.type}_${r}`] && n.actors.length > 1 && /* @__PURE__ */ (0, I.jsx)("div", {
									className: "flex flex-col gap-2 pt-2",
									children: n.actors.map((e) => /* @__PURE__ */ (0, I.jsxs)("div", {
										className: "group/item break-anywhere flex items-center justify-between gap-4",
										onClick: (t) => {
											t?.stopPropagation(), e.handle && f(e.handle, s);
										},
										children: [/* @__PURE__ */ (0, I.jsxs)("div", {
											className: "flex min-w-0 items-center",
											children: [
												/* @__PURE__ */ (0, I.jsx)(D, {
													author: {
														icon: { url: e.avatarUrl || "" },
														name: e.name,
														handle: e.handle
													},
													size: "xs"
												}),
												/* @__PURE__ */ (0, I.jsx)("span", {
													className: "ml-2 line-clamp-1 text-base font-semibold group-hover/item:underline dark:text-white",
													children: e.name
												}),
												/* @__PURE__ */ (0, I.jsx)("span", {
													className: "ml-1 line-clamp-1 text-base text-gray-700 dark:text-gray-600",
													children: e.handle
												})
											]
										}), n.type === "follow" && !e.followedByMe && e.handle && /* @__PURE__ */ (0, I.jsx)(p, {
											following: !1,
											handle: e.handle,
											variant: "link"
										})]
									}, e.id))
								})
							})]
						}) }),
						/* @__PURE__ */ (0, I.jsxs)(z.Content, { children: [
							/* @__PURE__ */ (0, I.jsx)("div", { children: j ? /* @__PURE__ */ (0, I.jsxs)(I.Fragment, { children: [/* @__PURE__ */ (0, I.jsx)(A, {}), /* @__PURE__ */ (0, I.jsx)(A, { className: "w-full max-w-60" })] }) : /* @__PURE__ */ (0, I.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, I.jsxs)("div", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, I.jsx)("span", {
										className: "truncate",
										children: /* @__PURE__ */ (0, I.jsx)(U, { group: n })
									}), n.actors.length < 2 && /* @__PURE__ */ (0, I.jsxs)(I.Fragment, { children: [/* @__PURE__ */ (0, I.jsx)("span", {
										className: "mt-px text-[8px] text-gray-700 dark:text-gray-600",
										children: "•"
									}), /* @__PURE__ */ (0, I.jsx)("span", {
										className: "mt-0.5 text-sm text-gray-700 dark:text-gray-600",
										children: g(n, !1)
									})] })]
								}), n.actors.length === 1 && (n.type === "follow" || n.type === "reply" || n.type === "mention") && !n.actors[0].followedByMe && n.actors[0].handle && /* @__PURE__ */ (0, I.jsx)(p, {
									following: !1,
									handle: n.actors[0].handle,
									variant: "link"
								})]
							}) }),
							(n.type === "reply" && n.inReplyTo || n.type === "mention" || n.type === "like" && !n.post?.name && n.post?.content || n.type === "repost" && !n.post?.name && n.post?.content) && /* @__PURE__ */ (0, I.jsx)(G, {
								post: n.post,
								variant: n.type !== "reply" && n.type !== "mention" ? "inline" : "quoted"
							}),
							(n.type === "reply" && n.post || n.type === "mention") && /* @__PURE__ */ (0, I.jsx)("div", {
								className: "mt-1.5",
								children: /* @__PURE__ */ (0, I.jsx)(_, {
									actor: {
										...n.actors[0],
										icon: { url: n.actors[0].avatarUrl || "" },
										id: n.actors[0].url,
										preferredUsername: n.actors[0].handle?.replace(/^@([^@]+)@.*$/, "$1") || "unknown"
									},
									buttonClassName: "hover:bg-gray-200",
									commentCount: n.post.replyCount || 0,
									layout: "notification",
									likeCount: n.post.likeCount || 0,
									object: {
										...n.post,
										liked: n.post.likedByMe,
										reposted: n.post.repostedByMe
									},
									repostCount: n.post.repostCount || 0,
									onLikeClick: y
								})
							})
						] })
					]
				}), r < M.length - 1 && /* @__PURE__ */ (0, I.jsx)("div", {
					className: "pl-[52px]",
					children: /* @__PURE__ */ (0, I.jsx)(B, {})
				})] }, n.id || `${n.type}_${r}`))
			}),
			/* @__PURE__ */ (0, I.jsx)("div", {
				ref: P,
				className: "h-1"
			}),
			k && /* @__PURE__ */ (0, I.jsx)("div", {
				className: "-mt-4 mb-8 flex flex-col items-center justify-center gap-4 text-center",
				children: /* @__PURE__ */ (0, I.jsx)(h, { size: "md" })
			})
		] })]
	}) });
};
//#endregion
export { K as default };

//# sourceMappingURL=notifications-BaTwMj24.js.map