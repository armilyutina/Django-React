(this["webpackJsonpstudent-ui"]=this["webpackJsonpstudent-ui"]||[]).push([[0],{36:function(t,e,n){},72:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(17),u=n.n(a),i=n(11),o=n(16),s=n.n(o),d=n(23),p=n(24),l=n.n(p),f="FETCH_GROUP",j="REMOVE_GROUP",h="FETCH_STUDENTS",b="REMOVE_STUDENT",O="ADD_STUDENT",m=n(13),v=(n(67),n(36),n(2));var x={fetchGroup:function(){return function(){var t=Object(d.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l()({method:"GET",url:"http://127.0.0.1:8000/api/group"});case 2:n=t.sent,e({type:f,payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},removeGroup:function(t){return{type:j,id:t}}},E=Object(i.b)((function(t){return{getData:t.getData}}),x)((function(t){var e=t.fetchGroup,n=t.getData,c=t.removeGroup;return Object(r.useEffect)((function(){e()}),[]),Object(v.jsxs)("div",{className:"app",children:[Object(v.jsx)("p",{className:"title",children:" \u0421\u043f\u0438\u0441\u043e\u043a \u0433\u0440\u0443\u043f\u043f "}),Object(v.jsx)("ul",{className:"ul",children:n.map((function(t){return Object(v.jsxs)("li",{className:"li",children:[Object(v.jsx)(m.b,{className:"link",to:{pathname:"/group/".concat(t.id),fromDashboard:!1},children:t.number}),Object(v.jsx)("button",{onClick:function(){return c(t.id)},children:"Remove"})]},t.id)}))})]})})),g=n(9),S=n(38),y=n(40),w=[],D=Object(g.c)({getData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0,n=e.type,r=e.payload,c=e.id;switch(n){case f:return r;case j:return t.filter((function(t){return t.id!==c}));default:return t}},getStudents:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0,n=e.type,r=e.payload,c=e.id,a=e.obj;switch(n){case h:return r;case b:return t.filter((function(t){return t.id!==c}));case O:return[].concat(Object(y.a)(t),[a]);default:return t}}}),T=[S.a],_=("undefined"!==typeof window?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null)||g.d,N=Object(g.e)(D,void 0,_(g.a.apply(void 0,T))),G=n(3),k=n(39),R={fetchStudents:function(t){return function(){var e=Object(d.a)(s.a.mark((function e(n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l()({method:"GET",url:"http://127.0.0.1:8000/api/group/".concat(t)});case 2:r=e.sent,n({type:h,payload:r.data.students});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},addStudent:function(t){return{type:O,obj:t}},removeStudent:function(t){return{type:b,id:t}}},C=Object(i.b)((function(t){return{getStudents:t.getStudents}}),R)((function(t){var e=t.getStudents,n=t.fetchStudents,c=t.match,a=t.removeStudent,u=t.addStudent,i=c.params.id;Object(r.useEffect)((function(){n(i)}),[i]);var o=function(t){if(13===t.code){var e=t.target.value.split(""),n=Object(k.a)(e,3),r=n[0],c=n[1],a=n[2];u({name:r,surname:c,fathersname:a}),t.target.value=""}};return Object(v.jsxs)("div",{children:[Object(v.jsx)("ul",{children:e.map((function(t){return Object(v.jsxs)("li",{children:[Object(v.jsxs)("p",{children:[t.name," ",t.surname," ",t.fathersname]}),Object(v.jsx)("button",{type:"button",onClick:function(){return a(t.id)},children:"REMOVE"})]},t.id)}))}),Object(v.jsx)("input",{placeholder:"enter new student",onChange:function(){return o}})]})})),U=function(){return Object(v.jsx)("div",{children:"ALINA"})};u.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(i.a,{store:N,children:Object(v.jsxs)(m.a,{children:[Object(v.jsx)(G.a,{path:"/",exact:!0,component:E}),Object(v.jsx)(G.a,{path:"/group/:id",exact:!0,component:C}),Object(v.jsx)(G.a,{path:"/student/:id",exact:!0,component:U})]})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.2b5c8bc9.chunk.js.map