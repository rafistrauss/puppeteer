/*! For license information please see 5e7e702b.3fa55c49.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5780],{25343:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"api/puppeteer.page.waitfornavigation","title":"Page.waitForNavigation() method","description":"Waits for the page to navigate to a new URL or to reload. It is useful when you run code that will indirectly cause the page to navigate.","source":"@site/versioned_docs/version-23.10.4/api/puppeteer.page.waitfornavigation.md","sourceDirName":"api","slug":"/api/puppeteer.page.waitfornavigation","permalink":"/api/puppeteer.page.waitfornavigation","draft":false,"unlisted":false,"tags":[],"version":"23.10.4","frontMatter":{"sidebar_label":"Page.waitForNavigation"},"sidebar":"api","previous":{"title":"Page.waitForFunction","permalink":"/api/puppeteer.page.waitforfunction"},"next":{"title":"Page.waitForNetworkIdle","permalink":"/api/puppeteer.page.waitfornetworkidle"}}');var r=i(74848),a=i(28453);const o={sidebar_label:"Page.waitForNavigation"},s="Page.waitForNavigation() method",l={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"pagewaitfornavigation-method",children:"Page.waitForNavigation() method"})}),"\n",(0,r.jsx)(t.p,{children:"Waits for the page to navigate to a new URL or to reload. It is useful when you run code that will indirectly cause the page to navigate."}),"\n",(0,r.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  waitForNavigation(options?: WaitForOptions): Promise<HTTPResponse | null>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"options"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.waitforoptions",children:"WaitForOptions"})})}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Navigation parameters which might have the following properties:"]})})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(t.p,{children:["Promise<",(0,r.jsx)(t.a,{href:"/api/puppeteer.httpresponse",children:"HTTPResponse"})," | null>"]}),"\n",(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.code,{children:"Promise"})," which resolves to the main resource response."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["In case of multiple redirects, the navigation will resolve with the response of the last redirect. - In case of navigation to a different anchor or navigation due to History API usage, the navigation will resolve with ",(0,r.jsx)(t.code,{children:"null"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(t.p,{children:["Usage of the ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API",children:"History API"})," to change the URL is considered a navigation."]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const [response] = await Promise.all([\n  page.waitForNavigation(), // The promise resolves after navigation has finished\n  page.click('a.my-link'), // Clicking the link will indirectly cause a navigation\n]);\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},21020:(e,t,i)=>{var n=i(96540),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,i){var n,a={},p=null,c=null;for(n in void 0!==i&&(p=""+i),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,n)&&!l.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:r,type:e,key:p,ref:c,props:a,_owner:s.current}}t.Fragment=a,t.jsx=p,t.jsxs=p},74848:(e,t,i)=>{e.exports=i(21020)},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>s});var n=i(96540);const r={},a=n.createContext(r);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);