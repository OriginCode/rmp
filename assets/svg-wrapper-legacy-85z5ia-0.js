System.register(["./chakra-legacy-oG9ixp5q.js","./index-legacy-oIYZqTkc.js","./react-legacy-J6S8G-Zx.js","./clipboard-legacy-8i7DQ4y-.js","./helpers-legacy-bkvBextj.js","./misc-nodes-legacy-Btpjz4k2.js","./stations-legacy-kef7eY29.js"],(function(e,t){"use strict";var r,n,s,i,o,l,d,c,a,u,y,f,x,h,p,g,v,m,b,A,k,w,E,N,j,S,I,P,C,z,K,W,D,$,_,L,M,T,F,R,O;return{setters:[e=>{r=e.j},e=>{n=e.t,s=e.N,i=e.q,o=e.j,l=e.d,d=e.af,c=e.ag,a=e.ah,u=e.ai,y=e.aj,f=e.y,x=e.z,h=e.S,p=e.e,g=e.n,v=e.v,m=e.r,b=e.E,A=e.A,k=e.D,w=e.Q,E=e.K,N=e.J,j=e.a4,S=e.a6},e=>{I=e.r,P=e.b},e=>{C=e.u,z=e.e,K=e.i},e=>{W=e.b,D=e.r,$=e.f,_=e.F,L=e.p,M=e.d,T=e.e,F=e.a},e=>{R=e.m},e=>{O=e.s}],execute:function(){const t=e=>e.filterNodes(((e,t)=>e.startsWith("stn"))).map((t=>[t,e.getNodeAttributes(t)])).filter((([e,t])=>t.visible)).sort(((e,t)=>e[1].zIndex-t[1].zIndex)).map((([e,t])=>({node:e,visible:t.visible,zIndex:t.zIndex,x:t.x,y:t.y,type:t.type,[t.type]:t[t.type]}))),B=e=>e.filterDirectedEdges(((e,t,r,n,s,i,o)=>e.startsWith("line")&&t.visible&&""===t.reconcileId)).sort(((t,r)=>e.getEdgeAttribute(t,"zIndex")-e.getEdgeAttribute(r,"zIndex"))).map((t=>{const r=e.getEdgeAttribute(t,"type"),n=e.getEdgeAttribute(t,r),s=e.getEdgeAttribute(t,"style"),i=e.getEdgeAttribute(t,s),[o,l]=e.extremities(t),d=e.getNodeAttributes(o),c=e.getNodeAttributes(l);return{edge:t,x1:d.x,y1:d.y,x2:c.x,y2:c.y,type:r,attr:n,style:s,styleAttr:i}})),U=e=>e.filterNodes(((e,t)=>e.startsWith("misc_node"))).map((t=>[t,e.getNodeAttributes(t)])).filter((([e,t])=>t.visible)).sort(((e,t)=>e[1].zIndex-t[1].zIndex)).map((([e,t])=>({node:e,visible:t.visible,zIndex:t.zIndex,x:t.x,y:t.y,type:t.type,[t.type]:t[t.type]}))),V=e=>{const{id:t,x:n,y:s,handlePointerDown:i,handlePointerMove:o,handlePointerUp:l}=e,d=P.useCallback((e=>i(t,e)),[t,i]),c=P.useCallback((e=>o(t,e)),[t,o]),a=P.useCallback((e=>l(t,e)),[t,l]);return r.jsx("g",{id:t,transform:`translate(${n-6.4},${s-6.4})scale(0.025)`,onPointerDown:d,onPointerMove:c,onPointerUp:a,style:{cursor:"move"},children:r.jsx("path",{id:`stn_core_${t}`,fillRule:"evenodd",clipRule:"evenodd",d:"M256 0c70.69 0 134.7 28.66 181.02 74.98C483.34 121.31 512 185.31 512 256c0 70.69-28.66 134.7-74.98 181.02C390.7 483.34 326.69 512 256 512c-70.69 0-134.69-28.66-181.02-74.98C28.66 390.7 0 326.69 0 256c0-70.69 28.66-134.69 74.98-181.02C121.31 28.66 185.31 0 256 0zm-21.91 302.69v-2.07c.16-13.72 1.51-24.59 4.15-32.67 2.59-8.08 6.32-14.65 11.18-19.63 4.87-5.02 10.72-9.58 17.56-13.72 4.4-2.8 8.39-5.9 11.91-9.37 3.52-3.42 6.32-7.41 8.38-11.91 2.07-4.46 3.11-9.42 3.11-14.91 0-6.53-1.55-12.18-4.66-16.99-3.05-4.77-7.19-8.44-12.27-11.08-5.13-2.59-10.82-3.89-17.09-3.89-5.65 0-11.03 1.15-16.21 3.53-5.12 2.33-9.42 6-12.79 10.97-3.36 4.98-5.33 11.35-5.85 19.11h-33.56c.53-13.21 3.89-24.39 10.05-33.55 6.21-9.16 14.4-16.11 24.55-20.82 10.2-4.71 21.49-7.04 33.81-7.04 13.57 0 25.38 2.48 35.52 7.56 10.15 5.02 18.08 12.06 23.72 21.08 5.59 9 8.44 19.47 8.44 31.48 0 8.23-1.29 15.64-3.88 22.21-2.59 6.58-6.22 12.48-10.98 17.61-4.77 5.18-10.41 9.73-17.03 13.67-6.27 3.94-11.35 7.97-15.18 12.17-3.88 4.19-6.68 9.17-8.44 14.86-1.76 5.74-2.75 12.84-2.9 21.33v2.07h-31.54zm16.68 70.67c-6.06 0-11.24-2.18-15.59-6.48-4.34-4.29-6.47-9.53-6.47-15.63 0-6.01 2.12-11.19 6.47-15.49 4.35-4.3 9.53-6.47 15.59-6.47 5.95 0 11.12 2.19 15.48 6.47 4.39 4.31 6.58 9.48 6.58 15.49 0 4.04-1.05 7.76-3.06 11.08-2.02 3.35-4.66 6.07-7.97 8.03-3.31 1.96-6.99 3-11.03 3z"})})},Y=e=>{const{id:t,path:n,handleClick:s}=e,i=P.useCallback((e=>s(t,e)),[t,s]);return r.jsx("path",{id:t,d:n,fill:"none",stroke:"grey",strokeWidth:"5",strokeLinecap:"round",cursor:"pointer",onClick:i})},J=e=>{var t,i;const{id:o,type:l,attrs:d=n[l].defaultAttrs,styleType:c,styleAttrs:a=s[c].defaultAttrs,newLine:u,handleClick:y}=e,{x1:f,y1:x,x2:h,y2:p}=e,g=P.useMemo((()=>Z(o,l,f,x,h,p,d)),[l,JSON.stringify(d),f,h,x,p]),v=null!==(t=null===(i=s[c])||void 0===i?void 0:i.component)&&void 0!==t?t:Y;return r.jsx(v,{id:o,type:l,path:g,styleAttrs:a,newLine:u,handleClick:y})},Z=(e,t,r,s,o,l,d)=>{if(!(t in n))return`M ${r},${s} L ${o},${l}`;const c=q(e,t,r,s,o,l,d);if(c){const{x1:e,y1:t,x2:r,y2:s,offset:o}=c;return n[i.Simple].generatePath(e,r,t,s,{offset:o})}return n[t].generatePath(r,o,s,l,d)},q=(e,t,r,n,s,i,o)=>{if(!("offsetFrom"in o)||!("offsetTo"in o))return;if(Number.isNaN(o.offsetFrom)||Number.isNaN(o.offsetTo))return;if(o.offsetFrom===o.offsetTo)return H(t,r,n,s,i)?{x1:r,y1:n,x2:s,y2:i,offset:o.offsetFrom}:void 0;const[l,d]=[o.offsetFrom,o.offsetTo];for(let c=0;c<Math.PI;c+=Math.PI/8)for(let e=c,o=0;o<2;o++,e+=Math.PI){const[o,a,u,y]=[Math.sin(c)*l,Math.cos(c)*l,Math.sin(e)*d,Math.cos(e)*d];if(H(t,r+o,n+a,s+u,i+y))return{x1:r+o,y1:n+a,x2:s+u,y2:i+y,offset:0}}},H=(e,t,r,n,s)=>!(t!==n&&r!==s||![i.Diagonal,i.Perpendicular].includes(e))||!(1!==Math.abs((s-r)/(n-t))||![i.Diagonal,i.RotatePerpendicular].includes(e)),Q=()=>{const e=o(),w=P.useRef(window.graph),{telemetry:{project:E}}=l((e=>e.app)),{svgViewBoxZoom:N}=l((e=>e.param)),{selected:j,refresh:{nodes:S,edges:I},mode:z,active:K,keepLastPath:$,theme:_}=l((e=>e.runtime)),[L,M]=P.useState({x:0,y:0}),[T,F]=P.useState({x:0,y:0}),Z=C(((t,r)=>{r.stopPropagation(),"select"===z&&e(d("free"));const n=r.currentTarget,{x:s,y:i}=W(r);n.setPointerCapture(r.pointerId),M({x:s,y:i}),e(c(t)),r.shiftKey?j.has(t)?e(u(t)):e(y(t)):j.has(t)||e(a(new Set([t])))})),q=C(((t,r)=>{const{x:n,y:s}=W(r);"free"===z&&K===t?(j.forEach((e=>{w.current.hasNode(e)&&w.current.updateNodeAttributes(e,(e=>({...e,x:D(e.x-(L.x-n)*N/100,r.altKey?1:5),y:D(e.y-(L.y-s)*N/100,r.altKey?1:5)})))})),e(f()),e(x())):z.startsWith("line")&&F({x:(L.x-n)*N/100,y:(L.y-s)*N/100})})),H=C(((t,r)=>{if(z.startsWith("line")){$||e(d("free"));const t=[...Object.values(h),p.Virtual],s=w.current.hasNode(K)&&t.includes(w.current.getNodeAttribute(K,"type"));["stn_core_","virtual_circle_"].forEach((e=>{var t;const i=null===(t=document.elementsFromPoint(r.clientX,r.clientY)[0].attributes)||void 0===t||null===(t=t.getNamedItem("id"))||void 0===t?void 0:t.value,o=null==i?void 0:i.startsWith(e);if(s&&o){const t=z.slice(5),r=`line_${g(10)}`;w.current.addDirectedEdgeWithKey(r,K,i.slice(e.length),{visible:!0,zIndex:0,type:t,[t]:structuredClone(n[t].defaultAttrs),style:v.SingleColor,[v.SingleColor]:{color:_},reconcileId:""}),E&&m.event(b.ADD_LINE,{type:t})}})),e(x()),e(A(w.current.export()))}else if("free"===z&&K){const{x:t,y:n}=W(r);L.x-t==0&&L.y-n==0||e(A(w.current.export()))}e(c(void 0))})),Q=C(((t,r)=>{r.shiftKey||e(k()),r.shiftKey&&j.has(t)?e(u(t)):e(y(t))})),[X,G]=P.useState(t(w.current)),[ee,te]=P.useState(U(w.current)),[re,ne]=P.useState(B(w.current)),[se,ie]=P.useState([]),[oe,le]=P.useState([]);return P.useEffect((()=>{G(t(w.current)),te(U(w.current))}),[S]),P.useEffect((()=>{ne(B(w.current));const{allReconciledLines:e,danglingLines:t}=(e=>{const t=(e=>{const t=e.filterDirectedEdges(((e,t,r,n,s,i,o)=>e.startsWith("line")&&""!==t.reconcileId)),r={};for(const n of t){const t=e.getEdgeAttribute(n,"reconcileId");t in r?r[t].push(n):r[t]=[n]}return r})(e),r=[],n=[];return Object.values(t).forEach((t=>{if(1===t.length)return void n.push(...t);const s=e.getEdgeAttribute(t.at(0),"type");if(!t.every((t=>e.getEdgeAttribute(t,"type")===s)))return void n.push(...t);const i=e.getEdgeAttribute(t.at(0),"style");if(!t.every((t=>e.getEdgeAttribute(t,"style")===i)))return void n.push(...t);const o={},l=new Set,d=new Set,c=Object.fromEntries(t.map((t=>{var r,n;const[s,i]=e.extremities(t);return o[s]=(null!==(r=o[s])&&void 0!==r?r:0)+1,o[i]=(null!==(n=o[i])&&void 0!==n?n:0)+1,l.add(s),d.add(i),[s,[t,i]]}))),a=Array.from(l).filter((e=>1===o[e])),u=Array.from(d).filter((e=>1===o[e]));if(1!==a.length||1!==u.length)return void n.push(...t);const y=a[0],f=u[0];if(y===f)return void n.push(...t);const x=[c[y][0]];let h=c[y][1];for(let e=1;e<t.length;e+=1){var p;const e=null===(p=c[h])||void 0===p?void 0:p.at(1);if(!e)return void n.push(...t);x.push(c[h][0]),h=e}h===f&&x.length===t.length?r.push(x):n.push(...t)})),{allReconciledLines:r,danglingLines:n}})(w.current);ie(e),le(t)}),[I]),r.jsxs(r.Fragment,{children:[oe.map((e=>{const[t,s]=w.current.extremities(e),o=w.current.getNodeAttributes(t),l=w.current.getNodeAttributes(s);return r.jsx(J,{id:e,x1:o.x,y1:o.y,x2:l.x,y2:l.y,newLine:!1,type:i.Simple,attrs:n[i.Simple].defaultAttrs,styleType:v.SingleColor,styleAttrs:{color:["","","#c0c0c0","#fff"]},handleClick:Q},e)})),se.map((e=>{var t,i;const o=((e,t)=>{if(!t.every((t=>e.hasEdge(t))))return;const r=t.map((t=>{var r,s,i;const[o,l]=e.extremities(t),d=e.getNodeAttributes(o),c=e.getNodeAttributes(l),a=e.getEdgeAttribute(t,"type"),u=null!==(r=e.getEdgeAttribute(t,a))&&void 0!==r?r:n[a].defaultAttrs;return null!==(s=null===(i=n[a])||void 0===i?void 0:i.generatePath(d.x,c.x,d.y,c.y,u))&&void 0!==s?s:`M ${d.x},${d.y} L ${c.x},${c.y}`}));let s=`${r[0]} `;for(let n=1;n<t.length;n+=1)s+=r[n].replace(/M\s*-?\d+(\.\d+)?(\s*|,)-?\d+(\.*\d+)?\s*/i,"");return s})(w.current,e);if(!o)return r.jsx(r.Fragment,{});const l=e.at(0),d=w.current.getEdgeAttribute(l,"type"),c=w.current.getEdgeAttribute(l,"style"),a=w.current.getEdgeAttribute(l,c),u=null!==(t=null===(i=s[c])||void 0===i?void 0:i.component)&&void 0!==t?t:Y;return r.jsx(u,{id:l,type:d,path:o,styleAttrs:a,newLine:!1,handleClick:Q},l)})),re.map((({edge:e,x1:t,y1:n,x2:s,y2:i,type:o,attr:l,style:d,styleAttr:c})=>r.jsx(J,{id:e,x1:t,y1:n,x2:s,y2:i,newLine:!1,type:o,attrs:l,styleType:d,styleAttrs:c,handleClick:Q},e))),ee.map((e=>{var t,n;const{node:s,x:i,y:o,type:l}=e,d=null!==(t=null===(n=R[l])||void 0===n?void 0:n.component)&&void 0!==t?t:V;return r.jsx(d,{id:s,x:i,y:o,attrs:e[l],handlePointerDown:Z,handlePointerMove:q,handlePointerUp:H},s)})),X.map((e=>{var t,n;const{node:s,x:i,y:o,type:l}=e,d=null!==(t=null===(n=O[l])||void 0===n?void 0:n.component)&&void 0!==t?t:V;return r.jsx(d,{id:s,x:i,y:o,attrs:{[l]:e[l]},handlePointerDown:Z,handlePointerMove:q,handlePointerUp:H},s)})),z.startsWith("line")&&K&&r.jsx(J,{id:"create_in_progress___no_use",x1:w.current.getNodeAttribute(K,"x"),y1:w.current.getNodeAttribute(K,"y"),x2:w.current.getNodeAttribute(K,"x")-T.x,y2:w.current.getNodeAttribute(K,"y")-T.y,newLine:!0,type:z.slice(5),attrs:n[z.slice(5)].defaultAttrs,styleType:v.SingleColor,styleAttrs:{color:_}})]})};e("default",(()=>{var e,t;const n=o(),s=P.useRef(window.graph),i=()=>{n(f()),n(x()),n(A(s.current.export()))},{telemetry:{project:u}}=l((e=>e.app)),{svgViewBoxZoom:y,svgViewBoxMin:h}=l((e=>e.param)),{mode:p,lastTool:v,active:B,selected:U,keepLastPath:V,theme:Y,refresh:{nodes:J}}=l((e=>e.runtime)),Z=(()=>{const[e,t]=I.useState({width:void 0,height:void 0});return I.useEffect((()=>{function e(){t({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]),e})(),q=(null!==(e=Z.height)&&void 0!==e?e:1280)-40,H=(null!==(t=Z.width)&&void 0!==t?t:720)-40;P.useEffect((()=>{const e=$(s.current);Object.entries(e).filter((([e,t])=>t&&e in _)).map((([e,t])=>e)).filter((e=>_[e]&&null===document.getElementById(_[e].cssName))).map((e=>_[e].cssName)).filter(((e,t,r)=>t===r.findIndex((t=>t===e)))).forEach((e=>{const t=document.createElement("link");t.rel="stylesheet",t.id=e,t.href=`/rmp/styles/${e}.css`,document.head.append(t)}))}),[J]);const[X,G]=P.useState({x:0,y:0}),[ee,te]=P.useState({x:0,y:0}),[re,ne]=P.useState({x:0,y:0}),[se,ie]=P.useState({x:0,y:0}),oe=C((e=>{const{x:t,y:r}=W(e);if(p.startsWith("station")){n(d("free"));const e=`stn_${g(10)}`,o=p.slice(8),l=structuredClone(O[o].defaultAttrs);"color"in l&&(l.color=Y);const{x:c,y:f}=L(t,r,y,h);s.current.addNode(e,{visible:!0,zIndex:0,x:D(c,5),y:D(f,5),type:o,[o]:l}),i(),u&&m.event(b.ADD_STATION,{type:o}),n(a(new Set([e])))}else if(p.startsWith("misc-node")){n(d("free"));const e=`misc_node_${g(10)}`,o=p.slice(10),{x:l,y:c}=L(t,r,y,h);s.current.addNode(e,{visible:!0,zIndex:0,x:D(l,5),y:D(c,5),type:o,[o]:structuredClone(R[o].defaultAttrs)}),i(),u&&m.event(b.ADD_STATION,{type:o}),n(a(new Set([e])))}else"free"===p||p.startsWith("line")?(p.startsWith("line")&&(n(d("free")),V&&n(w(!1))),ne({x:t,y:r}),ie(h),e.shiftKey||(n(c("background")),n(k()))):"select"===p&&(G(L(t,r,y,h)),te(L(t,r,y,h)))})),le=C((e=>{if("select"===p){if(0!=X.x&&0!=X.y){const{x:t,y:r}=W(e);te(L(t,r,y,h))}}else if("background"===B){const{x:t,y:r}=W(e);n(E({x:se.x+(re.x-t)*y/100,y:se.y+(re.y-r)*y/100}))}})),de=C((e=>{if("select"===p){const{x:t,y:r}=W(e),{x:i,y:o}=L(t,r,y,h),l=M(s.current,X.x,X.y,i,o),c=T(s.current,new Set(l));n(a(new Set([...e.shiftKey?U:[],...l,...c]))),n(d("free")),G({x:0,y:0}),te({x:0,y:0})}"background"!==B||e.shiftKey||n(c(void 0))})),ce=C((e=>{let t=y;e.deltaY>0&&y+10<400?t=y+10:e.deltaY<0&&y-10>0&&(t=y-10),n(N(t));const{x:r,y:s}=W(e),i=e.currentTarget.getBoundingClientRect(),[o,l]=[r/i.width,s/i.height];n(E({x:h.x+r*y/100-H*t/100*o,y:h.y+s*y/100-q*t/100*l}))})),ae=C((async e=>{if(F?"Backspace"===e.key:"Delete"===e.key)U.size>0&&(U.forEach((e=>{s.current.hasNode(e)?s.current.dropNode(e):s.current.hasEdge(e)&&s.current.dropEdge(e)})),n(k()),i());else if(e.key.startsWith("Arrow")){const t=100,r=e.key.endsWith("Left")?-1:e.key.endsWith("Right")?1:0,s=e.key.endsWith("Up")?-1:e.key.endsWith("Down")?1:0;n(E(L(t*r,t*s,y,h)))}else if("i"===e.key||"j"===e.key||"k"===e.key||"l"===e.key){const t=10,r=("j"===e.key?-1:"l"===e.key?1:0)*t,n=("i"===e.key?-1:"k"===e.key?1:0)*t;U.size>0&&U.forEach((e=>{s.current.hasNode(e)&&(s.current.updateNodeAttribute(e,"x",(e=>(null!=e?e:0)+r)),s.current.updateNodeAttribute(e,"y",(e=>(null!=e?e:0)+n)),i())}))}else if("f"===e.key&&v)n(d(v));else if("z"===e.key&&(F?e.metaKey&&!e.shiftKey:e.ctrlKey))F&&e.preventDefault(),n(j());else if("s"===e.key)n(d("select"));else if("c"!==e.key&&"x"!==e.key||!(F?e.metaKey&&!e.shiftKey:e.ctrlKey))if("v"===e.key&&(F?e.metaKey&&!e.shiftKey:e.ctrlKey)){const e=await navigator.clipboard.readText(),{x:t,y:r}=L(H/2,q/2,y,h),{nodes:o,edges:l}=K(e,s.current,D(t,5),D(r,5));i();const d=structuredClone(o);l.forEach((e=>d.add(e))),n(a(d))}else(F&&"z"===e.key&&e.metaKey&&e.shiftKey||!F&&"y"===e.key&&e.ctrlKey)&&n(S());else{const t=z(s.current,U);navigator.clipboard.writeText(t),"x"===e.key&&(n(k()),U.forEach((e=>{s.current.hasNode(e)?s.current.dropNode(e):s.current.hasEdge(e)&&s.current.dropEdge(e)})),i())}})),[ue,ye]=P.useState({sx:0,sy:0,ex:0,ey:0});return P.useEffect((()=>{ye({sx:X.x<=ee.x?X.x:ee.x,ex:X.x>ee.x?X.x:ee.x,sy:X.y<=ee.y?X.y:ee.y,ey:X.y>ee.y?X.y:ee.y})}),[ee.x,ee.y]),r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",id:"canvas",style:{position:"fixed",top:40,left:40,userSelect:"none"},height:q,width:H,viewBox:`${h.x} ${h.y} ${H*y/100} ${q*y/100}`,onPointerDown:oe,onPointerMove:le,onPointerUp:de,onWheel:ce,tabIndex:0,onKeyDown:ae,children:[r.jsx(Q,{}),"select"===p&&0!=X.x&&0!=X.y&&r.jsx("rect",{x:ue.sx,y:ue.sy,width:ue.ex-ue.sx,height:ue.ey-ue.sy,rx:"2",stroke:"#b5b5b6",strokeWidth:"2",strokeOpacity:"0.4",fill:"#b5b5b6",opacity:"0.75"})]})}))}}}));
