(self["webpackChunkreact_uni_comps"]=self["webpackChunkreact_uni_comps"]||[]).push([[5684],{22231:function(e,t,n){"use strict";n.d(t,{m:function(){return a.m}});var a=n(9684);n(72255)},16366:function(e,t,n){"use strict";n.r(t);var a=n(67294),r=n(96089),l=n(78691),c=n(40805),i=a.memo((e=>{var t=e.demos,n=t["react-uni-comps-safearea"].component;return a.createElement(a.Fragment,null,a.createElement(a.Fragment,null,a.createElement("div",{className:"markdown"},a.createElement("h1",{id:"safearea-\u5b89\u5168\u533a"},a.createElement(r.AnchorLink,{to:"#safearea-\u5b89\u5168\u533a","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"SafeArea \u5b89\u5168\u533a")),a.createElement(l.default,t["react-uni-comps-safearea"].previewerProps,a.createElement(n,null)),a.createElement("div",{className:"markdown"},a.createElement("p",null),a.createElement("h2",{id:"api"},a.createElement(r.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"API"),a.createElement(c.Z,{src:"../src/SafeArea.tsx",identifier:"SafeArea",export:"default"}))))}));t["default"]=e=>{var t=a.useContext(r.context),n=t.demos;return a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.createElement(i,{demos:n})}},40805:function(e,t,n){"use strict";var a=n(67294),r=n(96089),l={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};t["Z"]=function(e){var t=e.identifier,n=e["export"],c=(0,r.useApiData)(t),i=(0,a.useContext)(r.context),u=i.locale,m=/^zh|cn$/i.test(u)?l["zh-CN"]:l["en-US"];return a.createElement(a.Fragment,null,c&&a.createElement("table",{style:{marginTop:24}},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,m.name),a.createElement("th",null,m.description),a.createElement("th",null,m.type),a.createElement("th",null,m["default"]))),a.createElement("tbody",null,c[n].map((function(e){return a.createElement("tr",{key:e.identifier},a.createElement("td",null,e.identifier),a.createElement("td",null,e.description||"--"),a.createElement("td",null,a.createElement("code",null,e.type)),a.createElement("td",null,a.createElement("code",null,e["default"]||e.required&&m.required||"--")))})))))}}}]);