import{s as g,l as u,i as _,d as k,j as f,p as b,q as w}from"../chunks/scheduler.CvZYoJ9P.js";import{S,i as y,t as i,a as c,c as M,b as $,d as h,m as q,e as B,g as C}from"../chunks/index.C1N8d1hw.js";import{t as P}from"../chunks/Toaster.svelte_svelte_type_style_lang.ChidyyUD.js";import{g as m}from"../chunks/entry.BsJDnQad.js";import{p as j}from"../chunks/stores.DXlpsfYI.js";import{m as E}from"../chunks/index.Dh8PXriy.js";import{g as I,u as N}from"../chunks/index.CcvU3k-4.js";import{g as z}from"../chunks/index.CusVmKHs.js";import{M as A}from"../chunks/ModelEditor.2VKzdWFm.js";function p(r){let o,s;return o=new A({props:{edit:!0,model:r[0],onSubmit:r[2]}}),{c(){$(o.$$.fragment)},l(e){h(o.$$.fragment,e)},m(e,t){q(o,e,t),s=!0},p(e,t){const a={};t&1&&(a.model=e[0]),o.$set(a)},i(e){s||(i(o.$$.fragment,e),s=!0)},o(e){c(o.$$.fragment,e),s=!1},d(e){B(o,e)}}}function D(r){let o,s,e=r[0]&&p(r);return{c(){e&&e.c(),o=u()},l(t){e&&e.l(t),o=u()},m(t,a){e&&e.m(t,a),_(t,o,a),s=!0},p(t,[a]){t[0]?e?(e.p(t,a),a&1&&i(e,1)):(e=p(t),e.c(),i(e,1),e.m(o.parentNode,o)):e&&(C(),c(e,1,1,()=>{e=null}),M())},i(t){s||(i(e),s=!0)},o(t){c(e),s=!1},d(t){t&&k(o),e&&e.d(t)}}}function F(r,o,s){let e,t;f(r,j,n=>s(4,t=n));const a=b("i18n");f(r,a,n=>s(3,e=n));let l=null;return w(async()=>{const n=t.url.searchParams.get("id");n?(s(0,l=await I(localStorage.token,n).catch(d=>null)),l||m("/workspace/models")):m("/workspace/models")}),[l,a,async n=>{await N(localStorage.token,n.id,n)&&(await E.set(await z(localStorage.token)),P.success(e.t("Model updated successfully")),await m("/workspace/models"))}]}class V extends S{constructor(o){super(),y(this,o,F,D,g,{})}}export{V as component};
//# sourceMappingURL=25.BbeWoMa0.js.map
