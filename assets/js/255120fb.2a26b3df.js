"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37335],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),v=n,g=m["".concat(s,".").concat(v)]||m[v]||u[v]||o;return r?a.createElement(g,p(p({ref:t},c),{},{components:r})):a.createElement(g,p({ref:t},c))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67701:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_label:"Coverage.startJSCoverage"},p="Coverage.startJSCoverage() method",i={unversionedId:"api/puppeteer.coverage.startjscoverage",id:"version-16.1.0/api/puppeteer.coverage.startjscoverage",title:"Coverage.startJSCoverage() method",description:"Signature:",source:"@site/versioned_docs/version-16.1.0/api/puppeteer.coverage.startjscoverage.md",sourceDirName:"api",slug:"/api/puppeteer.coverage.startjscoverage",permalink:"/api/puppeteer.coverage.startjscoverage",draft:!1,tags:[],version:"16.1.0",frontMatter:{sidebar_label:"Coverage.startJSCoverage"},sidebar:"sidebar",previous:{title:"Coverage.startCSSCoverage",permalink:"/api/puppeteer.coverage.startcsscoverage"},next:{title:"Coverage.stopCSSCoverage",permalink:"/api/puppeteer.coverage.stopcsscoverage"}},s={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"coveragestartjscoverage-method"},"Coverage.startJSCoverage() method"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"class Coverage {\n  startJSCoverage(options?: JSCoverageOptions): Promise<void>;\n}\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"options"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.jscoverageoptions"},"JSCoverageOptions")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)")," Set of configurable options for coverage defaults to ",(0,n.kt)("code",null,"resetOnNavigation : true, reportAnonymousScripts : false"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","void",">"),(0,n.kt)("p",null,"Promise that resolves when coverage is started."),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"Anonymous scripts are ones that don't have an associated url. These are scripts that are dynamically created on the page using ",(0,n.kt)("inlineCode",{parentName:"p"},"eval")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"new Function"),". If ",(0,n.kt)("inlineCode",{parentName:"p"},"reportAnonymousScripts")," is set to ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),", anonymous scripts will have ",(0,n.kt)("inlineCode",{parentName:"p"},"pptr://__puppeteer_evaluation_script__")," as their URL."))}u.isMDXComponent=!0}}]);