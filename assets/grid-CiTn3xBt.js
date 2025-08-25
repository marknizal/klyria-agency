import{d as a,e as i,j as o}from"./index-De2A7KPy.js";const p=i.div`
  width: 100%;
  display: grid;
  align-items: start;
  gap: ${t=>t.$gap||"0.8rem"};
  grid-template-columns: repeat(${t=>t.$columns}, 1fr);

  &.asymmetric {
    grid-template-columns: 2fr 1fr;
  }

  ${a.tablet} {
    grid-template-columns: repeat(var(--columns-tablet, 2), 1fr);

    &.asymmetric {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  ${a.mobile} {
    grid-template-columns: repeat(var(--columns-mobile, 1), 1fr);

    &.asymmetric {
      grid-template-columns: repeat(1, 1fr);
    }

    &.small-gap {
      gap: 0.5rem;
    }
  }
`,c=({children:t,columns:l={},gap:m,className:r,style:s})=>{const e={mobile:1,tablet:2,default:2,...l};return o.jsx(p,{$columns:e.default,$gap:m,style:{"--columns-mobile":e.mobile,"--columns-tablet":e.tablet,...s},className:r,children:t})};export{c as G};
