(this["webpackJsonpstudent-ui"]=this["webpackJsonpstudent-ui"]||[]).push([[0],{38:function(t,e,n){},72:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(18),u=n.n(a),o=n(12),i=n(11),s=n(17),d=n.n(s),l=n(24),j=n(25),p=n.n(j),b="FETCH_GROUP",f="REMOVE_GROUP",h="ADD_GROUP",O="FETCH_STUDENTS",v="REMOVE_STUDENT",m="ADD_STUDENT",g=n(14),x=(n(67),n(38),n(1));var y={fetchGroup:function(){return function(){var t=Object(l.a)(d.a.mark((function t(e){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p()({method:"GET",url:"http://127.0.0.1:8000/api/group"});case 2:n=t.sent,e({type:b,payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},removeGroup:function(t){return{type:f,id:t}},addGroup:function(t){return{type:h,obj:t}}},E=Object(i.b)((function(t){return{getData:t.getData}}),y)((function(t){var e=t.fetchGroup,n=t.getData,r=t.removeGroup,a=t.addGroup;Object(c.useEffect)((function(){e()}),[]);var u=Object(c.useState)(""),i=Object(o.a)(u,2),s=i[0],d=i[1],l=Object(c.useState)(""),j=Object(o.a)(l,2),p=j[0],b=j[1];return Object(x.jsxs)("div",{className:"app",children:[Object(x.jsx)("p",{className:"title",children:" \u0421\u043f\u0438\u0441\u043e\u043a \u0433\u0440\u0443\u043f\u043f "}),Object(x.jsx)("ul",{className:"ul",children:n.map((function(t){return Object(x.jsxs)("li",{className:"li",children:[Object(x.jsx)(g.b,{className:"link",to:{pathname:"/group/".concat(t.id),fromDashboard:!1},children:t.number}),Object(x.jsx)("button",{onClick:function(){return r(t.id)},children:"Remove"})]},t.id)}))}),Object(x.jsx)("h1",{children:"ADD GROUP"}),Object(x.jsx)("input",{value:s,onChange:function(t){d(t.target.value),console.log(s)},placeholder:"enter group"}),Object(x.jsx)("input",{value:p,onChange:function(t){b(t.target.value),console.log(p)},placeholder:"enter fuculty"}),Object(x.jsx)("button",{type:"button",onClick:function(){if(3==s.length&&""!==p){var t={id:n.length+1,group:s,course:s[0],faculty:p};console.log(t),a({obj:t})}d(""),b("")},children:"ADD"})]})})),S=n(9),D=n(40),w=n(28),_=[],G=Object(S.c)({getData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0,n=e.type,c=e.payload,r=e.id,a=e.obj;switch(n){case b:return c;case f:return t.filter((function(t){return t.id!==r}));case h:return[].concat(Object(w.a)(t),[a]);default:return t}},getStudents:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0,n=e.type,c=e.payload,r=e.id,a=e.obj;switch(n){case O:return c;case v:return t.filter((function(t){return t.id!==r}));case m:return[].concat(Object(w.a)(t),[a]);default:return t}}}),T=[D.a],N=("undefined"!==typeof window?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null)||S.d,C=Object(S.e)(G,void 0,N(S.a.apply(void 0,T))),k=n(3),R={fetchStudents:function(t){return function(){var e=Object(l.a)(d.a.mark((function e(n){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()({method:"GET",url:"http://127.0.0.1:8000/api/group/".concat(t)});case 2:c=e.sent,n({type:O,payload:c.data.students});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},addStudent:function(t){return{type:m,obj:t}},removeStudent:function(t){return{type:v,id:t}}},U=Object(i.b)((function(t){return{getStudents:t.getStudents}}),R)((function(t){var e=t.getStudents,n=t.fetchStudents,r=t.match,a=t.removeStudent,u=t.addStudent,i=r.params.id;Object(c.useEffect)((function(){n(i)}),[i]);var s=Object(c.useState)(""),d=Object(o.a)(s,2),l=d[0],j=d[1];return Object(x.jsxs)("div",{children:[Object(x.jsx)("ul",{children:e.map((function(t){return Object(x.jsxs)("li",{children:[Object(x.jsxs)("p",{children:[t.name," ",t.surname," ",t.fathersname]}),Object(x.jsx)("button",{type:"button",onClick:function(){return a(t.id)},children:"REMOVE"})]},t.id)}))}),Object(x.jsx)("input",{placeholder:"enter new student",value:l,onChange:function(t){j(t.target.value),console.log(l)}}),Object(x.jsx)("button",{type:"button",onClick:function(){var t=l.split(" "),n=Object(o.a)(t,3),c=n[0],r=n[1],a=n[2],i={id:e.length+1,name:c,surname:r,fathersname:a,number:e[0].number};u(i),j("")},children:"ADD"})]})})),A=function(){return Object(x.jsx)("div",{children:"ALINA"})};u.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(i.a,{store:C,children:Object(x.jsxs)(g.a,{children:[Object(x.jsx)(k.a,{path:"/",exact:!0,component:E}),Object(x.jsx)(k.a,{path:"/group/:id",exact:!0,component:U}),Object(x.jsx)(k.a,{path:"/student/:id",exact:!0,component:A})]})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.0e6ab0ef.chunk.js.map