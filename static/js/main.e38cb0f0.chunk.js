(this["webpackJsonptimetracker-frontend"]=this["webpackJsonptimetracker-frontend"]||[]).push([[0],{17:function(e,t,a){e.exports={logo:"Header_logo__3_SJs",btnSignin:"Header_btnSignin__1Rjae",btnSignup:"Header_btnSignup__tJqlS"}},41:function(e,t,a){e.exports={btn:"Button_btn__2T0J7"}},43:function(e,t,a){e.exports={addButton:"Goals_addButton__2lCex"}},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a(21),s=a.n(c),i=a(14),o=a(41),u=a.n(o);var l=function(e){var t=e.children,a=e.href,r=e.onClick,c=e.classList;return Object(n.jsx)(i.b,{className:"".concat(u.a.btn," ").concat(void 0!==c?c.join(" "):""),to:a,onClick:r,children:t})},d=a.p+"static/media/logo.45cba6bb.svg",j=a(3),b=a.n(j),p=a(5),f=a(2),v="REGISTER",O="LOGIN",h="REFRESH",m="LOGOUT",g="SET_GOALS",x="ADD_GOAL",y="CHANGE_GOAL",k="REMOVE_GOAL",w="SET_GOALS_LOADING",S=function(e){return{type:x,payload:e}},N=function(e){return{type:y,payload:e}},_=function(e){return{type:k,payload:e}},A=function(e){return{type:w,payload:e}},G=a(23),C=a(24),L=a(19),T=a.n(L),I="https://timetracker-api-node.herokuapp.com/",q=T.a.create({withCredentials:!0,baseURL:I});q.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(localStorage.getItem("token")),e})),q.interceptors.response.use((function(e){return e}),function(){var e=Object(p.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.config,401!==t.response.status||t.config._isRetry){e.next=14;break}return a._isRetry=!0,e.prev=3,e.next=6,T.a.get("".concat(I,"user/refresh"),{withCredentials:!0});case 6:return n=e.sent,localStorage.setItem("token",n.data.accessToken),e.abrupt("return",q.request(a));case 11:e.prev=11,e.t0=e.catch(3),console.log("Interceptor response: ".concat(e.t0));case 14:throw t;case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}());var V=q,E=new(function(){function e(){Object(G.a)(this,e)}return Object(C.a)(e,[{key:"login",value:function(){var e=Object(p.a)(b.a.mark((function e(t,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",V.post("/user/login",{username:t,password:a}));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"register",value:function(){var e=Object(p.a)(b.a.mark((function e(t,a,n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",V.post("/user/signup",{username:t,password:a,email:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(p.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",V.post("/user/logout"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=Object(p.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",T.a.get("".concat(I,"user/refresh"),{withCredentials:!0}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}()),R=a(8),B=a(17),M=a.n(B);var D=function(){var e=Object(R.b)(),t=Object(R.c)((function(e){return e.user})),a=t.user,c=t.isAuth;return Object(r.useEffect)((function(){localStorage.getItem("token")&&e(function(){var e=Object(p.a)(b.a.mark((function e(t){var a,n,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.refresh();case 3:a=e.sent,n=a.data,localStorage.setItem("token",n.accessToken),t((s=n,i=!0,{type:h,payload:Object(f.a)(Object(f.a)({},s),{},{isAuth:i})})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(null===(r=e.t0.response)||void 0===r||null===(c=r.data)||void 0===c?void 0:c.message);case 12:case"end":return e.stop()}var s,i}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e,c]),Object(n.jsxs)("header",{id:"header",children:[Object(n.jsx)("div",{className:M.a.logo,children:Object(n.jsx)(i.b,{to:"/",alt:"Home page",children:Object(n.jsx)("img",{src:d,alt:"Logo"})})}),c?Object(n.jsxs)("div",{className:M.a.loginArea,children:["Hello ".concat(a.username,"!"),Object(n.jsx)(l,{text:"Log Out",onClick:function(){e(function(){var e=Object(p.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.logout();case 3:localStorage.removeItem("token"),t({type:m,payload:{}}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(null===(a=e.t0.response)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}})]}):Object(n.jsxs)("div",{className:M.a.loginArea,children:[Object(n.jsx)(l,{classList:[M.a.btnSignin],href:"/login",children:"Sign In"}),Object(n.jsx)(l,{classList:[M.a.btnSignup],href:"/register",children:"Sign Up"})]})]})},H=a(6),U=a(7);a(75);var F=function(e){var t=e.active,a=e.setActive,r=e.title,c=e.children;return Object(n.jsx)("div",{className:t?"modal active":"modal",onClick:function(){return a(!t)},children:Object(n.jsxs)("div",{className:"modal_content",onClick:function(e){return e.stopPropagation()},children:[Object(n.jsxs)("div",{className:"modal-header",children:[Object(n.jsx)("div",{className:"modal-header_title",children:r}),Object(n.jsx)("div",{className:"modal-header_close-btn",id:"modal-header_close-btn",onClick:function(){return a(!t)},children:Object(n.jsx)("i",{className:"far fa-times-circle"})})]}),c]})})};a(76);var J=function(e){var t,a=e.value,r=e.setValue,c=e.type,s=e.name,i=e.rows,o=e.options;switch(c?c.toLowerCase():"input"){case"textarea":t=Object(n.jsx)("textarea",{placeholder:s,onChange:r||"",value:a,className:"input",rows:i||""});break;case"select":t=Object(n.jsx)("select",{onChange:r,className:"input",defaultValue:a,children:o.map((function(e){return Object(n.jsx)("option",{value:e,children:e},e)}))});break;default:t=Object(n.jsx)("input",{type:c,placeholder:s,onChange:r||"",value:a,className:"input"})}return Object(n.jsxs)("div",{className:"input-group",children:[Object(n.jsx)("label",{htmlFor:a,children:s}),t]})},P=new(function(){function e(){Object(G.a)(this,e)}return Object(C.a)(e,[{key:"getGoals",value:function(){var e=Object(p.a)(b.a.mark((function e(t,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",V.get("/goals"));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"createGoal",value:function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",V.post("/goals/",Object(f.a)({},t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateGoal",value:function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",V.patch("/goals/".concat(t.id),Object(f.a)({},t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteGoal",value:function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",V.delete("/goals/".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),z=function(e){return function(){var t=Object(p.a)(b.a.mark((function t(a){var n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(A(!0)),t.next=4,P.deleteGoal(e);case 4:a(_(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(null===(n=t.t0.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.message);case 10:return t.prev=10,a(A(!1)),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(e){return t.apply(this,arguments)}}()};a(77);var W=function(e){var t=e.currentGoal,a=e.setActive,c=e.type,s=Object(R.b)(),i=["daily","monthly","annual"],o=t||{title:"",time:0,frequency:i[0],description:"",isActive:!0},u=Object(r.useState)(o),d=Object(U.a)(u,2),j=d[0],v=d[1];return Object(n.jsxs)("div",{className:"add-goal",children:[Object(n.jsx)(J,{name:"Title",value:j.title,setValue:function(e){v(Object(f.a)(Object(f.a)({},j),{},{title:e.target.value}))}}),Object(n.jsx)(J,{name:"Time",value:j.time,setValue:function(e){v(Object(f.a)(Object(f.a)({},j),{},{time:e.target.value}))},type:"number"}),Object(n.jsx)(J,{name:"Frequency",value:j.frequency,setValue:function(e){v(Object(f.a)(Object(f.a)({},j),{},{frequency:e.target.value}))},type:"select",options:i}),Object(n.jsx)(J,{name:"Description",value:j.description,setValue:function(e){v(Object(f.a)(Object(f.a)({},j),{},{description:e.target.value}))},type:"textarea",rows:"5"}),Object(n.jsx)(l,{href:"#",onClick:function(e){e.preventDefault();var t=function(e){var t=!0,a=[];j.title||(t=!1,a.push("Field title is required!"));j.time<=0&&(t=!1,a.push("Time must be grater than 0."));j.frequency||(t=!1,a.push("You have to choose your frequency."));return{isValid:t,message:a.join(" ")}}();if(t.isValid){switch(c){case"update":s(function(e){return function(){var t=Object(p.a)(b.a.mark((function t(a){var n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(A(!0)),t.next=4,P.updateGoal(e);case 4:a(N(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(null===(n=t.t0.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.message);case 10:return t.prev=10,a(A(!1)),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(e){return t.apply(this,arguments)}}()}(j));break;default:s(function(e){return function(){var t=Object(p.a)(b.a.mark((function t(a){var n,r,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(A(!0)),t.next=4,P.createGoal(e);case 4:n=t.sent,a(S(n.data.createdGoal)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0),console.log(null===(r=t.t0.response)||void 0===r||null===(c=r.data)||void 0===c?void 0:c.message);case 12:return t.prev=12,a(A(!1)),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,8,12,15]])})));return function(e){return t.apply(this,arguments)}}()}(j)),v(o)}a(!1)}else alert(t.message)},classList:["btn","add-goal-button"],children:"update"===c?"Update goal":"Add goal"})]})};a(78);var Y={getTimeBySeconds:function(e){var t=Math.floor(e/3600),a=Math.floor(e%3600/60),n=Math.floor(e%3600%60);return(t<10?"0"+t:t)+":"+(a<10?"0"+a:a)+":"+(n<10?"0"+n:n)},getSecondsFromMinutes:function(e){return 60*e}};var K=function(e){var t=Object(r.useRef)({}),a=Object(r.useState)({time:0,isStarted:!1}),c=Object(U.a)(a,2),s=c[0],i=c[1];return Object(n.jsxs)("div",{className:"stopwatch",children:[Object(n.jsx)("i",{className:"far fa-stopwatch"}),Y.getTimeBySeconds(s.time),s.isStarted?Object(n.jsx)("div",{className:"stopwatch_control",onClick:function(){i(Object(f.a)(Object(f.a)({},s),{},{isStarted:!1})),clearInterval(t.current)},children:Object(n.jsx)("i",{className:"fas fa-pause"})}):Object(n.jsx)("div",{className:"stopwatch_control",onClick:function(){i(Object(f.a)(Object(f.a)({},s),{},{isStarted:!0})),t.current=setInterval((function(){i({isStarted:!0,time:s.time+=1})}),1e3)},children:Object(n.jsx)("i",{className:"fas fa-play"})})]})};var Q=function(e){var t=e.goal,a=e.deleteGoal,c=e.updateSpentTime,s=Object(r.useState)(!1),i=Object(U.a)(s,2),o=i[0],u=i[1];return Object(n.jsxs)("div",{className:"goal-item",children:[Object(n.jsx)("div",{className:"goal-item_title",children:t.title}),Object(n.jsxs)("div",{className:"goal-item_time",children:[Object(n.jsx)("i",{className:"far fa-clock"}),Y.getTimeBySeconds(Y.getSecondsFromMinutes(t.time))]}),Object(n.jsx)(K,{saveTime:c}),Object(n.jsx)("div",{className:"goal-item_edit",onClick:function(){u(!0)},children:Object(n.jsx)("i",{className:"fas fa-pen-square"})}),Object(n.jsx)("div",{className:"goal-item_delete",onClick:a,children:Object(n.jsx)("i",{className:"fas fa-trash-alt"})}),Object(n.jsx)(F,{active:o,setActive:u,title:"Update goal",children:Object(n.jsx)(W,{currentGoal:t,setActive:u,type:"update"})})]})};a(79);var X=function(e){var t=e.title,a=e.children,c=Object(r.useState)(!1),s=Object(U.a)(c,2),i=s[0],o=s[1];return Object(n.jsxs)("div",{className:"accordion",children:[Object(n.jsxs)("div",{className:"accordion-header",onClick:function(){o(!i)},children:[Object(n.jsx)("div",{className:"accordion-header_title",children:t}),Object(n.jsx)("div",{className:"accordion-header_close-btn",children:Object(n.jsx)("i",{className:i?"fas fa-times":"fas fa-chevron-down"})})]}),Object(n.jsx)("div",{className:i?"accordion-content active":"accordion-content",children:a})]})},Z=(a(80),a(43)),$=a.n(Z);var ee=function(e){var t=Object(R.b)(),a=Object(r.useState)(!1),c=Object(U.a)(a,2),s=c[0],i=c[1],o=Object(R.c)((function(e){return e.goals})),u=o.isLoading,d=o.list,j=d.reduce((function(e,a){return"daily"===a.frequency&&e.daily.push(Object(n.jsx)(Q,{goal:a,deleteGoal:function(){t(z(a.id))}},a.id)),"monthly"===a.frequency&&e.monthly.push(Object(n.jsx)(Q,{goal:a,deleteGoal:function(){t(z(a.id))}},a.id)),"annual"===a.frequency&&e.annual.push(Object(n.jsx)(Q,{goal:a,deleteGoal:function(){t(z(a.id))}},a.id)),e}),{daily:[],monthly:[],annual:[]});return Object(r.useEffect)((function(){t(function(){var e=Object(p.a)(b.a.mark((function e(t){var a,n,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(A(!0)),e.next=4,P.getGoals();case 4:a=e.sent,n=a.data.goals.map((function(e){return e.goal})),t({type:g,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(null===(r=e.t0.response)||void 0===r||null===(c=r.data)||void 0===c?void 0:c.message);case 12:return e.prev=12,t(A(!1)),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(t){return e.apply(this,arguments)}}())}),[d.length,t]),Object(n.jsxs)("section",{className:"goal-list",children:[Object(n.jsx)(X,{title:"Daily goals",children:j.daily.length>0?j.daily:u?"Loading":"Sorry, no goals available"}),Object(n.jsx)(X,{title:"Monthly goals",children:j.monthly.length>0?j.monthly:"Sorry, no goals available"}),Object(n.jsx)(X,{title:"Annual goals",children:j.annual.length>0?j.annual:"Sorry, no goals available"}),Object(n.jsx)(l,{classList:[$.a.addButton],onClick:function(){return i(!s)},href:"#",children:Object(n.jsx)("i",{className:"fas fa-plus"})}),Object(n.jsx)(F,{active:s,setActive:i,title:"Add goal",children:Object(n.jsx)(W,{setActive:i})})]})};a(81);function te(){var e=Object(r.useState)(""),t=Object(U.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(""),i=Object(U.a)(s,2),o=i[0],u=i[1],d=Object(R.b)();return Object(R.c)((function(e){return e.user})).isAuth?Object(n.jsx)(H.a,{to:"/"}):Object(n.jsxs)("div",{id:"login-form",children:[Object(n.jsx)(J,{type:"text",name:"Username",setValue:function(e){c(e.target.value)},value:a}),Object(n.jsx)(J,{type:"password",name:"Password",setValue:function(e){u(e.target.value)},value:o}),Object(n.jsx)(l,{text:"Login",href:"#",onClick:function(){d(function(e,t){return function(){var a=Object(p.a)(b.a.mark((function a(n){var r,c,s;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E.login(e,t);case 3:r=a.sent,localStorage.setItem("token",r.data.accessToken),n((i=r.data,o=!0,{type:O,payload:Object(f.a)(Object(f.a)({},i),{},{isAuth:o})})),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(null===(c=a.t0.response)||void 0===c||null===(s=c.data)||void 0===s?void 0:s.message);case 11:case"end":return a.stop()}var i,o}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(a,o)),u("")},classList:["btn","btn-login"]})]})}a(82);function ae(){var e=Object(r.useState)(""),t=Object(U.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(""),i=Object(U.a)(s,2),o=i[0],u=i[1],d=Object(r.useState)(""),j=Object(U.a)(d,2),O=j[0],h=j[1],m=Object(R.b)();return Object(R.c)((function(e){return e.user})).isAuth?Object(n.jsx)(H.a,{to:"/"}):Object(n.jsxs)("div",{id:"register-form",children:[Object(n.jsx)(J,{type:"text",name:"Username",setValue:function(e){c(e.target.value)},value:a}),Object(n.jsx)(J,{type:"password",name:"Password",setValue:function(e){u(e.target.value)},value:o}),Object(n.jsx)(J,{type:"email",name:"Email",setValue:function(e){h(e.target.value)},value:O}),Object(n.jsx)(l,{text:"Register",href:"#",onClick:function(){m(function(e,t,a){return function(){var n=Object(p.a)(b.a.mark((function n(r){var c,s,i;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,E.register(e,t,a);case 3:c=n.sent,localStorage.setItem("token",c.data.accessToken),r((o=c.data,u=!0,{type:v,payload:Object(f.a)(Object(f.a)({},o),{},{isAuth:u})})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(null===(s=n.t0.response)||void 0===s||null===(i=s.data)||void 0===i?void 0:i.message);case 11:case"end":return n.stop()}var o,u}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(a,o,O)),u("")},classList:["btn","btn-register"]})]})}var ne=function(e){return Object(n.jsx)("section",{id:"main-area",children:Object(n.jsxs)(H.d,{children:[Object(n.jsx)(H.b,{exact:!0,path:["/","/timetracker-frontend"],children:Object(n.jsx)(ee,{})}),Object(n.jsx)(H.b,{path:"/login",children:Object(n.jsx)(te,{})}),Object(n.jsx)(H.b,{path:"/register",children:Object(n.jsx)(ae,{})})]})})},re=a(15),ce=a(31),se={isLoading:!1,list:[]};var ie={user:{},accessToken:"",refreshToken:"",isAuth:!1};var oe=Object(re.combineReducers)({goals:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case g:return Object(f.a)(Object(f.a)({},e),{},{list:Object(ce.a)(n)});case x:return Object(f.a)(Object(f.a)({},e),{},{list:[].concat(Object(ce.a)(e.list),[Object(f.a)({},n)])});case y:var r=e.list.map((function(e){return e.id!==n.id?e:Object(f.a)({},n)}));return Object(f.a)(Object(f.a)({},e),{},{list:r});case k:var c=e.list.filter((function(e){return e.id!==n}));return Object(f.a)(Object(f.a)({},e),{},{list:c});case w:return Object(f.a)(Object(f.a)({},e),{},{isLoading:n});default:return se}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case h:case O:case v:return Object(f.a)({},n);case m:return Object(f.a)({},ie);default:return Object(f.a)({},e)}}}),ue=a(44),le=a(45),de=Object(re.createStore)(oe,Object(le.composeWithDevTools)(Object(re.applyMiddleware)(ue.a)));var je=function(){return Object(n.jsx)(R.a,{store:de,children:Object(n.jsx)(i.a,{children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(D,{}),Object(n.jsx)(ne,{})]})})})};s.a.render(Object(n.jsx)(je,{}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.e38cb0f0.chunk.js.map