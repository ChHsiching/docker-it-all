import{s as ve,e as g,c as p,a as v,d as f,f as i,i as S,n as pe,Q as it,p as ut,j as he,q as ft,t as G,k as U,b as K,o as R,I as xe,g as d,C as oe,u as z,h as $,H as He,y as ge,l as Ze,r as ht,Z as Je,v as _t,w as mt,x as gt,O as Ue,E as Qe,F as Ge,A as Be,R as pt,P as Ke,D as Oe}from"../chunks/scheduler.CvZYoJ9P.js";import{S as be,i as we,t as W,g as ct,a as q,c as dt,h as Ce,f as Se,b as le,d as re,m as ae,e as ne}from"../chunks/index.C1N8d1hw.js";import{e as Ne}from"../chunks/each.BAtknz4E.js";import"../chunks/Toaster.svelte_svelte_type_style_lang.ChidyyUD.js";import{g as vt}from"../chunks/entry.BsJDnQad.js";import{e as bt,h as wt,u as kt,m as Et,d as yt}from"../chunks/index.Dh8PXriy.js";import{g as It}from"../chunks/index.CR8c5aJv.js";import{s as Dt}from"../chunks/index.C-Yl_4Dq.js";import{C as Vt}from"../chunks/Collapsible.DXtiMlxc.js";import{C as Tt}from"../chunks/ChevronUp.DLoPRwlS.js";import{P as Ct}from"../chunks/Pencil.DFi5hT5Y.js";import{C as Nt}from"../chunks/Cog6.DmkF6C8g.js";import{a as $e}from"../chunks/index.D5G1ZMhl.js";import{f as et,s as tt}from"../chunks/index.Cudv6G18.js";function st(l,e,s){const t=l.slice();return t[9]=e[s],t[10]=e,t[11]=s,t}function lt(l){let e,s,t,r=l[2].t(l[9].role)+"",n,a,c,u,_,y,h,o,w,m='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>',I,b,C;function T(){l[7].call(u,l[10],l[11])}function j(){return l[8](l[11])}return{c(){e=g("div"),s=g("div"),t=g("div"),n=G(r),a=U(),c=g("div"),u=g("textarea"),h=U(),o=g("div"),w=g("button"),w.innerHTML=m,I=U(),this.h()},l(H){e=p(H,"DIV",{class:!0});var E=v(e);s=p(E,"DIV",{class:!0});var D=v(s);t=p(D,"DIV",{class:!0});var A=v(t);n=K(A,r),A.forEach(f),D.forEach(f),a=R(E),c=p(E,"DIV",{class:!0});var N=v(c);u=p(N,"TEXTAREA",{id:!0,class:!0,placeholder:!0,rows:!0}),v(u).forEach(f),N.forEach(f),h=R(E),o=p(E,"DIV",{class:!0});var O=v(o);w=p(O,"BUTTON",{class:!0,"data-svelte-h":!0}),xe(w)!=="svelte-1526cro"&&(w.innerHTML=m),O.forEach(f),I=R(E),E.forEach(f),this.h()},h(){i(t,"class","px-2 py-1 text-sm font-semibold uppercase min-w-[6rem] text-left rounded-lg transition"),i(s,"class","flex items-start pt-1"),i(u,"id",_=l[9].role+"-"+l[11]+"-textarea"),i(u,"class","w-full bg-transparent outline-none rounded-lg p-2 text-sm resize-none overflow-hidden"),i(u,"placeholder",y=l[2].t("Enter {{role}} message here",{role:l[9].role==="user"?l[2].t("a user"):l[2].t("an assistant")})),i(u,"rows","1"),i(c,"class","flex-1"),i(w,"class","group-hover:text-gray-500 dark:text-gray-900 dark:hover:text-gray-300 transition"),i(o,"class","pt-1"),i(e,"class","flex gap-2 group")},m(H,E){S(H,e,E),d(e,s),d(s,t),d(t,n),d(e,a),d(e,c),d(c,u),l[4](u),oe(u,l[9].content),d(e,h),d(e,o),d(o,w),d(e,I),b||(C=[z(u,"input",l[5]),z(u,"focus",l[6]),z(u,"input",T),z(w,"click",j)],b=!0)},p(H,E){l=H,E&5&&r!==(r=l[2].t(l[9].role)+"")&&$(n,r),E&1&&_!==(_=l[9].role+"-"+l[11]+"-textarea")&&i(u,"id",_),E&5&&y!==(y=l[2].t("Enter {{role}} message here",{role:l[9].role==="user"?l[2].t("a user"):l[2].t("an assistant")}))&&i(u,"placeholder",y),E&1&&oe(u,l[9].content)},d(H){H&&f(e),l[4](null),b=!1,He(C)}}}function Ht(l){let e,s=Ne(l[0]),t=[];for(let r=0;r<s.length;r+=1)t[r]=lt(st(l,s,r));return{c(){e=g("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=p(r,"DIV",{class:!0});var n=v(e);for(let a=0;a<t.length;a+=1)t[a].l(n);n.forEach(f),this.h()},h(){i(e,"class","py-3 space-y-3")},m(r,n){S(r,e,n);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null)},p(r,[n]){if(n&7){s=Ne(r[0]);let a;for(a=0;a<s.length;a+=1){const c=st(r,s,a);t[a]?t[a].p(c,n):(t[a]=lt(c),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=s.length}},i:pe,o:pe,d(r){r&&f(e),it(t,r)}}}function At(l,e,s){let t;const r=ut("i18n");he(l,r,o=>s(2,t=o));let{messages:n=[]}=e,a;ft(()=>{n.forEach((o,w)=>{s(1,a.style.height="",a),s(1,a.style.height=a.scrollHeight+"px",a)})});function c(o){ge[o?"unshift":"push"](()=>{a=o,s(1,a)})}const u=o=>{s(1,a.style.height="",a),s(1,a.style.height=a.scrollHeight+"px",a)},_=o=>{s(1,a.style.height="",a),s(1,a.style.height=a.scrollHeight+"px",a)};function y(o,w){o[w].content=this.value,s(0,n)}const h=o=>{s(0,n=n.filter((w,m)=>m!==o))};return l.$$set=o=>{"messages"in o&&s(0,n=o.messages)},[n,a,t,r,c,u,_,y,h]}class Bt extends be{constructor(e){super(),we(this,e,At,Ht,ve,{messages:0})}}function rt(l){let e,s,t,r,n,a,c,u,_,y,h;const o=l[6].default,w=ht(o,l,l[5],null);return{c(){e=g("div"),t=U(),r=g("div"),n=g("div"),w&&w.c(),this.h()},l(m){e=p(m,"DIV",{class:!0}),v(e).forEach(f),t=R(m),r=p(m,"DIV",{class:!0});var I=v(r);n=p(I,"DIV",{class:!0,style:!0});var b=v(n);w&&w.l(b),b.forEach(f),I.forEach(f),this.h()},h(){i(e,"class","absolute z-20 top-0 right-0 left-0 bottom-0 bg-white/20 dark:bg-black/5 w-full min-h-full h-full flex justify-center overflow-hidden overscroll-contain"),i(n,"class",a=l[3]+" h-full"),Je(n,"width",l[0]?l[2]:"0px"),i(r,"class",c="absolute z-30 shadow-xl "+(l[1]==="right"?"right-0":"left-0")+" top-0 bottom-0")},m(m,I){S(m,e,I),S(m,t,I),S(m,r,I),d(r,n),w&&w.m(n,null),_=!0,y||(h=z(e,"mousedown",l[7]),y=!0)},p(m,I){l=m,w&&w.p&&(!_||I&32)&&_t(w,o,l,l[5],_?gt(o,l[5],I,null):mt(l[5]),null),(!_||I&8&&a!==(a=l[3]+" h-full"))&&i(n,"class",a),(!_||I&5)&&Je(n,"width",l[0]?l[2]:"0px"),(!_||I&2&&c!==(c="absolute z-30 shadow-xl "+(l[1]==="right"?"right-0":"left-0")+" top-0 bottom-0"))&&i(r,"class",c)},i(m){_||(m&&Ue(()=>{_&&(s||(s=Ce(e,et,{duration:l[4]},!0)),s.run(1))}),W(w,m),m&&Ue(()=>{_&&(u||(u=Ce(r,tt,{duration:l[4],easing:$e,axis:l[1]==="right"?"x":"y"},!0)),u.run(1))}),_=!0)},o(m){m&&(s||(s=Ce(e,et,{duration:l[4]},!1)),s.run(0)),q(w,m),m&&(u||(u=Ce(r,tt,{duration:l[4],easing:$e,axis:l[1]==="right"?"x":"y"},!1)),u.run(0)),_=!1},d(m){m&&(f(e),f(t),f(r)),m&&s&&s.end(),w&&w.d(m),m&&u&&u.end(),y=!1,h()}}}function Ot(l){let e,s,t=l[0]&&rt(l);return{c(){t&&t.c(),e=Ze()},l(r){t&&t.l(r),e=Ze()},m(r,n){t&&t.m(r,n),S(r,e,n),s=!0},p(r,[n]){r[0]?t?(t.p(r,n),n&1&&W(t,1)):(t=rt(r),t.c(),W(t,1),t.m(e.parentNode,e)):t&&(ct(),q(t,1,1,()=>{t=null}),dt())},i(r){s||(W(t),s=!0)},o(r){q(t),s=!1},d(r){r&&f(e),t&&t.d(r)}}}function St(l,e,s){let{$$slots:t={},$$scope:r}=e,{show:n=!1}=e,{side:a="right"}=e,{width:c="200px"}=e,{className:u=""}=e,{duration:_=100}=e;const y=()=>{s(0,n=!1)};return l.$$set=h=>{"show"in h&&s(0,n=h.show),"side"in h&&s(1,a=h.side),"width"in h&&s(2,c=h.width),"className"in h&&s(3,u=h.className),"duration"in h&&s(4,_=h.duration),"$$scope"in h&&s(5,r=h.$$scope)},[n,a,c,u,_,r,t,y]}class xt extends be{constructor(e){super(),we(this,e,St,Ot,ve,{show:0,side:1,width:2,className:3,duration:4})}}function Ut(l){let e,s;return{c(){e=Qe("svg"),s=Qe("path"),this.h()},l(t){e=Ge(t,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var r=v(e);s=Ge(r,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),v(s).forEach(f),r.forEach(f),this.h()},h(){i(s,"stroke-linecap","round"),i(s,"stroke-linejoin","round"),i(s,"d","M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"fill","none"),i(e,"viewBox","0 0 24 24"),i(e,"stroke-width",l[1]),i(e,"stroke","currentColor"),i(e,"class",l[0])},m(t,r){S(t,e,r),d(e,s)},p(t,[r]){r&2&&i(e,"stroke-width",t[1]),r&1&&i(e,"class",t[0])},i:pe,o:pe,d(t){t&&f(e)}}}function Rt(l,e,s){let{className:t="size-4"}=e,{strokeWidth:r="1.5"}=e;return l.$$set=n=>{"className"in n&&s(0,t=n.className),"strokeWidth"in n&&s(1,r=n.strokeWidth)},[t,r]}class Mt extends be{constructor(e){super(),we(this,e,Rt,Ut,ve,{className:0,strokeWidth:1})}}function at(l,e,s){const t=l.slice();return t[37]=e[s],t}function nt(l){let e,s=l[37].name+"",t,r;return{c(){e=g("option"),t=G(s),this.h()},l(n){e=p(n,"OPTION",{class:!0});var a=v(e);t=K(a,s),a.forEach(f),this.h()},h(){e.__value=r=l[37].id,oe(e,e.__value),i(e,"class","bg-gray-50 dark:bg-gray-700")},m(n,a){S(n,e,a),d(e,t)},p(n,a){a[0]&512&&s!==(s=n[37].name+"")&&$(t,s),a[0]&512&&r!==(r=n[37].id)&&(e.__value=r,oe(e,e.__value))},d(n){n&&f(e)}}}function zt(l){let e,s,t,r="Settings",n,a,c,u,_,y,h,o,w="Model",m,I,b,C,T,j;u=new Mt({props:{className:"size-3",strokeWidth:"2.5"}});let H=Ne(l[9]),E=[];for(let D=0;D<H.length;D+=1)E[D]=nt(at(l,H,D));return{c(){e=g("div"),s=g("div"),t=g("div"),t.textContent=r,n=U(),a=g("div"),c=g("button"),le(u.$$.fragment),_=U(),y=g("div"),h=g("div"),o=g("div"),o.textContent=w,m=U(),I=g("div"),b=g("select");for(let D=0;D<E.length;D+=1)E[D].c();this.h()},l(D){e=p(D,"DIV",{class:!0});var A=v(e);s=p(A,"DIV",{class:!0});var N=v(s);t=p(N,"DIV",{class:!0,"data-svelte-h":!0}),xe(t)!=="svelte-1dw76ku"&&(t.textContent=r),n=R(N),a=p(N,"DIV",{class:!0});var O=v(a);c=p(O,"BUTTON",{class:!0});var X=v(c);re(u.$$.fragment,X),X.forEach(f),O.forEach(f),N.forEach(f),_=R(A),y=p(A,"DIV",{class:!0});var x=v(y);h=p(x,"DIV",{});var F=v(h);o=p(F,"DIV",{class:!0,"data-svelte-h":!0}),xe(o)!=="svelte-vz1bvh"&&(o.textContent=w),m=R(F),I=p(F,"DIV",{class:!0});var ee=v(I);b=p(ee,"SELECT",{class:!0});var P=v(b);for(let Y=0;Y<E.length;Y+=1)E[Y].l(P);P.forEach(f),ee.forEach(f),F.forEach(f),x.forEach(f),A.forEach(f),this.h()},h(){i(t,"class","font-medium text-base"),i(c,"class","p-1.5 bg-transparent hover:bg-white/5 transition rounded-lg"),i(a,"class","translate-x-1.5"),i(s,"class","flex justify-between items-center mb-2"),i(o,"class","text-xs font-medium mb-1"),i(b,"class","w-full bg-transparent border border-gray-50 dark:border-gray-850 rounded-lg py-1 px-2 -mx-0.5 text-sm outline-none"),l[0]===void 0&&Ue(()=>l[16].call(b)),i(I,"class","w-full"),i(y,"class","mt-1"),i(e,"class","flex flex-col px-5 py-3 text-sm")},m(D,A){S(D,e,A),d(e,s),d(s,t),d(s,n),d(s,a),d(a,c),ae(u,c,null),d(e,_),d(e,y),d(y,h),d(h,o),d(h,m),d(h,I),d(I,b);for(let N=0;N<E.length;N+=1)E[N]&&E[N].m(b,null);Ke(b,l[0],!0),C=!0,T||(j=[z(c,"click",l[15]),z(b,"change",l[16])],T=!0)},p(D,A){if(A[0]&512){H=Ne(D[9]);let N;for(N=0;N<H.length;N+=1){const O=at(D,H,N);E[N]?E[N].p(O,A):(E[N]=nt(O),E[N].c(),E[N].m(b,null))}for(;N<E.length;N+=1)E[N].d(1);E.length=H.length}A[0]&513&&Ke(b,D[0])},i(D){C||(W(u.$$.fragment,D),C=!0)},o(D){q(u.$$.fragment,D),C=!1},d(D){D&&f(e),ne(u),it(E,D),T=!1,He(j)}}}function ot(l){let e,s;return{c(){e=g("div"),s=G(l[5]),this.h()},l(t){e=p(t,"DIV",{class:!0});var r=v(e);s=K(r,l[5]),r.forEach(f),this.h()},h(){i(e,"class","flex-1 text-gray-500 line-clamp-1")},m(t,r){S(t,e,r),d(e,s)},p(t,r){r[0]&32&&$(s,t[5])},d(t){t&&f(e)}}}function jt(l){let e,s;return e=new Ct({props:{className:"size-3.5"}}),{c(){le(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,r){ae(e,t,r),s=!0},i(t){s||(W(e.$$.fragment,t),s=!0)},o(t){q(e.$$.fragment,t),s=!1},d(t){ne(e,t)}}}function Wt(l){let e,s;return e=new Tt({props:{className:"size-3.5"}}),{c(){le(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,r){ae(e,t,r),s=!0},i(t){s||(W(e.$$.fragment,t),s=!0)},o(t){q(e.$$.fragment,t),s=!1},d(t){ne(e,t)}}}function Pt(l){let e,s,t=l[10].t("System Instructions")+"",r,n,a,c,u,_,y,h,o=!l[3]&&ot(l);const w=[Wt,jt],m=[];function I(b,C){return b[3]?0:1}return _=I(l),y=m[_]=w[_](l),{c(){e=g("div"),s=g("div"),r=G(t),n=U(),o&&o.c(),a=U(),c=g("div"),u=g("button"),y.c(),this.h()},l(b){e=p(b,"DIV",{class:!0});var C=v(e);s=p(C,"DIV",{class:!0});var T=v(s);r=K(T,t),T.forEach(f),n=R(C),o&&o.l(C),a=R(C),c=p(C,"DIV",{class:!0});var j=v(c);u=p(j,"BUTTON",{class:!0});var H=v(u);y.l(H),H.forEach(f),j.forEach(f),C.forEach(f),this.h()},h(){i(s,"class","flex-shrink-0 font-medium ml-1.5"),i(u,"class","p-1.5 bg-transparent hover:bg-white/5 transition rounded-lg"),i(c,"class","flex-shrink-0"),i(e,"class","flex gap-2 justify-between items-center")},m(b,C){S(b,e,C),d(e,s),d(s,r),d(e,n),o&&o.m(e,null),d(e,a),d(e,c),d(c,u),m[_].m(u,null),h=!0},p(b,C){(!h||C[0]&1024)&&t!==(t=b[10].t("System Instructions")+"")&&$(r,t),b[3]?o&&(o.d(1),o=null):o?o.p(b,C):(o=ot(b),o.c(),o.m(e,a));let T=_;_=I(b),_!==T&&(ct(),q(m[T],1,1,()=>{m[T]=null}),dt(),y=m[_],y||(y=m[_]=w[_](b),y.c()),W(y,1),y.m(u,null))},i(b){h||(W(y),h=!0)},o(b){q(y),h=!1},d(b){b&&f(e),o&&o.d(),m[_].d()}}}function Lt(l){let e,s,t,r,n,a;return{c(){e=g("div"),s=g("div"),t=g("textarea"),this.h()},l(c){e=p(c,"DIV",{slot:!0});var u=v(e);s=p(u,"DIV",{class:!0});var _=v(s);t=p(_,"TEXTAREA",{id:!0,class:!0,placeholder:!0,rows:!0}),v(t).forEach(f),_.forEach(f),u.forEach(f),this.h()},h(){i(t,"id","system-textarea"),i(t,"class","w-full h-full bg-transparent resize-none outline-none text-sm"),i(t,"placeholder",r=l[10].t("You're a helpful assistant.")),i(t,"rows","4"),i(s,"class","pt-1 px-1.5"),i(e,"slot","content")},m(c,u){S(c,e,u),d(e,s),d(s,t),oe(t,l[5]),n||(a=z(t,"input",l[18]),n=!0)},p(c,u){u[0]&1024&&r!==(r=c[10].t("You're a helpful assistant."))&&i(t,"placeholder",r),u[0]&32&&oe(t,c[5])},d(c){c&&f(e),n=!1,a()}}}function qt(l){let e=l[10].t("Assistant")+"",s;return{c(){s=G(e)},l(t){s=K(t,e)},m(t,r){S(t,s,r)},p(t,r){r[0]&1024&&e!==(e=t[10].t("Assistant")+"")&&$(s,e)},d(t){t&&f(s)}}}function Xt(l){let e=l[10].t("User")+"",s;return{c(){s=G(e)},l(t){s=K(t,e)},m(t,r){S(t,s,r)},p(t,r){r[0]&1024&&e!==(e=t[10].t("User")+"")&&$(s,e)},d(t){t&&f(s)}}}function Ft(l){let e,s=l[10].t("Cancel")+"",t,r,n;return{c(){e=g("button"),t=G(s),this.h()},l(a){e=p(a,"BUTTON",{class:!0});var c=v(e);t=K(c,s),c.forEach(f),this.h()},h(){i(e,"class","px-3 py-1.5 text-sm font-medium bg-gray-300 text-black transition rounded-lg")},m(a,c){S(a,e,c),d(e,t),r||(n=z(e,"click",l[29]),r=!0)},p(a,c){c[0]&1024&&s!==(s=a[10].t("Cancel")+"")&&$(t,s)},d(a){a&&f(e),r=!1,n()}}}function Yt(l){let e,s=l[10].t("Add")+"",t,r,n,a,c=l[10].t("Run")+"",u,_,y;return{c(){e=g("button"),t=G(s),n=U(),a=g("button"),u=G(c),this.h()},l(h){e=p(h,"BUTTON",{class:!0});var o=v(e);t=K(o,s),o.forEach(f),n=R(h),a=p(h,"BUTTON",{class:!0});var w=v(a);u=K(w,c),w.forEach(f),this.h()},h(){e.disabled=r=l[7]==="",i(e,"class","px-3.5 py-1.5 text-sm font-medium disabled:bg-gray-50 dark:disabled:hover:bg-gray-850 disabled:cursor-not-allowed bg-gray-50 hover:bg-gray-100 text-gray-900 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-gray-200 transition rounded-lg"),i(a,"class","px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-lg")},m(h,o){S(h,e,o),d(e,t),S(h,n,o),S(h,a,o),d(a,u),_||(y=[z(e,"click",l[27]),z(a,"click",l[28])],_=!0)},p(h,o){o[0]&1024&&s!==(s=h[10].t("Add")+"")&&$(t,s),o[0]&128&&r!==(r=h[7]==="")&&(e.disabled=r),o[0]&1024&&c!==(c=h[10].t("Run")+"")&&$(u,c)},d(h){h&&(f(e),f(n),f(a)),_=!1,He(y)}}}function Zt(l){let e,s,t,r,n,a,c,u,_,y,h,o,w,m,I,b,C,T,j,H,E,D,A,N,O,X,x,F,ee,P,Y,Z,ke,ie,ue,Ee,Ae;function Re(k){l[17](k)}let V={className:" bg-white dark:bg-gray-900",width:"300px",$$slots:{default:[zt]},$$scope:{ctx:l}};l[4]!==void 0&&(V.show=l[4]),t=new xt({props:V}),ge.push(()=>Se(t,"show",Re));function _e(k){l[19](k)}let ye={className:"w-full flex-1",buttonClassName:"w-full rounded-lg text-sm border border-gray-50 dark:border-gray-850 w-full py-1 px-1.5",grow:!0,$$slots:{content:[Lt],default:[Pt]},$$scope:{ctx:l}};l[3]!==void 0&&(ye.open=l[3]),u=new Vt({props:ye}),ge.push(()=>Se(u,"open",_e)),w=new Nt({});function fe(k){l[21](k)}let ce={};l[8]!==void 0&&(ce.messages=l[8]),T=new Bt({props:ce}),ge.push(()=>Se(T,"messages",fe));function me(k,B){return k[6]==="user"?Xt:qt}let J=me(l),L=J(l);function Ie(k,B){return k[1]?Ft:Yt}let te=Ie(l),M=te(l);return{c(){e=g("div"),s=g("div"),le(t.$$.fragment),n=U(),a=g("div"),c=g("div"),le(u.$$.fragment),y=U(),h=g("div"),o=g("button"),le(w.$$.fragment),m=U(),I=g("div"),b=g("div"),C=g("div"),le(T.$$.fragment),H=U(),E=g("div"),D=g("div"),A=G(l[0]),N=U(),O=g("div"),X=g("div"),x=g("textarea"),ee=U(),P=g("div"),Y=g("div"),Z=g("button"),L.c(),ke=U(),ie=g("div"),M.c(),this.h()},l(k){e=p(k,"DIV",{class:!0});var B=v(e);s=p(B,"DIV",{class:!0});var se=v(s);re(t.$$.fragment,se),n=R(se),a=p(se,"DIV",{class:!0});var Q=v(a);c=p(Q,"DIV",{class:!0});var de=v(c);re(u.$$.fragment,de),y=R(de),h=p(de,"DIV",{class:!0});var Me=v(h);o=p(Me,"BUTTON",{class:!0});var ze=v(o);re(w.$$.fragment,ze),ze.forEach(f),Me.forEach(f),de.forEach(f),m=R(Q),I=p(Q,"DIV",{class:!0,id:!0});var je=v(I);b=p(je,"DIV",{class:!0});var We=v(b);C=p(We,"DIV",{class:!0});var Pe=v(C);re(T.$$.fragment,Pe),Pe.forEach(f),We.forEach(f),je.forEach(f),H=R(Q),E=p(Q,"DIV",{class:!0});var De=v(E);D=p(De,"DIV",{class:!0});var Le=v(D);A=K(Le,l[0]),Le.forEach(f),N=R(De),O=p(De,"DIV",{class:!0});var Ve=v(O);X=p(Ve,"DIV",{class:!0});var qe=v(X);x=p(qe,"TEXTAREA",{class:!0,placeholder:!0,rows:!0}),v(x).forEach(f),qe.forEach(f),ee=R(Ve),P=p(Ve,"DIV",{class:!0});var Te=v(P);Y=p(Te,"DIV",{});var Xe=v(Y);Z=p(Xe,"BUTTON",{class:!0});var Fe=v(Z);L.l(Fe),Fe.forEach(f),Xe.forEach(f),ke=R(Te),ie=p(Te,"DIV",{});var Ye=v(ie);M.l(Ye),Ye.forEach(f),Te.forEach(f),Ve.forEach(f),De.forEach(f),Q.forEach(f),se.forEach(f),B.forEach(f),this.h()},h(){i(o,"class","p-1.5 bg-transparent hover:bg-white/5 transition rounded-lg"),i(h,"class","translate-y-1"),i(c,"class","flex w-full items-start gap-1.5"),i(C,"class","flex-1 p-1"),i(b,"class","h-full w-full flex flex-col"),i(I,"class","pb-2.5 flex flex-col justify-between w-full flex-auto overflow-auto h-0"),i(I,"id","messages-container"),i(D,"class","text-xs font-medium text-gray-500 px-2 py-1"),i(x,"class","w-full h-full bg-transparent resize-none outline-none text-sm"),i(x,"placeholder",F=l[10].t("Enter {{role}} message here",{role:l[6]==="user"?l[10].t("a user"):l[10].t("an assistant")})),i(x,"rows","2"),i(X,"class","py-0.5"),i(Z,"class","px-3.5 py-1.5 text-sm font-medium bg-gray-50 hover:bg-gray-100 text-gray-900 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-gray-200 transition rounded-lg"),i(P,"class","flex justify-between"),i(O,"class","border border-gray-50 dark:border-gray-850 w-full px-3 py-2.5 rounded-xl"),i(E,"class","pb-3"),i(a,"class","flex flex-col h-full px-3.5"),i(s,"class","mx-auto w-full md:px-0 h-full relative"),i(e,"class","flex flex-col justify-between w-full overflow-y-auto h-full")},m(k,B){S(k,e,B),d(e,s),ae(t,s,null),d(s,n),d(s,a),d(a,c),ae(u,c,null),d(c,y),d(c,h),d(h,o),ae(w,o,null),d(a,m),d(a,I),d(I,b),d(b,C),ae(T,C,null),l[22](I),d(a,H),d(a,E),d(E,D),d(D,A),d(E,N),d(E,O),d(O,X),d(X,x),oe(x,l[7]),d(O,ee),d(O,P),d(P,Y),d(Y,Z),L.m(Z,null),d(P,ke),d(P,ie),M.m(ie,null),ue=!0,Ee||(Ae=[z(o,"click",l[20]),z(x,"input",l[23]),z(x,"input",l[24]),z(x,"focus",l[25]),z(Z,"click",l[26])],Ee=!0)},p(k,B){const se={};B[0]&529|B[1]&512&&(se.$$scope={dirty:B,ctx:k}),!r&&B[0]&16&&(r=!0,se.show=k[4],Be(()=>r=!1)),t.$set(se);const Q={};B[0]&1064|B[1]&512&&(Q.$$scope={dirty:B,ctx:k}),!_&&B[0]&8&&(_=!0,Q.open=k[3],Be(()=>_=!1)),u.$set(Q);const de={};!j&&B[0]&256&&(j=!0,de.messages=k[8],Be(()=>j=!1)),T.$set(de),(!ue||B[0]&1)&&$(A,k[0]),(!ue||B[0]&1088&&F!==(F=k[10].t("Enter {{role}} message here",{role:k[6]==="user"?k[10].t("a user"):k[10].t("an assistant")})))&&i(x,"placeholder",F),B[0]&128&&oe(x,k[7]),J===(J=me(k))&&L?L.p(k,B):(L.d(1),L=J(k),L&&(L.c(),L.m(Z,null))),te===(te=Ie(k))&&M?M.p(k,B):(M.d(1),M=te(k),M&&(M.c(),M.m(ie,null)))},i(k){ue||(W(t.$$.fragment,k),W(u.$$.fragment,k),W(w.$$.fragment,k),W(T.$$.fragment,k),ue=!0)},o(k){q(t.$$.fragment,k),q(u.$$.fragment,k),q(w.$$.fragment,k),q(T.$$.fragment,k),ue=!1},d(k){k&&f(e),ne(t),ne(u),ne(w),ne(T),l[22](null),L.d(),M.d(),Ee=!1,He(Ae)}}}function Jt(l,e,s){let t,r,n,a,c;he(l,bt,V=>s(32,t=V)),he(l,wt,V=>s(33,r=V)),he(l,kt,V=>s(34,n=V)),he(l,Et,V=>s(9,a=V));const u=ut("i18n");he(l,u,V=>s(10,c=V));let _="",y=!1,h=!1,o,w=!1,m=!1,I="",b="user",C="",T=[];const j=()=>{const V=o;V&&(V.scrollTop=V==null?void 0:V.scrollHeight)},H=()=>{h=!0,console.log("stopResponse")},E=async()=>{var me;const V=a.find(J=>J.id===_),[_e,ye]=await It(localStorage.token,{model:V.id,stream:!0,messages:[I?{role:"system",content:I}:void 0,...T].filter(J=>J)},`${yt}/api`);let fe;((me=T.at(-1))==null?void 0:me.role)==="assistant"?fe=T.at(-1):(fe={role:"assistant",content:""},T.push(fe),s(8,T)),await Oe();const ce=document.getElementById(`assistant-${T.length-1}-textarea`);if(_e&&_e.ok){const J=_e.body.pipeThrough(new TextDecoderStream).pipeThrough(Dt(`
`)).getReader();for(;;){const{value:L,done:Ie}=await J.read();if(Ie||h){h&&ye.abort("User: Stop Response");break}try{let te=L.split(`
`);for(const M of te)if(M!=="")if(console.log(M),M==="data: [DONE]")s(8,T);else{let k=JSON.parse(M.replace(/^data: /,""));if(console.log(k),fe.content==""&&k.choices[0].delta.content==`
`)continue;ce.style.height=ce.scrollHeight+"px",fe.content+=k.choices[0].delta.content??"",s(8,T),ce.style.height=ce.scrollHeight+"px",await Oe()}}catch(te){console.log(te)}j()}}},D=async()=>{C&&(T.push({role:b,content:C}),s(8,T),s(7,C=""),await Oe(),j())},A=async()=>{_&&(await D(),s(1,y=!0),await E(),s(1,y=!1),h=!1)};ft(async()=>{(n==null?void 0:n.role)!=="admin"&&await vt("/"),r!=null&&r.models?s(0,_=r==null?void 0:r.models[0]):t!=null&&t.default_models?s(0,_=t==null?void 0:t.default_models.split(",")[0]):s(0,_="")});const N=()=>{s(4,m=!m)};function O(){_=pt(this),s(0,_)}function X(V){m=V,s(4,m)}function x(){I=this.value,s(5,I)}function F(V){w=V,s(3,w)}const ee=()=>{s(4,m=!m)};function P(V){T=V,s(8,T)}function Y(V){ge[V?"unshift":"push"](()=>{o=V,s(2,o)})}function Z(){C=this.value,s(7,C)}return[_,y,o,w,m,I,b,C,T,a,c,u,H,D,A,N,O,X,x,F,ee,P,Y,Z,V=>{V.target.style.height="",V.target.style.height=Math.min(V.target.scrollHeight,150)+"px"},V=>{V.target.style.height="",V.target.style.height=Math.min(V.target.scrollHeight,150)+"px"},()=>{s(6,b=b==="user"?"assistant":"user")},()=>{D(),s(6,b=b==="user"?"assistant":"user")},()=>{A()},()=>{H()}]}class Qt extends be{constructor(e){super(),we(this,e,Jt,Zt,ve,{},null,[-1,-1])}}function Gt(l){let e,s;return e=new Qt({}),{c(){le(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,r){ae(e,t,r),s=!0},p:pe,i(t){s||(W(e.$$.fragment,t),s=!0)},o(t){q(e.$$.fragment,t),s=!1},d(t){ne(e,t)}}}class ds extends be{constructor(e){super(),we(this,e,null,Gt,ve,{})}}export{ds as component};
//# sourceMappingURL=15.D_tsYYe1.js.map
