"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14249],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(r),f=n,d=c["".concat(l,".").concat(f)]||c[f]||u[f]||o;return r?a.createElement(d,p(p({ref:t},s),{},{components:r})):a.createElement(d,p({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var m=2;m<o;m++)p[m]=r[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1528:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_label:"Frame.waitForXPath"},p="Frame.waitForXPath() method",i={unversionedId:"api/puppeteer.frame.waitforxpath",id:"version-16.1.0/api/puppeteer.frame.waitforxpath",title:"Frame.waitForXPath() method",description:"Warning: This API is now obsolete.",source:"@site/versioned_docs/version-16.1.0/api/puppeteer.frame.waitforxpath.md",sourceDirName:"api",slug:"/api/puppeteer.frame.waitforxpath",permalink:"/api/puppeteer.frame.waitforxpath",draft:!1,tags:[],version:"16.1.0",frontMatter:{sidebar_label:"Frame.waitForXPath"},sidebar:"sidebar",previous:{title:"Frame.waitForTimeout",permalink:"/api/puppeteer.frame.waitfortimeout"},next:{title:"FrameAddScriptTagOptions",permalink:"/api/puppeteer.frameaddscripttagoptions"}},l={},m=[{value:"Parameters",id:"parameters",level:2}],s={toc:m};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"framewaitforxpath-method"},"Frame.waitForXPath() method"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Warning: This API is now obsolete."),(0,n.kt)("p",{parentName:"blockquote"},"Use ",(0,n.kt)("a",{parentName:"p",href:"/api/puppeteer.frame.waitforselector"},"Frame.waitForSelector()")," with the ",(0,n.kt)("inlineCode",{parentName:"p"},"xpath")," prefix."),(0,n.kt)("p",{parentName:"blockquote"},"Wait for the ",(0,n.kt)("inlineCode",{parentName:"p"},"xpath")," to appear in page. If at the moment of calling the method the ",(0,n.kt)("inlineCode",{parentName:"p"},"xpath")," already exists, the method will return immediately. If the xpath doesn't appear after the ",(0,n.kt)("inlineCode",{parentName:"p"},"timeout")," milliseconds of waiting, the function will throw."),(0,n.kt)("p",{parentName:"blockquote"},"For a code example, see the example for ",(0,n.kt)("a",{parentName:"p",href:"/api/puppeteer.frame.waitforselector"},"Frame.waitForSelector()"),". That function behaves identically other than taking a CSS selector rather than an XPath.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"class Frame {\n  waitForXPath(\n    xpath: string,\n    options?: WaitForSelectorOptions\n  ): Promise<ElementHandle<Node> | null>;\n}\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"xpath"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"the XPath expression to wait for.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"options"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.waitforselectoroptions"},"WaitForSelectorOptions")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)")," options to configure the visiblity of the element and how long to wait before timing out.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",{parentName:"p",href:"/api/puppeteer.elementhandle"},"ElementHandle"),"<","Node",">"," ","|"," null",">"))}u.isMDXComponent=!0}}]);