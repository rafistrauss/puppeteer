"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[50825],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(r),m=p,d=f["".concat(i,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,o=new Array(a);o[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:p,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},44225:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),p=(r(67294),r(3905));const a={sidebar_label:"HTTPResponse.frame"},o="HTTPResponse.frame() method",s={unversionedId:"api/puppeteer.httpresponse.frame",id:"api/puppeteer.httpresponse.frame",title:"HTTPResponse.frame() method",description:"Signature:",source:"@site/../docs/api/puppeteer.httpresponse.frame.md",sourceDirName:"api",slug:"/api/puppeteer.httpresponse.frame",permalink:"/next/api/puppeteer.httpresponse.frame",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"HTTPResponse.frame"},sidebar:"sidebar",previous:{title:"HTTPResponse.buffer",permalink:"/next/api/puppeteer.httpresponse.buffer"},next:{title:"HTTPResponse.fromCache",permalink:"/next/api/puppeteer.httpresponse.fromcache"}},i={},l=[],c={toc:l};function u(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"httpresponseframe-method"},"HTTPResponse.frame() method"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Signature:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"class HTTPResponse {\n  frame(): Frame | null;\n}\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/next/api/puppeteer.frame"},"Frame")," ","|"," null"),(0,p.kt)("p",null,"A ",(0,p.kt)("a",{parentName:"p",href:"/next/api/puppeteer.frame"},"Frame")," that initiated this response, or ",(0,p.kt)("inlineCode",{parentName:"p"},"null")," if navigating to error pages."))}u.isMDXComponent=!0}}]);