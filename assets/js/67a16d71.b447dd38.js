/*! For license information please see 67a16d71.b447dd38.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77556],{37454:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var a=t(85893),n=t(11151);const o={sidebar_label:"Locator.race"},s="Locator.race() method",c={id:"api/puppeteer.locator.race",title:"Locator.race() method",description:"Creates a race between multiple locators trying to locate elements in parallel but ensures that only a single element receives the action.",source:"@site/versioned_docs/version-23.1.0/api/puppeteer.locator.race.md",sourceDirName:"api",slug:"/api/puppeteer.locator.race",permalink:"/api/puppeteer.locator.race",draft:!1,unlisted:!1,tags:[],version:"23.1.0",frontMatter:{sidebar_label:"Locator.race"},sidebar:"api",previous:{title:"Locator.map",permalink:"/api/puppeteer.locator.map"},next:{title:"Locator.scroll",permalink:"/api/puppeteer.locator.scroll"}},l={},i=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"locatorrace-method",children:"Locator.race() method"})}),"\n",(0,a.jsx)(r.p,{children:"Creates a race between multiple locators trying to locate elements in parallel but ensures that only a single element receives the action."}),"\n",(0,a.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-typescript",children:"class Locator {\n  static race<Locators extends readonly unknown[] | []>(\n    locators: Locators\n  ): Locator<AwaitedLocator<Locators[number]>>;\n}\n"})}),"\n",(0,a.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:(0,a.jsx)(r.p,{children:"Parameter"})}),(0,a.jsx)("th",{children:(0,a.jsx)(r.p,{children:"Type"})}),(0,a.jsx)("th",{children:(0,a.jsx)(r.p,{children:"Description"})})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(r.p,{children:"locators"})}),(0,a.jsx)("td",{children:(0,a.jsx)(r.p,{children:"Locators"})}),(0,a.jsx)("td",{})]})})]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/api/puppeteer.locator",children:"Locator"}),"<",(0,a.jsx)(r.a,{href:"/api/puppeteer.awaitedlocator",children:"AwaitedLocator"}),"<Locators[number]>>"]})]})}function d(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},75251:(e,r,t)=>{var a=t(67294),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var a,o={},i=null,p=null;for(a in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(p=r.ref),r)s.call(r,a)&&!l.hasOwnProperty(a)&&(o[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps)void 0===o[a]&&(o[a]=r[a]);return{$$typeof:n,type:e,key:i,ref:p,props:o,_owner:c.current}}r.Fragment=o,r.jsx=i,r.jsxs=i},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>c,a:()=>s});var a=t(67294);const n={},o=a.createContext(n);function s(e){const r=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(o.Provider,{value:r},e.children)}}}]);