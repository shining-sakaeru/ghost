import { S as e, T as t, d as n, u as r, v as i, w as a } from "./_react-D4KM8XEu.js";
import { C as o, m as s } from "./chunk-OB3PAWPO-CAV1KLte.js";
import { I as c, M as l, N as u, O as d, P as f, S as p, W as m, m as h, r as g, t as _ } from "./use-navigate-with-base-path-CjM3S5Z7.js";
import { D as v, H as y, I as b, L as x, Y as S, c as ee, l as C, s as te, u as ne } from "./use-activity-pub-queries-C5sHP1nj.js";
import { A as w, C as re, E as ie, a as ae, c as T, k as E, mt as D } from "./routes-YnsvZ4ZW.js";
import { c as oe, u as O } from "./content-formatters-DdWZWlsa.js";
import { i as k, n as A, r as j, t as M } from "./tabs-D0_LDc1K.js";
import { a as N, i as P, n as F, r as I, t as L } from "./settings-4-XmzSRd.js";
import "./layout-DGSP79W3.js";
//#region ../../node_modules/.pnpm/@radix-ui+react-use-previous@1.1.2_@types+react@18.3.31_react@18.3.1/node_modules/@radix-ui/react-use-previous/dist/index.mjs
n();
function R(t) {
	let n = a({
		value: t,
		previous: t
	});
	return e(() => (n.current.value !== t && (n.current.previous = n.current.value, n.current.value = t), n.current.previous), [t]);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-switch@1.3.2_@types+react-dom@18.3.7_@types+react@18.3.31__@types+react_5e1039ec98d0cadd458e3c758798817c/node_modules/@radix-ui/react-switch/dist/index.mjs
n();
var z = o(), B = "Switch", [V, se] = l(B), [H, U] = V(B);
function W(e) {
	let { __scopeSwitch: n, checked: r, children: i, defaultChecked: o, disabled: s, form: c, name: l, onCheckedChange: u, required: d, value: f = "on", internal_do_not_use_render: p } = e, [m, g] = h({
		prop: r,
		defaultProp: o ?? !1,
		onChange: u,
		caller: B
	}), [_, v] = t(null), [y, b] = t(null), x = {
		checked: m,
		setChecked: g,
		disabled: s,
		control: _,
		setControl: v,
		name: l,
		form: c,
		value: f,
		hasConsumerStoppedPropagationRef: a(!1),
		required: d,
		defaultChecked: o,
		isFormControl: _ ? !!c || !!_.closest("form") : !0,
		bubbleInput: y,
		setBubbleInput: b
	};
	return /* @__PURE__ */ (0, z.jsx)(H, {
		scope: n,
		...x,
		children: ce(p) ? p(x) : i
	});
}
var G = "SwitchTrigger", K = r(({ __scopeSwitch: e, onClick: t, ...n }, r) => {
	let { value: i, disabled: a, checked: o, required: s, setControl: c, setChecked: l, hasConsumerStoppedPropagationRef: p, isFormControl: m, bubbleInput: h } = U(G, e), g = u(r, c);
	return /* @__PURE__ */ (0, z.jsx)(d.button, {
		type: "button",
		role: "switch",
		"aria-checked": o,
		"aria-required": s,
		"data-state": Q(o),
		"data-disabled": a ? "" : void 0,
		disabled: a,
		value: i,
		...n,
		ref: g,
		onClick: f(t, (e) => {
			l((e) => !e), h && m && (p.current = e.isPropagationStopped(), p.current || e.stopPropagation());
		})
	});
});
K.displayName = G;
var q = r((e, t) => {
	let { __scopeSwitch: n, name: r, checked: i, defaultChecked: a, required: o, disabled: s, value: c, onCheckedChange: l, form: u, ...d } = e;
	return /* @__PURE__ */ (0, z.jsx)(W, {
		__scopeSwitch: n,
		checked: i,
		defaultChecked: a,
		disabled: s,
		required: o,
		onCheckedChange: l,
		name: r,
		form: u,
		value: c,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsx)(K, {
			...d,
			ref: t,
			__scopeSwitch: n
		}), e && /* @__PURE__ */ (0, z.jsx)(Z, { __scopeSwitch: n })] })
	});
});
q.displayName = B;
var J = "SwitchThumb", Y = r((e, t) => {
	let { __scopeSwitch: n, ...r } = e, i = U(J, n);
	return /* @__PURE__ */ (0, z.jsx)(d.span, {
		"data-state": Q(i.checked),
		"data-disabled": i.disabled ? "" : void 0,
		...r,
		ref: t
	});
});
Y.displayName = J;
var X = "SwitchBubbleInput", Z = r(({ __scopeSwitch: e, ...t }, n) => {
	let { control: r, hasConsumerStoppedPropagationRef: o, checked: s, defaultChecked: c, required: l, disabled: f, name: m, value: h, form: g, bubbleInput: _, setBubbleInput: v } = U(X, e), y = u(n, v), b = R(s), x = p(r);
	i(() => {
		let e = _;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "checked").set, r = !o.current;
		if (b !== s && n) {
			let t = new Event("click", { bubbles: r });
			n.call(e, s), e.dispatchEvent(t);
		}
	}, [
		_,
		b,
		s,
		o
	]);
	let S = a(s);
	return /* @__PURE__ */ (0, z.jsx)(d.input, {
		type: "checkbox",
		"aria-hidden": !0,
		defaultChecked: c ?? S.current,
		required: l,
		disabled: f,
		name: m,
		value: h,
		form: g,
		...t,
		tabIndex: -1,
		ref: y,
		style: {
			...t.style,
			...x,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0,
			transform: "translateX(-100%)"
		}
	});
});
Z.displayName = X;
function ce(e) {
	return typeof e == "function";
}
function Q(e) {
	return e ? "checked" : "unchecked";
}
//#endregion
//#region ../shade/es/components/ui/switch.js
n();
var le = c("peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=checked]:bg-green-500", {
	variants: { size: {
		default: "h-4 w-7",
		sm: "h-3 w-5"
	} },
	defaultVariants: { size: "default" }
}), ue = c("pointer-events-none block rounded-full bg-background ring-0 [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.07))] transition-transform data-[state=unchecked]:translate-x-0 dark:bg-white", {
	variants: { size: {
		default: "size-3 data-[state=checked]:translate-x-3",
		sm: "size-2 data-[state=checked]:translate-x-2"
	} },
	defaultVariants: { size: "default" }
}), $ = r(({ className: e, size: t, ...n }, r) => /* @__PURE__ */ (0, z.jsx)(q, {
	className: m(le({
		size: t,
		className: e
	})),
	...n,
	ref: r,
	children: /* @__PURE__ */ (0, z.jsx)(Y, { className: m(ue({ size: t })) })
}));
//#endregion
//#region src/views/preferences/components/moderation.tsx
$.displayName = q.displayName, n();
var de = () => {
	let { data: e, isLoading: n } = C("index"), { data: r, isLoading: i } = ne("index"), a = n ? [
		,
		,
		,
		,
		,
	].fill({
		apId: "",
		name: "",
		handle: "",
		avatarUrl: ""
	}) : e?.pages.flatMap((e) => e.accounts) ?? [], o = i ? [
		,
		,
		,
		,
		,
	].fill({
		apId: "",
		name: ""
	}) : r?.pages.flatMap((e) => e.domains) ?? [], c = ee("index"), l = x("index"), [u, d] = t(/* @__PURE__ */ new Set()), f = te("index"), p = b("index"), [m, h] = t(/* @__PURE__ */ new Set()), [R, B] = t(null), V = _(), { data: se, isError: H, isLoading: U, isSuccess: W } = v(), G = y({ onError: () => {
		s.error("Could not update sensitive media preference.");
	} }), K = se?.showSensitiveMedia ?? !1, q = (e) => {
		W && G.mutate({ showSensitiveMedia: e });
	}, J = (e) => {
		d((t) => {
			let n = /* @__PURE__ */ new Set([...t]);
			return n.add(e.apId), n;
		}), l.mutate(e), s.success("User unblocked");
	}, Y = (e) => {
		d((t) => {
			let n = /* @__PURE__ */ new Set([...t]);
			return n.delete(e.apId), n;
		}), c.mutate(e), s.success("User blocked");
	}, X = (e) => {
		h((t) => {
			let n = /* @__PURE__ */ new Set([...t]);
			return n.add(e.url), n;
		}), p.mutate({ url: e.url }), s.success("Domain unblocked");
	}, Z = (e) => {
		h((t) => {
			let n = /* @__PURE__ */ new Set([...t]);
			return n.delete(e.url), n;
		}), f.mutate({ url: e.url }), s.success("Domain blocked");
	};
	return /* @__PURE__ */ (0, z.jsx)(ae, { children: /* @__PURE__ */ (0, z.jsxs)("div", {
		className: "mx-auto max-w-[620px] py-[min(4vh,48px)]",
		children: [
			/* @__PURE__ */ (0, z.jsx)("div", {
				className: "flex items-center justify-between gap-8",
				children: /* @__PURE__ */ (0, z.jsx)(S, { children: "Moderation" })
			}),
			!H && /* @__PURE__ */ (0, z.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, z.jsxs)(P, { children: [/* @__PURE__ */ (0, z.jsxs)(I, { children: [/* @__PURE__ */ (0, z.jsx)(N, { children: "Show sensitive media" }), /* @__PURE__ */ (0, z.jsx)(F, { children: "Display adult content or media marked as sensitive without a warning" })] }), /* @__PURE__ */ (0, z.jsx)(L, { children: /* @__PURE__ */ (0, z.jsx)($, {
					"aria-label": "Show sensitive media",
					checked: K,
					disabled: U || !W,
					onCheckedChange: q
				}) })] })
			}),
			/* @__PURE__ */ (0, z.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, z.jsxs)(M, {
					defaultValue: "blocked_users",
					variant: "underline",
					children: [
						/* @__PURE__ */ (0, z.jsxs)(j, { children: [/* @__PURE__ */ (0, z.jsx)(k, {
							value: "blocked_users",
							children: "Blocked users"
						}), /* @__PURE__ */ (0, z.jsx)(k, {
							value: "blocked_domains",
							children: "Blocked domains"
						})] }),
						/* @__PURE__ */ (0, z.jsx)(A, {
							className: "mt-2",
							value: "blocked_users",
							children: !n && a.length === 0 ? /* @__PURE__ */ (0, z.jsxs)(E, { children: [/* @__PURE__ */ (0, z.jsx)(w, { children: /* @__PURE__ */ (0, z.jsx)(D, {}) }), /* @__PURE__ */ (0, z.jsx)("div", {
								className: "mt-2 flex max-w-[400px] flex-col items-center gap-1 text-center",
								children: /* @__PURE__ */ (0, z.jsx)("p", { children: "When you block someone, they won't be able to follow you or interact with your content on the social web." })
							})] }) : a.map((e, t) => /* @__PURE__ */ (0, z.jsx)(ie, {
								actor: e,
								isCurrentUser: !0,
								children: /* @__PURE__ */ (0, z.jsx)("div", { children: /* @__PURE__ */ (0, z.jsxs)(T, {
									onClick: n ? void 0 : () => re(e.handle, V),
									children: [
										/* @__PURE__ */ (0, z.jsx)(oe, { author: {
											icon: { url: e.avatarUrl },
											name: e.name,
											handle: e.handle
										} }),
										/* @__PURE__ */ (0, z.jsxs)("div", {
											className: "flex min-w-0  flex-col",
											children: [/* @__PURE__ */ (0, z.jsx)("span", {
												className: "block truncate font-semibold text-black dark:text-white",
												children: n ? /* @__PURE__ */ (0, z.jsx)(O, { className: "w-24" }) : e.name
											}), /* @__PURE__ */ (0, z.jsx)("span", {
												className: "block truncate text-sm text-gray-600",
												children: n ? /* @__PURE__ */ (0, z.jsx)(O, { className: "w-40" }) : e.handle
											})]
										}),
										u.has(e.apId) ? /* @__PURE__ */ (0, z.jsx)(g, {
											className: "ml-auto min-w-[90px] text-red hover:bg-red/5! hover:text-red-400",
											variant: "outline",
											onClick: (t) => {
												t.stopPropagation(), Y(e);
											},
											children: "Block"
										}) : n ? /* @__PURE__ */ (0, z.jsx)("div", {
											className: "ml-auto w-16",
											children: /* @__PURE__ */ (0, z.jsx)(O, {})
										}) : /* @__PURE__ */ (0, z.jsx)(g, {
											className: "ml-auto min-w-[90px]",
											variant: "destructive",
											onClick: (t) => {
												t.stopPropagation(), J(e);
											},
											onMouseEnter: () => B(e.apId),
											onMouseLeave: () => B(null),
											children: R === e.apId ? "Unblock" : "Blocked"
										})
									]
								}) })
							}, e.apId ? e.apId : `loading-${t}`))
						}),
						/* @__PURE__ */ (0, z.jsx)(A, {
							className: "mt-[11px]",
							value: "blocked_domains",
							children: !i && o.length === 0 ? /* @__PURE__ */ (0, z.jsxs)(E, { children: [/* @__PURE__ */ (0, z.jsx)(w, { children: /* @__PURE__ */ (0, z.jsx)(D, {}) }), /* @__PURE__ */ (0, z.jsx)("div", {
								className: "mt-2 flex max-w-[400px] flex-col items-center gap-1 text-center",
								children: /* @__PURE__ */ (0, z.jsx)("p", { children: "When you block a domain, all users from that domain won't be able to follow you or interact with your content." })
							})] }) : o.map((e, t) => /* @__PURE__ */ (0, z.jsxs)(T, { children: [/* @__PURE__ */ (0, z.jsx)("div", {
								className: "flex min-w-0 flex-col",
								children: /* @__PURE__ */ (0, z.jsx)("span", {
									className: "block truncate font-semibold text-black dark:text-white",
									children: i ? /* @__PURE__ */ (0, z.jsx)(O, { className: "w-48" }) : new URL(e.url).hostname
								})
							}), m.has(e.url) ? /* @__PURE__ */ (0, z.jsx)(g, {
								className: "ml-auto min-w-[90px] text-red hover:bg-red/5! hover:text-red-400",
								variant: "outline",
								onClick: () => Z(e),
								children: "Block"
							}) : i ? /* @__PURE__ */ (0, z.jsx)("div", {
								className: "ml-auto w-16",
								children: /* @__PURE__ */ (0, z.jsx)(O, {})
							}) : /* @__PURE__ */ (0, z.jsx)(g, {
								className: "ml-auto min-w-[90px]",
								variant: "destructive",
								onClick: () => X(e),
								onMouseEnter: () => B(e.url),
								onMouseLeave: () => B(null),
								children: R === e.url ? "Unblock" : "Blocked"
							})] }, e.url ? e.url : `loading-${t}`))
						})
					]
				})
			})
		]
	}) });
};
//#endregion
export { de as default };

//# sourceMappingURL=moderation-B6q8bK52.js.map