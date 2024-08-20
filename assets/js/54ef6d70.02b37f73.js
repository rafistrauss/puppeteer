/*! For license information please see 54ef6d70.02b37f73.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62653],{76594:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=n(85893),t=n(11151);const i={sidebar_label:"Keyboard.press"},d="Keyboard.press() method",o={id:"api/puppeteer.keyboard.press",title:"Keyboard.press() method",description:"Shortcut for Keyboard.down() and Keyboard.up().",source:"@site/../docs/api/puppeteer.keyboard.press.md",sourceDirName:"api",slug:"/api/puppeteer.keyboard.press",permalink:"/next/api/puppeteer.keyboard.press",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Keyboard.press"},sidebar:"api",previous:{title:"Keyboard.down",permalink:"/next/api/puppeteer.keyboard.down"},next:{title:"Keyboard.sendCharacter",permalink:"/next/api/puppeteer.keyboard.sendcharacter"}},a={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function p(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"keyboardpress-method",children:"Keyboard.press() method"})}),"\n",(0,s.jsxs)(r.p,{children:["Shortcut for ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.keyboard.down",children:"Keyboard.down()"})," and ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.keyboard.up",children:"Keyboard.up()"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class Keyboard {\n  abstract press(\n    key: KeyInput,\n    options?: Readonly<KeyPressOptions>\n  ): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"key"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/next/api/puppeteer.keyinput",children:"KeyInput"})})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Name of key to press, such as ",(0,s.jsx)(r.code,{children:"ArrowLeft"}),". See ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.keyinput",children:"KeyInput"})," for a list of all key names."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"options"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Readonly<",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.keypressoptions",children:"KeyPressOptions"}),">"]})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"(Optional)"})," An object of options. Accepts text which, if specified, generates an input event with this text. Accepts delay which, if specified, is the time to wait between ",(0,s.jsx)(r.code,{children:"keydown"})," and ",(0,s.jsx)(r.code,{children:"keyup"})," in milliseconds. Defaults to 0. Accepts commands which, if specified, is the commands of keyboard shortcuts, see ",(0,s.jsx)(r.a,{href:"https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/editing/commands/editor_command_names.h",children:"Chromium Source Code"})," for valid command names."]})})]})]})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:["If ",(0,s.jsx)(r.code,{children:"key"})," is a single character and no modifier keys besides ",(0,s.jsx)(r.code,{children:"Shift"})," are being held down, a ",(0,s.jsx)(r.code,{children:"keypress"}),"/",(0,s.jsx)(r.code,{children:"input"})," event will also generated. The ",(0,s.jsx)(r.code,{children:"text"})," option can be specified to force an input event to be generated."]}),"\n",(0,s.jsxs)(r.p,{children:["Modifier keys DO effect ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.keyboard.press",children:"Keyboard.press()"}),". Holding down ",(0,s.jsx)(r.code,{children:"Shift"})," will type the text in upper case."]})]})}function l(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},75251:(e,r,n)=>{var s=n(67294),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var s,i={},c=null,p=null;for(s in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(p=r.ref),r)d.call(r,s)&&!a.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===i[s]&&(i[s]=r[s]);return{$$typeof:t,type:e,key:c,ref:p,props:i,_owner:o.current}}r.Fragment=i,r.jsx=c,r.jsxs=c},85893:(e,r,n)=>{e.exports=n(75251)},11151:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>d});var s=n(67294);const t={},i=s.createContext(t);function d(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);