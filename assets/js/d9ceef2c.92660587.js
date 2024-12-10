/*! For license information please see d9ceef2c.92660587.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3662],{95280:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"api/puppeteer.jshandle.evaluate","title":"JSHandle.evaluate() method","description":"Evaluates the given function with the current handle as its first argument.","source":"@site/versioned_docs/version-23.10.3/api/puppeteer.jshandle.evaluate.md","sourceDirName":"api","slug":"/api/puppeteer.jshandle.evaluate","permalink":"/api/puppeteer.jshandle.evaluate","draft":false,"unlisted":false,"tags":[],"version":"23.10.3","frontMatter":{"sidebar_label":"JSHandle.evaluate"},"sidebar":"api","previous":{"title":"JSHandle.dispose","permalink":"/api/puppeteer.jshandle.dispose"},"next":{"title":"JSHandle.evaluateHandle","permalink":"/api/puppeteer.jshandle.evaluatehandle"}}');var a=t(74848),s=t(28453);const i={sidebar_label:"JSHandle.evaluate"},l="JSHandle.evaluate() method",d={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"jshandleevaluate-method",children:"JSHandle.evaluate() method"})}),"\n",(0,a.jsx)(n.p,{children:"Evaluates the given function with the current handle as its first argument."}),"\n",(0,a.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"class JSHandle {\n  evaluate<\n    Params extends unknown[],\n    Func extends EvaluateFuncWith<T, Params> = EvaluateFuncWith<T, Params>,\n  >(\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:(0,a.jsx)(n.p,{children:"Parameter"})}),(0,a.jsx)("th",{children:(0,a.jsx)(n.p,{children:"Type"})}),(0,a.jsx)("th",{children:(0,a.jsx)(n.p,{children:"Description"})})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(n.p,{children:"pageFunction"})}),(0,a.jsx)("td",{children:(0,a.jsx)(n.p,{children:"Func | string"})}),(0,a.jsx)("td",{})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(n.p,{children:"args"})}),(0,a.jsx)("td",{children:(0,a.jsx)(n.p,{children:"Params"})}),(0,a.jsx)("td",{})]})]})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,a.jsx)(n.p,{children:"Promise<Awaited<ReturnType<Func>>>"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},21020:(e,n,t)=>{var r=t(96540),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,s={},c=null,o=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(o=n.ref),n)i.call(n,r)&&!d.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:a,type:e,key:c,ref:o,props:s,_owner:l.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);