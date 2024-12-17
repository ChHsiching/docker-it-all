import{s as ne,e as k,c as w,a as g,d as m,f as u,i as A,g as _,n as le,q as ke,t as T,b as H,h as P,O as Fe,l as re,Z as ve,E as G,F as R,p as Le,j as ie,k as B,I as Ye,o as V,u as $,y as Ge,m as Re,A as Ze,C as se}from"../chunks/scheduler.CvZYoJ9P.js";import{S as _e,i as pe,g as ge,a as K,c as be,t as Z,j as Je,b as fe,d as de,m as ce,e as he,f as Ke}from"../chunks/index.C1N8d1hw.js";import{t as ue}from"../chunks/Toaster.svelte_svelte_type_style_lang.ChidyyUD.js";import{g as Ee}from"../chunks/entry.BsJDnQad.js";import{p as Qe}from"../chunks/stores.DXlpsfYI.js";import{a as Xe}from"../chunks/index.CusVmKHs.js";import{u as $e,a as xe,l as et,g as tt}from"../chunks/index.C5iONN2C.js";import{d as me,e as ye,u as Ie,n as lt,W as rt}from"../chunks/index.Dh8PXriy.js";import{k as st}from"../chunks/index.C-Yl_4Dq.js";import{S as at}from"../chunks/Spinner.D_9sd18Y.js";import{a as it}from"../chunks/index.Cudv6G18.js";import{e as Ne,u as nt,d as ot}from"../chunks/each.BAtknz4E.js";function Ue(i){let e,l=i[1].at(i[2])+"",t,r;return{c(){e=k("div"),t=T(l),this.h()},l(a){e=w(a,"DIV",{class:!0});var s=g(e);t=H(s,l),s.forEach(m),this.h()},h(){u(e,"class","marquee-item")},m(a,s){A(a,e,s),_(e,t)},p(a,s){s&6&&l!==(l=a[1].at(a[2])+"")&&P(t,l)},i(a){a&&(r||Fe(()=>{r=Je(e,it,{y:"30%",duration:1e3}),r.start()}))},o:le,d(a){a&&m(e)}}}function ut(i){let e,l,t=i[2],r=Ue(i);return{c(){e=k("div"),l=k("div"),r.c(),this.h()},l(a){e=w(a,"DIV",{class:!0});var s=g(e);l=w(s,"DIV",{});var o=g(l);r.l(o),o.forEach(m),s.forEach(m),this.h()},h(){u(e,"class",i[0])},m(a,s){A(a,e,s),_(e,l),r.m(l,null)},p(a,[s]){s&4&&ne(t,t=a[2])?(ge(),K(r,1,1,le),be(),r=Ue(a),r.c(),Z(r,1),r.m(l,null)):r.p(a,s),s&1&&u(e,"class",a[0])},i(a){Z(r)},o(a){K(r)},d(a){a&&m(e),r.d(a)}}}function ft(i,e,l){let t=0,{className:r=""}=e,{words:a=["lorem","ipsum"]}=e,{duration:s=4e3}=e;return ke(()=>{setInterval(async()=>{t===a.length-1?l(2,t=0):l(2,t=t+1)},s)}),i.$$set=o=>{"className"in o&&l(0,r=o.className),"words"in o&&l(1,a=o.words),"duration"in o&&l(3,s=o.duration)},[r,a,t,s]}class dt extends _e{constructor(e){super(),pe(this,e,ft,ut,ne,{className:0,words:1,duration:3})}}function De(i,e,l){const t=i.slice();return t[3]=e[l],t[5]=l,t}function Ae(i,e){let l;return{key:i,first:null,c(){l=k("div"),this.h()},l(t){l=w(t,"DIV",{class:!0,style:!0}),g(l).forEach(m),this.h()},h(){u(l,"class","image w-full h-full absolute top-0 left-0 bg-cover bg-center transition-opacity duration-1000 svelte-ezqcnh"),ve(l,"opacity",e[1]===e[5]?1:0),ve(l,"background-image","url('"+e[3]+"')"),this.first=l},m(t,r){A(t,l,r)},p(t,r){e=t,r&3&&ve(l,"opacity",e[1]===e[5]?1:0),r&1&&ve(l,"background-image","url('"+e[3]+"')")},d(t){t&&m(l)}}}function ct(i){let e=[],l=new Map,t,r=Ne(i[0]);const a=s=>s[5];for(let s=0;s<r.length;s+=1){let o=De(i,r,s),c=a(o);l.set(c,e[s]=Ae(c,o))}return{c(){for(let s=0;s<e.length;s+=1)e[s].c();t=re()},l(s){for(let o=0;o<e.length;o+=1)e[o].l(s);t=re()},m(s,o){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(s,o);A(s,t,o)},p(s,[o]){o&3&&(r=Ne(s[0]),e=nt(e,o,a,1,s,r,l,t.parentNode,ot,Ae,t,De))},i:le,o:le,d(s){s&&m(t);for(let o=0;o<e.length;o+=1)e[o].d(s)}}}function ht(i,e,l){let{imageUrls:t=["/assets/images/adam.jpg","/assets/images/galaxy.jpg","/assets/images/earth.jpg","/assets/images/space.jpg"]}=e,{duration:r=5e3}=e,a=0;return ke(()=>{setInterval(()=>{l(1,a=(a+1)%(t.length-1))},r)}),i.$$set=s=>{"imageUrls"in s&&l(0,t=s.imageUrls),"duration"in s&&l(2,r=s.duration)},[t,a,r]}class mt extends _e{constructor(e){super(),pe(this,e,ht,ct,ne,{imageUrls:0,duration:2})}}function _t(i){let e,l;return{c(){e=G("svg"),l=G("path"),this.h()},l(t){e=R(t,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var r=g(e);l=R(r,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),g(l).forEach(m),r.forEach(m),this.h()},h(){u(l,"stroke-linecap","round"),u(l,"stroke-linejoin","round"),u(l,"d","m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"fill","none"),u(e,"viewBox","0 0 24 24"),u(e,"stroke-width",i[1]),u(e,"stroke","currentColor"),u(e,"class",i[0])},m(t,r){A(t,e,r),_(e,l)},p(t,[r]){r&2&&u(e,"stroke-width",t[1]),r&1&&u(e,"class",t[0])},i:le,o:le,d(t){t&&m(e)}}}function pt(i,e,l){let{className:t="size-4"}=e,{strokeWidth:r="1.5"}=e;return i.$$set=a=>{"className"in a&&l(0,t=a.className),"strokeWidth"in a&&l(1,r=a.strokeWidth)},[t,r]}class vt extends _e{constructor(e){super(),pe(this,e,pt,_t,ne,{className:0,strokeWidth:1})}}function Se(i){let e,l,t=`<div class="flex space-x-2"><div class="self-center"><img crossorigin="anonymous" src="${me}/static/favicon.png" class="w-6 rounded-full" alt="logo"/></div></div>`,r,a,s,o,c,p,n,f,h,d,v,E,y,I=i[2].t("wherever you are")+"",U,C,M,W,O,F,X,S,j=i[2].t("Get started")+"",q,J,x,te;return a=new mt({props:{duration:5e3}}),v=new dt({props:{duration:5e3,words:[i[2].t("Explore the cosmos"),i[2].t("Unlock mysteries"),i[2].t("Chart new frontiers"),i[2].t("Dive into knowledge"),i[2].t("Discover wonders"),i[2].t("Ignite curiosity"),i[2].t("Forge new paths"),i[2].t("Unravel secrets"),i[2].t("Pioneer insights"),i[2].t("Embark on adventures")]}}),F=new vt({props:{className:"size-6"}}),{c(){e=k("div"),l=k("div"),l.innerHTML=t,r=B(),fe(a.$$.fragment),s=B(),o=k("div"),c=B(),p=k("div"),n=B(),f=k("div"),h=k("div"),d=k("div"),fe(v.$$.fragment),E=B(),y=k("div"),U=T(I),C=B(),M=k("div"),W=k("div"),O=k("button"),fe(F.$$.fragment),X=B(),S=k("div"),q=T(j),this.h()},l(b){e=w(b,"DIV",{class:!0});var D=g(e);l=w(D,"DIV",{class:!0,"data-svelte-h":!0}),Ye(l)!=="svelte-xyh0ou"&&(l.innerHTML=t),r=V(D),de(a.$$.fragment,D),s=V(D),o=w(D,"DIV",{class:!0}),g(o).forEach(m),c=V(D),p=w(D,"DIV",{class:!0}),g(p).forEach(m),n=V(D),f=w(D,"DIV",{class:!0});var z=g(f);h=w(z,"DIV",{class:!0});var Y=g(h);d=w(Y,"DIV",{class:!0});var N=g(d);de(v.$$.fragment,N),E=V(N),y=w(N,"DIV",{class:!0});var L=g(y);U=H(L,I),L.forEach(m),N.forEach(m),C=V(Y),M=w(Y,"DIV",{class:!0});var Q=g(M);W=w(Q,"DIV",{class:!0});var ee=g(W);O=w(ee,"BUTTON",{class:!0});var ae=g(O);de(F.$$.fragment,ae),ae.forEach(m),X=V(ee),S=w(ee,"DIV",{class:!0});var oe=g(S);q=H(oe,j),oe.forEach(m),ee.forEach(m),Q.forEach(m),Y.forEach(m),z.forEach(m),D.forEach(m),this.h()},h(){u(l,"class","fixed m-10 z-50"),u(o,"class","w-full h-full absolute top-0 left-0 bg-gradient-to-t from-20% from-black to-transparent"),u(p,"class","w-full h-full absolute top-0 left-0 backdrop-blur-sm bg-black/50"),u(y,"class","mt-0.5"),u(d,"class","text-5xl lg:text-7xl font-secondary"),u(O,"class","relative z-20 flex p-1 rounded-full bg-white/5 hover:bg-white/10 transition font-medium text-sm"),u(S,"class","mt-1.5 font-primary text-base font-medium"),u(W,"class","flex flex-col justify-center items-center"),u(M,"class","flex justify-center mt-8"),u(h,"class","flex flex-col justify-end w-full items-center pb-10 text-center"),u(f,"class","relative bg-transparent w-full min-h-screen flex z-10"),u(e,"class","w-full h-screen max-h-[100dvh] text-white relative")},m(b,D){A(b,e,D),_(e,l),_(e,r),ce(a,e,null),_(e,s),_(e,o),_(e,c),_(e,p),_(e,n),_(e,f),_(f,h),_(h,d),ce(v,d,null),_(d,E),_(d,y),_(y,U),_(h,C),_(h,M),_(M,W),_(W,O),ce(F,O,null),_(W,X),_(W,S),_(S,q),J=!0,x||(te=$(O,"click",i[4]),x=!0)},p(b,D){const z={};D&4&&(z.words=[b[2].t("Explore the cosmos"),b[2].t("Unlock mysteries"),b[2].t("Chart new frontiers"),b[2].t("Dive into knowledge"),b[2].t("Discover wonders"),b[2].t("Ignite curiosity"),b[2].t("Forge new paths"),b[2].t("Unravel secrets"),b[2].t("Pioneer insights"),b[2].t("Embark on adventures")]),v.$set(z),(!J||D&4)&&I!==(I=b[2].t("wherever you are")+"")&&P(U,I),(!J||D&4)&&j!==(j=b[2].t("Get started")+"")&&P(q,j)},i(b){J||(Z(a.$$.fragment,b),Z(v.$$.fragment,b),Z(F.$$.fragment,b),J=!0)},o(b){K(a.$$.fragment,b),K(v.$$.fragment,b),K(F.$$.fragment,b),J=!1},d(b){b&&m(e),he(a),he(v),he(F),x=!1,te()}}}function gt(i){let e,l,t=i[0]&&Se(i);return{c(){t&&t.c(),e=re()},l(r){t&&t.l(r),e=re()},m(r,a){t&&t.m(r,a),A(r,e,a),l=!0},p(r,[a]){r[0]?t?(t.p(r,a),a&1&&Z(t,1)):(t=Se(r),t.c(),Z(t,1),t.m(e.parentNode,e)):t&&(ge(),K(t,1,1,()=>{t=null}),be())},i(r){l||(Z(t),l=!0)},o(r){K(t),l=!1},d(r){r&&m(e),t&&t.d(r)}}}function bt(i,e,l){let t;const r=Le("i18n");ie(i,r,c=>l(2,t=c));let{show:a=!0}=e,{getStartedHandler:s=()=>{}}=e;const o=()=>{s()};return i.$$set=c=>{"show"in c&&l(0,a=c.show),"getStartedHandler"in c&&l(1,s=c.getStartedHandler)},[a,s,t,r,o]}class kt extends _e{constructor(e){super(),pe(this,e,bt,gt,ne,{show:0,getStartedHandler:1})}}function Be(i){let e,l=`<div class="flex space-x-2"><div class="self-center"><img crossorigin="anonymous" src="${me}/static/favicon.png" class="w-6 rounded-full" alt="logo"/></div></div>`,t,r,a,s,o,c;const p=[Et,wt],n=[];function f(h,d){var v,E;return(((v=h[7])==null?void 0:v.features.auth_trusted_header)??!1)||((E=h[7])==null?void 0:E.features.auth)===!1?0:1}return s=f(i),o=n[s]=p[s](i),{c(){e=k("div"),e.innerHTML=l,t=B(),r=k("div"),a=k("div"),o.c(),this.h()},l(h){e=w(h,"DIV",{class:!0,"data-svelte-h":!0}),Ye(e)!=="svelte-xyh0ou"&&(e.innerHTML=l),t=V(h),r=w(h,"DIV",{class:!0});var d=g(r);a=w(d,"DIV",{class:!0});var v=g(a);o.l(v),v.forEach(m),d.forEach(m),this.h()},h(){u(e,"class","fixed m-10 z-50"),u(a,"class","w-full sm:max-w-md px-10 min-h-screen flex flex-col text-center"),u(r,"class","fixed bg-transparent min-h-screen w-full flex justify-center font-primary z-50 text-black dark:text-white")},m(h,d){A(h,e,d),A(h,t,d),A(h,r,d),_(r,a),n[s].m(a,null),c=!0},p(h,d){let v=s;s=f(h),s===v?n[s].p(h,d):(ge(),K(n[v],1,1,()=>{n[v]=null}),be(),o=n[s],o?o.p(h,d):(o=n[s]=p[s](h),o.c()),Z(o,1),o.m(a,null))},i(h){c||(Z(o),c=!0)},o(h){K(o),c=!1},d(h){h&&(m(e),m(t),m(r)),n[s].d()}}}function wt(i){var O,F,X,S,j,q,J,x,te;let e,l,t,r,a,s,o,c,p,n=Object.keys(((F=(O=i[7])==null?void 0:O.oauth)==null?void 0:F.providers)??{}).length>0,f,h,d;function v(b,D){var z;return((z=b[7])==null?void 0:z.onboarding)??!1?Ut:b[1]==="ldap"?Nt:b[1]==="signin"?It:yt}let E=v(i),y=E(i),I=(((X=i[7])==null?void 0:X.onboarding)??!1)&&Ve(i),U=(((S=i[7])==null?void 0:S.features.enable_login_form)||((j=i[7])==null?void 0:j.features.enable_ldap))&&Me(i),C=(((q=i[7])==null?void 0:q.features.enable_login_form)||((J=i[7])==null?void 0:J.features.enable_ldap))&&We(i),M=n&&Te(i),W=((x=i[7])==null?void 0:x.features.enable_ldap)&&((te=i[7])==null?void 0:te.features.enable_login_form)&&qe(i);return{c(){e=k("div"),l=k("form"),t=k("div"),r=k("div"),y.c(),a=B(),I&&I.c(),s=B(),U&&U.c(),o=B(),c=k("div"),C&&C.c(),p=B(),M&&M.c(),f=B(),W&&W.c(),this.h()},l(b){e=w(b,"DIV",{class:!0});var D=g(e);l=w(D,"FORM",{class:!0});var z=g(l);t=w(z,"DIV",{class:!0});var Y=g(t);r=w(Y,"DIV",{class:!0});var N=g(r);y.l(N),N.forEach(m),a=V(Y),I&&I.l(Y),Y.forEach(m),s=V(z),U&&U.l(z),o=V(z),c=w(z,"DIV",{class:!0});var L=g(c);C&&C.l(L),L.forEach(m),z.forEach(m),p=V(D),M&&M.l(D),f=V(D),W&&W.l(D),D.forEach(m),this.h()},h(){u(r,"class","text-2xl font-medium"),u(t,"class","mb-1"),u(c,"class","mt-5"),u(l,"class","flex flex-col justify-center"),u(e,"class","my-auto pb-10 w-full dark:text-gray-100")},m(b,D){A(b,e,D),_(e,l),_(l,t),_(t,r),y.m(r,null),_(t,a),I&&I.m(t,null),_(l,s),U&&U.m(l,null),_(l,o),_(l,c),C&&C.m(c,null),_(e,p),M&&M.m(e,null),_(e,f),W&&W.m(e,null),h||(d=$(l,"submit",i[19]),h=!0)},p(b,D){var z,Y,N,L,Q,ee,ae,oe,we;E===(E=v(b))&&y?y.p(b,D):(y.d(1),y=E(b),y&&(y.c(),y.m(r,null))),((z=b[7])==null?void 0:z.onboarding)??!1?I?I.p(b,D):(I=Ve(b),I.c(),I.m(t,null)):I&&(I.d(1),I=null),(Y=b[7])!=null&&Y.features.enable_login_form||(N=b[7])!=null&&N.features.enable_ldap?U?U.p(b,D):(U=Me(b),U.c(),U.m(l,o)):U&&(U.d(1),U=null),(L=b[7])!=null&&L.features.enable_login_form||(Q=b[7])!=null&&Q.features.enable_ldap?C?C.p(b,D):(C=We(b),C.c(),C.m(c,null)):C&&(C.d(1),C=null),D[0]&128&&(n=Object.keys(((ae=(ee=b[7])==null?void 0:ee.oauth)==null?void 0:ae.providers)??{}).length>0),n?M?M.p(b,D):(M=Te(b),M.c(),M.m(e,f)):M&&(M.d(1),M=null),(oe=b[7])!=null&&oe.features.enable_ldap&&((we=b[7])!=null&&we.features.enable_login_form)?W?W.p(b,D):(W=qe(b),W.c(),W.m(e,null)):W&&(W.d(1),W=null)},i:le,o:le,d(b){b&&m(e),y.d(),I&&I.d(),U&&U.d(),C&&C.d(),M&&M.d(),W&&W.d(),h=!1,d()}}}function Et(i){let e,l,t,r=i[8].t("Signing in to {{WEBUI_NAME}}",{WEBUI_NAME:i[9]})+"",a,s,o,c,p;return c=new at({}),{c(){e=k("div"),l=k("div"),t=k("div"),a=T(r),s=B(),o=k("div"),fe(c.$$.fragment),this.h()},l(n){e=w(n,"DIV",{class:!0});var f=g(e);l=w(f,"DIV",{class:!0});var h=g(l);t=w(h,"DIV",{});var d=g(t);a=H(d,r),d.forEach(m),s=V(h),o=w(h,"DIV",{});var v=g(o);de(c.$$.fragment,v),v.forEach(m),h.forEach(m),f.forEach(m),this.h()},h(){u(l,"class","flex items-center justify-center gap-3 text-xl sm:text-2xl text-center font-semibold dark:text-gray-200"),u(e,"class","my-auto pb-10 w-full")},m(n,f){A(n,e,f),_(e,l),_(l,t),_(t,a),_(l,s),_(l,o),ce(c,o,null),p=!0},p(n,f){(!p||f[0]&768)&&r!==(r=n[8].t("Signing in to {{WEBUI_NAME}}",{WEBUI_NAME:n[9]})+"")&&P(a,r)},i(n){p||(Z(c.$$.fragment,n),p=!0)},o(n){K(c.$$.fragment,n),p=!1},d(n){n&&m(e),he(c)}}}function yt(i){let e=i[8].t("Sign up to {{WEBUI_NAME}}",{WEBUI_NAME:i[9]})+"",l;return{c(){l=T(e)},l(t){l=H(t,e)},m(t,r){A(t,l,r)},p(t,r){r[0]&768&&e!==(e=t[8].t("Sign up to {{WEBUI_NAME}}",{WEBUI_NAME:t[9]})+"")&&P(l,e)},d(t){t&&m(l)}}}function It(i){let e=i[8].t("Sign in to {{WEBUI_NAME}}",{WEBUI_NAME:i[9]})+"",l;return{c(){l=T(e)},l(t){l=H(t,e)},m(t,r){A(t,l,r)},p(t,r){r[0]&768&&e!==(e=t[8].t("Sign in to {{WEBUI_NAME}}",{WEBUI_NAME:t[9]})+"")&&P(l,e)},d(t){t&&m(l)}}}function Nt(i){let e=i[8].t("Sign in to {{WEBUI_NAME}} with LDAP",{WEBUI_NAME:i[9]})+"",l;return{c(){l=T(e)},l(t){l=H(t,e)},m(t,r){A(t,l,r)},p(t,r){r[0]&768&&e!==(e=t[8].t("Sign in to {{WEBUI_NAME}} with LDAP",{WEBUI_NAME:t[9]})+"")&&P(l,e)},d(t){t&&m(l)}}}function Ut(i){let e=i[8].t("Get started with {{WEBUI_NAME}}",{WEBUI_NAME:i[9]})+"",l;return{c(){l=T(e)},l(t){l=H(t,e)},m(t,r){A(t,l,r)},p(t,r){r[0]&768&&e!==(e=t[8].t("Get started with {{WEBUI_NAME}}",{WEBUI_NAME:t[9]})+"")&&P(l,e)},d(t){t&&m(l)}}}function Ve(i){let e,l,t,r,a=i[8].t("does not make any external connections, and your data stays securely on your locally hosted server.")+"",s;return{c(){e=k("div"),l=T("ⓘ "),t=T(i[9]),r=B(),s=T(a),this.h()},l(o){e=w(o,"DIV",{class:!0});var c=g(e);l=H(c,"ⓘ "),t=H(c,i[9]),r=V(c),s=H(c,a),c.forEach(m),this.h()},h(){u(e,"class","mt-1 text-xs font-medium text-gray-500")},m(o,c){A(o,e,c),_(e,l),_(e,t),_(e,r),_(e,s)},p(o,c){c[0]&512&&P(t,o[9]),c[0]&256&&a!==(a=o[8].t("does not make any external connections, and your data stays securely on your locally hosted server.")+"")&&P(s,a)},d(o){o&&m(e)}}}function Me(i){let e,l,t,r,a,s=i[8].t("Password")+"",o,c,p,n,f,h,d=i[1]==="signup"&&Ce(i);function v(I,U){return I[1]==="ldap"?At:Dt}let E=v(i),y=E(i);return{c(){e=k("div"),d&&d.c(),l=B(),y.c(),t=B(),r=k("div"),a=k("div"),o=T(s),c=B(),p=k("input"),this.h()},l(I){e=w(I,"DIV",{class:!0});var U=g(e);d&&d.l(U),l=V(U),y.l(U),t=V(U),r=w(U,"DIV",{});var C=g(r);a=w(C,"DIV",{class:!0});var M=g(a);o=H(M,s),M.forEach(m),c=V(C),p=w(C,"INPUT",{type:!0,class:!0,placeholder:!0,autocomplete:!0,name:!0}),C.forEach(m),U.forEach(m),this.h()},h(){u(a,"class","text-sm font-medium text-left mb-1"),u(p,"type","password"),u(p,"class","my-0.5 w-full text-sm outline-none bg-transparent"),u(p,"placeholder",n=i[8].t("Enter Your Password")),u(p,"autocomplete","current-password"),u(p,"name","current-password"),p.required=!0,u(e,"class","flex flex-col mt-4")},m(I,U){A(I,e,U),d&&d.m(e,null),_(e,l),y.m(e,null),_(e,t),_(e,r),_(r,a),_(a,o),_(r,c),_(r,p),se(p,i[4]),f||(h=$(p,"input",i[17]),f=!0)},p(I,U){I[1]==="signup"?d?d.p(I,U):(d=Ce(I),d.c(),d.m(e,l)):d&&(d.d(1),d=null),E===(E=v(I))&&y?y.p(I,U):(y.d(1),y=E(I),y&&(y.c(),y.m(e,t))),U[0]&256&&s!==(s=I[8].t("Password")+"")&&P(o,s),U[0]&256&&n!==(n=I[8].t("Enter Your Password"))&&u(p,"placeholder",n),U[0]&16&&p.value!==I[4]&&se(p,I[4])},d(I){I&&m(e),d&&d.d(),y.d(),f=!1,h()}}}function Ce(i){let e,l,t=i[8].t("Name")+"",r,a,s,o,c,p;return{c(){e=k("div"),l=k("div"),r=T(t),a=B(),s=k("input"),this.h()},l(n){e=w(n,"DIV",{class:!0});var f=g(e);l=w(f,"DIV",{class:!0});var h=g(l);r=H(h,t),h.forEach(m),a=V(f),s=w(f,"INPUT",{type:!0,class:!0,autocomplete:!0,placeholder:!0}),f.forEach(m),this.h()},h(){u(l,"class","text-sm font-medium text-left mb-1"),u(s,"type","text"),u(s,"class","my-0.5 w-full text-sm outline-none bg-transparent"),u(s,"autocomplete","name"),u(s,"placeholder",o=i[8].t("Enter Your Full Name")),s.required=!0,u(e,"class","mb-2")},m(n,f){A(n,e,f),_(e,l),_(l,r),_(e,a),_(e,s),se(s,i[2]),c||(p=$(s,"input",i[14]),c=!0)},p(n,f){f[0]&256&&t!==(t=n[8].t("Name")+"")&&P(r,t),f[0]&256&&o!==(o=n[8].t("Enter Your Full Name"))&&u(s,"placeholder",o),f[0]&4&&s.value!==n[2]&&se(s,n[2])},d(n){n&&m(e),c=!1,p()}}}function Dt(i){let e,l,t=i[8].t("Email")+"",r,a,s,o,c,p;return{c(){e=k("div"),l=k("div"),r=T(t),a=B(),s=k("input"),this.h()},l(n){e=w(n,"DIV",{class:!0});var f=g(e);l=w(f,"DIV",{class:!0});var h=g(l);r=H(h,t),h.forEach(m),a=V(f),s=w(f,"INPUT",{type:!0,class:!0,autocomplete:!0,name:!0,placeholder:!0}),f.forEach(m),this.h()},h(){u(l,"class","text-sm font-medium text-left mb-1"),u(s,"type","email"),u(s,"class","my-0.5 w-full text-sm outline-none bg-transparent"),u(s,"autocomplete","email"),u(s,"name","email"),u(s,"placeholder",o=i[8].t("Enter Your Email")),s.required=!0,u(e,"class","mb-2")},m(n,f){A(n,e,f),_(e,l),_(l,r),_(e,a),_(e,s),se(s,i[3]),c||(p=$(s,"input",i[16]),c=!0)},p(n,f){f[0]&256&&t!==(t=n[8].t("Email")+"")&&P(r,t),f[0]&256&&o!==(o=n[8].t("Enter Your Email"))&&u(s,"placeholder",o),f[0]&8&&s.value!==n[3]&&se(s,n[3])},d(n){n&&m(e),c=!1,p()}}}function At(i){let e,l,t=i[8].t("Username")+"",r,a,s,o,c,p;return{c(){e=k("div"),l=k("div"),r=T(t),a=B(),s=k("input"),this.h()},l(n){e=w(n,"DIV",{class:!0});var f=g(e);l=w(f,"DIV",{class:!0});var h=g(l);r=H(h,t),h.forEach(m),a=V(f),s=w(f,"INPUT",{type:!0,class:!0,autocomplete:!0,name:!0,placeholder:!0}),f.forEach(m),this.h()},h(){u(l,"class","text-sm font-medium text-left mb-1"),u(s,"type","text"),u(s,"class","my-0.5 w-full text-sm outline-none bg-transparent"),u(s,"autocomplete","username"),u(s,"name","username"),u(s,"placeholder",o=i[8].t("Enter Your Username")),s.required=!0,u(e,"class","mb-2")},m(n,f){A(n,e,f),_(e,l),_(l,r),_(e,a),_(e,s),se(s,i[5]),c||(p=$(s,"input",i[15]),c=!0)},p(n,f){f[0]&256&&t!==(t=n[8].t("Username")+"")&&P(r,t),f[0]&256&&o!==(o=n[8].t("Enter Your Username"))&&u(s,"placeholder",o),f[0]&32&&s.value!==n[5]&&se(s,n[5])},d(n){n&&m(e),c=!1,p()}}}function We(i){let e;function l(a,s){return a[1]==="ldap"?Bt:St}let t=l(i),r=t(i);return{c(){r.c(),e=re()},l(a){r.l(a),e=re()},m(a,s){r.m(a,s),A(a,e,s)},p(a,s){t===(t=l(a))&&r?r.p(a,s):(r.d(1),r=t(a),r&&(r.c(),r.m(e.parentNode,e)))},d(a){a&&m(e),r.d(a)}}}function St(i){var o,c,p;let e,l=(i[1]==="signin"?i[8].t("Sign in"):((o=i[7])==null?void 0:o.onboarding)??!1?i[8].t("Create Admin Account"):i[8].t("Create Account"))+"",t,r,a,s=((c=i[7])==null?void 0:c.features.enable_signup)&&!(((p=i[7])==null?void 0:p.onboarding)??!1)&&je(i);return{c(){e=k("button"),t=T(l),r=B(),s&&s.c(),a=re(),this.h()},l(n){e=w(n,"BUTTON",{class:!0,type:!0});var f=g(e);t=H(f,l),f.forEach(m),r=V(n),s&&s.l(n),a=re(),this.h()},h(){u(e,"class","bg-gray-700/5 hover:bg-gray-700/10 dark:bg-gray-100/5 dark:hover:bg-gray-100/10 dark:text-gray-300 dark:hover:text-white transition w-full rounded-full font-medium text-sm py-2.5"),u(e,"type","submit")},m(n,f){A(n,e,f),_(e,t),A(n,r,f),s&&s.m(n,f),A(n,a,f)},p(n,f){var h,d,v;f[0]&386&&l!==(l=(n[1]==="signin"?n[8].t("Sign in"):((h=n[7])==null?void 0:h.onboarding)??!1?n[8].t("Create Admin Account"):n[8].t("Create Account"))+"")&&P(t,l),(d=n[7])!=null&&d.features.enable_signup&&!(((v=n[7])==null?void 0:v.onboarding)??!1)?s?s.p(n,f):(s=je(n),s.c(),s.m(a.parentNode,a)):s&&(s.d(1),s=null)},d(n){n&&(m(e),m(r),m(a)),s&&s.d(n)}}}function Bt(i){let e,l=i[8].t("Authenticate")+"",t;return{c(){e=k("button"),t=T(l),this.h()},l(r){e=w(r,"BUTTON",{class:!0,type:!0});var a=g(e);t=H(a,l),a.forEach(m),this.h()},h(){u(e,"class","bg-gray-700/5 hover:bg-gray-700/10 dark:bg-gray-100/5 dark:hover:bg-gray-100/10 dark:text-gray-300 dark:hover:text-white transition w-full rounded-full font-medium text-sm py-2.5"),u(e,"type","submit")},m(r,a){A(r,e,a),_(e,t)},p(r,a){a[0]&256&&l!==(l=r[8].t("Authenticate")+"")&&P(t,l)},d(r){r&&m(e)}}}function je(i){let e,l=(i[1]==="signin"?i[8].t("Don't have an account?"):i[8].t("Already have an account?"))+"",t,r,a,s=(i[1]==="signin"?i[8].t("Sign up"):i[8].t("Sign in"))+"",o,c,p;return{c(){e=k("div"),t=T(l),r=B(),a=k("button"),o=T(s),this.h()},l(n){e=w(n,"DIV",{class:!0});var f=g(e);t=H(f,l),r=V(f),a=w(f,"BUTTON",{class:!0,type:!0});var h=g(a);o=H(h,s),h.forEach(m),f.forEach(m),this.h()},h(){u(a,"class","font-medium underline"),u(a,"type","button"),u(e,"class","mt-4 text-sm text-center")},m(n,f){A(n,e,f),_(e,t),_(e,r),_(e,a),_(a,o),c||(p=$(a,"click",i[18]),c=!0)},p(n,f){f[0]&258&&l!==(l=(n[1]==="signin"?n[8].t("Don't have an account?"):n[8].t("Already have an account?"))+"")&&P(t,l),f[0]&258&&s!==(s=(n[1]==="signin"?n[8].t("Sign up"):n[8].t("Sign in"))+"")&&P(o,s)},d(n){n&&m(e),c=!1,p()}}}function Te(i){var v,E,y,I,U,C,M,W,O,F,X;let e,l,t,r,a,s,o,c,p,n=(((v=i[7])==null?void 0:v.features.enable_login_form)||((E=i[7])==null?void 0:E.features.enable_ldap))&&He(i),f=((U=(I=(y=i[7])==null?void 0:y.oauth)==null?void 0:I.providers)==null?void 0:U.google)&&Pe(i),h=((W=(M=(C=i[7])==null?void 0:C.oauth)==null?void 0:M.providers)==null?void 0:W.microsoft)&&ze(i),d=((X=(F=(O=i[7])==null?void 0:O.oauth)==null?void 0:F.providers)==null?void 0:X.oidc)&&Oe(i);return{c(){e=k("div"),l=k("hr"),t=B(),n&&n.c(),r=B(),a=k("hr"),s=B(),o=k("div"),f&&f.c(),c=B(),h&&h.c(),p=B(),d&&d.c(),this.h()},l(S){e=w(S,"DIV",{class:!0});var j=g(e);l=w(j,"HR",{class:!0}),t=V(j),n&&n.l(j),r=V(j),a=w(j,"HR",{class:!0}),j.forEach(m),s=V(S),o=w(S,"DIV",{class:!0});var q=g(o);f&&f.l(q),c=V(q),h&&h.l(q),p=V(q),d&&d.l(q),q.forEach(m),this.h()},h(){u(l,"class","w-32 h-px my-4 border-0 dark:bg-gray-100/10 bg-gray-700/10"),u(a,"class","w-32 h-px my-4 border-0 dark:bg-gray-100/10 bg-gray-700/10"),u(e,"class","inline-flex items-center justify-center w-full"),u(o,"class","flex flex-col space-y-2")},m(S,j){A(S,e,j),_(e,l),_(e,t),n&&n.m(e,null),_(e,r),_(e,a),A(S,s,j),A(S,o,j),f&&f.m(o,null),_(o,c),h&&h.m(o,null),_(o,p),d&&d.m(o,null)},p(S,j){var q,J,x,te,b,D,z,Y,N,L,Q;(q=S[7])!=null&&q.features.enable_login_form||(J=S[7])!=null&&J.features.enable_ldap?n?n.p(S,j):(n=He(S),n.c(),n.m(e,r)):n&&(n.d(1),n=null),(b=(te=(x=S[7])==null?void 0:x.oauth)==null?void 0:te.providers)!=null&&b.google?f?f.p(S,j):(f=Pe(S),f.c(),f.m(o,c)):f&&(f.d(1),f=null),(Y=(z=(D=S[7])==null?void 0:D.oauth)==null?void 0:z.providers)!=null&&Y.microsoft?h?h.p(S,j):(h=ze(S),h.c(),h.m(o,p)):h&&(h.d(1),h=null),(Q=(L=(N=S[7])==null?void 0:N.oauth)==null?void 0:L.providers)!=null&&Q.oidc?d?d.p(S,j):(d=Oe(S),d.c(),d.m(o,null)):d&&(d.d(1),d=null)},d(S){S&&(m(e),m(s),m(o)),n&&n.d(),f&&f.d(),h&&h.d(),d&&d.d()}}}function He(i){let e,l=i[8].t("or")+"",t;return{c(){e=k("span"),t=T(l),this.h()},l(r){e=w(r,"SPAN",{class:!0});var a=g(e);t=H(a,l),a.forEach(m),this.h()},h(){u(e,"class","px-3 text-sm font-medium text-gray-900 dark:text-white bg-transparent")},m(r,a){A(r,e,a),_(e,t)},p(r,a){a[0]&256&&l!==(l=r[8].t("or")+"")&&P(t,l)},d(r){r&&m(e)}}}function Pe(i){let e,l,t,r,a,s,o,c,p,n=i[8].t("Continue with {{provider}}",{provider:"Google"})+"",f,h,d;return{c(){e=k("button"),l=G("svg"),t=G("path"),r=G("path"),a=G("path"),s=G("path"),o=G("path"),c=B(),p=k("span"),f=T(n),this.h()},l(v){e=w(v,"BUTTON",{class:!0});var E=g(e);l=R(E,"svg",{xmlns:!0,viewBox:!0,class:!0});var y=g(l);t=R(y,"path",{fill:!0,d:!0}),g(t).forEach(m),r=R(y,"path",{fill:!0,d:!0}),g(r).forEach(m),a=R(y,"path",{fill:!0,d:!0}),g(a).forEach(m),s=R(y,"path",{fill:!0,d:!0}),g(s).forEach(m),o=R(y,"path",{fill:!0,d:!0}),g(o).forEach(m),y.forEach(m),c=V(E),p=w(E,"SPAN",{});var I=g(p);f=H(I,n),I.forEach(m),E.forEach(m),this.h()},h(){u(t,"fill","#EA4335"),u(t,"d","M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"),u(r,"fill","#4285F4"),u(r,"d","M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"),u(a,"fill","#FBBC05"),u(a,"d","M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"),u(s,"fill","#34A853"),u(s,"d","M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"),u(o,"fill","none"),u(o,"d","M0 0h48v48H0z"),u(l,"xmlns","http://www.w3.org/2000/svg"),u(l,"viewBox","0 0 48 48"),u(l,"class","size-6 mr-3"),u(e,"class","flex justify-center items-center bg-gray-700/5 hover:bg-gray-700/10 dark:bg-gray-100/5 dark:hover:bg-gray-100/10 dark:text-gray-300 dark:hover:text-white transition w-full rounded-full font-medium text-sm py-2.5")},m(v,E){A(v,e,E),_(e,l),_(l,t),_(l,r),_(l,a),_(l,s),_(l,o),_(e,c),_(e,p),_(p,f),h||(d=$(e,"click",i[20]),h=!0)},p(v,E){E[0]&256&&n!==(n=v[8].t("Continue with {{provider}}",{provider:"Google"})+"")&&P(f,n)},d(v){v&&m(e),h=!1,d()}}}function ze(i){let e,l,t,r,a,s,o,c,p=i[8].t("Continue with {{provider}}",{provider:"Microsoft"})+"",n,f,h;return{c(){e=k("button"),l=G("svg"),t=G("rect"),r=G("rect"),a=G("rect"),s=G("rect"),o=B(),c=k("span"),n=T(p),this.h()},l(d){e=w(d,"BUTTON",{class:!0});var v=g(e);l=R(v,"svg",{xmlns:!0,viewBox:!0,class:!0});var E=g(l);t=R(E,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0}),g(t).forEach(m),r=R(E,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0}),g(r).forEach(m),a=R(E,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0}),g(a).forEach(m),s=R(E,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0}),g(s).forEach(m),E.forEach(m),o=V(v),c=w(v,"SPAN",{});var y=g(c);n=H(y,p),y.forEach(m),v.forEach(m),this.h()},h(){u(t,"x","1"),u(t,"y","1"),u(t,"width","9"),u(t,"height","9"),u(t,"fill","#f25022"),u(r,"x","1"),u(r,"y","11"),u(r,"width","9"),u(r,"height","9"),u(r,"fill","#00a4ef"),u(a,"x","11"),u(a,"y","1"),u(a,"width","9"),u(a,"height","9"),u(a,"fill","#7fba00"),u(s,"x","11"),u(s,"y","11"),u(s,"width","9"),u(s,"height","9"),u(s,"fill","#ffb900"),u(l,"xmlns","http://www.w3.org/2000/svg"),u(l,"viewBox","0 0 21 21"),u(l,"class","size-6 mr-3"),u(e,"class","flex justify-center items-center bg-gray-700/5 hover:bg-gray-700/10 dark:bg-gray-100/5 dark:hover:bg-gray-100/10 dark:text-gray-300 dark:hover:text-white transition w-full rounded-full font-medium text-sm py-2.5")},m(d,v){A(d,e,v),_(e,l),_(l,t),_(l,r),_(l,a),_(l,s),_(e,o),_(e,c),_(c,n),f||(h=$(e,"click",i[21]),f=!0)},p(d,v){v[0]&256&&p!==(p=d[8].t("Continue with {{provider}}",{provider:"Microsoft"})+"")&&P(n,p)},d(d){d&&m(e),f=!1,h()}}}function Oe(i){var n,f,h;let e,l,t,r,a,s=i[8].t("Continue with {{provider}}",{provider:((h=(f=(n=i[7])==null?void 0:n.oauth)==null?void 0:f.providers)==null?void 0:h.oidc)??"SSO"})+"",o,c,p;return{c(){e=k("button"),l=G("svg"),t=G("path"),r=B(),a=k("span"),o=T(s),this.h()},l(d){e=w(d,"BUTTON",{class:!0});var v=g(e);l=R(v,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var E=g(l);t=R(E,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),g(t).forEach(m),E.forEach(m),r=V(v),a=w(v,"SPAN",{});var y=g(a);o=H(y,s),y.forEach(m),v.forEach(m),this.h()},h(){u(t,"stroke-linecap","round"),u(t,"stroke-linejoin","round"),u(t,"d","M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"),u(l,"xmlns","http://www.w3.org/2000/svg"),u(l,"fill","none"),u(l,"viewBox","0 0 24 24"),u(l,"stroke-width","1.5"),u(l,"stroke","currentColor"),u(l,"class","size-6 mr-3"),u(e,"class","flex justify-center items-center bg-gray-700/5 hover:bg-gray-700/10 dark:bg-gray-100/5 dark:hover:bg-gray-100/10 dark:text-gray-300 dark:hover:text-white transition w-full rounded-full font-medium text-sm py-2.5")},m(d,v){A(d,e,v),_(e,l),_(l,t),_(e,r),_(e,a),_(a,o),c||(p=$(e,"click",i[22]),c=!0)},p(d,v){var E,y,I;v[0]&384&&s!==(s=d[8].t("Continue with {{provider}}",{provider:((I=(y=(E=d[7])==null?void 0:E.oauth)==null?void 0:y.providers)==null?void 0:I.oidc)??"SSO"})+"")&&P(o,s)},d(d){d&&m(e),c=!1,p()}}}function qe(i){let e,l,t,r=(i[1]==="ldap"?i[8].t("Continue with Email"):i[8].t("Continue with LDAP"))+"",a,s,o;return{c(){e=k("div"),l=k("button"),t=k("span"),a=T(r),this.h()},l(c){e=w(c,"DIV",{class:!0});var p=g(e);l=w(p,"BUTTON",{class:!0,type:!0});var n=g(l);t=w(n,"SPAN",{});var f=g(t);a=H(f,r),f.forEach(m),n.forEach(m),p.forEach(m),this.h()},h(){u(l,"class","flex justify-center items-center text-xs w-full text-center underline"),u(l,"type","button"),u(e,"class","mt-2")},m(c,p){A(c,e,p),_(e,l),_(l,t),_(t,a),s||(o=$(l,"click",i[23]),s=!0)},p(c,p){p[0]&258&&r!==(r=(c[1]==="ldap"?c[8].t("Continue with Email"):c[8].t("Continue with LDAP"))+"")&&P(a,r)},d(c){c&&m(e),s=!1,o()}}}function Vt(i){let e,l,t,r,a,s,o,c,p;document.title=e=`
		${i[9]}
	`;function n(d){i[13](d)}let f={getStartedHandler:i[12]};i[6]!==void 0&&(f.show=i[6]),t=new kt({props:f}),Ge.push(()=>Ke(t,"show",n));let h=i[0]&&Be(i);return{c(){l=B(),fe(t.$$.fragment),a=B(),s=k("div"),o=k("div"),c=B(),h&&h.c(),this.h()},l(d){Re("svelte-sdpf07",document.head).forEach(m),l=V(d),de(t.$$.fragment,d),a=V(d),s=w(d,"DIV",{class:!0});var E=g(s);o=w(E,"DIV",{class:!0}),g(o).forEach(m),c=V(E),h&&h.l(E),E.forEach(m),this.h()},h(){u(o,"class","w-full h-full absolute top-0 left-0 bg-white dark:bg-black"),u(s,"class","w-full h-screen max-h-[100dvh] text-white relative")},m(d,v){A(d,l,v),ce(t,d,v),A(d,a,v),A(d,s,v),_(s,o),_(s,c),h&&h.m(s,null),p=!0},p(d,v){(!p||v[0]&512)&&e!==(e=`
		${d[9]}
	`)&&(document.title=e);const E={};v[0]&194&&(E.getStartedHandler=d[12]),!r&&v[0]&64&&(r=!0,E.show=d[6],Ze(()=>r=!1)),t.$set(E),d[0]?h?(h.p(d,v),v[0]&1&&Z(h,1)):(h=Be(d),h.c(),Z(h,1),h.m(s,null)):h&&(ge(),K(h,1,1,()=>{h=null}),be())},i(d){p||(Z(t.$$.fragment,d),Z(h),p=!0)},o(d){K(t.$$.fragment,d),K(h),p=!1},d(d){d&&(m(l),m(a),m(s)),he(t,d),h&&h.d()}}}function Mt(i,e,l){let t,r,a,s,o,c;ie(i,ye,N=>l(7,t=N)),ie(i,Ie,N=>l(24,r=N)),ie(i,Qe,N=>l(25,a=N)),ie(i,lt,N=>l(26,s=N)),ie(i,rt,N=>l(9,c=N));const p=Le("i18n");ie(i,p,N=>l(8,o=N));let n=!1,f=t!=null&&t.features.enable_ldap?"ldap":"signin",h="",d="",v="",E="";const y=async N=>{N&&(console.log(N),ue.success(o.t("You're now logged in.")),N.token&&(localStorage.token=N.token),s.emit("user-join",{auth:{token:N.token}}),await Ie.set(N),await ye.set(await Xe()),Ee("/"))},I=async()=>{const N=await $e(d,v).catch(L=>(ue.error(L),null));await y(N)},U=async()=>{const N=await xe(h,d,v,st(h)).catch(L=>(ue.error(L),null));await y(N)},C=async()=>{const N=await et(E,v).catch(L=>(ue.error(L),null));await y(N)},M=async()=>{f==="ldap"?await C():f==="signin"?await I():await U()},W=async()=>{if(!a.url.hash)return;const N=a.url.hash.substring(1);if(!N)return;const Q=new URLSearchParams(N).get("token");if(!Q)return;const ee=await tt(Q).catch(ae=>(ue.error(ae),null));ee&&(localStorage.token=Q,await y(ee))};let O=!1;ke(async()=>{r!==void 0&&await Ee("/"),await W(),l(0,n=!0),((t==null?void 0:t.features.auth_trusted_header)??!1)||(t==null?void 0:t.features.auth)===!1?await I():l(6,O=(t==null?void 0:t.onboarding)??!1)});const F=()=>{l(6,O=!1),l(1,f=t!=null&&t.features.enable_ldap?"ldap":"signup")};function X(N){O=N,l(6,O)}function S(){h=this.value,l(2,h)}function j(){E=this.value,l(5,E)}function q(){d=this.value,l(3,d)}function J(){v=this.value,l(4,v)}return[n,f,h,d,v,E,O,t,o,c,p,M,F,X,S,j,q,J,()=>{f==="signin"?l(1,f="signup"):l(1,f="signin")},N=>{N.preventDefault(),M()},()=>{window.location.href=`${me}/oauth/google/login`},()=>{window.location.href=`${me}/oauth/microsoft/login`},()=>{window.location.href=`${me}/oauth/oidc/login`},()=>{f==="ldap"?l(1,f=(t==null?void 0:t.onboarding)??!1?"signup":"signin"):l(1,f="ldap")}]}class Gt extends _e{constructor(e){super(),pe(this,e,Mt,Vt,ne,{},null,[-1,-1])}}export{Gt as component};
//# sourceMappingURL=32.CapcU0XP.js.map