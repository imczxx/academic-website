import{a as $,t as I}from"../chunks/DP8gfRFk.js";import"../chunks/BUU4U7Wy.js";import{E as M,B as P,q as j,v as G,w as N,b as K,x as U,y as W,n as b,T as D,z as O,A as R,C as H,s as S,k,l as g}from"../chunks/Ohth-Zwu.js";import{a as J}from"../chunks/CWNSDReW.js";import{component as Q}from"./3.CGjvlvZO.js";import{component as V}from"./5.BQhvAFDK.js";import{component as X}from"./4.D3Xuc_Yi.js";const Y=()=>performance.now(),d={tick:a=>requestAnimationFrame(a),now:()=>Y(),tasks:new Set};function B(){const a=d.now();d.tasks.forEach(r=>{r.c(a)||(d.tasks.delete(r),r.f())}),d.tasks.size!==0&&d.tick(B)}function Z(a){let r;return d.tasks.size===0&&d.tick(B),{promise:new Promise(i=>{d.tasks.add(r={c:a,f:i})}),abort(){d.tasks.delete(r)}}}function q(a,r){a.dispatchEvent(new CustomEvent(r))}function rr(a){if(a==="float")return"cssFloat";if(a==="offset")return"cssOffset";if(a.startsWith("--"))return a;const r=a.split("-");return r.length===1?r[0]:r[0]+r.slice(1).map(i=>i[0].toUpperCase()+i.slice(1)).join("")}function z(a){const r={},i=a.split(";");for(const e of i){const[s,n]=e.split(":");if(!s||n===void 0)break;const c=rr(s.trim());r[c]=n.trim()}return r}const ar=a=>a;function tr(a,r,i,e){var s=(a&D)!==0,n="in",c,m=r.inert,p=r.style.overflow,t,h;function w(){var u=H,l=N;O(null),R(null);try{return c??(c=i()(r,(e==null?void 0:e())??{},{direction:n}))}finally{O(u),R(l)}}var _={is_global:s,in(){r.inert=m,t==null||t.abort(),q(r,"introstart"),t=L(r,w(),h,1,()=>{q(r,"introend"),t==null||t.abort(),t=c=void 0,r.style.overflow=p})},out(u){{u==null||u(),c=void 0;return}},stop:()=>{t==null||t.abort()}},v=N;if((v.transitions??(v.transitions=[])).push(_),J){var o=s;if(!o){for(var f=v.parent;f&&f.f&M;)for(;(f=f.parent)&&!(f.f&P););o=!f||(f.f&j)!==0}o&&G(()=>{K(()=>_.in())})}}function L(a,r,i,e,s){if(U(r)){var n,c=!1;return W(()=>{if(!c){var f=r({direction:"in"});n=L(a,f,i,e,s)}}),{abort:()=>{c=!0,n==null||n.abort()},deactivate:()=>n.deactivate(),reset:()=>n.reset(),t:()=>n.t()}}if(!(r!=null&&r.duration))return s(),{abort:b,deactivate:b,reset:b,t:()=>e};const{delay:m=0,css:p,tick:t,easing:h=ar}=r;var w=[];if(t&&t(0,1),p){var _=z(p(0,1));w.push(_,_)}var v=()=>1-e,o=a.animate(w,{duration:m});return o.onfinish=()=>{var f=1-e,u=e-f,l=r.duration*Math.abs(u),T=[];if(l>0){var F=!1;if(p)for(var A=Math.ceil(l/16.666666666666668),E=0;E<=A;E+=1){var C=f+u*h(E/A),x=z(p(C,1-C));T.push(x),F||(F=x.overflow==="hidden")}F&&(a.style.overflow="hidden"),v=()=>{var y=o.currentTime;return f+u*h(y/l)},t&&Z(()=>{if(o.playState!=="running")return!1;var y=v();return t(y,1-y),!0})}o=a.animate(T,{duration:l,fill:"forwards"}),o.onfinish=()=>{v=()=>e,t==null||t(e,1-e),s()}},{abort:()=>{o&&(o.cancel(),o.effect=null,o.onfinish=b)},deactivate:()=>{s=b},reset:()=>{},t:()=>v()}}var er=I('<div class="mx-auto max-w-4xl px-4 py-8"><section id="about" class="mb-16"><!></section> <hr class="my-16 border-t border-gray-200 dark:border-gray-700"> <section id="research" class="mb-16"><!></section> <hr class="my-16 border-t border-gray-200 dark:border-gray-700"> <section id="publications" class="mb-16"><!></section></div>');function ur(a){var r=er(),i=k(r),e=k(i);Q(e),g(i);var s=S(i,4),n=k(s);V(n),g(s);var c=S(s,4),m=k(c);X(m),g(c),g(r),tr(1,r,()=>fade),$(a,r)}export{ur as component};
