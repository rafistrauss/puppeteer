/*! For license information please see 9964b9b7.88a9354e.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86856],{49303:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=s(85893),t=s(11151);const i={sidebar_label:"BrowserContext.overridePermissions"},o="BrowserContext.overridePermissions() method",a={id:"api/puppeteer.browsercontext.overridepermissions",title:"BrowserContext.overridePermissions() method",description:"Grants this browser context the given permissions within the given origin.",source:"@site/versioned_docs/version-22.15.0/api/puppeteer.browsercontext.overridepermissions.md",sourceDirName:"api",slug:"/api/puppeteer.browsercontext.overridepermissions",permalink:"/api/puppeteer.browsercontext.overridepermissions",draft:!1,unlisted:!1,tags:[],version:"22.15.0",frontMatter:{sidebar_label:"BrowserContext.overridePermissions"},sidebar:"api",previous:{title:"BrowserContext.newPage",permalink:"/api/puppeteer.browsercontext.newpage"},next:{title:"BrowserContext.pages",permalink:"/api/puppeteer.browsercontext.pages"}},p={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"browsercontextoverridepermissions-method",children:"BrowserContext.overridePermissions() method"}),"\n",(0,n.jsxs)(r.p,{children:["Grants this ",(0,n.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"})," the given ",(0,n.jsx)(r.code,{children:"permissions"})," within the given ",(0,n.jsx)(r.code,{children:"origin"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class BrowserContext {\n  abstract overridePermissions(\n    origin: string,\n    permissions: Permission[]\n  ): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"origin"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"string"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:['The origin to grant permissions to, e.g. "',(0,n.jsx)(r.a,{href:"https://example.com",children:"https://example.com"}),'".']})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"permissions"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/puppeteer.permission",children:"Permission"}),"[]"]})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"An array of permissions to grant. All permissions that are not listed here will be automatically denied."})})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(r.p,{children:["Overriding permissions in the ",(0,n.jsx)(r.a,{href:"/api/puppeteer.browser.defaultbrowsercontext",children:"default browser context"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"const context = browser.defaultBrowserContext();\nawait context.overridePermissions('https://html5demos.com', ['geolocation']);\n"})})]})}function l(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},75251:(e,r,s)=>{var n=s(67294),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,s){var n,i={},c=null,d=null;for(n in void 0!==s&&(c=""+s),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(d=r.ref),r)o.call(r,n)&&!p.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:t,type:e,key:c,ref:d,props:i,_owner:a.current}}r.Fragment=i,r.jsx=c,r.jsxs=c},85893:(e,r,s)=>{e.exports=s(75251)},11151:(e,r,s)=>{s.d(r,{Z:()=>a,a:()=>o});var n=s(67294);const t={},i=n.createContext(t);function o(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);