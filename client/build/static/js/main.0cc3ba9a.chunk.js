(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{1020:function(e,a){},1026:function(e,a,t){"use strict";t.r(a);t(304),t(316),t(317),t(318),t(319),t(320),t(321),t(322),t(323),t(324),t(325),t(326),t(327),t(328),t(329),t(516),t(517),t(518),t(519),t(520),t(521),t(522),t(523),t(524),t(333),t(525),t(526),t(177),t(527),t(528),t(529),t(530),t(531),t(532),t(533),t(534),t(535),t(536),t(537),t(538),t(539),t(540),t(541),t(543),t(544),t(546),t(547),t(342),t(179),t(548),t(549),t(550),t(551),t(552),t(553),t(554),t(555),t(556),t(557),t(558),t(559),t(560),t(561),t(562),t(563),t(347),t(564),t(565),t(566),t(567),t(568),t(569),t(570),t(571),t(572),t(574),t(575),t(577),t(578),t(579),t(580),t(581),t(582),t(583),t(584),t(585),t(586),t(587),t(588),t(589),t(590),t(591),t(592),t(593),t(594),t(595),t(248),t(597),t(598),t(599),t(600),t(601),t(603),t(604),t(605),t(606),t(607),t(608),t(609),t(610),t(611),t(612),t(613),t(359),t(614),t(615),t(250),t(616),t(617),t(618),t(619),t(187),t(620),t(621),t(622),t(623),t(624),t(625),t(626),t(627),t(628),t(629),t(630),t(631),t(632),t(633),t(634),t(635),t(636),t(637),t(638),t(639),t(640),t(641),t(642),t(643),t(644),t(645),t(647),t(648),t(649),t(650),t(651),t(652),t(653),t(654),t(655),t(656),t(657),t(658),t(659),t(660),t(661),t(662),t(663),t(664),t(665),t(666),t(667),t(668),t(669),t(670),t(671),t(672),t(673),t(674),t(675),t(676),t(677),t(678),t(679),t(255),t(680),t(681),t(682),t(683),t(684),t(685),t(686),t(367),t(368),t(369),t(370),t(371),t(372),t(373),t(374),t(375),t(376),t(377),t(378),t(379),t(380),t(381),t(382),t(383),t(689),t(690),t(691),t(692),t(693),t(694),t(695),t(696),t(697),t(698),t(699),t(700),t(701),t(702),t(703),t(704),t(706),t(707),t(708),t(709),t(710),t(711),t(712),t(713),t(714),t(715),t(716),t(385),t(387),t(388),t(389),t(390),t(391),t(392),t(393),t(394),t(395),t(396),t(397),t(398),t(399),t(400),t(401),t(402),t(403),t(717),t(718),t(719),t(721),t(404),t(405),t(406),t(722),t(723),t(724),t(725),t(726),t(727),t(728),t(729),t(408),t(730),t(731),t(732),t(734),t(410),t(735),t(411);var r=t(1),n=t.n(r),s=t(8),l=t.n(s),i=(t(745),t(101)),c=t(68),o=t.n(c);function m(){return{type:"auth_user",payload:o.a.get("".concat("/api/users","/auth")).then((function(e){return e.data}))}}var u=t(60),d=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;function s(s){var l=Object(u.d)((function(e){return e.user})),i=Object(u.c)();return Object(r.useEffect)((function(){i(m()).then((function(e){e.payload.isAuth?(t&&!e.payload.isAdmin||!1===a)&&s.history.push("/"):a&&s.history.push("/login")}))}),[]),n.a.createElement(e,Object.assign({},s,{user:l}))}return s},p=t(488),h=t(296);var g=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"app-landing"},n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement(h.b,{style:{fontSize:"4rem"}}),n.a.createElement("br",null),n.a.createElement("span",{style:{fontSize:"2rem"}},"click on chat")),n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement(h.a,{style:{fontSize:"4rem"}}),n.a.createElement("br",null),n.a.createElement("span",{style:{fontSize:"2rem"}},"Send Images")),n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement(p.a,{style:{fontSize:"4rem"}}),n.a.createElement("br",null),n.a.createElement("span",{style:{fontSize:"2rem"}},"send videos"))),n.a.createElement("div",{style:{float:"right"}},"Made By Ahsan Raza"))},E=t(168),f=t(226),y=t(65),v=t(1031),b=t(1032),w=t(1036),x=t(22),S=t(1034),N=t(301),O=v.a.Title;var k=Object(i.f)((function(e){var a=Object(u.c)(),t=!!localStorage.getItem("rememberMe"),s=Object(r.useState)(""),l=Object(E.a)(s,2),i=l[0],c=l[1],m=Object(r.useState)(t),d=Object(E.a)(m,2),p=d[0],h=d[1],g=function(){h(!p)},v=localStorage.getItem("rememberMe")?localStorage.getItem("rememberMe"):"";return n.a.createElement(f.a,{initialValues:{email:v,password:""},validationSchema:y.object().shape({email:y.string().email("Email is invalid").required("Email is required"),password:y.string().min(6,"Password must be at least 6 characters").required("Password is required")}),onSubmit:function(t,r){var n=r.setSubmitting;setTimeout((function(){var r={email:t.email,password:t.password};a(function(e){return{type:"login_user",payload:o.a.post("".concat("/api/users","/login"),e).then((function(e){return e.data}))}}(r)).then((function(a){a.payload.loginSuccess?(window.localStorage.setItem("userId",a.payload.userId),!0===p?window.localStorage.setItem("rememberMe",t.id):localStorage.removeItem("rememberMe"),e.history.push("/")):c("Check out your Account or Password again")})).catch((function(e){c("Check out your Account or Password again"),setTimeout((function(){c("")}),3e3)})),n(!1)}),500)}},(function(e){var a=e.values,t=e.touched,r=e.errors,s=(e.dirty,e.isSubmitting),l=e.handleChange,c=e.handleBlur,o=e.handleSubmit;e.handleReset;return n.a.createElement("div",{className:"app"},n.a.createElement(O,{level:2},"Log In"),n.a.createElement("form",{onSubmit:o,style:{width:"350px"}},n.a.createElement(b.a.Item,{required:!0},n.a.createElement(w.a,{id:"email",prefix:n.a.createElement(x.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter your email",type:"email",value:a.email,onChange:l,onBlur:c,className:r.email&&t.email?"text-input error":"text-input"}),r.email&&t.email&&n.a.createElement("div",{className:"input-feedback"},r.email)),n.a.createElement(b.a.Item,{required:!0},n.a.createElement(w.a,{id:"password",prefix:n.a.createElement(x.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter your password",type:"password",value:a.password,onChange:l,onBlur:c,className:r.password&&t.password?"text-input error":"text-input"}),r.password&&t.password&&n.a.createElement("div",{className:"input-feedback"},r.password)),i&&n.a.createElement("label",null,n.a.createElement("p",{style:{color:"#ff0000bf",fontSize:"0.7rem",border:"1px solid",padding:"1rem",borderRadius:"10px"}},i)),n.a.createElement(b.a.Item,null,n.a.createElement(S.a,{id:"rememberMe",onChange:g,checked:p},"Remember me"),n.a.createElement("div",null,n.a.createElement(N.a,{type:"primary",htmlType:"submit",className:"login-form-button",style:{minWidth:"100%"},disabled:s,onSubmit:o},"Log in")),"Or ",n.a.createElement("a",{href:"/register"},"register now!"))))}))})),C=t(69),_=t.n(C),j={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},I={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};var D=function(e){var a=Object(u.c)();return n.a.createElement(f.a,{initialValues:{email:"",lastName:"",name:"",password:"",confirmPassword:""},validationSchema:y.object().shape({name:y.string().required("Name is required"),lastName:y.string().required("Last Name is required"),email:y.string().email("Email is invalid").required("Email is required"),password:y.string().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:y.string().oneOf([y.ref("password"),null],"Passwords must match").required("Confirm Password is required")}),onSubmit:function(t,r){var n=r.setSubmitting;setTimeout((function(){var r={email:t.email,password:t.password,name:t.name,lastname:t.lastname,image:"http://gravatar.com/avatar/".concat(_()().unix(),"?d=identicon")};a(function(e){return{type:"register_user",payload:o.a.post("".concat("/api/users","/register"),e).then((function(e){return e.data}))}}(r)).then((function(a){a.payload.success?e.history.push("/login"):alert(a.payload.err.errmsg)})),n(!1)}),500)}},(function(e){var a=e.values,t=e.touched,r=e.errors,s=(e.dirty,e.isSubmitting),l=e.handleChange,i=e.handleBlur,c=e.handleSubmit;e.handleReset;return n.a.createElement("div",{className:"app"},n.a.createElement("h2",null,"Sign up"),n.a.createElement(b.a,Object.assign({style:{minWidth:"375px"}},j,{onSubmit:c}),n.a.createElement(b.a.Item,{required:!0,label:"Name"},n.a.createElement(w.a,{id:"name",placeholder:"Enter your name",type:"text",value:a.name,onChange:l,onBlur:i,className:r.name&&t.name?"text-input error":"text-input"}),r.name&&t.name&&n.a.createElement("div",{className:"input-feedback"},r.name)),n.a.createElement(b.a.Item,{required:!0,label:"Last Name"},n.a.createElement(w.a,{id:"lastName",placeholder:"Enter your Last Name",type:"text",value:a.lastName,onChange:l,onBlur:i,className:r.lastName&&t.lastName?"text-input error":"text-input"}),r.lastName&&t.lastName&&n.a.createElement("div",{className:"input-feedback"},r.lastName)),n.a.createElement(b.a.Item,{required:!0,label:"Email",hasFeedback:!0,validateStatus:r.email&&t.email?"error":"success"},n.a.createElement(w.a,{id:"email",placeholder:"Enter your Email",type:"email",value:a.email,onChange:l,onBlur:i,className:r.email&&t.email?"text-input error":"text-input"}),r.email&&t.email&&n.a.createElement("div",{className:"input-feedback"},r.email)),n.a.createElement(b.a.Item,{required:!0,label:"Password",hasFeedback:!0,validateStatus:r.password&&t.password?"error":"success"},n.a.createElement(w.a,{id:"password",placeholder:"Enter your password",type:"password",value:a.password,onChange:l,onBlur:i,className:r.password&&t.password?"text-input error":"text-input"}),r.password&&t.password&&n.a.createElement("div",{className:"input-feedback"},r.password)),n.a.createElement(b.a.Item,{required:!0,label:"Confirm",hasFeedback:!0},n.a.createElement(w.a,{id:"confirmPassword",placeholder:"Enter your confirmPassword",type:"password",value:a.confirmPassword,onChange:l,onBlur:i,className:r.confirmPassword&&t.confirmPassword?"text-input error":"text-input"}),r.confirmPassword&&t.confirmPassword&&n.a.createElement("div",{className:"input-feedback"},r.confirmPassword)),n.a.createElement(b.a.Item,I,n.a.createElement(N.a,{onClick:c,type:"primary",disabled:s},"Submit"))))}))},M=t(1033);M.a.SubMenu,M.a.ItemGroup;var q=function(e){return n.a.createElement(M.a,{mode:e.mode},n.a.createElement(M.a.Item,{key:"mail"},n.a.createElement("a",{href:"/"},"Home")),n.a.createElement(M.a.Item,{key:"Chat"},n.a.createElement("a",{href:"/chat"},"Chat")))};var P=Object(i.f)((function(e){var a=Object(u.d)((function(e){return e.user}));return a.userData&&!a.userData.isAuth?n.a.createElement(M.a,{mode:e.mode},n.a.createElement(M.a.Item,{key:"mail"},n.a.createElement("a",{href:"/login"},"Signin")),n.a.createElement(M.a.Item,{key:"app"},n.a.createElement("a",{href:"/register"},"Signup"))):n.a.createElement(M.a,{mode:e.mode},n.a.createElement(M.a.Item,{key:"logout"},n.a.createElement("a",{onClick:function(){o.a.get("".concat("/api/users","/logout")).then((function(a){200===a.status?e.history.push("/login"):alert("Log Out Failed")}))}},"Logout")))})),A=t(1035);t(989);var T=function(){var e=Object(r.useState)(!1),a=Object(E.a)(e,2),t=a[0],s=a[1];return n.a.createElement("nav",{className:"menu",style:{position:"fixed",zIndex:5,width:"100%"}},n.a.createElement("div",{className:"menu__logo"},n.a.createElement("a",{href:"/"},"Logo")),n.a.createElement("div",{className:"menu__container"},n.a.createElement("div",{className:"menu_left"},n.a.createElement(q,{mode:"horizontal"})),n.a.createElement("div",{className:"menu_rigth"},n.a.createElement(P,{mode:"horizontal"})),n.a.createElement(N.a,{className:"menu__mobile-button",type:"primary",onClick:function(){s(!0)}},n.a.createElement(x.a,{type:"align-right"})),n.a.createElement(A.a,{title:"Basic Drawer",placement:"right",className:"menu_drawer",closable:!1,onClose:function(){s(!1)},visible:t},n.a.createElement(q,{mode:"inline"}),n.a.createElement(P,{mode:"inline"}))))};var z=function(){return n.a.createElement("div",{style:{height:"80px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"1rem"}},n.a.createElement("p",null," Happy Coding  ",n.a.createElement(x.a,{type:"smile"})))},B=t(502),L=t(503),R=t(512),F=t(509),W=t(1029),V=t(1030),H=t(504),Y=t.n(H);var X=t(505),U=t(1027),J=t(1028),G=t(169);var $=function(e){var a=!1;return e.user._id&&(Object(X.a)("chatRightAlign"),a=e.user._id===e.chat.sender._id),n.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:a?"flex-end":"flex-start"}},n.a.createElement(U.a,{author:e.chat.sender.name,avatar:n.a.createElement(J.a,{src:e.chat.sender.image,alt:e.chat.sender.name}),content:"uploads"===e.chat.message.substring(0,7)?"mp4"===e.chat.message.substring(e.chat.message.length-3,e.chat.message.length)?n.a.createElement("video",{style:{maxWidth:"300px"},src:"https://secure-dusk-44145.herokuapp.com/".concat(e.chat.message),alt:"video",type:"video/mp4",controls:!0}):n.a.createElement("img",{style:{maxWidth:"300px"},src:"https://secure-dusk-44145.herokuapp.com/".concat(e.chat.message),alt:"img"}):n.a.createElement("p",null,e.chat.message),datetime:n.a.createElement(G.a,{title:_()(e.chat.updatedAt).format("YYYY-MM-DD HH:mm:ss")},n.a.createElement("span",null,_()(e.chat.updatedAt).fromNow()))}))},K=t(510),Q=function(e){Object(R.a)(t,e);var a=Object(F.a)(t);function t(){var e;Object(B.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={chatMessage:""},e.handleSearchChange=function(a){e.setState({chatMessage:a.target.value})},e.renderCards=function(){if(e.props.chats.chats){if(void 0!==e.props.chats.chats.isAuth)return;return e.props.chats.chats.map((function(a){return n.a.createElement($,{key:a._id,chat:a,user:e.props.user.userData})}))}},e.onDrop=function(a){var t=new FormData;t.append("file",a[0]),o.a.post("api/chat/uploadFiles",t,{header:{"content-type":"multipart/form-data"}}).then((function(a){if(a.data.success){var t=a.data.url,r=e.props.user.userData._id,n=e.props.user.userData.name,s=e.props.user.userData.image,l=_()();e.socket.emit("Input Chat Message",{chatMessage:t,userId:r,userName:n,userImage:s,nowTime:l,type:"VideoOrImage"})}}))},e.submitChatMessage=function(a){a.preventDefault();var t=e.state.chatMessage,r=e.props.user.userData._id,n=e.props.user.userData.name,s=e.props.user.userData.image,l=_()();e.socket.emit("Input Chat Message",{chatMessage:t,userId:r,userName:n,userImage:s,nowTime:l,type:"text"}),e.setState({chatMessage:""})},e}return Object(L.a)(t,[{key:"componentDidUpdate",value:function(){this.messagesEnd.scrollIntoView({behavior:"smooth"})}},{key:"componentDidMount",value:function(){var e=this;this.socket=Y()("https://secure-dusk-44145.herokuapp.com/"),this.props.dispatch({type:"get_chat",payload:o.a.get("".concat("/api/chat","/getChats")).then((function(e){return e.data}))}),this.socket.on("Output Chat Message",(function(a){e.props.dispatch({type:"after_post_message",payload:a})}))}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement("p",{style:{fontSize:"2rem",textAlign:"center"}},"Real Time Chat")),n.a.createElement("div",{style:{maxWidth:"800px",margin:"0 auto"}},n.a.createElement("div",{className:"infinite-container",style:{height:"500px",overflowY:"scroll"}},this.props.chats&&n.a.createElement("div",null,this.renderCards()),n.a.createElement("div",{ref:function(a){e.messagesEnd=a},style:{float:"left",clear:"both"}})),n.a.createElement(W.a,null,n.a.createElement(b.a,{layout:"inline",margin:"10px auto",onSubmit:this.submitChatMessage},n.a.createElement(V.a,{span:18},n.a.createElement(w.a,{id:"message",prefix:n.a.createElement(x.a,{type:"message",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Let's get Talking",type:"text",value:this.state.chatMessage,onChange:this.handleSearchChange})),n.a.createElement(V.a,{span:3},n.a.createElement(K.a,{onDrop:this.onDrop},(function(e){var a=e.getRootProps,t=e.getInputProps;return n.a.createElement("section",null,n.a.createElement("div",a(),n.a.createElement("input",t()),n.a.createElement(N.a,null,n.a.createElement(x.a,{type:"upload"}))))}))),n.a.createElement(V.a,{span:3},n.a.createElement(N.a,{type:"primary",onClick:this.submitChatMessage,style:{width:"100%"},htmlType:"submit"},n.a.createElement(x.a,{type:"enter"})))))))}}]),t}(r.Component),Z=Object(u.b)((function(e){return{user:e.user,chats:e.chat}}))(Q);var ee=function(){return n.a.createElement(r.Suspense,{fallback:n.a.createElement("div",null,"Loading...")},n.a.createElement(T,null),n.a.createElement("div",{style:{paddingTop:"69px",minHeight:"calc(100vh - 80px)"}},n.a.createElement(i.c,null,n.a.createElement(i.a,{exact:!0,path:"/",component:d(g,null)}),n.a.createElement(i.a,{exact:!0,path:"/chat",component:d(Z,!0)}),n.a.createElement(i.a,{exact:!0,path:"/login",component:d(k,!1)}),n.a.createElement(i.a,{exact:!0,path:"/register",component:d(D,!1)}))),n.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=t(164),te=t(118),re=t(63),ne=Object(te.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"register_user":return Object(re.a)(Object(re.a)({},e),{},{register:a.payload});case"login_user":return Object(re.a)(Object(re.a)({},e),{},{loginSucces:a.payload});case"auth_user":return Object(re.a)(Object(re.a)({},e),{},{userData:a.payload});case"logout_user":return Object(re.a)({},e);default:return e}},chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"get_chat":return Object(re.a)(Object(re.a)({},e),{},{chats:a.payload});case"after_post_message":return Object(re.a)(Object(re.a)({},e),{},{chats:e.chats.concat(a.payload)});default:return e}}}),se=t(507),le=t.n(se),ie=t(508),ce=Object(te.a)(le.a,ie.a)(te.d);l.a.render(n.a.createElement(u.a,{store:ce(ne,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},n.a.createElement(ae.a,null,n.a.createElement(ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},515:function(e,a,t){e.exports=t(1026)},745:function(e,a,t){},989:function(e,a,t){}},[[515,1,2]]]);
//# sourceMappingURL=main.0cc3ba9a.chunk.js.map