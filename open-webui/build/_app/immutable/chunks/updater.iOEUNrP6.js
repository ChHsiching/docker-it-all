import{d as m,w as F,a as b}from"./index.CxhOXs-d.js";import{q as D,N as O,$ as g,B as w}from"./scheduler.CvZYoJ9P.js";function S(e){return Object.keys(e).reduce((n,t)=>e[t]===void 0?n:n+`${t}:${e[t]};`,"")}function V(e){return e?!0:void 0}S({position:"absolute",opacity:0,"pointer-events":"none",margin:0,transform:"translateX(-100%)"});function B(e){if(e!==null)return""}function A(e){function n(t){return t(e),()=>{}}return{subscribe:n}}const E=e=>new Proxy(e,{get(n,t,r){return Reflect.get(n,t,r)},ownKeys(n){return Reflect.ownKeys(n).filter(t=>t!=="action")}}),y=e=>typeof e=="function";R("empty");function R(e,n){const{stores:t,action:r,returned:a}=n??{},s=(()=>{if(t&&a)return m(t,u=>{const o=a(u);if(y(o)){const c=(...f)=>E({...o(...f),[`data-melt-${e}`]:"",action:r??l});return c.action=r??l,c}return E({...o,[`data-melt-${e}`]:"",action:r??l})});{const u=a,o=u==null?void 0:u();if(y(o)){const c=(...f)=>E({...o(...f),[`data-melt-${e}`]:"",action:r??l});return c.action=r??l,A(c)}return A(E({...o,[`data-melt-${e}`]:"",action:r??l}))}})(),i=r??(()=>{});return i.subscribe=s.subscribe,i}function G(e){const n=s=>s?`${e}-${s}`:e,t=s=>`data-melt-${e}${s?`-${s}`:""}`,r=s=>`[data-melt-${e}${s?`-${s}`:""}]`;return{name:n,attribute:t,selector:r,getEl:s=>document.querySelector(r(s))}}const j=typeof document<"u",T=e=>typeof e=="function";function q(e){return e instanceof Element}function h(e){return e instanceof HTMLElement}function Y(e){const n=e.getAttribute("aria-disabled"),t=e.getAttribute("disabled"),r=e.hasAttribute("data-disabled");return!!(n==="true"||t!==null||r)}function k(e){return e!==null&&typeof e=="object"}function L(e){return k(e)&&"subscribe"in e}function P(...e){return(...n)=>{for(const t of e)typeof t=="function"&&t(...n)}}function l(){}function v(e,n,t,r){const a=Array.isArray(n)?n:[n];return a.forEach(s=>e.addEventListener(s,t,r)),()=>{a.forEach(s=>e.removeEventListener(s,t,r))}}function z(e,n,t,r){const a=Array.isArray(n)?n:[n];if(typeof t=="function"){const s=_(i=>t(i));return a.forEach(i=>e.addEventListener(i,s,r)),()=>{a.forEach(i=>e.removeEventListener(i,s,r))}}return()=>void 0}function C(e){const n=e.currentTarget;if(!h(n))return null;const t=new CustomEvent(`m-${e.type}`,{detail:{originalEvent:e},cancelable:!0});return n.dispatchEvent(t),t}function _(e){return n=>{const t=C(n);if(!(t!=null&&t.defaultPrevented))return e(n)}}const X=e=>{try{D(e)}catch{return e}},$=e=>{try{O(e)}catch{return e}};function M(e,...n){const t={};for(const r of Object.keys(e))n.includes(r)||(t[r]=e[r]);return t}function p(e){return{...e,get:()=>g(e)}}p.writable=function(e){const n=F(e);let t=e;return{subscribe:n.subscribe,set(r){n.set(r),t=r},update(r){const a=r(t);n.set(a),t=a},get(){return t}}};p.derived=function(e,n){const t=new Map,r=()=>{const s=Array.isArray(e)?e.map(i=>i.get()):e.get();return n(s)};return{get:r,subscribe:s=>{const i=[];return(Array.isArray(e)?e:[e]).forEach(o=>{i.push(o.subscribe(()=>{s(r())}))}),s(r()),t.set(s,i),()=>{const o=t.get(s);if(o)for(const c of o)c();t.delete(s)}}}};const J=(e,n)=>{const t=p(e),r=(s,i)=>{t.update(u=>{const o=s(u);let c=o;return n&&(c=n({curr:u,next:o})),i==null||i(c),c})};return{...t,update:r,set:s=>{r(()=>s)}}},d={ALT:"Alt",ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",BACKSPACE:"Backspace",CAPS_LOCK:"CapsLock",CONTROL:"Control",DELETE:"Delete",END:"End",ENTER:"Enter",ESCAPE:"Escape",F1:"F1",F10:"F10",F11:"F11",F12:"F12",F2:"F2",F3:"F3",F4:"F4",F5:"F5",F6:"F6",F7:"F7",F8:"F8",F9:"F9",HOME:"Home",META:"Meta",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp",SHIFT:"Shift",SPACE:" ",TAB:"Tab",CTRL:"Control",ASTERISK:"*",A:"a",P:"p"},W=[d.ARROW_DOWN,d.PAGE_UP,d.HOME],K=[d.ARROW_UP,d.PAGE_DOWN,d.END],Q=[...W,...K],Z=[d.ENTER,d.SPACE];function N(e,n){let t;const r=m(e,s=>{t==null||t(),t=n(s)}).subscribe(l),a=()=>{r(),t==null||t()};return $(a),a}function ee(e){const n={};return Object.keys(e).forEach(t=>{const r=t,a=e[r];n[r]=p(F(a))}),n}b(void 0,e=>{function n(r){e(r),e(void 0)}return v(document,"pointerup",n,{passive:!1,capture:!0})});const U=b(void 0,e=>{function n(r){r&&r.key===d.ESCAPE&&e(r),e(void 0)}return v(document,"keydown",n,{passive:!1})}),te=(e,n={})=>{let t=l;function r(a={}){t();const s={enabled:!0,...a},i=L(s.enabled)?s.enabled:b(s.enabled);t=P(U.subscribe(u=>{var c;if(!u||!g(i))return;const o=u.target;if(!(!h(o)||o.closest("[data-escapee]")!==e)){if(u.preventDefault(),s.ignore){if(T(s.ignore)){if(s.ignore(u))return}else if(Array.isArray(s.ignore)&&s.ignore.length>0&&s.ignore.some(f=>f&&o===f))return}(c=s.handler)==null||c.call(s,u)}}),N(i,u=>{u?e.dataset.escapee="":delete e.dataset.escapee}))}return r(n),{update:r,destroy(){e.removeAttribute("data-escapee"),t()}}};b(!1),b(!1),b(void 0);const x={isDateDisabled:void 0,isDateUnavailable:void 0,value:void 0,preventDeselect:!1,numberOfMonths:1,pagedNavigation:!1,weekStartsOn:0,fixedWeeks:!1,calendarLabel:"Event Date",locale:"en",minValue:void 0,maxValue:void 0,disabled:!1,readonly:!1,weekdayFormat:"narrow"};({...M(x,"isDateDisabled","isDateUnavailable","value","locale","disabled","readonly","minValue","maxValue","weekdayFormat")});function ne(e,n){const t={};return n.forEach(r=>{t[r]={[`data-${e}-${r}`]:""}}),r=>t[r]}function re(e){return e?{"aria-disabled":"true","data-disabled":""}:{"aria-disabled":void 0,"data-disabled":void 0}}function se(){const e=w();return n=>{const{originalEvent:t}=n.detail,{cancelable:r}=n,a=t.type;e(a,{originalEvent:t,currentTarget:t.currentTarget},{cancelable:r})||n.preventDefault()}}function ae(e){const n={};for(const t in e){const r=e[t];r!==void 0&&(n[t]=r)}return n}function ie(e){return function(n,t){if(t===void 0)return;const r=e[n];r&&r.set(t)}}export{Y as A,Q as F,Z as S,J as a,V as b,se as c,re as d,P as e,z as f,G as g,ne as h,ie as i,h as j,d as k,j as l,R as m,l as n,M as o,T as p,q,ae as r,S as s,ee as t,te as u,v,p as w,B as x,N as y,X as z};
//# sourceMappingURL=updater.iOEUNrP6.js.map
