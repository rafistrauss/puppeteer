/*! For license information please see 99b76fb0.25969e42.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72934],{56481:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=t(85893),i=t(11151);const s={sidebar_label:"ElementHandle.isIntersectingViewport"},l="ElementHandle.isIntersectingViewport() method",o={id:"api/puppeteer.elementhandle.isintersectingviewport",title:"ElementHandle.isIntersectingViewport() method",description:"Resolves to true if the element is visible in the current viewport. If an element is an SVG, we check if the svg owner element is in the viewport instead. See https://crbug.com/963246.",source:"@site/versioned_docs/version-23.1.0/api/puppeteer.elementhandle.isintersectingviewport.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.isintersectingviewport",permalink:"/api/puppeteer.elementhandle.isintersectingviewport",draft:!1,unlisted:!1,tags:[],version:"23.1.0",frontMatter:{sidebar_label:"ElementHandle.isIntersectingViewport"},sidebar:"api",previous:{title:"ElementHandle.isHidden",permalink:"/api/puppeteer.elementhandle.ishidden"},next:{title:"ElementHandle.isVisible",permalink:"/api/puppeteer.elementhandle.isvisible"}},a={},d=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"elementhandleisintersectingviewport-method",children:"ElementHandle.isIntersectingViewport() method"})}),"\n",(0,r.jsxs)(n.p,{children:["Resolves to true if the element is visible in the current viewport. If an element is an SVG, we check if the svg owner element is in the viewport instead. See ",(0,r.jsx)(n.a,{href:"https://crbug.com/963246",children:"https://crbug.com/963246"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class ElementHandle {\n  isIntersectingViewport(\n    this: ElementHandle<Element>,\n    options?: {\n      threshold?: number;\n    }\n  ): Promise<boolean>;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Description"})})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"this"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<Element>"]})}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"options"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"{ threshold?: number; }"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"(Optional)"})," Threshold for the intersection between 0 (no intersection) and 1 (full intersection). Defaults to 1."]})})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(n.p,{children:"Promise<boolean>"})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},75251:(e,n,t)=>{var r=t(67294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,s={},d=null,c=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)l.call(n,r)&&!a.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:i,type:e,key:d,ref:c,props:s,_owner:o.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var r=t(67294);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);