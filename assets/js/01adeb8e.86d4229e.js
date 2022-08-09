"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37903],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(t),f=a,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||o;return t?n.createElement(d,p(p({ref:r},l),{},{components:t})):n.createElement(d,p({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=m;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},84017:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const o={sidebar_label:"TimeoutError"},p="TimeoutError class",i={unversionedId:"api/puppeteer.timeouterror",id:"api/puppeteer.timeouterror",title:"TimeoutError class",description:"TimeoutError is emitted whenever certain operations are terminated due to timeout.",source:"@site/../docs/api/puppeteer.timeouterror.md",sourceDirName:"api",slug:"/api/puppeteer.timeouterror",permalink:"/next/api/puppeteer.timeouterror",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"TimeoutError"},sidebar:"sidebar",previous:{title:"TargetFilterCallback",permalink:"/next/api/puppeteer.targetfiltercallback"},next:{title:"Touchscreen",permalink:"/next/api/puppeteer.touchscreen"}},u={},c=[{value:"Remarks",id:"remarks",level:2}],l={toc:c};function s(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"timeouterror-class"},"TimeoutError class"),(0,a.kt)("p",null,"TimeoutError is emitted whenever certain operations are terminated due to timeout."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class TimeoutError extends CustomError\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Extends:")," ",(0,a.kt)("a",{parentName:"p",href:"/next/api/puppeteer.customerror"},"CustomError")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"Example operations are ",(0,a.kt)("a",{parentName:"p",href:"/next/api/puppeteer.page.waitforselector"},"page.waitForSelector")," or ",(0,a.kt)("a",{parentName:"p",href:"/next/api/puppeteer.puppeteernode.launch"},"puppeteer.launch"),"."))}s.isMDXComponent=!0}}]);