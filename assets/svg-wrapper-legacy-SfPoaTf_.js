System.register(["./chakra-legacy-HX1OcujP.js","./index-legacy-2ynsqijY.js","./react-legacy-Ork8Lb8Q.js","./clipboard-legacy-A4an2VeV.js","./stations-legacy-wXrVOhks.js","./helpers-legacy-GAkGEuCV.js","./misc-nodes-legacy-LHVCggoI.js"],(function(e,t){"use strict";var r,s,n,i,o,l,c,a,d,y,u,x,f,h,p,g,v,m,b,A,k,w,E,N,j,S,I,P,C,K,D,W,z,$,_,M,L,T,O,F,R,U;return{setters:[e=>{r=e.j},e=>{s=e.m,n=e.H,i=e.l,o=e.f,l=e.a,c=e.ab,a=e.ac,d=e.ad,y=e.ae,u=e.af,x=e.q,f=e.t,h=e.S,p=e.b,g=e.n,v=e.o,m=e.r,b=e.E,A=e.v,k=e.x,w=e.K,E=e.F,N=e.D,j=e.a0,S=e.a2},e=>{I=e.b},e=>{P=e.u,C=e.e,K=e.i},e=>{D=e.s,W=e.u,z=e.F},e=>{$=e.a,_=e.r,M=e.g,L=e.f,T=e.p,O=e.b,F=e.d,R=e.i},e=>{U=e.m}],execute:function(){const t=e=>e.filterNodes(((e,t)=>e.startsWith("stn"))).map((t=>[t,e.getNodeAttributes(t)])).filter((([e,t])=>t.visible)).sort(((e,t)=>e[1].zIndex-t[1].zIndex)).map((([e,t])=>({node:e,visible:t.visible,zIndex:t.zIndex,x:t.x,y:t.y,type:t.type,[t.type]:t[t.type]}))),B=e=>e.filterDirectedEdges(((e,t,r,s,n,i,o)=>e.startsWith("line")&&t.visible&&""===t.reconcileId)).sort(((t,r)=>e.getEdgeAttribute(t,"zIndex")-e.getEdgeAttribute(r,"zIndex"))).map((t=>{const r=e.getEdgeAttribute(t,"type"),s=e.getEdgeAttribute(t,r),n=e.getEdgeAttribute(t,"style"),i=e.getEdgeAttribute(t,n),[o,l]=e.extremities(t),c=e.getNodeAttributes(o),a=e.getNodeAttributes(l);return{edge:t,x1:c.x,y1:c.y,x2:a.x,y2:a.y,type:r,attr:s,style:n,styleAttr:i}})),V=e=>e.filterNodes(((e,t)=>e.startsWith("misc_node"))).map((t=>[t,e.getNodeAttributes(t)])).filter((([e,t])=>t.visible)).sort(((e,t)=>e[1].zIndex-t[1].zIndex)).map((([e,t])=>({node:e,visible:t.visible,zIndex:t.zIndex,x:t.x,y:t.y,type:t.type,[t.type]:t[t.type]}))),Y=e=>{const{id:t,x:s,y:n,handlePointerDown:i,handlePointerMove:o,handlePointerUp:l}=e,c=I.useCallback((e=>i(t,e)),[t,i]),a=I.useCallback((e=>o(t,e)),[t,o]),d=I.useCallback((e=>l(t,e)),[t,l]);return r.jsx("g",{id:t,transform:`translate(${s-6.4} ${n-6.4})scale(0.025)`,onPointerDown:c,onPointerMove:a,onPointerUp:d,style:{cursor:"move"},children:r.jsx("path",{id:`stn_core_${t}`,fillRule:"evenodd",clipRule:"evenodd",d:"M256 0c70.69 0 134.7 28.66 181.02 74.98C483.34 121.31 512 185.31 512 256c0 70.69-28.66 134.7-74.98 181.02C390.7 483.34 326.69 512 256 512c-70.69 0-134.69-28.66-181.02-74.98C28.66 390.7 0 326.69 0 256c0-70.69 28.66-134.69 74.98-181.02C121.31 28.66 185.31 0 256 0zm-21.91 302.69v-2.07c.16-13.72 1.51-24.59 4.15-32.67 2.59-8.08 6.32-14.65 11.18-19.63 4.87-5.02 10.72-9.58 17.56-13.72 4.4-2.8 8.39-5.9 11.91-9.37 3.52-3.42 6.32-7.41 8.38-11.91 2.07-4.46 3.11-9.42 3.11-14.91 0-6.53-1.55-12.18-4.66-16.99-3.05-4.77-7.19-8.44-12.27-11.08-5.13-2.59-10.82-3.89-17.09-3.89-5.65 0-11.03 1.15-16.21 3.53-5.12 2.33-9.42 6-12.79 10.97-3.36 4.98-5.33 11.35-5.85 19.11h-33.56c.53-13.21 3.89-24.39 10.05-33.55 6.21-9.16 14.4-16.11 24.55-20.82 10.2-4.71 21.49-7.04 33.81-7.04 13.57 0 25.38 2.48 35.52 7.56 10.15 5.02 18.08 12.06 23.72 21.08 5.59 9 8.44 19.47 8.44 31.48 0 8.23-1.29 15.64-3.88 22.21-2.59 6.58-6.22 12.48-10.98 17.61-4.77 5.18-10.41 9.73-17.03 13.67-6.27 3.94-11.35 7.97-15.18 12.17-3.88 4.19-6.68 9.17-8.44 14.86-1.76 5.74-2.75 12.84-2.9 21.33v2.07h-31.54zm16.68 70.67c-6.06 0-11.24-2.18-15.59-6.48-4.34-4.29-6.47-9.53-6.47-15.63 0-6.01 2.12-11.19 6.47-15.49 4.35-4.3 9.53-6.47 15.59-6.47 5.95 0 11.12 2.19 15.48 6.47 4.39 4.31 6.58 9.48 6.58 15.49 0 4.04-1.05 7.76-3.06 11.08-2.02 3.35-4.66 6.07-7.97 8.03-3.31 1.96-6.99 3-11.03 3z"})})},q=e=>{const{id:t,path:s,handleClick:n}=e,i=I.useCallback((e=>n(t,e)),[t,n]);return r.jsx("path",{id:t,d:s,fill:"none",stroke:"grey",strokeWidth:"5",strokeLinecap:"round",cursor:"pointer",onClick:i})},Z=e=>{var t,i;const{id:o,type:l,attrs:c=s[l].defaultAttrs,styleType:a,styleAttrs:d=n[a].defaultAttrs,newLine:y,handleClick:u}=e,{x1:x,y1:f,x2:h,y2:p}=e,g=I.useMemo((()=>H(o,l,x,f,h,p,c)),[l,JSON.stringify(c),x,h,f,p]),v=null!==(t=null===(i=n[a])||void 0===i?void 0:i.component)&&void 0!==t?t:q;return r.jsx(v,{id:o,type:l,path:g,styleAttrs:d,newLine:y,handleClick:u})},H=(e,t,r,n,o,l,c)=>{if(!(t in s))return`M ${r} ${n} L ${o} ${l}`;const a=J(e,t,r,n,o,l,c);if(a){const{x1:e,y1:t,x2:r,y2:n,offset:o}=a;return s[i.Simple].generatePath(e,r,t,n,{offset:o})}return s[t].generatePath(r,o,n,l,c)},J=(e,t,r,s,n,i,o)=>{if(!("offsetFrom"in o)||!("offsetTo"in o))return;if(Number.isNaN(o.offsetFrom)||Number.isNaN(o.offsetTo))return;if(o.offsetFrom===o.offsetTo)return X(t,r,s,n,i)?{x1:r,y1:s,x2:n,y2:i,offset:o.offsetFrom}:void 0;const[l,c]=[o.offsetFrom,o.offsetTo];for(let a=0;a<Math.PI;a+=Math.PI/8)for(let e=a,o=0;o<2;o++,e+=Math.PI){const[o,d,y,u]=[Math.sin(a)*l,Math.cos(a)*l,Math.sin(e)*c,Math.cos(e)*c];if(X(t,r+o,s+d,n+y,i+u))return{x1:r+o,y1:s+d,x2:n+y,y2:i+u,offset:0}}},X=(e,t,r,s,n)=>!(t!==s&&r!==n||![i.Diagonal,i.Perpendicular].includes(e))||!(1!==Math.abs((n-r)/(s-t))||![i.Diagonal,i.RotatePerpendicular].includes(e)),G=()=>{const e=o(),w=I.useRef(window.graph),{telemetry:{project:E}}=l((e=>e.app)),{svgViewBoxZoom:N}=l((e=>e.param)),{selected:j,refresh:{nodes:S,edges:C},mode:K,active:W,keepLastPath:z,theme:M}=l((e=>e.runtime)),[L,T]=I.useState({x:0,y:0}),[O,F]=I.useState({x:0,y:0}),R=P(((t,r)=>{r.stopPropagation(),"select"===K&&e(c("free"));const s=r.currentTarget,{x:n,y:i}=$(r);s.setPointerCapture(r.pointerId),T({x:n,y:i}),e(a(t)),r.shiftKey?j.has(t)?e(y(t)):e(u(t)):j.has(t)||e(d(new Set([t])))})),H=P(((t,r)=>{const{x:s,y:n}=$(r);"free"===K&&W===t?(j.forEach((e=>{w.current.hasNode(e)&&w.current.updateNodeAttributes(e,(e=>({...e,x:_(e.x-(L.x-s)*N/100,r.altKey?1:5),y:_(e.y-(L.y-n)*N/100,r.altKey?1:5)})))})),e(x()),e(f())):K.startsWith("line")&&F({x:(L.x-s)*N/100,y:(L.y-n)*N/100})})),J=P(((t,r)=>{if(K.startsWith("line")){z||e(c("free"));const t=[...Object.values(h),p.Virtual],n=w.current.hasNode(W)&&t.includes(w.current.getNodeAttribute(W,"type"));["stn_core_","virtual_circle_"].forEach((e=>{var t;const i=null===(t=document.elementsFromPoint(r.clientX,r.clientY)[0].attributes)||void 0===t||null===(t=t.getNamedItem("id"))||void 0===t?void 0:t.value,o=null==i?void 0:i.startsWith(e);if(n&&o){const t=K.slice(5),r=`line_${g(10)}`;w.current.addDirectedEdgeWithKey(r,W,i.slice(e.length),{visible:!0,zIndex:0,type:t,[t]:structuredClone(s[t].defaultAttrs),style:v.SingleColor,[v.SingleColor]:{color:M},reconcileId:""}),E&&m.event(b.ADD_LINE,{type:t})}})),e(f()),e(A(w.current.export()))}else if("free"===K&&W){const{x:t,y:s}=$(r);L.x-t==0&&L.y-s==0||e(A(w.current.export()))}e(a(void 0))})),X=P(((t,r)=>{r.shiftKey||e(k()),r.shiftKey&&j.has(t)?e(y(t)):e(u(t))})),[G,Q]=I.useState(t(w.current)),[ee,te]=I.useState(V(w.current)),[re,se]=I.useState(B(w.current)),[ne,ie]=I.useState([]),[oe,le]=I.useState([]);return I.useEffect((()=>{Q(t(w.current)),te(V(w.current))}),[S]),I.useEffect((()=>{se(B(w.current));const{allReconciledLines:e,danglingLines:t}=(e=>{const t=(e=>{const t=e.filterDirectedEdges(((e,t,r,s,n,i,o)=>e.startsWith("line")&&""!==t.reconcileId)),r={};for(const s of t){const t=e.getEdgeAttribute(s,"reconcileId");t in r?r[t].push(s):r[t]=[s]}return r})(e),r=[],s=[];return Object.values(t).forEach((t=>{if(1===t.length)return void s.push(...t);const n=e.getEdgeAttribute(t.at(0),"type");if(!t.every((t=>e.getEdgeAttribute(t,"type")===n)))return void s.push(...t);const i=e.getEdgeAttribute(t.at(0),"style");if(!t.every((t=>e.getEdgeAttribute(t,"style")===i)))return void s.push(...t);const o={},l=new Set,c=new Set,a=Object.fromEntries(t.map((t=>{var r,s;const[n,i]=e.extremities(t);return o[n]=(null!==(r=o[n])&&void 0!==r?r:0)+1,o[i]=(null!==(s=o[i])&&void 0!==s?s:0)+1,l.add(n),c.add(i),[n,[t,i]]}))),d=Array.from(l).filter((e=>1===o[e])),y=Array.from(c).filter((e=>1===o[e]));if(1!==d.length||1!==y.length)return void s.push(...t);const u=d[0],x=y[0];if(u===x)return void s.push(...t);const f=[a[u][0]];let h=a[u][1];for(let e=1;e<t.length;e+=1){var p;const e=null===(p=a[h])||void 0===p?void 0:p.at(1);if(!e)return void s.push(...t);f.push(a[h][0]),h=e}h===x&&f.length===t.length?r.push(f):s.push(...t)})),{allReconciledLines:r,danglingLines:s}})(w.current);ie(e),le(t)}),[C]),r.jsxs(r.Fragment,{children:[oe.map((e=>{const[t,n]=w.current.extremities(e),o=w.current.getNodeAttributes(t),l=w.current.getNodeAttributes(n);return r.jsx(Z,{id:e,x1:o.x,y1:o.y,x2:l.x,y2:l.y,newLine:!1,type:i.Simple,attrs:s[i.Simple].defaultAttrs,styleType:v.SingleColor,styleAttrs:{color:["","","#c0c0c0","#fff"]},handleClick:X},e)})),ne.map((e=>{var t,i;const o=((e,t)=>{if(!t.every((t=>e.hasEdge(t))))return;const r=t.map((t=>{var r,n,i;const[o,l]=e.extremities(t),c=e.getNodeAttributes(o),a=e.getNodeAttributes(l),d=e.getEdgeAttribute(t,"type"),y=null!==(r=e.getEdgeAttribute(t,d))&&void 0!==r?r:s[d].defaultAttrs;return null!==(n=null===(i=s[d])||void 0===i?void 0:i.generatePath(c.x,a.x,c.y,a.y,y))&&void 0!==n?n:`M ${c.x} ${c.y} L ${a.x} ${a.y}`}));let n=`${r[0]} `;for(let s=1;s<t.length;s+=1)n+=r[s].replace(/M\s*-?\d+(\.\d+)?(\s*|,)-?\d+(\.*\d+)?\s*/i,"");return n})(w.current,e);if(!o)return r.jsx(r.Fragment,{});const l=e.at(0),c=w.current.getEdgeAttribute(l,"type"),a=w.current.getEdgeAttribute(l,"style"),d=w.current.getEdgeAttribute(l,a),y=null!==(t=null===(i=n[a])||void 0===i?void 0:i.component)&&void 0!==t?t:q;return r.jsx(y,{id:l,type:c,path:o,styleAttrs:d,newLine:!1,handleClick:X},l)})),re.map((({edge:e,x1:t,y1:s,x2:n,y2:i,type:o,attr:l,style:c,styleAttr:a})=>r.jsx(Z,{id:e,x1:t,y1:s,x2:n,y2:i,newLine:!1,type:o,attrs:l,styleType:c,styleAttrs:a,handleClick:X},e))),ee.map((e=>{var t,s;const{node:n,x:i,y:o,type:l}=e,c=null!==(t=null===(s=U[l])||void 0===s?void 0:s.component)&&void 0!==t?t:Y;return r.jsx(c,{id:n,x:i,y:o,attrs:e[l],handlePointerDown:R,handlePointerMove:H,handlePointerUp:J},n)})),G.map((e=>{var t,s;const{node:n,x:i,y:o,type:l}=e,c=null!==(t=null===(s=D[l])||void 0===s?void 0:s.component)&&void 0!==t?t:Y;return r.jsx(c,{id:n,x:i,y:o,attrs:{[l]:e[l]},handlePointerDown:R,handlePointerMove:H,handlePointerUp:J},n)})),K.startsWith("line")&&W&&r.jsx(Z,{id:"create_in_progress___no_use",x1:w.current.getNodeAttribute(W,"x"),y1:w.current.getNodeAttribute(W,"y"),x2:w.current.getNodeAttribute(W,"x")-O.x,y2:w.current.getNodeAttribute(W,"y")-O.y,newLine:!0,type:K.slice(5),attrs:s[K.slice(5)].defaultAttrs,styleType:v.SingleColor,styleAttrs:{color:M}})]})};e("default",(()=>{const e=o(),t=I.useRef(window.graph),s=()=>{e(x()),e(f()),e(A(t.current.export()))},{telemetry:{project:n}}=l((e=>e.app)),{svgViewBoxZoom:i,svgViewBoxMin:y}=l((e=>e.param)),{mode:u,lastTool:h,active:p,selected:v,keepLastPath:B,theme:V,refresh:{nodes:Y}}=l((e=>e.runtime)),q=W(),{height:Z,width:H}=M(q);I.useEffect((()=>{const e=L(t.current);Object.entries(e).filter((([e,t])=>t&&e in z)).map((([e,t])=>e)).filter((e=>z[e]&&null===document.getElementById(z[e].cssName))).map((e=>z[e].cssName)).filter(((e,t,r)=>t===r.findIndex((t=>t===e)))).forEach((e=>{const t=document.createElement("link");t.rel="stylesheet",t.id=e,t.href=`/rmp/styles/${e}.css`,document.head.append(t)}))}),[Y]);const[J,X]=I.useState({x:0,y:0}),[Q,ee]=I.useState({x:0,y:0}),[te,re]=I.useState({x:0,y:0}),[se,ne]=I.useState({x:0,y:0}),ie=P((r=>{const{x:o,y:l}=$(r);if(u.startsWith("station")){e(c("free"));const r=`stn_${g(10)}`,a=u.slice(8),x=structuredClone(D[a].defaultAttrs);"color"in x&&(x.color=V);const{x:f,y:h}=T(o,l,i,y);t.current.addNode(r,{visible:!0,zIndex:0,x:_(f,5),y:_(h,5),type:a,[a]:x}),s(),n&&m.event(b.ADD_STATION,{type:a}),e(d(new Set([r])))}else if(u.startsWith("misc-node")){e(c("free"));const r=`misc_node_${g(10)}`,a=u.slice(10),{x:x,y:f}=T(o,l,i,y);t.current.addNode(r,{visible:!0,zIndex:0,x:_(x,5),y:_(f,5),type:a,[a]:structuredClone(U[a].defaultAttrs)}),s(),n&&m.event(b.ADD_STATION,{type:a}),e(d(new Set([r])))}else"free"===u||u.startsWith("line")?(u.startsWith("line")&&(e(c("free")),B&&e(w(!1))),re({x:o,y:l}),ne(y),r.shiftKey||(e(a("background")),e(k()))):"select"===u&&(X(T(o,l,i,y)),ee(T(o,l,i,y)))})),oe=P((t=>{if("select"===u){if(0!=J.x&&0!=J.y){const{x:e,y:r}=$(t);ee(T(e,r,i,y))}}else if("background"===p){const{x:r,y:s}=$(t);e(E({x:se.x+(te.x-r)*i/100,y:se.y+(te.y-s)*i/100}))}})),le=P((r=>{if("select"===u){const{x:s,y:n}=$(r),{x:o,y:l}=T(s,n,i,y),a=O(t.current,J.x,J.y,o,l),u=F(t.current,new Set(a));e(d(new Set([...r.shiftKey?v:[],...a,...u]))),e(c("free")),X({x:0,y:0}),ee({x:0,y:0})}"background"!==p||r.shiftKey||e(a(void 0))})),ce=P((t=>{let r=i;t.deltaY>0&&i+10<400?r=i+10:t.deltaY<0&&i-10>0&&(r=i-10),e(N(r));const{x:s,y:n}=$(t),o=t.currentTarget.getBoundingClientRect(),[l,c]=[s/o.width,n/o.height];e(E({x:y.x+s*i/100-H*r/100*l,y:y.y+n*i/100-Z*r/100*c}))})),ae=P((async r=>{if(R?"Backspace"===r.key:"Delete"===r.key)v.size>0&&(v.forEach((e=>{t.current.hasNode(e)?t.current.dropNode(e):t.current.hasEdge(e)&&t.current.dropEdge(e)})),e(k()),s());else if(r.key.startsWith("Arrow")){const t=100,s=r.key.endsWith("Left")?-1:r.key.endsWith("Right")?1:0,n=r.key.endsWith("Up")?-1:r.key.endsWith("Down")?1:0;e(E(T(t*s,t*n,i,y)))}else if("i"===r.key||"j"===r.key||"k"===r.key||"l"===r.key){const e=10,n=("j"===r.key?-1:"l"===r.key?1:0)*e,i=("i"===r.key?-1:"k"===r.key?1:0)*e;v.size>0&&v.forEach((e=>{t.current.hasNode(e)&&(t.current.updateNodeAttribute(e,"x",(e=>(null!=e?e:0)+n)),t.current.updateNodeAttribute(e,"y",(e=>(null!=e?e:0)+i)),s())}))}else if("f"===r.key&&h)e(c(h));else if("z"===r.key&&(R?r.metaKey&&!r.shiftKey:r.ctrlKey))R&&r.preventDefault(),e(j());else if("s"===r.key)e(c("select"));else if("c"!==r.key&&"x"!==r.key||!(R?r.metaKey&&!r.shiftKey:r.ctrlKey))if("v"===r.key&&(R?r.metaKey&&!r.shiftKey:r.ctrlKey)){const r=await navigator.clipboard.readText(),{x:n,y:o}=T(H/2,Z/2,i,y),{nodes:l,edges:c}=K(r,t.current,_(n,5),_(o,5));s();const a=structuredClone(l);c.forEach((e=>a.add(e))),e(d(a))}else(R&&"z"===r.key&&r.metaKey&&r.shiftKey||!R&&"y"===r.key&&r.ctrlKey)&&e(S());else{const n=C(t.current,v);navigator.clipboard.writeText(n),"x"===r.key&&(e(k()),v.forEach((e=>{t.current.hasNode(e)?t.current.dropNode(e):t.current.hasEdge(e)&&t.current.dropEdge(e)})),s())}})),[de,ye]=I.useState({sx:0,sy:0,ex:0,ey:0});return I.useEffect((()=>{ye({sx:J.x<=Q.x?J.x:Q.x,ex:J.x>Q.x?J.x:Q.x,sy:J.y<=Q.y?J.y:Q.y,ey:J.y>Q.y?J.y:Q.y})}),[Q.x,Q.y]),r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",id:"canvas",style:{position:"fixed",top:40,left:40,userSelect:"none"},height:Z,width:H,viewBox:`${y.x} ${y.y} ${H*i/100} ${Z*i/100}`,onPointerDown:ie,onPointerMove:oe,onPointerUp:le,onWheel:ce,tabIndex:0,onKeyDown:ae,children:[r.jsx(G,{}),"select"===u&&0!=J.x&&0!=J.y&&r.jsx("rect",{x:de.sx,y:de.sy,width:de.ex-de.sx,height:de.ey-de.sy,rx:"2",stroke:"#b5b5b6",strokeWidth:"2",strokeOpacity:"0.4",fill:"#b5b5b6",opacity:"0.75"}),r.jsx("defs",{children:r.jsxs("pattern",{id:"opaque",width:"5",height:"5",patternUnits:"userSpaceOnUse",children:[r.jsx("rect",{x:"0",y:"0",width:"2.5",height:"2.5",fill:"black",fillOpacity:"50%"}),r.jsx("rect",{x:"2.5",y:"2.5",width:"2.5",height:"2.5",fill:"black",fillOpacity:"50%"})]})})]})}))}}}));
