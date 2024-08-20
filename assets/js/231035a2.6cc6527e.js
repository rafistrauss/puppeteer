/*! For license information please see 231035a2.6cc6527e.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5326],{35397:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(85893),a=t(11151);const s={sidebar_label:"JSHandle.evaluate"},i="JSHandle.evaluate() method",l={id:"api/puppeteer.jshandle.evaluate",title:"JSHandle.evaluate() method",description:"Evaluates the given function with the current handle as its first argument.",source:"@site/versioned_docs/version-23.1.0/api/puppeteer.jshandle.evaluate.md",sourceDirName:"api",slug:"/api/puppeteer.jshandle.evaluate",permalink:"/api/puppeteer.jshandle.evaluate",draft:!1,unlisted:!1,tags:[],version:"23.1.0",frontMatter:{sidebar_label:"JSHandle.evaluate"},sidebar:"api",previous:{title:"JSHandle.dispose",permalink:"/api/puppeteer.jshandle.dispose"},next:{title:"JSHandle.evaluateHandle",permalink:"/api/puppeteer.jshandle.evaluatehandle"}},d={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"jshandleevaluate-method",children:"JSHandle.evaluate() method"})}),"\n",(0,r.jsx)(n.p,{children:"Evaluates the given function with the current handle as its first argument."}),"\n",(0,r.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class JSHandle {\n  evaluate<\n    Params extends unknown[],\n    Func extends EvaluateFuncWith<T, Params> = EvaluateFuncWith<T, Params>,\n  >(\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Description"})})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"pageFunction"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Func | string"})}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"args"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Params"})}),(0,r.jsx)("td",{})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(n.p,{children:"Promise<Awaited<ReturnType<Func>>>"})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},75251:(e,n,t)=>{var r=t(67294),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,s={},c=null,o=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(o=n.ref),n)i.call(n,r)&&!d.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:a,type:e,key:c,ref:o,props:s,_owner:l.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var r=t(67294);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);