(self["webpackChunkreact_uni_comps"]=self["webpackChunkreact_uni_comps"]||[]).push([[5642],{22231:function(e,t,n){"use strict";n.d(t,{m:function(){return l.m}});var l=n(9684);n(72255)},88770:function(e,t,n){"use strict";n.r(t);var l=n(67294),r=n(96089),a=n(78691),c=n(40805),i=l.memo((e=>{var t=e.demos,n=t["react-uni-comps-rollingnumber"].component;return l.createElement(l.Fragment,null,l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("h1",{id:"rollingnumber-\u6eda\u52a8\u6570\u5b57"},l.createElement(r.AnchorLink,{to:"#rollingnumber-\u6eda\u52a8\u6570\u5b57","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"RollingNumber \u6eda\u52a8\u6570\u5b57")),l.createElement(a.default,t["react-uni-comps-rollingnumber"].previewerProps,l.createElement(n,null)),l.createElement("div",{className:"markdown"},l.createElement("p",null),l.createElement("h2",{id:"api"},l.createElement(r.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"API"),l.createElement(c.Z,{src:"../src/RollingNumber.tsx",identifier:"RollingNumber",export:"default"}))))}));t["default"]=e=>{var t=l.useContext(r.context),n=t.demos;return l.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(i,{demos:n})}},40805:function(e,t,n){"use strict";var l=n(67294),r=n(96089),a={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};t["Z"]=function(e){var t=e.identifier,n=e["export"],c=(0,r.useApiData)(t),i=(0,l.useContext)(r.context),u=i.locale,m=/^zh|cn$/i.test(u)?a["zh-CN"]:a["en-US"];return l.createElement(l.Fragment,null,c&&l.createElement("table",{style:{marginTop:24}},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,m.name),l.createElement("th",null,m.description),l.createElement("th",null,m.type),l.createElement("th",null,m["default"]))),l.createElement("tbody",null,c[n].map((function(e){return l.createElement("tr",{key:e.identifier},l.createElement("td",null,e.identifier),l.createElement("td",null,e.description||"--"),l.createElement("td",null,l.createElement("code",null,e.type)),l.createElement("td",null,l.createElement("code",null,e["default"]||e.required&&m.required||"--")))})))))}}}]);