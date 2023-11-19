import{j as k}from"./chakra-594c63ee.js";import{t as B,N as ie,q as R,j as pe,d as Y,af as V,ag as J,D as X,ah as G,y as he,z as ce,S as be,e as Se,p as ae,v as U,r as de,E as le,A as ue,Q as we,K as ne,ai as re,J as Ee,a4 as Ne,a6 as ke}from"./index-c0268b55.js";import{r as ye,b as S}from"./react-2c0b8364.js";import{u as j,e as Ie,i as Le}from"./clipboard-138c1a0a.js";import{b as M,r as K,F as Z,p as D,a as O}from"./helpers-2b5bf92f.js";import{f as _e,a as Ce,b as Pe}from"./graph-4032a0ce.js";import{m as me}from"./misc-nodes-49afbcc2.js";import{s as Ae}from"./stations-8cc5e712.js";const je=()=>{const[t,e]=ye.useState({width:void 0,height:void 0});return ye.useEffect(()=>{function n(){e({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",n),n(),()=>window.removeEventListener("resize",n)},[]),t},fe=t=>t.filterNodes((e,n)=>e.startsWith("stn")).map(e=>[e,t.getNodeAttributes(e)]).filter(([e,n])=>n.visible).sort((e,n)=>e[1].zIndex-n[1].zIndex).map(([e,n])=>({node:e,visible:n.visible,zIndex:n.zIndex,x:n.x,y:n.y,type:n.type,[n.type]:n[n.type]})),ge=t=>t.filterDirectedEdges((e,n,c,r,g,A,l)=>e.startsWith("line")&&n.visible&&n.reconcileId==="").sort((e,n)=>t.getEdgeAttribute(e,"zIndex")-t.getEdgeAttribute(n,"zIndex")).map(e=>{const n=t.getEdgeAttribute(e,"type"),c=t.getEdgeAttribute(e,n),r=t.getEdgeAttribute(e,"style"),g=t.getEdgeAttribute(e,r),[A,l]=t.extremities(e),u=t.getNodeAttributes(A),p=t.getNodeAttributes(l);return{edge:e,x1:u.x,y1:u.y,x2:p.x,y2:p.y,type:n,attr:c,style:r,styleAttr:g}}),xe=t=>t.filterNodes((e,n)=>e.startsWith("misc_node")).map(e=>[e,t.getNodeAttributes(e)]).filter(([e,n])=>n.visible).sort((e,n)=>e[1].zIndex-n[1].zIndex).map(([e,n])=>({node:e,visible:n.visible,zIndex:n.zIndex,x:n.x,y:n.y,type:n.type,[n.type]:n[n.type]})),We=t=>{const e=t.filterDirectedEdges((c,r,g,A,l,u,p)=>c.startsWith("line")&&r.reconcileId!==""),n={};for(const c of e){const r=t.getEdgeAttribute(c,"reconcileId");r in n?n[r].push(c):n[r]=[c]}return n},ze=t=>{const e=We(t),n=[],c=[];return Object.values(e).forEach(r=>{var W;if(r.length===1){c.push(...r);return}const g=t.getEdgeAttribute(r.at(0),"type");if(!r.every(y=>t.getEdgeAttribute(y,"type")===g)){c.push(...r);return}const A=t.getEdgeAttribute(r.at(0),"style");if(!r.every(y=>t.getEdgeAttribute(y,"style")===A)){c.push(...r);return}const l={},u=new Set,p=new Set,E=Object.fromEntries(r.map(y=>{var $,T;const[I,P]=t.extremities(y);return l[I]=(($=l[I])!=null?$:0)+1,l[P]=((T=l[P])!=null?T:0)+1,u.add(I),p.add(P),[I,[y,P]]})),w=Array.from(u).filter(y=>l[y]===1),C=Array.from(p).filter(y=>l[y]===1);if(w.length!==1||C.length!==1){c.push(...r);return}const L=w[0],_=C[0];if(L===_){c.push(...r);return}const N=[E[L][0]];let x=E[L][1];for(let y=1;y<r.length;y=y+1){const I=(W=E[x])==null?void 0:W.at(1);if(!I){c.push(...r);return}N.push(E[x][0]),x=I}if(x!==_||N.length!==r.length){c.push(...r);return}n.push(N)}),{allReconciledLines:n,danglingLines:c}},De=(t,e)=>{if(!e.every(r=>t.hasEdge(r)))return;const n=e.map(r=>{var w;const[g,A]=t.extremities(r),l=t.getNodeAttributes(g),u=t.getNodeAttributes(A),p=t.getEdgeAttribute(r,"type"),E=(w=t.getEdgeAttribute(r,p))!=null?w:B[p].defaultAttrs;return B[p].generatePath(l.x,u.x,l.y,u.y,E)});let c=`${n[0]} `;for(let r=1;r<e.length;r=r+1)c+=n[r].replace(/M\s*-?\d+(\.\d+)?(\s*|,)-?\d+(\.*\d+)?\s*/i,"");return c},oe=t=>{const{id:e,type:n,attrs:c=B[n].defaultAttrs,styleType:r,styleAttrs:g=ie[r].defaultAttrs,newLine:A,handleClick:l}=t,{x1:u,y1:p,x2:E,y2:w}=t,[C,L]=S.useState("M 0,0 L 0,0");S.useEffect(()=>{let N="M 0,0 L 0,0";if(["offsetFrom","offsetTo"].every(x=>Object.keys(c).includes(x))&&!Number.isNaN(c.offsetFrom)&&!Number.isNaN(c.offsetTo)&&c.offsetFrom===c.offsetTo&&((u===E||p===w)&&[R.Diagonal,R.Perpendicular].includes(n)||Math.abs((w-p)/(E-u))===1&&[R.Diagonal,R.RotatePerpendicular].includes(n))){const x=c.offsetFrom;N=B[R.Simple].generatePath(u,E,p,w,{offset:x})}else N=B[n].generatePath(u,E,p,w,c);L(N)},[n,JSON.stringify(c),u,E,p,w]);const _=ie[r].component;return S.useMemo(()=>k.jsx(_,{id:e,type:n,path:C,styleAttrs:g,newLine:A,handleClick:l}),[e,n,C,r,JSON.stringify(g),A,l])},Ke=()=>{const t=pe(),e=S.useRef(window.graph),{telemetry:{project:n}}=Y(i=>i.app),{svgViewBoxZoom:c}=Y(i=>i.param),{selected:r,refresh:{nodes:g,edges:A},mode:l,active:u,keepLastPath:p,theme:E}=Y(i=>i.runtime),[w,C]=S.useState({x:0,y:0}),[L,_]=S.useState({x:0,y:0}),N=j((i,d)=>{d.stopPropagation(),l==="select"&&t(V("free"));const h=d.currentTarget,{x:v,y:s}=M(d);h.setPointerCapture(d.pointerId),C({x:v,y:s}),t(J(i)),!d.shiftKey&&r.length<=1&&t(X()),t(G(i))}),x=j((i,d)=>{const{x:h,y:v}=M(d);l==="free"&&u===i?(r.forEach(s=>{e.current.updateNodeAttributes(s,o=>({...o,x:K(o.x-(w.x-h)*c/100,d.altKey?1:5),y:K(o.y-(w.y-v)*c/100,d.altKey?1:5)}))}),t(he()),t(ce())):l.startsWith("line")&&_({x:(w.x-h)*c/100,y:(w.y-v)*c/100})}),W=j((i,d)=>{if(l.startsWith("line")){p||t(V("free"));const h=[...Object.values(be),Se.Virtual],v=e.current.hasNode(u)&&h.includes(e.current.getNodeAttribute(u,"type"));["stn_core_","virtual_circle_"].forEach(o=>{var b,z;const m=(z=(b=document.elementsFromPoint(d.clientX,d.clientY)[0].attributes)==null?void 0:b.getNamedItem("id"))==null?void 0:z.value,f=m==null?void 0:m.startsWith(o);if(v&&f){const F=l.slice(5),ve=`line_${ae(10)}`;e.current.addDirectedEdgeWithKey(ve,u,m.slice(o.length),{visible:!0,zIndex:0,type:F,[F]:structuredClone(B[F].defaultAttrs),style:U.SingleColor,[U.SingleColor]:{color:E},reconcileId:""}),n&&de.event(le.ADD_LINE,{type:F})}}),t(ce()),t(ue(e.current.export()))}else if(l==="free")if(u){const{x:h,y:v}=M(d);w.x-h===0&&w.y-v===0?t(G(i)):t(ue(e.current.export()))}else t(G(i));t(J(void 0))}),y=j((i,d)=>{t(X()),t(G(i))}),[I,P]=S.useState(fe(e.current)),[$,T]=S.useState(xe(e.current)),[q,H]=S.useState(ge(e.current)),[Q,ee]=S.useState([]),[te,se]=S.useState([]);return S.useEffect(()=>{P(fe(e.current)),T(xe(e.current))},[g]),S.useEffect(()=>{H(ge(e.current));const{allReconciledLines:i,danglingLines:d}=ze(e.current);ee(i),se(d)},[A]),k.jsxs(k.Fragment,{children:[te.map(i=>{const[d,h]=e.current.extremities(i),v=e.current.getNodeAttributes(d),s=e.current.getNodeAttributes(h);return k.jsx(oe,{id:i,x1:v.x,y1:v.y,x2:s.x,y2:s.y,newLine:!1,type:R.Simple,attrs:B[R.Simple].defaultAttrs,styleType:U.SingleColor,styleAttrs:{color:["","","#c0c0c0","#fff"]},handleClick:y},i)}),Q.map(i=>{const d=De(e.current,i);if(!d)return k.jsx(k.Fragment,{});const h=i.at(0),v=e.current.getEdgeAttribute(h,"type"),s=e.current.getEdgeAttribute(h,"style"),o=e.current.getEdgeAttribute(h,s),a=ie[s].component;return k.jsx(a,{id:h,type:v,path:d,styleAttrs:o,newLine:!1,handleClick:y},h)}),q.map(({edge:i,x1:d,y1:h,x2:v,y2:s,type:o,attr:a,style:m,styleAttr:f})=>k.jsx(oe,{id:i,x1:d,y1:h,x2:v,y2:s,newLine:!1,type:o,attrs:a,styleType:m,styleAttrs:f,handleClick:y},i)),$.map(i=>{const{node:d,x:h,y:v,type:s}=i,o=me[s].component;return k.jsx(o,{id:d,x:h,y:v,attrs:i[s],handlePointerDown:N,handlePointerMove:x,handlePointerUp:W},d)}),I.map(i=>{const{node:d,x:h,y:v,type:s}=i,o=Ae[s].component;return k.jsx(o,{id:d,x:h,y:v,attrs:{[s]:i[s]},handlePointerDown:N,handlePointerMove:x,handlePointerUp:W},d)}),l.startsWith("line")&&u&&k.jsx(oe,{id:"create_in_progress___no_use",x1:e.current.getNodeAttribute(u,"x"),y1:e.current.getNodeAttribute(u,"y"),x2:e.current.getNodeAttribute(u,"x")-L.x,y2:e.current.getNodeAttribute(u,"y")-L.y,newLine:!0,type:l.slice(5),attrs:B[l.slice(5)].defaultAttrs,styleType:U.SingleColor,styleAttrs:{color:E}})]})},Ye=()=>{var h,v;const t=pe(),e=S.useRef(window.graph),n=()=>{t(he()),t(ce()),t(ue(e.current.export()))},{telemetry:{project:c}}=Y(s=>s.app),{svgViewBoxZoom:r,svgViewBoxMin:g}=Y(s=>s.param),{mode:A,lastTool:l,active:u,selected:p,keepLastPath:E,theme:w,refresh:{nodes:C}}=Y(s=>s.runtime),L=je(),_=((h=L.height)!=null?h:1280)-40,N=((v=L.width)!=null?v:720)-40;S.useEffect(()=>{const s=_e(e.current);Object.entries(s).filter(([o,a])=>a&&o in Z).map(([o,a])=>o).filter(o=>Z[o]&&document.getElementById(Z[o].cssName)===null).map(o=>Z[o].cssName).filter((o,a,m)=>a===m.findIndex(f=>f===o)).forEach(o=>{const a=document.createElement("link");a.rel="stylesheet",a.id=o,a.href=`/rmp/styles/${o}.css`,document.head.append(a)})},[C]);const[x,W]=S.useState({x:0,y:0}),[y,I]=S.useState({x:0,y:0}),[P,$]=S.useState({x:0,y:0}),[T,q]=S.useState({x:0,y:0}),H=j(s=>{const{x:o,y:a}=M(s);if(A.startsWith("station")){t(V("free"));const m=ae(10),f=A.slice(8),b=structuredClone(Ae[f].defaultAttrs);"color"in b&&(b.color=w);const{x:z,y:F}=D(o,a,r,g);e.current.addNode(`stn_${m}`,{visible:!0,zIndex:0,x:K(z,5),y:K(F,5),type:f,[f]:b}),n(),c&&de.event(le.ADD_STATION,{type:f})}else if(A.startsWith("misc-node")){t(V("free"));const m=ae(10),f=A.slice(10),{x:b,y:z}=D(o,a,r,g);e.current.addNode(`misc_node_${m}`,{visible:!0,zIndex:0,x:K(b,5),y:K(z,5),type:f,[f]:structuredClone(me[f].defaultAttrs)}),n(),c&&de.event(le.ADD_STATION,{type:f})}else A==="free"||A.startsWith("line")?(A.startsWith("line")&&(t(V("free")),E&&t(we(!1))),$({x:o,y:a}),q(g),s.shiftKey||(t(J("background")),t(X()))):A==="select"&&(W(D(o,a,r,g)),I(D(o,a,r,g)))}),Q=j(s=>{if(A==="select"){if(x.x!=0&&x.y!=0){const{x:o,y:a}=M(s);I(D(o,a,r,g))}}else if(u==="background"){const{x:o,y:a}=M(s);t(ne({x:T.x+(P.x-o)*r/100,y:T.y+(P.y-a)*r/100}))}}),ee=j(s=>{if(A==="select"){const{x:o,y:a}=M(s),{x:m,y:f}=D(o,a,r,g),b=Ce(e.current,x.x,x.y,m,f);s.shiftKey?t(re([...new Set([...p,...b])])):t(re(b)),t(V("free")),W({x:0,y:0}),I({x:0,y:0})}u==="background"&&!s.shiftKey&&t(J(void 0))}),te=j(s=>{let o=r;s.deltaY>0&&r+10<400?o=r+10:s.deltaY<0&&r-10>0&&(o=r-10),t(Ee(o));const{x:a,y:m}=M(s),f=s.currentTarget.getBoundingClientRect(),[b,z]=[a/f.width,m/f.height];t(ne({x:g.x+a*r/100-N*o/100*b,y:g.y+m*r/100-_*o/100*z}))}),se=j(async s=>{if(O?s.key==="Backspace":s.key==="Delete")p.length>0&&p.filter(o=>e.current.hasNode(o)||e.current.hasEdge(o)).forEach(o=>{t(X()),e.current.hasNode(o)?e.current.dropNode(o):e.current.dropEdge(o),n()});else if(s.key.startsWith("Arrow")){const a=s.key.endsWith("Left")?-1:s.key.endsWith("Right")?1:0,m=s.key.endsWith("Up")?-1:s.key.endsWith("Down")?1:0;t(ne(D(100*a,100*m,r,g)))}else if(s.key==="i"||s.key==="j"||s.key==="k"||s.key==="l"){const a=(s.key==="j"?-1:s.key==="l"?1:0)*10,m=(s.key==="i"?-1:s.key==="k"?1:0)*10;p.length>0&&p.filter(f=>e.current.hasNode(f)).forEach(f=>{e.current.updateNodeAttribute(f,"x",b=>(b!=null?b:0)+a),e.current.updateNodeAttribute(f,"y",b=>(b!=null?b:0)+m),n()})}else if(s.key==="f"&&l)t(V(l));else if(s.key==="z"&&(O?s.metaKey&&!s.shiftKey:s.ctrlKey))O&&s.preventDefault(),t(Ne());else if(s.key==="c"&&(O?s.metaKey&&!s.shiftKey:s.ctrlKey)){const o=new Set(p),a=Pe(e.current,o),m=Ie(e.current,o,new Set(a));navigator.clipboard.writeText(m)}else if(s.key==="v"&&(O?s.metaKey&&!s.shiftKey:s.ctrlKey)){const o=await navigator.clipboard.readText(),{x:a,y:m}=D(N/2,_/2,r,g),{nodes:f}=Le(o,e.current,K(a,5),K(m,5));n(),t(X()),t(re(f))}else(O&&s.key==="z"&&s.metaKey&&s.shiftKey||!O&&s.key==="y"&&s.ctrlKey)&&t(ke())}),[i,d]=S.useState({sx:0,sy:0,ex:0,ey:0});return S.useEffect(()=>{d({sx:x.x<=y.x?x.x:y.x,ex:x.x>y.x?x.x:y.x,sy:x.y<=y.y?x.y:y.y,ey:x.y>y.y?x.y:y.y})},[y.x,y.y]),k.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",id:"canvas",style:{position:"fixed",top:40,left:40,userSelect:"none"},height:_,width:N,viewBox:`${g.x} ${g.y} ${N*r/100} ${_*r/100}`,onPointerDown:H,onPointerMove:Q,onPointerUp:ee,onWheel:te,tabIndex:0,onKeyDown:se,children:[k.jsx(Ke,{}),A==="select"&&x.x!=0&&x.y!=0&&k.jsx("rect",{x:i.sx,y:i.sy,width:i.ex-i.sx,height:i.ey-i.sy,rx:"2",stroke:"#b5b5b6",strokeWidth:"2",strokeOpacity:"0.4",fill:"#b5b5b6",opacity:"0.75"})]})};export{Ye as default};
