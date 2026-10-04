import { E as e, S as t, T as n, _ as r, c as i, d as a, g as o, v as s } from "./_react-D4KM8XEu.js";
import { A as c, B as l, C as u, D as d, E as f, F as p, H as m, I as h, L as g, M as _, N as v, O as y, P as b, R as x, S, T as ee, V as C, b as te, j as w, k as T, m as E, v as D, w as ne, x as re, y as ie, z as ae } from "./chunk-OB3PAWPO-CAV1KLte.js";
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.4/node_modules/@tanstack/query-core/build/modern/queryObserver.js
var oe = class extends m {
	constructor(e, t) {
		super(), this.options = t, this.#e = e, this.#s = null, this.#o = T(), this.bindMethods(), this.setOptions(t);
	}
	#e;
	#t = void 0;
	#n = void 0;
	#r = void 0;
	#i;
	#a;
	#o;
	#s;
	#c;
	#l;
	#u;
	#d;
	#f;
	#p;
	#m = /* @__PURE__ */ new Set();
	bindMethods() {
		this.refetch = this.refetch.bind(this);
	}
	onSubscribe() {
		this.listeners.size === 1 && (this.#t.addObserver(this), O(this.#t, this.options) ? this.#h() : this.updateResult(), this.#y());
	}
	onUnsubscribe() {
		this.hasListeners() || this.destroy();
	}
	shouldFetchOnReconnect() {
		return k(this.#t, this.options, this.options.refetchOnReconnect);
	}
	shouldFetchOnWindowFocus() {
		return k(this.#t, this.options, this.options.refetchOnWindowFocus);
	}
	destroy() {
		this.listeners = /* @__PURE__ */ new Set(), this.#b(), this.#x(), this.#t.removeObserver(this);
	}
	setOptions(e) {
		let t = this.options, n = this.#t;
		if (this.options = this.#e.defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof p(this.options.enabled, this.#t) != "boolean") throw Error("Expected enabled to be a boolean or a callback that returns a boolean");
		this.#S(), this.#t.setOptions(this.options), t._defaulted && !g(this.options, t) && this.#e.getQueryCache().notify({
			type: "observerOptionsUpdated",
			query: this.#t,
			observer: this
		});
		let r = this.hasListeners();
		r && A(this.#t, n, this.options, t) && this.#h(), this.updateResult(), r && (this.#t !== n || p(this.options.enabled, this.#t) !== p(t.enabled, this.#t) || h(this.options.staleTime, this.#t) !== h(t.staleTime, this.#t)) && this.#g();
		let i = this.#_();
		r && (this.#t !== n || p(this.options.enabled, this.#t) !== p(t.enabled, this.#t) || i !== this.#p) && this.#v(i);
	}
	getOptimisticResult(e) {
		let t = this.#e.getQueryCache().build(this.#e, e), n = this.createResult(t, e);
		return ce(this, n) && (this.#r = n, this.#a = this.options, this.#i = this.#t.state), n;
	}
	getCurrentResult() {
		return this.#r;
	}
	trackResult(e, t) {
		return new Proxy(e, { get: (e, n) => (this.trackProp(n), t?.(n), n === "promise" && (this.trackProp("data"), !this.options.experimental_prefetchInRender && this.#o.status === "pending" && this.#o.reject(/* @__PURE__ */ Error("experimental_prefetchInRender feature flag is not enabled"))), Reflect.get(e, n)) });
	}
	trackProp(e) {
		this.#m.add(e);
	}
	getCurrentQuery() {
		return this.#t;
	}
	refetch({ ...e } = {}) {
		return this.fetch({ ...e });
	}
	fetchOptimistic(e) {
		let t = this.#e.defaultQueryOptions(e), n = this.#e.getQueryCache().build(this.#e, t);
		return n.fetch().then(() => this.createResult(n, t));
	}
	fetch(e) {
		return this.#h({
			...e,
			cancelRefetch: e.cancelRefetch ?? !0
		}).then(() => (this.updateResult(), this.#r));
	}
	#h(e) {
		this.#S();
		let t = this.#t.fetch(this.options, e);
		return e?.throwOnError || (t = t.catch(v)), t;
	}
	#g() {
		this.#b();
		let e = h(this.options.staleTime, this.#t);
		if (c.isServer() || this.#r.isStale || !_(e)) return;
		let t = ae(this.#r.dataUpdatedAt, e) + 1;
		this.#d = l.setTimeout(() => {
			this.#r.isStale || this.updateResult();
		}, t);
	}
	#_() {
		return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.#t) : this.options.refetchInterval) ?? !1;
	}
	#v(e) {
		this.#x(), this.#p = e, !(c.isServer() || p(this.options.enabled, this.#t) === !1 || !_(this.#p) || this.#p === 0) && (this.#f = l.setInterval(() => {
			(this.options.refetchIntervalInBackground || C.isFocused()) && this.#h();
		}, this.#p));
	}
	#y() {
		this.#g(), this.#v(this.#_());
	}
	#b() {
		this.#d !== void 0 && (l.clearTimeout(this.#d), this.#d = void 0);
	}
	#x() {
		this.#f !== void 0 && (l.clearInterval(this.#f), this.#f = void 0);
	}
	createResult(e, t) {
		let n = this.#t, r = this.options, i = this.#r, a = this.#i, o = this.#a, s = e === n ? this.#n : e.state, { state: c } = e, l = { ...c }, u = !1, d;
		if (t._optimisticResults) {
			let i = this.hasListeners(), a = !i && O(e, t), o = i && A(e, n, t, r);
			(a || o) && (l = {
				...l,
				...ee(c.data, e.options)
			}), t._optimisticResults === "isRestoring" && (l.fetchStatus = "idle");
		}
		let { error: f, errorUpdatedAt: m, status: h } = l;
		d = l.data;
		let g = !1;
		if (t.placeholderData !== void 0 && d === void 0 && h === "pending") {
			let e;
			i?.isPlaceholderData && t.placeholderData === o?.placeholderData ? (e = i.data, g = !0) : e = typeof t.placeholderData == "function" ? t.placeholderData(this.#u?.state.data, this.#u) : t.placeholderData, e !== void 0 && (h = "success", d = b(i?.data, e, t), u = !0);
		}
		if (t.select && d !== void 0 && !g) if (i && d === a?.data && t.select === this.#c) d = this.#l;
		else try {
			this.#c = t.select, d = t.select(d), d = b(i?.data, d, t), this.#l = d, this.#s = null;
		} catch (e) {
			this.#s = e;
		}
		this.#s && (f = this.#s, d = this.#l, m = Date.now(), h = "error");
		let _ = l.fetchStatus === "fetching", v = h === "pending", y = h === "error", x = v && _, S = d !== void 0, C = {
			status: h,
			fetchStatus: l.fetchStatus,
			isPending: v,
			isSuccess: h === "success",
			isError: y,
			isInitialLoading: x,
			isLoading: x,
			data: d,
			dataUpdatedAt: l.dataUpdatedAt,
			error: f,
			errorUpdatedAt: m,
			failureCount: l.fetchFailureCount,
			failureReason: l.fetchFailureReason,
			errorUpdateCount: l.errorUpdateCount,
			isFetched: e.isFetched(),
			isFetchedAfterMount: l.dataUpdateCount > s.dataUpdateCount || l.errorUpdateCount > s.errorUpdateCount,
			isFetching: _,
			isRefetching: _ && !v,
			isLoadingError: y && !S,
			isPaused: l.fetchStatus === "paused",
			isPlaceholderData: u,
			isRefetchError: y && S,
			isStale: j(e, t),
			refetch: this.refetch,
			promise: this.#o,
			isEnabled: p(t.enabled, e) !== !1
		};
		if (this.options.experimental_prefetchInRender) {
			let t = C.data !== void 0, r = C.status === "error" && !t, i = (e) => {
				r ? e.reject(C.error) : t && e.resolve(C.data);
			}, a = () => {
				let e = this.#o = C.promise = T();
				i(e);
			}, o = this.#o;
			switch (o.status) {
				case "pending":
					e.queryHash === n.queryHash && i(o);
					break;
				case "fulfilled":
					(r || C.data !== o.value) && a();
					break;
				case "rejected":
					(!r || C.error !== o.reason) && a();
					break;
			}
		}
		return C;
	}
	updateResult() {
		let e = this.#r, t = this.createResult(this.#t, this.options);
		this.#i = this.#t.state, this.#a = this.options, this.#i.data !== void 0 && (this.#u = this.#t), !g(t, e) && (this.#r = t, this.#C({ listeners: (() => {
			if (!e) return !0;
			let { notifyOnChangeProps: t } = this.options, n = typeof t == "function" ? t() : t;
			if (n === "all" || !n && !this.#m.size) return !0;
			let r = new Set(n ?? this.#m);
			return this.options.throwOnError && r.add("error"), Object.keys(this.#r).some((t) => {
				let n = t;
				return this.#r[n] !== e[n] && r.has(n);
			});
		})() }));
	}
	#S() {
		let e = this.#e.getQueryCache().build(this.#e, this.options);
		if (e === this.#t) return;
		let t = this.#t;
		this.#t = e, this.#n = e.state, this.hasListeners() && (t?.removeObserver(this), e.addObserver(this));
	}
	onQueryUpdate() {
		this.updateResult(), this.hasListeners() && this.#y();
	}
	#C(e) {
		y.batch(() => {
			e.listeners && this.listeners.forEach((e) => {
				e(this.#r);
			}), this.#e.getQueryCache().notify({
				query: this.#t,
				type: "observerResultsUpdated"
			});
		});
	}
};
function se(e, t) {
	return p(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && p(t.retryOnMount, e) === !1);
}
function O(e, t) {
	return se(e, t) || e.state.data !== void 0 && k(e, t, t.refetchOnMount);
}
function k(e, t, n) {
	if (p(t.enabled, e) !== !1 && h(t.staleTime, e) !== "static") {
		let r = typeof n == "function" ? n(e) : n;
		return r === "always" || r !== !1 && j(e, t);
	}
	return !1;
}
function A(e, t, n, r) {
	return (e !== t || p(r.enabled, e) === !1) && (!n.suspense || e.state.status !== "error") && j(e, n);
}
function j(e, t) {
	return p(t.enabled, e) !== !1 && e.isStaleByTime(h(t.staleTime, e));
}
function ce(e, t) {
	return !g(e.getCurrentResult(), t);
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.4/node_modules/@tanstack/query-core/build/modern/infiniteQueryObserver.js
var le = class extends oe {
	constructor(e, t) {
		super(e, t);
	}
	bindMethods() {
		super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
	}
	setOptions(e) {
		e._type = "infinite", super.setOptions(e);
	}
	getOptimisticResult(e) {
		return e._type = "infinite", super.getOptimisticResult(e);
	}
	fetchNextPage(e) {
		return this.fetch({
			...e,
			meta: { fetchMore: { direction: "forward" } }
		});
	}
	fetchPreviousPage(e) {
		return this.fetch({
			...e,
			meta: { fetchMore: { direction: "backward" } }
		});
	}
	createResult(e, t) {
		let { state: n } = e, r = super.createResult(e, t), { isFetching: i, isRefetching: a, isError: o, isRefetchError: s } = r, c = n.fetchMeta?.fetchMore?.direction, l = o && c === "forward", u = i && c === "forward", p = o && c === "backward", m = i && c === "backward";
		return {
			...r,
			fetchNextPage: this.fetchNextPage,
			fetchPreviousPage: this.fetchPreviousPage,
			hasNextPage: f(t, n.data),
			hasPreviousPage: d(t, n.data),
			isFetchNextPageError: l,
			isFetchingNextPage: u,
			isFetchPreviousPageError: p,
			isFetchingPreviousPage: m,
			isRefetchError: s && !l && !p,
			isRefetching: a && !u && !m
		};
	}
}, ue = class extends m {
	#e;
	#t = void 0;
	#n;
	#r;
	constructor(e, t) {
		super(), this.#e = e, this.setOptions(t), this.bindMethods(), this.#i();
	}
	bindMethods() {
		this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
	}
	setOptions(e) {
		let t = this.options;
		this.options = this.#e.defaultMutationOptions(e), g(this.options, t) || this.#e.getMutationCache().notify({
			type: "observerOptionsUpdated",
			mutation: this.#n,
			observer: this
		}), t?.mutationKey && this.options.mutationKey && w(t.mutationKey) !== w(this.options.mutationKey) ? this.reset() : this.#n?.state.status === "pending" && this.#n.setOptions(this.options);
	}
	onUnsubscribe() {
		this.hasListeners() || this.#n?.removeObserver(this);
	}
	onMutationUpdate(e) {
		this.#i(), this.#a(e);
	}
	getCurrentResult() {
		return this.#t;
	}
	reset() {
		this.#n?.removeObserver(this), this.#n = void 0, this.#i(), this.#a();
	}
	mutate(e, t) {
		return this.#r = t, this.#n?.removeObserver(this), this.#n = this.#e.getMutationCache().build(this.#e, this.options), this.#n.addObserver(this), this.#n.execute(e);
	}
	#i() {
		let e = this.#n?.state ?? ne();
		this.#t = {
			...e,
			isPending: e.status === "pending",
			isSuccess: e.status === "success",
			isError: e.status === "error",
			isIdle: e.status === "idle",
			mutate: this.mutate,
			reset: this.reset
		};
	}
	#a(e) {
		y.batch(() => {
			if (this.#r && this.hasListeners()) {
				let t = this.#t.variables, n = this.#t.context, r = {
					client: this.#e,
					meta: this.options.meta,
					mutationKey: this.options.mutationKey
				};
				if (e?.type === "success") {
					try {
						this.#r.onSuccess?.(e.data, t, n, r);
					} catch (e) {
						Promise.reject(e);
					}
					try {
						this.#r.onSettled?.(e.data, null, t, n, r);
					} catch (e) {
						Promise.reject(e);
					}
				} else if (e?.type === "error") {
					try {
						this.#r.onError?.(e.error, t, n, r);
					} catch (e) {
						Promise.reject(e);
					}
					try {
						this.#r.onSettled?.(void 0, e.error, t, n, r);
					} catch (e) {
						Promise.reject(e);
					}
				}
			}
			this.listeners.forEach((e) => {
				e(this.#t);
			});
		});
	}
};
u(), a();
var M = i(!1), de = () => r(M);
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+react-query@5.101.4_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js
M.Provider, a();
function fe() {
	let e = !1;
	return {
		clearReset: () => {
			e = !1;
		},
		reset: () => {
			e = !0;
		},
		isReset: () => e
	};
}
var pe = i(fe()), me = () => r(pe);
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+react-query@5.101.4_react@18.3.1/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js
a();
var he = (e, t, n) => {
	let r = n?.state.error && typeof e.throwOnError == "function" ? x(e.throwOnError, [n.state.error, n]) : e.throwOnError;
	(e.suspense || e.experimental_prefetchInRender || r) && (t.isReset() || (e.retryOnMount = !1));
}, ge = (e) => {
	s(() => {
		e.clearReset();
	}, [e]);
}, _e = ({ result: e, errorResetBoundary: t, throwOnError: n, query: r, suspense: i }) => e.isError && !t.isReset() && !e.isFetching && r && (i && e.data === void 0 || x(n, [e.error, r])), ve = (e) => {
	if (e.suspense) {
		let t = 1e3, n = (e) => e === "static" ? e : Math.max(e ?? t, t), r = e.staleTime;
		e.staleTime = typeof r == "function" ? (...e) => n(r(...e)) : n(r), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, t));
	}
}, ye = (e, t) => e.isLoading && e.isFetching && !t, be = (e, t) => e?.suspense && t.isPending, N = (e, t, n) => t.fetchOptimistic(e).catch(() => {
	n.clearReset();
});
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+react-query@5.101.4_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js
a();
function P(t, r, i) {
	let a = de(), l = me(), u = S(i), d = u.defaultQueryOptions(t);
	u.getDefaultOptions().queries?._experimental_beforeQuery?.(d);
	let f = u.getQueryCache().get(d.queryHash), p = t.subscribed !== !1;
	d._optimisticResults = a ? "isRestoring" : p ? "optimistic" : void 0, ve(d), he(d, l, f), ge(l);
	let m = !u.getQueryCache().get(d.queryHash), [h] = n(() => new r(u, d)), g = h.getOptimisticResult(d), _ = !a && p;
	if (e(o((e) => {
		let t = _ ? h.subscribe(y.batchCalls(e)) : v;
		return h.updateResult(), t;
	}, [h, _]), () => h.getCurrentResult(), () => h.getCurrentResult()), s(() => {
		h.setOptions(d);
	}, [d, h]), be(d, g)) throw N(d, h, l);
	if (_e({
		result: g,
		errorResetBoundary: l,
		throwOnError: d.throwOnError,
		query: f,
		suspense: d.suspense
	})) throw g.error;
	return u.getDefaultOptions().queries?._experimental_afterQuery?.(d, g), d.experimental_prefetchInRender && !c.isServer() && ye(g, a) && (m ? N(d, h, l) : f?.promise)?.catch(v).finally(() => {
		h.updateResult();
	}), d.notifyOnChangeProps ? g : h.trackResult(g);
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+react-query@5.101.4_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
function F(e, t) {
	return P(e, oe, t);
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+react-query@5.101.4_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useMutation.js
a();
function I(t, r) {
	let i = S(r), [a] = n(() => new ue(i, t));
	s(() => {
		a.setOptions(t);
	}, [a, t]);
	let c = e(o((e) => a.subscribe(y.batchCalls(e)), [a]), () => a.getCurrentResult(), () => a.getCurrentResult()), l = o((e, t) => {
		a.mutate(e, t).catch(v);
	}, [a]);
	if (c.error && x(a.options.throwOnError, [c.error])) throw c.error;
	return {
		...c,
		mutate: l,
		mutateAsync: c.mutate
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+react-query@5.101.4_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js
function L(e, t) {
	return P(e, le, t);
}
//#endregion
//#region ../admin-x-framework/dist/utils/errors.js
var R = class extends Error {
	response;
	data;
	constructor(e, t, n, r) {
		!n && e && e.url.includes("/ghost/api/admin/") && (n = `Something went wrong while loading ${e.url.replace(/.+\/ghost\/api\/admin\//, "").replace(/\W.*/, "").replace("_", " ")}, please try again.`), super(n || "Something went wrong, please try again.", r), this.response = e, this.data = t;
	}
}, z = class extends R {
	data;
	constructor(e, t, n, r) {
		super(e, t, n, r), this.data = t;
	}
}, xe = class extends z {
	constructor(e, t, n) {
		super(e, t, "API server is running a newer version of Ghost, please upgrade.", n);
	}
}, B = class extends R {
	constructor(e) {
		super(void 0, void 0, "Something went wrong, please try again.", e);
	}
}, Se = class extends R {
	constructor(e) {
		super(void 0, void 0, "Request timed out, please try again.", e);
	}
}, Ce = class extends R {
	constructor(e, t, n) {
		super(e, t, "Request is larger than the maximum file size the server allows", n);
	}
}, we = class extends R {
	constructor(e, t, n) {
		super(e, t, "Request contains an unknown or unsupported file type.", n);
	}
}, V = class extends R {
	constructor(e, t, n) {
		super(e, t, "Ghost is currently undergoing maintenance, please wait a moment then retry.", n);
	}
}, H = class extends R {
	constructor(e, t, n) {
		super(e, t, "You are not authorised to make this request.", n);
	}
}, U = class extends H {}, Te = class extends z {
	constructor(e, t, n) {
		super(e, t, "Theme is not compatible or contains errors.", n);
	}
}, Ee = class extends z {
	errorDetails;
	constructor(e, t, n) {
		e instanceof Response ? super(e, t, "A hosting plan limit was reached or exceeded.", n) : (super(void 0, void 0, e.message || "A hosting plan limit was reached or exceeded."), this.errorDetails = e.errorDetails);
	}
}, De = class extends z {
	constructor(e, t, n) {
		super(e, t, "Please verify your email settings", n);
	}
}, Oe = class extends z {
	constructor(e, t, n) {
		super(e, t, t.errors[0].message, n);
	}
};
function ke(e, t) {
	let n = e instanceof z ? e.data?.errors?.[0] : void 0;
	return n?.context || n?.message || t;
}
//#endregion
//#region ../admin-x-framework/dist/hooks/use-handle-error.js
a();
function W(e) {
	E.dismiss(), E.error(e);
}
var G = () => {
	let { sentryDSN: e } = D();
	return o((t, { withToast: n = !0 } = {}) => {
		if (console.error(t), e && !(t instanceof U) && re((e) => {
			t instanceof R && t.response && (e.setTag("api_url", t.response.url), e.setTag("api_response_status", t.response.status)), ie(t);
		}), n) if (t instanceof R && t.response?.status === 418) E.dismiss();
		else if (t instanceof U) return;
		else t instanceof R ? W(ke(t, t.message)) : W("Something went wrong, please try again.");
	}, [e]);
}, Ae = [
	/^\/signin\/?$/,
	/^\/signin\/verify\/?$/,
	/^\/signout\/?$/,
	/^\/signup\/[^/]+\/?$/,
	/^\/reset\/[^/]+\/?$/,
	/^\/setup\/?$/
];
function je(e) {
	let [t] = e.split("?");
	return Ae.some((e) => e.test(t));
}
//#endregion
//#region ../admin-x-framework/dist/utils/helpers.js
function K() {
	let e = window.location.pathname, t = e.substr(0, e.search("/ghost/"));
	return {
		subdir: t,
		adminRoot: `${t}/ghost/`,
		assetRoot: `${t}/ghost/assets/`,
		apiRoot: `${t}/ghost/api/admin`
	};
}
//#endregion
//#region ../admin-x-framework/dist/utils/api/handle-response.js
var Me = (e) => !!e && (e.startsWith("text/") || e.includes("application/yaml")), Ne = async (e, { responseType: t } = {}) => {
	if (e.status === 0) throw new B();
	if (e.status === 503) throw new V(e, await e.text());
	if (e.status === 415) throw new we(e, await e.text());
	if (e.status === 413) throw new Ce(e, await e.text());
	if (e.status === 401) throw e.headers.get("content-type")?.includes("json") ? new H(e, await e.json()) : new H(e, await e.text());
	if (!e.ok) {
		if (!e.headers.get("content-type")?.includes("json")) throw new R(e, await e.text());
		let t = await e.json();
		throw e.status === 403 && t.errors?.[0]?.message === "Authorization failed" ? new H(e, t) : t.errors?.[0]?.type === "VersionMismatchError" ? new xe(e, t) : t.errors?.[0]?.type === "ValidationError" || t.errors?.[0]?.type === "NoPermissionError" ? new Oe(e, t) : t.errors?.[0]?.type === "ThemeValidationError" ? new Te(e, t) : t.errors?.[0]?.type === "HostLimitError" ? new Ee(e, t) : t.errors?.[0]?.type === "EmailError" ? new De(e, t) : new z(e, t);
	} else if (e.status === 204) return;
	else if (t === "blob") return await e.blob();
	else if (t === "arraybuffer") return await e.arrayBuffer();
	else if (Me(e.headers.get("content-type"))) return await e.text();
	else return await e.json();
};
//#endregion
//#region ../admin-x-framework/dist/utils/api/fetch-api.js
a();
var Pe = (e) => {
	let t = new Headers(), n = e.getAllResponseHeaders()?.split("\r\n") || [];
	for (let e of n) {
		let n = e.indexOf(":");
		if (n === -1) continue;
		let r = e.slice(0, n), i = e.slice(n + 1).trim();
		t.append(r, i);
	}
	return t;
}, Fe = (e) => new Response(e.response, {
	status: e.status,
	statusText: e.statusText,
	headers: Pe(e)
}), Ie = /\/ghost\/api\//, Le = /\/ghost\/api\/admin\/session([/?#]|$)/, Re = /\/ghost\/api\/admin\/users\/me\/([?#]|$)/, q = !1, J = !1, ze = (e) => window.location.pathname === e && (!window.location.hash || window.location.hash === "#/" || je(window.location.hash.slice(1))), Be = (e) => {
	let t = e.toString();
	return Ie.test(t) && !Le.test(t);
}, Ve = () => {
	let { adminRoot: e } = K();
	q && !J && !ze(e) && (J = !0, window.location.replace(e));
}, He = (e, t, { method: n, headers: r, credentials: i, body: a, signal: o }) => new Promise((s, c) => {
	let l = () => {
		c(new DOMException("Aborted", "AbortError"));
	};
	if (o.aborted) {
		l();
		return;
	}
	let u = new XMLHttpRequest();
	switch (u.open(n, t.toString(), !0), i) {
		case "omit": throw Error("\"omit\" credentials cannot be represented with legacy XMLHttpRequest. Consider \"same-origin\".");
		case "same-origin":
			u.withCredentials = !1;
			break;
		case "include":
			u.withCredentials = !0;
			break;
		default: throw Error(i);
	}
	u.responseType = "arraybuffer";
	for (let [e, t] of Object.entries(r)) u.setRequestHeader(e, t);
	u.upload.onprogress = (t) => {
		t.lengthComputable && e(t.loaded / t.total * 100);
	}, u.onload = () => {
		s(Fe(u));
	}, u.onerror = () => {
		c(/* @__PURE__ */ TypeError("Network request failed"));
	}, u.onabort = l;
	let d = () => u.abort();
	o.addEventListener("abort", d), u.onloadend = () => {
		o.removeEventListener("abort", d);
	}, u.send(a);
}), Y = () => {
	let { ghostVersion: e, sentryDSN: t } = D();
	return o(async (n, { method: r = "GET", headers: i = {}, body: a, credentials: o = "include", timeout: s, retry: c = !0, responseType: l, sessionExpiryRedirect: u = !0, onUploadProgress: d } = {}) => {
		let f = new AbortController(), p = {
			method: r,
			headers: {
				"app-pragma": "no-cache",
				...e ? { "x-ghost-version": e } : {},
				...typeof a == "string" ? { "content-type": "application/json" } : {},
				...i
			},
			credentials: o,
			mode: "cors",
			body: a,
			signal: f.signal
		}, m = 0, h = 0, g = Date.now(), _ = [500, 1e3], v = [
			B,
			V,
			TypeError
		], y = (e, t) => {
			let r = {
				errorName: e?.name,
				attempts: m,
				totalSeconds: h / 1e3,
				endpoint: n.toString()
			};
			return n.toString().includes("/ghost/api/") && (r.server = t?.headers.get("server")), r;
		}, b = d ? He.bind(null, d) : fetch, x = s ? setTimeout(() => f.abort(), s) : void 0;
		try {
			for (; m === 0 || c;) try {
				let e = await Ne(await b(n, p), { responseType: l });
				return Re.test(n.toString()) && (q = !0), e;
			} catch (e) {
				if (h = Date.now() - g, c && v.some((t) => e instanceof t) && h <= 15e3) {
					await new Promise((e) => {
						setTimeout(e, _[m] || _[_.length - 1]);
					}), m += 1;
					continue;
				}
				if (m !== 0 && t && te("Request failed after multiple attempts", { extra: y() }), e && typeof e == "object" && "name" in e && e.name === "AbortError") throw new Se();
				if (e instanceof H && Be(n)) throw u && Ve(), new U(e.response, e.data, { cause: e });
				let r = e;
				throw e instanceof R || (r = new B({ cause: e })), r;
			}
		} finally {
			clearTimeout(x);
		}
	}, [e, t]);
}, { apiRoot: Ue } = K(), X = (e, t = {}) => {
	let n = new URL(`${Ue}${e}`, window.location.origin);
	return n.search = new URLSearchParams(t).toString(), n.toString();
};
//#endregion
//#region ../admin-x-framework/dist/api/current-user.js
a();
var We = "UsersResponseType", Ge = X("/users/me/", { include: "roles" }), Ke = [We, Ge], qe = ({ requestOptions: e } = {}) => {
	let t = Y(), n = G(), r = F({
		queryKey: Ke,
		queryFn: () => t(Ge, e),
		select: (e) => e.users[0],
		retryOnMount: !1
	});
	return s(() => {
		r.error && n(r.error);
	}, [n, r.error]), r;
}, Je = (e, t) => {
	let { data: n } = qe(t);
	if (!e || e.length === 0) return !0;
	let r = n?.roles.map((e) => e.name);
	return r ? e.some((e) => r.includes(e)) : !1;
};
//#endregion
//#region ../admin-x-framework/dist/utils/api/hooks.js
a();
var Ye = (e) => ({ searchParams: n, requestOptions: r, ...i } = {}) => {
	let a = X(e.path, n || e.defaultSearchParams), o = Y(), c = G(), l = Je(e.permissions, { requestOptions: r }), u = F({
		...i,
		enabled: l && (i.enabled ?? !0),
		queryKey: [e.dataType, a],
		queryFn: async () => {
			if (e.parseResponse) {
				let t = await o(a, {
					headers: e.headers,
					...r
				});
				return e.parseResponse(t);
			}
			return o(a, {
				headers: e.headers,
				...r
			});
		}
	}), d = t(() => u.data && e.returnData ? e.returnData(u.data) : u.data, [u.data]);
	return s(() => {
		u.error && i.defaultErrorHandler !== !1 && c(u.error);
	}, [
		c,
		u.error,
		i.defaultErrorHandler
	]), {
		...u,
		data: d
	};
}, Xe = (e) => ({ searchParams: n, requestOptions: r, getNextPageParams: i, ...a } = {}) => {
	let o = Y(), c = G(), l = Je(e.permissions, { requestOptions: r }), u = i || e.defaultNextPageParams || (() => ({})), d = L({
		...a,
		enabled: l && (a.enabled ?? !0),
		queryKey: [e.dataType, X(e.path, n || e.defaultSearchParams)],
		queryFn: async ({ pageParam: t }) => {
			let i = X(e.path, t || n || e.defaultSearchParams);
			if (e.parseResponse) {
				let t = await o(i, {
					headers: e.headers,
					...r
				});
				return e.parseResponse(t);
			}
			return o(i, {
				headers: e.headers,
				...r
			});
		},
		initialPageParam: void 0,
		getNextPageParam: (t) => u(t, n || e.defaultSearchParams || {})
	}), f = t(() => d.data && e.returnData(d.data), [d.data]);
	return s(() => {
		d.error && a.defaultErrorHandler !== !1 && c(d.error);
	}, [
		c,
		d.error,
		a.defaultErrorHandler
	]), {
		...d,
		data: f
	};
}, Ze = ({ fetchApi: e, path: t, payload: n, searchParams: r, options: i }) => {
	let { defaultSearchParams: a, body: o, requestOptions: s, ...c } = i, l = X(t, r || a), u = n && o?.(n), d;
	return u instanceof FormData ? d = u : u && (d = JSON.stringify(u)), e(l, {
		body: d,
		...c,
		...n === void 0 ? {} : s?.(n)
	});
}, Z = ({ path: e, searchParams: t, defaultSearchParams: n, updateQueries: r, invalidateQueries: i, ...a }) => () => {
	let s = Y(), c = S(), { onUpdate: l, onInvalidate: u, onDelete: d } = D();
	return I({
		mutationFn: (r) => Ze({
			fetchApi: s,
			path: e(r),
			payload: r,
			searchParams: t?.(r) || n,
			options: a
		}),
		onSuccess: o((e, t) => {
			if (i && "dataType" in i) {
				let e = Array.isArray(i.dataType) ? i.dataType : [i.dataType];
				for (let t of e) c.invalidateQueries({ queryKey: [t] }), u(t);
			} else i && c.invalidateQueries(i.filters, i.options);
			if (r) {
				if (c.setQueriesData({ queryKey: [r.dataType] }, (n) => r.update(e, n, t)), r.emberUpdateType === "createOrUpdate") l(r.dataType, e);
				else if (r.emberUpdateType === "delete") {
					if (typeof t != "string") throw Error("Expected delete mutation to have a string (ID) payload. Either change the payload or update the createMutation hook");
					d(r.dataType, t);
				}
			}
		}, [
			u,
			l,
			d,
			c
		])
	});
}, Qe = (e) => typeof e == "object" && !!e && Array.isArray(e.pageParams), Q = (e, t) => (n, r) => {
	if (!r) return r;
	let i = (t || ((t) => t[e].reduce((e, t) => ({
		...e,
		[t.id]: t
	}), {})))(n);
	if (Qe(r)) {
		let { pages: t } = r;
		return {
			...r,
			pages: t.map((t) => ({
				...t,
				[e]: t[e].map((e) => i[e.id] || e)
			}))
		};
	}
	return {
		...r,
		[e]: r[e].map((e) => i[e.id] || e)
	};
}, $e = (e, t) => (n, r, i) => {
	if (!r) return r;
	let a = t?.(i) || [i];
	if (Qe(r)) {
		let { pages: t } = r;
		return {
			...r,
			pages: t.map((t) => ({
				...t,
				[e]: t[e].filter((e) => !a.includes(e.id))
			}))
		};
	}
	return {
		...r,
		[e]: r[e].filter((e) => !a.includes(e.id))
	};
}, $ = We, et = Xe({
	dataType: $,
	path: "/users/",
	defaultSearchParams: {
		limit: "100",
		include: "roles"
	},
	defaultNextPageParams: (e, t) => {
		if (e.meta?.pagination.next) return {
			...t,
			page: e.meta.pagination.next.toString()
		};
	},
	returnData: (e) => {
		let { pages: t } = e, n = t.flatMap((e) => e.users), r = t[t.length - 1].meta;
		return {
			users: n,
			meta: r,
			isEnd: r ? r.pagination.pages === r.pagination.page : !0
		};
	}
}), tt = Z({
	method: "PUT",
	path: (e) => `/users/${e.id}/`,
	body: (e) => ({ users: [e] }),
	searchParams: () => ({ include: "roles" }),
	updateQueries: {
		dataType: $,
		emberUpdateType: "createOrUpdate",
		update: Q("users")
	}
});
Z({
	method: "DELETE",
	path: (e) => `/users/${e}/`,
	updateQueries: {
		dataType: $,
		emberUpdateType: "delete",
		update: $e("users")
	}
}), Z({
	method: "PUT",
	path: () => "/users/password/",
	body: ({ newPassword: e, confirmNewPassword: t, userId: n, oldPassword: r }) => ({ password: [{
		user_id: n,
		oldPassword: r || "",
		newPassword: e,
		ne2Password: t
	}] })
}), Z({
	method: "PUT",
	path: () => "/users/owner/",
	body: (e) => ({ owner: [{ id: e }] }),
	updateQueries: {
		dataType: $,
		emberUpdateType: "createOrUpdate",
		update: Q("users")
	}
});
//#endregion
export { L as a, qe as i, tt as n, I as o, Ye as r, F as s, et as t };

//# sourceMappingURL=users-Bx10mcCX.js.map