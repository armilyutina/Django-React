(this["webpackJsonpstudent-ui"]=this["webpackJsonpstudent-ui"]||[]).push([[0],{34:function(t,e,n){},68:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(15),u=n.n(a),i=n(11),o=n(14),s=n.n(o),d=n(21),p=n(22),f=n.n(p),l="FETCH_GROUP",h="REMOVE_GROUP",j="FETCH_STUDENTS",b=n(17),O=(n(63),n(34),n(3));var m={fetchGroup:function(){return function(){var t=Object(d.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f()({method:"GET",url:"http://127.0.0.1:8000/api/group"});case 2:n=t.sent,e({type:l,payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},removeGroup:function(t){return{type:h,id:t}}},v=Object(i.b)((function(t){return{getData:t.getData}}),m)((function(t){var e=t.fetchGroup,n=t.getData,c=t.removeGroup;return Object(r.useEffect)((function(){e()}),[]),Object(O.jsxs)("div",{className:"app",children:[Object(O.jsx)("p",{className:"title",children:" \u0421\u043f\u0438\u0441\u043e\u043a \u0433\u0440\u0443\u043f\u043f "}),Object(O.jsx)("ul",{className:"ul",children:n.map((function(t){return Object(O.jsxs)("li",{className:"li",children:[Object(O.jsx)(b.b,{className:"link",to:{pathname:"/group/".concat(t.id),fromDashboard:!1},children:t.number}),Object(O.jsx)("button",{onClick:function(){return c(t.id)},children:"Remove"})]},t.id)}))})]})})),x=n(9),E=n(36),g=[],y=Object(x.c)({getData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0,n=e.type,r=e.payload,c=e.id;switch(n){case l:return r;case h:return t.filter((function(t){return t.id!==c}));default:return t}}}),w=[E.a],S=("undefined"!==typeof window?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null)||x.d,_=Object(x.e)(y,void 0,S(x.a.apply(void 0,w))),D=n(2);var G={fetchStudents:function(t){return function(){var e=Object(d.a)(s.a.mark((function e(n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()({method:"GET",url:"http://127.0.0.1:8000/api/group/".concat(t)});case 2:r=e.sent,n({type:j,payload:r.students.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},N=Object(i.b)((function(t){return{getStudents:t.getStudents}}),G)((function(t){var e=t.getStudents,n=t.fetchStudents,c=t.match.params.id;return Object(r.useEffect)((function(){n(c)}),[c]),Object(O.jsx)("div",{children:e.map((function(t){return Object(O.jsx)("p",{children:t.name})}))})}));u.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(i.a,{store:_,children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(D.a,{path:"/",exact:!0,component:v}),Object(O.jsx)(D.a,{path:"/group/:id",exact:!0,component:N})]})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.7637017d.chunk.js.map