import{B as f,T as p,S as h,R as u,I as o,P as c,v as l,G as E,F as T}from"./D_Q35Zef.js";function m(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function n(r,t){var e=l;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function y(r,t){var e=(t&p)!==0,_=(t&h)!==0,a,d=!r.startsWith("<!>");return()=>{if(u)return n(o,null),o;a===void 0&&(a=m(d?r:"<!>"+r),e||(a=f(a)));var s=_?document.importNode(a,!0):a.cloneNode(!0);if(e){var v=f(s),i=s.lastChild;n(v,i)}else n(s,s);return s}}function N(r,t,e="svg"){var _=!r.startsWith("<!>"),a=`<${e}>${_?r:"<!>"+r}</${e}>`,d;return()=>{if(u)return n(o,null),o;if(!d){var s=m(a),v=f(s);d=f(v)}var i=d.cloneNode(!0);return n(i,i),i}}function M(r=""){if(!u){var t=c(r+"");return n(t,t),t}var e=o;return e.nodeType!==3&&(e.before(e=c()),T(e)),n(e,e),e}function P(){if(u)return n(o,null),o;var r=document.createDocumentFragment(),t=document.createComment(""),e=c();return r.append(t,e),n(t,e),r}function x(r,t){if(u){l.nodes_end=o,E();return}r!==null&&r.before(t)}const g="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(g);export{x as a,n as b,P as c,M as d,N as n,y as t};
