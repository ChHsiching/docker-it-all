import{c}from"./index.Dh8PXriy.js";const s=async(a,e)=>{let o=null;const n=await fetch(`${c}/functions/create`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${a}`},body:JSON.stringify({...e})}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(o=t.detail,console.log(t),null));if(o)throw o;return n},l=async(a="")=>{let e=null;const o=await fetch(`${c}/functions/`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${a}`}}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).then(n=>n).catch(n=>(e=n.detail,console.log(n),null));if(e)throw e;return o},u=async(a="")=>{let e=null;const o=await fetch(`${c}/functions/export`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${a}`}}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).then(n=>n).catch(n=>(e=n.detail,console.log(n),null));if(e)throw e;return o},h=async(a,e)=>{let o=null;const n=await fetch(`${c}/functions/id/${e}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).then(t=>t).catch(t=>(o=t.detail,console.log(t),null));if(o)throw o;return n},p=async(a,e,o)=>{let n=null;const t=await fetch(`${c}/functions/id/${e}/update`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${a}`},body:JSON.stringify({...o})}).then(async r=>{if(!r.ok)throw await r.json();return r.json()}).then(r=>r).catch(r=>(n=r.detail,console.log(r),null));if(n)throw n;return t},d=async(a,e)=>{let o=null;const n=await fetch(`${c}/functions/id/${e}/delete`,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).then(t=>t).catch(t=>(o=t.detail,console.log(t),null));if(o)throw o;return n},f=async(a,e)=>{let o=null;const n=await fetch(`${c}/functions/id/${e}/toggle`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).then(t=>t).catch(t=>(o=t.detail,console.log(t),null));if(o)throw o;return n},y=async(a,e)=>{let o=null;const n=await fetch(`${c}/functions/id/${e}/toggle/global`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).then(t=>t).catch(t=>(o=t.detail,console.log(t),null));if(o)throw o;return n},j=async(a,e)=>{let o=null;const n=await fetch(`${c}/functions/id/${e}/valves`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).then(t=>t).catch(t=>(o=t.detail,console.log(t),null));if(o)throw o;return n},w=async(a,e)=>{let o=null;const n=await fetch(`${c}/functions/id/${e}/valves/spec`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).then(t=>t).catch(t=>(o=t.detail,console.log(t),null));if(o)throw o;return n},$=async(a,e,o)=>{let n=null;const t=await fetch(`${c}/functions/id/${e}/valves/update`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${a}`},body:JSON.stringify({...o})}).then(async r=>{if(!r.ok)throw await r.json();return r.json()}).then(r=>r).catch(r=>(n=r.detail,console.log(r),null));if(n)throw n;return t},g=async(a,e)=>{let o=null;const n=await fetch(`${c}/functions/id/${e}/valves/user`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).then(t=>t).catch(t=>(o=t.detail,console.log(t),null));if(o)throw o;return n},T=async(a,e)=>{let o=null;const n=await fetch(`${c}/functions/id/${e}/valves/user/spec`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).then(t=>t).catch(t=>(o=t.detail,console.log(t),null));if(o)throw o;return n},B=async(a,e,o)=>{let n=null;const t=await fetch(`${c}/functions/id/${e}/valves/user/update`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${a}`},body:JSON.stringify({...o})}).then(async r=>{if(!r.ok)throw await r.json();return r.json()}).then(r=>r).catch(r=>(n=r.detail,console.log(r),null));if(n)throw n;return t};export{h as a,j as b,s as c,w as d,$ as e,d as f,l as g,f as h,u as i,g as j,T as k,B as l,y as t,p as u};
//# sourceMappingURL=index.B63fC0k8.js.map
