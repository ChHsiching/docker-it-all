import{s as k,l as d,i as h,d as I,p as v,j as R,q as V,n as q}from"../chunks/scheduler.CvZYoJ9P.js";import{S as F,i as U,t as f,a as p,c as N,g as O,b as $,d as y,m as W,e as B}from"../chunks/index.C1N8d1hw.js";import{t as w}from"../chunks/Toaster.svelte_svelte_type_style_lang.ChidyyUD.js";import{g as M}from"../chunks/entry.BsJDnQad.js";import{a as E,f as P,m as C}from"../chunks/index.Dh8PXriy.js";import{c as D,g as J}from"../chunks/index.B63fC0k8.js";import{F as Q}from"../chunks/FunctionEditor.DOnTH3iD.js";import{g as j}from"../chunks/index.CusVmKHs.js";import{e as H,c as L}from"../chunks/index.C-Yl_4Dq.js";function S(a){var c;let t=(c=a[2])==null?void 0:c.content,r,e,o=b(a);return{c(){o.c(),r=d()},l(s){o.l(s),r=d()},m(s,n){o.m(s,n),h(s,r,n),e=!0},p(s,n){var l;n&4&&k(t,t=(l=s[2])==null?void 0:l.content)?(O(),p(o,1,1,q),N(),o=b(s),o.c(),f(o,1),o.m(r.parentNode,r)):o.p(s,n)},i(s){e||(f(o),e=!0)},o(s){p(o),e=!1},d(s){s&&I(r),o.d(s)}}}function b(a){var e,o,c,s;let t,r;return t=new Q({props:{id:((e=a[2])==null?void 0:e.id)??"",name:((o=a[2])==null?void 0:o.name)??"",meta:((c=a[2])==null?void 0:c.meta)??{description:""},content:((s=a[2])==null?void 0:s.content)??"",clone:a[1]}}),t.$on("save",a[5]),{c(){$(t.$$.fragment)},l(n){y(t.$$.fragment,n)},m(n,l){W(t,n,l),r=!0},p(n,l){var i,u,g,_;const m={};l&4&&(m.id=((i=n[2])==null?void 0:i.id)??""),l&4&&(m.name=((u=n[2])==null?void 0:u.name)??""),l&4&&(m.meta=((g=n[2])==null?void 0:g.meta)??{description:""}),l&4&&(m.content=((_=n[2])==null?void 0:_.content)??""),l&2&&(m.clone=n[1]),t.$set(m)},i(n){r||(f(t.$$.fragment,n),r=!0)},o(n){p(t.$$.fragment,n),r=!1},d(n){B(t,n)}}}function z(a){let t,r,e=a[0]&&S(a);return{c(){e&&e.c(),t=d()},l(o){e&&e.l(o),t=d()},m(o,c){e&&e.m(o,c),h(o,t,c),r=!0},p(o,[c]){o[0]?e?(e.p(o,c),c&1&&f(e,1)):(e=S(o),e.c(),f(e,1),e.m(t.parentNode,t)):e&&(O(),p(e,1,1,()=>{e=null}),N())},i(o){r||(f(e),r=!0)},o(o){p(e),r=!1},d(o){o&&I(t),e&&e.d(o)}}}function A(a,t,r){let e;const o=v("i18n");R(a,o,i=>r(6,e=i));let c=!1,s=!1,n=null;const l=async i=>{console.log(i);const u=H(i.content);if(L((u==null?void 0:u.required_open_webui_version)??"0.0.0",E)){console.log("Version is lower than required"),w.error(e.t("Open WebUI version (v{{OPEN_WEBUI_VERSION}}) is lower than required version (v{{REQUIRED_VERSION}})",{OPEN_WEBUI_VERSION:E,REQUIRED_VERSION:(u==null?void 0:u.required_open_webui_version)??"0.0.0"}));return}await D(localStorage.token,{id:i.id,name:i.name,meta:i.meta,content:i.content}).catch(_=>(w.error(_),null))&&(w.success(e.t("Function created successfully")),P.set(await J(localStorage.token)),C.set(await j(localStorage.token)),await M("/admin/functions"))};return V(()=>{window.addEventListener("message",async i=>{["https://openwebui.com","https://www.openwebui.com","http://localhost:9999"].includes(i.origin)&&(r(2,n=JSON.parse(i.data)),console.log(n))}),(window.opener??!1)&&window.opener.postMessage("loaded","*"),sessionStorage.function&&(r(2,n=JSON.parse(sessionStorage.function)),sessionStorage.removeItem("function"),console.log(n),r(1,s=!0)),r(0,c=!0)}),[c,s,n,o,l,i=>{l(i.detail)}]}class ne extends F{constructor(t){super(),U(this,t,A,z,k,{})}}export{ne as component};
//# sourceMappingURL=10.CIGtVB45.js.map