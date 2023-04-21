"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7540],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),d=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(a),c=n,h=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return a?r.createElement(h,p(p({ref:t},s),{},{components:a})):r.createElement(h,p({ref:t},s))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var d=2;d<l;d++)p[d]=a[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},89713:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>s});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const p={sidebar_label:"JSHandle"},i="JSHandle class",o={unversionedId:"api/puppeteer.jshandle",id:"version-19.10.1/api/puppeteer.jshandle",title:"JSHandle class",description:"Represents a reference to a JavaScript object. Instances can be created using Page.evaluateHandle().",source:"@site/versioned_docs/version-19.10.1/api/puppeteer.jshandle.md",sourceDirName:"api",slug:"/api/puppeteer.jshandle",permalink:"/api/puppeteer.jshandle",draft:!1,tags:[],version:"19.10.1",frontMatter:{sidebar_label:"JSHandle"},sidebar:"api",previous:{title:"Frame.waitForXPath",permalink:"/api/puppeteer.frame.waitforxpath"},next:{title:"JSHandle.asElement",permalink:"/api/puppeteer.jshandle.aselement"}},d={},s=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],u={toc:s};function m(e){var{components:t}=e,a=l(e,["components"]);return(0,r.kt)("wrapper",n({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",n({},{id:"jshandle-class"}),"JSHandle class"),(0,r.kt)("p",null,"Represents a reference to a JavaScript object. Instances can be created using ",(0,r.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.page.evaluatehandle"}),"Page.evaluateHandle()"),"."),(0,r.kt)("p",null,"Handles prevent the referenced JavaScript object from being garbage-collected unless the handle is purposely ",(0,r.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.jshandle.dispose"}),"disposed"),". JSHandles are auto-disposed when their associated frame is navigated away or the parent context gets destroyed."),(0,r.kt)("p",null,"Handles can be used as arguments for any evaluation function such as ",(0,r.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.page._eval"}),"Page.$eval()"),", ",(0,r.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.page.evaluate"}),"Page.evaluate()"),", and ",(0,r.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.page.evaluatehandle"}),"Page.evaluateHandle()"),". They are resolved to their referenced object."),(0,r.kt)("h4",n({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-typescript"}),"export declare class JSHandle<T = unknown>\n")),(0,r.kt)("h2",n({},{id:"remarks"}),"Remarks"),(0,r.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,r.kt)("inlineCode",{parentName:"p"},"JSHandle")," class."),(0,r.kt)("h2",n({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-ts"}),"const windowHandle = await page.evaluateHandle(() => window);\n")),(0,r.kt)("h2",n({},{id:"properties"}),"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Property"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Modifiers"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"[","_","_","JSHandleSymbol","]"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"optional")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"T"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Used for nominally typing ",(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.jshandle"}),"JSHandle"),".")))),(0,r.kt)("h2",n({},{id:"methods"}),"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Method"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Modifiers"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.jshandle.aselement"}),"asElement()")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Either ",(0,r.kt)("code",null,"null")," or the handle itself if the handle is an instance of ",(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.elementhandle"}),"ElementHandle"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.jshandle.dispose"}),"dispose()")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Releases the object referenced by the handle for garbage collection.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.jshandle.evaluate"}),"evaluate(pageFunction, args)")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Evaluates the given function with the current handle as its first argument.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.jshandle.evaluatehandle"}),"evaluateHandle(pageFunction, args)")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Evaluates the given function with the current handle as its first argument.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.jshandle.getproperties"}),"getProperties()")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Gets a map of handles representing the properties of the current handle.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.jshandle.getproperty"}),"getProperty(propertyName)")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Fetches a single property from the referenced object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.jshandle.getproperty_1"}),"getProperty(propertyName)")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.jshandle.getproperty_2"}),"getProperty(propertyName)")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.jshandle.jsonvalue"}),"jsonValue()")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"A vanilla object representing the serializable portions of the referenced object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.jshandle.remoteobject"}),"remoteObject()")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Provides access to the ","[","Protocol.Runtime.RemoteObject","]","(",(0,r.kt)("a",n({parentName:"td"},{href:"https://chromedevtools.github.io/devtools-protocol/tot/Runtime/%5C#type-RemoteObject"}),"https://chromedevtools.github.io/devtools-protocol/tot/Runtime/\\#type-RemoteObject"),") backing this handle.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.jshandle.tostring"}),"toString()")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Returns a string representation of the JSHandle.")))))}m.isMDXComponent=!0}}]);