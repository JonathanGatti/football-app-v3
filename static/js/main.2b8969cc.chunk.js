(this["webpackJsonpfootball-app"]=this["webpackJsonpfootball-app"]||[]).push([[0],{202:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),i=n.n(r),c=n(47),s=n.n(c),o=n(14),l=n(12),u=n(30),d=n(203),j=n.p+"static/media/home_page_img.1a4c2709.png",h=n(24),b=n(25),p=n.p+"static/media/3dsection.afdfa4e5.png";function m(){var e=Object(h.a)(["\n  .header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    .text {\n      width: 50%;\n      .buttons {\n        display: flex;\n        justify-content: space-between;\n        margin-top: 2em;\n        flex-basis: 33%;\n      }\n    }\n    img {\n      max-width: 50%;\n      max-height: 65vh;\n      border-radius: 30px;\n    }\n  }\n"]);return m=function(){return e},e}function f(){var e=Object(h.a)(["\n  height: 85px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n  color: lightgray;\n  img {\n    width: 100px;\n    height: 80px;\n  }\n"]);return f=function(){return e},e}function O(){var e=Object(h.a)(["\n  width: 10vw;\n  z-index: 10;\n  position: absolute;\n  .card {\n    display: flex;\n    flex-direction: column;\n  }\n"]);return O=function(){return e},e}function g(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n"]);return g=function(){return e},e}function x(){var e=Object(h.a)(["\n  width: 98%;\n  height: 70vh;\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n"]);return x=function(){return e},e}function v(){var e=Object(h.a)(["\n  font-family: sans-serif;\n  display: flex;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n  color: #140159;\n  width: 90vw;\n  height: 90vh;\n"]);return v=function(){return e},e}var y=b.a.div(v()),_=b.a.div(x(),p),w=b.a.div(g()),T=b.a.div(O()),I=b.a.div(f()),C=b.a.div(m());var N=function(){return Object(a.jsx)(C,{children:Object(a.jsxs)("div",{className:"header",children:[Object(a.jsxs)("div",{className:"text",children:[Object(a.jsx)("h1",{children:"The Football App"}),Object(a.jsx)("h3",{children:"Create your dream teams and make it compete against to see which is best"}),Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)(d.a,{as:u.b,to:"/create",attached:"bottom",content:"Create Your Team"}),Object(a.jsx)(d.a,{as:u.b,to:"/list",attached:"bottom",content:"List of All The Teams"}),Object(a.jsx)(d.a,{as:u.b,to:"/fight",attached:"bottom",content:"Team Fight"})]})]}),Object(a.jsx)("img",{src:j})]})})},S=n(20),k=n(10),E=n.n(k),M=n(15),F=n(95),A=n.n(F),L="89f56fc814mshaffde0d4f2ea23cp144e32jsnf8dcdcfa56ff",P="https://api-football-v1.p.rapidapi.com/v2/players/";function R(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(M.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.get("".concat(P,"search/").concat(t),{headers:{"x-rapidapi-host":"api-football-v1.p.rapidapi.com","x-rapidapi-key":L,useQueryString:!0}});case 3:return n=e.sent,e.abrupt("return",n.data.api.players);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function z(e){return D.apply(this,arguments)}function D(){return(D=Object(M.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.get("".concat(P,"player/").concat(t),{headers:{"x-rapidapi-host":"api-football-v1.p.rapidapi.com","x-rapidapi-key":L,useQueryString:!0}});case 3:return n=e.sent,e.abrupt("return",n.data.api.players[0].rating);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var G=A.a.create({baseURL:"https://boiling-hollows-70973.herokuapp.com"}),H=function(){var e=Object(M.a)(E.a.mark((function e(t){var n,a,r,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:if(a=e.sent,r=a.filter((function(e){return e.player_id===t.player_id})),void 0!==(n=r[0])){e.next=11;break}return e.next=8,z(t.player_id);case 8:i=e.sent,n=Object(o.a)(Object(o.a)({},t),{},{rating:i}),G.post("/api/players",n,{headers:{"Content-Type":"application/json"}}).catch((function(e){console.log(e)}));case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(M.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.get("/api/players");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),B=n(218),J=n(49);function Q(){var e=Object(h.a)(["\n  display: flex;\n  width: 50vw;\n"]);return Q=function(){return e},e}var X=b.a.div(Q());var q=function(e){var t=e.player,n=e.onClick,r=e.onOpen,i=e.index;return Object(a.jsx)(X,{children:Object(a.jsxs)(B.a.Item,{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(J.a,{name:"user"}),t.player_name]}),Object(a.jsx)(d.a,{size:"small",onClick:function(){r(!1),n(t,i)},children:"Add To The Team"})]})})},K=function(){var e=Object(M.a)(E.a.mark((function e(t){var n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:if(n=e.sent,!((a=n.filter((function(e){return e.player_name?e.player_name.toLowerCase().includes(t):null}))).length<=1)){e.next=8;break}return e.next=7,R(t);case 7:return e.abrupt("return",a=e.sent);case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=n(214),W=n(219),Z=n(222),$=n(215);var ee=function(e){var t=e.team,n=e.setTeam,i=e.setRating,c=e.index,s=Object(r.useState)(""),l=Object(S.a)(s,2),u=l[0],d=l[1],j=Object(r.useState)([]),h=Object(S.a)(j,2),b=h[0],p=h[1],m=Object(r.useState)(!1),f=Object(S.a)(m,2),O=f[0],g=f[1],x=function(){var e=Object(M.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.prev=1,e.next=4,K(u);case 4:t=e.sent,p(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(M.a)(E.a.mark((function e(a,r){var c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(a);case 2:c=e.sent,t.teamPlayers[r]=c,null!==c.rating&&i(Math.floor(t.rating+parseInt(c.rating))),n(Object(o.a)({},t));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),x(),d("")},children:Object(a.jsx)(V.a,{type:"text",value:u,placeholder:"Search...",onChange:function(e){return d(e.target.value)}})}),Object(a.jsxs)(W.a,{basic:!0,onClose:function(){return g(!1)},onOpen:function(){return g(!0)},open:O,size:"small",children:[Object(a.jsx)(Z.a,{icon:!0,children:"List of Players"}),Object(a.jsx)(W.a.Content,{children:void 0===b?Object(a.jsx)("div",{children:"player not found"}):Object(a.jsx)(B.a,{children:0===b.length?Object(a.jsx)(J.a,{loading:!0,name:"spinner"}):b.map((function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(q,{index:c,onClick:v,onOpen:g,player:e},e.player_id),Object(a.jsx)($.a,{})]})}))})})]})]})},te=n(220),ne=function(e){var t=e.player;return Object(a.jsx)(T,{children:Object(a.jsx)(te.a,{children:Object(a.jsxs)(te.a.Content,{className:"card",children:[Object(a.jsx)(te.a.Header,{children:t.player_name}),Object(a.jsx)(te.a.Meta,{children:t.position}),Object(a.jsxs)(te.a.Meta,{children:["Country: ",t.birth_country]}),Object(a.jsxs)(te.a.Meta,{children:["Rating: ",t.rating]})]})})})},ae=n.p+"static/media/football_shirt1.d969715c.png";var re=function(e){var t=e.player,n=Object(r.useState)(!1),i=Object(S.a)(n,2),c=i[0],s=i[1];return Object(a.jsxs)(I,{onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)},children:[Object(a.jsx)("img",{src:ae}),Object(a.jsx)("p",{children:t.player_name}),c?Object(a.jsx)(ne,{player:t}):null]})},ie=n(35),ce="SIGN_IN",se="SIGN_OUT",oe="FETCH_TEAM",le="FETCH_TEAMS",ue="CREATE_TEAM",de="DELETE_TEAM",je="EDIT_TEAM",he=function(){return function(){var e=Object(M.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.get("/api/teams");case 2:n=e.sent,t({type:le,payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};var be=Object(ie.b)((function(e){return{isSignedIn:e.auth.isSignedIn,userId:e.auth.userId}}),{signIn:function(e){return{type:ce,payload:e}},signOut:function(){return{type:se}}})((function(e){var t=e.isSignedIn,n=e.signIn,i=e.signOut;Object(r.useEffect)((function(){window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"326216111577-ih01h0f2bhulvrkk325qaasjbvn0bi2h.apps.googleusercontent.com",scope:"email"}).then((function(){var e=window.gapi.auth2.getAuthInstance();c(e.isSignedIn.get()),e.isSignedIn.listen(c)}))}))}),[]);var c=function(e){var t=window.gapi.auth2.getAuthInstance();e?n(t.currentUser.get().getId()):i()},s=function(){window.gapi.auth2.getAuthInstance().signIn()},o=function(){window.gapi.auth2.getAuthInstance().signOut()};return Object(a.jsx)("div",{children:null===t?null:t?Object(a.jsxs)("button",{onClick:o,className:"ui red button",children:[Object(a.jsx)("i",{className:"google icon"}),"Sign Out"]}):t?void 0:Object(a.jsxs)("button",{onClick:s,className:"ui red button",children:[Object(a.jsx)("i",{className:"google icon"}),"Sign In with Google"]})})})),pe=["sixteen","four","four","four","four","four","four","four","four","six","six"],me=["sixteen","three","three","three","three","three","five","five","five","six","six"],fe=["sixteen","four","four","four","four","five","five","five","five","five","five"],Oe={teamPlayers:[{_id:0,age:0,birth_country:"",birth_date:"",birth_place:"",firstname:"",height:"",lastname:"",nationality:"",number:null,player_id:0,player_name:"",position:"",weight:"",rating:0},{_id:0,age:0,birth_country:"",birth_date:"",birth_place:"",firstname:"",height:"",lastname:"",nationality:"",number:null,player_id:0,player_name:"",position:"",weight:"",rating:0},{_id:0,age:0,birth_country:"",birth_date:"",birth_place:"",firstname:"",height:"",lastname:"",nationality:"",number:null,player_id:0,player_name:"",position:"",weight:"",rating:0},{_id:0,age:0,birth_country:"",birth_date:"",birth_place:"",firstname:"",height:"",lastname:"",nationality:"",number:null,player_id:0,player_name:"",position:"",weight:"",rating:0},{_id:0,age:0,birth_country:"",birth_date:"",birth_place:"",firstname:"",height:"",lastname:"",nationality:"",number:null,player_id:0,player_name:"",position:"",weight:"",rating:0},{_id:0,age:0,birth_country:"",birth_date:"",birth_place:"",firstname:"",height:"",lastname:"",nationality:"",number:null,player_id:0,player_name:"",position:"",weight:"",rating:0},{_id:0,age:0,birth_country:"",birth_date:"",birth_place:"",firstname:"",height:"",lastname:"",nationality:"",number:null,player_id:0,player_name:"",position:"",weight:"",rating:0},{_id:0,age:0,birth_country:"",birth_date:"",birth_place:"",firstname:"",height:"",lastname:"",nationality:"",number:null,player_id:0,player_name:"",position:"",weight:"",rating:0},{_id:0,age:0,birth_country:"",birth_date:"",birth_place:"",firstname:"",height:"",lastname:"",nationality:"",number:null,player_id:0,player_name:"",position:"",weight:"",rating:0},{_id:0,age:0,birth_country:"",birth_date:"",birth_place:"",firstname:"",height:"",lastname:"",nationality:"",number:null,player_id:0,player_name:"",position:"",weight:"",rating:0},{_id:0,age:0,birth_country:"",birth_date:"",birth_place:"",firstname:"",height:"",lastname:"",nationality:"",number:null,player_id:0,player_name:"",position:"",weight:"",rating:0}],teamModule:pe,teamName:"",userId:"",logo:"",rating:0},ge=n(216),xe=n(96);function ve(){var e=Object(h.a)(["\n  background-color: rgba(2, 5, 47, 0.85);\n  color: white;\n  margin-right: 1rem;\n  display: flex;\n  flex-direction: column;\n  width: 25%;\n  height: 70vh;\n  padding-top: 2em;\n  padding-bottom: 1em;\n  padding-left: 0.4em;\n  border-radius: 15px;\n  .label {\n    max-width: 90%;\n    margin-top: 0.6em;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  img {\n    margin: auto;\n    max-width: 40%;\n    max-height: 40%;\n  }\n"]);return ve=function(){return e},e}var ye=b.a.div(ve());var _e=function(e){var t=e.onSelectChange,n=e.onNameChange,i=e.onLogoChange,c=e.onClick,s=e.team,o=Object(r.useState)(!0),l=Object(S.a)(o,2),u=l[0],j=l[1],h=Object(r.useState)(!0),b=Object(S.a)(h,2),p=b[0],m=b[1],f=Object(r.useState)(!0),O=Object(S.a)(f,2),g=O[0],x=O[1];return Object(r.useEffect)((function(){u||p||x(!1)}),[u,p]),Object(a.jsxs)(ye,{children:[Object(a.jsx)("div",{children:Object(a.jsxs)("h3",{children:["Your Team Name: ",s.teamName]})}),Object(a.jsxs)(ge.a,{children:[Object(a.jsxs)(xe.a,{className:"label",children:["Choose a Name",Object(a.jsx)(ge.a.Input,{error:u,placeholder:"Name Your team",onChange:function(e){n(e),j(!1)}})]}),Object(a.jsxs)(xe.a,{className:"label",children:["Choose a Logo",Object(a.jsx)(ge.a.Input,{error:p,placeholder:"Insert an Image url",onChange:function(e){i(e),m(!1)}})]}),Object(a.jsxs)(xe.a,{className:"label",children:["Select Your Module",Object(a.jsxs)("select",{value:s.teamModule,className:"ui dropdown ",onChange:t,children:[Object(a.jsx)("option",{value:me,children:"defensive 5-3-2"}),Object(a.jsx)("option",{value:pe,children:"classic 4-4-2"}),Object(a.jsx)("option",{value:fe,children:"offensive 4-3-3"})]})]})]}),Object(a.jsx)(xe.a,{className:"label",children:Object(a.jsxs)("p",{children:["Your Team Rating: ",Object(a.jsx)("span",{children:s.rating})]})}),Object(a.jsx)("img",{src:s.logo,alt:"logo"}),Object(a.jsx)(d.a,{disabled:g,type:"submit",onClick:c,children:"Submit"})]})};var we=Object(ie.b)((function(e){return{auth:e.auth}}),{createTeam:function(e){return function(){var t=Object(M.a)(E.a.mark((function t(n){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.post("/api/teams",e);case 2:a=t.sent,n({type:ue,payload:a.data}),window.location.assign("/list");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.createTeam,n=e.auth,i=Object(r.useState)()[1],c=Object(r.useState)(Oe),s=Object(S.a)(c,2),o=s[0],l=s[1],u=function(e){var t=e.target.value.split(",");o.teamModule=t,i(e)},d=function(e){o.teamName=e.target.value,i(e)},j=function(e){o.logo=e.target.value,i(e)},h=function(e){return o.rating=e},b=function(){var e={teamName:o.teamName.toUpperCase(),teamPlayers:o.teamPlayers,teamModule:o.teamModule,userId:n.userId,logo:o.logo,rating:o.rating};t(e)};return Object(a.jsx)(a.Fragment,{children:null===n.isSignedIn?Object(a.jsx)(J.a,{loading:!0,name:"spinner"}):n.isSignedIn?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(_e,{onSelectChange:u,onNameChange:d,onLogoChange:j,onClick:b,team:o}),Object(a.jsx)(_,{children:Object(a.jsx)("div",{className:"ui centered grid",children:o.teamModule.map((function(e,t){return Object(a.jsx)("div",{className:"".concat(e," wide column"),children:0===o.teamPlayers[t]._id?Object(a.jsx)(w,{children:Object(a.jsx)(ee,{team:o,setRating:h,setTeam:l,index:t})}):Object(a.jsx)(w,{children:Object(a.jsx)(re,{player:o.teamPlayers[t]})},t)},t)}))})})]}):Object(a.jsxs)("div",{style:{margin:"auto"},children:[Object(a.jsx)("p",{children:"You have to be logged in to create a team"}),Object(a.jsx)(be,{})]})})})),Te=n(161);var Ie=Object(ie.b)((function(e){return{teams:Object.values(e.teams),auth:e.auth}}),{fetchTeams:he,deleteTeam:function(e){return function(){var t=Object(M.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:G.delete("/api/teams/".concat(e)),n({type:de,payload:e}),window.location.assign("/");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.teams,n=e.auth,i=e.fetchTeams,c=e.deleteTeam,s=e.addToFightBtn;return Object(r.useEffect)((function(){i()}),[t.length]),Object(a.jsx)("div",{children:t?Object(a.jsx)(te.a.Group,{children:t.map((function(e){return Object(a.jsxs)(te.a,{children:[Object(a.jsxs)(te.a.Content,{children:[Object(a.jsx)(Te.a,{floated:"right",size:"mini",src:e.logo}),Object(a.jsx)(te.a.Header,{children:e.teamName})]}),Object(a.jsx)(te.a.Content,{extra:!0,children:Object(a.jsx)("div",{className:"ui two buttons",children:s?s(e):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(u.b,{to:"/team/".concat(e._id),children:Object(a.jsx)(d.a,{basic:!0,color:"green",children:"Go To Team"})}),n.userId===e.userId?Object(a.jsx)(d.a,{basic:!0,color:"red",onClick:function(t){return n=e._id,void c(n);var n},children:"DELETE"}):null]})})})]})}))}):Object(a.jsx)(J.a,{loading:!0,name:"spinner"})})}));var Ce=function(e){var t=e.team;return Object(a.jsx)(a.Fragment,{children:t?Object(a.jsx)(_,{children:Object(a.jsx)("div",{className:"ui centered grid",children:t.teamModule.map((function(e,n){return Object(a.jsx)("div",{className:"".concat(e," wide column"),children:Object(a.jsx)(w,{children:Object(a.jsx)(re,{player:t.teamPlayers[n]})},n)})}))})}):Object(a.jsx)(J.a,{loading:!0,name:"spinner"})})};function Ne(){var e=Object(h.a)(["\n  display: flex;\n  .content {\n    display: flex;\n    justify-content: space-between;\n  }\n  .modal {\n  }\n  .list {\n    width: 65%;\n    max-height: 70vh;\n    overflow: scroll;\n  }\n  .btns {\n    align-self: flex-end;\n  }\n"]);return Ne=function(){return e},e}var Se=b.a.div(Ne());var ke=Object(ie.b)((function(e){return{teams:e.teams}}),{fetchTeams:he})((function(e){var t=e.teams,n=e.fetchTeams,i=Object(r.useState)(Oe),c=Object(S.a)(i,2),s=c[0],o=c[1],l=Object(r.useState)(Oe),u=Object(S.a)(l,2),j=u[0],h=u[1],b=Object(r.useState)(""),p=Object(S.a)(b,2),m=p[0],f=p[1],O=Object(r.useState)(!1),g=Object(S.a)(O,2),x=g[0],v=g[1];Object(r.useEffect)((function(){n()}),[s,j]);var y=function(){0!==s.rating&&0!==j.rating&&(s.rating>j.rating?f(s.teamName):f(j.teamName),v(!0))},_=function(){h(Oe),o(Oe),f("")},w=function(e){var t=!1;return t=0!==s.rating&&0!==j.rating,Object(a.jsx)("div",{children:Object(a.jsx)(d.a,{disabled:t,onClick:function(){return function(e){""===s.teamName?o(e):h(e)}(e)},children:"Add Team"})})};return Object(a.jsx)("div",{children:t?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(Se,{children:[Object(a.jsxs)(W.a,{open:x,basic:!0,size:"small",children:[Object(a.jsxs)(W.a.Content,{children:[Object(a.jsxs)("p",{children:[s.teamName," score is: ",s.rating]}),Object(a.jsxs)("p",{children:[j.teamName," score is: ",j.rating]})]}),Object(a.jsxs)(Z.a,{children:["The Winnning Team is: ",m,"!"]}),Object(a.jsx)(W.a.Actions,{children:Object(a.jsxs)(d.a,{basic:!0,color:"red",inverted:!0,onClick:function(){return v(!1)},children:[Object(a.jsx)(J.a,{name:"remove"}),"Close"]})})]}),Object(a.jsx)("div",{className:"list",children:Object(a.jsx)(Ie,{addToFightBtn:w})}),Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("div",{className:"team",children:Object(a.jsx)(Ce,{team:s})}),Object(a.jsx)("div",{className:"team",children:Object(a.jsx)(Ce,{team:j})})]})]}),Object(a.jsxs)("div",{className:"btns",children:[Object(a.jsx)(d.a,{onClick:y,children:"Fight!"}),Object(a.jsx)(d.a,{onClick:_,children:"Reset"})]})]}):Object(a.jsx)(J.a,{loading:!0,name:"spinner"})})}));function Ee(){var e=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  justify-content: center;\n  align-items: center;\n  margin-right: 2em;\n  width: 25%;\n  height: 70vh;\n  border: 2px solid black;\n  border-radius: 20px;\n"]);return Ee=function(){return e},e}function Me(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n"]);return Me=function(){return e},e}var Fe=b.a.div(Me()),Ae=b.a.div(Ee());var Le=Object(ie.b)((function(e,t){return{team:e.teams[t.match.params.id],auth:e.auth}}),{fetchTeam:function(e){return function(){var t=Object(M.a)(E.a.mark((function t(n){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.get("/api/teams/".concat(e));case 2:a=t.sent,n({type:oe,payload:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.match,n=e.fetchTeam,i=e.team,c=e.auth;return Object(r.useEffect)((function(){n(t.params.id)}),[c.isSignedIn]),Object(a.jsx)("div",{children:i?Object(a.jsxs)(Fe,{children:[Object(a.jsxs)(Ae,{children:[Object(a.jsx)("h2",{children:i.teamName}),Object(a.jsxs)("h5",{children:["Rating: ",i.rating]}),Object(a.jsx)("img",{src:i.logo,alt:"logo"})]}),Object(a.jsx)(Ce,{team:i})]}):Object(a.jsx)(J.a,{loading:!0,name:"spinner"})})})),Pe=n(217),Re=function(){return Object(a.jsxs)(Pe.a,{children:[Object(a.jsx)(Pe.a.Item,{name:"Menu",children:Object(a.jsx)(u.b,{to:"/",children:"Home"})}),Object(a.jsx)(Pe.a.Item,{name:"All The Teams",children:Object(a.jsx)(u.b,{to:"/list",children:"All the Teams"})}),Object(a.jsx)(Pe.a.Item,{name:"Create Your Team",children:Object(a.jsx)(u.b,{to:"/create",children:"Create Your Team"})}),Object(a.jsx)(Pe.a.Item,{name:"Team Fight",children:Object(a.jsx)(u.b,{to:"/fight",children:"Team Fight"})}),Object(a.jsx)(Pe.a.Item,{name:"Sign In",position:"right",children:Object(a.jsx)(be,{})})]})};var Ye=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Re,{}),Object(a.jsx)(y,{children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",render:function(){return Object(a.jsx)(N,{})}}),Object(a.jsx)(l.a,{exact:!0,path:"/create",render:function(){return Object(a.jsx)(we,{})}}),Object(a.jsx)(l.a,{exact:!0,path:"/fight",render:function(){return Object(a.jsx)(ke,{})}}),Object(a.jsx)(l.a,{exact:!0,path:"/team/:id",render:function(e){return Object(a.jsx)(Le,Object(o.a)({},e))}}),Object(a.jsx)(l.a,{exact:!0,path:"/list",render:function(){return Object(a.jsx)(Ie,{})}})]})})]})},ze=n(64),De=n(160),Ge={isSignedIn:null,userId:null},He=n(90),Ue=n(138),Be=n.n(Ue),Je=Object(ze.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:return Object(o.a)(Object(o.a)({},e),{},{isSignedIn:!0,userId:t.payload});case se:return Object(o.a)(Object(o.a)({},e),{},{isSignedIn:!1,userId:null});default:return e}},teams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le:return Object(o.a)(Object(o.a)({},e),Be.a.mapKeys(t.payload,"_id"));case oe:case ue:return Object(o.a)(Object(o.a)({},e),{},Object(He.a)({},t.payload._id,t.payload));case de:return Be.a.omit(e,t.payload);case je:return Object(o.a)(Object(o.a)({},e),{},Object(He.a)({},t.payload._id,t.payload));default:return e}}}),Qe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,224)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))},Xe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ze.d,qe=Object(ze.e)(Je,Xe(Object(ze.a)(De.a)));s.a.render(Object(a.jsx)(u.a,{basename:"/",children:Object(a.jsx)(ie.a,{store:qe,children:Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(Ye,{})})})}),document.getElementById("root")),Qe()}},[[202,1,2]]]);
//# sourceMappingURL=main.2b8969cc.chunk.js.map