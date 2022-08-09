"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30106],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,h=c["".concat(i,".").concat(m)]||c[m]||d[m]||p;return r?n.createElement(h,l(l({ref:t},s),{},{components:r})):n.createElement(h,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,l=new Array(p);l[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<p;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},33930:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const p={sidebar_label:"PuppeteerNode"},l="PuppeteerNode class",o={unversionedId:"api/puppeteer.puppeteernode",id:"version-16.1.0/api/puppeteer.puppeteernode",title:"PuppeteerNode class",description:"Extends the main Puppeteer class with Node specific behaviour for fetching and downloading browsers.",source:"@site/versioned_docs/version-16.1.0/api/puppeteer.puppeteernode.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteernode",permalink:"/api/puppeteer.puppeteernode",draft:!1,tags:[],version:"16.1.0",frontMatter:{sidebar_label:"PuppeteerNode"},sidebar:"sidebar",previous:{title:"PuppeteerLifeCycleEvent",permalink:"/api/puppeteer.puppeteerlifecycleevent"},next:{title:"PuppeteerNode._preferredRevision",permalink:"/api/puppeteer.puppeteernode._preferredrevision"}},i={},u=[{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],s={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"puppeteernode-class"},"PuppeteerNode class"),(0,a.kt)("p",null,"Extends the main ",(0,a.kt)("a",{parentName:"p",href:"/api/puppeteer.puppeteer"},"Puppeteer")," class with Node specific behaviour for fetching and downloading browsers."),(0,a.kt)("p",null,"If you're using Puppeteer in a Node environment, this is the class you'll get when you run ",(0,a.kt)("inlineCode",{parentName:"p"},"require('puppeteer')")," (or the equivalent ES ",(0,a.kt)("inlineCode",{parentName:"p"},"import"),")."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class PuppeteerNode extends Puppeteer\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Extends:")," ",(0,a.kt)("a",{parentName:"p",href:"/api/puppeteer.puppeteer"},"Puppeteer")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"The most common method to use is ",(0,a.kt)("a",{parentName:"p",href:"/api/puppeteer.puppeteernode.launch"},"launch"),", which is used to launch and connect to a new browser instance."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/api/puppeteer.puppeteer"},"the main Puppeteer class")," for methods common to all environments, such as ",(0,a.kt)("a",{parentName:"p",href:"/api/puppeteer.puppeteer.connect"},"Puppeteer.connect()"),"."),(0,a.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"PuppeteerNode")," class."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"The following is a typical example of using Puppeteer to drive automation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://www.google.com');\n  // other actions...\n  await browser.close();\n})();\n")),(0,a.kt)("p",null,"Once you have created a ",(0,a.kt)("inlineCode",{parentName:"p"},"page")," you have access to a large API to interact with the page, navigate, or find certain elements in that page. The ",(0,a.kt)("a",{parentName:"p",href:"/api/puppeteer.page"},"`","page","`"," documentation")," lists all the available methods."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/puppeteer.puppeteernode._preferredrevision"},"_","preferredRevision")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/puppeteer.puppeteernode.product"},"product")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the browser that is under automation (",(0,a.kt)("code",null,'"',"chrome",'"')," or ",(0,a.kt)("code",null,'"',"firefox",'"'),")")))),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/puppeteer.puppeteernode.connect"},"connect(options)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"This method attaches Puppeteer to an existing browser instance.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/puppeteer.puppeteernode.createbrowserfetcher"},"createBrowserFetcher(options)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/puppeteer.puppeteernode.defaultargs"},"defaultArgs(options)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/puppeteer.puppeteernode.executablepath"},"executablePath(channel)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/puppeteer.puppeteernode.launch"},"launch(options)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Launches puppeteer and launches a browser instance with given arguments and options when specified.")))))}d.isMDXComponent=!0}}]);