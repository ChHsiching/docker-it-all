import{s as M,l as b,i as D,d as _,q as z,N as S,r as j,e as g,c as p,a as k,f as y,g as I,u as E,v as L,w as T,x as V,O as N,H as A,y as B}from"./scheduler.CvZYoJ9P.js";import{S as H,i as K,t as w,g as O,a as v,c as P,j as C}from"./index.C1N8d1hw.js";import{f as W}from"./index.Cudv6G18.js";import{f as F}from"./index.DyIcjikr.js";function q(n){let s,l,e,a,i,d,m,f;const c=n[6].default,r=j(c,n,n[5],null);return{c(){s=g("div"),l=g("div"),r&&r.c(),this.h()},l(o){s=p(o,"DIV",{class:!0});var u=k(s);l=p(u,"DIV",{class:!0});var h=k(l);r&&r.l(h),h.forEach(_),u.forEach(_),this.h()},h(){y(l,"class",e="m-auto max-w-full "+n[4](n[1])+" "+(n[1]!=="full"?"mx-2":"")+" shadow-3xl max-h-[100dvh] overflow-y-auto scrollbar-hidden "+n[2]+" svelte-fq1rhy"),y(s,"class","modal fixed top-0 right-0 left-0 bottom-0 bg-black/60 w-full h-screen max-h-[100dvh] flex justify-center z-[9999] overflow-hidden overscroll-contain")},m(o,u){D(o,s,u),I(s,l),r&&r.m(l,null),n[7](s),d=!0,m||(f=[E(l,"mousedown",J),E(s,"mousedown",n[8])],m=!0)},p(o,u){r&&r.p&&(!d||u&32)&&L(r,c,o,o[5],d?V(c,o[5],u,null):T(o[5]),null),(!d||u&6&&e!==(e="m-auto max-w-full "+o[4](o[1])+" "+(o[1]!=="full"?"mx-2":"")+" shadow-3xl max-h-[100dvh] overflow-y-auto scrollbar-hidden "+o[2]+" svelte-fq1rhy"))&&y(l,"class",e)},i(o){d||(w(r,o),o&&(a||N(()=>{a=C(l,F,{}),a.start()})),o&&(i||N(()=>{i=C(s,W,{duration:10}),i.start()})),d=!0)},o(o){v(r,o),d=!1},d(o){o&&_(s),r&&r.d(o),n[7](null),m=!1,A(f)}}}function G(n){let s,l,e=n[0]&&q(n);return{c(){e&&e.c(),s=b()},l(a){e&&e.l(a),s=b()},m(a,i){e&&e.m(a,i),D(a,s,i),l=!0},p(a,[i]){a[0]?e?(e.p(a,i),i&1&&w(e,1)):(e=q(a),e.c(),w(e,1),e.m(s.parentNode,s)):e&&(O(),v(e,1,1,()=>{e=null}),P())},i(a){l||(w(e),l=!0)},o(a){v(e),l=!1},d(a){a&&_(s),e&&e.d(a)}}}const J=n=>{n.stopPropagation()};function Q(n,s,l){let{$$slots:e={},$$scope:a}=s,{show:i=!0}=s,{size:d="md"}=s,{className:m="bg-gray-50 dark:bg-gray-900  rounded-2xl"}=s,f=null;const c=t=>t==="full"?"w-full":t==="xs"?"w-[16rem]":t==="sm"?"w-[30rem]":t==="md"?"w-[42rem]":"w-[56rem]",r=t=>{t.key==="Escape"&&o()&&(console.log("Escape"),l(0,i=!1))},o=()=>{const t=document.getElementsByClassName("modal");return t.length&&t[t.length-1]===f};z(()=>{}),S(()=>{l(0,i=!1),f&&document.body.removeChild(f)});function u(t){B[t?"unshift":"push"](()=>{f=t,l(3,f)})}const h=()=>{l(0,i=!1)};return n.$$set=t=>{"show"in t&&l(0,i=t.show),"size"in t&&l(1,d=t.size),"className"in t&&l(2,m=t.className),"$$scope"in t&&l(5,a=t.$$scope)},n.$$.update=()=>{n.$$.dirty&9&&(i&&f?(document.body.appendChild(f),window.addEventListener("keydown",r),document.body.style.overflow="hidden"):f&&(window.removeEventListener("keydown",r),document.body.removeChild(f),document.body.style.overflow="unset"))},[i,d,m,f,c,a,e,u,h]}class Z extends H{constructor(s){super(),K(this,s,Q,G,M,{show:0,size:1,className:2})}}export{Z as M};
//# sourceMappingURL=Modal.DHNRbNDK.js.map
