/*! For license information please see 6b92ac90.0be0405b.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70202],{33624:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>a,toc:()=>l});var n=t(85893),s=t(11151);const p={sidebar_label:"JSHandle.getProperty"},o="JSHandle.getProperty() method",a={id:"api/puppeteer.jshandle.getproperty",title:"JSHandle.getProperty() method",description:"Fetches a single property from the referenced object.",source:"@site/versioned_docs/version-22.13.0/api/puppeteer.jshandle.getproperty.md",sourceDirName:"api",slug:"/api/puppeteer.jshandle.getproperty",permalink:"/api/puppeteer.jshandle.getproperty",draft:!1,unlisted:!1,tags:[],version:"22.13.0",frontMatter:{sidebar_label:"JSHandle.getProperty"},sidebar:"api",previous:{title:"JSHandle.getProperties",permalink:"/api/puppeteer.jshandle.getproperties"},next:{title:"JSHandle.getProperty_1",permalink:"/api/puppeteer.jshandle.getproperty_1"}},i={},l=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"jshandlegetproperty-method",children:"JSHandle.getProperty() method"}),"\n",(0,n.jsx)(r.p,{children:"Fetches a single property from the referenced object."}),"\n",(0,n.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class JSHandle {\n  getProperty<K extends keyof T>(\n    propertyName: HandleOr<K>\n  ): Promise<HandleFor<T[K]>>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"propertyName"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/puppeteer.handleor",children:"HandleOr"}),"<K>"]})}),(0,n.jsx)("td",{})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:["Promise<",(0,n.jsx)(r.a,{href:"/api/puppeteer.handlefor",children:"HandleFor"}),"<T[K]>>"]})]})}function c(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},75251:(e,r,t)=>{var n=t(67294),s=Symbol.for("react.element"),p=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,p={},l=null,d=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)o.call(r,n)&&!i.hasOwnProperty(n)&&(p[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===p[n]&&(p[n]=r[n]);return{$$typeof:s,type:e,key:l,ref:d,props:p,_owner:a.current}}r.Fragment=p,r.jsx=l,r.jsxs=l},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>o});var n=t(67294);const s={},p=n.createContext(s);function o(e){const r=n.useContext(p);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(p.Provider,{value:r},e.children)}}}]);