import{j as e,a0 as P,a1 as L,a2 as se,s as A,A as J,M as K,m as Q,n as X,p as Y,r as ee,q as U,af as ae}from"./chakra-IQx0hwqQ.js";import{c as N,j as C,d as T,y as w,z as S,A as y,ak as I,T as re,O as ie,ah as oe,v as te,t as D,N as k,q as le,al as q,o as F,D as M,aj as V,am as ce,an as de,ao as ue,ap as pe,n as $}from"./index-pC0TG86I.js";import{b as d}from"./react-5OqMKJZU.js";import{u as G,e as he}from"./clipboard-U5OutLS8.js";import{s as H}from"./stations-Rks8RNgS.js";import{d as ge,e as me,f as fe}from"./change-types-ugnrlmgL.js";import{m as xe}from"./misc-nodes-BD7SU0C5.js";function ye(){const{t:s}=N(),r=C(),{selected:o,theme:c,paletteAppClip:{output:t}}=T(i=>i.runtime),n=d.useCallback(()=>{r(w()),r(S()),r(y(a.current.export()))},[r,w,S,y]),a=d.useRef(window.graph),h=i=>{if(a.current.hasNode(i)){const l=a.current.getNodeAttributes(i),f=l.type;return i.startsWith("stn")?l[f].names.join("/"):f}else if(a.current.hasEdge(i)){const[l,f]=a.current.extremities(i),m=a.current.getSourceAttributes(i),x=a.current.getTargetAttributes(i),j=m.type,v=x.type;return(l.startsWith("stn")?m[j].names[0]:j)+" - "+(f.startsWith("stn")?x[v].names[0]:v)}},g=i=>{o.forEach(l=>{if(a.current.hasEdge(l)){const f=a.current.getEdgeAttributes(l).style,m=a.current.getEdgeAttribute(l,f);f!==te.River&&m.color!==void 0&&(m.color=i),a.current.mergeEdgeAttributes(l,{[f]:m})}else if(a.current.hasNode(l)){const f=a.current.getNodeAttributes(l).type,m=a.current.getNodeAttribute(l,f);m.color!==void 0&&(m.color=i),a.current.mergeNodeAttributes(l,{[f]:m})}}),n()},[u,p]=d.useState(!1);return d.useEffect(()=>{u&&t&&(g(t),p(!1))},[t==null?void 0:t.toString()]),e.jsxs(P,{children:[e.jsxs(L,{as:"h5",size:"sm",children:[s("panel.details.selected")," ",o.size]}),e.jsx(I,{label:s("panel.details.multipleChangeColor"),children:e.jsx(re,{theme:c,onClick:()=>{p(!0),r(ie(c))}})}),e.jsx(se,{m:"var(--chakra-space-1)",children:[...o].map(i=>{var l;return e.jsx(A,{width:"100%",size:"sm",variant:"solid",onClick:()=>r(oe(new Set([i]))),overflow:"hidden",maxW:"270",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"ruby",children:(l=h(i))==null?void 0:l.replaceAll("\\","⏎")},i)})})]})}function be(){const{t:s}=N(),r=C(),o=d.useCallback(()=>{r(S()),r(y(a.current.export()))},[r,S,y]),{selected:c,theme:t}=T(b=>b.runtime),[n]=c,a=d.useRef(window.graph),[h,g]=d.useState(!1),u=d.useRef(null),p=Object.fromEntries(Object.entries(D).map(([b,B])=>[b,s(B.metadata.displayName).toString()])),[i,l]=d.useState(a.current.getEdgeAttribute(n,"type")),[f,m]=d.useState(void 0),x=Object.fromEntries(Object.entries(k).map(([b,B])=>[b,s(B.metadata.displayName).toString()])),[j,v]=d.useState(a.current.getEdgeAttribute(n,"style")),[E,W]=d.useState(void 0),R=Object.values(le).filter(b=>!k[j].metadata.supportLinePathType.includes(b)),z=Object.values(te).filter(b=>!k[b].metadata.supportLinePathType.includes(i)),O=()=>{f&&(ge(a.current,n,f),l(a.current.getEdgeAttribute(n,"type")),o())},ne=()=>{E&&(me(a.current,n,E,t),v(a.current.getEdgeAttribute(n,"style")),o())},_=b=>{b&&(f?(O(),m(void 0)):E&&(ne(),W(void 0))),g(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(I,{label:s("panel.details.info.linePathType"),minW:"276",children:e.jsx(q,{options:p,disabledOptions:R,defaultValue:i,value:i,onChange:({target:{value:b}})=>{m(b),g(!0)}})}),e.jsx(I,{label:s("panel.details.info.lineStyleType"),minW:"276",children:e.jsx(q,{options:x,disabledOptions:z,defaultValue:j,value:j,onChange:({target:{value:b}})=>{W(b),g(!0)}})}),e.jsx(J,{isOpen:h,leastDestructiveRef:u,onClose:()=>_(!1),children:e.jsx(K,{children:e.jsxs(Q,{children:[e.jsx(X,{children:s("warning")}),e.jsx(Y,{children:s("panel.details.changeLineTypeContent")}),e.jsxs(ee,{children:[e.jsx(A,{ref:u,onClick:()=>_(!1),children:s("cancel")}),e.jsx(A,{ml:"2",colorScheme:"red",onClick:()=>_(!0),children:s("panel.details.changeType")})]})]})})})]})}function je(){const{t:s}=N(),r=C(),o=d.useCallback(()=>{r(w()),r(y(n.current.export()))},[r,w,y]),{selected:c}=T(x=>x.runtime),[t]=c,n=d.useRef(window.graph),[a,h]=d.useState(!1),g=d.useRef(null),[u,p]=d.useState(void 0),i=n.current.getNodeAttribute(t,"type"),l=Object.fromEntries(Object.entries(H).map(([x,j])=>[x,s(j.metadata.displayName).toString()])),f=()=>{u&&(fe(n.current,t,u),o())},m=x=>{x&&f(),p(void 0),h(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(I,{label:s("panel.details.info.stationType"),minW:"276",children:e.jsx(q,{options:l,disabledOptions:[i],value:i,onChange:({target:{value:x}})=>{p(x),h(!0)}})}),e.jsx(J,{isOpen:a,leastDestructiveRef:g,onClose:()=>m(!1),children:e.jsx(K,{children:e.jsxs(Q,{children:[e.jsx(X,{children:s("warning")}),e.jsx(Y,{children:s("panel.details.changeStationTypeContent")}),e.jsxs(ee,{children:[e.jsx(A,{ref:g,onClick:()=>m(!1),children:s("cancel")}),e.jsx(A,{ml:"2",colorScheme:"red",onClick:()=>m(!0),children:s("panel.details.changeType")})]})]})})})]})}function Se(){const{t:s}=N(),r=C(),o=d.useCallback(()=>{r(w()),r(S()),r(y(n.current.export()))},[r,S,y]),{selected:c}=T(g=>g.runtime),[t]=c,n=d.useRef(window.graph),a=g=>{const u=Math.min(Math.max(g,-5),5);n.current.hasNode(t)&&n.current.setNodeAttribute(t,"zIndex",u),n.current.hasEdge(t)&&n.current.setEdgeAttribute(t,"zIndex",u),o()},h=[];return c.size===0||(c.size===1?(h.push({type:"input",label:s("panel.details.info.id"),value:t,minW:276}),h.push({type:"select",label:s("panel.details.info.zIndex"),value:t?n.current.hasNode(t)?n.current.getNodeAttribute(t,"zIndex"):n.current.hasEdge(t)?n.current.getEdgeAttribute(t,"zIndex"):0:0,options:Object.fromEntries(Array.from({length:11},(g,u)=>[u-5,(u-5).toString()])),onChange:g=>a(Number(g))})):c.size>1&&h.push({type:"input",label:s("panel.details.info.type"),value:"multiple selection",minW:276})),e.jsxs(P,{p:1,children:[e.jsx(L,{as:"h5",size:"sm",children:s("panel.details.info.title")}),e.jsx(F,{fields:h,minW:130}),c.size===1&&t.startsWith("stn")&&n.current.hasNode(t)&&n.current.getNodeAttribute(t,"type")in H&&e.jsx(je,{}),c.size===1&&t.startsWith("line")&&n.current.hasEdge(t)&&n.current.getEdgeAttribute(t,"type")in D&&n.current.getEdgeAttribute(t,"style")in k&&e.jsx(be,{}),c.size>1&&e.jsx(ye,{})]})}function we(){const{t:s}=N(),r=C(),{selected:o}=T(j=>j.runtime),[c]=o,t=d.useRef(window.graph),[n,a]=d.useState("undefined"),[h,g]=d.useState("undefined"),[u,p]=d.useState("undefined"),[i,l]=d.useState("undefined");d.useEffect(()=>{var j,v,E,W;if(c!=null&&c.startsWith("line")){const[R,z]=t.current.extremities(c);if(a(R),g(z),R.startsWith("stn")){const O=t.current.getNodeAttribute(R,"type");p((v=(j=t.current.getNodeAttribute(R,O))==null?void 0:j.names.at(0))!=null?v:"undefined")}if(z.startsWith("stn")){const O=t.current.getNodeAttribute(z,"type");l((W=(E=t.current.getNodeAttribute(z,O))==null?void 0:E.names.at(0))!=null?W:"undefined")}}},[o]);const f=G(()=>{r(M()),r(V(n))}),m=G(()=>{r(M()),r(V(h))}),x=[{type:"custom",label:s("panel.details.lineExtremities.source"),component:e.jsx(A,{flex:1,size:"sm",variant:"link",onClick:f,children:n}),minW:"full"},{type:"input",label:s("panel.details.lineExtremities.sourceName"),value:u,minW:"full"},{type:"custom",label:s("panel.details.lineExtremities.target"),component:e.jsx(A,{flex:1,size:"sm",variant:"link",onClick:m,children:h}),minW:"full"},{type:"input",label:s("panel.details.lineExtremities.targetName"),value:i,minW:"full"}];return e.jsxs(P,{p:1,children:[e.jsx(L,{as:"h5",size:"sm",children:s("panel.details.lineExtremities.title")}),e.jsx(F,{fields:x,minW:130})]})}function Ae(){const{t:s}=N(),r=C(),o=d.useCallback(()=>{r(w()),r(S()),r(y(a.current.export()))},[r,w,S,y]),{selected:c,refresh:{nodes:t}}=T(p=>p.runtime),[n]=c,a=d.useRef(window.graph),[h,g]=d.useState({x:0,y:0});d.useEffect(()=>{if(n!=null&&n.startsWith("stn")||n!=null&&n.startsWith("misc_node_")){const p=a.current.getNodeAttribute(n,"x"),i=a.current.getNodeAttribute(n,"y");g({x:p,y:i})}},[t,c]);const u=[{type:"input",label:s("panel.details.nodePosition.pos.x"),value:h.x.toString(),validator:p=>!Number.isNaN(p),onChange:p=>{a.current.mergeNodeAttributes(n,{x:Number(p)}),o()}},{type:"input",label:s("panel.details.nodePosition.pos.y"),value:h.y.toString(),validator:p=>!Number.isNaN(p),onChange:p=>{a.current.mergeNodeAttributes(n,{y:Number(p)}),o()}}];return e.jsxs(P,{p:1,children:[e.jsx(L,{as:"h5",size:"sm",children:s("panel.details.nodePosition.title")}),e.jsx(F,{fields:u,minW:130})]})}const Z={...H,...xe},Ne=()=>{var g;const s=C(),{selected:r}=T(u=>u.runtime),{t:o}=N(),[c]=r,t=window.graph.getNodeAttribute(c,"type"),n=t in Z&&Z[t].attrsComponent,a=(g=window.graph.getNodeAttribute(c,t))!=null?g:{},h=(u,p)=>{const i=window.graph.getNodeAttribute(u,"type");window.graph.mergeNodeAttributes(u,{[i]:p}),s(w()),s(y(window.graph.export()))};return n?e.jsx(n,{id:c,attrs:a,handleAttrsUpdate:h}):e.jsx(U,{fontSize:"xs",m:"var(--chakra-space-1)",children:o("panel.details.unknown.error",{category:o("panel.details.unknown.node")})})},Ce=()=>{var l,f;const s=C(),{selected:r}=T(m=>m.runtime),{t:o}=N(),[c]=r,t=window.graph.getEdgeAttribute(c,"type"),n=(l=window.graph.getEdgeAttribute(c,t))!=null?l:{},a=t in D&&D[t].attrsComponent,h=window.graph.getEdgeAttribute(c,"style"),g=(f=window.graph.getEdgeAttribute(c,h))!=null?f:{},u=h in k&&k[h].attrsComponent,p=(m,x)=>{window.graph.mergeEdgeAttributes(m,{[t]:x}),s(S()),s(y(window.graph.export()))},i=(m,x)=>{window.graph.mergeEdgeAttributes(m,{[h]:x}),s(S()),s(y(window.graph.export()))};return e.jsxs(e.Fragment,{children:[a?e.jsx(a,{id:c,attrs:n,handleAttrsUpdate:p}):e.jsx(U,{fontSize:"xs",m:"var(--chakra-space-1)",children:o("panel.details.unknown.error",{category:o("panel.details.unknown.linePath")})}),u?e.jsx(u,{id:c,attrs:g,handleAttrsUpdate:i}):e.jsx(U,{fontSize:"xs",m:"var(--chakra-space-1)",children:o("panel.details.unknown.error",{category:o("panel.details.unknown.lineStyle")})})]})},Oe=()=>{const{t:s}=N(),r=C(),o=d.useRef(window.graph),c=d.useCallback(()=>{r(w()),r(S()),r(y(o.current.export()))},[r,w,S,y]),{selected:t,mode:n}=T(i=>i.runtime),[a]=t,h=()=>r(M()),g=i=>{const l=structuredClone(o.current.getNodeAttributes(i));l.x+=50,l.y+=50;const f=i.startsWith("stn")?"stn_".concat($(10)):"misc_node_".concat($(10));o.current.addNode(f,l),r(w()),r(y(o.current.export()))},u=i=>{const l=he(o.current,i);navigator.clipboard.writeText(l)},p=i=>{r(M()),i.forEach(l=>{o.current.hasNode(l)?o.current.dropNode(l):o.current.hasEdge(l)&&o.current.dropEdge(l)}),c()};return e.jsxs(ce,{isOpen:t.size>0&&!n.startsWith("line"),width:300,header:"Dummy header",alwaysOverlay:!0,children:[e.jsx(de,{onClose:h,children:s("panel.details.header")}),e.jsxs(ue,{children:[e.jsx(Se,{}),t.size===1&&o.current.hasNode(a)&&e.jsx(Ae,{}),t.size===1&&o.current.hasEdge(a)&&e.jsx(we,{}),t.size===1&&e.jsxs(P,{p:1,children:[e.jsx(L,{as:"h5",size:"sm",children:s("panel.details.specificAttrsTitle")}),window.graph.hasNode(a)&&e.jsx(Ne,{}),window.graph.hasEdge(a)&&e.jsx(Ce,{})]})]}),e.jsx(pe,{children:e.jsxs(ae,{children:[t.size===1&&o.current.hasNode([...t].at(0))&&e.jsx(A,{size:"sm",variant:"outline",onClick:()=>g([...t].at(0)),children:s("panel.details.footer.duplicate")}),e.jsx(A,{size:"sm",variant:"outline",onClick:()=>u(t),children:s("panel.details.footer.copy")}),e.jsx(A,{size:"sm",variant:"outline",onClick:()=>p(t),children:s("panel.details.footer.remove")})]})})]})};export{Oe as default};
