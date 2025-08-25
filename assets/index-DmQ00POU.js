import{a as i,e as s,C as a,b as o,I as r,M as n,j as e,B as l,P as d}from"./index-Dl_gSl7c.js";import{f as m,g as c}from"./index-BM3K6D4D.js";import{G as p}from"./grid-C4QAUuFG.js";import{S as g}from"./section-title-Dlsd7_Hc.js";const h="/assets/1-BhyszN8G.webp",u="/assets/2-DygkxG3q.webp",f="/assets/3-F1azD2wM.webp",b=[{id:1,title:"E-Commerce Website Redesign",description:"We revamped the UI/UX for a fashion brand’s online store, improving conversions by 35%.",date:"14 April 2025",category:"Web Design",thumbnail:h},{id:2,title:"AI-Powered Chatbot Platform",description:"Built a scalable chatbot solution using NLP, helping customer support teams reduce response time by 60%.",date:"02 May 2025",category:"AI / Coding",thumbnail:u},{id:3,title:"Healthcare Mobile App",description:"Developed a cross-platform app for booking doctor appointments and tracking prescriptions.",date:"20 May 2025",category:"Mobile Development",thumbnail:f}],x=s(a)`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: 4rem 1rem;
`,y=s.div`
  display: flex;
  flex-direction: column;
  background-color: ${i.white};
  border-radius: ${o.base};
  overflow: hidden;
  height: 100%;

  &:hover img {
    transform: scale(1.05);
  }
`,j=s(r)`
  transition: all 0.25s ease-in-out;
`,v=s(n)`
  flex: 1;
  padding: 1.5rem;
  gap: 0.5rem;
`,C={fontSize:"1.25rem",fontWeight:"600",height:"auto",padding:"0",justifyContent:"start"},w={lineHeight:"1.25rem",marginBottom:"1.5rem",color:i.grey30},I={display:"flex",alignItems:"center",gap:"0.5rem",marginTop:"auto"},D=()=>e.jsxs(x,{children:[e.jsx(g,{title:"Case Studies",subTitle:"Check out some of our awesome projects with creative ideas and great design."}),e.jsx(p,{columns:{default:3},gap:"1.5rem",children:b.map(t=>e.jsxs(y,{children:[e.jsx(j,{alt:t.title,src:t.thumbnail,$ratio:"4 / 3"}),e.jsxs(v,{children:[e.jsx(l,{style:C,type:"link",children:t.title}),e.jsx(d,{$size:"0.9rem",style:w,children:t.description}),e.jsxs("small",{style:I,children:[e.jsx(m,{})," ",t.date,e.jsx(c,{})," ",t.category]})]})]},t.id))})]});export{D as default};
