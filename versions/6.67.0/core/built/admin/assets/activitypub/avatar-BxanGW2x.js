import { T as e, d as t, u as n, v as r, w as i } from "./_react-D4KM8XEu.js";
import { C as a } from "./chunk-OB3PAWPO-CAV1KLte.js";
import { D as o, E as s, K as c, M as l, O as u, W as d, o as f } from "./use-navigate-with-base-path-CjM3S5Z7.js";
var p = f("heart", [["path", {
	d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
	key: "mvr1a0"
}]]), m = f("user", [["path", {
	d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
	key: "975kel"
}], ["circle", {
	cx: "12",
	cy: "7",
	r: "4",
	key: "17ys0d"
}]]);
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-avatar@1.2.1_@types+react-dom@18.3.7_@types+react@18.3.31__@types+react_618495bb42525b350fac96e721ad44e8/node_modules/@radix-ui/react-avatar/dist/index.mjs
t();
var h = a(), g = "Avatar", [_, v] = l(g), y = [0, () => void 0], [b, x] = _(g), S = n((t, n) => {
	let { __scopeAvatar: r, ...i } = t, [a, o] = e("idle"), [s, c] = k();
	return /* @__PURE__ */ (0, h.jsx)(b, {
		scope: r,
		imageLoadingStatus: a,
		setImageLoadingStatus: o,
		imageCount: s,
		setImageCount: c,
		children: /* @__PURE__ */ (0, h.jsx)(u.span, {
			...i,
			ref: n
		})
	});
});
S.displayName = g;
var C = "AvatarImage", w = n((e, t) => {
	let { __scopeAvatar: n, src: r, onLoadingStatusChange: a, ...c } = e, l = x(C, n);
	A(l.setImageCount);
	let d = D(r, {
		referrerPolicy: c.referrerPolicy,
		crossOrigin: c.crossOrigin,
		loadingStatus: l.imageLoadingStatus,
		setLoadingStatus: l.setImageLoadingStatus
	}), f = o((e) => {
		a?.(e);
	}), p = i(d);
	return s(() => {
		let e = p.current;
		p.current = d, d !== e && f(d);
	}, [d, f]), d === "loaded" ? /* @__PURE__ */ (0, h.jsx)(u.img, {
		...c,
		ref: t,
		src: r
	}) : null;
});
w.displayName = C;
var T = "AvatarFallback", E = n((t, n) => {
	let { __scopeAvatar: i, delayMs: a, ...o } = t, s = x(T, i), [c, l] = e(a === void 0);
	return r(() => {
		if (a !== void 0) {
			let e = window.setTimeout(() => l(!0), a);
			return () => window.clearTimeout(e);
		}
	}, [a]), c && s.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ (0, h.jsx)(u.span, {
		...o,
		ref: n
	}) : null;
});
E.displayName = T;
function D(e, { loadingStatus: t, setLoadingStatus: n, referrerPolicy: r, crossOrigin: i }) {
	return s(() => {
		if (!e) {
			n("error");
			return;
		}
		let t = new window.Image(), a = (e) => {
			let t = e.currentTarget;
			n(O(t));
		}, o = () => n("error");
		return t.addEventListener("load", a), t.addEventListener("error", o), r && (t.referrerPolicy = r), t.crossOrigin = i ?? null, t.src = e, n(O(t)), () => {
			t.removeEventListener("load", a), t.removeEventListener("error", o), n("idle");
		};
	}, [
		e,
		i,
		r,
		n
	]), t;
}
function O(e) {
	return e.complete ? e.naturalWidth > 0 ? "loaded" : "error" : "loading";
}
function k() {
	let t = y;
	{
		t = e(0);
		let [n] = t, a = i(!1);
		r(() => {
			n > 1 && !a.current && (a.current = !0, console.warn("Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior."));
		}, [n]);
	}
	return t;
}
function A(e) {
	r(() => (e((e) => e + 1), () => {
		e((e) => e - 1);
	}), [e]);
}
//#endregion
//#region ../shade/es/components/ui/avatar.js
t();
var j = n(({ className: e, ...t }, n) => /* @__PURE__ */ (0, h.jsx)(w, {
	ref: n,
	className: d("aspect-square size-full", e),
	...t
}));
j.displayName = w.displayName;
var M = n(({ className: e, ...t }, n) => /* @__PURE__ */ (0, h.jsx)(E, {
	ref: n,
	className: d("flex size-full items-center justify-center rounded-full bg-muted [&_svg]:size-4", e),
	...t
}));
M.displayName = E.displayName;
function N({ src: t }) {
	let [n, i] = e(!1);
	return r(() => {
		i(!1);
	}, [t]), /* @__PURE__ */ (0, h.jsx)("img", {
		alt: "",
		className: d("absolute inset-0 size-full object-cover", !n && "invisible"),
		src: t,
		onLoad: (e) => {
			let { naturalWidth: t, naturalHeight: n } = e.currentTarget;
			t > 1 && n > 1 && i(!0);
		}
	});
}
var P = n(({ className: e, children: t, src: n, initials: r, colorSeed: i, ...a }, o) => {
	let s = !!r, l = s ? c(i || r, "45", "55") : void 0;
	return /* @__PURE__ */ (0, h.jsx)(S, {
		ref: o,
		className: d("relative flex size-8 shrink-0 overflow-hidden rounded-full", e),
		...a,
		children: t ?? /* @__PURE__ */ (0, h.jsxs)(h.Fragment, { children: [/* @__PURE__ */ (0, h.jsx)(M, {
			className: d("text-xs text-muted-foreground md:text-sm [&_svg]:size-3 md:[&_svg]:size-4", s && "font-semibold text-white"),
			style: s ? { backgroundColor: l } : void 0,
			children: r ?? /* @__PURE__ */ (0, h.jsx)(m, {})
		}), n && /* @__PURE__ */ (0, h.jsx)(N, { src: n })] })
	});
});
P.displayName = S.displayName;
//#endregion
export { p as a, m as i, M as n, j as r, P as t };

//# sourceMappingURL=avatar-BxanGW2x.js.map