/*! For license information please see 8982e3df.755ad032.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1969],{25916:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>i,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(85893),t=r(11151);const o={},a="Headless mode",l={id:"guides/headless-modes",title:"Headless mode",description:"By default Puppeteer launches the browser in",source:"@site/../docs/guides/headless-modes.md",sourceDirName:"guides",slug:"/guides/headless-modes",permalink:"/next/guides/headless-modes",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Request Interception",permalink:"/next/guides/network-interception"},next:{title:"Screenshots",permalink:"/next/guides/screenshots"}},c={},d=[];function h(e){const s={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"headless-mode",children:"Headless mode"})}),"\n",(0,n.jsxs)(s.p,{children:["By default Puppeteer launches the browser in\n",(0,n.jsx)(s.a,{href:"https://developer.chrome.com/docs/chromium/new-headless/",children:"the Headless mode"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"const browser = await puppeteer.launch();\n// Equivalent to\nconst browser = await puppeteer.launch({headless: true});\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Before v22, Puppeteer launched the ",(0,n.jsx)(s.a,{href:"https://developer.chrome.com/docs/chromium/new-headless/",children:"old Headless mode"})," by default.\nThe old headless mode is now known as\n",(0,n.jsx)(s.a,{href:"https://developer.chrome.com/blog/chrome-headless-shell",children:(0,n.jsx)(s.code,{children:"chrome-headless-shell"})}),"\nand ships as a separate binary. ",(0,n.jsx)(s.code,{children:"chrome-headless-shell"})," does not match the\nbehavior of the regular Chrome completely but it is currently more performant\nfor automation tasks where the complete Chrome feature set is not needed. If the performance\nis more important for your use case, switch to ",(0,n.jsx)(s.code,{children:"chrome-headless-shell"})," as following:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"const browser = await puppeteer.launch({headless: 'shell'});\n"})}),"\n",(0,n.jsxs)(s.p,{children:['To launch a "headful" version of Chrome, set the\n',(0,n.jsx)(s.a,{href:"https://pptr.dev/api/puppeteer.browserlaunchargumentoptions",children:(0,n.jsx)(s.code,{children:"headless"})})," to ",(0,n.jsx)(s.code,{children:"false"}),"\noption when launching a browser:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"const browser = await puppeteer.launch({headless: false});\n"})})]})}function i(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},75251:(e,s,r)=>{var n=r(67294),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,r){var n,o={},d=null,h=null;for(n in void 0!==r&&(d=""+r),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(h=s.ref),s)a.call(s,n)&&!c.hasOwnProperty(n)&&(o[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===o[n]&&(o[n]=s[n]);return{$$typeof:t,type:e,key:d,ref:h,props:o,_owner:l.current}}s.Fragment=o,s.jsx=d,s.jsxs=d},85893:(e,s,r)=>{e.exports=r(75251)},11151:(e,s,r)=>{r.d(s,{Z:()=>l,a:()=>a});var n=r(67294);const t={},o=n.createContext(t);function a(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);