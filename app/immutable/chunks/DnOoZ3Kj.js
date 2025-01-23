import{n as E,o as m,q as I,v as R,w as j,x as B,y as H,z as P,A as L,B as q,H as x,C as Y,D as T,E as w,F as D,G as z,I as v,J as G,K as $,L as F,M as J,N as K,O as Q,P as U,Q as X,p as Z,R as S,j as ee,c as te}from"./D_Q35Zef.js";import{b as re}from"./B70jbYJj.js";function _e(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ae=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function pe(e){return ae.includes(e)}const ne={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function he(e){return e=e.toLowerCase(),ne[e]??e}const oe=["touchstart","touchmove"];function se(e){return oe.includes(e)}const ie=["textarea","script","style","title"];function ve(e){return ie.includes(e)}function ue(e){var t=I,a=R;E(null),m(null);try{return e()}finally{E(t),m(a)}}const M=new Set,A=new Set;function ce(e,t,a,i){function o(r){if(i.capture||y.call(t,r),!r.cancelBubble)return ue(()=>a.call(this,r))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?B(()=>{t.addEventListener(e,o,i)}):t.addEventListener(e,o,i),o}function ye(e,t,a,i,o){var r={capture:i,passive:o},u=ce(e,t,a,r);(t===document.body||t===window||t===document)&&j(()=>{t.removeEventListener(e,u,r)})}function ge(e){for(var t=0;t<e.length;t++)M.add(e[t]);for(var a of A)a(e)}function y(e){var O;var t=this,a=t.ownerDocument,i=e.type,o=((O=e.composedPath)==null?void 0:O.call(e))||[],r=o[0]||e.target,u=0,_=e.__root;if(_){var d=o.indexOf(_);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var p=o.indexOf(t);if(p===-1)return;d<=p&&(u=d)}if(r=o[u]||e.target,r!==t){H(e,"currentTarget",{configurable:!0,get(){return r||a}});var b=I,c=R;E(null),m(null);try{for(var n,s=[];r!==null;){var l=r.assignedSlot||r.parentNode||r.host||null;try{var f=r["__"+i];if(f!==void 0&&!r.disabled)if(P(f)){var[C,...W]=f;C.apply(r,[e,...W])}else f.call(r,e)}catch(g){n?s.push(g):n=g}if(e.cancelBubble||l===t||l===null)break;r=l}if(n){for(let g of s)queueMicrotask(()=>{throw g});throw n}}finally{e.__root=t,delete e.currentTarget,E(b),m(c)}}}let N=!0;function we(e){N=e}function Ee(e,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a==null?"":a+"")}function le(e,t){return V(e,t)}function me(e,t){L(),t.intro=t.intro??!1;const a=t.target,i=S,o=v;try{for(var r=q(a);r&&(r.nodeType!==8||r.data!==x);)r=Y(r);if(!r)throw T;w(!0),D(r),z();const u=V(e,{...t,anchor:r});if(v===null||v.nodeType!==8||v.data!==G)throw $(),T;return w(!1),u}catch(u){if(u===T)return t.recover===!1&&F(),L(),J(a),w(!1),le(e,t);throw u}finally{w(i),D(o)}}const h=new Map;function V(e,{target:t,anchor:a,props:i={},events:o,context:r,intro:u=!0}){L();var _=new Set,d=c=>{for(var n=0;n<c.length;n++){var s=c[n];if(!_.has(s)){_.add(s);var l=se(s);t.addEventListener(s,y,{passive:l});var f=h.get(s);f===void 0?(document.addEventListener(s,y,{passive:l}),h.set(s,1)):h.set(s,f+1)}}};d(K(M)),A.add(d);var p=void 0,b=Q(()=>{var c=a??t.appendChild(U());return X(()=>{if(r){Z({});var n=te;n.c=r}o&&(i.$$events=o),S&&re(c,null),N=u,p=e(c,i)||{},N=!0,S&&(R.nodes_end=v),r&&ee()}),()=>{var l;for(var n of _){t.removeEventListener(n,y);var s=h.get(n);--s===0?(document.removeEventListener(n,y),h.delete(n)):h.set(n,s)}A.delete(d),c!==a&&((l=c.parentNode)==null||l.removeChild(c))}});return k.set(p,b),p}let k=new WeakMap;function be(e,t){const a=k.get(e);return a?(k.delete(e),a(t)):Promise.resolve()}export{pe as a,N as b,ce as c,ge as d,ve as e,we as f,ye as g,me as h,_e as i,le as m,he as n,Ee as s,be as u};
