"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),g=r,d=m["".concat(p,".").concat(g)]||m[g]||c[g]||o;return n?a.createElement(d,i(i({ref:t},s),{},{components:n})):a.createElement(d,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_label:"Page.waitForFunction"},i="Page.waitForFunction() method",l={unversionedId:"api/puppeteer.page.waitforfunction",id:"version-16.1.0/api/puppeteer.page.waitforfunction",title:"Page.waitForFunction() method",description:"Waits for a function to finish evaluating in the page's context.",source:"@site/versioned_docs/version-16.1.0/api/puppeteer.page.waitforfunction.md",sourceDirName:"api",slug:"/api/puppeteer.page.waitforfunction",permalink:"/api/puppeteer.page.waitforfunction",draft:!1,tags:[],version:"16.1.0",frontMatter:{sidebar_label:"Page.waitForFunction"},sidebar:"sidebar",previous:{title:"Page.waitForFrame",permalink:"/api/puppeteer.page.waitforframe"},next:{title:"Page.waitForNavigation",permalink:"/api/puppeteer.page.waitfornavigation"}},p={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pagewaitforfunction-method"},"Page.waitForFunction() method"),(0,r.kt)("p",null,"Waits for a function to finish evaluating in the page's context."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  waitForFunction<\n    Params extends unknown[],\n    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>\n  >(\n    pageFunction: Func | string,\n    options?: {\n      timeout?: number;\n      polling?: string | number;\n    },\n    ...args: Params\n  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;\n}\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,r.kt)("td",{parentName:"tr",align:null},"Func ","|"," string"),(0,r.kt)("td",{parentName:"tr",align:null},"Function to be evaluated in browser context")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},"{ timeout?: number; polling?: string ","|"," number; }"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," Optional waiting parameters - ",(0,r.kt)("code",null,"polling")," - An interval at which the ",(0,r.kt)("code",null,"pageFunction")," is executed, defaults to ",(0,r.kt)("code",null,"raf"),". If ",(0,r.kt)("code",null,"polling")," is a number, then it is treated as an interval in milliseconds at which the function would be executed. If polling is a string, then it can be one of the following values: - ",(0,r.kt)("code",null,"raf")," - to constantly execute ",(0,r.kt)("code",null,"pageFunction")," in ",(0,r.kt)("code",null,"requestAnimationFrame")," callback. This is the tightest polling mode which is suitable to observe styling changes. - ",(0,r.kt)("code",null,"mutation"),"- to execute pageFunction on every DOM mutation. - ",(0,r.kt)("code",null,"timeout")," - maximum time to wait for in milliseconds. Defaults to ",(0,r.kt)("code",null,"30000")," (30 seconds). Pass ",(0,r.kt)("code",null,"0")," to disable timeout. The default value can be changed by using the ",(0,r.kt)("a",{parentName:"td",href:"/api/puppeteer.page.setdefaulttimeout"},"Page.setDefaultTimeout()")," method.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"args"),(0,r.kt)("td",{parentName:"tr",align:null},"Params"),(0,r.kt)("td",{parentName:"tr",align:null},"Arguments to pass to ",(0,r.kt)("code",null,"pageFunction"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<",(0,r.kt)("a",{parentName:"p",href:"/api/puppeteer.handlefor"},"HandleFor"),"<","Awaited","<","ReturnType","<","Func",">",">",">",">"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," which resolves to a JSHandle/ElementHandle of the the ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction"),"'s return value."),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/api/puppeteer.page.waitforfunction"},"Page.waitForFunction()")," can be used to observe viewport size change:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const puppeteer = require('puppeteer');\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  const watchDog = page.waitForFunction('window.innerWidth < 100');\n  await page.setViewport({width: 50, height: 50});\n  await watchDog;\n  await browser.close();\n})();\n")),(0,r.kt)("h2",{id:"example-2"},"Example 2"),(0,r.kt)("p",null,"To pass arguments from node.js to the predicate of ",(0,r.kt)("a",{parentName:"p",href:"/api/puppeteer.page.waitforfunction"},"Page.waitForFunction()")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const selector = '.foo';\nawait page.waitForFunction(\n  selector => !!document.querySelector(selector),\n  {},\n  selector\n);\n")),(0,r.kt)("h2",{id:"example-3"},"Example 3"),(0,r.kt)("p",null,"The predicate of ",(0,r.kt)("a",{parentName:"p",href:"/api/puppeteer.page.waitforfunction"},"Page.waitForFunction()")," can be asynchronous too:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const username = 'github-username';\nawait page.waitForFunction(\n  async username => {\n    const githubResponse = await fetch(\n      `https://api.github.com/users/${username}`\n    );\n    const githubUser = await githubResponse.json();\n    // show the avatar\n    const img = document.createElement('img');\n    img.src = githubUser.avatar_url;\n    // wait 3 seconds\n    await new Promise((resolve, reject) => setTimeout(resolve, 3000));\n    img.remove();\n  },\n  {},\n  username\n);\n")))}c.isMDXComponent=!0}}]);