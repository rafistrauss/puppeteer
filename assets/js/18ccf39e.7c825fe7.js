"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35638],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),i=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},c=function(e){var r=i(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=i(t),m=a,d=y["".concat(p,".").concat(m)]||y[m]||s[m]||o;return t?n.createElement(d,u(u({ref:r},c),{},{components:t})):n.createElement(d,u({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=y;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var i=2;i<o;i++)u[i]=t[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},85486:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>u,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=t(87462),a=(t(67294),t(3905));const o={sidebar_label:"CustomQueryHandler.queryAll"},u="CustomQueryHandler.queryAll property",l={unversionedId:"api/puppeteer.customqueryhandler.queryall",id:"api/puppeteer.customqueryhandler.queryall",title:"CustomQueryHandler.queryAll property",description:"Signature:",source:"@site/../docs/api/puppeteer.customqueryhandler.queryall.md",sourceDirName:"api",slug:"/api/puppeteer.customqueryhandler.queryall",permalink:"/next/api/puppeteer.customqueryhandler.queryall",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"CustomQueryHandler.queryAll"},sidebar:"sidebar",previous:{title:"CustomQueryHandler",permalink:"/next/api/puppeteer.customqueryhandler"},next:{title:"CustomQueryHandler.queryOne",permalink:"/next/api/puppeteer.customqueryhandler.queryone"}},p={},i=[],c={toc:i};function s(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"customqueryhandlerqueryall-property"},"CustomQueryHandler.queryAll property"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface CustomQueryHandler {\n  queryAll?: (node: Node, selector: string) => Node[];\n}\n")))}s.isMDXComponent=!0}}]);