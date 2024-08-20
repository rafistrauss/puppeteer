/*! For license information please see 0b890aa4.e48be014.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29479],{34254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(85893),a=n(11151);const s={sidebar_label:"Page.emulate"},i="Page.emulate() method",o={id:"api/puppeteer.page.emulate",title:"Page.emulate() method",description:"Emulates a given device's metrics and user agent.",source:"@site/../docs/api/puppeteer.page.emulate.md",sourceDirName:"api",slug:"/api/puppeteer.page.emulate",permalink:"/next/api/puppeteer.page.emulate",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Page.emulate"},sidebar:"api",previous:{title:"Page.deleteCookie",permalink:"/next/api/puppeteer.page.deletecookie"},next:{title:"Page.emulateCPUThrottling",permalink:"/next/api/puppeteer.page.emulatecputhrottling"}},p={},l=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"pageemulate-method",children:"Page.emulate() method"})}),"\n",(0,r.jsx)(t.p,{children:"Emulates a given device's metrics and user agent."}),"\n",(0,r.jsxs)(t.p,{children:["To aid emulation, Puppeteer provides a list of known devices that can be via ",(0,r.jsx)(t.a,{href:"/next/api/puppeteer.knowndevices",children:"KnownDevices"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  emulate(device: Device): Promise<void>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"device"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/next/api/puppeteer.device",children:"Device"})})}),(0,r.jsx)("td",{})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(t.p,{children:["This method is a shortcut for calling two methods: ",(0,r.jsx)(t.a,{href:"/next/api/puppeteer.page.setuseragent",children:"Page.setUserAgent()"})," and ",(0,r.jsx)(t.a,{href:"/next/api/puppeteer.page.setviewport",children:"Page.setViewport()"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"This method will resize the page. A lot of websites don't expect phones to change size, so you should emulate before navigating to the page."}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import {KnownDevices} from 'puppeteer';\nconst iPhone = KnownDevices['iPhone 15 Pro'];\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.emulate(iPhone);\n  await page.goto('https://www.google.com');\n  // other actions...\n  await browser.close();\n})();\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},75251:(e,t,n)=>{var r=n(67294),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,c=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!p.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:a,type:e,key:l,ref:c,props:s,_owner:o.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var r=n(67294);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);