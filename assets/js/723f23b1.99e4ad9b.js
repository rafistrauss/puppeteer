/*! For license information please see 723f23b1.99e4ad9b.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51244],{25209:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>i,metadata:()=>p,toc:()=>a});var s=t(85893),n=t(11151);const i={sidebar_label:"BrowserContext"},o="BrowserContext class",p={id:"api/puppeteer.browsercontext",title:"BrowserContext class",description:"BrowserContext represents individual user contexts within a browser.",source:"@site/../docs/api/puppeteer.browsercontext.md",sourceDirName:"api",slug:"/api/puppeteer.browsercontext",permalink:"/next/api/puppeteer.browsercontext",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"BrowserContext"},sidebar:"api",previous:{title:"Browser.wsEndpoint",permalink:"/next/api/puppeteer.browser.wsendpoint"},next:{title:"BrowserContext.browser",permalink:"/next/api/puppeteer.browsercontext.browser"}},c={},a=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"browsercontext-class",children:"BrowserContext class"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontext",children:"BrowserContext"})," represents individual user contexts within a ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browser",children:"browser"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["When a ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browser",children:"browser"})," is launched, it has at least one default ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontext",children:"browser context"}),". Others can be created using ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browser.createbrowsercontext",children:"Browser.createBrowserContext()"}),". Each context has isolated storage (cookies/localStorage/etc.)"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontext",children:"BrowserContext"})," ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.eventemitter",children:"emits"})," various events which are documented in the ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontextevent",children:"BrowserContextEvent"})," enum."]}),"\n",(0,s.jsxs)(r.p,{children:["If a ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.page",children:"page"})," opens another ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.page",children:"page"}),", e.g. using ",(0,s.jsx)(r.code,{children:"window.open"}),", the popup will belong to the parent ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.page.browsercontext",children:"page's browser context"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"export declare abstract class BrowserContext extends EventEmitter<BrowserContextEvents>\n"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Extends:"})," ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.eventemitter",children:"EventEmitter"}),"<",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontextevents",children:"BrowserContextEvents"}),">"]}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:["In Chrome all non-default contexts are incognito, and ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browser.defaultbrowsercontext",children:"default browser context"})," might be incognito if you provide the ",(0,s.jsx)(r.code,{children:"--incognito"})," argument when launching the browser."]}),"\n",(0,s.jsxs)(r.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,s.jsx)(r.code,{children:"BrowserContext"})," class."]}),"\n",(0,s.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(r.p,{children:["Creating a new ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontext",children:"browser context"}),":"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"// Create a new browser context\nconst context = await browser.createBrowserContext();\n// Create a new page inside context.\nconst page = await context.newPage();\n// ... do stuff with page ...\nawait page.goto('https://example.com');\n// Dispose context once it's no longer needed.\nawait context.close();\n"})}),"\n",(0,s.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Property"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Modifiers"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"closed",children:"closed"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"readonly"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Whether this ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontext",children:"browser context"})," is closed."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"id",children:"id"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"readonly"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"string | undefined"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Identifier for this ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontext",children:"browser context"}),"."]})})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Method"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Modifiers"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"browser",children:(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontext.browser",children:"browser()"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Gets the ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browser",children:"browser"})," associated with this ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontext",children:"browser context"}),"."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"clearpermissionoverrides",children:(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontext.clearpermissionoverrides",children:"clearPermissionOverrides()"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Clears all permission overrides for this ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontext",children:"browser context"}),"."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"close",children:(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontext.close",children:"close()"})})}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(r.p,{children:["Closes this ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontext",children:"browser context"})," and all associated ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.page",children:"pages"}),"."]}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Remarks:"})}),(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browser.defaultbrowsercontext",children:"default browser context"})," cannot be closed."]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"newpage",children:(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontext.newpage",children:"newPage()"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Creates a new ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.page",children:"page"})," in this ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontext",children:"browser context"}),"."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"overridepermissions",children:(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontext.overridepermissions",children:"overridePermissions(origin, permissions)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Grants this ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontext",children:"browser context"})," the given ",(0,s.jsx)(r.code,{children:"permissions"})," within the given ",(0,s.jsx)(r.code,{children:"origin"}),"."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"pages",children:(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontext.pages",children:"pages()"})})}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(r.p,{children:["Gets a list of all open ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.page",children:"pages"})," inside this ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontext",children:"browser context"}),"."]}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Remarks:"})}),(0,s.jsxs)(r.p,{children:["Non-visible ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.page",children:"pages"}),", such as ",(0,s.jsx)(r.code,{children:'"background_page"'}),", will not be listed here. You can find them using ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.target.page",children:"Target.page()"}),"."]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"targets",children:(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontext.targets",children:"targets()"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Gets all active ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.target",children:"targets"})," inside this ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontext",children:"browser context"}),"."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"waitfortarget",children:(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontext.waitfortarget",children:"waitForTarget(predicate, options)"})})}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(r.p,{children:["Waits until a ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.target",children:"target"})," matching the given ",(0,s.jsx)(r.code,{children:"predicate"})," appears and returns it."]}),(0,s.jsxs)(r.p,{children:["This will look all open ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontext",children:"browser contexts"}),"."]})]})]})]})]})]})}function x(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},75251:(e,r,t)=>{var s=t(67294),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,p=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var s,i={},a=null,d=null;for(s in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(d=r.ref),r)o.call(r,s)&&!c.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===i[s]&&(i[s]=r[s]);return{$$typeof:n,type:e,key:a,ref:d,props:i,_owner:p.current}}r.Fragment=i,r.jsx=a,r.jsxs=a},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>p,a:()=>o});var s=t(67294);const n={},i=s.createContext(n);function o(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function p(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);