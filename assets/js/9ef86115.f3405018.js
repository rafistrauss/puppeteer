/*! For license information please see 9ef86115.f3405018.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96430],{9163:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"api/puppeteer.elementhandle.select","title":"ElementHandle.select() method","description":"Triggers a change and input event once all the provided options have been selected. If there\'s no ` element matching selector`, the method throws an error.","source":"@site/versioned_docs/version-23.10.3/api/puppeteer.elementhandle.select.md","sourceDirName":"api","slug":"/api/puppeteer.elementhandle.select","permalink":"/api/puppeteer.elementhandle.select","draft":false,"unlisted":false,"tags":[],"version":"23.10.3","frontMatter":{"sidebar_label":"ElementHandle.select"},"sidebar":"api","previous":{"title":"ElementHandle.scrollIntoView","permalink":"/api/puppeteer.elementhandle.scrollintoview"},"next":{"title":"ElementHandle.tap","permalink":"/api/puppeteer.elementhandle.tap"}}');var l=t(74848),s=t(28453);const i={sidebar_label:"ElementHandle.select"},a="ElementHandle.select() method",c={},o=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"elementhandleselect-method",children:"ElementHandle.select() method"})}),"\n",(0,l.jsxs)(n.p,{children:["Triggers a ",(0,l.jsx)(n.code,{children:"change"})," and ",(0,l.jsx)(n.code,{children:"input"})," event once all the provided options have been selected. If there's no ",(0,l.jsx)(n.code,{children:"<select>"})," element matching ",(0,l.jsx)(n.code,{children:"selector"}),", the method throws an error."]}),"\n",(0,l.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"class ElementHandle {\n  select(...values: string[]): Promise<string[]>;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)("table",{children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:(0,l.jsx)(n.p,{children:"Parameter"})}),(0,l.jsx)("th",{children:(0,l.jsx)(n.p,{children:"Type"})}),(0,l.jsx)("th",{children:(0,l.jsx)(n.p,{children:"Description"})})]})}),(0,l.jsx)("tbody",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(n.p,{children:"values"})}),(0,l.jsx)("td",{children:(0,l.jsx)(n.p,{children:"string[]"})}),(0,l.jsx)("td",{children:(0,l.jsxs)(n.p,{children:["Values of options to select. If the ",(0,l.jsx)(n.code,{children:"<select>"})," has the ",(0,l.jsx)(n.code,{children:"multiple"})," attribute, all values are considered, otherwise only the first one is taken into account."]})})]})})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,l.jsx)(n.p,{children:"Promise<string[]>"}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"handle.select('blue'); // single selection\nhandle.select('red', 'green', 'blue'); // multiple selections\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},21020:(e,n,t)=>{var r=t(96540),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var r,s={},o=null,d=null;for(r in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,r)&&!c.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:l,type:e,key:o,ref:d,props:s,_owner:a.current}}n.Fragment=s,n.jsx=o,n.jsxs=o},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(96540);const l={},s=r.createContext(l);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);