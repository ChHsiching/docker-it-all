import{a as j,t as q}from"./index.C1N8d1hw.js";import{H as z}from"./scheduler.CvZYoJ9P.js";function E(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function F(n,f){n.d(1),f.delete(n.key)}function G(n,f){j(n,1,1,()=>{f.delete(n.key)})}function I(n,f,k,B,x,g,h,A,p,H,w,_){let i=n.length,d=g.length,c=i;const a={};for(;c--;)a[n[c].key]=c;const l=[],u=new Map,m=new Map,M=[];for(c=d;c--;){const e=_(x,g,c),s=k(e);let t=h.get(s);t?M.push(()=>t.p(e,f)):(t=H(s,e),t.c()),u.set(s,l[c]=t),s in a&&m.set(s,Math.abs(c-a[s]))}const v=new Set,S=new Set;function y(e){q(e,1),e.m(A,w),h.set(e.key,e),w=e.first,d--}for(;i&&d;){const e=l[d-1],s=n[i-1],t=e.key,o=s.key;e===s?(w=e.first,i--,d--):u.has(o)?!h.has(t)||v.has(t)?y(e):S.has(o)?i--:m.get(t)>m.get(o)?(S.add(t),y(e)):(v.add(o),i--):(p(s,h),i--)}for(;i--;){const e=n[i];u.has(e.key)||p(e,h)}for(;d;)y(l[d-1]);return z(M),l}export{F as d,E as e,G as o,I as u};
//# sourceMappingURL=each.BAtknz4E.js.map