/*! For license information please see 8c74da7c.79136175.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12348],{21732:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>h,toc:()=>d});var r=s(85893),n=s(11151);const c={sidebar_label:"Touchscreen"},o="Touchscreen class",h={id:"api/puppeteer.touchscreen",title:"Touchscreen class",description:"The Touchscreen class exposes touchscreen events.",source:"@site/../docs/api/puppeteer.touchscreen.md",sourceDirName:"api",slug:"/api/puppeteer.touchscreen",permalink:"/next/api/puppeteer.touchscreen",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Touchscreen"},sidebar:"api",previous:{title:"Mouse.wheel",permalink:"/next/api/puppeteer.mouse.wheel"},next:{title:"Touchscreen.tap",permalink:"/next/api/puppeteer.touchscreen.tap"}},i={},d=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"touchscreen-class",children:"Touchscreen class"})}),"\n",(0,r.jsx)(t.p,{children:"The Touchscreen class exposes touchscreen events."}),"\n",(0,r.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export declare abstract class Touchscreen\n"})}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(t.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,r.jsx)(t.code,{children:"Touchscreen"})," class."]}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Method"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Modifiers"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Description"})})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"tap",children:(0,r.jsx)(t.a,{href:"/next/api/puppeteer.touchscreen.tap",children:"tap(x, y)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["Dispatches a ",(0,r.jsx)(t.code,{children:"touchstart"})," and ",(0,r.jsx)(t.code,{children:"touchend"})," event."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"touchend",children:(0,r.jsx)(t.a,{href:"/next/api/puppeteer.touchscreen.touchend",children:"touchEnd()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["Dispatches a ",(0,r.jsx)(t.code,{children:"touchend"})," event."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"touchmove",children:(0,r.jsx)(t.a,{href:"/next/api/puppeteer.touchscreen.touchmove",children:"touchMove(x, y)"})})}),(0,r.jsx)("td",{}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(t.p,{children:["Dispatches a ",(0,r.jsx)(t.code,{children:"touchMove"})," event."]}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Remarks:"})}),(0,r.jsxs)(t.p,{children:["Not every ",(0,r.jsx)(t.code,{children:"touchMove"})," call results in a ",(0,r.jsx)(t.code,{children:"touchmove"})," event being emitted, depending on the browser's optimizations. For example, Chrome ",(0,r.jsx)(t.a,{href:"https://developer.chrome.com/blog/a-more-compatible-smoother-touch/#chromes-new-model-the-throttled-async-touchmove-model",children:"throttles"})," touch move events."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"touchstart",children:(0,r.jsx)(t.a,{href:"/next/api/puppeteer.touchscreen.touchstart",children:"touchStart(x, y)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["Dispatches a ",(0,r.jsx)(t.code,{children:"touchstart"})," event."]})})]})]})]})]})}function l(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},75251:(e,t,s)=>{var r=s(67294),n=Symbol.for("react.element"),c=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,h=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,s){var r,c={},d=null,a=null;for(r in void 0!==s&&(d=""+s),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(a=t.ref),t)o.call(t,r)&&!i.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:n,type:e,key:d,ref:a,props:c,_owner:h.current}}t.Fragment=c,t.jsx=d,t.jsxs=d},85893:(e,t,s)=>{e.exports=s(75251)},11151:(e,t,s)=>{s.d(t,{Z:()=>h,a:()=>o});var r=s(67294);const n={},c=r.createContext(n);function o(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);