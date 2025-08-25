import{e as i,C as c,b as s,d,a as l,j as e,B as p}from"./index-Dl_gSl7c.js";import{L as u,a as m,b as h,c as g,d as f}from"./index-BM3K6D4D.js";import{G as x}from"./grid-C4QAUuFG.js";import{S as y}from"./section-title-Dlsd7_Hc.js";const b=[{id:"support",title:"24/7 Support",description:"Our support team is available 24/7 to assist with technical issues, account inquiries, or urgent troubleshooting.",icon:u,color:"#007bff"},{id:"payments",title:"Secure Payments",description:"We use industry-leading encryption and fraud prevention tools to ensure every transaction is safe, fast, and protected.",icon:m,color:"#28a745"},{id:"updates",title:"Daily Updates",description:"Stay informed with real-time updates and reports so you never miss important changes, progress, or improvements in your projects.",icon:h,color:"#ffc107"},{id:"research",title:"Market Research",description:"We deliver clear market analysis and insights to help you track industry trends, customer behavior, and new business opportunities.",icon:g,color:"#dc3545"}],j=i(c)`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  padding: 5rem 1rem;
`,v=i.article`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 1rem;
  box-shadow: rgba(99, 99, 99, 0.15) 0px 2px 8px;
  padding: 2rem;
  border-radius: ${s.base};
  height: 100%;

  ${d.mobile} {
    padding: 2rem 1.5rem;
  }
`,k=i.div`
  font-size: 2rem;
  padding: 0.65rem;
  border-radius: calc(${s.base} + 0.15rem);
  background-color: ${({$bg:r})=>r};
  color: ${l.white};
`,L={marginTop:"auto",padding:"0",height:"auto"},W=()=>e.jsxs(j,{children:[e.jsx(y,{title:"What we do?",subTitle:"The services we offer are specifically designed to meet your needs."}),e.jsx(x,{columns:{default:4},gap:"1.5rem",children:b.map(({id:r,title:t,description:o,icon:a,color:n})=>e.jsxs(v,{children:[e.jsx(k,{$bg:n,children:e.jsx(a,{})}),e.jsx("h2",{children:t}),e.jsx("p",{children:o}),e.jsx(p,{icon:e.jsx(f,{}),type:"link",style:L,children:"Learn More"})]},r))})]});export{W as default};
