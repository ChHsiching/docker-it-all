import{c}from"./index.Dh8PXriy.js";const r=async a=>await fetch(`${c}/utils/gravatar?email=${a}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),null)),i=async a=>{let n=null;const t=await fetch(`${c}/utils/code/format`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:a})}).then(async o=>{if(!o.ok)throw await o.json();return o.json()}).catch(o=>(console.log(o),n=o,o.detail&&(n=o.detail),null));if(n)throw n;return t},s=async(a,n)=>await fetch(`${c}/utils/pdf`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:a,messages:n})}).then(async o=>{if(!o.ok)throw await o.json();return o.blob()}).catch(o=>(console.log(o),null)),d=async a=>{let n=null;if(await fetch(`${c}/utils/db/download`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.blob()}).then(t=>{const o=window.URL.createObjectURL(t),e=document.createElement("a");e.href=o,e.download="webui.db",document.body.appendChild(e),e.click(),window.URL.revokeObjectURL(o)}).catch(t=>(console.log(t),n=t.detail,null)),n)throw n};export{s as a,d,i as f,r as g};
//# sourceMappingURL=index.BnGSMWXY.js.map