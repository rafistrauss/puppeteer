/*! For license information please see 6b4178ea.2359ca3d.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54394],{67437:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(85893),s=t(11151);const i={sidebar_label:"Frame.type"},a="Frame.type() method",l={id:"api/puppeteer.frame.type",title:"Frame.type() method",description:"Sends a keydown, keypress/input, and keyup event for each character in the text.",source:"@site/versioned_docs/version-23.2.1/api/puppeteer.frame.type.md",sourceDirName:"api",slug:"/api/puppeteer.frame.type",permalink:"/api/puppeteer.frame.type",draft:!1,unlisted:!1,tags:[],version:"23.2.1",frontMatter:{sidebar_label:"Frame.type"},sidebar:"api",previous:{title:"Frame.title",permalink:"/api/puppeteer.frame.title"},next:{title:"Frame.url",permalink:"/api/puppeteer.frame.url"}},d={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function o(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"frametype-method",children:"Frame.type() method"})}),"\n",(0,n.jsxs)(r.p,{children:["Sends a ",(0,n.jsx)(r.code,{children:"keydown"}),", ",(0,n.jsx)(r.code,{children:"keypress"}),"/",(0,n.jsx)(r.code,{children:"input"}),", and ",(0,n.jsx)(r.code,{children:"keyup"})," event for each character in the text."]}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Frame {\n  type(\n    selector: string,\n    text: string,\n    options?: Readonly<KeyboardTypeOptions>\n  ): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"selector"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"string"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"the selector for the element to type into. If there are multiple the first will be used."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"text"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"string"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"text to type into the element"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"options"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["Readonly<",(0,n.jsx)(r.a,{href:"/api/puppeteer.keyboardtypeoptions",children:"KeyboardTypeOptions"}),">"]})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"(Optional)"})," takes one option, ",(0,n.jsx)(r.code,{children:"delay"}),", which sets the time to wait between key presses in milliseconds. Defaults to ",(0,n.jsx)(r.code,{children:"0"}),"."]})})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["To press a special key, like ",(0,n.jsx)(r.code,{children:"Control"})," or ",(0,n.jsx)(r.code,{children:"ArrowDown"}),", use ",(0,n.jsx)(r.a,{href:"/api/puppeteer.keyboard.press",children:"Keyboard.press()"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"await frame.type('#mytextarea', 'Hello'); // Types instantly\nawait frame.type('#mytextarea', 'World', {delay: 100}); // Types slower, like a user\n"})})]})}function c(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},75251:(e,r,t)=>{var n=t(67294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,t){var n,i={},p=null,o=null;for(n in void 0!==t&&(p=""+t),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(o=r.ref),r)a.call(r,n)&&!d.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:s,type:e,key:p,ref:o,props:i,_owner:l.current}}r.Fragment=i,r.jsx=p,r.jsxs=p},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>l,a:()=>a});var n=t(67294);const s={},i=n.createContext(s);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);