(this["webpackJsonpstudent-ui"]=this["webpackJsonpstudent-ui"]||[]).push([[0],{62:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(13),i=n.n(r),o=n(15),u=n(19),s=n.n(u),d=n(32),l=n(33),p=n.n(l),f="FETCH_DATA",h=n(12),j=(n(62),n(8));var b={fetchData:function(){return function(){var t=Object(d.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p()({method:"GET",url:"http://127.0.0.1:8000/api/group"});case 2:n=t.sent,e({type:f,payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},O=Object(o.b)((function(t){return{getData:t.getData}}),b)((function(t){var e=t.fetchData,n=t.getData;return Object(a.useEffect)((function(){e()}),[]),Object(j.jsx)("ul",{className:"ul",children:n.map((function(t){return Object(j.jsx)("li",{className:"li",children:Object(j.jsx)(h.b,{className:"link",to:{pathname:"group/".concat(t.id),fromDashboard:!1},children:t.number})})}))})})),m=n(9),v=n(34),x=[],D=Object(m.c)({getData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case f:return a;default:return t}}}),g=[v.a],w=("undefined"!==typeof window?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null)||m.d,E=Object(m.e)(D,void 0,w(m.a.apply(void 0,g))),y=n(2);i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(o.a,{store:E,children:Object(j.jsx)(h.a,{children:Object(j.jsx)(y.b,{children:Object(j.jsx)(h.a,{to:"./",component:O})})})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.d168a347.chunk.js.map