/*! For license information please see d0be0422.e9e36bac.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97364],{8609:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});const o=JSON.parse('{"id":"api/puppeteer.page.setcookie","title":"Page.setCookie() method","description":"Warning: This API is now obsolete.","source":"@site/versioned_docs/version-23.10.3/api/puppeteer.page.setcookie.md","sourceDirName":"api","slug":"/api/puppeteer.page.setcookie","permalink":"/api/puppeteer.page.setcookie","draft":false,"unlisted":false,"tags":[],"version":"23.10.3","frontMatter":{"sidebar_label":"Page.setCookie"},"sidebar":"api","previous":{"title":"Page.setContent","permalink":"/api/puppeteer.page.setcontent"},"next":{"title":"Page.setDefaultNavigationTimeout","permalink":"/api/puppeteer.page.setdefaultnavigationtimeout"}}');var s=r(74848),n=r(28453);const i={sidebar_label:"Page.setCookie"},a="Page.setCookie() method",c={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"pagesetcookie-method",children:"Page.setCookie() method"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,s.jsxs)(t.p,{children:["Page-level cookie API is deprecated. Use ",(0,s.jsx)(t.a,{href:"/api/puppeteer.browser.setcookie",children:"Browser.setCookie()"})," or ",(0,s.jsx)(t.a,{href:"/api/puppeteer.browsercontext.setcookie",children:"BrowserContext.setCookie()"})," instead."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract setCookie(...cookies: CookieParam[]): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Description"})})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"cookies"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/api/puppeteer.cookieparam",children:"CookieParam"}),"[]"]})}),(0,s.jsx)("td",{})]})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"await page.setCookie(cookieObject1, cookieObject2);\n"})})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},21020:(e,t,r)=>{var o=r(96540),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,r){var o,n={},p=null,l=null;for(o in void 0!==r&&(p=""+r),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,o)&&!c.hasOwnProperty(o)&&(n[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===n[o]&&(n[o]=t[o]);return{$$typeof:s,type:e,key:p,ref:l,props:n,_owner:a.current}}t.Fragment=n,t.jsx=p,t.jsxs=p},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var o=r(96540);const s={},n=o.createContext(s);function i(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);