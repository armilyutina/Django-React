(this["webpackJsonpstudent-ui"]=this["webpackJsonpstudent-ui"]||[]).push([[0],{51:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(27),r=n.n(s),i=(n(17),n(9)),j=n(11),u=n.n(j),d=n(10),b=(n(51),n(1)),l=function(e){var t=e.children;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(o,{}),t,Object(b.jsx)(h,{})]})},h=function(){return Object(b.jsx)("h3",{children:"Its footer"})},o=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){u()({method:"GET",url:"http://127.0.0.1:8000/api/group"}).then((function(e){return a(e.data)}))}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsx)("div",{class:"container-fluid",children:Object(b.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNav",children:Object(b.jsx)("ul",{class:"navbar-nav",children:n.map((function(e){return Object(b.jsx)("li",{class:"nav-item",children:Object(b.jsx)(d.b,{class:"nav-link active",to:{pathname:"/group/".concat(e.id)},children:e.number})})}))})})})})})},O=n(2),p=function(e){var t=e.match,n=Object(c.useState)([]),a=Object(i.a)(n,2),s=a[0],r=a[1],j=Object(c.useState)([]),l=Object(i.a)(j,2),h=l[0],o=l[1],O=t.params.id;return Object(c.useEffect)((function(){u()({method:"GET",url:"http://127.0.0.1:8000/api/group/".concat(O)}).then((function(e){r(e.data),o(e.dara.students)}))}),[O]),Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{children:["Group number: ",s.number]}),Object(b.jsxs)("span",{children:["Course number ",s.course]}),Object(b.jsxs)("span",{children:["Faculty number ",s.faculty]}),Object(b.jsx)("div",{className:"row",children:h.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:e.surname}),Object(b.jsx)(d.b,{to:{pathname:"student/".concat(e.id),fromDashboard:!1},children:"Details"})]})}))})]})},x=function(e){var t=e.match,n=Object(c.useState)([]),a=Object(i.a)(n,2),s=a[0],r=a[1],j=t.params.id;return Object(c.useEffect)((function(){u()({method:"GET",url:"http://127.0.0.1:8000/api/student/".concat(j)}).then((function(e){return r(e.data)}))}),[j]),Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{children:["Name: ",s.name]}),Object(b.jsxs)("span",{children:["Surname ",s.surname]}),Object(b.jsxs)("span",{children:["Father's name",s.fathersname]})]})};var m=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(l,{children:Object(b.jsx)(d.a,{children:Object(b.jsxs)(O.c,{children:[Object(b.jsx)(O.a,{path:"group/:id",exact:!0,component:p}),Object(b.jsx)(O.a,{path:"student/:id",exact:!0,component:x})]})})})})};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.9ae2b37a.chunk.js.map