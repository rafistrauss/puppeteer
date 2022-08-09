"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44668],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,d=f["".concat(p,".").concat(m)]||f[m]||s[m]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},41994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_label:"FrameWaitForFunctionOptions"},o="FrameWaitForFunctionOptions interface",l={unversionedId:"api/puppeteer.framewaitforfunctionoptions",id:"version-16.1.0/api/puppeteer.framewaitforfunctionoptions",title:"FrameWaitForFunctionOptions interface",description:"Signature:",source:"@site/versioned_docs/version-16.1.0/api/puppeteer.framewaitforfunctionoptions.md",sourceDirName:"api",slug:"/api/puppeteer.framewaitforfunctionoptions",permalink:"/api/puppeteer.framewaitforfunctionoptions",draft:!1,tags:[],version:"16.1.0",frontMatter:{sidebar_label:"FrameWaitForFunctionOptions"},sidebar:"sidebar",previous:{title:"FrameAddStyleTagOptions.url",permalink:"/api/puppeteer.frameaddstyletagoptions.url"},next:{title:"FrameWaitForFunctionOptions.polling",permalink:"/api/puppeteer.framewaitforfunctionoptions.polling"}},p={},u=[{value:"Properties",id:"properties",level:2}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"framewaitforfunctionoptions-interface"},"FrameWaitForFunctionOptions interface"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface FrameWaitForFunctionOptions\n")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/puppeteer.framewaitforfunctionoptions.polling"},"polling?")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"string ","|"," number"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("i",null,"(Optional)")," An interval at which the ",(0,a.kt)("code",null,"pageFunction")," is executed, defaults to ",(0,a.kt)("code",null,"raf"),". If ",(0,a.kt)("code",null,"polling")," is a number, then it is treated as an interval in milliseconds at which the function would be executed. If ",(0,a.kt)("code",null,"polling")," is a string, then it can be one of the following values:"),(0,a.kt)("p",null,"- ",(0,a.kt)("code",null,"raf")," - to constantly execute ",(0,a.kt)("code",null,"pageFunction")," in ",(0,a.kt)("code",null,"requestAnimationFrame")," callback. This is the tightest polling mode which is suitable to observe styling changes."),(0,a.kt)("p",null,"- ",(0,a.kt)("code",null,"mutation")," - to execute ",(0,a.kt)("code",null,"pageFunction")," on every DOM mutation."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/puppeteer.framewaitforfunctionoptions.timeout"},"timeout?")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," Maximum time to wait in milliseconds. Defaults to ",(0,a.kt)("code",null,"30000")," (30 seconds). Pass ",(0,a.kt)("code",null,"0")," to disable the timeout. Puppeteer's default timeout can be changed using ",(0,a.kt)("a",{parentName:"td",href:"/api/puppeteer.page.setdefaulttimeout"},"Page.setDefaultTimeout()"),".")))))}s.isMDXComponent=!0}}]);