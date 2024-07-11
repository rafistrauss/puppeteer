/*! For license information please see 347f3756.e790563c.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79580],{35724:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>a});var i=r(85893),s=r(11151);const n={sidebar_label:"Locator"},l="Locator class",o={id:"api/puppeteer.locator",title:"Locator class",description:"Locators describe a strategy of locating objects and performing an action on them. If the action fails because the object is not ready for the action, the whole operation is retried. Various preconditions for a successful action are checked automatically.",source:"@site/versioned_docs/version-22.13.0/api/puppeteer.locator.md",sourceDirName:"api",slug:"/api/puppeteer.locator",permalink:"/api/puppeteer.locator",draft:!1,unlisted:!1,tags:[],version:"22.13.0",frontMatter:{sidebar_label:"Locator"},sidebar:"api",previous:{title:"Page.workers",permalink:"/api/puppeteer.page.workers"},next:{title:"Locator.click",permalink:"/api/puppeteer.locator.click"}},c={},a=[{value:"Signature:",id:"signature",level:4},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"locator-class",children:"Locator class"}),"\n",(0,i.jsx)(t.p,{children:"Locators describe a strategy of locating objects and performing an action on them. If the action fails because the object is not ready for the action, the whole operation is retried. Various preconditions for a successful action are checked automatically."}),"\n",(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#locators",children:"https://pptr.dev/guides/page-interactions#locators"})," for details."]}),"\n",(0,i.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"export declare abstract class Locator<T> extends EventEmitter<LocatorEvents>\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Extends:"})," ",(0,i.jsx)(t.a,{href:"/api/puppeteer.eventemitter",children:"EventEmitter"}),"<",(0,i.jsx)(t.a,{href:"/api/puppeteer.locatorevents",children:"LocatorEvents"}),">"]}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Property"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Modifiers"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Type"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Description"})})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"_",children:"_"})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"optional"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"T"})}),(0,i.jsx)("td",{children:(0,i.jsxs)(t.p,{children:["Used for nominally typing ",(0,i.jsx)(t.a,{href:"/api/puppeteer.locator",children:"Locator"}),"."]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"timeout",children:"timeout"})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"readonly"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"number"})}),(0,i.jsx)("td",{})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Method"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Modifiers"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Description"})})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"click",children:(0,i.jsx)(t.a,{href:"/api/puppeteer.locator.click",children:"click(this, options)"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"Clicks the located element."})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"clone",children:(0,i.jsx)(t.a,{href:"/api/puppeteer.locator.clone",children:"clone()"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"Clones the locator."})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"fill",children:(0,i.jsx)(t.a,{href:"/api/puppeteer.locator.fill",children:"fill(this, value, options)"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:(0,i.jsxs)(t.p,{children:["Fills out the input identified by the locator using the provided value. The type of the input is determined at runtime and the appropriate fill-out method is chosen based on the type. ",(0,i.jsx)(t.code,{children:"contenteditable"}),", select, textarea and input elements are supported."]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"filter",children:(0,i.jsx)(t.a,{href:"/api/puppeteer.locator.filter",children:"filter(predicate)"})})}),(0,i.jsx)("td",{}),(0,i.jsxs)("td",{children:[(0,i.jsx)(t.p,{children:"Creates an expectation that is evaluated against located values."}),(0,i.jsx)(t.p,{children:"If the expectations do not match, then the locator will retry."})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"hover",children:(0,i.jsx)(t.a,{href:"/api/puppeteer.locator.hover",children:"hover(this, options)"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"Hovers over the located element."})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"map",children:(0,i.jsx)(t.a,{href:"/api/puppeteer.locator.map",children:"map(mapper)"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"Maps the locator using the provided mapper."})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"race",children:(0,i.jsx)(t.a,{href:"/api/puppeteer.locator.race",children:"race(locators)"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"static"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"Creates a race between multiple locators trying to locate elements in parallel but ensures that only a single element receives the action."})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"scroll",children:(0,i.jsx)(t.a,{href:"/api/puppeteer.locator.scroll",children:"scroll(this, options)"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"Scrolls the located element."})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"setensureelementisintheviewport",children:(0,i.jsx)(t.a,{href:"/api/puppeteer.locator.setensureelementisintheviewport",children:"setEnsureElementIsInTheViewport(this, value)"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"Creates a new locator instance by cloning the current locator and specifying whether the locator should scroll the element into viewport if it is not in the viewport already."})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"settimeout",children:(0,i.jsx)(t.a,{href:"/api/puppeteer.locator.settimeout",children:"setTimeout(timeout)"})})}),(0,i.jsx)("td",{}),(0,i.jsxs)("td",{children:[(0,i.jsx)(t.p,{children:"Creates a new locator instance by cloning the current locator and setting the total timeout for the locator actions."}),(0,i.jsxs)(t.p,{children:["Pass ",(0,i.jsx)(t.code,{children:"0"})," to disable timeout."]})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"setvisibility",children:(0,i.jsx)(t.a,{href:"/api/puppeteer.locator.setvisibility",children:"setVisibility(this, visibility)"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"Creates a new locator instance by cloning the current locator with the visibility property changed to the specified value."})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"setwaitforenabled",children:(0,i.jsx)(t.a,{href:"/api/puppeteer.locator.setwaitforenabled",children:"setWaitForEnabled(this, value)"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:(0,i.jsxs)(t.p,{children:["Creates a new locator instance by cloning the current locator and specifying whether to wait for input elements to become enabled before the action. Applicable to ",(0,i.jsx)(t.code,{children:"click"})," and ",(0,i.jsx)(t.code,{children:"fill"})," actions."]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"setwaitforstableboundingbox",children:(0,i.jsx)(t.a,{href:"/api/puppeteer.locator.setwaitforstableboundingbox",children:"setWaitForStableBoundingBox(this, value)"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"Creates a new locator instance by cloning the current locator and specifying whether the locator has to wait for the element's bounding box to be same between two consecutive animation frames."})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"wait",children:(0,i.jsx)(t.a,{href:"/api/puppeteer.locator.wait",children:"wait(options)"})})}),(0,i.jsx)("td",{}),(0,i.jsxs)("td",{children:[(0,i.jsx)(t.p,{children:"Waits for the locator to get the serialized value from the page."}),(0,i.jsx)(t.p,{children:"Note this requires the value to be JSON-serializable."})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"waithandle",children:(0,i.jsx)(t.a,{href:"/api/puppeteer.locator.waithandle",children:"waitHandle(options)"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"Waits for the locator to get a handle from the page."})})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},75251:(e,t,r)=>{var i=r(67294),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var i,n={},a=null,d=null;for(i in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,i)&&!c.hasOwnProperty(i)&&(n[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===n[i]&&(n[i]=t[i]);return{$$typeof:s,type:e,key:a,ref:d,props:n,_owner:o.current}}t.Fragment=n,t.jsx=a,t.jsxs=a},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>l});var i=r(67294);const s={},n=i.createContext(s);function l(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);