(this["webpackJsonpstudent-ui"]=this["webpackJsonpstudent-ui"]||[]).push([[0],{38:function(t,e,n){},72:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(18),u=n.n(a),o=n(12),i=n(11),s=n(17),d=n.n(s),l=n(24),j=n(25),p=n.n(j),b="FETCH_GROUP",f="REMOVE_GROUP",h="ADD_GROUP",O="FETCH_STUDENTS",v="REMOVE_STUDENT",m="ADD_STUDENT",x=n(14),g=(n(67),n(38),n(1));var y={fetchGroup:function(){return function(){var t=Object(l.a)(d.a.mark((function t(e){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p()({method:"GET",url:"http://127.0.0.1:8000/api/group"});case 2:n=t.sent,e({type:b,payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},removeGroup:function(t){return{type:f,id:t}}},E=Object(i.b)((function(t){return{getData:t.getData}}),y)((function(t){var e=t.fetchGroup,n=t.getData,c=t.removeGroup,a=t.addGroup;Object(r.useEffect)((function(){e()}),[]);var u=Object(r.useState)(""),i=Object(o.a)(u,2),s=i[0],d=i[1],l=Object(r.useState)(""),j=Object(o.a)(l,2),p=j[0],b=j[1];return Object(g.jsxs)("div",{className:"app",children:[Object(g.jsx)("p",{className:"title",children:" \u0421\u043f\u0438\u0441\u043e\u043a \u0433\u0440\u0443\u043f\u043f "}),Object(g.jsx)("ul",{className:"ul",children:n.map((function(t){return Object(g.jsxs)("li",{className:"li",children:[Object(g.jsx)(x.b,{className:"link",to:{pathname:"/group/".concat(t.id),fromDashboard:!1},children:t.number}),Object(g.jsx)("button",{onClick:function(){return c(t.id)},children:"Remove"})]},t.id)}))}),Object(g.jsx)("h1",{children:"ADD GROUP"}),Object(g.jsx)("input",{value:s,onChange:function(t){return d(t.target.value)},placeholder:"enter group"}),Object(g.jsx)("input",{value:p,onChange:function(t){return b(t.target.value)},placeholder:"enter fuculty"}),Object(g.jsx)("button",{type:"button",onClick:function(){if(3==s.length&&p){var t={group:s,course:s[0],faculty:p};a(t),d(""),b("")}},children:"ADD"})]})})),S=n(9),D=n(40),w=n(28),_=[],T=Object(S.c)({getData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0,n=e.type,r=e.payload,c=e.id,a=e.obj;switch(n){case b:return r;case f:return t.filter((function(t){return t.id!==c}));case h:return[].concat(Object(w.a)(t),[a]);default:return t}},getStudents:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0,n=e.type,r=e.payload,c=e.id,a=e.obj;switch(n){case O:return r;case v:return t.filter((function(t){return t.id!==c}));case m:return[].concat(Object(w.a)(t),[a]);default:return t}}}),G=[D.a],N=("undefined"!==typeof window?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null)||S.d,C=Object(S.e)(T,void 0,N(S.a.apply(void 0,G))),k=n(3),R={fetchStudents:function(t){return function(){var e=Object(l.a)(d.a.mark((function e(n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()({method:"GET",url:"http://127.0.0.1:8000/api/group/".concat(t)});case 2:r=e.sent,n({type:O,payload:r.data.students});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},addStudent:function(t){return{type:m,obj:t}},removeStudent:function(t){return{type:v,id:t}}},U=Object(i.b)((function(t){return{getStudents:t.getStudents}}),R)((function(t){var e=t.getStudents,n=t.fetchStudents,c=t.match,a=t.removeStudent,u=t.addStudent,i=c.params.id;Object(r.useEffect)((function(){n(i)}),[i]);var s=Object(r.useState)(""),d=Object(o.a)(s,2),l=d[0],j=d[1];return Object(g.jsxs)("div",{children:[Object(g.jsx)("ul",{children:e.map((function(t){return Object(g.jsxs)("li",{children:[Object(g.jsxs)("p",{children:[t.name," ",t.surname," ",t.fathersname]}),Object(g.jsx)("button",{type:"button",onClick:function(){return a(t.id)},children:"REMOVE"})]},t.id)}))}),Object(g.jsx)("input",{placeholder:"enter new student",value:l,onChange:function(t){j(t.target.value),console.log(l)}}),Object(g.jsx)("button",{type:"button",onClick:function(){var t=l.split(" "),e=Object(o.a)(t,3),n=e[0],r=e[1],c=e[2];u({name:n,surname:r,fathersname:c}),j("")},children:"ADD"})]})})),A=function(){return Object(g.jsx)("div",{children:"ALINA"})};u.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(i.a,{store:C,children:Object(g.jsxs)(x.a,{children:[Object(g.jsx)(k.a,{path:"/",exact:!0,component:E}),Object(g.jsx)(k.a,{path:"/group/:id",exact:!0,component:U}),Object(g.jsx)(k.a,{path:"/student/:id",exact:!0,component:A})]})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.b2032a4c.chunk.js.map