"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21518],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,s=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=u(r),m=p,d=f["".concat(i,".").concat(m)]||f[m]||l[m]||s;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var s=r.length,o=new Array(s);o[0]=f;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:p,o[1]=a;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},14244:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var n=r(87462),p=(r(67294),r(3905));const s={sidebar_label:"HTTPResponse.request"},o="HTTPResponse.request() method",a={unversionedId:"api/puppeteer.httpresponse.request",id:"version-16.1.0/api/puppeteer.httpresponse.request",title:"HTTPResponse.request() method",description:"Signature:",source:"@site/versioned_docs/version-16.1.0/api/puppeteer.httpresponse.request.md",sourceDirName:"api",slug:"/api/puppeteer.httpresponse.request",permalink:"/api/puppeteer.httpresponse.request",draft:!1,tags:[],version:"16.1.0",frontMatter:{sidebar_label:"HTTPResponse.request"},sidebar:"sidebar",previous:{title:"HTTPResponse.remoteAddress",permalink:"/api/puppeteer.httpresponse.remoteaddress"},next:{title:"HTTPResponse.securityDetails",permalink:"/api/puppeteer.httpresponse.securitydetails"}},i={},u=[],c={toc:u};function l(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"httpresponserequest-method"},"HTTPResponse.request() method"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Signature:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"class HTTPResponse {\n  request(): HTTPRequest;\n}\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/puppeteer.httprequest"},"HTTPRequest")),(0,p.kt)("p",null,"A matching ",(0,p.kt)("a",{parentName:"p",href:"/api/puppeteer.httprequest"},"HTTPRequest")," object."))}l.isMDXComponent=!0}}]);