/*! For license information please see 4071592f.0a3357d9.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97953],{34983:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=n(85893),s=n(11151);const i={sidebar_label:"ScreencastOptions"},c="ScreencastOptions interface",d={id:"api/puppeteer.screencastoptions",title:"ScreencastOptions interface",description:"Signature",source:"@site/versioned_docs/version-22.15.0/api/puppeteer.screencastoptions.md",sourceDirName:"api",slug:"/api/puppeteer.screencastoptions",permalink:"/api/puppeteer.screencastoptions",draft:!1,unlisted:!1,tags:[],version:"22.15.0",frontMatter:{sidebar_label:"ScreencastOptions"},sidebar:"api",previous:{title:"ResponseForRequest",permalink:"/api/puppeteer.responseforrequest"},next:{title:"ScreenRecorder",permalink:"/api/puppeteer.screenrecorder"}},o={},l=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"screencastoptions-interface",children:"ScreencastOptions interface"}),"\n",(0,t.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export interface ScreencastOptions\n"})}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Property"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Default"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"crop",children:"crop"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.boundingbox",children:"BoundingBox"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"Specifies the region of the viewport to crop."})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"ffmpegpath",children:"ffmpegPath"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"string"})}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(r.p,{children:["Path to the ",(0,t.jsx)(r.a,{href:"https://ffmpeg.org/",children:"ffmpeg"}),"."]}),(0,t.jsxs)(r.p,{children:["Required if ",(0,t.jsx)(r.code,{children:"ffmpeg"})," is not in your PATH."]})]}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"path",children:"path"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"`${string}.webm`"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"File path to save the screencast to."})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"scale",children:"scale"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"number"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)(r.p,{children:"Scales the output video."}),(0,t.jsxs)(r.p,{children:["For example, ",(0,t.jsx)(r.code,{children:"0.5"})," will shrink the width and height of the output video by half. ",(0,t.jsx)(r.code,{children:"2"})," will double the width and height of the output video."]})]}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"1"})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"speed",children:"speed"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"number"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)(r.p,{children:"Specifies the speed to record at."}),(0,t.jsxs)(r.p,{children:["For example, ",(0,t.jsx)(r.code,{children:"0.5"})," will slowdown the output video by 50%. ",(0,t.jsx)(r.code,{children:"2"})," will double the speed of the output video."]})]}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"1"})})})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},75251:(e,r,n)=>{var t=n(67294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,i={},l=null,p=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(p=r.ref),r)c.call(r,t)&&!o.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:s,type:e,key:l,ref:p,props:i,_owner:d.current}}r.Fragment=i,r.jsx=l,r.jsxs=l},85893:(e,r,n)=>{e.exports=n(75251)},11151:(e,r,n)=>{n.d(r,{Z:()=>d,a:()=>c});var t=n(67294);const s={},i=t.createContext(s);function c(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);