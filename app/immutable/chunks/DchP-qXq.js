import{y as J,X as fe,aa as te,Z as I,N as R,O as ne,g as K,ab as le,ac as P,M as S,P as k,at as O,ad as W,Y as j,ae as ue,V as m,w as U,au as X,av as oe,U as ce,aw as ve,ax as _e,I as de,aq as he,Q as pe,C as ge,ay as H,az as $,af as ye,a3 as Q,aA as ee,aB as Ae,aC as Ee,K as Te,G as be,aD as Ie,a9 as Ne,aE as we}from"./Ohth-Zwu.js";import{i as Ce,c as ke,d as Me,n as Oe,b as xe}from"./CWNSDReW.js";function De(e,r){if(r){const a=document.body;e.autofocus=!0,J(()=>{document.activeElement===a&&e.focus()})}}function ze(e,r){return r}function Le(e,r,a,s){for(var u=[],v=r.length,d=0;d<v;d++)oe(r[d].e,u,!0);var h=v>0&&u.length===0&&a!==null;if(h){var y=a.parentNode;ce(y),y.append(a),s.clear(),w(e,r[0].prev,r[v-1].next)}ve(u,()=>{for(var A=0;A<v;A++){var p=r[A];h||(s.delete(p.k),w(e,p.prev,p.next)),_e(p.e,!h)}})}function Ge(e,r,a,s,u,v=null){var d=e,h={flags:r,items:new Map,first:null},y=(r&ee)!==0;if(y){var A=e;d=I?R(de(A)):A.appendChild(fe())}I&&ne();var p=null,E=!1,T=he(()=>{var f=a();return be(f)?f:f==null?[]:m(f)});te(()=>{var f=K(T),o=f.length;if(E&&o===0)return;E=o===0;let t=!1;if(I){var b=d.data===le;b!==(o===0)&&(d=P(),R(d),S(!1),t=!0)}if(I){for(var n=null,l,_=0;_<o;_++){if(k.nodeType===8&&k.data===pe){d=k,t=!0,S(!1);break}var g=f[_],i=s(g,_);l=re(k,h,n,null,g,i,_,u,r),h.items.set(i,l),n=l}o>0&&R(P())}if(!I){var c=ge;Re(f,h,d,u,r,(c.f&O)!==0,s)}v!==null&&(o===0?p?W(p):p=j(()=>v(d)):p!==null&&ue(p,()=>{p=null})),t&&S(!0),K(T)}),I&&(d=k)}function Re(e,r,a,s,u,v,d,h){var B,Y,q,z;var y=(u&Ae)!==0,A=(u&(H|$))!==0,p=e.length,E=r.items,T=r.first,f=T,o,t=null,b,n=[],l=[],_,g,i,c;if(y)for(c=0;c<p;c+=1)_=e[c],g=d(_,c),i=E.get(g),i!==void 0&&((B=i.a)==null||B.measure(),(b??(b=new Set)).add(i));for(c=0;c<p;c+=1){if(_=e[c],g=d(_,c),i=E.get(g),i===void 0){var x=f?f.e.nodes_start:a;t=re(x,r,t,t===null?r.first:t.next,_,g,c,s,u),E.set(g,t),n=[],l=[],f=t.next;continue}if(A&&Se(i,_,c,u),i.e.f&O&&(W(i.e),y&&((Y=i.a)==null||Y.unfix(),(b??(b=new Set)).delete(i))),i!==f){if(o!==void 0&&o.has(i)){if(n.length<l.length){var M=l[0],N;t=M.prev;var V=n[0],D=n[n.length-1];for(N=0;N<n.length;N+=1)Z(n[N],M,a);for(N=0;N<l.length;N+=1)o.delete(l[N]);w(r,V.prev,D.next),w(r,t,V),w(r,D,M),f=M,t=D,c-=1,n=[],l=[]}else o.delete(i),Z(i,f,a),w(r,i.prev,i.next),w(r,i,t===null?r.first:t.next),w(r,t,i),t=i;continue}for(n=[],l=[];f!==null&&f.k!==g;)(v||!(f.e.f&O))&&(o??(o=new Set)).add(f),l.push(f),f=f.next;if(f===null)continue;i=f}n.push(i),t=i,f=i.next}if(f!==null||o!==void 0){for(var C=o===void 0?[]:m(o);f!==null;)(v||!(f.e.f&O))&&C.push(f),f=f.next;var L=C.length;if(L>0){var ie=u&ee&&p===0?a:null;if(y){for(c=0;c<L;c+=1)(q=C[c].a)==null||q.measure();for(c=0;c<L;c+=1)(z=C[c].a)==null||z.fix()}Le(r,C,ie,E)}}y&&J(()=>{var G;if(b!==void 0)for(i of b)(G=i.a)==null||G.apply()}),U.first=r.first&&r.first.e,U.last=t&&t.e}function Se(e,r,a,s){s&H&&X(e.v,r),s&$?X(e.i,a):e.i=a}function re(e,r,a,s,u,v,d,h,y,A){var p=(y&H)!==0,E=(y&Ee)===0,T=p?E?ye(u):Q(u):u,f=y&$?Q(d):d,o={i:f,v:T,k:v,a:null,e:null,prev:a,next:s};try{return o.e=j(()=>h(e,T,f),I),o.e.prev=a&&a.e,o.e.next=s&&s.e,a===null?r.first=o:(a.next=o,a.e.next=o.e),s!==null&&(s.prev=o,s.e.prev=o.e),o}finally{}}function Z(e,r,a){for(var s=e.next?e.next.e.nodes_start:a,u=r?r.e.nodes_start:a,v=e.e.nodes_start;v!==s;){var d=Te(v);u.before(v),v=d}}function w(e,r,a){r===null?e.first=a:(r.next=a,r.e.next=a&&a.e),a!==null&&(a.prev=r,a.e.prev=r&&r.e)}function ae(e){var r,a,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var u=e.length;for(r=0;r<u;r++)e[r]&&(a=ae(e[r]))&&(s&&(s+=" "),s+=a)}else for(a in e)e[a]&&(s&&(s+=" "),s+=a);return s}function He(){for(var e,r,a=0,s="",u=arguments.length;a<u;a++)(e=arguments[a])&&(r=ae(e))&&(s&&(s+=" "),s+=r);return s}function $e(e){return typeof e=="object"?He(e):e??""}function Ve(e,r){r?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Be(e,r,a,s){var u=e.__attributes??(e.__attributes={});I&&(u[r]=e.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&e.nodeName==="LINK")||u[r]!==(u[r]=a)&&(r==="style"&&"__styles"in e&&(e.__styles={}),r==="loading"&&(e[Ie]=a),a==null?e.removeAttribute(r):typeof a!="string"&&se(e).includes(r)?e[r]=a:e.setAttribute(r,a))}function Ke(e,r,a,s,u=!1,v=!1,d=!1){var h=r||{},y=e.tagName==="OPTION";for(var A in r)A in a||(a[A]=null);a.class&&(a.class=$e(a.class));var p=se(e),E=e.__attributes??(e.__attributes={});for(const n in a){let l=a[n];if(y&&n==="value"&&l==null){e.value=e.__value="",h[n]=l;continue}var T=h[n];if(l!==T){h[n]=l;var f=n[0]+n[1];if(f!=="$$"){if(f==="on"){const _={},g="$$"+n;let i=n.slice(2);var o=xe(i);if(Ce(i)&&(i=i.slice(0,-7),_.capture=!0),!o&&T){if(l!=null)continue;e.removeEventListener(i,h[g],_),h[g]=null}if(l!=null)if(o)e[`__${i}`]=l,Me([i]);else{let c=function(x){h[n].call(this,x)};h[g]=ke(i,e,c,_)}else o&&(e[`__${i}`]=void 0)}else if(n==="style"&&l!=null)e.style.cssText=l+"";else if(n==="autofocus")De(e,!!l);else if(n==="__value"||n==="value"&&l!=null)e.value=e[n]=e.__value=l;else if(n==="selected"&&y)Ve(e,l);else{var t=n;u||(t=Oe(t));var b=t==="defaultValue"||t==="defaultChecked";if(l==null&&!v&&!b)if(E[n]=null,t==="value"||t==="checked"){let _=e;if(t==="value"){let g=_.defaultValue;_.removeAttribute(t),_.defaultValue=g}else{let g=_.defaultChecked;_.removeAttribute(t),_.defaultChecked=g}}else e.removeAttribute(n);else b||p.includes(t)&&(v||typeof l!="string")?e[t]=l:typeof l!="function"&&(I&&(t==="src"||t==="href"||t==="srcset")||Be(e,t,l))}n==="style"&&"__styles"in e&&(e.__styles={})}}}return h}var F=new Map;function se(e){var r=F.get(e.nodeName);if(r)return r;F.set(e.nodeName,r=[]);for(var a,s=e,u=Element.prototype;u!==s;){a=we(s);for(var v in a)a[v].set&&r.push(v);s=Ne(s)}return r}export{Be as a,Ge as e,ze as i,Ke as s};
