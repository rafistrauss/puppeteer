/*! For license information please see 8ca6270f.472e14ae.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20306],{3192:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"guides/cookies","title":"Cookies","description":"Puppeteer offers methods to get, set and delete cookies ahead of time by","source":"@site/versioned_docs/version-23.10.3/guides/cookies.md","sourceDirName":"guides","slug":"/guides/cookies","permalink":"/guides/cookies","draft":false,"unlisted":false,"tags":[],"version":"23.10.3","frontMatter":{},"sidebar":"docs","previous":{"title":"Chrome Extensions","permalink":"/guides/chrome-extensions"},"next":{"title":"Files","permalink":"/guides/files"}}');var s=n(74848),r=n(28453);const i={},a="Cookies",c={},l=[{value:"Getting cookies",id:"getting-cookies",level:2},{value:"Setting cookies",id:"setting-cookies",level:2},{value:"Deleting cookies",id:"deleting-cookies",level:2}];function p(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"cookies",children:"Cookies"})}),"\n",(0,s.jsx)(o.p,{children:"Puppeteer offers methods to get, set and delete cookies ahead of time by\nmanipulating browser storage directly. This is useful if you need to\nstore and restore specific cookies for your tests."}),"\n",(0,s.jsx)(o.h2,{id:"getting-cookies",children:"Getting cookies"}),"\n",(0,s.jsxs)(o.p,{children:["The following example demonstrates how to get cookies available in the\nbrowser's default\n",(0,s.jsx)(o.a,{href:"https://pptr.dev/api/puppeteer.browsercontext/",children:"BrowserContext"}),"."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch();\n\nconst page = await browser.newPage();\n\nawait page.goto('https://example.com');\n\n// In this example, we set a cookie using script evaluation.\n// Cookies can be set by the page/server in various ways.\nawait page.evaluate(() => {\n  document.cookie = 'myCookie = MyCookieValue';\n});\n\nconsole.log(await browser.cookies()); // print available cookies.\n"})}),"\n",(0,s.jsx)(o.h2,{id:"setting-cookies",children:"Setting cookies"}),"\n",(0,s.jsx)(o.p,{children:"Puppeteer can also write cookies directly into the browser's storage:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch();\n\n// Sets two cookies for the localhost domain.\nawait browser.setCookie(\n  {\n    name: 'cookie1',\n    value: '1',\n    domain: 'localhost',\n    path: '/',\n    sameParty: false,\n    expires: -1,\n    httpOnly: false,\n    secure: false,\n    sourceScheme: 'NonSecure',\n  },\n  {\n    name: 'cookie2',\n    value: '2',\n    domain: 'localhost',\n    path: '/',\n    sameParty: false,\n    expires: -1,\n    httpOnly: false,\n    secure: false,\n    sourceScheme: 'NonSecure',\n  },\n);\n\nconsole.log(await browser.cookies()); // print available cookies.\n"})}),"\n",(0,s.jsx)(o.h2,{id:"deleting-cookies",children:"Deleting cookies"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"https://pptr.dev/api/puppeteer.browser.deletecookie",children:"Browser.deleteCookie()"})," method allows deleting cookies from storage."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch();\n\n// Deletes two cookies for the localhost domain.\nawait browser.deleteCookie(\n  {\n    name: 'cookie1',\n    value: '1',\n    domain: 'localhost',\n    path: '/',\n    sameParty: false,\n    expires: -1,\n    httpOnly: false,\n    secure: false,\n    sourceScheme: 'NonSecure',\n  },\n  {\n    name: 'cookie2',\n    value: '2',\n    domain: 'localhost',\n    path: '/',\n    sameParty: false,\n    expires: -1,\n    httpOnly: false,\n    secure: false,\n    sourceScheme: 'NonSecure',\n  },\n);\n\nconsole.log(await browser.cookies()); // print available cookies.\n"})}),"\n",(0,s.jsxs)(o.p,{children:["In addition to the ",(0,s.jsx)(o.code,{children:"Browser"})," methods operating on the default browser\ncontext, the same methods are available on the\n",(0,s.jsx)(o.a,{href:"https://pptr.dev/api/puppeteer.browsercontext",children:(0,s.jsx)(o.code,{children:"BrowserContext"})})," class."]})]})}function d(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},21020:(e,o,n)=>{var t=n(96540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,o,n){var t,r={},l=null,p=null;for(t in void 0!==n&&(l=""+n),void 0!==o.key&&(l=""+o.key),void 0!==o.ref&&(p=o.ref),o)i.call(o,t)&&!c.hasOwnProperty(t)&&(r[t]=o[t]);if(e&&e.defaultProps)for(t in o=e.defaultProps)void 0===r[t]&&(r[t]=o[t]);return{$$typeof:s,type:e,key:l,ref:p,props:r,_owner:a.current}}o.Fragment=r,o.jsx=l,o.jsxs=l},74848:(e,o,n)=>{e.exports=n(21020)},28453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>a});var t=n(96540);const s={},r=t.createContext(s);function i(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);