(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[265],{25305(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.cleanBasicHtml=function(e="",t={}){const r=Object.assign({},{},t)
if(!r.createDocument){const e="undefined"!=typeof DOMParser&&DOMParser||"undefined"!=typeof window&&window.DOMParser
if(!e)throw new Error("cleanBasicHtml() must be passed a `createDocument` function as an option when used in a non-browser environment")
r.createDocument=function(t){return(new e).parseFromString(t,"text/html")}}let s=e
if(r.allowBr&&"<br>"!==s||(s=s.replace(/<br\s?\/?>/g," ")),r.removeCodeWrappers&&(s=function(e){return e.replace(/<code\b[^>]*>((.*?){.*?}(.*?))<\/code>/gi,"$1")}(s)),s=s.replace(/(\s|&nbsp;){2,}/g," ").trim().replace(/^&nbsp;|&nbsp$/g,"").trim(),s){const e=r.createDocument(s)
if(""===e.body.textContent)return""
e.body.querySelectorAll("*").forEach(t=>{if(!t.textContent?.trim().replace(/\u200c+/g,"")){if(r.allowBr&&"BR"===t.tagName)return
if(r.allowBr&&t.querySelector("br"))return t.replaceWith(e.createElement("br"))
if(t.textContent&&t.textContent.length>0){const r=e.createTextNode(" ")
return t.replaceWith(r)}return t.remove()}}),s=r.firstChildInnerContent&&e.body.firstElementChild?e.body.firstElementChild.innerHTML.trim():e.body.innerHTML.trim()}return s}},27929(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.cleanBasicHtml=void 0
var s=r(25305)
Object.defineProperty(t,"cleanBasicHtml",{enumerable:!0,get:function(){return s.cleanBasicHtml}})},90724(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.mobiledocToLexical=t.lexicalToMobiledoc=void 0
var s=r(34104)
Object.defineProperty(t,"lexicalToMobiledoc",{enumerable:!0,get:function(){return s.lexicalToMobiledoc}}),Object.defineProperty(t,"mobiledocToLexical",{enumerable:!0,get:function(){return s.mobiledocToLexical}})},34104(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.mobiledocToLexical=t.lexicalToMobiledoc=void 0
const s=r(52217)
Object.defineProperty(t,"lexicalToMobiledoc",{enumerable:!0,get:function(){return s.lexicalToMobiledoc}})
const a=r(22297)
Object.defineProperty(t,"mobiledocToLexical",{enumerable:!0,get:function(){return a.mobiledocToLexical}})},52217(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.lexicalToMobiledoc=function(e){if(null==e||""===e)return JSON.stringify(a)
const t=JSON.parse(e)
if(!t.root)return JSON.stringify(a)
const n={version:r,ghostVersion:s,atoms:[],cards:[],markups:[],sections:[]}
return t.root.children?.forEach(e=>function(e,t){"paragraph"===e.type&&p(e,t),i.includes(e.type)&&p(e,t,e.tag),"quote"===e.type&&p(e,t,"blockquote"),"aside"===e.type&&p(e,t,"aside"),"list"===e.type&&function(e,t,r="ul"){const s=function(e,t){const r=[]
return function(e){const t=[];(function e(r){r.children?.forEach(r=>{r.children?.forEach(t=>{"list"===t.type&&(e(t),r.children.splice(r.children.indexOf(t),1))}),"listitem"===r.type&&r.children?.length&&t.push(r)})})(e),e.children=t}(e),e.children?.forEach(e=>{if("listitem"===e.type){const s=m(e,t)
r.push(s)}}),r}(e,t),a=[3,r,s]
t.sections.push(a)}(e,t,e.tag),l.includes(e.type)&&function(e,t){const r=e.type
let s=e.type
u[s]&&(s=u[s])
const a={}
for(const o of Object.keys(e))"type"!==o&&(a[o]=e[o])
if(c[r]){const e=c[r]
for(const[t,r]of Object.entries(e))a[r]=a[t],delete a[t]}const n=[s,a]
t.cards.push(n)
const i=[10,t.cards.length-1]
t.sections.push(i)}(e,t)}(e,n)),JSON.stringify(n)}
const r="0.3.1",s="4.0",a={version:r,ghostVersion:s,markups:[],atoms:[],cards:[],sections:[[1,"p",[[0,[],0,""]]]]},n=new Map([[1,"strong"],[2,"em"],[4,"s"],[8,"u"],[16,"code"],[32,"sub"],[64,"sup"]]),i=["heading","extended-heading"],o=["text","extended-text"],l=["audio","bookmark","button","callout","codeblock","email-cta","email","embed","file","gallery","header","horizontalrule","html","image","markdown","paywall","product","signup","toggle","video"],u={codeblock:"code",horizontalrule:"hr"},c={embed:{embedType:"type"}}
function d(e,t){let r=t.markups.findIndex(t=>t[0]===e)
return-1===r&&(t.markups.push([e]),r=t.markups.length-1),r}function p(e,t,r="p"){const s=[1,r,m(e,t)]
t.sections.push(s)}function m(e,t){const r=[]
if(e.children?.length){let s=[]
e.children.forEach((a,n)=>{if(o.includes(a.type))if(0!==a.format){const i=[]
let l=0
if(h(a.format).forEach(e=>{s.includes(e)||(s.push(e),i.push(e))}),e.children[n+1]&&o.includes(e.children[n+1].type)){const t=h(e.children[n+1].format),r=s.findIndex(e=>!t.includes(e));-1!==r&&(l=s.slice(r).length,s=s.slice(0,r))}else l=s.length,s=[]
const u=i.map(e=>d(e,t))
r.push([0,u,l,a.text])}else{const e=s.length
s=[],r.push([0,[],e,a.text])}if("link"===a.type){const e=["a",["href",a.url]],n=t.markups.push(e)-1
a.children?.forEach((i,o)=>{if(0!==i.format){const l=[],u=[]
0===o&&(s.push(e),l.push(n))
let c=0
if(h(i.format).forEach(e=>{s.includes(e)||(s.push(e),u.push(e))}),a.children[o+1]){const t=h(a.children[o+1].format),r=s.findIndex(r=>!(JSON.stringify(r)===JSON.stringify(e)||t.includes(r)));-1!==r&&(c=s.slice(r).length,s=s.slice(0,r))}else c=s.length,s=[]
l.push(...u.map(e=>d(e,t))),r.push([0,l,c,i.text])}else{const t=[]
0===o&&(s.push(e),t.push(n))
let l=s.length-1
a.children[o+1]||(l+=1,s=[]),r.push([0,t,l,i.text])}})}if("linebreak"===a.type){const e=function(e,t){let r=t.atoms.findIndex(t=>t===e)
return-1===r&&(t.atoms.push(e),r=t.atoms.length-1),r}(["soft-return","",{}],t)
r.push([1,[],0,e])}})}else r.push([0,[],0,""])
return r}function h(e){const t=[]
return n.forEach((r,s)=>{0!==(e&s)&&t.push(r)}),t}},22297(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.mobiledocToLexical=function(e){if(null==e||""===e)return JSON.stringify(r)
const t=JSON.parse(e)
if(!t.sections)return JSON.stringify(r)
const s={root:{children:[],direction:null,format:"",indent:0,type:"root",version:1}}
return t.sections.forEach(e=>function(e,t,r){const s=e[0]
if(1===s){const s=function(e,t){const r=e[1],s=e[2],a=d(r)
return u(a,s,t),a}(e,t)
r.root.children.push(s),s.children&&s.children.length>0&&(r.root.direction="ltr")}else if(2===s);else if(3===s){const s=function(e,t){const r=e[1],s=e[2],a=d(r,{tag:r,type:"list",listType:"ul"===r?"bullet":"number",start:1,direction:"ltr"})
return s?.forEach((e,r)=>{const s=d("li",{type:"listitem",value:r+1,direction:"ltr"})
u(s,e,t),a.children.push(s)}),a}(e,t)
r.root.children.push(s),r.root.direction="ltr"}else if(10===s){const s=function(e,t){const r=e[1]
let[s,a]=t.cards[r]
if(s=i[s]||s,o[s]){const e=o[s]
for(const[t,r]of Object.entries(e))a[r]=a[t],delete a[t]}return l[s]&&(a=l[s](a)),delete a.type,{type:s,...a}}(e,t)
r.root.children.push(s)}}(e,t,s)),JSON.stringify(s)}
const r={root:{children:[],direction:null,format:"",indent:0,type:"root",version:1}},s={p:{type:"paragraph"},h1:{type:"heading",tag:"h1"},h2:{type:"heading",tag:"h2"},h3:{type:"heading",tag:"h3"},h4:{type:"heading",tag:"h4"},h5:{type:"heading",tag:"h5"},h6:{type:"heading",tag:"h6"},blockquote:{type:"quote"},aside:{type:"aside"},a:{type:"link",rel:null,target:null,title:null,url:null}},a={"soft-return":{type:"linebreak",version:1}},n={strong:1,b:1,em:2,i:2,s:4,u:8,code:16,sub:32,sup:64},i={code:"codeblock",hr:"horizontalrule"},o={embed:{type:"embedType"}},l={callout:e=>(e.backgroundColor&&!e.backgroundColor.match(/^[a-zA-Z\d-]+$/)&&(e.backgroundColor="white"),e)}
function u(e,t,r){const s=r.markups,n=r.atoms,i=[]
let o,l,u,h=!1
for(let f=0;f<t.length;f++){const[r,g,y,b]=t[f]
if("atom"==(0===r?"markup":"atom")){const t=n[b][0]
p(e,a[t])
continue}if(g.forEach(e=>{const t=s[e]
if("a"===t[0]){h=!0
const e=t[1]
e&&"href"===e[0]&&(l=e[1]),e&&"rel"===e[2]&&(u=e[3])}i.push(t)}),void 0!==b){const t=m(i)
h?(o=void 0!==o?o:d("a",{url:l,rel:u||null}),p(o,c(b,t))):p(e,c(b,t))}for(let t=0;t<y;t++){const t=i.pop()
t&&"a"===t[0]&&(p(e,o),h=!1,l=void 0,o=void 0)}}}function c(e,t){return{detail:0,format:t,mode:"normal",style:"",text:e,type:"text",version:1}}function d(e,t={}){const r=s[e]
return{children:[],direction:"ltr",format:"",indent:0,...r,...t,type:r?.type||t.type||e,version:1}}function p(e,t){t&&(e.children.push(t),t&&"text"in t&&t.text&&(e.direction="ltr"))}function m(e){let t=0
return e.forEach(e=>{const r=e[0]
r in n&&(t|=n[r])}),t}},54551(e,t,r){var s={"./af":1199,"./af.js":1199,"./ar":36347,"./ar-dz":77230,"./ar-dz.js":77230,"./ar-kw":63390,"./ar-kw.js":63390,"./ar-ly":65283,"./ar-ly.js":65283,"./ar-ma":30570,"./ar-ma.js":30570,"./ar-ps":15505,"./ar-ps.js":15505,"./ar-sa":94112,"./ar-sa.js":94112,"./ar-tn":20386,"./ar-tn.js":20386,"./ar.js":36347,"./az":2067,"./az.js":2067,"./be":2405,"./be.js":2405,"./bg":77091,"./bg.js":77091,"./bm":36429,"./bm.js":36429,"./bn":88548,"./bn-bd":62919,"./bn-bd.js":62919,"./bn.js":88548,"./bo":94219,"./bo.js":94219,"./br":89248,"./br.js":89248,"./bs":30551,"./bs.js":30551,"./ca":36e3,"./ca.js":36e3,"./cs":46330,"./cs.js":46330,"./cv":32805,"./cv.js":32805,"./cy":51096,"./cy.js":51096,"./da":96035,"./da.js":96035,"./de":3015,"./de-at":30917,"./de-at.js":30917,"./de-ch":24475,"./de-ch.js":24475,"./de.js":3015,"./dv":29706,"./dv.js":29706,"./el":95637,"./el.js":95637,"./en-au":33146,"./en-au.js":33146,"./en-ca":45800,"./en-ca.js":45800,"./en-gb":2053,"./en-gb.js":2053,"./en-ie":86274,"./en-ie.js":86274,"./en-il":53993,"./en-il.js":53993,"./en-in":2663,"./en-in.js":2663,"./en-nz":38060,"./en-nz.js":38060,"./en-sg":95022,"./en-sg.js":95022,"./eo":14060,"./eo.js":14060,"./es":44920,"./es-do":98508,"./es-do.js":98508,"./es-mx":22604,"./es-mx.js":22604,"./es-us":75269,"./es-us.js":75269,"./es.js":44920,"./et":85773,"./et.js":85773,"./eu":75598,"./eu.js":75598,"./fa":17933,"./fa.js":17933,"./fi":83909,"./fi.js":83909,"./fil":80893,"./fil.js":80893,"./fo":24455,"./fo.js":24455,"./fr":49940,"./fr-ca":53317,"./fr-ca.js":53317,"./fr-ch":77678,"./fr-ch.js":77678,"./fr.js":49940,"./fy":53429,"./fy.js":53429,"./ga":96692,"./ga.js":96692,"./gd":72511,"./gd.js":72511,"./gl":82103,"./gl.js":82103,"./gom-deva":33906,"./gom-deva.js":33906,"./gom-latn":96893,"./gom-latn.js":96893,"./gu":55896,"./gu.js":55896,"./he":98755,"./he.js":98755,"./hi":46639,"./hi.js":46639,"./hr":9130,"./hr.js":9130,"./hu":29171,"./hu.js":29171,"./hy-am":26406,"./hy-am.js":26406,"./id":74694,"./id.js":74694,"./is":24220,"./is.js":24220,"./it":72681,"./it-ch":40757,"./it-ch.js":40757,"./it.js":72681,"./ja":33649,"./ja.js":33649,"./jv":75572,"./jv.js":75572,"./ka":14824,"./ka.js":14824,"./kk":81770,"./kk.js":81770,"./km":35724,"./km.js":35724,"./kn":94005,"./kn.js":94005,"./ko":65814,"./ko.js":65814,"./ku":17028,"./ku-kmr":25683,"./ku-kmr.js":25683,"./ku.js":17028,"./ky":23984,"./ky.js":23984,"./lb":21038,"./lb.js":21038,"./lo":4009,"./lo.js":4009,"./lt":27208,"./lt.js":27208,"./lv":53970,"./lv.js":53970,"./me":13030,"./me.js":13030,"./mi":51413,"./mi.js":51413,"./mk":85336,"./mk.js":85336,"./ml":26189,"./ml.js":26189,"./mn":17227,"./mn.js":17227,"./mr":1975,"./mr.js":1975,"./ms":12256,"./ms-my":87323,"./ms-my.js":87323,"./ms.js":12256,"./mt":36053,"./mt.js":36053,"./my":1042,"./my.js":1042,"./nb":1228,"./nb.js":1228,"./ne":60057,"./ne.js":60057,"./nl":31442,"./nl-be":17014,"./nl-be.js":17014,"./nl.js":31442,"./nn":46152,"./nn.js":46152,"./oc-lnc":62100,"./oc-lnc.js":62100,"./pa-in":41771,"./pa-in.js":41771,"./pl":6300,"./pl.js":6300,"./pt":88340,"./pt-br":20645,"./pt-br.js":20645,"./pt.js":88340,"./ro":15195,"./ro.js":15195,"./ru":75813,"./ru.js":75813,"./sd":62339,"./sd.js":62339,"./se":6876,"./se.js":6876,"./si":41176,"./si.js":41176,"./sk":52930,"./sk.js":52930,"./sl":38891,"./sl.js":38891,"./sq":91392,"./sq.js":91392,"./sr":28025,"./sr-cyrl":50808,"./sr-cyrl.js":50808,"./sr.js":28025,"./ss":38538,"./ss.js":38538,"./sv":50773,"./sv.js":50773,"./sw":22582,"./sw.js":22582,"./ta":23155,"./ta.js":23155,"./te":27863,"./te.js":27863,"./tet":29464,"./tet.js":29464,"./tg":58425,"./tg.js":58425,"./th":9492,"./th.js":9492,"./tk":21341,"./tk.js":21341,"./tl-ph":37317,"./tl-ph.js":37317,"./tlh":59394,"./tlh.js":59394,"./tr":15622,"./tr.js":15622,"./tzl":26952,"./tzl.js":26952,"./tzm":61567,"./tzm-latn":83753,"./tzm-latn.js":83753,"./tzm.js":61567,"./ug-cn":34856,"./ug-cn.js":34856,"./uk":40816,"./uk.js":40816,"./ur":25695,"./ur.js":25695,"./uz":51639,"./uz-latn":15521,"./uz-latn.js":15521,"./uz.js":51639,"./vi":80885,"./vi.js":80885,"./x-pseudo":97765,"./x-pseudo.js":97765,"./yo":93592,"./yo.js":93592,"./zh-cn":71922,"./zh-cn.js":71922,"./zh-hk":37406,"./zh-hk.js":37406,"./zh-mo":81043,"./zh-mo.js":81043,"./zh-tw":72998,"./zh-tw.js":72998}
function a(e){var t=n(e)
return r(t)}function n(e){if(!r.o(s,e)){var t=new Error("Cannot find module '"+e+"'")
throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=n,e.exports=a,a.id=54551},86147(){},21901(){},50(e,t){window._eai_r=require,window._eai_d=define},82211(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
var s="ConfigResponseType",a=s,n=r(90665).createQuery({dataType:s,path:"/config/"}),i="/pro"
t.DEFAULT_UPGRADE_ROUTE=i,t.configDataType=a,t.hasSendingDomain=e=>{const t=e?.hostSettings?.managedEmail?.sendingDomain
return"string"==typeof t&&t.length>0},t.isManagedEmail=e=>!!e?.hostSettings?.managedEmail?.enabled,t.sendingDomain=e=>e?.hostSettings?.managedEmail?.sendingDomain,t.upgradeRoute=e=>{const t=e?.hostSettings?.billing?.upgradeUrl
return t?t.replace(/^#/,""):i},t.useBrowseConfig=n},48808(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(51184),a=r(79522)
let n=r(6841),i=r(80576)
var o="UsersResponseType",l=a.apiUrl("/users/me/",{include:"roles"}),u=[o,l]
t.currentUserQueryKey=u,t.useCurrentUser=({requestOptions:e}={})=>{const t=a.useFetchApi(),r=s(),o=(0,n.useQuery)({queryKey:u,queryFn:()=>t(l,e),select:e=>e.users[0],retryOnMount:!1})
return(0,i.useEffect)(()=>{o.error&&r(o.error)},[r,o.error]),o},t.usersDataType=o},14612(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
let s=r(74937)
var a=s.z.string().transform(e=>new Date(e)).pipe(s.z.date()),n=s.z.object({active:s.z.literal(!0),paymentFailedAt:a,suspendsAt:a}).refine(({paymentFailedAt:e,suspendsAt:t})=>t.getTime()>e.getTime())
t.DUNNING_PAYMENT_SETTLED_STORAGE_KEY="ghost-dunning-payment-settled-for",t.DUNNING_PAY_RETURN_ROUTE_STORAGE_KEY="ghost-dunning-pay-return-route",t.parseDunningConfig=function(e){const t=n.safeParse(e)
return t.success?t.data:null}},16757(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(90665),a=r(72215)
var n="InvitesResponseType",i=s.createInfiniteQuery({dataType:n,path:"/invites/",permissions:["Owner","Administrator"],defaultSearchParams:{limit:"100",include:"roles"},defaultNextPageParams:(e,t)=>({...t,page:(e.meta?.pagination.next||1).toString()}),returnData:e=>{const{pages:t}=e,r=t.flatMap(e=>e.invites),s=t[t.length-1].meta
return{invites:r,meta:s,isEnd:!s||s.pagination.pages===s.pagination.page}}}),o=s.createMutation({method:"POST",path:()=>"/invites/",body:({email:e,roleId:t})=>({invites:[{email:e,role_id:t,expires:null,status:null,token:null}]}),updateQueries:{dataType:n,emberUpdateType:"createOrUpdate",update:a.insertToQueryCache("invites")}}),l=s.createMutation({path:e=>`/invites/${e}/`,method:"DELETE",updateQueries:{dataType:n,emberUpdateType:"delete",update:a.deleteFromQueryCache("invites")}})
t.useAddInvite=o,t.useBrowseInvites=i,t.useDeleteInvite=l},19476(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
let s=r(26031)
var a=e=>`${e.type}:${e.data.id}`,n=e=>"email_complaint_event"===e?["email_complaint_event","email_complained_event"]:[e]
function i(e){const t=e.data.created_at
if(!t||!Number.isFinite(Date.parse(t)))throw new Error("Member activity returned an event without a valid timestamp.")
return new Date(t).toISOString().replace("T"," ").replace(/(?:\.000)?Z$/,"")}function o(e,t){const r=e.meta?.pagination.total
return"number"==typeof r?r>e.events.length:e.events.length>=t}t.loadMemberActivityPage=async function({read:e,filter:t="",limit:r,cursor:l={kind:"older"},signal:u}){if(!Number.isInteger(r)||r<1)throw new Error("Member activity page size must be a positive integer.")
let c="boundary"===l.kind?{...l,seen:[...l.seen],completedTypes:[...l.completedTypes]}:{...l}
const d=[],p=async(r,s)=>{u?.throwIfAborted()
const a=await e({filter:[t,...r].filter(Boolean).join("+"),limit:String(s)})
if(u?.throwIfAborted(),function(e){for(const t of e)if(i(t),"string"!=typeof t.data.id||!t.data.id||!t.type)throw new Error("Member activity returned an event without a valid identity.")}(a.events),a.events.length>s||!a.events.length&&o(a,s))throw new Error("Member activity pagination did not make progress.")
return a}
for(;d.length<r;){const e=r-d.length
if("older"===c.kind){const t=c.before,n=await p(t?[`data.created_at:<${(0,s.escapeNqlString)(t)}`]:[],e)
if(t&&n.events.some(e=>i(e)>=t))throw new Error("Member activity returned events outside the requested time range.")
if(d.push(...n.events),!o(n,e))return{events:d,meta:n.meta}
const l=i(n.events[n.events.length-1])
if(c={kind:"boundary",timestamp:l,seen:n.events.filter(e=>i(e)===l).map(a),completedTypes:[]},d.length===r)return{events:d,meta:n.meta,nextCursor:c}
continue}const t=`data.created_at:${(0,s.escapeNqlString)(c.timestamp)}`
if(!c.currentType){const e=await p([t,...c.completedTypes.length?[`type:-[${c.completedTypes.flatMap(n).map(s.escapeNqlString).join(",")}]`]:[]],1),r=e.events[0]
if(!r||!c.completedTypes.length&&e.meta?.pagination.total===c.seen.length){c={kind:"older",before:c.timestamp}
continue}if(i(r)!==c.timestamp||c.completedTypes.includes(r.type))throw new Error("Member activity returned events outside the requested type or timestamp.")
c.currentType=r.type}const l=c.beforeId,u=c.currentType,m=c.timestamp,h=await p([t,`type:[${n(u).map(s.escapeNqlString).join(",")}]`,...l?[`id:<${(0,s.escapeNqlString)(l)}`]:[]],e)
if(h.events.some(e=>e.type!==u||i(e)!==m||l&&String(e.data.id)>=l))throw new Error("Member activity returned events outside the requested cursor.")
const f=new Set(c.seen)
d.push(...h.events.filter(e=>!f.has(a(e)))),o(h,e)?c.beforeId=h.events.map(e=>String(e.data.id)).sort()[0]:(c.completedTypes.push(c.currentType),c.currentType=void 0,c.beforeId=void 0)}return{events:d,nextCursor:c}}},10411(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(51184),a=r(79522),n=r(19476)
let i=r(6841),o=r(80576),l=r(26031)
t.useBrowseMemberActivityFeed=function({memberId:e,excludedEvents:t=[],limit:r=50,enabled:u=!0,defaultErrorHandler:c=!0}={}){const d=a.useFetchApi(),p=s(),m=[t.length&&`type:-[${t.map(l.escapeNqlString).join(",")}]`,e&&`data.member_id:${(0,l.escapeNqlString)(e)}`].filter(Boolean).join("+"),h=(0,i.useInfiniteQuery)({queryKey:["MemberActivityFeedResponseType",a.apiUrl("/members/events/",{filter:m,limit:String(r)}),"timeline"],enabled:u,initialPageParam:{kind:"older"},queryFn:({pageParam:e,signal:t})=>n.loadMemberActivityPage({read:e=>d(a.apiUrl("/members/events/",e)),filter:m,limit:r,cursor:e,signal:t}),getNextPageParam:e=>e.nextCursor}),f=(0,o.useMemo)(()=>h.data&&{events:h.data.pages.flatMap(e=>e.events),meta:h.data.pages[0]?.meta,isEnd:!h.data.pages[h.data.pages.length-1]?.nextCursor},[h.data])
return(0,o.useEffect)(()=>{h.error&&c&&p(h.error)},[h.error,p,c]),{...h,data:f}}},77898(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(79522),a=r(48808),n=r(90665)
r(25904)
const i=r(28091),o=r(10411)
let l=r(6841),u=r(80576),c=r(26031)
var d="MembersResponseType",p="/members/",m={limit:"1"},h=()=>[d,s.apiUrl(p,m)],f=n.createQuery({dataType:d,path:p}),g=n.createQuery({dataType:d,path:p,defaultSearchParams:m}),y=()=>Promise.resolve(),b=n.createQuery({dataType:d,path:p})
function v(e,t){return`${e.toLocaleString()} ${1===e?t:`${t}s`}`}var w=n.createMutation({method:"POST",path:()=>"/members/",body:e=>({members:[e]}),invalidateQueries:{dataType:d}}),E=n.createMutation({method:"POST",retry:!1,path:()=>"/members/upload/",body:function({file:e,labels:t=[],mapping:r={}}){const s=new FormData
s.append("membersfile",e)
for(const a of t)s.append("labels",a)
for(const[a,n]of Object.entries(r))"string"==typeof n&&s.append(`mapping[${a}]`,n)
return s},invalidateQueries:{dataType:d}}),T=n.createQueryWithId({dataType:d,path:e=>`/members/${e}/`}),P=n.createMutation({method:"POST",path:({id:e})=>`/members/${e}/commenting/disable`,body:({reason:e,hideComments:t})=>({reason:e,hide_comments:t}),invalidateQueries:{dataType:["CommentsResponseType",d]}}),S=n.createMutation({method:"POST",path:({id:e})=>`/members/${e}/commenting/enable`,body:()=>({}),invalidateQueries:{dataType:["CommentsResponseType",d]}}),j=n.createInfiniteQuery({dataType:d,path:p,defaultSearchParams:{include:"labels,tiers",limit:"100",order:"created_at desc"},defaultNextPageParams:(e,t)=>{if(e.meta?.pagination.next)return{...t,page:e.meta.pagination.next.toString()}},returnData:e=>{const{pages:t}=e,r=t.flatMap(e=>e.members),s=t[t.length-1].meta
return{members:r,meta:s,isEnd:!s||s.pagination.pages===s.pagination.page}}})
function _({filter:e,search:t,all:r}){if(!r&&!e&&!t)throw new Error("Bulk operation requires a filter, search, or all flag")
const s={}
return r&&(s.all="true"),e&&(s.filter=e),t&&(s.search=t),s}var M=n.createMutation({method:"PUT",path:()=>"/members/bulk/",body:({action:e})=>({bulk:{action:e.type,meta:e.meta||{},newsletter:e.newsletter}}),searchParams:_,invalidateQueries:{dataType:d}}),O=n.createMutation({method:"DELETE",path:()=>"/members/",searchParams:_,invalidateQueries:{dataType:d}}),x=n.createMutation({method:"PUT",path:({id:e})=>`/members/${e}/`,searchParams:()=>({include:"tiers,metafields"}),body:({id:e,...t})=>({members:[{id:e,...t}]}),invalidateQueries:{dataType:d}}),k=n.createMutation({method:"DELETE",path:({id:e})=>`/members/${e}/`,searchParams:({cancel:e})=>({cancel:e?"true":"false"}),invalidateQueries:{dataType:d}}),L=n.createQueryWithId({dataType:"MemberSigninUrlResponseType",path:e=>`/members/${e}/signin_urls/`,returnData:e=>e.member_signin_urls?.[0]??{member_id:"",url:""}}),C=n.createMutation({method:"DELETE",path:({id:e})=>`/members/${e}/sessions/`,invalidateQueries:{dataType:d}}),U=n.createMutation({method:"PUT",path:({memberId:e,subscriptionId:t})=>`/members/${e}/subscriptions/${t}/`,body:({cancelAtPeriodEnd:e,status:t})=>({...void 0!==e?{cancel_at_period_end:e}:{},...t?{status:t}:{}}),invalidateQueries:{dataType:d}}),I=n.createMutation({method:"DELETE",path:({id:e})=>`/members/${e}/suppression/`,invalidateQueries:{dataType:d}}),A="20"
function D(e,t){return[t.length>0&&`type:-[${t.map(c.escapeNqlString).join(",")}]`,`data.member_id:'${e}'`].filter(Boolean).join("+")}var Q=n.createInfiniteQuery({dataType:"MemberActivityFeedResponseType",path:"/members/events/",defaultSearchParams:{limit:A},defaultNextPageParams:(e,t)=>{const r=Number(t.limit??A),s=function(e){const t=e[e.length-1]?.data?.created_at
if(t)return new Date(t).toISOString().slice(0,19).replace("T"," ")}(e.events)
if(s&&!(e.events.length<r))return{...t,filter:`data.created_at:<'${s}'+${t.filter??""}`}},returnData:e=>{const{pages:t}=e,r=t.flatMap(e=>e.events),s=t[t.length-1],a=s?.meta?.pagination?.limit,n="number"==typeof a?a:Number(A)
return{events:r,meta:s?.meta,isEnd:(s?.events.length??0)<n}}})
t.getMemberCountQueryKey=h,t.isImportMembersCompleteResponse=function(e){return"number"==typeof e.meta?.stats?.imported},t.membersCountString=function(e="",{count:t,newsletter:r,hasMultipleNewsletters:s=!1}={}){const a=r&&s?"subscriber":"member",n=`${a}s`,i=r&&s?` of ${r.name}`:"",o=(r?e.replace(r.recipientFilter,"").replace(/^\+\((.*)\)$/,"$1"):e).split(","),l=1===o.length&&"status:free"===o[0],u=1===o.length&&"status:-free"===o[0],c=!e||o.includes("status:free")&&o.includes("status:-free")
return null==t?l?`all free ${n}${i}`:u?`all paid ${n}${i}`:c?`all ${n}${i}`:"a custom members segment":l?v(t,`free ${a}`)+i:u?v(t,`paid ${a}`)+i:v(t,a)+i},t.useAddMember=w,t.useBrowseMemberActivityFeed=o.useBrowseMemberActivityFeed,t.useBrowseMembers=f,t.useBrowseMembersInfinite=function(e={}){const t=j(e)
return function(e,t){const r=(0,l.useQueryClient)(),s=e.data?.meta?.pagination?.total,a=function(e){return!e?.filter&&!e?.search}(t);(0,u.useEffect)(()=>{if(!a||e.isError||e.isPlaceholderData||"number"!=typeof s)return
const t=h(),n=r.getQueryState(t),i=n?.data,o=i?.meta?.pagination
if(!n||!i||!o)return
const l=o.total===s,u=n.dataUpdatedAt<=e.dataUpdatedAt
!l&&u&&r.setQueryData(t,{...i,meta:{...i.meta,pagination:{...o,total:s}}},{updatedAt:e.dataUpdatedAt})},[r,a,s,e.dataUpdatedAt,e.isError,e.isPlaceholderData])}(t,e.searchParams),t},t.useBulkDeleteMembers=O,t.useBulkEditMembers=M,t.useDeleteMember=k,t.useDisableMemberCommenting=P,t.useEditMember=x,t.useEditMemberSubscription=U,t.useEnableMemberCommenting=S,t.useImportMembers=E,t.useMember=T,t.useMemberActivityFeed=function(e,t={}){const{limit:r=A,enabled:s,excludedEvents:a=[]}=t
return Q({searchParams:{filter:D(e,a),limit:r},...void 0!==s?{enabled:s}:{}})},t.useMemberCount=function(){const{data:e}=a.useCurrentUser(),{data:t}=g({enabled:Boolean(e&&i.canManageMembers(e))})
return t?.meta?.pagination.total},t.useMemberLogout=C,t.useMemberSigninUrl=L,t.useMembersCount=function(e,{requestOptions:t}={}){const r=a.useCurrentUser({requestOptions:t}),{data:s}=r,n=Boolean(s&&i.canManageMembers(s)),o=n&&null!=e,l=b({searchParams:{filter:e??"",order:"id",limit:"1",page:"1"},staleTime:6e4,enabled:o,defaultErrorHandler:!1,requestOptions:t})
return r.isError?{count:null,isLoading:!1,isFetching:r.isFetching,error:r.error,refetch:async()=>{const t=await r.refetch()
return t.isSuccess&&t.data&&i.canManageMembers(t.data)&&null!=e?l.refetch():t}}:void 0===s?{count:null,isLoading:!0,isFetching:!1,error:null,refetch:y}:o?l.isError?{count:null,isLoading:!1,isFetching:l.isFetching,error:l.error,refetch:l.refetch}:{count:l.data?.meta?.pagination.total??null,isLoading:l.isLoading,isFetching:l.isFetching,error:l.error,refetch:l.refetch}:{count:n?0:null,isLoading:!1,isFetching:!1,error:null,refetch:y}},t.useMembersFetching=()=>(0,l.useIsFetching)({queryKey:[d]})>0,t.useRemoveMemberEmailSuppression=I},93147(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(90665),a=r(72215)
let n=r(74937)
var i=n.z.object({id:n.z.string(),uuid:n.z.string(),name:n.z.string(),description:n.z.string().nullable(),feedback_enabled:n.z.boolean(),slug:n.z.string(),sender_name:n.z.string().nullable(),sender_email:n.z.string().nullable(),sender_reply_to:n.z.string(),status:n.z.string(),visibility:n.z.string(),subscribe_on_signup:n.z.boolean(),sort_order:n.z.number(),header_image:n.z.string().nullable(),show_header_icon:n.z.boolean(),show_header_title:n.z.boolean(),title_font_category:n.z.string(),title_font_weight:n.z.string(),title_alignment:n.z.string(),show_excerpt:n.z.boolean(),show_feature_image:n.z.boolean(),body_font_category:n.z.string(),footer_content:n.z.string().nullable(),show_badge:n.z.boolean(),show_header_name:n.z.boolean(),show_post_title_section:n.z.boolean(),show_comment_cta:n.z.boolean(),show_share_button:n.z.boolean(),show_subscription_details:n.z.boolean(),show_latest_posts:n.z.boolean(),background_color:n.z.string(),header_background_color:n.z.string(),button_color:n.z.string().nullable(),link_color:n.z.string().nullable(),post_title_color:n.z.string().nullable(),section_title_color:n.z.string().nullable(),divider_color:n.z.string().nullable(),button_corners:n.z.string().nullable(),button_style:n.z.string().nullable(),image_corners:n.z.string().nullable(),link_style:n.z.string().nullable(),divider_style:n.z.string().nullish(),created_at:n.z.string(),updated_at:n.z.string().nullable(),count:n.z.object({posts:n.z.number().optional(),active_members:n.z.number().optional()}).optional()}),o=n.z.object({capabilities:n.z.object({dislikes:n.z.boolean().optional()}).optional(),pagination:n.z.object({page:n.z.number(),limit:n.z.union([n.z.number(),n.z.literal("all")]),pages:n.z.number(),total:n.z.number(),next:n.z.number().nullable(),prev:n.z.number().nullable()})}),l=n.z.object({meta:o.optional(),newsletters:n.z.array(i)}),u="NewslettersResponseType",c=u,d=s.createInfiniteQuery({dataType:u,path:"/newsletters/",parseResponse:e=>l.parse(e),defaultSearchParams:{include:"count.active_members,count.posts",limit:"50"},defaultNextPageParams:(e,t)=>{const r=e.meta?.pagination.next
if(r)return{...t,page:r.toString()}},returnData:e=>{const{pages:t}=e,r=t.flatMap(e=>e.newsletters),s=t[t.length-1].meta
return{newsletters:r,meta:s,isEnd:!s||s.pagination.pages===s.pagination.page}}}),p=s.createMutation({method:"POST",path:()=>"/newsletters/",body:({opt_in_existing:e,...t})=>({newsletters:[t]}),searchParams:e=>({opt_in_existing:e.opt_in_existing.toString(),include:"count.active_members,count.posts"}),updateQueries:{dataType:u,emberUpdateType:"createOrUpdate",update:a.insertToQueryCache("newsletters")}}),m=s.createMutation({method:"PUT",path:e=>`/newsletters/${e.id}/`,body:e=>({newsletters:[e]}),defaultSearchParams:{include:"count.active_members,count.posts"},updateQueries:{dataType:u,emberUpdateType:"createOrUpdate",update:a.updateQueryCache("newsletters")}}),h=s.createMutation({method:"PUT",path:()=>"/newsletters/verifications/",body:({token:e})=>({token:e}),defaultSearchParams:{include:"count.active_members,count.posts"},updateQueries:{dataType:u,emberUpdateType:"createOrUpdate",update:a.updateQueryCache("newsletters")}})
t.NewsletterSchema=i,t.NewslettersResponseSchema=l,t.newslettersDataType=c,t.useAddNewsletter=p,t.useBrowseNewsletters=d,t.useEditNewsletter=m,t.useVerifyNewsletterEmail=h},37380(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(90665),a=r(72215)
let n=r(6841)
var i="OffersResponseType",o=s.createQuery({dataType:i,path:"/offers/",defaultSearchParams:{}}),l=s.createQueryWithId({dataType:i,path:e=>`/offers/${e}/`}),u=s.createMutation({method:"PUT",path:e=>`/offers/${e.id}/`,body:e=>({offers:[e]}),updateQueries:{dataType:i,emberUpdateType:"createOrUpdate",update:a.updateQueryCache("offers")}}),c=s.createMutation({method:"POST",path:()=>"/offers/",body:e=>({offers:[e]}),updateQueries:{dataType:i,emberUpdateType:"createOrUpdate",update:a.insertToQueryCache("offers")}})
t.useAddOffer=c,t.useBrowseOffers=o,t.useBrowseOffersById=l,t.useEditOffer=u,t.useInvalidateOffers=()=>{const e=(0,n.useQueryClient)()
return()=>e.invalidateQueries({queryKey:[i]})}},59198(e,t){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
var r=["tags","authors","authors.roles","email","tiers","newsletter","count.clicks","post_revisions","post_revisions.author"].join(","),s="mobiledoc,lexical",a=["author_id","uuid","url","send_email_when_published","email_recipient_filter","email","newsletter","post_revisions","author"],n=["email_subject","email_only","email_id"]
t.ALL_POST_INCLUDES=r,t.POST_FORMATS=s,t.buildPageWriteParams=function(e={}){const t={formats:s}
return e.source&&(t.source=e.source),e.saveRevision&&(t.save_revision="true"),e.convertToLexical&&(t.convert_to_lexical="true"),t.include=r,t},t.buildPostEditorReadParams=function(){return{formats:s,include:r}},t.buildPostReadParams=function(){return{formats:s}},t.buildPostWriteParams=function(e={}){const t={formats:s}
return e.source&&(t.source=e.source),e.newsletter&&(t.newsletter=e.newsletter,e.emailSegment&&(t.email_segment="status:free,status:-free"===e.emailSegment?"all":e.emailSegment)),e.saveRevision&&(t.save_revision="true"),e.convertToLexical&&(t.convert_to_lexical="true"),t.include=r,t},t.serializePostPayload=function(e,t="post"){const r={...e}
for(const s of a)delete r[s]
if("page"===t)for(const s of n)delete r[s]
else delete r.show_title_and_feature_image
return null===r.visibility&&(delete r.visibility,delete r.visibility_filter,delete r.tiers),"tiers"===r.visibility&&delete r.visibility_filter,"tiers"!==r.visibility||r.tiers?.length||(delete r.visibility,delete r.tiers),r}},42262(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(90665),a=r(59198),n=r(85562)
var i="PostsResponseType",o=i,l=s.createQuery({dataType:i,path:"/posts/"}),u=s.createInfiniteQuery({dataType:i,path:"/posts/",defaultNextPageParams:(e,t)=>{if(e.meta?.pagination.next)return{...t,page:e.meta.pagination.next.toString()}},returnData:e=>{const{pages:t}=e,r=t.flatMap(e=>e.posts),s=t[t.length-1].meta
return{posts:r,meta:s,isEnd:!s||s.pagination.pages===s.pagination.page}}}),c=s.createQueryWithId({dataType:i,path:e=>`/posts/${e}/`}),d=s.createQueryWithId({dataType:i,path:e=>`/posts/${e}/`}),p=s.createMutation({method:"POST",path:()=>"/posts/",searchParams:({options:e})=>a.buildPostWriteParams(e),body:({post:e})=>({posts:[a.serializePostPayload(e)]}),requestOptions:({sessionExpiryRedirect:e})=>({sessionExpiryRedirect:e}),invalidateQueries:{dataType:[i,n.tagsDataType]}}),m=s.createMutation({method:"PUT",path:({post:e})=>`/posts/${e.id}/`,searchParams:({options:e})=>a.buildPostWriteParams(e),body:({post:e})=>({posts:[a.serializePostPayload(e)]}),requestOptions:({sessionExpiryRedirect:e})=>({sessionExpiryRedirect:e}),invalidateQueries:{dataType:[i,n.tagsDataType]}}),h=s.createMutation({method:"DELETE",path:({id:e})=>`/posts/${e}/`,requestOptions:({sessionExpiryRedirect:e})=>({sessionExpiryRedirect:e})}),f=s.createMutation({method:"PUT",path:()=>"/posts/bulk/",searchParams:({filter:e})=>({filter:e}),body:({action:e})=>({bulk:{action:e.type,meta:"meta"in e?e.meta:{}}})}),g=s.createMutation({method:"DELETE",path:()=>"/posts/",searchParams:({filter:e})=>({filter:e})}),y=s.createMutation({method:"POST",path:e=>`/posts/${e}/copy/`}),b=s.createMutation({method:"POST",retry:!1,path:()=>"/posts/upload/",body:({file:e,mapping:t})=>{const r=new FormData
r.append("postsfile",e)
for(const[s,a]of Object.entries(t))r.append(`mapping[${s}]`,a)
return r}})
t.postsDataType=o,t.useAddPost=p,t.useBrowsePosts=l,t.useBrowsePostsInfinite=u,t.useBulkDeletePosts=g,t.useBulkEditPosts=f,t.useCopyPost=y,t.useDeletePost=h,t.useEditPost=m,t.useEditorPost=(e,t={})=>{const{searchParams:r,...s}=t
return d(e,{...s,searchParams:{...r,...a.buildPostEditorReadParams()}})},t.useImportContentCSV=b,t.usePost=(e,t={})=>{const{searchParams:r,...s}=t
return c(e,{...s,searchParams:{...a.buildPostReadParams(),...r}})}},80916(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
var s=r(90665).createQuery({dataType:"RolesResponseType",path:"/roles/",defaultSearchParams:{limit:"100"}})
t.useBrowseRoles=s},12098(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(90665)
var a="SettingsResponseType",n=s.createQuery({dataType:a,path:"/settings/",defaultSearchParams:{group:"site,theme,private,members,portal,newsletter,email,labs,slack,unsplash,views,firstpromoter,editor,comments,analytics,announcement,pintura,donations,security,social_web,explore,transistor"}}),i=s.createMutation({method:"PUT",path:()=>"/settings/",body:e=>({settings:e.map(({key:e,value:t})=>({key:e,value:t}))}),updateQueries:{dataType:a,emberUpdateType:"createOrUpdate",update:e=>({...e,settings:e.settings})},invalidateQueries:{filters:{predicate:e=>e.queryKey[0]!==a}}}),o=s.createMutation({method:"POST",path:()=>"/settings/access_code/regenerate/",updateQueries:{dataType:a,emberUpdateType:"createOrUpdate",update:e=>({...e,settings:e.settings})},invalidateQueries:{filters:{predicate:e=>e.queryKey[0]!==a}}}),l=s.createMutation({method:"DELETE",path:()=>"/settings/stripe/connect/",invalidateQueries:{dataType:a}}),u=s.createMutation({method:"POST",path:()=>"/slack/test/"})
function c(e,t){return e&&e.find(e=>e.key===t)?.value||null}function d({requestOptions:e}={}){const{data:t}=n({requestOptions:e})
return t?.settings}t.checkStripeEnabled=function(e,t){const r=t=>e.some(e=>e.key===t&&e.value),s=r("stripe_secret_key")&&r("stripe_publishable_key"),a=r("stripe_connect_secret_key")&&r("stripe_connect_publishable_key")
return t.stripeDirect?s:a||s},t.getSettingValue=c,t.getSettingValues=function(e,t){return t.map(t=>e?.find(e=>e.key===t)?.value)},t.humanizeSettingKey=function(e){return e.replace(/^[a-z]/,e=>e.toUpperCase()).replace(/_/g," ").replace(new RegExp(`\\b(${["API","CTA","RSS"].join("|")})\\b`,"ig"),e=>e.toUpperCase())},t.isSettingReadOnly=function(e,t){if(e)return e.find(e=>e.key===t)?.is_read_only||!1},t.useBrowseSettings=n,t.useDeleteStripeSettings=l,t.useEditSettings=i,t.useEmailTrackClicks=function(){const e=d()
if(e)return c(e,"email_track_clicks")??!1},t.useEmailTrackOpens=function(){const e=d()
if(e)return c(e,"email_track_opens")??!1},t.useMembersTrackSources=function(){const e=d()
if(e)return c(e,"members_track_sources")??!1},t.useNewslettersEnabled=function(e){const t=d(e)
if(t)return"disabled"!==c(t,"editor_default_email_recipients")},t.usePaidMembersEnabled=function(e){const t=d(e)
if(t)return c(t,"paid_members_enabled")??!1},t.useRegenerateAccessCode=o,t.useTestSlack=u,t.useWebAnalyticsEnabled=function(){const e=d()
return!!e&&!0===c(e,"web_analytics_enabled")}},85562(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(90665)
var a="TagsResponseType",n=a,i=s.createInfiniteQuery({dataType:a,path:"/tags/",defaultNextPageParams:(e,t)=>e.meta?.pagination.next?{...t,page:(e.meta?.pagination.next||1).toString()}:void 0,returnData:e=>{const{pages:t}=e,r=t.flatMap(e=>e.tags),s=t[t.length-1].meta
return{tags:r,meta:s,isEnd:!s||s.pagination.pages===s.pagination.page}}}),o=s.createQueryWithId({dataType:a,path:e=>`/tags/slug/${e}/`}),l=s.createMutation({method:"POST",path:()=>"/tags/",searchParams:()=>({include:"count.posts"}),body:e=>({tags:[e]}),invalidateQueries:{dataType:a}}),u=s.createMutation({method:"PUT",path:({id:e})=>`/tags/${e}/`,searchParams:()=>({include:"count.posts"}),body:({id:e,...t})=>({tags:[{id:e,...t}]}),invalidateQueries:{dataType:a}}),c=s.createMutation({method:"DELETE",path:e=>`/tags/${e}/`,invalidateQueries:{dataType:a}})
t.tagsDataType=n,t.useAddTag=l,t.useBrowseTags=({filter:e,...t})=>{const r=Object.entries(e).map(([e,t])=>`${e}:${t}`).join(",")
return i({...t,searchParams:{limit:"100",order:"name asc",include:"count.posts",filter:r,...t.searchParams}})},t.useDeleteTag=c,t.useEditTag=u,t.useTagBySlug=o},28091(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(48808),a=r(90665),n=r(72215)
var i=s.usersDataType,o=a.createInfiniteQuery({dataType:i,path:"/users/",defaultSearchParams:{limit:"100",include:"roles"},defaultNextPageParams:(e,t)=>{if(e.meta?.pagination.next)return{...t,page:e.meta.pagination.next.toString()}},returnData:e=>{const{pages:t}=e,r=t.flatMap(e=>e.users),s=t[t.length-1].meta
return{users:r,meta:s,isEnd:!s||s.pagination.pages===s.pagination.page}}}),l=a.createQueryWithId({dataType:i,path:e=>`/users/slug/${e}/`,defaultSearchParams:{include:"roles"}}),u=a.createMutation({method:"PUT",path:e=>`/users/${e.id}/`,body:e=>({users:[e]}),searchParams:()=>({include:"roles"}),updateQueries:{dataType:i,emberUpdateType:"createOrUpdate",update:n.updateQueryCache("users")}}),c=a.createMutation({method:"DELETE",path:e=>`/users/${e}/`,updateQueries:{dataType:i,emberUpdateType:"delete",update:n.deleteFromQueryCache("users")}}),d=a.createMutation({method:"PUT",path:()=>"/users/password/",body:({newPassword:e,confirmNewPassword:t,userId:r,oldPassword:s})=>({password:[{user_id:r,oldPassword:s||"",newPassword:e,ne2Password:t}]})}),p=a.createMutation({method:"PUT",path:()=>"/users/owner/",body:e=>({owner:[{id:e}]}),updateQueries:{dataType:i,emberUpdateType:"createOrUpdate",update:n.updateQueryCache("users")}})
function m(e){return e.roles.some(e=>"Owner"===e.name)}function h(e){return e.roles.some(e=>"Administrator"===e.name)}function f(e){return e.roles.some(e=>"Editor"===e.name)||e.roles.some(e=>"Super Editor"===e.name)}function g(e){return e.roles.some(e=>"Super Editor"===e.name)}function y(e){return e.roles.some(e=>"Author"===e.name)}function b(e){return e.roles.some(e=>"Contributor"===e.name)}t.canAccessSettings=function(e){return m(e)||h(e)||f(e)},t.canManageAutomations=function(e){return m(e)||h(e)},t.canManageGiftLinks=function(e){return m(e)||h(e)||f(e)},t.canManageMembers=function(e){return m(e)||h(e)||g(e)},t.canManageTags=function(e){return m(e)||h(e)||f(e)},t.hasAdminAccess=function(e){return m(e)||h(e)},t.isAdminUser=h,t.isAuthorOrContributor=function(e){return y(e)||b(e)},t.isAuthorUser=y,t.isContributorUser=b,t.isEditorUser=f,t.isOwnerUser=m,t.isSuperEditorUser=g,t.useBrowseUsers=o,t.useDeleteUser=c,t.useEditUser=u,t.useGetUserBySlug=l,t.useMakeOwner=p,t.useUpdatePassword=d},88950(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(51184),a=r(79522),n=r(20031),i=r(27057),o=r(48078),l=r(99767),u=r(77699),c=r(26781),d=r(39112),p=r(26322),m=r(4418),h=r(64573),f=r(99489)
t.koenigFileUploadTypes=l.koenigFileUploadTypes,t.useConfirmUnload=n.useConfirmUnload,t.useFeatureFlag=p.useFeatureFlag,t.useFeatureFlagOverrides=d.useFeatureFlagOverrides,t.useFetchApi=a.useFetchApi,t.useFilterableApi=o,t.useForm=i,t.useHandleError=s,t.useHostLimits=m.useHostLimits,t.useKoenigFetchEmbed=u.useKoenigFetchEmbed,t.useKoenigFileUpload=l.useKoenigFileUpload,t.useKoenigLinkSuggestions=c.useKoenigLinkSuggestions,t.useLimiter=h.useLimiter,t.usePinturaConfig=f.usePinturaConfig},20031(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(2940)
let a=r(80576)
a=s.__toESM(a,1),t.useConfirmUnload=function(e){a.useEffect(()=>{if(!e)return
const t=e=>{e.preventDefault(),e.returnValue=""}
return window.addEventListener("beforeunload",t),()=>{window.removeEventListener("beforeunload",t)}},[e])}},26322(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(82211),a=r(39112)
t.useFeatureFlag=(e,{requestOptions:t,defaultErrorHandler:r}={})=>{const{data:n}=s.useBrowseConfig({defaultErrorHandler:r,refetchOnMount:!1,requestOptions:t}),{enabledFlags:i}=a.useFeatureFlagOverrides()
return!0===n?.config.labs?.[e]||i.includes(e)}},48078(e,t,r){const s=r(79522)
let a=r(80576),n=r(26031)
var i=(e=[],t,r)=>e&&r?e.filter(e=>e[t]?.toLowerCase().includes(r.toLowerCase())):e
e.exports=({path:e,filterKey:t,responseKey:r,limit:o=20})=>{const l=s.useFetchApi(),u=(0,a.useRef)({}),c=async a=>{if((u.current.allLoaded||u.current.lastInput===a)&&u.current.data)return i(u.current.data,t,a)
const c=await l(s.apiUrl(e,{filter:a?`${t}:~${(0,n.escapeNqlString)(a)}`:"",limit:o.toString()}))
return u.current.data=c[r],u.current.allLoaded=!a&&!c.meta?.pagination.next,u.current.lastInput=a,i(c[r],t,a)}
return{loadData:c,loadInitialValues:async(t,a)=>{await c("")
const n=[...u.current.data||[]],i=t.filter(e=>!u.current.data?.find(t=>t[a]===e))
if(i.length){const t=await l(s.apiUrl(e,{filter:`${a}:[${i.join(",")}]`,limit:"100"}))
n.push(...t[r])}return t.map(e=>n.find(t=>t[a]===e))}}}},27057(e,t,r){let s=r(80576)
e.exports=({initialState:e,savingDelay:t,savedDelay:r=2e3,onSave:a,onSaveError:n,onSavedStateReset:i,onValidate:o})=>{const[l,u]=(0,s.useState)(e),[c,d]=(0,s.useState)(""),[p,m]=(0,s.useState)({});(0,s.useEffect)(()=>{"saved"===c&&setTimeout(()=>{i?.(),d(e=>"saved"===e?"":e)},r)},[c,r])
const h=e=>0===Object.values(e).filter(Boolean).length,f=(0,s.useCallback)(()=>{if(!o)return!0
const e=o(l)
return m(e),h(e)},[l,o]),g=(0,s.useCallback)(async(e={})=>{if(!f())return d("error"),!1
if("unsaved"!==c&&!e.force&&!e.fakeWhenUnchanged)return!0
const r=Date.now()
d("saving")
try{("unsaved"===c||e.force)&&await a(l)
const s=Date.now()-r
return t&&s<t&&await new Promise(e=>{setTimeout(e,t-s)}),d("saved"),!0}catch(e){throw await(n?.(e)),d("unsaved"),e}},[l,c,t,a,n,f]),y=(0,s.useCallback)(e=>{u(e),d("unsaved")},[])
let b="default"
"saved"===c?b="default":"error"===c&&(b="destructive")
let v=""
"saved"===c?v="Saved":"saving"===c?v="Saving...":"error"===c&&(v="Retry")
const w={disabled:"saving"===c,variant:b,label:v||void 0}
return{formState:l,saveState:c,handleSave:g,updateForm:y,setFormState:u,reset(){u(e),d("")},validate:f,isValid:h(p),clearError:e=>{m(t=>({...t,[e]:""}))},errors:p,setErrors:m,okProps:w}}},51184(e,t,r){const s=r(2940),a=r(85089),n=r(27621)
let i=r(28219)
i=s.__toESM(i,1)
let o=r(80576),l=r(89860)
function u(e){l.toast.dismiss(),l.toast.error(e)}e.exports=()=>{const{sentryDSN:e}=a.useFramework()
return(0,o.useCallback)((t,{withToast:r=!0}={})=>{if(console.error(t),!e||t instanceof n.SessionExpiredError||i.withScope(e=>{t instanceof n.APIError&&t.response&&(e.setTag("api_url",t.response.url),e.setTag("api_response_status",t.response.status)),i.captureException(t)}),r)if(t instanceof n.APIError&&418===t.response?.status)l.toast.dismiss()
else{if(t instanceof n.SessionExpiredError)return
t instanceof n.APIError?u(n.getErrorMessage(t,t.message)):u("Something went wrong, please try again.")}},[e])}},4418(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(82211)
t.useHostLimits=()=>{const{data:e}=s.useBrowseConfig({refetchOnMount:!1})
return e?.config.hostSettings?.limits}},77699(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(65955),a=r(79522)
let n=r(80576)
var i={}
t.useKoenigFetchEmbed=(e=i)=>{const t=a.useFetchApi()
return(0,n.useCallback)(async(r,{type:a}={})=>{const n=new URL(`${s.getGhostPaths().apiRoot}/oembed/`,window.location.origin)
return n.searchParams.set("url",r),a&&n.searchParams.set("type",a),await t(n,e)},[t,e])}},99767(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(65955),a=r(79522)
let n=r(80576)
var i={image:{mimeTypes:["image/gif","image/jpg","image/jpeg","image/png","image/svg+xml","image/webp"],extensions:["gif","jpg","jpeg","png","svg","svgz","webp"],endpoint:"/images/upload/",requestMethod:"post",resourceName:"images"},video:{mimeTypes:["video/mp4","video/webm","video/ogg"],extensions:["mp4","webm","ogv"],endpoint:"/media/upload/",requestMethod:"post",resourceName:"media"},audio:{mimeTypes:["audio/mp3","audio/mpeg","audio/ogg","audio/wav","audio/vnd.wav","audio/wave","audio/x-wav","audio/mp4","audio/x-m4a"],extensions:["mp3","wav","ogg","m4a"],endpoint:"/media/upload/",requestMethod:"post",resourceName:"media"},mediaThumbnail:{mimeTypes:["image/gif","image/jpg","image/jpeg","image/png","image/webp"],extensions:["gif","jpg","jpeg","png","webp"],endpoint:"/media/thumbnail/upload/",requestMethod:"put",resourceName:"media"},file:{extensions:[],endpoint:"/files/upload/",requestMethod:"post",resourceName:"files"}},o={},l=(e,t)=>{let r=e
for(const s of t){if(!r||"object"!=typeof r||!(s in r))return null
r=r[s]}return"string"==typeof r?r:null}
t.koenigFileUploadTypes=i,t.useKoenigFileUpload=(e="image",t=o)=>{const[r,u]=(0,n.useState)(0),[c,d]=(0,n.useState)(!1),[p,m]=(0,n.useState)([]),[h,f]=(0,n.useState)(0),g=(0,n.useRef)(new Map),y=a.useFetchApi()
function b(){if(0===g.current.size)return void u(0)
let e=0
g.current.forEach(t=>{e+=t}),u(Math.round(e/g.current.size))}const v=t=>{if("file"===e)return!0
const r=i[e].extensions,[,s]=/(?:\.([^.]+))?$/.exec(t.name)??[]
return!r||!(!s||-1===r.indexOf(s.toLowerCase()))||`The file type you uploaded is not supported. Please use .${r.join(", .").toUpperCase()}`},w=async(r,{formData:a={}}={})=>{g.current.set(r,0)
const n=new FormData
n.append("file",r,r.name),Object.keys(a).forEach(e=>{n.append(e,a[e])})
const o=`${s.getGhostPaths().apiRoot}${i[e].endpoint}`
try{const s=await y(o,{...t,method:i[e].requestMethod,body:n,onUploadProgress(e){g.current.set(r,e),b()}})
let a
if(g.current.set(r,100),b(),s){const t=s[i[e].resourceName]
t&&Array.isArray(t)&&t[0]&&(a=t[0].url)}return{url:a,fileName:r.name}}catch(e){console.error(e)
const s=l(e,["data","errors",0,"context"])||"",a=l(e,["data","errors",0,"message"])||l(e,["message"])||""
throw{message:s||a,context:s,fileName:r.name}}}
return{progress:r,isLoading:c,upload:async(e=[],t={})=>{f(e.length),d(!0),m([])
const r=((e=[])=>{const t=[]
for(let r=0;r<e.length;r+=1){const s=e[r],a=v(s)
!0!==a&&t.push({fileName:s.name,message:a})}return t})(e)
if(r.length)return m(r),d(!1),u(100),null
const s=[]
for(let a=0;a<e.length;a+=1){const r=e[a]
s.push(w(r,t))}try{const e=await Promise.all(s)
return u(100),g.current.clear(),d(!1),m([]),e}catch(e){return console.error(e),m([e]),d(!1),u(100),g.current.clear(),null}},errors:p,filesNumber:h}}},26781(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(48078),a=r(37380),n=r(42262)
let i=r(80576)
t.useKoenigLinkSuggestions=({siteUrl:e,membersSignupAccess:t,donationsEnabled:r,recommendationsEnabled:o,includeShareLink:l=!1,shareLinkLabel:u="Share"})=>{const{data:c}=a.useBrowseOffers(),{data:d}=n.useBrowsePosts({searchParams:{filter:"status:published",fields:"id,url,title,visibility,published_at",order:"published_at desc",limit:"5"}}),p=s({path:"/search-index/posts/",filterKey:"title",responseKey:"posts"}),m=s({path:"/search-index/pages/",filterKey:"title",responseKey:"pages"}),h=(0,i.useMemo)(()=>[{label:"Latest posts",items:(d?.posts||[]).map(e=>({id:e.id,title:e.title,url:e.url,visibility:e.visibility,publishedAt:e.published_at??void 0}))}],[d?.posts])
return{fetchAutocompleteLinks:(0,i.useCallback)(async()=>[{label:"Homepage",value:e},{label:"Free signup",value:"#/portal/signup/free"},..."all"===t?[{label:"Paid signup",value:"#/portal/signup"},{label:"Upgrade or change plan",value:"#/portal/account/plans"}]:[],...r?[{label:"Tips and donations",value:"#/portal/support"}]:[],...l?[{label:u,value:"#/share"}]:[],...o?[{label:"Recommendations",value:"#/portal/recommendations"}]:[],...(c?.offers||[]).filter(e=>"active"===e.status&&"signup"===e.redemption_type).map(t=>({label:`Offer - ${t.name}`,value:new URL(t.code,e).toString()}))],[r,l,t,c?.offers,o,u,e]),searchLinks:(0,i.useCallback)(async e=>{if(!e)return h
const[t,r]=await Promise.all([p.loadData(e),m.loadData(e)])
return[{label:"Posts",items:t.filter(e=>"published"===e.status).map(e=>({id:e.id,title:e.title,url:e.url,visibility:e.visibility,publishedAt:e.published_at}))},{label:"Pages",items:r.filter(e=>"published"===e.status).map(e=>({id:e.id,title:e.title,url:e.url,visibility:e.visibility,publishedAt:e.published_at}))}].filter(e=>e.items.length>0)},[h,m,p])}}},64573(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(27621),a=r(79522),n=r(82211),i=r(16757),o=r(28091),l=r(77898),u=r(93147),c=r(80916)
let d=r(80576),p=r(27944)
var m=class extends Error{constructor({message:e}){super(e)}}
t.useLimiter=({limits:e,requestOptions:t}={})=>{const{data:r}=n.useBrowseConfig({refetchOnMount:!1}),h=r?.config,f=!e||e.includes("staff"),{data:{users:g}={users:[]},isLoading:y}=o.useBrowseUsers({enabled:f}),{data:{invites:b}={invites:[]},isLoading:v}=i.useBrowseInvites({enabled:f}),{data:{roles:w}={},isLoading:E}=c.useBrowseRoles({enabled:f}),T=f&&(y||v||E),{refetch:P}=l.useBrowseMembers({searchParams:{limit:"1"},enabled:!1,requestOptions:t}),{refetch:S}=u.useBrowseNewsletters({searchParams:{filter:"status:active",limit:"1"},enabled:!1,requestOptions:t}),j=a.useFetchApi(),_=t?.sessionExpiryRedirect,M=(0,d.useMemo)(()=>!0===h?.hostSettings?.billing?.enabled&&h.hostSettings.billing.url?h.hostSettings.billing.url:"https://ghost.org/help/",[h?.hostSettings?.billing])
return(0,d.useMemo)(()=>{const t={isLimited:()=>!1,isDisabled:()=>!1,checkWouldGoOverLimit:()=>Promise.resolve(!1),errorIfWouldGoOverLimit:()=>Promise.resolve(),errorIfIsOverLimit:()=>Promise.resolve()}
if(!h?.hostSettings?.limits||T)return t
const r=h.hostSettings.subscription?.start,n=r?{startDate:r,interval:"month"}:void 0,i=Object.fromEntries(Object.entries(h.hostSettings.limits).filter(([t,r])=>!(e&&!e.includes(t)||!n&&r&&Object.prototype.hasOwnProperty.call(r,"maxPeriodic")&&(console.warn(`Skipping ${t} limit: periodic limits need hostSettings.subscription`),1)))),o=new p.LimitService
return i.staff&&(i.staff.currentCountQuery=()=>{const e=g.filter(e=>"inactive"!==e.status&&!e.roles.some(e=>"Contributor"===e.name)),t=b.filter(e=>"Contributor"!==(w?.find(({id:t})=>t===e.role_id))?.name)
return Promise.resolve(e.length+t.length)}),i.members&&(i.members.currentCountQuery=async()=>{const{data:e}=await P()
return e?.meta?.pagination?.total||0}),i.newsletters&&(i.newsletters.currentCountQuery=async()=>{const{data:{pages:e}={pages:[]}}=await S()
return e[0].meta?.pagination.total||0}),i.emails&&(i.emails.currentCountQuery=async(e,t)=>{const r=new Date(t??0).toISOString(),{emails:s}=await j(a.apiUrl("/emails/",{filter:`created_at:>='${r}'`,fields:"id,email_count",limit:"all"}),{sessionExpiryRedirect:_})
return function(e){return e.reduce((e,t)=>e+(t.email_count??0),0)}(s)}),o.loadLimits({limits:i,subscription:n,helpLink:M,errors:{HostLimitError:s.HostLimitError,IncorrectUsageError:m}}),{isLimited:e=>o.isLimited(e),isDisabled:e=>o.isDisabled(e)??!1,checkWouldGoOverLimit:async e=>await o.checkWouldGoOverLimit(e)??!1,errorIfWouldGoOverLimit:(e,t={})=>o.errorIfWouldGoOverLimit(e,t),errorIfIsOverLimit:e=>o.errorIfIsOverLimit(e)}},[h,j,P,S,M,b,T,w,_,g,e])}},63501(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(48808)
t.usePermission=(e,t)=>{const{data:r}=s.useCurrentUser(t)
if(!e||0===e.length)return!0
const a=r?.roles.map(e=>e.name)
return!!a&&e.some(e=>a.includes(e))}},99489(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(65955),a=r(12098),n=r(82211)
let i=r(80576)
var o=e=>{if(null!=e){if("string"==typeof e)return e
throw new TypeError("Expected value to be null, undefined, or a string")}},l=e=>{if(e.startsWith("/")){const{adminRoot:t}=s.getGhostPaths()
return window.location.origin+t.replace(/\/$/,"")+e}return e}
t.usePinturaConfig=function({requestOptions:e}={}){const{data:t}=n.useBrowseConfig({requestOptions:e}),{data:r}=a.useBrowseSettings({requestOptions:e}),s=(t?.config)?.pintura,[u,c,d]=a.getSettingValues(r?.settings??null,["pintura","pintura_js_url","pintura_css_url"])
let p,m
return u&&(p=s?.js||o(c),m=s?.css||o(d)),(0,i.useMemo)(()=>p&&m?{jsUrl:l(p),cssUrl:l(m)}:null,[p,m])}},39112(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
let s=r(80576)
var a=(0,s.createContext)({enabledFlags:[]})
t.FeatureFlagOverridesContext=a,t.useFeatureFlagOverrides=()=>(0,s.useContext)(a)},85089(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(5852)
let a=r(28219),n=r(6841),i=r(80576),o=r(49628)
var l=(0,i.createContext)({ghostVersion:"",externalNavigate:()=>{},unsplashConfig:{Authorization:"","Accept-Version":"","Content-Type":"","App-Pragma":"","X-Unsplash-Cache":!0},sentryDSN:null,onUpdate:()=>{},onInvalidate:()=>{},onDelete:()=>{}})
t.FrameworkProvider=function({children:e,queryClient:t,...r}){return(0,o.jsx)(a.ErrorBoundary,{children:(0,o.jsx)(n.QueryClientProvider,{client:(0,i.useMemo)(()=>t||s,[t]),children:(0,o.jsx)(l.Provider,{value:r,children:e})})})},t.defaultUnsplashConfig={Authorization:"Client-ID 8672af113b0a8573edae3aa3713886265d9bb741d707f6c01a486cde8c278980","Accept-Version":"v1","Content-Type":"application/json","App-Pragma":"no-cache","X-Unsplash-Cache":!0},t.useFramework=()=>(0,i.useContext)(l)},2940(e,t){var r=Object.create,s=Object.defineProperty,a=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,i=Object.getPrototypeOf,o=Object.prototype.hasOwnProperty,l=(e,t,l)=>(l=null!=e?r(i(e)):{},((e,t,r,i)=>{if(t&&"object"==typeof t||"function"==typeof t)for(var l,u=n(t),c=0,d=u.length;c<d;c++)l=u[c],o.call(e,l)||void 0===l||s(e,l,{get:(e=>t[e]).bind(null,l),enumerable:!(i=a(t,l))||i.enumerable})
return e})(!t&&e&&e.__esModule?l:s(l,"default",{value:e,enumerable:!0}),e))
Object.defineProperty(t,"__toESM",{enumerable:!0,get:function(){return l}})},79522(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(2940),a=r(85089),n=r(27621),i=r(74201),o=r(65955),l=r(95167)
let u=r(28219)
u=s.__toESM(u,1)
let c=r(80576)
var d=e=>{const t=new Headers,r=e.getAllResponseHeaders()?.split("\r\n")||[]
for(const s of r){const e=s.indexOf(":")
if(-1===e)continue
const r=s.slice(0,e),a=s.slice(e+1).trim()
t.append(r,a)}return t},p=/\/ghost\/api\//,m=/\/ghost\/api\/admin\/session([/?#]|$)/,h=/\/ghost\/api\/admin\/users\/me\/([?#]|$)/,f=!1,g=!1,y=e=>{const t=e.toString()
return p.test(t)&&!m.test(t)},b=()=>{const{adminRoot:e}=o.getGhostPaths()
!f||g||(e=>window.location.pathname===e&&(!window.location.hash||"#/"===window.location.hash||i.isAuthPath(window.location.hash.slice(1))))(e)||(g=!0,window.location.replace(e))},v=(e,t,{method:r,headers:s,credentials:a,body:n,signal:i})=>new Promise((o,l)=>{const u=()=>{l(new DOMException("Aborted","AbortError"))}
if(i.aborted)return void u()
const c=new XMLHttpRequest
switch(c.open(r,t.toString(),!0),a){case"omit":throw new Error('"omit" credentials cannot be represented with legacy XMLHttpRequest. Consider "same-origin".')
case"same-origin":c.withCredentials=!1
break
case"include":c.withCredentials=!0
break
default:throw new Error(a)}c.responseType="arraybuffer"
for(const[e,t]of Object.entries(s))c.setRequestHeader(e,t)
c.upload.onprogress=t=>{t.lengthComputable&&e(t.loaded/t.total*100)},c.onload=()=>{o((e=>new Response(e.response,{status:e.status,statusText:e.statusText,headers:d(e)}))(c))},c.onerror=()=>{l(new TypeError("Network request failed"))},c.onabort=u
const p=()=>c.abort()
i.addEventListener("abort",p),c.onloadend=()=>{i.removeEventListener("abort",p)},c.send(n)}),{apiRoot:w}=o.getGhostPaths()
t.apiUrl=(e,t={})=>{const r=new URL(`${w}${e}`,window.location.origin)
return r.search=new URLSearchParams(t).toString(),r.toString()},t.useFetchApi=()=>{const{ghostVersion:e,sentryDSN:t}=a.useFramework()
return(0,c.useCallback)(async(r,{method:s="GET",headers:a={},body:i,credentials:o="include",timeout:c,retry:d=!0,responseType:p,sessionExpiryRedirect:m=!0,onUploadProgress:g}={})=>{const w=new AbortController,E={method:s,headers:{"app-pragma":"no-cache",...e?{"x-ghost-version":e}:{},..."string"==typeof i?{"content-type":"application/json"}:{},...a},credentials:o,mode:"cors",body:i,signal:w.signal}
let T=0,P=0
const S=Date.now(),j=[500,1e3],_=[n.ServerUnreachableError,n.MaintenanceError,TypeError],M=(e,t)=>{const s={errorName:e?.name,attempts:T,totalSeconds:P/1e3,endpoint:r.toString()}
return r.toString().includes("/ghost/api/")&&(s.server=t?.headers.get("server")),s},O=g?v.bind(null,g):fetch,x=c?setTimeout(()=>w.abort(),c):void 0
try{for(;0===T||d;)try{const e=await l(await O(r,E),{responseType:p})
return h.test(r.toString())&&(f=!0),e}catch(e){if(P=Date.now()-S,d&&_.some(t=>e instanceof t)&&P<=15e3){await new Promise(e=>{setTimeout(e,j[T]||j[j.length-1])}),T+=1
continue}if(0!==T&&t&&u.captureMessage("Request failed after multiple attempts",{extra:M()}),e&&"object"==typeof e&&"name"in e&&"AbortError"===e.name)throw new n.TimeoutError
if(e instanceof n.UnauthorizedError&&y(r))throw m&&b(),new n.SessionExpiredError(e.response,e.data,{cause:e})
let a=e
throw e instanceof n.APIError||(a=new n.ServerUnreachableError({cause:e})),a}}finally{clearTimeout(x)}},[e,t])}},95167(e,t,r){const s=r(27621)
e.exports=async(e,{responseType:t}={})=>{if(0===e.status)throw new s.ServerUnreachableError
if(503===e.status)throw new s.MaintenanceError(e,await e.text())
if(415===e.status)throw new s.UnsupportedMediaTypeError(e,await e.text())
if(413===e.status)throw new s.RequestEntityTooLargeError(e,await e.text())
if(401===e.status){if(e.headers.get("content-type")?.includes("json"))throw new s.UnauthorizedError(e,await e.json())
throw new s.UnauthorizedError(e,await e.text())}if(e.ok)return 204===e.status?void 0:"blob"===t?await e.blob():"arraybuffer"===t?await e.arrayBuffer():(r=e.headers.get("content-type"))&&(r.startsWith("text/")||r.includes("application/yaml"))?await e.text():await e.json()
{if(!e.headers.get("content-type")?.includes("json"))throw new s.APIError(e,await e.text())
const t=await e.json()
throw 403===e.status&&"Authorization failed"===t.errors?.[0]?.message?new s.UnauthorizedError(e,t):"VersionMismatchError"===t.errors?.[0]?.type?new s.VersionMismatchError(e,t):"ValidationError"===t.errors?.[0]?.type||"NoPermissionError"===t.errors?.[0]?.type?new s.ValidationError(e,t):"ThemeValidationError"===t.errors?.[0]?.type?new s.ThemeValidationError(e,t):"HostLimitError"===t.errors?.[0]?.type?new s.HostLimitError(e,t):"EmailError"===t.errors?.[0]?.type?new s.EmailError(e,t):new s.JSONError(e,t)}var r}},90665(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const s=r(85089),a=r(51184),n=r(79522),i=r(63501)
let o=r(6841),l=r(80576)
var u=e=>({searchParams:t,requestOptions:r,...s}={})=>{const u=n.apiUrl(e.path,t||e.defaultSearchParams),c=n.useFetchApi(),d=a(),p=i.usePermission(e.permissions,{requestOptions:r}),m=(0,o.useQuery)({...s,enabled:p&&(s.enabled??!0),queryKey:[e.dataType,u],queryFn:async()=>{if(e.parseResponse){const t=await c(u,{headers:e.headers,...r})
return e.parseResponse(t)}return c(u,{headers:e.headers,...r})}}),h=(0,l.useMemo)(()=>m.data&&e.returnData?e.returnData(m.data):m.data,[m.data])
return(0,l.useEffect)(()=>{m.error&&!1!==s.defaultErrorHandler&&d(m.error)},[d,m.error,s.defaultErrorHandler]),{...m,data:h}}
t.createInfiniteQuery=e=>({searchParams:t,requestOptions:r,getNextPageParams:s,...u}={})=>{const c=n.useFetchApi(),d=a(),p=i.usePermission(e.permissions,{requestOptions:r}),m=s||e.defaultNextPageParams||(()=>({})),h=(0,o.useInfiniteQuery)({...u,enabled:p&&(u.enabled??!0),queryKey:[e.dataType,n.apiUrl(e.path,t||e.defaultSearchParams)],queryFn:async({pageParam:s})=>{const a=n.apiUrl(e.path,s||t||e.defaultSearchParams)
if(e.parseResponse){const t=await c(a,{headers:e.headers,...r})
return e.parseResponse(t)}return c(a,{headers:e.headers,...r})},initialPageParam:void 0,getNextPageParam:r=>m(r,t||e.defaultSearchParams||{})}),f=(0,l.useMemo)(()=>h.data&&e.returnData(h.data),[h.data])
return(0,l.useEffect)(()=>{h.error&&!1!==u.defaultErrorHandler&&d(h.error)},[d,h.error,u.defaultErrorHandler]),{...h,data:f}},t.createMutation=({path:e,searchParams:t,defaultSearchParams:r,updateQueries:a,invalidateQueries:i,...u})=>()=>{const c=n.useFetchApi(),d=(0,o.useQueryClient)(),{onUpdate:p,onInvalidate:m,onDelete:h}=s.useFramework()
return(0,o.useMutation)({mutationFn:s=>(({fetchApi:e,path:t,payload:r,searchParams:s,options:a})=>{const{defaultSearchParams:i,body:o,requestOptions:l,...u}=a,c=n.apiUrl(t,s||i),d=r&&o?.(r)
let p
return d instanceof FormData?p=d:d&&(p=JSON.stringify(d)),e(c,{body:p,...u,...void 0===r?{}:l?.(r)})})({fetchApi:c,path:e(s),payload:s,searchParams:t?.(s)||r,options:u}),onSuccess:(0,l.useCallback)((e,t)=>{if(i&&"dataType"in i){const e=Array.isArray(i.dataType)?i.dataType:[i.dataType]
for(const t of e)d.invalidateQueries({queryKey:[t]}),m(t)}else i&&d.invalidateQueries(i.filters,i.options)
if(a)if(d.setQueriesData({queryKey:[a.dataType]},r=>a.update(e,r,t)),"createOrUpdate"===a.emberUpdateType)p(a.dataType,e)
else if("delete"===a.emberUpdateType){if("string"!=typeof t)throw new Error("Expected delete mutation to have a string (ID) payload. Either change the payload or update the createMutation hook")
h(a.dataType,t)}},[m,p,h,d])})},t.createQuery=u,t.createQueryWithId=e=>(t,{searchParams:r,...s}={})=>u({...e,path:e.path(t)})({searchParams:r||e.defaultSearchParams,...s})},72215(e,t){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
var r=e=>"object"==typeof e&&null!==e&&Array.isArray(e.pageParams)
t.deleteFromQueryCache=(e,t)=>(s,a,n)=>{if(!a)return a
const i=t?.(n)||[n]
if(r(a)){const{pages:t}=a
return{...a,pages:t.map(t=>({...t,[e]:t[e].filter(e=>!i.includes(e.id))}))}}return{...a,[e]:a[e].filter(e=>!i.includes(e.id))}},t.insertToQueryCache=(e,t)=>(s,a)=>{if(!a)return a
const n=t||(t=>t[e])
if(r(a)){const{pages:t}=a,r=t[t.length-1]
return{...a,pages:t.slice(0,-1).concat({...r,[e]:r[e].concat(n(s))})}}return{...a,[e]:a[e].concat(n(s))}},t.updateQueryCache=(e,t)=>(s,a)=>{if(!a)return a
const n=(t||(t=>t[e].reduce((e,t)=>({...e,[t.id]:t}),{})))(s)
if(r(a)){const{pages:t}=a
return{...a,pages:t.map(t=>({...t,[e]:t[e].map(e=>n[e.id]||e)}))}}return{...a,[e]:a[e].map(e=>n[e.id]||e)}}},74201(e,t){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
var r=[/^\/signin\/?$/,/^\/signin\/verify\/?$/,/^\/signout\/?$/,/^\/signup\/[^/]+\/?$/,/^\/reset\/[^/]+\/?$/,/^\/setup\/?$/]
t.isAuthPath=function(e){const[t]=e.split("?")
return r.some(e=>e.test(t))}},27621(e,t){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
var r=class extends Error{response
data
constructor(e,t,r,s){!r&&e&&e.url.includes("/ghost/api/admin/")&&(r=`Something went wrong while loading ${e.url.replace(/.+\/ghost\/api\/admin\//,"").replace(/\W.*/,"").replace("_"," ")}, please try again.`),super(r||"Something went wrong, please try again.",s),this.response=e,this.data=t}},s=class extends r{data
constructor(e,t,r,s){super(e,t,r,s),this.data=t}},a=class extends r{constructor(e,t,r){super(e,t,"You are not authorised to make this request.",r)}},n=class extends s{constructor(e,t,r){super(e,t,"Theme is not compatible or contains errors.",r)}},i=class extends s{errorDetails
constructor(e,t,r){e instanceof Response?super(e,t,"A hosting plan limit was reached or exceeded.",r):(super(void 0,void 0,e.message||"A hosting plan limit was reached or exceeded."),this.errorDetails=e.errorDetails)}},o=class extends s{constructor(e,t,r){super(e,t,"Please verify your email settings",r)}},l=class extends s{constructor(e,t,r){super(e,t,t.errors[0].message,r)}},u=[l,n,i,o],c=class extends Error{constructor(e){super(e)}}
t.APIError=r,t.AlreadyExistsError=c,t.EmailError=o,t.HostLimitError=i,t.JSONError=s,t.MaintenanceError=class extends r{constructor(e,t,r){super(e,t,"Ghost is currently undergoing maintenance, please wait a moment then retry.",r)}},t.RequestEntityTooLargeError=class extends r{constructor(e,t,r){super(e,t,"Request is larger than the maximum file size the server allows",r)}},t.ServerUnreachableError=class extends r{constructor(e){super(void 0,void 0,"Something went wrong, please try again.",e)}},t.SessionExpiredError=class extends a{},t.ThemeValidationError=n,t.TimeoutError=class extends r{constructor(e){super(void 0,void 0,"Request timed out, please try again.",e)}},t.UnauthorizedError=a,t.UnsupportedMediaTypeError=class extends r{constructor(e,t,r){super(e,t,"Request contains an unknown or unsupported file type.",r)}},t.ValidationError=l,t.VersionMismatchError=class extends s{constructor(e,t,r){super(e,t,"API server is running a newer version of Ghost, please upgrade.",r)}},t.errorsWithMessage=u,t.getErrorMessage=function(e,t){const r=e instanceof s?e.data?.errors?.[0]:void 0
return r?.context||r?.message||t}},65955(e,t){function r(){const e=window.location.pathname,t=e.substr(0,e.search("/ghost/"))
return{subdir:t,adminRoot:`${t}/ghost/`,assetRoot:`${t}/ghost/assets/`,apiRoot:`${t}/ghost/api/admin`}}function s(e){let t=document.getElementById("iframeDownload")
t||(t=document.createElement("iframe"),t.id="iframeDownload",t.style.display="none",document.body.append(t)),t.setAttribute("src",e)}function a(e){if(!e)return
const t=e.match(/filename\*=([^;]+)/i)
if(t?.[1]){const e="'",r=t[1].trim(),s=r.indexOf(e),a=-1===s?-1:r.indexOf(e,s+1),n=-1===a?r:r.slice(a+1)
try{return decodeURIComponent(n.replace(/^["']|["']$/g,""))}catch{}}const r=e.match(/filename="([^"]*)"/i)
if(r?.[1])return r[1].trim()
const s=e.match(/filename=([^;]+)/i)
return s?.[1]?s[1].trim():void 0}async function n(e,t,{signal:r}={}){const s=await fetch(e,{method:"GET",signal:r})
if(!s.ok)throw new Error(`Download failed: ${s.status} ${s.statusText}`)
const n=a(s.headers.get("content-disposition"))??t??"download",i=await s.blob(),o=window.URL.createObjectURL(i),l=document.createElement("a")
l.href=o,l.download=n,document.body.appendChild(l),l.click(),l.remove(),window.URL.revokeObjectURL(o)}Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),t.blobDownload=n,t.blobDownloadFromEndpoint=async function(e,t,s={}){return n(`${r().apiRoot}${e}`,t,s)},t.downloadFile=s,t.downloadFromEndpoint=function(e){s(`${r().apiRoot}${e}`)},t.getFilenameFromContentDisposition=a,t.getGhostPaths=r},5852(e,t,r){let s=r(6841)
var a=window.adminXQueryClient||new s.QueryClient({defaultOptions:{queries:{refetchOnWindowFocus:!1,staleTime:3e5,gcTime:6e5,retry:!1,networkMode:"always"}}})
window.__TANSTACK_QUERY_CLIENT__=a,window.adminXQueryClient||(window.adminXQueryClient=a),e.exports=a},25904(e,t){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
var r="status:free",s="status:-free",a=`${r},${s}`,n=[r,s]
t.EVERYONE_RECIPIENT_FILTER=a,t.FREE_SEGMENT=r,t.PAID_SEGMENT=s,t.buildRecipientFilter=function(e,{paidAvailable:t=!0}={}){const r=new Set([...e.base,...e.specific])
return t||r.delete(s),Array.from(r).join(",")||null},t.getFullRecipientFilter=function(e,t){let r=e
return t&&(r+=`+(${t})`),r},t.getNewsletterRecipientFilter=function({slug:e,visibility:t}){const r=[`newsletters.slug:${e}`,"email_disabled:0"]
return"paid"===t&&r.push(s),r.join("+")},t.getRecipientType=function(e){return e?"status:free"===e?"free":"status:-free"===e?"paid":e.includes("status:free")&&e.includes("status:-free")?"all":"specific":"none"},t.normalizeRecipientFilter=function(e){return"all"===e?a:e&&"none"!==e?e:null},t.parseRecipientFilter=function(e){const t=(e||"").split(","),a=[],i=[]
for(const r of t)n.includes(r.trim())?a.includes(r)||a.push(r):""!==r.trim()&&(i.includes(r)||i.push(r))
return{free:a.includes(r),paid:a.includes(s),base:a,specific:i}}},27944(e,t,r){"use strict"
r.r(t),r.d(t,{AllowlistLimit:()=>w,FlagLimit:()=>v,Limit:()=>g,LimitService:()=>T,MaxLimit:()=>y,MaxPeriodicLimit:()=>b,SUPPORTED_INTERVALS:()=>c,config:()=>i,default:()=>T,lastPeriodStart:()=>d})
var s=r(14445),a=r(74091),n=r(92213)
const i={members:{currentCountQuery:async e=>(await e("members").count("id",{as:"count"}).first()).count},newsletters:{currentCountQuery:async e=>(await e("newsletters").count("id",{as:"count"}).where("status","=","active").first()).count},emails:{currentCountQuery:async(e,t)=>(await e("emails").sum("email_count",{as:"count"}).where("created_at",">=",t).first()).count},staff:{currentCountQuery:async e=>(await e("users").select("users.id").leftJoin("roles_users","users.id","roles_users.user_id").leftJoin("roles","roles_users.role_id","roles.id").whereNot("roles.name","Contributor").andWhereNot("users.status","inactive").union([e("invites").select("invites.id").leftJoin("roles","invites.role_id","roles.id").whereNot("roles.name","Contributor")])).length},customIntegrations:{},customThemes:{},uploads:{currentCountQuery:()=>{},formatter:e=>Number(e)/1e6+"MB"},limitStripeConnect:{},limitAnalytics:{},limitSocialWeb:{},limitCustomFields:{},publicSiteAccess:{}}
var o=r(29560),l=r(27403),u=r(87553)
const c=["month"],d=(e,t)=>{if("month"===t){const t=u.c9.fromISO(e,{zone:"UTC"}),r=u.c9.now().setZone("UTC"),s=Math.floor(r.diff(t,"months").months)
return t.plus({months:s}).toISO()}throw new s.Ay.IncorrectUsageError({message:'Invalid interval specified. Only "month" value is accepted.'})}
function p(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const m=/{{([\s\S]+?)}}/g,h=(e,t)=>Number("string"==typeof e?e+t:Number(e)+t),f=e=>(0,Intl.NumberFormat().format)(e)
class g{constructor({name:e,error:t,helpLink:r,db:s,errors:a}){p(this,"name",void 0),p(this,"error",void 0),p(this,"helpLink",void 0),p(this,"db",void 0),p(this,"errors",void 0),this.name=e,this.error=t,this.helpLink=r,this.db=s,this.errors=a}generateError(e){const t={errorDetails:{name:this.name}}
return this.helpLink&&(t.help=this.helpLink),t}}class y extends g{constructor({name:e,config:t,helpLink:r,db:s,errors:a}){if(super({name:e,error:t.error||"",helpLink:r,db:s,errors:a}),p(this,"currentCountQueryFn",void 0),p(this,"max",void 0),p(this,"formatter",void 0),p(this,"fallbackMessage",void 0),void 0===t.max)throw new a.IncorrectUsageError({message:"Attempted to setup a max limit without a limit"})
if(!t.currentCountQuery)throw new a.IncorrectUsageError({message:"Attempted to setup a max limit without a current count query"})
this.currentCountQueryFn=t.currentCountQuery,this.max=t.max,this.formatter=t.formatter,this.fallbackMessage=`This action would exceed the ${o(this.name)} limit on your current plan.`}generateError(e){const t=super.generateError()
if(t.message=this.fallbackMessage,this.error){const r=this.formatter||f
try{t.message=l(this.error,{interpolate:m})({max:r(this.max),count:r(e),name:this.name})}catch{t.message=this.fallbackMessage}}return t.errorDetails.limit=this.max,t.errorDetails.total=e,new this.errors.HostLimitError(t)}async currentCountQuery(e={}){return await this.currentCountQueryFn(e.transacting??this.db?.knex)}async errorIfWouldGoOverLimit(e={}){const{max:t,addedCount:r=1}=e,s=await this.currentCountQuery(e)
if(h(s,r)>(t||this.max))throw this.generateError(s)}async errorIfIsOverLimit(e={}){const t=e.currentCount||await this.currentCountQuery(e)
if(Number(t)>(e.max||this.max))throw this.generateError(t)}}class b extends g{constructor({name:e,config:t,helpLink:r,db:s,errors:a}){if(super({name:e,error:t.error||"",helpLink:r,db:s,errors:a}),p(this,"currentCountQueryFn",void 0),p(this,"maxPeriodic",void 0),p(this,"interval",void 0),p(this,"startDate",void 0),p(this,"fallbackMessage",void 0),void 0===t.maxPeriodic)throw new a.IncorrectUsageError({message:"Attempted to setup a periodic max limit without a limit"})
if(!t.currentCountQuery)throw new a.IncorrectUsageError({message:"Attempted to setup a periodic max limit without a current count query"})
if(!t.interval)throw new a.IncorrectUsageError({message:"Attempted to setup a periodic max limit without an interval"})
if(!c.includes(t.interval))throw new a.IncorrectUsageError({message:`Attempted to setup a periodic max limit without unsupported interval. Please specify one of: ${c}`})
if(!t.startDate)throw new a.IncorrectUsageError({message:"Attempted to setup a periodic max limit without a start date"})
this.currentCountQueryFn=t.currentCountQuery,this.maxPeriodic=t.maxPeriodic,this.interval=t.interval,this.startDate=t.startDate,this.fallbackMessage=`This action would exceed the ${o(this.name)} limit on your current plan.`}generateError(e){const t=super.generateError()
if(t.message=this.fallbackMessage,this.error)try{t.message=l(this.error,{interpolate:m})({max:f(this.maxPeriodic),count:f(e),name:this.name})}catch{t.message=this.fallbackMessage}return t.errorDetails.limit=this.maxPeriodic,t.errorDetails.total=e,new this.errors.HostLimitError(t)}async currentCountQuery(e={}){const t=d(this.startDate,this.interval)
return await this.currentCountQueryFn(e.transacting?e.transacting:this.db?this.db.knex:void 0,t)}async errorIfWouldGoOverLimit(e={}){const{max:t,addedCount:r=1}=e,s=await this.currentCountQuery(e)
if(h(s,r)>(t||this.maxPeriodic))throw this.generateError(s)}async errorIfIsOverLimit(e={}){const{max:t}=e,r=await this.currentCountQuery(e)
if(Number(r)>(t||this.maxPeriodic))throw this.generateError(r)}}class v extends g{constructor({name:e,config:t,helpLink:r,db:s,errors:a}){super({name:e,error:t.error||"",helpLink:r,db:s,errors:a}),p(this,"disabled",void 0),p(this,"fallbackMessage",void 0)
const n=o(e.replace(/^limit/,""))
this.disabled=t.disabled,this.fallbackMessage=`Your plan does not support ${n}. Please upgrade to enable ${n}.`}generateError(){const e=super.generateError()
return this.error?e.message=this.error:e.message=this.fallbackMessage,new this.errors.HostLimitError(e)}async errorIfWouldGoOverLimit(e){if(this.disabled)throw this.generateError()}async errorIfIsOverLimit(e){}isDisabled(){return!!this.disabled}}class w extends g{constructor({name:e,config:t,helpLink:r,errors:s}){if(super({name:e,error:t.error||"",helpLink:r,errors:s}),p(this,"allowlist",void 0),p(this,"fallbackMessage",void 0),!t.allowlist||!t.allowlist.length)throw new this.errors.IncorrectUsageError({message:"Attempted to setup an allowlist limit without an allowlist"})
this.allowlist=t.allowlist,this.fallbackMessage=`This action would exceed the ${o(this.name)} limit on your current plan.`}generateError(){const e=super.generateError()
return this.error?e.message=this.error:e.message=this.fallbackMessage,new this.errors.HostLimitError(e)}async errorIfWouldGoOverLimit(e){if(!e||!e.value)throw new this.errors.IncorrectUsageError({message:"Attempted to check an allowlist limit without a value"})
if(!this.allowlist.includes(e.value))throw this.generateError()}async errorIfIsOverLimit(e){if(!e||!e.value)throw new this.errors.IncorrectUsageError({message:"Attempted to check an allowlist limit without a value"})
if(!this.allowlist.includes(e.value))throw this.generateError()}}function E(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class T{constructor(){E(this,"limits",void 0),E(this,"errors",void 0),this.limits={}}loadLimits({limits:e={},subscription:t,helpLink:r,db:o,errors:l}){if(!l)throw new s.Ay.IncorrectUsageError({message:"Config Missing: 'errors' is required."})
this.errors=l,this.limits={},Object.keys(e).forEach(u=>{const c=a(u)
if(i[c]){const a=Object.assign({},i[c],e[c])
if(n(a,"allowlist"))this.limits[c]=new w({name:c,config:a,helpLink:r,errors:l})
else if(n(a,"max"))this.limits[c]=new y({name:c,config:a,helpLink:r,db:o,errors:l})
else if(n(a,"maxPeriodic")){if(void 0===t)throw new s.Ay.IncorrectUsageError({message:"Attempted to setup a periodic max limit without a subscription"})
const e=Object.assign({},a,t)
this.limits[c]=new b({name:c,config:e,helpLink:r,db:o,errors:l})}else this.limits[c]=new v({name:c,config:a,helpLink:r,errors:l})}})}isLimited(e){return!!this.limits[a(e)]}isDisabled(e){const t=this.limits[a(e)]
if(t){if("function"!=typeof t.isDisabled)throw new s.Ay.IncorrectUsageError({message:`Limit ${e} does not support .isDisabled()`})
return t.isDisabled()}}async checkIsOverLimit(e,t={}){if(this.isLimited(e))try{return await this.limits[e].errorIfIsOverLimit(t),!1}catch(e){if(e instanceof this.errors.HostLimitError)return!0
throw e}}async checkWouldGoOverLimit(e,t={}){if(this.isLimited(e))try{return await this.limits[e].errorIfWouldGoOverLimit(t),!1}catch(e){if(e instanceof this.errors.HostLimitError)return!0
throw e}}async errorIfIsOverLimit(e,t={}){this.isLimited(e)&&await this.limits[e].errorIfIsOverLimit(t)}async errorIfWouldGoOverLimit(e,t={}){this.isLimited(e)&&await this.limits[e].errorIfWouldGoOverLimit(t)}async checkIfAnyOverLimit(e={}){for(const t in this.limits)if(await this.checkIsOverLimit(t,e))return!0
return!1}}},26031(e,t,r){"use strict"
function s(e){return`'${e.replace(/(['"])/g,"\\$1")}'`}r.r(t),r.d(t,{escapeNqlString:()=>s})}}])

//# sourceMappingURL=chunk.265.686f72ca674a8b1a8dc7.map