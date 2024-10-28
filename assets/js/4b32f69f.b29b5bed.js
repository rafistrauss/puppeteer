/*! For license information please see 4b32f69f.b29b5bed.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11199],{51535:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var n=t(74848),s=t(28453);const a={sidebar_label:"Mouse.dragEnter"},i="Mouse.dragEnter() method",d={id:"api/puppeteer.mouse.dragenter",title:"Mouse.dragEnter() method",description:"Dispatches a dragenter event.",source:"@site/versioned_docs/version-23.6.1/api/puppeteer.mouse.dragenter.md",sourceDirName:"api",slug:"/api/puppeteer.mouse.dragenter",permalink:"/api/puppeteer.mouse.dragenter",draft:!1,unlisted:!1,tags:[],version:"23.6.1",frontMatter:{sidebar_label:"Mouse.dragEnter"},sidebar:"api",previous:{title:"Mouse.dragAndDrop",permalink:"/api/puppeteer.mouse.draganddrop"},next:{title:"Mouse.dragOver",permalink:"/api/puppeteer.mouse.dragover"}},o={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"mousedragenter-method",children:"Mouse.dragEnter() method"})}),"\n",(0,n.jsxs)(r.p,{children:["Dispatches a ",(0,n.jsx)(r.code,{children:"dragenter"})," event."]}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Mouse {\n  abstract dragEnter(\n    target: Point,\n    data: Protocol.Input.DragData,\n  ): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"target"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/api/puppeteer.point",children:"Point"})})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["point for emitting ",(0,n.jsx)(r.code,{children:"dragenter"})," event"]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"data"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Protocol.Input.DragData"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"drag data containing items and operations mask"})})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<void>"})]})}function l(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},21020:(e,r,t)=>{var n=t(96540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,a={},c=null,p=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(p=r.ref),r)i.call(r,n)&&!o.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:s,type:e,key:c,ref:p,props:a,_owner:d.current}}r.Fragment=a,r.jsx=c,r.jsxs=c},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>d});var n=t(96540);const s={},a=n.createContext(s);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);