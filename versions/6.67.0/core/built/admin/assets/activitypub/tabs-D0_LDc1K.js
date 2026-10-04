import { T as e, _ as t, c as n, d as r, g as i, r as a, u as o, v as s, w as c } from "./_react-D4KM8XEu.js";
import { C as l } from "./chunk-OB3PAWPO-CAV1KLte.js";
import { C as u, D as d, I as f, M as p, N as m, O as h, P as g, W as _, _ as ee, b as v, c as te, g as y, h as b, j as x, k as S, m as C, o as ne, p as re, v as ie, w as ae, x as w, y as oe } from "./use-navigate-with-base-path-CjM3S5Z7.js";
import { at as T, ft as se, ht as E, it as ce, ot as le, st as ue } from "./routes-YnsvZ4ZW.js";
import { p as D } from "./content-formatters-DdWZWlsa.js";
import { c as de, d as fe, l as O, s as k, u as A } from "./settings-4-XmzSRd.js";
var pe = ne("circle", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]);
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-menu@2.1.19_@types+react-dom@18.3.7_@types+react@18.3.31__@types+react@_4b5bcf394c29b5d4bc13e7a7b277eeb6/node_modules/@radix-ui/react-menu/dist/index.mjs
r();
var j = l(), M = ["Enter", " "], me = [
	"ArrowDown",
	"PageUp",
	"Home"
], he = [
	"ArrowUp",
	"PageDown",
	"End"
], ge = [...me, ...he], N = {
	ltr: [...M, "ArrowRight"],
	rtl: [...M, "ArrowLeft"]
}, _e = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, P = "Menu", [F, ve, ye] = fe(P), [I, be] = p(P, [
	ye,
	w,
	O
]), L = w(), xe = O(), [Se, R] = I(P), [Ce, z] = I(P), we = (t) => {
	let { __scopeMenu: n, open: r = !1, children: a, dir: o, onOpenChange: l, modal: u = !0 } = t, f = L(n), [p, m] = e(null), h = c(!1), g = d(l), _ = A(o);
	return s(() => {
		let e = () => {
			h.current = !0, document.addEventListener("pointerdown", t, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", t, {
				capture: !0,
				once: !0
			});
		}, t = () => h.current = !1;
		return document.addEventListener("keydown", e, { capture: !0 }), () => {
			document.removeEventListener("keydown", e, { capture: !0 }), document.removeEventListener("pointerdown", t, { capture: !0 }), document.removeEventListener("pointermove", t, { capture: !0 });
		};
	}, []), s(() => {
		if (!r) return;
		let e = () => g(!1);
		return window.addEventListener("blur", e), () => window.removeEventListener("blur", e);
	}, [r, g]), /* @__PURE__ */ (0, j.jsx)(v, {
		...f,
		children: /* @__PURE__ */ (0, j.jsx)(Se, {
			scope: n,
			open: r,
			onOpenChange: g,
			content: p,
			onContentChange: m,
			children: /* @__PURE__ */ (0, j.jsx)(Ce, {
				scope: n,
				onClose: i(() => g(!1), [g]),
				isUsingKeyboardRef: h,
				dir: _,
				modal: u,
				children: a
			})
		})
	});
};
we.displayName = P;
var Te = "MenuAnchor", B = o((e, t) => {
	let { __scopeMenu: n, ...r } = e, i = L(n);
	return /* @__PURE__ */ (0, j.jsx)(ee, {
		...i,
		...r,
		ref: t
	});
});
B.displayName = Te;
var V = "MenuPortal", [Ee, De] = I(V, { forceMount: void 0 }), Oe = (e) => {
	let { __scopeMenu: t, forceMount: n, children: r, container: i } = e, a = R(V, t);
	return /* @__PURE__ */ (0, j.jsx)(Ee, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ (0, j.jsx)(b, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, j.jsx)(y, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
Oe.displayName = V;
var H = "MenuContent", [ke, U] = I(H), Ae = o((e, t) => {
	let n = De(H, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = R(H, e.__scopeMenu), o = z(H, e.__scopeMenu);
	return /* @__PURE__ */ (0, j.jsx)(F.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ (0, j.jsx)(b, {
			present: r || a.open,
			children: /* @__PURE__ */ (0, j.jsx)(F.Slot, {
				scope: e.__scopeMenu,
				children: o.modal ? /* @__PURE__ */ (0, j.jsx)(je, {
					...i,
					ref: t
				}) : /* @__PURE__ */ (0, j.jsx)(Me, {
					...i,
					ref: t
				})
			})
		})
	});
}), je = o((e, t) => {
	let n = R(H, e.__scopeMenu), r = c(null), i = m(t, r);
	return s(() => {
		let e = r.current;
		if (e) return T(e);
	}, []), /* @__PURE__ */ (0, j.jsx)(W, {
		...e,
		ref: i,
		trapFocus: n.open,
		disableOutsidePointerEvents: n.open,
		disableOutsideScroll: !0,
		onFocusOutside: g(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => n.onOpenChange(!1)
	});
}), Me = o((e, t) => {
	let n = R(H, e.__scopeMenu);
	return /* @__PURE__ */ (0, j.jsx)(W, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => n.onOpenChange(!1)
	});
}), Ne = x("MenuContent.ScrollLock"), W = o((t, n) => {
	let { __scopeMenu: r, loop: o = !1, trapFocus: l, onOpenAutoFocus: u, onCloseAutoFocus: d, disableOutsidePointerEvents: f, onEntryFocus: p, onEscapeKeyDown: h, onPointerDownOutside: _, onFocusOutside: ee, onInteractOutside: v, onDismiss: te, disableOutsideScroll: y, ...b } = t, x = R(H, r), S = z(H, r), C = L(r), ne = xe(r), re = ve(r), [ie, w] = e(null), T = c(null), se = m(n, T, x.onContentChange), E = c(0), D = c(""), fe = c(0), O = c(null), k = c("right"), A = c(0), pe = y ? ce : a, M = y ? {
		as: Ne,
		allowPinchZoom: !0
	} : void 0, me = (e) => {
		let t = D.current + e, n = re().filter((e) => !e.disabled), r = document.activeElement, i = n.find((e) => e.ref.current === r)?.textValue, a = pt(n.map((e) => e.textValue), t, i), o = n.find((e) => e.textValue === a)?.ref.current;
		(function e(t) {
			D.current = t, window.clearTimeout(E.current), t !== "" && (E.current = window.setTimeout(() => e(""), 1e3));
		})(t), o && setTimeout(() => o.focus());
	};
	s(() => () => window.clearTimeout(E.current), []), ue();
	let N = i((e) => k.current === O.current?.side && ht(e, O.current?.area), []);
	return /* @__PURE__ */ (0, j.jsx)(ke, {
		scope: r,
		searchRef: D,
		onItemEnter: i((e) => {
			N(e) && e.preventDefault();
		}, [N]),
		onItemLeave: i((e) => {
			N(e) || (T.current?.focus(), w(null));
		}, [N]),
		onTriggerLeave: i((e) => {
			N(e) && e.preventDefault();
		}, [N]),
		pointerGraceTimerRef: fe,
		onPointerGraceIntentChange: i((e) => {
			O.current = e;
		}, []),
		children: /* @__PURE__ */ (0, j.jsx)(pe, {
			...M,
			children: /* @__PURE__ */ (0, j.jsx)(le, {
				asChild: !0,
				trapped: l,
				onMountAutoFocus: g(u, (e) => {
					e.preventDefault(), T.current?.focus({ preventScroll: !0 });
				}),
				onUnmountAutoFocus: d,
				children: /* @__PURE__ */ (0, j.jsx)(ae, {
					asChild: !0,
					disableOutsidePointerEvents: f,
					onEscapeKeyDown: h,
					onPointerDownOutside: _,
					onFocusOutside: ee,
					onInteractOutside: v,
					onDismiss: te,
					children: /* @__PURE__ */ (0, j.jsx)(de, {
						asChild: !0,
						...ne,
						dir: S.dir,
						orientation: "vertical",
						loop: o,
						currentTabStopId: ie,
						onCurrentTabStopIdChange: w,
						onEntryFocus: g(p, (e) => {
							S.isUsingKeyboardRef.current || e.preventDefault();
						}),
						preventScrollOnEntryFocus: !0,
						children: /* @__PURE__ */ (0, j.jsx)(oe, {
							role: "menu",
							"aria-orientation": "vertical",
							"data-state": lt(x.open),
							"data-radix-menu-content": "",
							dir: S.dir,
							...C,
							...b,
							ref: se,
							style: {
								outline: "none",
								...b.style
							},
							onKeyDown: g(b.onKeyDown, (e) => {
								let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget, n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1;
								t && (e.key === "Tab" && e.preventDefault(), !n && r && me(e.key));
								let i = T.current;
								if (e.target !== i || !ge.includes(e.key)) return;
								e.preventDefault();
								let a = re().filter((e) => !e.disabled).map((e) => e.ref.current);
								he.includes(e.key) && a.reverse(), dt(a);
							}),
							onBlur: g(t.onBlur, (e) => {
								e.currentTarget.contains(e.target) || (window.clearTimeout(E.current), D.current = "");
							}),
							onPointerMove: g(t.onPointerMove, Y((e) => {
								let t = e.target, n = A.current !== e.clientX;
								if (e.currentTarget.contains(t) && n) {
									let t = e.clientX > A.current ? "right" : "left";
									k.current = t, A.current = e.clientX;
								}
							}))
						})
					})
				})
			})
		})
	});
});
Ae.displayName = H;
var Pe = "MenuGroup", Fe = o((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ (0, j.jsx)(h.div, {
		role: "group",
		...r,
		ref: t
	});
});
Fe.displayName = Pe;
var Ie = "MenuLabel", Le = o((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ (0, j.jsx)(h.div, {
		...r,
		ref: t
	});
});
Le.displayName = Ie;
var G = "MenuItem", Re = "menu.itemSelect", K = o((e, t) => {
	let { disabled: n = !1, onSelect: r, ...i } = e, a = c(null), o = z(G, e.__scopeMenu), s = U(G, e.__scopeMenu), l = m(t, a), u = c(!1), d = () => {
		let e = a.current;
		if (!n && e) {
			let t = new CustomEvent(Re, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(Re, (e) => r?.(e), { once: !0 }), S(e, t), t.defaultPrevented ? u.current = !1 : o.onClose();
		}
	};
	return /* @__PURE__ */ (0, j.jsx)(ze, {
		...i,
		ref: l,
		disabled: n,
		onClick: g(e.onClick, d),
		onPointerDown: (t) => {
			e.onPointerDown?.(t), u.current = !0;
		},
		onPointerUp: g(e.onPointerUp, (e) => {
			u.current || e.currentTarget?.click();
		}),
		onKeyDown: g(e.onKeyDown, (e) => {
			let t = s.searchRef.current !== "";
			n || t && e.key === " " || M.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
});
K.displayName = G;
var ze = o((t, n) => {
	let { __scopeMenu: r, disabled: i = !1, textValue: a, ...o } = t, l = U(G, r), u = xe(r), d = c(null), f = m(n, d), [p, _] = e(!1), [ee, v] = e("");
	return s(() => {
		let e = d.current;
		e && v((e.textContent ?? "").trim());
	}, [o.children]), /* @__PURE__ */ (0, j.jsx)(F.ItemSlot, {
		scope: r,
		disabled: i,
		textValue: a ?? ee,
		children: /* @__PURE__ */ (0, j.jsx)(k, {
			asChild: !0,
			...u,
			focusable: !i,
			children: /* @__PURE__ */ (0, j.jsx)(h.div, {
				role: "menuitem",
				"data-highlighted": p ? "" : void 0,
				"aria-disabled": i || void 0,
				"data-disabled": i ? "" : void 0,
				...o,
				ref: f,
				onPointerMove: g(t.onPointerMove, Y((e) => {
					i ? l.onItemLeave(e) : (l.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: g(t.onPointerLeave, Y((e) => l.onItemLeave(e))),
				onFocus: g(t.onFocus, () => _(!0)),
				onBlur: g(t.onBlur, () => _(!1))
			})
		})
	});
}), Be = "MenuCheckboxItem", Ve = o((e, t) => {
	let { checked: n = !1, onCheckedChange: r, ...i } = e;
	return /* @__PURE__ */ (0, j.jsx)(Ye, {
		scope: e.__scopeMenu,
		checked: n,
		children: /* @__PURE__ */ (0, j.jsx)(K, {
			role: "menuitemcheckbox",
			"aria-checked": J(n) ? "mixed" : n,
			...i,
			ref: t,
			"data-state": ut(n),
			onSelect: g(i.onSelect, () => r?.(J(n) ? !0 : !n), { checkForDefaultPrevented: !1 })
		})
	});
});
Ve.displayName = Be;
var He = "MenuRadioGroup", [Ue, We] = I(He, {
	value: void 0,
	onValueChange: () => {}
}), Ge = o((e, t) => {
	let { value: n, onValueChange: r, ...i } = e, a = d(r);
	return /* @__PURE__ */ (0, j.jsx)(Ue, {
		scope: e.__scopeMenu,
		value: n,
		onValueChange: a,
		children: /* @__PURE__ */ (0, j.jsx)(Fe, {
			...i,
			ref: t
		})
	});
});
Ge.displayName = He;
var Ke = "MenuRadioItem", qe = o((e, t) => {
	let { value: n, ...r } = e, i = We(Ke, e.__scopeMenu), a = n === i.value;
	return /* @__PURE__ */ (0, j.jsx)(Ye, {
		scope: e.__scopeMenu,
		checked: a,
		children: /* @__PURE__ */ (0, j.jsx)(K, {
			role: "menuitemradio",
			"aria-checked": a,
			...r,
			ref: t,
			"data-state": ut(a),
			onSelect: g(r.onSelect, () => i.onValueChange?.(n), { checkForDefaultPrevented: !1 })
		})
	});
});
qe.displayName = Ke;
var Je = "MenuItemIndicator", [Ye, Xe] = I(Je, { checked: !1 }), Ze = o((e, t) => {
	let { __scopeMenu: n, forceMount: r, ...i } = e, a = Xe(Je, n);
	return /* @__PURE__ */ (0, j.jsx)(b, {
		present: r || J(a.checked) || a.checked === !0,
		children: /* @__PURE__ */ (0, j.jsx)(h.span, {
			...i,
			ref: t,
			"data-state": ut(a.checked)
		})
	});
});
Ze.displayName = Je;
var Qe = "MenuSeparator", $e = o((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ (0, j.jsx)(h.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...r,
		ref: t
	});
});
$e.displayName = Qe;
var et = "MenuArrow", tt = o((e, t) => {
	let { __scopeMenu: n, ...r } = e, i = L(n);
	return /* @__PURE__ */ (0, j.jsx)(ie, {
		...i,
		...r,
		ref: t
	});
});
tt.displayName = et;
var nt = "MenuSub", [rt, it] = I(nt), at = (t) => {
	let { __scopeMenu: n, children: r, open: i = !1, onOpenChange: a } = t, o = R(nt, n), c = L(n), [l, f] = e(null), [p, m] = e(null), h = d(a);
	return s(() => (o.open === !1 && h(!1), () => h(!1)), [o.open, h]), /* @__PURE__ */ (0, j.jsx)(v, {
		...c,
		children: /* @__PURE__ */ (0, j.jsx)(Se, {
			scope: n,
			open: i,
			onOpenChange: h,
			content: p,
			onContentChange: m,
			children: /* @__PURE__ */ (0, j.jsx)(rt, {
				scope: n,
				contentId: u(),
				triggerId: u(),
				trigger: l,
				onTriggerChange: f,
				children: r
			})
		})
	});
};
at.displayName = nt;
var q = "MenuSubTrigger", ot = o((e, t) => {
	let n = R(q, e.__scopeMenu), r = z(q, e.__scopeMenu), a = it(q, e.__scopeMenu), o = U(q, e.__scopeMenu), l = c(null), { pointerGraceTimerRef: u, onPointerGraceIntentChange: d } = o, f = { __scopeMenu: e.__scopeMenu }, p = i(() => {
		l.current && window.clearTimeout(l.current), l.current = null;
	}, []);
	s(() => p, [p]), s(() => {
		let e = u.current;
		return () => {
			window.clearTimeout(e), d(null);
		};
	}, [u, d]);
	let h = m(t, a.onTriggerChange);
	return /* @__PURE__ */ (0, j.jsx)(B, {
		asChild: !0,
		...f,
		children: /* @__PURE__ */ (0, j.jsx)(ze, {
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": n.open,
			"aria-controls": n.open ? a.contentId : void 0,
			"data-state": lt(n.open),
			...e,
			ref: h,
			onClick: (t) => {
				e.onClick?.(t), !(e.disabled || t.defaultPrevented) && (t.currentTarget.focus(), n.open || n.onOpenChange(!0));
			},
			onPointerMove: g(e.onPointerMove, Y((t) => {
				o.onItemEnter(t), !t.defaultPrevented && !e.disabled && !n.open && !l.current && (o.onPointerGraceIntentChange(null), l.current = window.setTimeout(() => {
					n.onOpenChange(!0), p();
				}, 100));
			})),
			onPointerLeave: g(e.onPointerLeave, Y((e) => {
				p();
				let t = n.content?.getBoundingClientRect();
				if (t) {
					let r = n.content?.dataset.side, i = r === "right", a = i ? -5 : 5, s = t[i ? "left" : "right"], c = t[i ? "right" : "left"];
					o.onPointerGraceIntentChange({
						area: [
							{
								x: e.clientX + a,
								y: e.clientY
							},
							{
								x: s,
								y: t.top
							},
							{
								x: c,
								y: t.top
							},
							{
								x: c,
								y: t.bottom
							},
							{
								x: s,
								y: t.bottom
							}
						],
						side: r
					}), window.clearTimeout(u.current), u.current = window.setTimeout(() => o.onPointerGraceIntentChange(null), 300);
				} else {
					if (o.onTriggerLeave(e), e.defaultPrevented) return;
					o.onPointerGraceIntentChange(null);
				}
			})),
			onKeyDown: g(e.onKeyDown, (t) => {
				let i = o.searchRef.current !== "";
				e.disabled || i && t.key === " " || N[r.dir].includes(t.key) && (n.onOpenChange(!0), n.content?.focus(), t.preventDefault());
			})
		})
	});
});
ot.displayName = q;
var st = "MenuSubContent", ct = o((e, t) => {
	let n = De(H, e.__scopeMenu), { forceMount: r = n.forceMount, align: i = "start", ...a } = e, o = R(H, e.__scopeMenu), s = z(H, e.__scopeMenu), l = it(st, e.__scopeMenu), u = c(null), d = m(t, u);
	return /* @__PURE__ */ (0, j.jsx)(F.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ (0, j.jsx)(b, {
			present: r || o.open,
			children: /* @__PURE__ */ (0, j.jsx)(F.Slot, {
				scope: e.__scopeMenu,
				children: /* @__PURE__ */ (0, j.jsx)(W, {
					id: l.contentId,
					"aria-labelledby": l.triggerId,
					...a,
					ref: d,
					align: i,
					side: s.dir === "rtl" ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (e) => {
						s.isUsingKeyboardRef.current && u.current?.focus(), e.preventDefault();
					},
					onCloseAutoFocus: (e) => e.preventDefault(),
					onFocusOutside: g(e.onFocusOutside, (e) => {
						e.target !== l.trigger && o.onOpenChange(!1);
					}),
					onEscapeKeyDown: g(e.onEscapeKeyDown, (e) => {
						s.onClose(), e.preventDefault();
					}),
					onKeyDown: g(e.onKeyDown, (e) => {
						let t = e.currentTarget.contains(e.target), n = _e[s.dir].includes(e.key);
						t && n && (o.onOpenChange(!1), l.trigger?.focus(), e.preventDefault());
					})
				})
			})
		})
	});
});
ct.displayName = st;
function lt(e) {
	return e ? "open" : "closed";
}
function J(e) {
	return e === "indeterminate";
}
function ut(e) {
	return J(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function dt(e) {
	let t = document.activeElement;
	for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function ft(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
function pt(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = ft(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
function mt(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function ht(e, t) {
	return t ? mt({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
function Y(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var gt = we, _t = B, vt = Oe, yt = Ae, bt = Fe, xt = Le, St = K, Ct = Ve, wt = Ge, Tt = qe, Et = Ze, Dt = $e, Ot = tt, kt = ot, At = ct;
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-dropdown-menu@2.1.19_@types+react-dom@18.3.7_@types+react@18.3.31__@typ_c9d8b1b7105c5bcf5811c2d38ad25961/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
r();
var X = "DropdownMenu", [jt, Mt] = p(X, [be]), Z = be(), [Nt, Pt] = jt(X), Ft = (e) => {
	let { __scopeDropdownMenu: t, children: n, dir: r, open: a, defaultOpen: o, onOpenChange: s, modal: l = !0 } = e, d = Z(t), f = c(null), [p, m] = C({
		prop: a,
		defaultProp: o ?? !1,
		onChange: s,
		caller: X
	});
	return /* @__PURE__ */ (0, j.jsx)(Nt, {
		scope: t,
		triggerId: u(),
		triggerRef: f,
		contentId: u(),
		open: p,
		onOpenChange: m,
		onOpenToggle: i(() => m((e) => !e), [m]),
		modal: l,
		children: /* @__PURE__ */ (0, j.jsx)(gt, {
			...d,
			open: p,
			onOpenChange: m,
			dir: r,
			modal: l,
			children: n
		})
	});
};
Ft.displayName = X;
var It = "DropdownMenuTrigger", Lt = o((e, t) => {
	let { __scopeDropdownMenu: n, disabled: r = !1, ...i } = e, a = Pt(It, n), o = Z(n), s = m(t, a.triggerRef);
	return /* @__PURE__ */ (0, j.jsx)(_t, {
		asChild: !0,
		...o,
		children: /* @__PURE__ */ (0, j.jsx)(h.button, {
			type: "button",
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": a.open,
			"aria-controls": a.open ? a.contentId : void 0,
			"data-state": a.open ? "open" : "closed",
			"data-disabled": r ? "" : void 0,
			disabled: r,
			...i,
			ref: s,
			onPointerDown: g(e.onPointerDown, (e) => {
				!r && e.button === 0 && e.ctrlKey === !1 && (a.onOpenToggle(), a.open || e.preventDefault());
			}),
			onKeyDown: g(e.onKeyDown, (e) => {
				r || (["Enter", " "].includes(e.key) && a.onOpenToggle(), e.key === "ArrowDown" && a.onOpenChange(!0), [
					"Enter",
					" ",
					"ArrowDown"
				].includes(e.key) && e.preventDefault());
			})
		})
	});
});
Lt.displayName = It;
var Rt = "DropdownMenuPortal", zt = (e) => {
	let { __scopeDropdownMenu: t, ...n } = e, r = Z(t);
	return /* @__PURE__ */ (0, j.jsx)(vt, {
		...r,
		...n
	});
};
zt.displayName = Rt;
var Bt = "DropdownMenuContent", Vt = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Pt(Bt, n), a = Z(n), o = c(!1);
	return /* @__PURE__ */ (0, j.jsx)(yt, {
		id: i.contentId,
		"aria-labelledby": i.triggerId,
		...a,
		...r,
		ref: t,
		onCloseAutoFocus: g(e.onCloseAutoFocus, (e) => {
			o.current || i.triggerRef.current?.focus(), o.current = !1, e.preventDefault();
		}),
		onInteractOutside: g(e.onInteractOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0, r = t.button === 2 || n;
			(!i.modal || r) && (o.current = !0);
		}),
		style: {
			...e.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
Vt.displayName = Bt;
var Ht = "DropdownMenuGroup", Ut = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, j.jsx)(bt, {
		...i,
		...r,
		ref: t
	});
});
Ut.displayName = Ht;
var Wt = "DropdownMenuLabel", Gt = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, j.jsx)(xt, {
		...i,
		...r,
		ref: t
	});
});
Gt.displayName = Wt;
var Kt = "DropdownMenuItem", qt = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, j.jsx)(St, {
		...i,
		...r,
		ref: t
	});
});
qt.displayName = Kt;
var Jt = "DropdownMenuCheckboxItem", Yt = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, j.jsx)(Ct, {
		...i,
		...r,
		ref: t
	});
});
Yt.displayName = Jt;
var Xt = "DropdownMenuRadioGroup", Zt = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, j.jsx)(wt, {
		...i,
		...r,
		ref: t
	});
});
Zt.displayName = Xt;
var Qt = "DropdownMenuRadioItem", $t = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, j.jsx)(Tt, {
		...i,
		...r,
		ref: t
	});
});
$t.displayName = Qt;
var en = "DropdownMenuItemIndicator", tn = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, j.jsx)(Et, {
		...i,
		...r,
		ref: t
	});
});
tn.displayName = en;
var nn = "DropdownMenuSeparator", rn = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, j.jsx)(Dt, {
		...i,
		...r,
		ref: t
	});
});
rn.displayName = nn;
var an = "DropdownMenuArrow", on = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, j.jsx)(Ot, {
		...i,
		...r,
		ref: t
	});
});
on.displayName = an;
var sn = "DropdownMenuSubTrigger", cn = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, j.jsx)(kt, {
		...i,
		...r,
		ref: t
	});
});
cn.displayName = sn;
var ln = "DropdownMenuSubContent", un = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, j.jsx)(At, {
		...i,
		...r,
		ref: t,
		style: {
			...e.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
un.displayName = ln;
var dn = Lt, fn = zt, pn = Vt, mn = Gt, hn = qt, gn = Yt, _n = $t, vn = tn, yn = rn, bn = cn, xn = un;
//#endregion
//#region ../shade/es/components/ui/dropdown-menu.js
r();
var Sn = dn, Cn = o(({ className: e, inset: t, children: n, ...r }, i) => /* @__PURE__ */ (0, j.jsxs)(bn, {
	ref: i,
	className: _("flex cursor-default items-center gap-2 rounded-menu-item px-2 py-1.5 text-control outline-hidden select-none hover:bg-interactive-hover focus:bg-interactive-hover data-[state=open]:bg-interactive-hover [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", t && "pl-8", e),
	...r,
	children: [n, /* @__PURE__ */ (0, j.jsx)(se, { className: "ml-auto" })]
}));
Cn.displayName = bn.displayName;
var wn = o(({ className: e, onEscapeKeyDown: t, ...n }, r) => /* @__PURE__ */ (0, j.jsx)(te, { children: /* @__PURE__ */ (0, j.jsx)(xn, {
	ref: r,
	className: _("z-50 min-w-[8rem] overflow-hidden rounded-menu border border-border/60 bg-surface-elevated-2 p-1 text-popover-foreground shadow-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 dark:border-border/30", e),
	onEscapeKeyDown: (e) => E(e, t),
	...n
}) }));
wn.displayName = xn.displayName;
var Tn = o(({ className: e, onEscapeKeyDown: t, sideOffset: n = 4, ...r }, i) => /* @__PURE__ */ (0, j.jsx)(fn, { children: /* @__PURE__ */ (0, j.jsx)(te, { children: /* @__PURE__ */ (0, j.jsx)(pn, {
	ref: i,
	className: _("z-50 min-w-[8rem] overflow-hidden rounded-menu border border-border/60 bg-surface-elevated-2 p-1 text-popover-foreground shadow-md dark:border-border/30", "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
	sideOffset: n,
	onEscapeKeyDown: (e) => E(e, t),
	...r
}) }) }));
Tn.displayName = pn.displayName;
var En = o(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ (0, j.jsx)(hn, {
	ref: r,
	className: _("relative flex cursor-pointer items-center gap-2 rounded-menu-item px-2 py-1.5 text-control outline-hidden transition-colors select-none focus:bg-interactive-hover focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", t && "pl-8", e),
	...n
}));
En.displayName = hn.displayName;
var Dn = o(({ className: e, children: t, checked: n, ...r }, i) => /* @__PURE__ */ (0, j.jsxs)(gn, {
	ref: i,
	checked: n,
	className: _("relative flex cursor-default items-center rounded-menu-item py-1.5 pr-2 pl-8 text-control outline-hidden transition-colors select-none focus:bg-interactive-hover focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	...r,
	children: [/* @__PURE__ */ (0, j.jsx)("span", {
		className: "absolute left-2 flex size-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, j.jsx)(vn, { children: /* @__PURE__ */ (0, j.jsx)(D, { className: "size-4" }) })
	}), t]
}));
Dn.displayName = gn.displayName;
var On = o(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ (0, j.jsxs)(_n, {
	ref: r,
	className: _("relative flex cursor-default items-center rounded-menu-item py-1.5 pr-2 pl-8 text-control outline-hidden transition-colors select-none focus:bg-interactive-hover focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	...n,
	children: [/* @__PURE__ */ (0, j.jsx)("span", {
		className: "absolute left-2 flex size-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, j.jsx)(vn, { children: /* @__PURE__ */ (0, j.jsx)(pe, { className: "size-2 fill-current" }) })
	}), t]
}));
On.displayName = _n.displayName;
var kn = o(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ (0, j.jsx)(mn, {
	ref: r,
	className: _("px-2 py-1.5 text-control font-semibold", t && "pl-8", e),
	...n
}));
kn.displayName = mn.displayName;
var An = o(({ className: e, ...t }, n) => /* @__PURE__ */ (0, j.jsx)(yn, {
	ref: n,
	className: _("-mx-1 my-1 h-px bg-muted", e),
	...t
}));
An.displayName = yn.displayName;
var jn = ({ className: e, ...t }) => /* @__PURE__ */ (0, j.jsx)("span", {
	className: _("ml-auto text-xs tracking-wider opacity-60", e),
	...t
});
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-tabs@1.1.16_@types+react-dom@18.3.7_@types+react@18.3.31__@types+react@_80fa082efb8fcddc83bf2006e312ed1e/node_modules/@radix-ui/react-tabs/dist/index.mjs
jn.displayName = "DropdownMenuShortcut", r();
var Q = "Tabs", [Mn, Nn] = p(Q, [O]), Pn = O(), [Fn, In] = Mn(Q), Ln = o((e, t) => {
	let { __scopeTabs: n, value: r, onValueChange: i, defaultValue: a, orientation: o = "horizontal", dir: s, activationMode: c = "automatic", ...l } = e, d = A(s), [f, p] = C({
		prop: r,
		onChange: i,
		defaultProp: a ?? "",
		caller: Q
	});
	return /* @__PURE__ */ (0, j.jsx)(Fn, {
		scope: n,
		baseId: u(),
		value: f,
		onValueChange: p,
		orientation: o,
		dir: d,
		activationMode: c,
		children: /* @__PURE__ */ (0, j.jsx)(h.div, {
			dir: d,
			"data-orientation": o,
			...l,
			ref: t
		})
	});
});
Ln.displayName = Q;
var Rn = "TabsList", zn = o((e, t) => {
	let { __scopeTabs: n, loop: r = !0, ...i } = e, a = In(Rn, n), o = Pn(n);
	return /* @__PURE__ */ (0, j.jsx)(de, {
		asChild: !0,
		...o,
		orientation: a.orientation,
		dir: a.dir,
		loop: r,
		children: /* @__PURE__ */ (0, j.jsx)(h.div, {
			role: "tablist",
			"aria-orientation": a.orientation,
			...i,
			ref: t
		})
	});
});
zn.displayName = Rn;
var Bn = "TabsTrigger", Vn = o((e, t) => {
	let { __scopeTabs: n, value: r, disabled: i = !1, ...a } = e, o = In(Bn, n), s = Pn(n), c = Wn(o.baseId, r), l = Gn(o.baseId, r), u = r === o.value;
	return /* @__PURE__ */ (0, j.jsx)(k, {
		asChild: !0,
		...s,
		focusable: !i,
		active: u,
		children: /* @__PURE__ */ (0, j.jsx)(h.button, {
			type: "button",
			role: "tab",
			"aria-selected": u,
			"aria-controls": l,
			"data-state": u ? "active" : "inactive",
			"data-disabled": i ? "" : void 0,
			disabled: i,
			id: c,
			...a,
			ref: t,
			onMouseDown: g(e.onMouseDown, (e) => {
				!i && e.button === 0 && e.ctrlKey === !1 ? o.onValueChange(r) : e.preventDefault();
			}),
			onKeyDown: g(e.onKeyDown, (e) => {
				[" ", "Enter"].includes(e.key) && o.onValueChange(r);
			}),
			onFocus: g(e.onFocus, () => {
				let e = o.activationMode !== "manual";
				!u && !i && e && o.onValueChange(r);
			})
		})
	});
});
Vn.displayName = Bn;
var Hn = "TabsContent", Un = o((e, t) => {
	let { __scopeTabs: n, value: r, forceMount: i, children: a, ...o } = e, l = In(Hn, n), u = Wn(l.baseId, r), d = Gn(l.baseId, r), f = r === l.value, p = c(f);
	return s(() => {
		let e = requestAnimationFrame(() => p.current = !1);
		return () => cancelAnimationFrame(e);
	}, []), /* @__PURE__ */ (0, j.jsx)(b, {
		present: i || f,
		children: ({ present: n }) => /* @__PURE__ */ (0, j.jsx)(h.div, {
			"data-state": f ? "active" : "inactive",
			"data-orientation": l.orientation,
			role: "tabpanel",
			"aria-labelledby": u,
			hidden: !n,
			id: d,
			tabIndex: 0,
			...o,
			ref: t,
			style: {
				...e.style,
				animationDuration: p.current ? "0s" : void 0
			},
			children: n && a
		})
	});
});
Un.displayName = Hn;
function Wn(e, t) {
	return `${e}-trigger-${t}`;
}
function Gn(e, t) {
	return `${e}-content-${t}`;
}
var Kn = Ln, qn = zn, Jn = Vn, Yn = Un;
//#endregion
//#region ../shade/es/components/ui/tabs.js
r();
var $ = n({
	variant: "segmented",
	controlShape: "rounded"
});
f("", {
	variants: { variant: {
		segmented: "",
		"segmented-sm": "",
		button: "",
		"button-sm": "",
		underline: "",
		navbar: "",
		pill: "",
		kpis: ""
	} },
	defaultVariants: { variant: "segmented" }
});
var Xn = o(({ variant: e = "segmented", ...t }, n) => {
	let { controlShape: r } = re();
	return /* @__PURE__ */ (0, j.jsx)($.Provider, {
		value: {
			variant: e,
			controlShape: r
		},
		children: /* @__PURE__ */ (0, j.jsx)(Kn, {
			ref: n,
			...t
		})
	});
});
Xn.displayName = Kn.displayName;
var Zn = f("inline-flex items-center text-muted-foreground", {
	variants: { variant: {
		segmented: "h-(--control-height) rounded-lg bg-muted px-[3px]",
		"segmented-sm": "h-8 rounded-lg bg-muted px-[3px]",
		button: "gap-2",
		"button-sm": "gap-1",
		underline: "no-scrollbar w-full max-w-full gap-5 overflow-x-auto border-b border-border-default",
		navbar: "h-[52px] items-end gap-6",
		pill: "-ml-0.5 h-[30px] gap-px",
		kpis: "border-b ring-0"
	} },
	defaultVariants: { variant: "segmented" }
}), Qn = o(({ className: e, ...n }, r) => {
	let { variant: i } = t($);
	return /* @__PURE__ */ (0, j.jsx)(qn, {
		ref: r,
		className: _(Zn({
			variant: i,
			className: e
		})),
		...n
	});
});
Qn.displayName = qn.displayName;
var $n = f("inline-flex items-center justify-center px-3 py-1 whitespace-nowrap ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			segmented: "h-7 rounded-control text-control font-medium data-[state=active]:shadow-md",
			"segmented-sm": "h-[26px] rounded-control text-sm font-medium data-[state=active]:shadow-md",
			button: "h-(--control-height) gap-1.5 rounded-control py-2 text-control font-medium hover:bg-tab-hover data-[state=active]:bg-tab-active data-[state=active]:hover:bg-tab-active",
			"button-sm": "h-6 gap-1.5 rounded-control p-2 text-sm font-medium text-text-secondary hover:bg-tab-hover data-[state=active]:bg-tab-active data-[state=active]:text-foreground data-[state=active]:hover:bg-tab-active",
			underline: "relative h-9 px-0 text-control font-semibold text-text-secondary after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[\"\"] hover:after:opacity-10 data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:after:opacity-100!",
			navbar: "relative h-[52px] px-px text-control font-semibold text-muted-foreground after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[\"\"] hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:after:opacity-100!",
			pill: "relative h-[30px] rounded-md px-3 text-control font-medium text-text-secondary hover:bg-tab-hover hover:text-foreground data-[state=active]:bg-tab-active data-[state=active]:text-foreground data-[state=active]:hover:bg-tab-active",
			kpis: "relative h-full! items-start! rounded-none border-border bg-transparent px-6 py-5 text-foreground ring-0 transition-all after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[\"\"] first:rounded-tl-md last:rounded-tr-md hover:bg-interactive-hover data-[state=active]:bg-transparent data-[state=active]:after:opacity-100 [&:not(:last-child)]:border-r [&[data-state=active]_[data-type=\"value\"]]:text-foreground"
		},
		controlShape: {
			rounded: "",
			pill: ""
		}
	},
	compoundVariants: [{
		variant: ["button", "button-sm"],
		controlShape: "pill",
		className: "rounded-full"
	}],
	defaultVariants: {
		variant: "segmented",
		controlShape: "rounded"
	}
}), er = o(({ className: e, onMouseDownCapture: n, ...r }, i) => {
	let { variant: a, controlShape: o } = t($);
	return /* @__PURE__ */ (0, j.jsx)(Jn, {
		ref: i,
		className: _($n({
			variant: a,
			controlShape: o,
			className: e
		})),
		onMouseDownCapture: (e) => {
			let t = document.activeElement;
			t instanceof HTMLElement && t.matches("input, textarea, select, [contenteditable=\"true\"]") && t.blur(), n?.(e);
		},
		...r
	});
});
er.displayName = Jn.displayName;
var tr = ({ className: e = "", children: t }) => /* @__PURE__ */ (0, j.jsx)("span", {
	className: _("mt-px ml-1.5 flex h-5 items-center justify-center rounded-full bg-secondary px-1.5 py-0 text-xs leading-[21px] font-semibold text-text-secondary", e),
	children: t
});
tr.displayName = "TabsTriggerCount";
var nr = f("ring-offset-background focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:outline-hidden", {
	variants: { variant: {
		segmented: "",
		"segmented-sm": "",
		button: "",
		"button-sm": "",
		underline: "",
		navbar: "",
		pill: "",
		kpis: "ring-0"
	} },
	defaultVariants: { variant: "segmented" }
}), rr = o(({ className: e, ...n }, r) => {
	let { variant: i } = t($);
	return /* @__PURE__ */ (0, j.jsx)(Yn, {
		ref: r,
		className: _(nr({
			variant: i,
			className: e
		})),
		...n
	});
});
rr.displayName = Yn.displayName;
var ir = o(({ children: e, className: n, ...r }, i) => {
	let { variant: a, controlShape: o } = t($);
	return /* @__PURE__ */ (0, j.jsxs)("div", {
		className: _("relative rounded-control hover:bg-tab-hover", (a === "button" || a === "button-sm") && o === "pill" && "rounded-full"),
		children: [/* @__PURE__ */ (0, j.jsx)(Jn, {
			ref: i,
			className: _($n({
				variant: a,
				controlShape: o,
				className: n
			})),
			...r,
			children: /* @__PURE__ */ (0, j.jsx)("div", {
				className: "flex items-center gap-2",
				children: e
			})
		}), /* @__PURE__ */ (0, j.jsx)(Sn, {
			className: "absolute inset-0 size-full cursor-pointer",
			onClick: (e) => {
				e.preventDefault();
			}
		})]
	});
});
ir.displayName = "TabsDropdownTrigger";
//#endregion
export { tr as a, er as i, rr as n, Qn as r, Xn as t };

//# sourceMappingURL=tabs-D0_LDc1K.js.map