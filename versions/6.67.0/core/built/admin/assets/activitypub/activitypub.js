(function(){try{if(typeof document<`u`){var e=document.createElement(`style`);e.appendChild(document.createTextNode(`.shade-activitypub{animation-name:none}@keyframes bump{0%{transform:scale(1)}50%{transform:scale(.9)}to{transform:scale(1)}}@keyframes slideUp{0%{opacity:1;transform:translate(0,0)}50%{opacity:0;transform:translateY(-100%)}51%{opacity:0;transform:translateY(100%)}to{opacity:1;transform:translate(0,0)}}@keyframes slideDown{0%{opacity:1;transform:translate(0,0)}50%{opacity:0;transform:translateY(100%)}51%{opacity:0;transform:translateY(-100%)}to{opacity:1;transform:translate(0,0)}}.animate-slide-up{will-change:transform, opacity;animation:.3s ease-in-out slideUp;display:inline-block}.animate-slide-down{will-change:transform, opacity;animation:.3s ease-in-out slideDown;display:inline-block}button.ap-action-button:active svg{animation:.3s ease-in-out bump}.ap-red-heart path{fill:#fb2d8d}.ap-note-content a,.ap-profile-content a,.ap-note-content-large a{color:#00a4eb!important}.ap-note-content a:hover,.ap-profile-content a:hover,.ap-note-content-large a:hover{text-decoration:underline!important}.ap-note-content span.invisible,.ap-profile-content span.invisible,.ap-note-content-large span.invisible{display:none}.ap-note-content a:not(.hashtag) span.ellipsis:after,.ap-profile-content a:not(.hashtag) span.ellipsis:after,.ap-note-content-large a:not(.hashtag) span.ellipsis:after,.ap-likes .ellipsis:after{content:"…"}.ap-note-content>*+*{margin-top:1.2rem!important}.ap-note-content-large>*+*{margin-top:1.65rem!important}.ap-note-content>h1+*,.ap-note-content>h2+*,.ap-note-content>h3+*{margin-top:.6rem!important}.ap-note-content-large>h1+*,.ap-note-content-large>h2+*,.ap-note-content-large>h3+*{margin-top:.8rem!important}.ap-note-content figure,.ap-note-content-large figure{display:none}.ap-note-content ul,.ap-note-content-large ul{padding-left:1rem!important;list-style-type:"-"!important}.ap-note-content ol,.ap-note-content-large ol{padding-left:1.7rem!important;list-style:auto!important}.ap-note-content li{padding-left:.4rem!important;font-size:1.4rem!important}.ap-note-content-large li{padding-left:.4rem!important;font-size:1.6rem!important}.ap-note-content h2,.ap-note-content h3,.ap-note-content h4,.ap-note-content h5{font-size:1.4rem!important;font-weight:600!important;line-height:1.375!important}.ap-note-content-large h2,.ap-note-content-large h3,.ap-note-content-large h4,.ap-note-content-large h5{font-size:1.6rem!important}.ap-note-content blockquote,.ap-note-content-large blockquote{border-left:2px solid #e5e9ed;padding-left:.8rem;margin:.6rem 0!important}.ap-note-content blockquote p{font-size:1.4rem;font-weight:400}.ap-note-content-large blockquote p{font-size:1.6rem;font-weight:400}.ap-note-content code,.ap-note-content-large code{color:#15171a;background-color:#f9fafb!important;font-size:1.3rem!important}.ap-note-content-large code{font-size:1.5rem!important}.ap-note-content mark,.ap-note-content-large mark{color:#15171a;background-color:#0000!important}.ap-likes .invisible{width:0;height:0;font-size:0;line-height:0;display:inline-block;position:absolute}.ap-textarea{field-sizing:content}
/*$vite$:1*/`)),document.head.appendChild(e)}}catch(e){console.error(`vite-plugin-css-injected-by-js`,e)}})();import { d as e } from "./_react-D4KM8XEu.js";
import { C as t, _ as n, r } from "./chunk-OB3PAWPO-CAV1KLte.js";
import { R as i, q as a, s as o } from "./use-navigate-with-base-path-CjM3S5Z7.js";
import { C as s } from "./use-activity-pub-queries-C5sHP1nj.js";
import { gt as c, o as l, t as u } from "./routes-YnsvZ4ZW.js";
//#region ../shade/es/shade-app.js
e();
var d = t(), f = ({ darkMode: e, controlShape: t, isAdmin7: n = !0, className: r, children: i, ...s }) => /* @__PURE__ */ (0, d.jsx)("div", {
	className: a("shade", r),
	...s,
	"data-admin7": n,
	children: /* @__PURE__ */ (0, d.jsx)(o, {
		controlShape: t,
		darkMode: e,
		isAdmin7: n,
		children: i
	})
}), p = ({ framework: e, activityPubEnabled: t }) => t === !1 ? null : /* @__PURE__ */ (0, d.jsx)(n, {
	...e,
	children: /* @__PURE__ */ (0, d.jsx)(i, {
		prefix: "/",
		routes: u,
		children: /* @__PURE__ */ (0, d.jsx)(c, { children: /* @__PURE__ */ (0, d.jsx)(f, {
			className: "shade-activitypub",
			darkMode: !1,
			children: /* @__PURE__ */ (0, d.jsx)(r, {})
		}) })
	})
});
//#endregion
export { l as ActivityPubHostLayoutProvider, p as AdminXApp, c as FeatureFlagsProvider, u as routes, s as useNotificationsCountForUser };

//# sourceMappingURL=activitypub.js.map