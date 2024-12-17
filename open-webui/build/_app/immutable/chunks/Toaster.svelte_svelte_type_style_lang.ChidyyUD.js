import{$ as b}from"./scheduler.CvZYoJ9P.js";import{w as _}from"./index.CxhOXs-d.js";function z(...t){return t.filter(Boolean).join(" ")}const h=typeof document<"u";function w(t){const o=_(t);function p(l){h&&o.set(l)}function r(l){h&&o.update(l)}return{subscribe:o.subscribe,set:p,update:r}}let a=0;function C(){const t=w([]),o=w([]);function p(n){t.update(e=>[n,...e])}function r(n){var y;const{message:e,...s}=n,u=typeof(n==null?void 0:n.id)=="number"||n.id&&((y=n.id)==null?void 0:y.length)>0?n.id:a++,f=n.dismissable===void 0?!0:n.dismissable,i=n.type===void 0?"default":n.type;return b(t).find(m=>m.id===u)?t.update(m=>m.map(g=>g.id===u?{...g,...n,id:u,title:e,dismissable:f,type:i,updated:!0}:{...g,updated:!1})):p({...s,id:u,title:e,dismissable:f,type:i}),u}function l(n){if(n===void 0){t.update(e=>e.map(s=>({...s,dismiss:!0})));return}return t.update(e=>e.map(s=>s.id===n?{...s,dismiss:!0}:s)),n}function x(n){if(n===void 0){t.set([]);return}return t.update(e=>e.filter(s=>s.id!==n)),n}function I(n,e){return r({...e,type:"default",message:n})}function T(n,e){return r({...e,type:"error",message:n})}function $(n,e){return r({...e,type:"success",message:n})}function v(n,e){return r({...e,type:"info",message:n})}function E(n,e){return r({...e,type:"warning",message:n})}function H(n,e){return r({...e,type:"loading",message:n})}function j(n,e){if(!e)return;let s;e.loading!==void 0&&(s=r({...e,promise:n,type:"loading",message:e.loading}));const u=n instanceof Promise?n:n();let f=s!==void 0;return u.then(i=>{if(i&&typeof i.ok=="boolean"&&!i.ok){f=!1;const d=typeof e.error=="function"?e.error(`HTTP error! status: ${i.status}`):e.error;r({id:s,type:"error",message:d})}else if(e.success!==void 0){f=!1;const d=typeof e.success=="function"?e.success(i):e.success;r({id:s,type:"success",message:d})}}).catch(i=>{if(e.error!==void 0){f=!1;const d=typeof e.error=="function"?e.error(i):e.error;r({id:s,type:"error",message:d})}}).finally(()=>{var i;f&&(l(s),s=void 0),(i=e.finally)==null||i.call(e)}),s}function k(n,e){const s=(e==null?void 0:e.id)||a++;return r({component:n,id:s,...e}),s}function B(n){o.update(e=>e.filter(s=>s.toastId!==n))}function P(n){if(b(o).find(s=>s.toastId===n.toastId)===void 0){o.update(s=>[n,...s]);return}o.update(s=>s.map(u=>u.toastId===n.toastId?n:u))}function S(){t.set([]),o.set([])}return{create:r,addToast:p,dismiss:l,remove:x,message:I,error:T,success:$,info:v,warning:E,loading:H,promise:j,custom:k,removeHeight:B,setHeight:P,reset:S,toasts:t,heights:o}}const c=C();function D(t,o){return c.create({message:t,...o})}const F=D,A=Object.assign(F,{success:c.success,info:c.info,warning:c.warning,error:c.error,custom:c.custom,message:c.message,promise:c.promise,dismiss:c.dismiss,loading:c.loading}),G=t=>({subscribe:t});export{c as a,z as c,A as t,G as u};
//# sourceMappingURL=Toaster.svelte_svelte_type_style_lang.ChidyyUD.js.map
