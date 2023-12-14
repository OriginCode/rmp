import{j as E}from"./chakra-6d516865.js";import{t as W,N as oe,q as V,j as me,d as U,af as $,ag as Z,ah as ie,ai as ye,aj as se,y as ve,z as ce,S as ke,e as Ee,p as ae,v as Y,r as de,E as le,A as ue,D as G,Q as Ne,K as ne,J as Ce,a4 as Le,a6 as Pe}from"./index-507035b2.js";import{r as fe,b as A}from"./react-bf6ce531.js";import{u as M,e as Ie,i as je}from"./clipboard-21086213.js";import{b as T,r as B,f as _e,F as X,p as K,d as ze,e as Me,a as R}from"./helpers-f1b24566.js";import{m as Ae}from"./misc-nodes-e4caa816.js";import{s as be}from"./stations-8b74ba7d.js";const We=()=>{const[t,e]=fe.useState({width:void 0,height:void 0});return fe.useEffect(()=>{function n(){e({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",n),n(),()=>window.removeEventListener("resize",n)},[]),t},ge=t=>t.filterNodes((e,n)=>e.startsWith("stn")).map(e=>[e,t.getNodeAttributes(e)]).filter(([e,n])=>n.visible).sort((e,n)=>e[1].zIndex-n[1].zIndex).map(([e,n])=>({node:e,visible:n.visible,zIndex:n.zIndex,x:n.x,y:n.y,type:n.type,[n.type]:n[n.type]})),xe=t=>t.filterDirectedEdges((e,n,a,r,g,h,l)=>e.startsWith("line")&&n.visible&&n.reconcileId==="").sort((e,n)=>t.getEdgeAttribute(e,"zIndex")-t.getEdgeAttribute(n,"zIndex")).map(e=>{const n=t.getEdgeAttribute(e,"type"),a=t.getEdgeAttribute(e,n),r=t.getEdgeAttribute(e,"style"),g=t.getEdgeAttribute(e,r),[h,l]=t.extremities(e),d=t.getNodeAttributes(h),x=t.getNodeAttributes(l);return{edge:e,x1:d.x,y1:d.y,x2:x.x,y2:x.y,type:n,attr:a,style:r,styleAttr:g}}),pe=t=>t.filterNodes((e,n)=>e.startsWith("misc_node")).map(e=>[e,t.getNodeAttributes(e)]).filter(([e,n])=>n.visible).sort((e,n)=>e[1].zIndex-n[1].zIndex).map(([e,n])=>({node:e,visible:n.visible,zIndex:n.zIndex,x:n.x,y:n.y,type:n.type,[n.type]:n[n.type]})),De=t=>{const e=t.filterDirectedEdges((a,r,g,h,l,d,x)=>a.startsWith("line")&&r.reconcileId!==""),n={};for(const a of e){const r=t.getEdgeAttribute(a,"reconcileId");r in n?n[r].push(a):n[r]=[a]}return n},Ke=t=>{const e=De(t),n=[],a=[];return Object.values(e).forEach(r=>{var L;if(r.length===1){a.push(...r);return}const g=t.getEdgeAttribute(r.at(0),"type");if(!r.every(u=>t.getEdgeAttribute(u,"type")===g)){a.push(...r);return}const h=t.getEdgeAttribute(r.at(0),"style");if(!r.every(u=>t.getEdgeAttribute(u,"style")===h)){a.push(...r);return}const l={},d=new Set,x=new Set,b=Object.fromEntries(r.map(u=>{var F,O;const[P,z]=t.extremities(u);return l[P]=((F=l[P])!=null?F:0)+1,l[z]=((O=l[z])!=null?O:0)+1,d.add(P),x.add(z),[P,[u,z]]})),k=Array.from(d).filter(u=>l[u]===1),j=Array.from(x).filter(u=>l[u]===1);if(k.length!==1||j.length!==1){a.push(...r);return}const N=k[0],_=j[0];if(N===_){a.push(...r);return}const C=[b[N][0]];let m=b[N][1];for(let u=1;u<r.length;u=u+1){const P=(L=b[m])==null?void 0:L.at(1);if(!P){a.push(...r);return}C.push(b[m][0]),m=P}if(m!==_||C.length!==r.length){a.push(...r);return}n.push(C)}),{allReconciledLines:n,danglingLines:a}},$e=(t,e)=>{if(!e.every(r=>t.hasEdge(r)))return;const n=e.map(r=>{var k,j,N;const[g,h]=t.extremities(r),l=t.getNodeAttributes(g),d=t.getNodeAttributes(h),x=t.getEdgeAttribute(r,"type"),b=(k=t.getEdgeAttribute(r,x))!=null?k:W[x].defaultAttrs;return(N=(j=W[x])==null?void 0:j.generatePath(l.x,d.x,l.y,d.y,b))!=null?N:`M ${l.x},${l.y} L ${d.x},${d.y}`});let a=`${n[0]} `;for(let r=1;r<e.length;r=r+1)a+=n[r].replace(/M\s*-?\d+(\.\d+)?(\s*|,)-?\d+(\.*\d+)?\s*/i,"");return a},he=t=>{const{id:e,x:n,y:a,handlePointerDown:r,handlePointerMove:g,handlePointerUp:h}=t,l=A.useCallback(b=>r(e,b),[e,r]),d=A.useCallback(b=>g(e,b),[e,g]),x=A.useCallback(b=>h(e,b),[e,h]);return E.jsx("g",{id:e,transform:`translate(${n-6.4},${a-6.4})scale(0.025)`,onPointerDown:l,onPointerMove:d,onPointerUp:x,style:{cursor:"move"},children:E.jsx("path",{id:`stn_core_${e}`,fillRule:"evenodd",clipRule:"evenodd",d:"M256 0c70.69 0 134.7 28.66 181.02 74.98C483.34 121.31 512 185.31 512 256c0 70.69-28.66 134.7-74.98 181.02C390.7 483.34 326.69 512 256 512c-70.69 0-134.69-28.66-181.02-74.98C28.66 390.7 0 326.69 0 256c0-70.69 28.66-134.69 74.98-181.02C121.31 28.66 185.31 0 256 0zm-21.91 302.69v-2.07c.16-13.72 1.51-24.59 4.15-32.67 2.59-8.08 6.32-14.65 11.18-19.63 4.87-5.02 10.72-9.58 17.56-13.72 4.4-2.8 8.39-5.9 11.91-9.37 3.52-3.42 6.32-7.41 8.38-11.91 2.07-4.46 3.11-9.42 3.11-14.91 0-6.53-1.55-12.18-4.66-16.99-3.05-4.77-7.19-8.44-12.27-11.08-5.13-2.59-10.82-3.89-17.09-3.89-5.65 0-11.03 1.15-16.21 3.53-5.12 2.33-9.42 6-12.79 10.97-3.36 4.98-5.33 11.35-5.85 19.11h-33.56c.53-13.21 3.89-24.39 10.05-33.55 6.21-9.16 14.4-16.11 24.55-20.82 10.2-4.71 21.49-7.04 33.81-7.04 13.57 0 25.38 2.48 35.52 7.56 10.15 5.02 18.08 12.06 23.72 21.08 5.59 9 8.44 19.47 8.44 31.48 0 8.23-1.29 15.64-3.88 22.21-2.59 6.58-6.22 12.48-10.98 17.61-4.77 5.18-10.41 9.73-17.03 13.67-6.27 3.94-11.35 7.97-15.18 12.17-3.88 4.19-6.68 9.17-8.44 14.86-1.76 5.74-2.75 12.84-2.9 21.33v2.07h-31.54zm16.68 70.67c-6.06 0-11.24-2.18-15.59-6.48-4.34-4.29-6.47-9.53-6.47-15.63 0-6.01 2.12-11.19 6.47-15.49 4.35-4.3 9.53-6.47 15.59-6.47 5.95 0 11.12 2.19 15.48 6.47 4.39 4.31 6.58 9.48 6.58 15.49 0 4.04-1.05 7.76-3.06 11.08-2.02 3.35-4.66 6.07-7.97 8.03-3.31 1.96-6.99 3-11.03 3z"})})},Se=t=>{const{id:e,path:n,handleClick:a}=t,r=A.useCallback(g=>a(e,g),[e,a]);return E.jsx("path",{id:e,d:n,fill:"none",stroke:"grey",strokeWidth:"5",strokeLinecap:"round",cursor:"pointer",onClick:r})},re=t=>{var C,m;const{id:e,type:n,attrs:a=W[n].defaultAttrs,styleType:r,styleAttrs:g=oe[r].defaultAttrs,newLine:h,handleClick:l}=t,{x1:d,y1:x,x2:b,y2:k}=t,[j,N]=A.useState("M 0,0 L 0,0");A.useEffect(()=>{let L="M 0,0 L 0,0";if(!(n in W))L=`M ${d},${x} L ${b},${k}`;else if(["offsetFrom","offsetTo"].every(u=>Object.keys(a).includes(u))&&!Number.isNaN(a.offsetFrom)&&!Number.isNaN(a.offsetTo)&&a.offsetFrom===a.offsetTo&&((d===b||x===k)&&[V.Diagonal,V.Perpendicular].includes(n)||Math.abs((k-x)/(b-d))===1&&[V.Diagonal,V.RotatePerpendicular].includes(n))){const u=a.offsetFrom;L=W[V.Simple].generatePath(d,b,x,k,{offset:u})}else L=W[n].generatePath(d,b,x,k,a);N(L)},[n,JSON.stringify(a),d,b,x,k]);const _=(m=(C=oe[r])==null?void 0:C.component)!=null?m:Se;return A.useMemo(()=>E.jsx(_,{id:e,type:n,path:j,styleAttrs:g,newLine:h,handleClick:l}),[e,n,j,r,JSON.stringify(g),h,l])},Be=()=>{const t=me(),e=A.useRef(window.graph),{telemetry:{project:n}}=U(c=>c.app),{svgViewBoxZoom:a}=U(c=>c.param),{selected:r,refresh:{nodes:g,edges:h},mode:l,active:d,keepLastPath:x,theme:b}=U(c=>c.runtime),[k,j]=A.useState({x:0,y:0}),[N,_]=A.useState({x:0,y:0}),C=M((c,y)=>{y.stopPropagation(),l==="select"&&t($("free"));const v=y.currentTarget,{x:w,y:s}=T(y);v.setPointerCapture(y.pointerId),j({x:w,y:s}),t(Z(c)),y.shiftKey?r.has(c)?t(ye(c)):t(se(c)):r.has(c)||t(ie(new Set([c])))}),m=M((c,y)=>{const{x:v,y:w}=T(y);l==="free"&&d===c?(r.forEach(s=>{e.current.hasNode(s)&&e.current.updateNodeAttributes(s,o=>({...o,x:B(o.x-(k.x-v)*a/100,y.altKey?1:5),y:B(o.y-(k.y-w)*a/100,y.altKey?1:5)}))}),t(ve()),t(ce())):l.startsWith("line")&&_({x:(k.x-v)*a/100,y:(k.y-w)*a/100})}),L=M((c,y)=>{if(l.startsWith("line")){x||t($("free"));const v=[...Object.values(ke),Ee.Virtual],w=e.current.hasNode(d)&&v.includes(e.current.getNodeAttribute(d,"type"));["stn_core_","virtual_circle_"].forEach(o=>{var S,I;const f=(I=(S=document.elementsFromPoint(y.clientX,y.clientY)[0].attributes)==null?void 0:S.getNamedItem("id"))==null?void 0:I.value,p=f==null?void 0:f.startsWith(o);if(w&&p){const D=l.slice(5),we=`line_${ae(10)}`;e.current.addDirectedEdgeWithKey(we,d,f.slice(o.length),{visible:!0,zIndex:0,type:D,[D]:structuredClone(W[D].defaultAttrs),style:Y.SingleColor,[Y.SingleColor]:{color:b},reconcileId:""}),n&&de.event(le.ADD_LINE,{type:D})}}),t(ce()),t(ue(e.current.export()))}else if(l==="free")if(d){const{x:v,y:w}=T(y);k.x-v===0&&k.y-w===0||t(ue(e.current.export()))}else t(se(c));t(Z(void 0))}),u=M((c,y)=>{y.shiftKey||t(G()),y.shiftKey&&r.has(c)?t(ye(c)):t(se(c))}),[P,z]=A.useState(ge(e.current)),[F,O]=A.useState(pe(e.current)),[J,q]=A.useState(xe(e.current)),[H,Q]=A.useState([]),[ee,te]=A.useState([]);return A.useEffect(()=>{z(ge(e.current)),O(pe(e.current))},[g]),A.useEffect(()=>{q(xe(e.current));const{allReconciledLines:c,danglingLines:y}=Ke(e.current);Q(c),te(y)},[h]),E.jsxs(E.Fragment,{children:[ee.map(c=>{const[y,v]=e.current.extremities(c),w=e.current.getNodeAttributes(y),s=e.current.getNodeAttributes(v);return E.jsx(re,{id:c,x1:w.x,y1:w.y,x2:s.x,y2:s.y,newLine:!1,type:V.Simple,attrs:W[V.Simple].defaultAttrs,styleType:Y.SingleColor,styleAttrs:{color:["","","#c0c0c0","#fff"]},handleClick:u},c)}),H.map(c=>{var f,p;const y=$e(e.current,c);if(!y)return E.jsx(E.Fragment,{});const v=c.at(0),w=e.current.getEdgeAttribute(v,"type"),s=e.current.getEdgeAttribute(v,"style"),o=e.current.getEdgeAttribute(v,s),i=(p=(f=oe[s])==null?void 0:f.component)!=null?p:Se;return E.jsx(i,{id:v,type:w,path:y,styleAttrs:o,newLine:!1,handleClick:u},v)}),J.map(({edge:c,x1:y,y1:v,x2:w,y2:s,type:o,attr:i,style:f,styleAttr:p})=>E.jsx(re,{id:c,x1:y,y1:v,x2:w,y2:s,newLine:!1,type:o,attrs:i,styleType:f,styleAttrs:p,handleClick:u},c)),F.map(c=>{var i,f;const{node:y,x:v,y:w,type:s}=c,o=(f=(i=Ae[s])==null?void 0:i.component)!=null?f:he;return E.jsx(o,{id:y,x:v,y:w,attrs:c[s],handlePointerDown:C,handlePointerMove:m,handlePointerUp:L},y)}),P.map(c=>{var i,f;const{node:y,x:v,y:w,type:s}=c,o=(f=(i=be[s])==null?void 0:i.component)!=null?f:he;return E.jsx(o,{id:y,x:v,y:w,attrs:{[s]:c[s]},handlePointerDown:C,handlePointerMove:m,handlePointerUp:L},y)}),l.startsWith("line")&&d&&E.jsx(re,{id:"create_in_progress___no_use",x1:e.current.getNodeAttribute(d,"x"),y1:e.current.getNodeAttribute(d,"y"),x2:e.current.getNodeAttribute(d,"x")-N.x,y2:e.current.getNodeAttribute(d,"y")-N.y,newLine:!0,type:l.slice(5),attrs:W[l.slice(5)].defaultAttrs,styleType:Y.SingleColor,styleAttrs:{color:b}})]})},Xe=()=>{var v,w;const t=me(),e=A.useRef(window.graph),n=()=>{t(ve()),t(ce()),t(ue(e.current.export()))},{telemetry:{project:a}}=U(s=>s.app),{svgViewBoxZoom:r,svgViewBoxMin:g}=U(s=>s.param),{mode:h,lastTool:l,active:d,selected:x,keepLastPath:b,theme:k,refresh:{nodes:j}}=U(s=>s.runtime),N=We(),_=((v=N.height)!=null?v:1280)-40,C=((w=N.width)!=null?w:720)-40;A.useEffect(()=>{const s=_e(e.current);Object.entries(s).filter(([o,i])=>i&&o in X).map(([o,i])=>o).filter(o=>X[o]&&document.getElementById(X[o].cssName)===null).map(o=>X[o].cssName).filter((o,i,f)=>i===f.findIndex(p=>p===o)).forEach(o=>{const i=document.createElement("link");i.rel="stylesheet",i.id=o,i.href=`/rmp/styles/${o}.css`,document.head.append(i)})},[j]);const[m,L]=A.useState({x:0,y:0}),[u,P]=A.useState({x:0,y:0}),[z,F]=A.useState({x:0,y:0}),[O,J]=A.useState({x:0,y:0}),q=M(s=>{const{x:o,y:i}=T(s);if(h.startsWith("station")){t($("free"));const f=ae(10),p=h.slice(8),S=structuredClone(be[p].defaultAttrs);"color"in S&&(S.color=k);const{x:I,y:D}=K(o,i,r,g);e.current.addNode(`stn_${f}`,{visible:!0,zIndex:0,x:B(I,5),y:B(D,5),type:p,[p]:S}),n(),a&&de.event(le.ADD_STATION,{type:p})}else if(h.startsWith("misc-node")){t($("free"));const f=ae(10),p=h.slice(10),{x:S,y:I}=K(o,i,r,g);e.current.addNode(`misc_node_${f}`,{visible:!0,zIndex:0,x:B(S,5),y:B(I,5),type:p,[p]:structuredClone(Ae[p].defaultAttrs)}),n(),a&&de.event(le.ADD_STATION,{type:p})}else h==="free"||h.startsWith("line")?(h.startsWith("line")&&(t($("free")),b&&t(Ne(!1))),F({x:o,y:i}),J(g),s.shiftKey||(t(Z("background")),t(G()))):h==="select"&&(L(K(o,i,r,g)),P(K(o,i,r,g)))}),H=M(s=>{if(h==="select"){if(m.x!=0&&m.y!=0){const{x:o,y:i}=T(s);P(K(o,i,r,g))}}else if(d==="background"){const{x:o,y:i}=T(s);t(ne({x:O.x+(z.x-o)*r/100,y:O.y+(z.y-i)*r/100}))}}),Q=M(s=>{if(h==="select"){const{x:o,y:i}=T(s),{x:f,y:p}=K(o,i,r,g),S=ze(e.current,m.x,m.y,f,p),I=Me(e.current,new Set(S));t(ie(new Set([...s.shiftKey?x:[],...S,...I]))),t($("free")),L({x:0,y:0}),P({x:0,y:0})}d==="background"&&!s.shiftKey&&t(Z(void 0))}),ee=M(s=>{let o=r;s.deltaY>0&&r+10<400?o=r+10:s.deltaY<0&&r-10>0&&(o=r-10),t(Ce(o));const{x:i,y:f}=T(s),p=s.currentTarget.getBoundingClientRect(),[S,I]=[i/p.width,f/p.height];t(ne({x:g.x+i*r/100-C*o/100*S,y:g.y+f*r/100-_*o/100*I}))}),te=M(async s=>{if(R?s.key==="Backspace":s.key==="Delete")x.size>0&&(x.forEach(o=>{e.current.hasNode(o)?e.current.dropNode(o):e.current.hasEdge(o)&&e.current.dropEdge(o)}),t(G()),n());else if(s.key.startsWith("Arrow")){const i=s.key.endsWith("Left")?-1:s.key.endsWith("Right")?1:0,f=s.key.endsWith("Up")?-1:s.key.endsWith("Down")?1:0;t(ne(K(100*i,100*f,r,g)))}else if(s.key==="i"||s.key==="j"||s.key==="k"||s.key==="l"){const i=(s.key==="j"?-1:s.key==="l"?1:0)*10,f=(s.key==="i"?-1:s.key==="k"?1:0)*10;x.size>0&&x.forEach(p=>{e.current.hasNode(p)&&(e.current.updateNodeAttribute(p,"x",S=>(S!=null?S:0)+i),e.current.updateNodeAttribute(p,"y",S=>(S!=null?S:0)+f),n())})}else if(s.key==="f"&&l)t($(l));else if(s.key==="z"&&(R?s.metaKey&&!s.shiftKey:s.ctrlKey))R&&s.preventDefault(),t(Le());else if(s.key==="s")t($("select"));else if((s.key==="c"||s.key==="x")&&(R?s.metaKey&&!s.shiftKey:s.ctrlKey)){const o=Ie(e.current,x);navigator.clipboard.writeText(o),s.key==="x"&&(t(G()),x.forEach(i=>{e.current.hasNode(i)?e.current.dropNode(i):e.current.hasEdge(i)&&e.current.dropEdge(i)}),n())}else if(s.key==="v"&&(R?s.metaKey&&!s.shiftKey:s.ctrlKey)){const o=await navigator.clipboard.readText(),{x:i,y:f}=K(C/2,_/2,r,g),{nodes:p,edges:S}=je(o,e.current,B(i,5),B(f,5));n();const I=structuredClone(p);S.forEach(D=>I.add(D)),t(ie(I))}else(R&&s.key==="z"&&s.metaKey&&s.shiftKey||!R&&s.key==="y"&&s.ctrlKey)&&t(Pe())}),[c,y]=A.useState({sx:0,sy:0,ex:0,ey:0});return A.useEffect(()=>{y({sx:m.x<=u.x?m.x:u.x,ex:m.x>u.x?m.x:u.x,sy:m.y<=u.y?m.y:u.y,ey:m.y>u.y?m.y:u.y})},[u.x,u.y]),E.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",id:"canvas",style:{position:"fixed",top:40,left:40,userSelect:"none"},height:_,width:C,viewBox:`${g.x} ${g.y} ${C*r/100} ${_*r/100}`,onPointerDown:q,onPointerMove:H,onPointerUp:Q,onWheel:ee,tabIndex:0,onKeyDown:te,children:[E.jsx(Be,{}),h==="select"&&m.x!=0&&m.y!=0&&E.jsx("rect",{x:c.sx,y:c.sy,width:c.ex-c.sx,height:c.ey-c.sy,rx:"2",stroke:"#b5b5b6",strokeWidth:"2",strokeOpacity:"0.4",fill:"#b5b5b6",opacity:"0.75"})]})};export{Xe as default};
