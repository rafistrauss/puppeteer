"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47009],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),i=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=i(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),y=i(t),f=o,d=y["".concat(s,".").concat(f)]||y[f]||l[f]||p;return t?n.createElement(d,a(a({ref:r},u),{},{components:t})):n.createElement(d,a({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var p=t.length,a=new Array(p);a[0]=y;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var i=2;i<p;i++)a[i]=t[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},53562:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>p,metadata:()=>c,toc:()=>i});var n=t(87462),o=(t(67294),t(3905));const p={sidebar_label:"ResourceType"},a="ResourceType type",c={unversionedId:"api/puppeteer.resourcetype",id:"version-16.1.0/api/puppeteer.resourcetype",title:"ResourceType type",description:"Resource types for HTTPRequests as perceived by the rendering engine.",source:"@site/versioned_docs/version-16.1.0/api/puppeteer.resourcetype.md",sourceDirName:"api",slug:"/api/puppeteer.resourcetype",permalink:"/api/puppeteer.resourcetype",draft:!1,tags:[],version:"16.1.0",frontMatter:{sidebar_label:"ResourceType"},sidebar:"sidebar",previous:{title:"RemoteAddress.port",permalink:"/api/puppeteer.remoteaddress.port"},next:{title:"ResponseForRequest",permalink:"/api/puppeteer.responseforrequest"}},s={},i=[],u={toc:i};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"resourcetype-type"},"ResourceType type"),(0,o.kt)("p",null,"Resource types for HTTPRequests as perceived by the rendering engine."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type ResourceType = Lowercase<Protocol.Network.ResourceType>;\n")))}l.isMDXComponent=!0}}]);