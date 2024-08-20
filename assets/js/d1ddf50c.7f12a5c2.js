/*! For license information please see d1ddf50c.7f12a5c2.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79538],{7245:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var t=r(85893),s=r(11151);const n={sidebar_label:"Viewport"},d="Viewport interface",c={id:"api/puppeteer.viewport",title:"Viewport interface",description:"Signature",source:"@site/versioned_docs/version-23.1.0/api/puppeteer.viewport.md",sourceDirName:"api",slug:"/api/puppeteer.viewport",permalink:"/api/puppeteer.viewport",draft:!1,unlisted:!1,tags:[],version:"23.1.0",frontMatter:{sidebar_label:"Viewport"},sidebar:"api",previous:{title:"UnsupportedOperation",permalink:"/api/puppeteer.unsupportedoperation"},next:{title:"VisibilityOption",permalink:"/api/puppeteer.visibilityoption"}},l={},h=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2}];function o(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"viewport-interface",children:"Viewport interface"})}),"\n",(0,t.jsx)(i.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typescript",children:"export interface Viewport\n"})}),"\n",(0,t.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(i.p,{children:"Property"})}),(0,t.jsx)("th",{children:(0,t.jsx)(i.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(i.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(i.p,{children:"Description"})}),(0,t.jsx)("th",{children:(0,t.jsx)(i.p,{children:"Default"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"devicescalefactor",children:"deviceScaleFactor"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"number"})}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(i.p,{children:["Specify device scale factor. See ",(0,t.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio",children:"devicePixelRatio"})," for more info."]}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Remarks:"})}),(0,t.jsxs)(i.p,{children:["Setting this value to ",(0,t.jsx)(i.code,{children:"0"})," will reset this value to the system default."]})]}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"1"})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"hastouch",children:"hasTouch"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"boolean"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"Specify if the viewport supports touch events."})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"false"})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"height",children:"height"})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"number"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)(i.p,{children:"The page height in CSS pixels."}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Remarks:"})}),(0,t.jsxs)(i.p,{children:["Setting this value to ",(0,t.jsx)(i.code,{children:"0"})," will reset this value to the system default."]})]}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"islandscape",children:"isLandscape"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"boolean"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"Specifies if the viewport is in landscape mode."})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"false"})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"ismobile",children:"isMobile"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"boolean"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(i.p,{children:["Whether the ",(0,t.jsx)(i.code,{children:"meta viewport"})," tag is taken into account."]})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"false"})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"width",children:"width"})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"number"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)(i.p,{children:"The page width in CSS pixels."}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Remarks:"})}),(0,t.jsxs)(i.p,{children:["Setting this value to ",(0,t.jsx)(i.code,{children:"0"})," will reset this value to the system default."]})]}),(0,t.jsx)("td",{})]})]})]})]})}function p(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},75251:(e,i,r)=>{var t=r(67294),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(e,i,r){var t,n={},h=null,o=null;for(t in void 0!==r&&(h=""+r),void 0!==i.key&&(h=""+i.key),void 0!==i.ref&&(o=i.ref),i)d.call(i,t)&&!l.hasOwnProperty(t)&&(n[t]=i[t]);if(e&&e.defaultProps)for(t in i=e.defaultProps)void 0===n[t]&&(n[t]=i[t]);return{$$typeof:s,type:e,key:h,ref:o,props:n,_owner:c.current}}i.Fragment=n,i.jsx=h,i.jsxs=h},85893:(e,i,r)=>{e.exports=r(75251)},11151:(e,i,r)=>{r.d(i,{Z:()=>c,a:()=>d});var t=r(67294);const s={},n=t.createContext(s);function d(e){const i=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(n.Provider,{value:i},e.children)}}}]);