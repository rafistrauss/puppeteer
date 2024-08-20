/*! For license information please see c94361d7.5a2204d6.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39863],{20159:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=n(85893),r=n(11151);const i={sidebar_label:"CDPSession"},o="CDPSession class",a={id:"api/puppeteer.cdpsession",title:"CDPSession class",description:"The CDPSession instances are used to talk raw Chrome Devtools Protocol.",source:"@site/versioned_docs/version-23.1.0/api/puppeteer.cdpsession.md",sourceDirName:"api",slug:"/api/puppeteer.cdpsession",permalink:"/api/puppeteer.cdpsession",draft:!1,unlisted:!1,tags:[],version:"23.1.0",frontMatter:{sidebar_label:"CDPSession"},sidebar:"api",previous:{title:"Target.worker",permalink:"/api/puppeteer.target.worker"},next:{title:"CDPSession.connection",permalink:"/api/puppeteer.cdpsession.connection"}},c={},d=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"cdpsession-class",children:"CDPSession class"})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"CDPSession"})," instances are used to talk raw Chrome Devtools Protocol."]}),"\n",(0,t.jsx)(s.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"export declare abstract class CDPSession extends EventEmitter<CDPSessionEvents>\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Extends:"})," ",(0,t.jsx)(s.a,{href:"/api/puppeteer.eventemitter",children:"EventEmitter"}),"<",(0,t.jsx)(s.a,{href:"/api/puppeteer.cdpsessionevents",children:"CDPSessionEvents"}),">"]}),"\n",(0,t.jsx)(s.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(s.p,{children:["Protocol methods can be called with ",(0,t.jsx)(s.a,{href:"/api/puppeteer.cdpsession.send",children:"CDPSession.send()"})," method and protocol events can be subscribed to with ",(0,t.jsx)(s.code,{children:"CDPSession.on"})," method."]}),"\n",(0,t.jsxs)(s.p,{children:["Useful links: ",(0,t.jsx)(s.a,{href:"https://chromedevtools.github.io/devtools-protocol/",children:"DevTools Protocol Viewer"})," and ",(0,t.jsx)(s.a,{href:"https://github.com/aslushnikov/getting-started-with-cdp/blob/HEAD/README.md",children:"Getting Started with DevTools Protocol"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,t.jsx)(s.code,{children:"CDPSession"})," class."]}),"\n",(0,t.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"const client = await page.createCDPSession();\nawait client.send('Animation.enable');\nclient.on('Animation.animationCreated', () =>\n  console.log('Animation created!')\n);\nconst response = await client.send('Animation.getPlaybackRate');\nconsole.log('playback rate is ' + response.playbackRate);\nawait client.send('Animation.setPlaybackRate', {\n  playbackRate: response.playbackRate / 2,\n});\n"})}),"\n",(0,t.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Method"})}),(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"connection",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.cdpsession.connection",children:"connection()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"detach",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.cdpsession.detach",children:"detach()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"Detaches the cdpSession from the target. Once detached, the cdpSession object won't emit any events and can't be used to send messages."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"id",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.cdpsession.id",children:"id()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"Returns the session's id."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"send",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.cdpsession.send",children:"send(method, params, options)"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{})]})]})]})]})}function p(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},75251:(e,s,n)=>{var t=n(67294),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,n){var t,i={},d=null,l=null;for(t in void 0!==n&&(d=""+n),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(l=s.ref),s)o.call(s,t)&&!c.hasOwnProperty(t)&&(i[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===i[t]&&(i[t]=s[t]);return{$$typeof:r,type:e,key:d,ref:l,props:i,_owner:a.current}}s.Fragment=i,s.jsx=d,s.jsxs=d},85893:(e,s,n)=>{e.exports=n(75251)},11151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>o});var t=n(67294);const r={},i=t.createContext(r);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);