/*! For license information please see 03a88bad.13d8401d.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[26568],{61147:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(85893),a=r(11151),o=r(23277),l=r(64757);const i={hide_table_of_contents:!0},s="Puppeteer",u={id:"index",title:"Puppeteer",description:"build",source:"@site/../docs/index.md",sourceDirName:".",slug:"/",permalink:"/next/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0}},c={},p=[{value:"Get started | API | FAQ | Contributing | Troubleshooting",id:"get-started--api--faq--contributing--troubleshooting",level:2},{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"puppeteer",children:"Puppeteer"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/puppeteer/puppeteer/actions/workflows/ci.yml",children:(0,n.jsx)(t.img,{src:"https://github.com/puppeteer/puppeteer/actions/workflows/ci.yml/badge.svg?branch=main",alt:"build"})}),"\n",(0,n.jsx)(t.a,{href:"https://npmjs.org/package/puppeteer",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/npm/v/puppeteer.svg",alt:"npm puppeteer package"})})]}),"\n",(0,n.jsx)("img",{src:"https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png",height:"200",align:"right"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Puppeteer is a JavaScript library which provides a high-level API to control\nChrome or Firefox over the\n",(0,n.jsx)(t.a,{href:"https://chromedevtools.github.io/devtools-protocol/",children:"DevTools Protocol"})," or ",(0,n.jsx)(t.a,{href:"https://pptr.dev/webdriver-bidi",children:"WebDriver BiDi"}),".\nPuppeteer runs in the headless (no visible UI) by default"]}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"get-started--api--faq--contributing--troubleshooting",children:[(0,n.jsx)(t.a,{href:"https://pptr.dev/docs",children:"Get started"})," | ",(0,n.jsx)(t.a,{href:"https://pptr.dev/api",children:"API"})," | ",(0,n.jsx)(t.a,{href:"https://pptr.dev/faq",children:"FAQ"})," | ",(0,n.jsx)(t.a,{href:"https://pptr.dev/contributing",children:"Contributing"})," | ",(0,n.jsx)(t.a,{href:"https://pptr.dev/troubleshooting",children:"Troubleshooting"})]}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,n.jsx)(l.Z,{value:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm i puppeteer # Downloads compatible Chrome during installation.\nnpm i puppeteer-core # Alternatively, install as a library, without downloading Chrome.\n"})})}),(0,n.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"yarn add puppeteer # Downloads compatible Chrome during installation.\nyarn add puppeteer-core # Alternatively, install as a library, without downloading Chrome.\n"})})}),(0,n.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"pnpm add puppeteer # Downloads compatible Chrome during installation.\npnpm add puppeteer-core # Alternatively, install as a library, without downloading Chrome.\n"})})})]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n// Or import puppeteer from 'puppeteer-core';\n\n// Launch the browser and open a new blank page\nconst browser = await puppeteer.launch();\nconst page = await browser.newPage();\n\n// Navigate the page to a URL.\nawait page.goto('https://developer.chrome.com/');\n\n// Set screen size.\nawait page.setViewport({width: 1080, height: 1024});\n\n// Type into search box.\nawait page.locator('.devsite-search-field').fill('automate beyond recorder');\n\n// Wait and click on first result.\nawait page.locator('.devsite-result-item-link').click();\n\n// Locate the full title with a unique string.\nconst textSelector = await page\n  .locator('text/Customize and automate')\n  .waitHandle();\nconst fullTitle = await textSelector?.evaluate(el => el.textContent);\n\n// Print the full title.\nconsole.log('The title of this blog post is \"%s\".', fullTitle);\n\nawait browser.close();\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},75251:(e,t,r)=>{var n=r(67294),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,o={},u=null,c=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,n)&&!s.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:i.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},85893:(e,t,r)=>{e.exports=r(75251)},64757:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(90512);const o={tabItem:"tabItem__kUE"};function l({children:e,hidden:t,className:r}){return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,r),hidden:t},e)}},23277:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(67294),a=r(90512),o=r(6379),l=r(16550),i=r(11666),s=r(47348),u=r(83928),c=r(25633);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function h(e){var t,r;return null!==(r=null===(t=n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}function b(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:function(e){return h(e).map((({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n})))}(r);return function(e){const t=(0,u.lx)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f({value:e,tabValues:t}){return t.some((t=>t.value===e))}function m({queryString:e=!1,groupId:t}){const r=(0,l.k6)(),a=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),o=(0,s._X)(a),i=(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace(d(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){p(e,t,r[t])}))}return e}({},r.location),{search:t.toString()}))}),[a,r]);return[o,i]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=b(e),[l,s]=(0,n.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const n=null!==(r=t.find((e=>e.default)))&&void 0!==r?r:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,p]=m({queryString:r,groupId:a}),[d,h]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,a]=(0,c.Nk)(t);return[r,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),g=(()=>{const e=null!=u?u:d;return f({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),h(e)}),[p,h,o]),tabValues:o}}var v=r(30358);const y={tabList:"tabList_fbd4",tabItem:"tabItem_v5XY"};function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){w(e,t,r[t])}))}return e}function x(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function O({className:e,block:t,selectedValue:r,selectValue:l,tabValues:i}){const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=s.indexOf(t),a=i[n].value;a!==r&&(u(t),l(a))},p=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;var r;t=null!==(r=s[n])&&void 0!==r?r:s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;var n;t=null!==(n=s[r])&&void 0!==n?n:s[s.length-1];break}}null==t||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e)},i.map((({value:e,label:t,attributes:o})=>n.createElement("li",x(j({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,key:e,ref:e=>s.push(e),onKeyDown:p,onClick:c},o),{className:(0,a.Z)("tabs__item",y.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===e})}),null!=t?t:e))))}function P({lazy:e,children:t,selectedValue:r}){const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=g(e);return n.createElement("div",{className:(0,a.Z)("tabs-container",y.tabList)},n.createElement(O,j({},t,e)),n.createElement(P,j({},t,e)))}function E(e){const t=(0,v.Z)();return n.createElement(k,j({key:String(t)},e),h(e.children))}},11151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>l});var n=r(67294);const a={},o=n.createContext(a);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);