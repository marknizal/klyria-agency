import{s as D,h as H,r as _,E as W,c as J,a as R,b as X,d as P,e as T,C as B,I as L,j as p,B as A}from"./index-9k9YoMdv.js";var O={exports:{}},r={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I;function U(){if(I)return r;I=1;var t=typeof Symbol=="function"&&Symbol.for,s=t?Symbol.for("react.element"):60103,n=t?Symbol.for("react.portal"):60106,l=t?Symbol.for("react.fragment"):60107,f=t?Symbol.for("react.strict_mode"):60108,i=t?Symbol.for("react.profiler"):60114,a=t?Symbol.for("react.provider"):60109,g=t?Symbol.for("react.context"):60110,v=t?Symbol.for("react.async_mode"):60111,y=t?Symbol.for("react.concurrent_mode"):60111,b=t?Symbol.for("react.forward_ref"):60112,h=t?Symbol.for("react.suspense"):60113,w=t?Symbol.for("react.suspense_list"):60120,d=t?Symbol.for("react.memo"):60115,c=t?Symbol.for("react.lazy"):60116,m=t?Symbol.for("react.block"):60121,$=t?Symbol.for("react.fundamental"):60117,x=t?Symbol.for("react.responder"):60118,S=t?Symbol.for("react.scope"):60119;function o(e){if(typeof e=="object"&&e!==null){var u=e.$$typeof;switch(u){case s:switch(e=e.type,e){case v:case y:case l:case i:case f:case h:return e;default:switch(e=e&&e.$$typeof,e){case g:case b:case c:case d:case a:return e;default:return u}}case n:return u}}}function j(e){return o(e)===y}return r.AsyncMode=v,r.ConcurrentMode=y,r.ContextConsumer=g,r.ContextProvider=a,r.Element=s,r.ForwardRef=b,r.Fragment=l,r.Lazy=c,r.Memo=d,r.Portal=n,r.Profiler=i,r.StrictMode=f,r.Suspense=h,r.isAsyncMode=function(e){return j(e)||o(e)===v},r.isConcurrentMode=j,r.isContextConsumer=function(e){return o(e)===g},r.isContextProvider=function(e){return o(e)===a},r.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===s},r.isForwardRef=function(e){return o(e)===b},r.isFragment=function(e){return o(e)===l},r.isLazy=function(e){return o(e)===c},r.isMemo=function(e){return o(e)===d},r.isPortal=function(e){return o(e)===n},r.isProfiler=function(e){return o(e)===i},r.isStrictMode=function(e){return o(e)===f},r.isSuspense=function(e){return o(e)===h},r.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===l||e===y||e===i||e===f||e===h||e===w||typeof e=="object"&&e!==null&&(e.$$typeof===c||e.$$typeof===d||e.$$typeof===a||e.$$typeof===g||e.$$typeof===b||e.$$typeof===$||e.$$typeof===x||e.$$typeof===S||e.$$typeof===m)},r.typeOf=o,r}var N;function K(){return N||(N=1,O.exports=U()),O.exports}var E,C;function Q(){if(C)return E;C=1;var t=K(),s={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},f={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};i[t.ForwardRef]=l,i[t.Memo]=f;function a(c){return t.isMemo(c)?f:i[c.$$typeof]||s}var g=Object.defineProperty,v=Object.getOwnPropertyNames,y=Object.getOwnPropertySymbols,b=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,w=Object.prototype;function d(c,m,$){if(typeof m!="string"){if(w){var x=h(m);x&&x!==w&&d(c,x,$)}var S=v(m);y&&(S=S.concat(y(m)));for(var o=a(c),j=a(m),e=0;e<S.length;++e){var u=S[e];if(!n[u]&&!($&&$[u])&&!(j&&j[u])&&!(o&&o[u])){var q=b(m,u);try{g(c,u,q)}catch{}}}}return c}return E=d,E}Q();var M=function(s,n){var l=arguments;if(n==null||!H.call(n,"css"))return _.createElement.apply(void 0,l);var f=l.length,i=new Array(f);i[0]=W,i[1]=J(s,n);for(var a=2;a<f;a++)i[a]=l[a];return _.createElement.apply(null,i)};(function(t){var s;s||(s=t.JSX||(t.JSX={}))})(M||(M={}));function V(){for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];return D(s)}const z=V`
  .title {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .description {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`,Y={background:"linear-gradient(-90deg, #ffffff, #b3d8ff, #3b82f6, #7aa7d9)",WebkitBackgroundClip:"text",WebkitTextFillColor:R.transparent,backgroundClip:"text",color:R.transparent},F={borderRadius:X.lg,padding:"1.25rem 1.5rem"},G=T(B)`
  min-height: 100dvh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  justify-content: center;
  align-items: center;

  ${P.tablet} {
    gap: 1rem;
    min-height: inherit;
  }

  ${P.mobile} {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`,Z=T.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${P.desktop} {
    gap: 2rem;
  }

  .title {
    font-size: 4rem;
    line-height: 4.5rem;
    color: ${R.white};
  }

  .description {
    font-size: 1.25rem;
    line-height: 2rem;
    color: ${R.white};
  }

  ${P.tablet} {
    ${z}
  }

  ${P.mobile} {
    ${z}
  }
`,k=T.div`
  display: flex;
  gap: 0.8rem;
`,ee=T(L)`
  border-radius: 1rem 5rem 2rem;
`,re="/klyria-agency/assets/hero-CQAMR_Uc.jpg",ne=()=>p.jsxs(G,{children:[p.jsxs(Z,{children:[p.jsxs("h1",{className:"title",children:[p.jsx("span",{style:Y,children:"Crafting projects"})," specific solutions with expertise."]}),p.jsx("p",{className:"description",children:"We're a creative company that focuses on establishing long-term relationships with customers."}),p.jsxs(k,{children:[p.jsx(A,{style:F,type:"primary",children:"Explore Now"}),p.jsx(A,{style:F,children:"Contact Us"})]})]}),p.jsx(ee,{src:re,alt:"Hero",loading:"lazy"})]});export{ne as default};
