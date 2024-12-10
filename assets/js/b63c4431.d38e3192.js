/*! For license information please see b63c4431.d38e3192.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[19477],{78938:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"webdriver-bidi","title":"WebDriver BiDi support","description":"WebDriver BiDi is a new","source":"@site/versioned_docs/version-23.10.3/webdriver-bidi.md","sourceDirName":".","slug":"/webdriver-bidi","permalink":"/webdriver-bidi","draft":false,"unlisted":false,"tags":[],"version":"23.10.3","frontMatter":{},"sidebar":"docs","previous":{"title":"Links","permalink":"/guides/links"},"next":{"title":"Supported browsers","permalink":"/supported-browsers"}}');var s=n(74848),l=n(28453);const t={},d="WebDriver BiDi support",o={},c=[{value:"Automate with Chrome and Firefox",id:"automate-with-chrome-and-firefox",level:2},{value:"Get started",id:"get-started",level:2},{value:"Puppeteer features not supported over WebDriver BiDi",id:"puppeteer-features-not-supported-over-webdriver-bidi",level:2},{value:"Puppeteer features fully supported over WebDriver BiDi",id:"puppeteer-features-fully-supported-over-webdriver-bidi",level:2},{value:"See also",id:"see-also",level:2}];function a(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"webdriver-bidi-support",children:"WebDriver BiDi support"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://w3c.github.io/webdriver-bidi/",children:"WebDriver BiDi"})," is a new\ncross-browser automation protocol currently under development, aiming to\ncombine the best of both WebDriver \u201cClassic\u201d and CDP. WebDriver BiDi\nenables bi-directional communication, making it fast by default, and it\ncomes packed with low-level control."]}),"\n",(0,s.jsx)(r.h2,{id:"automate-with-chrome-and-firefox",children:"Automate with Chrome and Firefox"}),"\n",(0,s.jsxs)(r.p,{children:["Puppeteer supports WebDriver BiDi automation with Chrome and Firefox.\nWhen launching Firefox with Puppeteer, the WebDriver BiDi Protocol is\nenabled by default. When launching Chrome, CDP is still used by default\nsince not all CDP features are supported by WebDriver BiDi yet. If a\ncertain Puppeteer feature is not supported over WebDriver BiDi yet,\n",(0,s.jsx)(r.a,{href:"https://pptr.dev/api/puppeteer.unsupportedoperation/",children:(0,s.jsx)(r.code,{children:"UnsupportedOperation"})}),"\nerror is thrown. Also see the lists below on what is supported with\nWebDriver BiDi."]}),"\n",(0,s.jsx)(r.h2,{id:"get-started",children:"Get started"}),"\n",(0,s.jsx)(r.p,{children:"Below is an example of launching Firefox or Chrome with WebDriver BiDi:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\nconst firefoxBrowser = await puppeteer.launch({\n  browser: 'firefox', // WebDriver BiDi is used by default.\n});\nconst page = await firefoxBrowser.newPage();\n...\nawait firefoxBrowser.close();\n\nconst chromeBrowser = await puppeteer.launch({\n  browser: 'chrome',\n  protocol: 'webDriverBiDi', // CDP would be used by default for Chrome.\n});\nconst page = await chromeBrowser.newPage();\n...\nawait chromeBrowser.close();\n"})}),"\n",(0,s.jsx)(r.h2,{id:"puppeteer-features-not-supported-over-webdriver-bidi",children:"Puppeteer features not supported over WebDriver BiDi"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Various emulations"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Page.emulate()"}),"\n",(0,s.jsx)(r.li,{children:"Page.emulateCPUThrottling()"}),"\n",(0,s.jsx)(r.li,{children:"Page.emulateIdleState()"}),"\n",(0,s.jsx)(r.li,{children:"Page.emulateMediaFeatures()"}),"\n",(0,s.jsx)(r.li,{children:"Page.emulateMediaType()"}),"\n",(0,s.jsx)(r.li,{children:"Page.emulateTimezone()"}),"\n",(0,s.jsx)(r.li,{children:"Page.emulateVisionDeficiency()"}),"\n",(0,s.jsx)(r.li,{children:"Page.setBypassCSP()"}),"\n",(0,s.jsx)(r.li,{children:"Page.setGeolocation()"}),"\n",(0,s.jsx)(r.li,{children:"Page.setJavaScriptEnabled()"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"CDP-specific features"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"HTTPRequest.client()"}),"\n",(0,s.jsx)(r.li,{children:"Page.createCDPSession()"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Accessibility"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Coverage"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Tracing"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Other methods:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Frame.waitForDevicePrompt()"}),"\n",(0,s.jsx)(r.li,{children:"HTTPResponse.buffer()"}),"\n",(0,s.jsx)(r.li,{children:"HTTPResponse.fromServiceWorker()"}),"\n",(0,s.jsx)(r.li,{children:"HTTPResponse.securityDetails()"}),"\n",(0,s.jsx)(r.li,{children:"Input.drag()"}),"\n",(0,s.jsx)(r.li,{children:"Input.dragAndDrop()"}),"\n",(0,s.jsx)(r.li,{children:"Input.dragOver()"}),"\n",(0,s.jsx)(r.li,{children:"Input.drop()"}),"\n",(0,s.jsx)(r.li,{children:"Page.emulateNetworkConditions()"}),"\n",(0,s.jsx)(r.li,{children:"Page.isDragInterceptionEnabled()"}),"\n",(0,s.jsx)(r.li,{children:"Page.isJavaScriptEnabled()"}),"\n",(0,s.jsx)(r.li,{children:"Page.isServiceWorkerBypassed()"}),"\n",(0,s.jsx)(r.li,{children:"Page.metrics()"}),"\n",(0,s.jsx)(r.li,{children:"Page.queryObjects()"}),"\n",(0,s.jsx)(r.li,{children:"Page.screencast()"}),"\n",(0,s.jsx)(r.li,{children:"Page.setBypassServiceWorker()"}),"\n",(0,s.jsx)(r.li,{children:"Page.setDragInterception()"}),"\n",(0,s.jsx)(r.li,{children:"Page.setOfflineMode()"}),"\n",(0,s.jsx)(r.li,{children:"Page.waitForDevicePrompt()"}),"\n",(0,s.jsx)(r.li,{children:"Page.waitForFileChooser()"}),"\n",(0,s.jsx)(r.li,{children:"PageEvent.popup"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"puppeteer-features-fully-supported-over-webdriver-bidi",children:"Puppeteer features fully supported over WebDriver BiDi"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Browser automation"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Browser.close()"}),"\n",(0,s.jsx)(r.li,{children:"Browser.userAgent()"}),"\n",(0,s.jsx)(r.li,{children:"Browser.version()"}),"\n",(0,s.jsx)(r.li,{children:"Puppeteer.launch()"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Page automation"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Frame.goto() (except ",(0,s.jsx)(r.code,{children:"referer"})," and ",(0,s.jsx)(r.code,{children:"referrerPolicy"}),")"]}),"\n",(0,s.jsx)(r.li,{children:"Page 'popup' event"}),"\n",(0,s.jsx)(r.li,{children:"Page.bringToFront()"}),"\n",(0,s.jsx)(r.li,{children:"Page.cookies()"}),"\n",(0,s.jsx)(r.li,{children:"Page.deleteCookie()"}),"\n",(0,s.jsx)(r.li,{children:"Page.goBack()"}),"\n",(0,s.jsx)(r.li,{children:"Page.goForward()"}),"\n",(0,s.jsxs)(r.li,{children:["Page.goto (except ",(0,s.jsx)(r.code,{children:"referer"})," and ",(0,s.jsx)(r.code,{children:"referrerPolicy"}),")"]}),"\n",(0,s.jsxs)(r.li,{children:["Page.reload (except for ",(0,s.jsx)(r.code,{children:"ignoreCache"})," parameter)"]}),"\n",(0,s.jsx)(r.li,{children:"Page.setCacheEnabled()"}),"\n",(0,s.jsx)(r.li,{children:"Page.setCookie()"}),"\n",(0,s.jsx)(r.li,{children:"Page.setExtraHTTPHeaders()"}),"\n",(0,s.jsxs)(r.li,{children:["Page.setViewport (",(0,s.jsx)(r.code,{children:"width"}),", ",(0,s.jsx)(r.code,{children:"height"}),", ",(0,s.jsx)(r.code,{children:"deviceScaleFactor"})," only)"]}),"\n",(0,s.jsx)(r.li,{children:"Page.workers()"}),"\n",(0,s.jsx)(r.li,{children:"PageEvent.WorkerCreated"}),"\n",(0,s.jsx)(r.li,{children:"PageEvent.WorkerDestroyed"}),"\n",(0,s.jsx)(r.li,{children:"Target.opener()"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://pptr.dev/guides/evaluate-javascript",children:"Script evaluation"}),":"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"JSHandle.evaluate()"}),"\n",(0,s.jsx)(r.li,{children:"JSHandle.evaluateHandle()"}),"\n",(0,s.jsx)(r.li,{children:"Page.evaluate()"}),"\n",(0,s.jsx)(r.li,{children:"Page.evaluateOnNewDocument()"}),"\n",(0,s.jsx)(r.li,{children:"Page.exposeFunction()"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://pptr.dev/guides/query-selectors",children:"Selectors"})," and ",(0,s.jsx)(r.a,{href:"https://pptr.dev/guides/locators",children:"locators"})," except for ARIA:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Page.$"}),"\n",(0,s.jsx)(r.li,{children:"Page.$$"}),"\n",(0,s.jsx)(r.li,{children:"Page.$$eval"}),"\n",(0,s.jsx)(r.li,{children:"Page.$eval"}),"\n",(0,s.jsx)(r.li,{children:"Page.waitForSelector"}),"\n",(0,s.jsx)(r.li,{children:"Page.locator() and all locator APIs"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Input"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"ElementHandle.click"}),"\n",(0,s.jsx)(r.li,{children:"ElementHandle.uploadFile"}),"\n",(0,s.jsx)(r.li,{children:"Keyboard.down"}),"\n",(0,s.jsx)(r.li,{children:"Keyboard.press"}),"\n",(0,s.jsx)(r.li,{children:"Keyboard.sendCharacter"}),"\n",(0,s.jsx)(r.li,{children:"Keyboard.type"}),"\n",(0,s.jsx)(r.li,{children:"Keyboard.up"}),"\n",(0,s.jsx)(r.li,{children:"Mouse events (except for dedicated drag'n'drop API methods)"}),"\n",(0,s.jsx)(r.li,{children:"Page.tap"}),"\n",(0,s.jsx)(r.li,{children:"TouchScreen.*"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"JavaScript dialog interception"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"page.on('dialog')"}),"\n",(0,s.jsx)(r.li,{children:"Dialog.*"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Screenshots (not all parameters are supported)"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Page.screenshot (supported parameters are ",(0,s.jsx)(r.code,{children:"clip"}),", ",(0,s.jsx)(r.code,{children:"encoding"}),", ",(0,s.jsx)(r.code,{children:"fullPage"}),")"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"PDF generation (not all parameters are supported)"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Page.pdf (only ",(0,s.jsx)(r.code,{children:"format"}),", ",(0,s.jsx)(r.code,{children:"height"}),", ",(0,s.jsx)(r.code,{children:"landscape"}),", ",(0,s.jsx)(r.code,{children:"margin"}),", ",(0,s.jsx)(r.code,{children:"pageRanges"}),", ",(0,s.jsx)(r.code,{children:"printBackground"}),", ",(0,s.jsx)(r.code,{children:"scale"}),", ",(0,s.jsx)(r.code,{children:"width"})," are supported)"]}),"\n",(0,s.jsxs)(r.li,{children:["Page.createPDFStream (only ",(0,s.jsx)(r.code,{children:"format"}),", ",(0,s.jsx)(r.code,{children:"height"}),", ",(0,s.jsx)(r.code,{children:"landscape"}),", ",(0,s.jsx)(r.code,{children:"margin"}),", ",(0,s.jsx)(r.code,{children:"pageRanges"}),", ",(0,s.jsx)(r.code,{children:"printBackground"}),", ",(0,s.jsx)(r.code,{children:"scale"}),", ",(0,s.jsx)(r.code,{children:"width"})," are supported)"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Permissions"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"BrowserContext.clearPermissionOverrides()"}),"\n",(0,s.jsx)(r.li,{children:"BrowserContext.overridePermissions()"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://pptr.dev/guides/request-interception",children:"Request interception"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"HTTPRequest.abort() (no custom error support)"}),"\n",(0,s.jsx)(r.li,{children:"HTTPRequest.abortErrorReason()"}),"\n",(0,s.jsx)(r.li,{children:"HTTPRequest.continue()"}),"\n",(0,s.jsx)(r.li,{children:"HTTPRequest.continueRequestOverrides()"}),"\n",(0,s.jsx)(r.li,{children:"HTTPRequest.failure()"}),"\n",(0,s.jsx)(r.li,{children:"HTTPRequest.finalizeInterceptions()"}),"\n",(0,s.jsx)(r.li,{children:"HTTPRequest.interceptResolutionState()"}),"\n",(0,s.jsx)(r.li,{children:"HTTPRequest.isInterceptResolutionHandled()"}),"\n",(0,s.jsx)(r.li,{children:"HTTPRequest.respond()"}),"\n",(0,s.jsx)(r.li,{children:"HTTPRequest.responseForRequest()"}),"\n",(0,s.jsx)(r.li,{children:"Page.authenticate()"}),"\n",(0,s.jsx)(r.li,{children:"Page.setRequestInterception()"}),"\n",(0,s.jsx)(r.li,{children:"Page.setUserAgent()"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://developer.chrome.com/articles/webdriver-bidi/",children:"WebDriver BiDi - The future of cross-browser automation"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://developer.chrome.com/blog/webdriver-bidi-2023/",children:"WebDriver BiDi: 2023 status update"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://hacks.mozilla.org/2023/12/puppeteer-webdriver-bidi/",children:"Puppeteer Support for the Cross-Browser WebDriver BiDi Standard"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},21020:(e,r,n)=>{var i=n(96540),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var i,l={},c=null,a=null;for(i in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(a=r.ref),r)t.call(r,i)&&!o.hasOwnProperty(i)&&(l[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps)void 0===l[i]&&(l[i]=r[i]);return{$$typeof:s,type:e,key:c,ref:a,props:l,_owner:d.current}}r.Fragment=l,r.jsx=c,r.jsxs=c},74848:(e,r,n)=>{e.exports=n(21020)},28453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>d});var i=n(96540);const s={},l=i.createContext(s);function t(e){const r=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(l.Provider,{value:r},e.children)}}}]);