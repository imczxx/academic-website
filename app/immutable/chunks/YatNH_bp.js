import{a1 as q,a2 as B,a3 as I,a4 as K,z as N,b as M,a5 as P,a6 as $,a7 as h,a8 as j,a9 as S,aa as O,K as x}from"./7YMWNumA.js";import{b as G}from"./Co68EZkf.js";const U=()=>performance.now(),v={tick:t=>requestAnimationFrame(t),now:()=>U(),tasks:new Set};function z(){const t=v.now();v.tasks.forEach(r=>{r.c(t)||(v.tasks.delete(r),r.f())}),v.tasks.size!==0&&v.tick(z)}function W(t){let r;return v.tasks.size===0&&v.tick(z),{promise:new Promise(o=>{v.tasks.add(r={c:t,f:o})}),abort(){v.tasks.delete(r)}}}function R(t,r){t.dispatchEvent(new CustomEvent(r))}function D(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const r=t.split("-");return r.length===1?r[0]:r[0]+r.slice(1).map(o=>o[0].toUpperCase()+o.slice(1)).join("")}function g(t){const r={},o=t.split(";");for(const e of o){const[f,i]=e.split(":");if(!f||i===void 0)break;const d=D(f.trim());r[d]=i.trim()}return r}const H=t=>t;function X(t,r,o,e){var f=(t&j)!==0,i="in",d,y=r.inert,p=r.style.overflow,a,w;function m(){var u=x,l=N;S(null),O(null);try{return d??(d=o()(r,(e==null?void 0:e())??{},{direction:i}))}finally{S(u),O(l)}}var _={is_global:f,in(){r.inert=y,a==null||a.abort(),R(r,"introstart"),a=L(r,m(),w,1,()=>{R(r,"introend"),a==null||a.abort(),a=d=void 0,r.style.overflow=p})},out(u){{u==null||u(),d=void 0;return}},stop:()=>{a==null||a.abort()}},c=N;if((c.transitions??(c.transitions=[])).push(_),G){var n=f;if(!n){for(var s=c.parent;s&&s.f&q;)for(;(s=s.parent)&&!(s.f&B););n=!s||(s.f&I)!==0}n&&K(()=>{M(()=>_.in())})}}function L(t,r,o,e,f){if(P(r)){var i,d=!1;return $(()=>{if(!d){var s=r({direction:"in"});i=L(t,s,o,e,f)}}),{abort:()=>{d=!0,i==null||i.abort()},deactivate:()=>i.deactivate(),reset:()=>i.reset(),t:()=>i.t()}}if(!(r!=null&&r.duration))return f(),{abort:h,deactivate:h,reset:h,t:()=>e};const{delay:y=0,css:p,tick:a,easing:w=H}=r;var m=[];if(a&&a(0,1),p){var _=g(p(0,1));m.push(_,_)}var c=()=>1-e,n=t.animate(m,{duration:y});return n.onfinish=()=>{var s=1-e,u=e-s,l=r.duration*Math.abs(u),F=[];if(l>0){var T=!1;if(p)for(var b=Math.ceil(l/16.666666666666668),E=0;E<=b;E+=1){var C=s+u*w(E/b),A=g(p(C,1-C));F.push(A),T||(T=A.overflow==="hidden")}T&&(t.style.overflow="hidden"),c=()=>{var k=n.currentTime;return s+u*w(k/l)},a&&W(()=>{if(n.playState!=="running")return!1;var k=c();return a(k,1-k),!0})}n=t.animate(F,{duration:l,fill:"forwards"}),n.onfinish=()=>{c=()=>e,a==null||a(e,1-e),f()}},{abort:()=>{n&&(n.cancel(),n.effect=null,n.onfinish=h)},deactivate:()=>{f=h},reset:()=>{},t:()=>c()}}const J=t=>t;function Y(t,{delay:r=0,duration:o=400,easing:e=J}={}){const f=+getComputedStyle(t).opacity;return{delay:r,duration:o,easing:e,css:i=>`opacity: ${i*f}`}}export{Y as f,X as t};
