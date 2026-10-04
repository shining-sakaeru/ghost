import { S as e, T as t, a as n, d as r, g as i, v as a, w as o } from "./_react-D4KM8XEu.js";
import { C as s, d as c, m as l, s as u } from "./chunk-OB3PAWPO-CAV1KLte.js";
import { J as d, U as f, o as p, r as m, t as h } from "./use-navigate-with-base-path-CjM3S5Z7.js";
import { E as g, I as _, L as v, T as y, Y as b, Z as ee, a as x, c as S, i as C, q as w, s as T } from "./use-activity-pub-queries-C5sHP1nj.js";
import { $ as E, A as D, B as O, C as te, D as ne, E as k, F as A, G as j, H as M, I as N, J as re, K as ie, L as P, M as ae, N as F, R as oe, U as se, V as I, W as ce, X as le, a as ue, c as L, ct as R, dt as de, et as fe, g as z, i as pe, k as B, mt as me, n as V, q as he, r as ge, tt as _e, z as H } from "./routes-YnsvZ4ZW.js";
import { r as U } from "./x-Df_RdoAk.js";
import { c as ve, i as ye, l as W, o as be, p as xe, s as Se, u as G } from "./content-formatters-DdWZWlsa.js";
import { a as K, i as q, n as J, r as Ce, t as we } from "./tabs-D0_LDc1K.js";
import { t as Te } from "./copy-C52ugBus.js";
import { a as Ee, i as De } from "./avatar-BxanGW2x.js";
import { t as Oe } from "./settings-4-XmzSRd.js";
import { t as Y } from "./separator-CqYGFHQe.js";
import { t as ke } from "./edit-profile-Xn85jVLe.js";
import "./layout-DGSP79W3.js";
var Ae = p("pencil", [["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}], ["path", {
	d: "m15 5 4 4",
	key: "1mk7zo"
}]]), je = p("user-round-x", [
	["path", {
		d: "M2 21a8 8 0 0 1 11.873-7",
		key: "74fkxq"
	}],
	["circle", {
		cx: "10",
		cy: "8",
		r: "5",
		key: "o932ke"
	}],
	["path", {
		d: "m17 17 5 5",
		key: "p7ous7"
	}],
	["path", {
		d: "m22 17-5 5",
		key: "gqnmv0"
	}]
]);
//#endregion
//#region src/utils/get-name.ts
r();
function Me(e) {
	return typeof e.name == "string" ? e.name : typeof e.preferredUsername == "string" ? e.preferredUsername : typeof e.preferredUsername == "object" && e.preferredUsername !== null && "@value" in e.preferredUsername && typeof e.preferredUsername["@value"] == "string" ? e.preferredUsername["@value"] : "Unknown";
}
//#endregion
//#region src/views/profile/components/actor-list.tsx
var X = s(), Z = ({ noResultsMessage: e, actors: t, isLoading: r, fetchNextPage: i, hasNextPage: s, isFetchingNextPage: c }) => {
	let { data: l } = x("index", "me"), u = o(null), d = o(null);
	a(() => (u.current && u.current.disconnect(), u.current = new IntersectionObserver((e) => {
		e[0].isIntersecting && s && !c && i();
	}), d.current && u.current.observe(d.current), () => {
		u.current && u.current.disconnect();
	}), [
		s,
		c,
		i
	]);
	let f = h();
	return /* @__PURE__ */ (0, X.jsxs)("div", {
		className: "pt-3",
		"data-testid": "actor-list",
		children: [
			s === !1 && t.length === 0 ? /* @__PURE__ */ (0, X.jsxs)(B, { children: [/* @__PURE__ */ (0, X.jsx)(D, { children: /* @__PURE__ */ (0, X.jsx)(R, {}) }), e] }) : /* @__PURE__ */ (0, X.jsx)("div", {
				className: "flex flex-col",
				children: t.map(({ actor: e, isFollowing: t, blockedByMe: r, domainBlockedByMe: i }) => {
					let a = W(e), o = a === l?.handle;
					return /* @__PURE__ */ (0, X.jsx)(n.Fragment, { children: /* @__PURE__ */ (0, X.jsx)(k, {
						actor: e,
						align: "center",
						isCurrentUser: o,
						side: "left",
						children: /* @__PURE__ */ (0, X.jsx)("div", { children: /* @__PURE__ */ (0, X.jsxs)(L, {
							"data-testid": "actor-item",
							onClick: () => {
								te(e, f);
							},
							children: [
								/* @__PURE__ */ (0, X.jsx)(ve, { author: e }),
								/* @__PURE__ */ (0, X.jsx)("div", { children: /* @__PURE__ */ (0, X.jsxs)("div", {
									className: "break-anywhere text-gray-600",
									children: [/* @__PURE__ */ (0, X.jsx)("span", {
										className: "mr-1 line-clamp-1 font-bold text-black dark:text-white",
										children: Me(e)
									}), /* @__PURE__ */ (0, X.jsx)("div", {
										className: "line-clamp-1 text-sm",
										children: a
									})]
								}) }),
								r || i ? /* @__PURE__ */ (0, X.jsx)(m, {
									className: "pointer-events-none ml-auto min-w-[90px]",
									variant: "destructive",
									children: "Blocked"
								}) : o ? null : /* @__PURE__ */ (0, X.jsx)(ne, {
									className: "ml-auto",
									"data-testid": "follow-button",
									following: t,
									handle: a,
									type: "secondary"
								})
							]
						}, e.id) })
					}) }, e.id);
				})
			}),
			/* @__PURE__ */ (0, X.jsx)("div", {
				ref: d,
				className: "h-1"
			}),
			(c || r) && /* @__PURE__ */ (0, X.jsx)("div", {
				className: "mt-6 flex flex-col items-center justify-center gap-4 text-center",
				children: /* @__PURE__ */ (0, X.jsx)(F, { size: "md" })
			})
		]
	});
};
//#endregion
//#region src/views/profile/components/likes.tsx
r();
var Ne = ({ posts: e, fetchNextPage: t, hasNextPage: n, isFetchingNextPage: r, isLoading: i }) => {
	let s = o(null), c = o(null), l = o(null), u = Math.max(0, Math.floor(e.length * .75) - 1);
	a(() => (s.current && s.current.disconnect(), s.current = new IntersectionObserver((e) => {
		e[0].isIntersecting && n && !r && t();
	}), c.current && s.current.observe(c.current), l.current && s.current.observe(l.current), () => {
		s.current && s.current.disconnect();
	}), [
		n,
		r,
		t
	]);
	let d = h();
	return /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [
		n === !1 && e.length === 0 && /* @__PURE__ */ (0, X.jsxs)(B, { children: [/* @__PURE__ */ (0, X.jsx)(D, { children: /* @__PURE__ */ (0, X.jsx)(Ee, {}) }), "You haven't liked anything yet."] }),
		/* @__PURE__ */ (0, X.jsxs)("ul", {
			className: "mx-auto flex max-w-[640px] flex-col",
			"data-testid": "profile-likes-list",
			children: [e.map((t, n) => /* @__PURE__ */ (0, X.jsxs)("li", {
				"data-testid": "profile-like-item",
				"data-test-view-article": !0,
				children: [
					/* @__PURE__ */ (0, X.jsx)(z, {
						actor: t.actor,
						allowDelete: t.object.authored,
						commentCount: t.object.replyCount,
						isLoading: i,
						layout: "feed",
						likeCount: t.object.likeCount,
						object: t.object,
						repostCount: t.object.repostCount,
						type: t.type,
						onClick: () => {
							t.object.type === "Note" ? d(`/notes/${encodeURIComponent(t.object.id)}`) : t.object.type === "Article" && d(`/reader/${encodeURIComponent(t.object.id)}`);
						}
					}),
					n < e.length - 1 && /* @__PURE__ */ (0, X.jsx)(Y, {}),
					n === u && /* @__PURE__ */ (0, X.jsx)("div", {
						ref: c,
						className: "h-1"
					})
				]
			}, `likes-${t.id}`)), r && /* @__PURE__ */ (0, X.jsx)("li", {
				className: "flex flex-col items-center justify-center gap-4 text-center",
				children: /* @__PURE__ */ (0, X.jsx)(F, { size: "md" })
			})]
		}),
		/* @__PURE__ */ (0, X.jsx)("div", {
			ref: l,
			className: "h-1"
		})
	] });
};
//#endregion
//#region src/views/profile/components/posts.tsx
r();
var Q = ({ posts: e, fetchNextPage: t, hasNextPage: n, isFetchingNextPage: r, isLoading: i, noResultsMessage: s }) => {
	let c = o(null), l = o(null), u = o(null), d = Math.max(0, Math.floor(e.length * .75) - 1);
	a(() => (c.current && c.current.disconnect(), c.current = new IntersectionObserver((e) => {
		e[0].isIntersecting && n && !r && t();
	}), l.current && c.current.observe(l.current), u.current && c.current.observe(u.current), () => {
		c.current && c.current.disconnect();
	}), [
		n,
		r,
		t
	]);
	let f = h();
	return /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [
		n === !1 && e.length === 0 && /* @__PURE__ */ (0, X.jsxs)(B, { children: [/* @__PURE__ */ (0, X.jsx)(D, { children: /* @__PURE__ */ (0, X.jsx)(Ae, {}) }), s] }),
		/* @__PURE__ */ (0, X.jsxs)("ul", {
			className: "mx-auto flex max-w-[640px] flex-col",
			"data-testid": "profile-posts-list",
			children: [e.map((t, n) => /* @__PURE__ */ (0, X.jsxs)("li", {
				"data-testid": "profile-post-item",
				"data-test-view-article": !0,
				children: [
					/* @__PURE__ */ (0, X.jsx)(z, {
						actor: t.actor,
						allowDelete: t.object.authored,
						commentCount: t.object.replyCount,
						isLoading: i,
						layout: "feed",
						likeCount: t.object.likeCount,
						object: t.object,
						repostCount: t.object.repostCount,
						type: t.type,
						onClick: () => {
							t.object.type === "Note" ? f(`/notes/${encodeURIComponent(t.object.id)}`) : t.object.type === "Article" && f(`/reader/${encodeURIComponent(t.object.id)}`);
						}
					}),
					n < e.length - 1 && /* @__PURE__ */ (0, X.jsx)(Y, {}),
					n === d && /* @__PURE__ */ (0, X.jsx)("div", {
						ref: l,
						className: "h-1"
					})
				]
			}, `posts-${t.id}`)), r && /* @__PURE__ */ (0, X.jsx)("li", {
				className: "flex flex-col items-center justify-center gap-4 text-center",
				children: /* @__PURE__ */ (0, X.jsx)(F, { size: "md" })
			})]
		}),
		/* @__PURE__ */ (0, X.jsx)("div", {
			ref: u,
			className: "h-1"
		})
	] });
};
//#endregion
//#region src/views/profile/components/unblock-dialog.tsx
r();
var $ = ({ handle: e, isUserBlocked: n, isDomainBlocked: r, onUnblockUser: o, onUnblockDomain: s, trigger: c, onUnblockComplete: u, isOpen: d, onOpenChange: f }) => {
	let [p, h] = t(!1), [g, _] = t(() => {
		let e = n && r, t = n && !r, i = !n && r, a = "idle";
		return e ? a = "dual" : t ? a = "userOnly" : i && (a = "domainOnly"), {
			mode: a,
			userUnblocked: !1,
			domainUnblocked: !1
		};
	}), v = d !== void 0, y = v ? d : p, [b, x] = t(!1), S = i(() => {
		let e = n && r, t = n && !r, i = !n && r, a = "idle";
		e ? a = "dual" : t ? a = "userOnly" : i && (a = "domainOnly"), _((e) => ({
			...e,
			mode: a,
			userUnblocked: !1,
			domainUnblocked: !1
		}));
	}, [n, r]);
	a(() => {
		y && !b ? (S(), x(!0)) : y || x(!1);
	}, [
		y,
		b,
		S
	]);
	let C = () => {
		v ? f?.(!0) : h(!0);
	}, w = (e) => {
		e || (v ? f?.(!1) : h(!1));
	}, T = async () => {
		await o(), _((e) => ({
			...e,
			userUnblocked: !0
		})), (g.mode !== "dual" || g.domainUnblocked) && (w(!1), u?.()), l.success("User unblocked");
	}, E = async () => {
		await s(), _((e) => ({
			...e,
			domainUnblocked: !0
		})), (g.mode !== "dual" || g.userUnblocked) && (w(!1), u?.()), l.success("Domain unblocked");
	}, D = e.split("@").filter(Boolean)[1];
	return /* @__PURE__ */ (0, X.jsxs)(A, {
		open: y,
		onOpenChange: w,
		children: [c && /* @__PURE__ */ (0, X.jsx)(se, {
			asChild: !0,
			onClick: C,
			children: c
		}), /* @__PURE__ */ (0, X.jsx)(oe, {
			className: `${g.mode === "dual" && "max-w-[600px]"}`,
			children: g.mode === "dual" ? /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [/* @__PURE__ */ (0, X.jsxs)(I, { children: [/* @__PURE__ */ (0, X.jsx)(M, {
				className: "mb-1 flex flex-col gap-1",
				children: "Unblock"
			}), /* @__PURE__ */ (0, X.jsx)(H, {
				className: "mt-4!",
				asChild: !0,
				children: /* @__PURE__ */ (0, X.jsxs)("div", {
					className: "flex flex-col rounded-md border",
					children: [
						/* @__PURE__ */ (0, X.jsxs)("div", {
							className: "flex justify-between gap-6 p-5",
							children: [/* @__PURE__ */ (0, X.jsxs)("div", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, X.jsx)(ee, { children: "Unblock user" }), /* @__PURE__ */ (0, X.jsxs)("p", { children: [/* @__PURE__ */ (0, X.jsx)("span", {
									className: "font-semibold text-black",
									children: e
								}), " will be able to follow you and engage with your public posts."] })]
							}), /* @__PURE__ */ (0, X.jsxs)(m, {
								className: `gap-1 ${g.userUnblocked ? "pointer-events-none border-green bg-green text-white hover:bg-green hover:text-white" : "text-red hover:text-red-400"}`,
								variant: "outline",
								onClick: T,
								children: [/* @__PURE__ */ (0, X.jsx)(De, {}), g.userUnblocked ? "User unblocked" : "Unblock user"]
							})]
						}),
						/* @__PURE__ */ (0, X.jsx)("div", { className: "border-t" }),
						/* @__PURE__ */ (0, X.jsxs)("div", {
							className: "flex justify-between gap-6 p-5",
							children: [/* @__PURE__ */ (0, X.jsxs)("div", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, X.jsx)(ee, { children: "Unblock domain" }), /* @__PURE__ */ (0, X.jsxs)("p", { children: [
									"Users from ",
									/* @__PURE__ */ (0, X.jsx)("span", {
										className: "font-semibold text-black",
										children: D
									}),
									" will be able to follow you and engage with your public posts."
								] })]
							}), /* @__PURE__ */ (0, X.jsxs)(m, {
								className: `gap-1 ${g.domainUnblocked ? "pointer-events-none border-green bg-green text-white hover:bg-green hover:text-white" : "text-red hover:text-red-400"}`,
								variant: "outline",
								onClick: E,
								children: [/* @__PURE__ */ (0, X.jsx)(U, {}), g.domainUnblocked ? "Domain unblocked" : "Unblock domain"]
							})]
						})
					]
				})
			})] }), /* @__PURE__ */ (0, X.jsx)(O, { children: /* @__PURE__ */ (0, X.jsx)(m, {
				onClick: () => w(!1),
				children: "OK"
			}) })] }) : (() => {
				let t = g.mode === "userOnly";
				return /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [/* @__PURE__ */ (0, X.jsxs)(I, { children: [/* @__PURE__ */ (0, X.jsx)(M, {
					className: "mb-1 flex flex-col gap-1",
					children: t ? "Unblock this user?" : "Unblock this domain?"
				}), /* @__PURE__ */ (0, X.jsx)(H, { children: t ? /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [/* @__PURE__ */ (0, X.jsx)("span", {
					className: "font-semibold text-black",
					children: e
				}), " will be able to follow you and engage with your public posts."] }) : /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [
					"Users from ",
					/* @__PURE__ */ (0, X.jsx)("span", {
						className: "font-semibold text-black",
						children: D
					}),
					" will be able to follow you and engage with your public posts."
				] }) })] }), /* @__PURE__ */ (0, X.jsxs)(O, { children: [/* @__PURE__ */ (0, X.jsx)(P, { children: "Cancel" }), /* @__PURE__ */ (0, X.jsx)(m, {
					onClick: t ? T : E,
					children: "Unblock"
				})] })] });
			})()
		})]
	});
};
//#endregion
//#region src/views/profile/components/profile-menu.tsx
r();
var Pe = ({ account: e, children: n, onCopyHandle: r, onBlockAccount: i, onBlockDomain: a, disabled: o = !1, isBlocked: s = !1, isDomainBlocked: c = !1 }) => {
	let [l, u] = t(null), [d, f] = t(!1), p = (e) => {
		e.stopPropagation(), r();
	}, h = (e) => {
		e.stopPropagation(), i();
	}, g = (e) => {
		e.stopPropagation(), a();
	}, _ = e?.handle, v = _?.split("@").filter(Boolean)[1];
	return /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [/* @__PURE__ */ (0, X.jsxs)(ce, { children: [/* @__PURE__ */ (0, X.jsx)(he, {
		disabled: o,
		asChild: !0,
		onClick: (e) => e.stopPropagation(),
		children: n
	}), /* @__PURE__ */ (0, X.jsx)(ie, {
		align: "end",
		className: "p-2",
		children: /* @__PURE__ */ (0, X.jsxs)("div", {
			className: "flex w-48 flex-col",
			children: [/* @__PURE__ */ (0, X.jsx)(j, {
				asChild: !0,
				children: /* @__PURE__ */ (0, X.jsx)(m, {
					className: "justify-start",
					variant: "ghost",
					onClick: p,
					children: "Copy handle"
				})
			}), /* @__PURE__ */ (0, X.jsx)(j, {
				asChild: !0,
				children: /* @__PURE__ */ (0, X.jsx)(m, {
					className: "justify-start text-red hover:bg-red/5 hover:text-red",
					variant: "ghost",
					onClick: (e) => {
						e.stopPropagation(), !s && !c && u("user"), f(!0);
					},
					children: s ? "Unblock user" : c ? "Unblock domain" : "Block user"
				})
			})]
		})
	})] }), s || c ? e && /* @__PURE__ */ (0, X.jsx)($, {
		handle: e.handle,
		isDomainBlocked: e.domainBlockedByMe,
		isOpen: d,
		isUserBlocked: e.blockedByMe,
		onOpenChange: f,
		onUnblockDomain: a,
		onUnblockUser: i
	}) : /* @__PURE__ */ (0, X.jsx)(A, {
		open: d,
		onOpenChange: f,
		children: /* @__PURE__ */ (0, X.jsxs)(oe, {
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, X.jsxs)(I, { children: [/* @__PURE__ */ (0, X.jsx)(M, {
				className: "mb-1 flex flex-col gap-1",
				children: l === "user" ? "Block this user?" : "Block this domain?"
			}), /* @__PURE__ */ (0, X.jsx)(H, { children: l === "user" ? /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [/* @__PURE__ */ (0, X.jsx)("span", {
				className: "font-semibold text-black",
				children: _
			}), " will be able to see your public posts, but will no longer be able follow you or interact with your content on the social web."] }) : /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [
				"All users from ",
				/* @__PURE__ */ (0, X.jsx)("span", {
					className: "font-semibold text-black",
					children: v
				}),
				" will be able to see your public posts, but won't be able to follow you or interact with your content."
			] }) })] }), /* @__PURE__ */ (0, X.jsxs)(O, { children: [
				l !== "domain" && /* @__PURE__ */ (0, X.jsx)(m, {
					className: "mr-auto -ml-3 hover:bg-transparent hover:opacity-80",
					variant: "ghost",
					onClick: (e) => {
						e.stopPropagation(), u("domain");
					},
					children: "Block domain instead"
				}),
				/* @__PURE__ */ (0, X.jsx)(P, {
					onClick: (e) => e.stopPropagation(),
					children: "Cancel"
				}),
				/* @__PURE__ */ (0, X.jsx)(N, {
					variant: "destructive",
					onClick: l === "user" ? h : g,
					children: "Block"
				})
			] })]
		})
	})] });
};
//#endregion
//#region src/views/profile/components/unblock-button.tsx
r();
var Fe = ({ account: e, onUnblock: n, onDomainUnblock: r, className: i = "" }) => {
	let [a, o] = t(!1), s = /* @__PURE__ */ (0, X.jsx)(m, {
		className: `min-w-[90px] ${i}`,
		variant: "destructive",
		onMouseEnter: () => o(!0),
		onMouseLeave: () => o(!1),
		children: a ? "Unblock" : "Blocked"
	});
	return /* @__PURE__ */ (0, X.jsx)($, {
		handle: e.handle,
		isDomainBlocked: e.domainBlockedByMe,
		isUserBlocked: e.blockedByMe,
		trigger: s,
		onUnblockDomain: r,
		onUnblockUser: n
	});
};
//#endregion
//#region src/views/profile/components/profile-page.tsx
r();
var Ie = () => {}, Le = ({ account: n, customFields: r, isLoadingAccount: i, postsTab: s, likesTab: p, followingTab: g, followersTab: y }) => {
	let C = c(), w = u(), O = h(), { canGoBack: te } = d(), k = C.handle ? `/profile/${C.handle}` : "/profile", A = !C.handle, j = C.handle ? C.tab || "" : w.pathname.split("/").pop() || "", M = e(() => A ? [
		"likes",
		"following",
		"followers"
	] : ["following", "followers"], [A]), N = M.includes(j) ? j : "posts", ie = S("index"), P = v("index"), F = T("index"), oe = _("index"), se = x("index", "me"), { data: I } = C.handle ? se : { data: void 0 }, ce = C.handle === I?.handle || !C.handle, L = n?.blockedByMe, R = n?.domainBlockedByMe, [z, V] = t(!1), [he, H] = t(!1), U = o(null);
	a(() => () => {
		U.current && window.clearTimeout(U.current);
	}, []);
	let W = () => {
		L ? P.mutate(n) : (ie.mutate(n), l.success("User blocked")), V(!1);
	}, Ee = () => {
		R ? oe.mutate({
			url: n.apId,
			handle: n.handle
		}) : (F.mutate({
			url: n.apId,
			handle: n.handle
		}), l.success("Domain blocked")), V(!1);
	}, De = async () => {
		if (!n?.handle || !navigator?.clipboard?.writeText) {
			l.error("Unable to copy handle");
			return;
		}
		try {
			await navigator.clipboard.writeText(n.handle), H(!0), l.success("Handle copied"), U.current && window.clearTimeout(U.current), U.current = window.setTimeout(() => H(!1), 2e3);
		} catch {
			l.error("Failed to copy handle"), H(!1);
		}
	}, [Y, Ae] = t(!1), [Me, Z] = t(!1), Ne = () => {
		Ae(!Y);
	}, Q = o(null), [$, Le] = t(!1);
	a(() => {
		Q.current && Le(Q.current.scrollHeight > 160);
	}, [
		Y,
		n?.bio,
		r,
		i
	]), a(() => {
		j && (M.includes(j) || O(k, { replace: !0 }));
	}, [
		M,
		k,
		O,
		j
	]);
	let Re = (e) => e === "posts" ? k : `${k}/${e}`, ze = (e) => {
		e !== N && O(Re(e), { replace: !0 });
	};
	return !i && !n ? /* @__PURE__ */ (0, X.jsx)(ue, { children: /* @__PURE__ */ (0, X.jsx)("div", {
		className: "mx-auto mt-4 flex w-full max-w-[620px] flex-col items-center [&_svg]:translate-x-px",
		children: /* @__PURE__ */ (0, X.jsxs)(pe, { children: [/* @__PURE__ */ (0, X.jsx)(ge, { children: /* @__PURE__ */ (0, X.jsx)(je, {}) }), /* @__PURE__ */ (0, X.jsx)("div", { children: "Profile not found" })] })
	}) }) : /* @__PURE__ */ (0, X.jsx)(ue, { children: /* @__PURE__ */ (0, X.jsx)("div", {
		className: "z-0 pb-16",
		children: /* @__PURE__ */ (0, X.jsx)("div", {
			className: "mx-auto w-full",
			children: /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [n?.bannerImageUrl ? /* @__PURE__ */ (0, X.jsx)("div", {
				className: "h-[15vw] min-h-[200px] w-full overflow-hidden rounded-xl bg-surface-elevated",
				children: /* @__PURE__ */ (0, X.jsx)("img", {
					alt: n?.name,
					className: "size-full object-cover",
					referrerPolicy: "no-referrer",
					src: n?.bannerImageUrl
				})
			}) : /* @__PURE__ */ (0, X.jsx)("div", { className: "h-[max(8vw,132px)] w-full overflow-hidden bg-gradient-to-tr from-white to-white dark:from-black dark:to-black" }), /* @__PURE__ */ (0, X.jsxs)("div", {
				className: `mx-auto max-w-[620px] px-6 ${!n?.bannerImageUrl && !te ? "-mt-8" : "-mt-12"}`,
				children: [
					/* @__PURE__ */ (0, X.jsxs)("div", {
						className: "flex items-end justify-between",
						children: [
							/* @__PURE__ */ (0, X.jsx)("div", {
								className: "-ml-2 rounded-full bg-white p-1 dark:bg-background",
								children: i ? /* @__PURE__ */ (0, X.jsx)(G, { className: "size-[92px] rounded-full" }) : /* @__PURE__ */ (0, X.jsx)(ve, {
									author: {
										icon: { url: n?.avatarUrl },
										name: n?.name,
										handle: n?.handle
									},
									size: "lg"
								})
							}),
							!ce && !i && /* @__PURE__ */ (0, X.jsxs)("div", {
								className: "flex gap-2",
								children: [L || R ? /* @__PURE__ */ (0, X.jsx)(Fe, {
									account: n,
									onDomainUnblock: Ee,
									onUnblock: W
								}) : /* @__PURE__ */ (0, X.jsx)(ne, {
									following: n?.followedByMe,
									handle: n?.handle,
									type: "primary",
									onFollow: Ie,
									onUnfollow: Ie
								}), /* @__PURE__ */ (0, X.jsx)(Pe, {
									account: n,
									isBlocked: L,
									isDomainBlocked: R,
									onBlockAccount: W,
									onBlockDomain: Ee,
									onCopyHandle: De,
									children: /* @__PURE__ */ (0, X.jsx)(m, {
										"aria-label": "Open profile menu",
										variant: "outline",
										children: /* @__PURE__ */ (0, X.jsx)(de, {})
									})
								})]
							}),
							ce && !i && /* @__PURE__ */ (0, X.jsxs)(re, {
								open: Me,
								onOpenChange: Z,
								children: [/* @__PURE__ */ (0, X.jsx)(_e, { children: /* @__PURE__ */ (0, X.jsx)(Oe, { children: /* @__PURE__ */ (0, X.jsx)(m, {
									variant: "secondary",
									children: "Edit profile"
								}) }) }), /* @__PURE__ */ (0, X.jsxs)(le, {
									className: "w-full max-w-[520px]",
									onOpenAutoFocus: (e) => e.preventDefault(),
									children: [/* @__PURE__ */ (0, X.jsx)(E, { children: /* @__PURE__ */ (0, X.jsx)(fe, { children: "Profile settings" }) }), n && /* @__PURE__ */ (0, X.jsx)(ke, {
										account: n,
										setIsEditingProfile: Z
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, X.jsx)(b, {
						className: "break-anywhere mt-4 truncate",
						children: i ? /* @__PURE__ */ (0, X.jsx)(G, { className: "w-32" }) : n?.name
					}),
					/* @__PURE__ */ (0, X.jsxs)("div", {
						className: "mb-4 flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, X.jsx)("a", {
								className: "inline-flex max-w-full truncate text-[1.5rem] text-gray-800 hover:text-gray-900 dark:text-gray-600 dark:hover:text-gray-500",
								href: n?.url,
								rel: "noopener noreferrer",
								target: "_blank",
								children: /* @__PURE__ */ (0, X.jsx)("span", {
									className: "truncate",
									children: i ? /* @__PURE__ */ (0, X.jsx)(G, { className: "w-full max-w-56" }) : n?.handle
								})
							}),
							!i && /* @__PURE__ */ (0, X.jsx)(m, {
								className: "-ml-1.5 size-6 p-0 text-gray-800 hover:text-gray-900 dark:text-gray-700 dark:hover:text-gray-600",
								title: "Copy handle",
								variant: "link",
								onClick: De,
								children: he ? /* @__PURE__ */ (0, X.jsx)(xe, { size: 16 }) : /* @__PURE__ */ (0, X.jsx)(Te, { size: 16 })
							}),
							n?.followsMe && !i && /* @__PURE__ */ (0, X.jsx)(ae, {
								className: "mt-px whitespace-nowrap",
								variant: "secondary",
								children: "Follows you"
							})
						]
					}),
					(n?.bio || r?.length > 0) && /* @__PURE__ */ (0, X.jsxs)("div", {
						ref: Q,
						className: `ap-profile-content break-anywhere relative text-[1.5rem] [&>p]:mb-3 ${Y ? "max-h-none pb-7" : "max-h-[160px] overflow-hidden"} relative`,
						children: [
							i ? /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [/* @__PURE__ */ (0, X.jsx)(G, {}), /* @__PURE__ */ (0, X.jsx)(G, { className: "w-full max-w-48" })] }) : /* @__PURE__ */ (0, X.jsx)("div", { dangerouslySetInnerHTML: { __html: be(ye(Se(n?.bio ?? "", ["a", "br"]))) } }),
							r?.map((e) => /* @__PURE__ */ (0, X.jsxs)("span", {
								className: "mt-3 line-clamp-1 flex flex-col text-[1.5rem]",
								children: [/* @__PURE__ */ (0, X.jsx)("span", {
									className: "text-xs font-semibold",
									children: e.name
								}), /* @__PURE__ */ (0, X.jsx)("span", {
									dangerouslySetInnerHTML: { __html: be(e.value) },
									className: "ap-profile-content truncate"
								})]
							}, e.name)),
							!Y && $ && /* @__PURE__ */ (0, X.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/100 via-60% to-transparent dark:from-black dark:via-black/100" }),
							$ && /* @__PURE__ */ (0, X.jsx)(m, {
								className: "absolute bottom-0 h-auto p-0 text-md",
								variant: "link",
								onClick: Ne,
								children: Y ? "Show less" : "Show all"
							})
						]
					}),
					/* @__PURE__ */ (0, X.jsxs)(we, {
						className: "mt-5",
						value: N,
						variant: "underline",
						onValueChange: (e) => ze(e),
						children: [
							/* @__PURE__ */ (0, X.jsxs)(Ce, { children: [
								/* @__PURE__ */ (0, X.jsx)(q, {
									value: "posts",
									children: "Posts"
								}),
								A && /* @__PURE__ */ (0, X.jsxs)(q, {
									value: "likes",
									children: ["Likes", /* @__PURE__ */ (0, X.jsx)(K, { children: f(n?.likedCount || 0) })]
								}),
								/* @__PURE__ */ (0, X.jsxs)(q, {
									value: "following",
									children: ["Following", /* @__PURE__ */ (0, X.jsx)(K, { children: f(n?.followingCount || 0) })]
								}),
								/* @__PURE__ */ (0, X.jsxs)(q, {
									value: "followers",
									children: ["Followers", /* @__PURE__ */ (0, X.jsx)(K, { children: f(n?.followerCount || 0) })]
								})
							] }),
							/* @__PURE__ */ (0, X.jsx)(J, {
								value: "posts",
								children: (L || R) && !z ? /* @__PURE__ */ (0, X.jsxs)(B, { children: [/* @__PURE__ */ (0, X.jsx)(D, { children: /* @__PURE__ */ (0, X.jsx)(me, {}) }), /* @__PURE__ */ (0, X.jsxs)("div", {
									className: "mt-2 flex flex-col items-center gap-0.5",
									children: [
										/* @__PURE__ */ (0, X.jsxs)(ee, { children: [n.name, " is blocked"] }),
										/* @__PURE__ */ (0, X.jsx)("p", { children: "You can view the posts, but it won't unblock the user." }),
										/* @__PURE__ */ (0, X.jsx)(m, {
											className: "mt-4",
											variant: "secondary",
											onClick: () => V(!0),
											children: "View posts"
										})
									]
								})] }) : s
							}),
							A && /* @__PURE__ */ (0, X.jsx)(J, {
								value: "likes",
								children: p
							}),
							/* @__PURE__ */ (0, X.jsx)(J, {
								value: "following",
								children: g
							}),
							/* @__PURE__ */ (0, X.jsx)(J, {
								value: "followers",
								children: y
							})
						]
					}, C.handle || n?.handle || "current-user")
				]
			})] })
		})
	}) });
};
//#endregion
//#region src/views/profile/profile.tsx
r();
var Re = ({ handle: e }) => {
	let { postsByAccountQuery: t } = y(e || "me", { enabled: !0 }), { data: n, fetchNextPage: r, hasNextPage: i, isFetchingNextPage: a, isLoading: o } = t, s = n?.pages.flatMap((e) => e.posts) ?? Array.from({ length: 5 }, (e, t) => ({
		id: `placeholder-${t}`,
		object: {}
	}));
	return /* @__PURE__ */ (0, X.jsx)(Q, {
		fetchNextPage: r,
		hasNextPage: i,
		isFetchingNextPage: a,
		isLoading: o,
		noResultsMessage: e ? `${e} hasn't posted anything yet` : "You haven't posted anything yet.",
		posts: s
	});
}, ze = () => {
	let { postsLikedByAccountQuery: e } = g({ enabled: !0 }), { data: t, fetchNextPage: n, hasNextPage: r, isFetchingNextPage: i, isLoading: a } = e;
	return /* @__PURE__ */ (0, X.jsx)(Ne, {
		fetchNextPage: n,
		hasNextPage: r,
		isFetchingNextPage: i,
		isLoading: a,
		posts: t?.pages.flatMap((e) => e.posts) ?? Array.from({ length: 5 }, (e, t) => ({
			id: `placeholder-${t}`,
			object: {}
		}))
	});
}, Be = ({ handle: e }) => {
	let { data: t, fetchNextPage: n, hasNextPage: r, isFetchingNextPage: i, isLoading: a } = C(e === "" ? "me" : e, "following");
	return /* @__PURE__ */ (0, X.jsx)(Z, {
		actors: t?.pages.flatMap((e) => "following" in e ? e.following : "accounts" in e ? e.accounts.map((e) => ({
			actor: {
				id: e.id,
				name: e.name,
				handle: e.handle,
				icon: { url: e.avatarUrl }
			},
			isFollowing: e.isFollowing,
			blockedByMe: e.blockedByMe,
			domainBlockedByMe: e.domainBlockedByMe
		})) : []) ?? [],
		fetchNextPage: n,
		hasNextPage: r,
		isFetchingNextPage: i,
		isLoading: a,
		noResultsMessage: `${e || "You"} have no following`
	});
}, Ve = ({ handle: e }) => {
	let { data: t, fetchNextPage: n, hasNextPage: r, isFetchingNextPage: i, isLoading: a } = C(e === "" ? "me" : e, "followers");
	return /* @__PURE__ */ (0, X.jsx)(Z, {
		actors: t?.pages.flatMap((e) => "followers" in e ? e.followers : "accounts" in e ? e.accounts.map((e) => ({
			actor: {
				id: e.id,
				name: e.name,
				handle: e.handle,
				icon: { url: e.avatarUrl }
			},
			isFollowing: e.isFollowing
		})) : []) ?? [],
		fetchNextPage: n,
		hasNextPage: r,
		isFetchingNextPage: i,
		isLoading: a,
		noResultsMessage: `${e || "You"} have no followers yet`
	});
}, He = () => {
	let e = c(), { data: t, isLoading: n, error: r, refetch: i } = x("index", e.handle || "me");
	if (a(() => {
		i();
	}, [e.handle, i]), r && w(r) && r.statusCode !== 404) return /* @__PURE__ */ (0, X.jsx)(V, {
		errorCode: r.code,
		statusCode: r.statusCode
	});
	let o = Object.keys(t?.customFields || {}).map((e) => ({
		name: e,
		value: t.customFields[e]
	})) || [], s = /* @__PURE__ */ (0, X.jsx)(Re, { handle: e.handle || "" }), l = /* @__PURE__ */ (0, X.jsx)(ze, {}), u = /* @__PURE__ */ (0, X.jsx)(Be, { handle: e.handle || "" });
	return /* @__PURE__ */ (0, X.jsx)(Le, {
		account: t,
		customFields: o,
		followersTab: /* @__PURE__ */ (0, X.jsx)(Ve, { handle: e.handle || "" }),
		followingTab: u,
		isLoadingAccount: n,
		likesTab: l,
		postsTab: s
	});
};
//#endregion
export { He as default };

//# sourceMappingURL=profile-CVgzce43.js.map