import { S as e, T as t, a as n, d as r, v as i } from "./_react-D4KM8XEu.js";
import { C as a, m as o } from "./chunk-OB3PAWPO-CAV1KLte.js";
import { W as s, o as c, q as l, r as u, t as d } from "./use-navigate-with-base-path-CjM3S5Z7.js";
import { R as ee, y as te } from "./use-activity-pub-queries-C5sHP1nj.js";
var f = c("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), p = c("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]), m = c("user-round", [["circle", {
	cx: "12",
	cy: "8",
	r: "5",
	key: "1hypcn"
}], ["path", {
	d: "M20 21a8 8 0 0 0-16 0",
	key: "rfgkzh"
}]]);
//#endregion
//#region ../shade/es/components/ui/skeleton.js
r();
var h = a();
function g({ containerClassName: t, count: r = 1, randomize: i = !1, minWidth: a = 70, maxWidth: o = 100, className: c, ...l }) {
	let { randomWidths: u, keys: d } = e(() => {
		let e = [], t = [];
		for (let n = 0; n < r; n++) {
			if (i) {
				let t = Math.floor((o - a) / 5), n = a + Math.floor(Math.random() * (t + 1)) * 5;
				e.push(`${n}%`);
			}
			t.push(`skeleton-${n}`);
		}
		return {
			randomWidths: e,
			keys: t
		};
	}, [
		r,
		i,
		a,
		o
	]);
	return /* @__PURE__ */ (0, h.jsx)("span", {
		className: t,
		children: Array.from({ length: r }).map((e, t) => /* @__PURE__ */ (0, h.jsxs)(n.Fragment, { children: [/* @__PURE__ */ (0, h.jsx)("span", {
			className: s("inline-flex w-full animate-pulse rounded-[2px] bg-primary/10 leading-none", c),
			style: i ? { width: u[t] } : void 0,
			...l,
			children: "‌"
		}), /* @__PURE__ */ (0, h.jsx)("br", {})] }, d[t]))
	});
}
var _ = n.forwardRef(({ className: e, lines: t = 5, ...n }, r) => t < 1 ? /* @__PURE__ */ (0, h.jsx)(h.Fragment, {}) : /* @__PURE__ */ (0, h.jsx)("div", {
	ref: r,
	className: s("flex flex-col gap-2", e),
	...n,
	children: Array.from({ length: t }, (e, t) => {
		let n = "66%";
		switch (t % 5) {
			case 0:
				n = "57%";
				break;
			case 1:
				n = "33%";
				break;
			case 2:
				n = "40%";
				break;
			case 3:
				n = "48%";
				break;
			case 4:
				n = "24%";
				break;
		}
		return /* @__PURE__ */ (0, h.jsxs)("div", {
			className: "flex justify-between gap-6",
			children: [/* @__PURE__ */ (0, h.jsx)("div", {
				className: "grow",
				style: { maxWidth: n },
				children: /* @__PURE__ */ (0, h.jsx)(g, {})
			}), /* @__PURE__ */ (0, h.jsx)(g, { className: "w-[60px] self-end" })]
		}, t);
	})
}));
_.displayName = "SkeletonTable";
//#endregion
//#region src/utils/get-handle.ts
function v(e) {
	if (e.handle) return e.handle;
	if (!e.preferredUsername || !e.id) return "@unknown@unknown";
	try {
		return `@${e.preferredUsername}@${new URL(e.id).hostname.replace(/^www\./, "")}`;
	} catch {
		return "@unknown@unknown";
	}
}
//#endregion
//#region src/components/global/ap-avatar.tsx
r();
var y = null, b = ({ onFollow: e, onUnfollow: t, authorHandle: r, followedByMe: i }) => {
	let [, a] = n.useReducer((e) => e + 1, 0), o = y === r && !i;
	return /* @__PURE__ */ (0, h.jsx)(u, {
		className: "absolute -right-1.5 bottom-px z-10 flex size-4 items-center justify-center rounded-full p-0 outline-2 outline-white transition-transform hover:scale-105 active:scale-100 dark:outline-black",
		title: o ? "Unfollow" : "Follow",
		onClick: (n) => {
			o ? (t(n), setTimeout(() => {
				y = null, a();
			}, 0)) : (y = r, a(), e(n));
		},
		children: o ? /* @__PURE__ */ (0, h.jsx)(f, { className: "-mb-px size-3! stroke-[2.4]!" }) : /* @__PURE__ */ (0, h.jsx)(p, { className: "size-[14px]! stroke-2!" })
	});
}, x = ({ author: e, size: n, isLoading: r = !1, disabled: a = !1, className: s = "", showFollowButton: c = !1 }) => {
	let u = 20, f = `shrink-0 items-center justify-center rounded-full relative z-10 flex bg-black/5 dark:bg-gray-900 ${n === "lg" || a ? "" : "cursor-pointer"} ${s}`, p = "z-10 object-cover rounded-full outline-[0.5px] outline-offset-[-0.5px] outline-black/10", [_, x] = t(e?.icon?.url), ne = d(), re = te("index", () => {
		o.success(`Followed ${e?.name}`);
	}, () => {
		o.error("Failed to follow");
	}), S = ee("index", () => {
		o.info(`Unfollowed ${e?.name}`);
	}, () => {
		o.error("Failed to unfollow");
	});
	switch (i(() => {
		x(e?.icon?.url);
	}, [e?.icon?.url]), n) {
		case "2xs":
			u = 10, f = l("size-4", f), p = l("size-4", p);
			break;
		case "xs":
			u = 12, f = l("size-6", f), p = l("size-6", p);
			break;
		case "notification":
			u = 16, f = l("size-9", f), p = l("size-9", p);
			break;
		case "sm":
			f = l("size-10", f), p = l("size-10", p);
			break;
		case "md":
			f = l("size-[60px]", f), p = l("size-[60px]", p);
			break;
		case "lg":
			u = 32, f = l("size-22", f), p = l("size-22", p);
			break;
		default:
			f = l("size-10", f), p = l("size-10", p);
			break;
	}
	if (!e || r) return /* @__PURE__ */ (0, h.jsx)(g, {
		className: p,
		containerClassName: f
	});
	let C = v(e), w = (e) => {
		e.stopPropagation(), ne(`/profile/${C}`);
	}, ie = (e) => {
		e.stopPropagation(), re.mutate(C);
	}, ae = (e) => {
		e.stopPropagation(), S.mutate(C);
	}, oe = c || y === C;
	return _ ? /* @__PURE__ */ (0, h.jsxs)("div", {
		className: f,
		onClick: n === "lg" || a ? void 0 : w,
		children: [/* @__PURE__ */ (0, h.jsx)("img", {
			className: p,
			referrerPolicy: "no-referrer",
			src: _,
			onError: () => x(void 0)
		}), oe && /* @__PURE__ */ (0, h.jsx)(b, {
			authorHandle: C,
			followedByMe: !1,
			onFollow: ie,
			onUnfollow: ae
		})]
	}) : /* @__PURE__ */ (0, h.jsxs)("div", {
		className: f,
		onClick: a ? void 0 : w,
		children: [/* @__PURE__ */ (0, h.jsx)(m, {
			className: "text-gray-600",
			size: u,
			strokeWidth: 1.5
		}), oe && /* @__PURE__ */ (0, h.jsx)(b, {
			authorHandle: C,
			followedByMe: !1,
			onFollow: ie,
			onUnfollow: ae
		})]
	});
};
//#endregion
//#region ../../node_modules/.pnpm/dompurify@3.4.13/node_modules/dompurify/dist/purify.es.mjs
function ne(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function re(e) {
	if (Array.isArray(e)) return e;
}
function S(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t !== 0) for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function C() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function w(e, t) {
	return re(e) || S(e, t) || ie(e, t) || C();
}
function ie(e, t) {
	if (e) {
		if (typeof e == "string") return ne(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ne(e, t) : void 0;
	}
}
var ae = Object.entries, oe = Object.setPrototypeOf, se = Object.isFrozen, ce = Object.getPrototypeOf, le = Object.getOwnPropertyDescriptor, T = Object.freeze, E = Object.seal, ue = Object.create, de = typeof Reflect < "u" && Reflect, fe = de.apply, pe = de.construct;
T ||= function(e) {
	return e;
}, E ||= function(e) {
	return e;
}, fe ||= function(e, t) {
	var n = [...arguments].slice(2);
	return e.apply(t, n);
}, pe ||= function(e) {
	return new e(...[...arguments].slice(1));
};
var me = M(Array.prototype.forEach), he = M(Array.prototype.lastIndexOf), ge = M(Array.prototype.pop), _e = M(Array.prototype.push), ve = M(Array.prototype.splice), D = Array.isArray, ye = M(String.prototype.toLowerCase), be = M(String.prototype.toString), xe = M(String.prototype.match), Se = M(String.prototype.replace), Ce = M(String.prototype.indexOf), we = M(String.prototype.trim), O = M(Number.prototype.toString), Te = M(Boolean.prototype.toString), Ee = typeof BigInt > "u" ? null : M(BigInt.prototype.toString), De = typeof Symbol > "u" ? null : M(Symbol.prototype.toString), k = M(Object.prototype.hasOwnProperty), Oe = M(Object.prototype.toString), A = M(RegExp.prototype.test), j = ke(TypeError);
function M(e) {
	return function(t) {
		t instanceof RegExp && (t.lastIndex = 0);
		var n = [...arguments].slice(1);
		return fe(e, t, n);
	};
}
function ke(e) {
	return function() {
		return pe(e, [...arguments]);
	};
}
function N(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ye;
	if (oe && oe(e, null), !D(t)) return e;
	let r = t.length;
	for (; r--;) {
		let i = t[r];
		if (typeof i == "string") {
			let e = n(i);
			e !== i && (se(t) || (t[r] = e), i = e);
		}
		e[i] = !0;
	}
	return e;
}
function Ae(e) {
	for (let t = 0; t < e.length; t++) k(e, t) || (e[t] = null);
	return e;
}
function P(e) {
	let t = ue(null);
	for (let r of ae(e)) {
		var n = w(r, 2);
		let i = n[0], a = n[1];
		k(e, i) && (D(a) ? t[i] = Ae(a) : a && typeof a == "object" && a.constructor === Object ? t[i] = P(a) : t[i] = a);
	}
	return t;
}
function je(e) {
	switch (typeof e) {
		case "string": return e;
		case "number": return O(e);
		case "boolean": return Te(e);
		case "bigint": return Ee ? Ee(e) : "0";
		case "symbol": return De ? De(e) : "Symbol()";
		case "undefined": return Oe(e);
		case "function":
		case "object": {
			if (e === null) return Oe(e);
			let t = e, n = F(t, "toString");
			if (typeof n == "function") {
				let e = n(t);
				return typeof e == "string" ? e : Oe(e);
			}
			return Oe(e);
		}
		default: return Oe(e);
	}
}
function F(e, t) {
	for (; e !== null;) {
		let n = le(e, t);
		if (n) {
			if (n.get) return M(n.get);
			if (typeof n.value == "function") return M(n.value);
		}
		e = ce(e);
	}
	function n() {
		return null;
	}
	return n;
}
function Me(e) {
	try {
		return A(e, ""), !0;
	} catch {
		return !1;
	}
}
var Ne = T(/* @__PURE__ */ "a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr".split(".")), Pe = T(/* @__PURE__ */ "svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern".split(".")), Fe = T([
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence"
]), Ie = T([
	"animate",
	"color-profile",
	"cursor",
	"discard",
	"font-face",
	"font-face-format",
	"font-face-name",
	"font-face-src",
	"font-face-uri",
	"foreignobject",
	"hatch",
	"hatchpath",
	"mesh",
	"meshgradient",
	"meshpatch",
	"meshrow",
	"missing-glyph",
	"script",
	"set",
	"solidcolor",
	"unknown",
	"use"
]), Le = T(/* @__PURE__ */ "math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts".split(".")), Re = T([
	"maction",
	"maligngroup",
	"malignmark",
	"mlongdiv",
	"mscarries",
	"mscarry",
	"msgroup",
	"mstack",
	"msline",
	"msrow",
	"semantics",
	"annotation",
	"annotation-xml",
	"mprescripts",
	"none"
]), ze = T(["#text"]), Be = T(/* @__PURE__ */ "accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns".split(".")), Ve = T(/* @__PURE__ */ "accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dominant-baseline.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-orientation.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan".split(".")), He = T(/* @__PURE__ */ "accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns".split(".")), Ue = T([
	"xlink:href",
	"xml:id",
	"xlink:title",
	"xml:space",
	"xmlns:xlink"
]), We = E(/{{[\w\W]*|^[\w\W]*}}/g), Ge = E(/<%[\w\W]*|^[\w\W]*%>/g), Ke = E(/\${[\w\W]*/g), qe = E(/^data-[\-\w.\u00B7-\uFFFF]+$/), Je = E(/^aria-[\-\w]+$/), Ye = E(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), Xe = E(/^(?:\w+script|data):/i), Ze = E(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), Qe = E(/^html$/i), $e = E(/^[a-z][.\w]*(-[.\w]+)+$/i), et = E(/<[/\w!]/g), tt = E(/<[/\w]/g), nt = E(/<\/no(script|embed|frames)/i), rt = E(/\/>/i), I = {
	element: 1,
	attribute: 2,
	text: 3,
	cdataSection: 4,
	entityReference: 5,
	entityNode: 6,
	processingInstruction: 7,
	comment: 8,
	document: 9,
	documentType: 10,
	documentFragment: 11,
	notation: 12
}, it = function() {
	return typeof window > "u" ? null : window;
}, at = function(e, t) {
	if (typeof e != "object" || typeof e.createPolicy != "function") return null;
	let n = null, r = "data-tt-policy-suffix";
	t && t.hasAttribute(r) && (n = t.getAttribute(r));
	let i = "dompurify" + (n ? "#" + n : "");
	try {
		return e.createPolicy(i, {
			createHTML(e) {
				return e;
			},
			createScriptURL(e) {
				return e;
			}
		});
	} catch {
		return console.warn("TrustedTypes policy " + i + " could not be created."), null;
	}
}, ot = function() {
	return {
		afterSanitizeAttributes: [],
		afterSanitizeElements: [],
		afterSanitizeShadowDOM: [],
		beforeSanitizeAttributes: [],
		beforeSanitizeElements: [],
		beforeSanitizeShadowDOM: [],
		uponSanitizeAttribute: [],
		uponSanitizeElement: [],
		uponSanitizeShadowNode: []
	};
}, L = function(e, t, n, r) {
	return k(e, t) && D(e[t]) ? N(r.base ? P(r.base) : {}, e[t], r.transform) : n;
};
function st() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : it(), t = (e) => st(e);
	if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== I.document || !e.Element) return t.isSupported = !1, t;
	let n = e.document, r = n, i = r.currentScript;
	e.DocumentFragment;
	let a = e.HTMLTemplateElement, o = e.Node, s = e.Element, c = e.NodeFilter;
	e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
	let l = e.DOMParser, u = e.trustedTypes, d = s.prototype, ee = F(d, "cloneNode"), te = F(d, "remove"), f = F(d, "nextSibling"), p = F(d, "childNodes"), m = F(d, "parentNode"), h = F(d, "shadowRoot"), g = F(d, "attributes"), _ = o && o.prototype ? F(o.prototype, "nodeType") : null, v = o && o.prototype ? F(o.prototype, "nodeName") : null, y = o && o.prototype ? F(o.prototype, "ownerDocument") : null;
	if (typeof a == "function") {
		let e = n.createElement("template");
		e.content && e.content.ownerDocument && (n = e.content.ownerDocument);
	}
	let b, x = "", ne, re = !1, S = 0, C = function() {
		if (S > 0) throw j("A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the \"DOMPurify and Trusted Types\" section of the README.");
	}, w = function(e) {
		C(), S++;
		try {
			return b.createHTML(e);
		} finally {
			S--;
		}
	}, ie = function(e) {
		C(), S++;
		try {
			return b.createScriptURL(e);
		} finally {
			S--;
		}
	}, oe = function() {
		return re ||= (ne = at(u, i), !0), ne;
	}, se = n, ce = se.implementation, le = se.createNodeIterator, de = se.createDocumentFragment, fe = se.getElementsByTagName, pe = r.importNode, O = ot();
	t.isSupported = typeof ae == "function" && typeof m == "function" && ce && ce.createHTMLDocument !== void 0;
	let Te = We, Ee = Ge, De = Ke, Oe = qe, M = Je, ke = Xe, Ae = Ze, ct = $e, lt = Ye, R = null, ut = N({}, [
		...Ne,
		...Pe,
		...Fe,
		...Le,
		...ze
	]), z = null, dt = N({}, [
		...Be,
		...Ve,
		...He,
		...Ue
	]), B = Object.seal(ue(null, {
		tagNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		allowCustomizedBuiltInElements: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: !1
		}
	})), V = null, ft = null, H = Object.seal(ue(null, {
		tagCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		}
	})), pt = !0, mt = !0, ht = !1, gt = !0, U = !1, W = !0, G = !1, _t = !1, vt = null, yt = null, bt = !1, K = !1, xt = !1, St = !1, Ct = !0, wt = !1, Tt = "user-content-", Et = !0, Dt = !1, Ot = {}, q = null, kt = N({}, /* @__PURE__ */ "annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp".split(".")), At = null, jt = N({}, [
		"audio",
		"video",
		"img",
		"source",
		"image",
		"track"
	]), Mt = null, Nt = N({}, [
		"alt",
		"class",
		"for",
		"id",
		"label",
		"name",
		"pattern",
		"placeholder",
		"role",
		"summary",
		"title",
		"value",
		"style",
		"xmlns"
	]), Pt = "http://www.w3.org/1998/Math/MathML", Ft = "http://www.w3.org/2000/svg", J = "http://www.w3.org/1999/xhtml", It = J, Lt = !1, Rt = null, zt = N({}, [
		Pt,
		Ft,
		J
	], be), Bt = T([
		"mi",
		"mo",
		"mn",
		"ms",
		"mtext"
	]), Vt = N({}, Bt), Ht = T(["annotation-xml"]), Ut = N({}, Ht), Wt = N({}, [
		"title",
		"style",
		"font",
		"a",
		"script"
	]), Gt = null, Kt = ["application/xhtml+xml", "text/html"], Y = null, X = null, qt = n.createElement("form"), Jt = function(e) {
		return e instanceof RegExp || e instanceof Function;
	}, Yt = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		if (X && X === e) return;
		(!e || typeof e != "object") && (e = {}), e = P(e), Gt = Kt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? "text/html" : e.PARSER_MEDIA_TYPE, Y = Gt === "application/xhtml+xml" ? be : ye, R = L(e, "ALLOWED_TAGS", ut, { transform: Y }), z = L(e, "ALLOWED_ATTR", dt, { transform: Y }), Rt = L(e, "ALLOWED_NAMESPACES", zt, { transform: be }), Mt = L(e, "ADD_URI_SAFE_ATTR", Nt, {
			transform: Y,
			base: Nt
		}), At = L(e, "ADD_DATA_URI_TAGS", jt, {
			transform: Y,
			base: jt
		}), q = L(e, "FORBID_CONTENTS", kt, { transform: Y }), V = L(e, "FORBID_TAGS", P({}), { transform: Y }), ft = L(e, "FORBID_ATTR", P({}), { transform: Y }), Ot = k(e, "USE_PROFILES") ? e.USE_PROFILES && typeof e.USE_PROFILES == "object" ? P(e.USE_PROFILES) : e.USE_PROFILES : !1, pt = e.ALLOW_ARIA_ATTR !== !1, mt = e.ALLOW_DATA_ATTR !== !1, ht = e.ALLOW_UNKNOWN_PROTOCOLS || !1, gt = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, U = e.SAFE_FOR_TEMPLATES || !1, W = e.SAFE_FOR_XML !== !1, G = e.WHOLE_DOCUMENT || !1, K = e.RETURN_DOM || !1, xt = e.RETURN_DOM_FRAGMENT || !1, St = e.RETURN_TRUSTED_TYPE || !1, bt = e.FORCE_BODY || !1, Ct = e.SANITIZE_DOM !== !1, wt = e.SANITIZE_NAMED_PROPS || !1, Et = e.KEEP_CONTENT !== !1, Dt = e.IN_PLACE || !1, lt = Me(e.ALLOWED_URI_REGEXP) ? e.ALLOWED_URI_REGEXP : Ye, It = typeof e.NAMESPACE == "string" ? e.NAMESPACE : J, Vt = k(e, "MATHML_TEXT_INTEGRATION_POINTS") && e.MATHML_TEXT_INTEGRATION_POINTS && typeof e.MATHML_TEXT_INTEGRATION_POINTS == "object" ? P(e.MATHML_TEXT_INTEGRATION_POINTS) : N({}, Bt), Ut = k(e, "HTML_INTEGRATION_POINTS") && e.HTML_INTEGRATION_POINTS && typeof e.HTML_INTEGRATION_POINTS == "object" ? P(e.HTML_INTEGRATION_POINTS) : N({}, Ht);
		let t = k(e, "CUSTOM_ELEMENT_HANDLING") && e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING == "object" ? P(e.CUSTOM_ELEMENT_HANDLING) : ue(null);
		if (B = ue(null), k(t, "tagNameCheck") && Jt(t.tagNameCheck) && (B.tagNameCheck = t.tagNameCheck), k(t, "attributeNameCheck") && Jt(t.attributeNameCheck) && (B.attributeNameCheck = t.attributeNameCheck), k(t, "allowCustomizedBuiltInElements") && typeof t.allowCustomizedBuiltInElements == "boolean" && (B.allowCustomizedBuiltInElements = t.allowCustomizedBuiltInElements), E(B), U && (mt = !1), xt && (K = !0), Ot && (R = N({}, ze), z = ue(null), Ot.html === !0 && (N(R, Ne), N(z, Be)), Ot.svg === !0 && (N(R, Pe), N(z, Ve), N(z, Ue)), Ot.svgFilters === !0 && (N(R, Fe), N(z, Ve), N(z, Ue)), Ot.mathMl === !0 && (N(R, Le), N(z, He), N(z, Ue))), H.tagCheck = null, H.attributeCheck = null, k(e, "ADD_TAGS") && (typeof e.ADD_TAGS == "function" ? H.tagCheck = e.ADD_TAGS : D(e.ADD_TAGS) && (R === ut && (R = P(R)), N(R, e.ADD_TAGS, Y))), k(e, "ADD_ATTR") && (typeof e.ADD_ATTR == "function" ? H.attributeCheck = e.ADD_ATTR : D(e.ADD_ATTR) && (z === dt && (z = P(z)), N(z, e.ADD_ATTR, Y))), k(e, "ADD_URI_SAFE_ATTR") && D(e.ADD_URI_SAFE_ATTR) && N(Mt, e.ADD_URI_SAFE_ATTR, Y), k(e, "FORBID_CONTENTS") && D(e.FORBID_CONTENTS) && (q === kt && (q = P(q)), N(q, e.FORBID_CONTENTS, Y)), k(e, "ADD_FORBID_CONTENTS") && D(e.ADD_FORBID_CONTENTS) && (q === kt && (q = P(q)), N(q, e.ADD_FORBID_CONTENTS, Y)), Et && (R["#text"] = !0), G && N(R, [
			"html",
			"head",
			"body"
		]), R.table && (N(R, ["tbody"]), delete V.tbody), e.TRUSTED_TYPES_POLICY) {
			if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function") throw j("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
			if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw j("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
			let t = b;
			b = e.TRUSTED_TYPES_POLICY;
			try {
				x = w("");
			} catch (e) {
				throw b = t, e;
			}
		} else e.TRUSTED_TYPES_POLICY === null ? (b = void 0, x = "") : (b === void 0 && (b = oe()), b && typeof x == "string" && (x = w("")));
		T && T(e), X = e;
	}, Xt = N({}, [
		...Pe,
		...Fe,
		...Ie
	]), Zt = N({}, [...Le, ...Re]), Qt = function(e, t, n) {
		return t.namespaceURI === J ? e === "svg" : t.namespaceURI === Pt ? e === "svg" && (n === "annotation-xml" || Vt[n]) : !!Xt[e];
	}, $t = function(e, t, n) {
		return t.namespaceURI === J ? e === "math" : t.namespaceURI === Ft ? e === "math" && Ut[n] : !!Zt[e];
	}, en = function(e, t, n) {
		return t.namespaceURI === Ft && !Ut[n] || t.namespaceURI === Pt && !Vt[n] ? !1 : !Zt[e] && (Wt[e] || !Xt[e]);
	}, tn = function(e) {
		let t = m(e);
		(!t || !t.tagName) && (t = {
			namespaceURI: It,
			tagName: "template"
		});
		let n = ye(e.tagName), r = ye(t.tagName);
		return Rt[e.namespaceURI] ? e.namespaceURI === Ft ? Qt(n, t, r) : e.namespaceURI === Pt ? $t(n, t, r) : e.namespaceURI === J ? en(n, t, r) : !!(Gt === "application/xhtml+xml" && Rt[e.namespaceURI]) : !1;
	}, Z = function(e) {
		_e(t.removed, { element: e });
		try {
			m(e).removeChild(e);
		} catch {
			if (te(e), !m(e)) throw j("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
		}
	}, nn = function(e) {
		an(e);
		let t = p(e);
		if (t) {
			let e = [];
			me(t, (t) => {
				_e(e, t);
			}), me(e, (e) => {
				try {
					te(e);
				} catch {}
			});
		}
		let n = g(e);
		if (n) for (let t = n.length - 1; t >= 0; --t) {
			let r = n[t], i = r && r.name;
			if (typeof i == "string") try {
				e.removeAttribute(i);
			} catch {}
		}
	}, Q = function(e, n) {
		try {
			_e(t.removed, {
				attribute: n.getAttributeNode(e),
				from: n
			});
		} catch {
			_e(t.removed, {
				attribute: null,
				from: n
			});
		}
		if (n.removeAttribute(e), e === "is") if (K || xt) try {
			Z(n);
		} catch {}
		else try {
			n.setAttribute(e, "");
		} catch {}
	}, rn = function(e) {
		let t = g(e);
		if (t) for (let n = t.length - 1; n >= 0; --n) {
			let r = t[n], i = r && r.name;
			if (!(typeof i != "string" || z[Y(i)])) try {
				e.removeAttribute(i);
			} catch {}
		}
	}, an = function(e) {
		let t = [e];
		for (; t.length > 0;) {
			let e = t.pop();
			(_ ? _(e) : e.nodeType) === I.element && rn(e);
			let n = p(e);
			if (n) for (let e = n.length - 1; e >= 0; --e) t.push(n[e]);
		}
	}, on = function(e) {
		if (!W) return;
		let t = [e];
		for (; t.length > 0;) {
			let e = t.pop(), n = _ ? _(e) : e.nodeType;
			if (n === I.processingInstruction || n === I.comment && A(tt, e.data)) {
				try {
					te(e);
				} catch {}
				continue;
			}
			if (n === I.element) {
				let t = e, n = Y(v ? v(e) : e.nodeName);
				try {
					t.hasAttribute && t.hasAttribute("patchsrc") && t.removeAttribute("patchsrc"), t.hasAttribute && t.hasAttribute("for") && n !== "label" && n !== "output" && t.removeAttribute("for");
				} catch {}
			}
			let r = p(e);
			if (r) for (let e = r.length - 1; e >= 0; --e) t.push(r[e]);
		}
	}, sn = function(e) {
		let t = null, r = null;
		if (bt) e = "<remove></remove>" + e;
		else {
			let t = xe(e, /^[\r\n\t ]+/);
			r = t && t[0];
		}
		Gt === "application/xhtml+xml" && It === J && (e = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + e + "</body></html>");
		let i = b ? w(e) : e;
		if (It === J) try {
			t = new l().parseFromString(i, Gt);
		} catch {}
		if (!t || !t.documentElement) {
			t = ce.createDocument(It, "template", null);
			try {
				t.documentElement.innerHTML = Lt ? x : i;
			} catch {}
		}
		let a = t.body || t.documentElement;
		return e && r && a.insertBefore(n.createTextNode(r), a.childNodes[0] || null), It === J ? fe.call(t, G ? "html" : "body")[0] : G ? t.documentElement : a;
	}, cn = function(e) {
		let t = y ? y(e) : e.ownerDocument;
		return le.call(t || e, e, c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION, null);
	}, ln = function(e) {
		return e = Se(e, Te, " "), e = Se(e, Ee, " "), e = Se(e, De, " "), e;
	}, un = function(e) {
		e.normalize();
		let t = y ? y(e) : e.ownerDocument, n = le.call(t || e, e, c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION, null), r = n.nextNode();
		for (; r;) r.data = ln(r.data), r = n.nextNode();
		let i = e.querySelectorAll?.call(e, "template");
		i && me(i, (e) => {
			fn(e.content) && un(e.content);
		});
	}, dn = function(e) {
		let t = v ? v(e) : null;
		return typeof t != "string" || Y(t) !== "form" ? !1 : typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || e.attributes !== g(e) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function" || e.nodeType !== _(e) || e.childNodes !== p(e);
	}, fn = function(e) {
		if (!_ || typeof e != "object" || !e) return !1;
		try {
			return _(e) === I.documentFragment;
		} catch {
			return !1;
		}
	}, pn = function(e) {
		if (!_ || typeof e != "object" || !e) return !1;
		try {
			return typeof _(e) == "number";
		} catch {
			return !1;
		}
	};
	function $(e, n, r) {
		e.length !== 0 && me(e, (e) => {
			e.call(t, n, r, X);
		});
	}
	let mn = function(e, t) {
		return !!(W && e.hasChildNodes() && !pn(e.firstElementChild) && A(et, e.textContent) && A(et, e.innerHTML) || W && e.namespaceURI === J && t === "style" && pn(e.firstElementChild) || e.nodeType === I.processingInstruction || W && e.nodeType === I.comment && A(tt, e.data));
	}, hn = function(e, t, n) {
		if (!V[t] && bn(t) && (B.tagNameCheck instanceof RegExp && A(B.tagNameCheck, t) || B.tagNameCheck instanceof Function && B.tagNameCheck(t))) return !1;
		if (Et && !q[t]) {
			let t = m(e), r = p(e);
			if (r && t) {
				let i = r.length;
				for (let a = i - 1; a >= 0; --a) {
					let i = e === n ? ee(r[a], !0) : r[a];
					t.insertBefore(i, f(e));
				}
			}
		}
		return Z(e), !0;
	}, gn = function(e, t, n, r) {
		return e.length === 0 ? t : t === n || t === r ? P(t) : t;
	}, _n = function(e, n) {
		if ($(O.beforeSanitizeElements, e, null), e !== n && m(e) === null) return Dt && an(e), !0;
		if (dn(e)) return Z(e), !0;
		let r = Y(v ? v(e) : e.nodeName);
		if (R = gn(O.uponSanitizeElement, R, ut, vt), $(O.uponSanitizeElement, e, {
			tagName: r,
			allowedTags: R
		}), e !== n && m(e) === null) return Dt && an(e), !0;
		if (mn(e, r)) return Z(e), !0;
		if (V[r] || !(H.tagCheck instanceof Function && H.tagCheck(r)) && !R[r]) {
			let t = hn(e, r, n);
			return t === !1 && $(O.afterSanitizeElements, e, null), t;
		}
		if ((_ ? _(e) : e.nodeType) === I.element && !tn(e) || (r === "noscript" || r === "noembed" || r === "noframes") && A(nt, e.innerHTML)) return Z(e), !0;
		if (U && e.nodeType === I.text) {
			let n = ln(e.textContent);
			e.textContent !== n && (_e(t.removed, { element: e.cloneNode() }), e.textContent = n);
		}
		return $(O.afterSanitizeElements, e, null), !1;
	}, vn = function(e, t, r) {
		if (ft[t] || W && t === "patchsrc" || W && t === "for" && e !== "label" && e !== "output" || Ct && (t === "id" || t === "name") && (r in n || r in qt)) return !1;
		let i = z[t] || H.attributeCheck instanceof Function && H.attributeCheck(t, e);
		if (!(mt && A(Oe, t)) && !(pt && A(M, t))) {
			if (!i) {
				if (!(bn(e) && (B.tagNameCheck instanceof RegExp && A(B.tagNameCheck, e) || B.tagNameCheck instanceof Function && B.tagNameCheck(e)) && (B.attributeNameCheck instanceof RegExp && A(B.attributeNameCheck, t) || B.attributeNameCheck instanceof Function && B.attributeNameCheck(t, e)) || t === "is" && B.allowCustomizedBuiltInElements && (B.tagNameCheck instanceof RegExp && A(B.tagNameCheck, r) || B.tagNameCheck instanceof Function && B.tagNameCheck(r)))) return !1;
			} else if (!Mt[t] && !A(lt, Se(r, Ae, "")) && !((t === "src" || t === "xlink:href" || t === "href") && e !== "script" && Ce(r, "data:") === 0 && At[e]) && !(ht && !A(ke, Se(r, Ae, ""))) && r) return !1;
		}
		return !0;
	}, yn = N({}, [
		"annotation-xml",
		"color-profile",
		"font-face",
		"font-face-format",
		"font-face-name",
		"font-face-src",
		"font-face-uri",
		"missing-glyph"
	]), bn = function(e) {
		return !yn[ye(e)] && A(ct, e);
	}, xn = function(e, t, n, r) {
		if (b && typeof u == "object" && typeof u.getAttributeType == "function" && !n) switch (u.getAttributeType(e, t)) {
			case "TrustedHTML": return w(r);
			case "TrustedScriptURL": return ie(r);
		}
		return r;
	}, Sn = function(e, n, r, i) {
		try {
			r ? e.setAttributeNS(r, n, i) : e.setAttribute(n, i), dn(e) ? Z(e) : ge(t.removed);
		} catch {
			Q(n, e);
		}
	}, Cn = function(e) {
		$(O.beforeSanitizeAttributes, e, null);
		let t = e.attributes;
		if (!t || dn(e)) return;
		z = gn(O.uponSanitizeAttribute, z, dt, yt);
		let n = {
			attrName: "",
			attrValue: "",
			keepAttr: !0,
			allowedAttributes: z,
			forceKeepAttr: void 0
		}, r = t.length, i = Y(e.nodeName);
		for (; r--;) {
			let a = t[r], o = a.name, s = a.namespaceURI, c = a.value, l = Y(o), u = c, d = o === "value" ? u : we(u);
			if (n.attrName = l, n.attrValue = d, n.keepAttr = !0, n.forceKeepAttr = void 0, $(O.uponSanitizeAttribute, e, n), d = n.attrValue, wt && (l === "id" || l === "name") && Ce(d, Tt) !== 0 && (Q(o, e), d = Tt + d), W && A(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, d)) {
				Q(o, e);
				continue;
			}
			if (l === "attributename" && xe(d, "href")) {
				Q(o, e);
				continue;
			}
			if (!n.forceKeepAttr) {
				if (!n.keepAttr) {
					Q(o, e);
					continue;
				}
				if (!gt && A(rt, d)) {
					Q(o, e);
					continue;
				}
				if (U && (d = ln(d)), !vn(i, l, d)) {
					Q(o, e);
					continue;
				}
				d = xn(i, l, s, d), d !== u && Sn(e, o, s, d);
			}
		}
		$(O.afterSanitizeAttributes, e, null);
	}, wn = function(e) {
		let t = null, n = cn(e);
		for ($(O.beforeSanitizeShadowDOM, e, null); t = n.nextNode();) if ($(O.uponSanitizeShadowNode, t, null), _n(t, e), Cn(t), fn(t.content) && wn(t.content), (_ ? _(t) : t.nodeType) === I.element) {
			let e = h(t);
			fn(e) && (Tn(e), wn(e));
		}
		$(O.afterSanitizeShadowDOM, e, null);
	}, Tn = function(e) {
		let t = [{
			node: e,
			shadow: null
		}];
		for (; t.length > 0;) {
			let e = t.pop();
			if (e.shadow) {
				wn(e.shadow);
				continue;
			}
			let n = e.node, r = (_ ? _(n) : n.nodeType) === I.element, i = p(n);
			if (i) for (let e = i.length - 1; e >= 0; --e) t.push({
				node: i[e],
				shadow: null
			});
			if (r) {
				let e = v ? v(n) : null;
				if (typeof e == "string" && Y(e) === "template") {
					let e = n.content;
					fn(e) && t.push({
						node: e,
						shadow: null
					});
				}
			}
			if (r) {
				let e = h(n);
				fn(e) && t.push({
					node: null,
					shadow: e
				}, {
					node: e,
					shadow: null
				});
			}
		}
	};
	return t.sanitize = function(e) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = null, a = null, o = null, s = null;
		if (Lt = !e, Lt && (e = "<!-->"), typeof e != "string" && !pn(e) && (e = je(e), typeof e != "string")) throw j("dirty is not a string, aborting");
		if (!t.isSupported) return e;
		_t ? (R = vt, z = yt) : Yt(n), (O.uponSanitizeElement.length > 0 || O.uponSanitizeAttribute.length > 0) && (R = P(R)), O.uponSanitizeAttribute.length > 0 && (z = P(z)), t.removed = [];
		let c = Dt && typeof e != "string" && pn(e);
		if (c) {
			on(e);
			let t = v ? v(e) : e.nodeName;
			if (typeof t == "string") {
				let n = Y(t);
				if (!R[n] || V[n]) throw nn(e), j("root node is forbidden and cannot be sanitized in-place");
			}
			if (dn(e)) throw nn(e), j("root node is clobbered and cannot be sanitized in-place");
			try {
				Tn(e);
			} catch (t) {
				throw nn(e), t;
			}
		} else if (pn(e)) i = sn("<!---->"), a = i.ownerDocument.importNode(e, !0), a.nodeType === I.element && a.nodeName === "BODY" || a.nodeName === "HTML" ? i = a : i.appendChild(a), Tn(a);
		else {
			if (!K && !U && !G && e.indexOf("<") === -1) return b && St ? w(e) : e;
			if (i = sn(e), !i) return K ? null : St ? x : "";
		}
		i && bt && Z(i.firstChild);
		let l = c ? e : i;
		try {
			let e = cn(l);
			for (; o = e.nextNode();) _n(o, l), Cn(o), fn(o.content) && wn(o.content);
		} catch (n) {
			throw c && (nn(e), me(t.removed, (e) => {
				e.element && an(e.element);
			})), n;
		}
		if (c) return me(t.removed, (e) => {
			e.element && an(e.element);
		}), U && un(e), e;
		if (K) {
			if (U && un(i), xt) for (s = de.call(i.ownerDocument); i.firstChild;) s.appendChild(i.firstChild);
			else s = i;
			return (z.shadowroot || z.shadowrootmode) && (s = pe.call(r, s, !0)), s;
		}
		let u = G ? i.outerHTML : i.innerHTML;
		return G && R["!doctype"] && i.ownerDocument && i.ownerDocument.doctype && i.ownerDocument.doctype.name && A(Qe, i.ownerDocument.doctype.name) && (u = "<!DOCTYPE " + i.ownerDocument.doctype.name + ">\n" + u), U && (u = ln(u)), b && St ? w(u) : u;
	}, t.setConfig = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		Yt(e), _t = !0, vt = R, yt = z;
	}, t.clearConfig = function() {
		X = null, _t = !1, vt = null, yt = null, b = ne, x = "";
	}, t.isValidAttribute = function(e, t, n) {
		X || Yt({});
		let r = Y(e), i = Y(t);
		return vn(r, i, n);
	}, t.addHook = function(e, t) {
		typeof t == "function" && k(O, e) && _e(O[e], t);
	}, t.removeHook = function(e, t) {
		if (k(O, e)) {
			if (t !== void 0) {
				let n = he(O[e], t);
				return n === -1 ? void 0 : ve(O[e], n, 1)[0];
			}
			return ge(O[e]);
		}
	}, t.removeHooks = function(e) {
		k(O, e) && (O[e] = []);
	}, t.removeAllHooks = function() {
		O = ot();
	}, t;
}
var ct = st(), lt = [
	"http:",
	"https:",
	"mailto:"
];
function R(e) {
	try {
		let t = new URL(e);
		return lt.includes(t.protocol);
	} catch {
		return !1;
	}
}
function ut(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
function z(e) {
	return ct.sanitize(e);
}
function dt(e) {
	let t = ["platform.twitter.com", "platform.x.com"], n = !1;
	try {
		let r = new URL(e.getAttribute("src") || "");
		n = r.protocol === "https:" && t.includes(r.hostname);
	} catch {
		n = !1;
	}
	if (!n) {
		e.parentNode?.removeChild(e);
		return;
	}
	e.textContent = "";
}
function B(e) {
	let t = !1;
	try {
		let n = new URL(e.getAttribute("src") || "", window.location.href);
		t = (n.protocol === "https:" || n.protocol === "http:") && n.origin !== window.location.origin;
	} catch {
		t = !1;
	}
	if (!t) {
		e.parentNode?.removeChild(e);
		return;
	}
	e.setAttribute("sandbox", "allow-scripts allow-same-origin allow-popups allow-presentation allow-forms");
}
var V = ct(window);
V.addHook("uponSanitizeElement", (e, t) => {
	let n = e;
	t.tagName === "script" ? dt(n) : t.tagName === "iframe" && B(n);
});
function ft(e) {
	return V.sanitize(e, {
		ADD_TAGS: ["iframe", "script"],
		ADD_ATTR: [
			"target",
			"frameborder",
			"allowfullscreen",
			"async",
			"charset",
			"sandbox"
		],
		FORCE_BODY: !0
	});
}
function H(e, t = []) {
	if (t.length === 0) return e.replace(/<br\s*\/?>/gi, " ").replace(/<\/p>\s*<p>|<\/div>\s*<div>|<\/h[1-6]>\s*<|<\/li>\s*<li>|<\/a>/gi, " ").replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
	let n = t.map((e) => e.toLowerCase()), r = {}, i = 0, a = e.replace(/<\/(h[1-6]|p|div|li|blockquote|pre)>/gi, "<br>");
	for (let e of n) {
		let t = RegExp(`<${e}[^>]*>.*?<\\/${e}>|<${e}[^>]*\\/?>`, "gis");
		a = a.replace(t, (e) => {
			let t = `__EXCLUDED_TAG_${i += 1}__`;
			return r[t] = e, t;
		});
	}
	let o = a;
	n.includes("br") || (o = a.replace(/<br\s*\/?>/gi, " "));
	let s = o.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
	for (let [e, t] of Object.entries(r)) s = s.replace(e, t);
	return s;
}
var pt = (e) => {
	let t = document.createElement("div");
	t.innerHTML = e;
	let n = t.getElementsByTagName("a");
	for (let e = 0; e < n.length; e++) (n[e].getAttribute("href") || "").match(/^\s*(javascript|data|vbscript):/i) && n[e].removeAttribute("href"), n[e].setAttribute("target", "_blank"), n[e].setAttribute("rel", "noopener noreferrer");
	return t.innerHTML;
}, mt = (e) => {
	let t = document.createElement("div");
	t.innerHTML = e;
	let n = t.querySelectorAll(".kg-video-card video");
	for (let e = 0; e < n.length; e++) {
		let t = n[e];
		t.setAttribute("playsinline", ""), t.setAttribute("webkit-playsinline", ""), t.setAttribute("x5-playsinline", ""), t.hasAttribute("autoplay") && (t.setAttribute("muted", ""), t.muted = !0);
	}
	return t.innerHTML;
};
//#endregion
export { ft as a, x as c, m as d, p as f, pt as i, v as l, ut as n, z as o, f as p, R as r, H as s, mt as t, g as u };

//# sourceMappingURL=content-formatters-DdWZWlsa.js.map