import{s as $,y as ee,e as _,k as G,c as v,a as g,d as u,o as K,f as c,i as H,g as f,C as Q,u as q,A as fe,j as U,p as pe,q as me,t as te,b as le,h as se,n as he}from"../chunks/scheduler.CvZYoJ9P.js";import{S as ae,i as oe,f as _e,b as re,d as ne,m as ie,t as ce,a as ue,e as de}from"../chunks/index.C1N8d1hw.js";import"../chunks/Toaster.svelte_svelte_type_style_lang.ChidyyUD.js";import{g as ve}from"../chunks/entry.BsJDnQad.js";import{e as ge,h as be,u as xe,m as we,d as ke}from"../chunks/index.Dh8PXriy.js";import{g as Ee}from"../chunks/index.CR8c5aJv.js";import{s as ye}from"../chunks/index.C-Yl_4Dq.js";import{S as Ie}from"../chunks/Selector.DA3wAJBu.js";function De(s){let e,t=s[5].t("Cancel")+"",l,r,d;return{c(){e=_("button"),l=te(t),this.h()},l(a){e=v(a,"BUTTON",{class:!0});var i=g(e);l=le(i,t),i.forEach(u),this.h()},h(){c(e,"class","px-3 py-1.5 text-sm font-medium bg-gray-300 text-black transition rounded-full")},m(a,i){H(a,e,i),f(e,l),r||(d=q(e,"click",s[13]),r=!0)},p(a,i){i&32&&t!==(t=a[5].t("Cancel")+"")&&se(l,t)},d(a){a&&u(e),r=!1,d()}}}function Se(s){let e,t=s[5].t("Run")+"",l,r,d;return{c(){e=_("button"),l=te(t),this.h()},l(a){e=v(a,"BUTTON",{class:!0});var i=g(e);l=le(i,t),i.forEach(u),this.h()},h(){c(e,"class","px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full")},m(a,i){H(a,e,i),f(e,l),r||(d=q(e,"click",s[12]),r=!0)},p(a,i){i&32&&t!==(t=a[5].t("Run")+"")&&se(l,t)},d(a){a&&u(e),r=!1,d()}}}function Ve(s){let e,t,l,r,d,a,i,I,p,x,V,w,k,S,m,C,R,D,T,B,N;function M(n){s[9](n)}let o={placeholder:s[5].t("Select a model"),items:s[4].map(Z)};s[1]!==void 0&&(o.value=s[1]),p=new Ie({props:o}),ee.push(()=>_e(p,"value",M));function A(n,b){return n[2]?De:Se}let j=A(s),h=j(s);return{c(){e=_("div"),t=_("div"),l=_("div"),r=_("div"),d=_("div"),a=_("div"),i=_("div"),I=_("div"),re(p.$$.fragment),V=G(),w=_("div"),k=_("div"),S=_("div"),m=_("textarea"),R=G(),D=_("div"),h.c(),this.h()},l(n){e=v(n,"DIV",{class:!0});var b=g(e);t=v(b,"DIV",{class:!0});var E=g(t);l=v(E,"DIV",{class:!0});var y=g(l);r=v(y,"DIV",{class:!0});var O=g(r);d=v(O,"DIV",{class:!0});var Y=g(d);a=v(Y,"DIV",{class:!0});var z=g(a);i=v(z,"DIV",{class:!0});var F=g(i);I=v(F,"DIV",{class:!0});var J=g(I);ne(p.$$.fragment,J),J.forEach(u),F.forEach(u),z.forEach(u),Y.forEach(u),O.forEach(u),V=K(y),w=v(y,"DIV",{class:!0,id:!0});var L=g(w);k=v(L,"DIV",{class:!0});var P=g(k);S=v(P,"DIV",{class:!0});var W=g(S);m=v(W,"TEXTAREA",{id:!0,class:!0,placeholder:!0}),g(m).forEach(u),W.forEach(u),P.forEach(u),L.forEach(u),R=K(y),D=v(y,"DIV",{class:!0});var X=g(D);h.l(X),X.forEach(u),y.forEach(u),E.forEach(u),b.forEach(u),this.h()},h(){c(I,"class","max-w-full"),c(i,"class","overflow-hidden w-full"),c(a,"class","flex w-full"),c(d,"class","flex flex-col gap-1 w-full"),c(r,"class","flex flex-col justify-between mb-1 gap-1"),c(m,"id","text-completion-textarea"),c(m,"class","w-full h-full p-3 bg-transparent border border-gray-50 dark:border-gray-850 outline-none resize-none rounded-lg text-sm"),c(m,"placeholder",C=s[5].t("You're a helpful assistant.")),c(S,"class","flex-1"),c(k,"class","h-full w-full flex flex-col"),c(w,"class","pt-0.5 pb-2.5 flex flex-col justify-between w-full flex-auto overflow-auto h-0"),c(w,"id","messages-container"),c(D,"class","pb-3 flex justify-end"),c(l,"class","flex flex-col h-full px-4"),c(t,"class","mx-auto w-full md:px-0 h-full"),c(e,"class","flex flex-col justify-between w-full overflow-y-auto h-full")},m(n,b){H(n,e,b),f(e,t),f(t,l),f(l,r),f(r,d),f(d,a),f(a,i),f(i,I),ie(p,I,null),f(l,V),f(l,w),f(w,k),f(k,S),f(S,m),s[10](m),Q(m,s[0]),f(l,R),f(l,D),h.m(D,null),T=!0,B||(N=q(m,"input",s[11]),B=!0)},p(n,[b]){const E={};b&32&&(E.placeholder=n[5].t("Select a model")),b&16&&(E.items=n[4].map(Z)),!x&&b&2&&(x=!0,E.value=n[1],fe(()=>x=!1)),p.$set(E),(!T||b&32&&C!==(C=n[5].t("You're a helpful assistant.")))&&c(m,"placeholder",C),b&1&&Q(m,n[0]),j===(j=A(n))&&h?h.p(n,b):(h.d(1),h=j(n),h&&(h.c(),h.m(D,null)))},i(n){T||(ce(p.$$.fragment,n),T=!0)},o(n){ue(p.$$.fragment,n),T=!1},d(n){n&&u(e),de(p),s[10](null),h.d(),B=!1,N()}}}const Z=s=>({value:s.id,label:s.name,model:s});function Te(s,e,t){let l,r,d,a,i;U(s,ge,o=>t(16,l=o)),U(s,be,o=>t(17,r=o)),U(s,xe,o=>t(18,d=o)),U(s,we,o=>t(4,a=o));const I=pe("i18n");U(s,I,o=>t(5,i=o));let p="",x="",V=!1,w=!1,k;const S=()=>{const o=k;o&&(o.scrollTop=o==null?void 0:o.scrollHeight)},m=()=>{w=!0,console.log("stopResponse")},C=async()=>{const o=a.find(h=>h.id===x),[A,j]=await Ee(localStorage.token,{model:o.id,stream:!0,messages:[{role:"assistant",content:p}]},`${ke}/api`);if(A&&A.ok){const h=A.body.pipeThrough(new TextDecoderStream).pipeThrough(ye(`
`)).getReader();for(;;){const{value:n,done:b}=await h.read();if(b||w){w&&j.abort("User: Stop Response");break}try{let E=n.split(`
`);for(const y of E)if(y!=="")if(y.includes("[DONE]"))console.log("done");else{let O=JSON.parse(y.replace(/^data: /,""));console.log(O),t(0,p+=O.choices[0].delta.content??"")}}catch(E){console.log(E)}S()}}},R=async()=>{x&&(t(2,V=!0),await C(),t(2,V=!1),w=!1)};me(async()=>{(d==null?void 0:d.role)!=="admin"&&await ve("/"),r!=null&&r.models?t(1,x=r==null?void 0:r.models[0]):l!=null&&l.default_models?t(1,x=l==null?void 0:l.default_models.split(",")[0]):t(1,x="")});function D(o){x=o,t(1,x)}function T(o){ee[o?"unshift":"push"](()=>{k=o,t(3,k)})}function B(){p=this.value,t(0,p)}return[p,x,V,k,a,i,I,m,R,D,T,B,()=>{R()},()=>{m()}]}class Ce extends ae{constructor(e){super(),oe(this,e,Te,Ve,$,{})}}function Re(s){let e,t;return e=new Ce({}),{c(){re(e.$$.fragment)},l(l){ne(e.$$.fragment,l)},m(l,r){ie(e,l,r),t=!0},p:he,i(l){t||(ce(e.$$.fragment,l),t=!0)},o(l){ue(e.$$.fragment,l),t=!1},d(l){de(e,l)}}}class Me extends ae{constructor(e){super(),oe(this,e,null,Re,$,{})}}export{Me as component};
//# sourceMappingURL=16.vrl2J3o3.js.map
