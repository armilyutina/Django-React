(this["webpackJsonpstudent-ui"]=this["webpackJsonpstudent-ui"]||[]).push([[0],{33:function(t,e,n){},52:function(t,e,n){},59:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(27),s=n.n(r),i=(n(33),n(17),n(11)),u=n(10),j=n.n(u),o=n(12),l=(n(52),n(1)),b=function(t){var e=t.children;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(h,{}),e,Object(l.jsx)(d,{})]})},d=function(){return Object(l.jsx)("h3",{children:"Its footer"})},h=function(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),n=e[0],a=e[1];return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/group"}).then((function(t){a(t.data)})),console.log(n)}),[]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(l.jsx)("div",{class:"container-fluid",children:Object(l.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNav",children:Object(l.jsx)("ul",{class:"navbar-nav",children:n.map((function(t){return Object(l.jsx)("li",{class:"nav-item",children:Object(l.jsx)(o.b,{class:"nav-link active","aria-current":"page",to:{pathname:"/group/".concat(t.id),fromDashboard:!1},children:t.number})})}))})})})})})},O=n(2);var p=function(t){var e=t.match,n=Object(c.useState)([]),a=Object(i.a)(n,2),r=a[0],s=a[1],u=e.params.id;return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/group/".concat(u,"/")}).then((function(t){s(t.data),console.log(t.data)}))}),[u]),Object(l.jsxs)("div",{children:[Object(l.jsxs)("span",{children:["Group number: ",r.number]}),Object(l.jsxs)("span",{children:["Course number ",r.course]}),Object(l.jsxs)("span",{children:["Faculty number ",r.faculty]})]})};var f=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(o.a,{children:[Object(l.jsx)(b,{}),Object(l.jsx)(O.c,{children:Object(l.jsx)(O.a,{path:"group/:id/",component:p})})]})})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),r(t),s(t)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),x()}},[[59,1,2]]]);
//# sourceMappingURL=main.cf0e0bc3.chunk.js.map