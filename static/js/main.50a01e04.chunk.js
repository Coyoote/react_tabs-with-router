(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(9),n=c.n(a),s=c(4),i=(c(14),c(15),c(16),c(2)),b=c(0),j=c.n(b),r=c(6),l=c.n(r),d=c(1),o=function(e){var t=e.to,c=e.name;return Object(d.jsx)(s.c,{to:t,className:function(e){var t=e.isActive;return l()("navbar-item",{"is-active":t})},children:c})},x=function(){return Object(d.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"navbar-brand",children:[Object(d.jsx)(o,{to:"/",name:"Home"}),Object(d.jsx)(o,{to:"/tabs",name:"Tabs"})]})})})},h=function(e){var t=e.tab;return Object(d.jsx)(s.b,{to:"../".concat(t.id),children:t.title})},m=j.a.memo((function(e){var t=e.tabs,c=Object(i.h)().tabId,a=t.find((function(e){return e.id===c}))||null;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"title",children:"Tabs page"}),Object(d.jsx)("div",{className:"tabs is-boxed",children:Object(d.jsx)("ul",{children:t.map((function(e){return Object(d.jsx)("li",{"data-cy":"Tab",className:l()({"is-active":e.id===c}),children:Object(d.jsx)(h,{tab:e})},e.id)}))})}),Object(d.jsx)("div",{className:"block","data-cy":"TabContent",children:a?a.content:"Please select a tab"})]})})),O=function(){return Object(d.jsx)("h1",{className:"title",children:"Home page"})},u=function(){return Object(d.jsx)("h1",{className:"title",children:"Page not found"})},v=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],f=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(x,{}),Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(i.d,{children:[Object(d.jsx)(i.b,{path:"*",element:Object(d.jsx)(u,{})}),Object(d.jsx)(i.b,{path:"/",element:Object(d.jsx)(O,{})}),Object(d.jsx)(i.b,{path:"/home",element:Object(d.jsx)(i.a,{to:"/",replace:!0})}),Object(d.jsxs)(i.b,{path:"/tabs",children:[Object(d.jsx)(i.b,{index:!0,element:Object(d.jsx)(m,{tabs:v})}),Object(d.jsx)(i.b,{path:":tabId",element:Object(d.jsx)(m,{tabs:v})})]})]})})})]})};n.a.render(Object(d.jsx)(s.a,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.50a01e04.chunk.js.map