(function(t){function n(n){for(var o,i,a=n[0],u=n[1],r=n[2],b=0,f=[];b<a.length;b++)i=a[b],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&f.push(c[i][0]),c[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);s&&s(n);while(f.length)f.shift()();return l.push.apply(l,r||[]),e()}function e(){for(var t,n=0;n<l.length;n++){for(var e=l[n],o=!0,a=1;a<e.length;a++){var u=e[a];0!==c[u]&&(o=!1)}o&&(l.splice(n--,1),t=i(i.s=e[0]))}return t}var o={},c={app:0},l=[];function i(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=o,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)i.d(e,o,function(n){return t[n]}.bind(null,o));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=n,a=a.slice();for(var r=0;r<a.length;r++)n(a[r]);var s=u;l.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var o=e("85ec"),c=e.n(o);c.a},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},l=[],i=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[t._v("QuizMain")]),e("h1",{staticClass:"display-1"},[t._v("먹거리 쿠이이이이이즈~!")]),e("p",{staticClass:"lead"},[t._v(" 가공식품들에 대한 퀴즈를 풀며 지식을 쌓고 다른 사람들과 실시간 경쟁을 해보세요! ")]),e("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"button"}},[t._v(" 게임 시작하기 ")])])}],u={},r=u,s=e("2877"),b=Object(s["a"])(r,i,a,!1,null,"5bd0c4a4",null),f=b.exports,d=e("8c4f");o["a"].use(d["a"]);var p,h,T=new d["a"]({mode:"history",routes:[{path:"/",component:f}]}),E={name:"app",components:{},router:T},_=E,g=(e("034f"),Object(s["a"])(_,c,l,!1,null,null,null)),L=g.exports,O=e("2fa7"),m=e("2f62"),v={},j=e("bc3a"),I=e.n(j),N=I.a.create({baseURL:"http://localhost:8080/",headers:{"Content-type":"application/json"}});o["a"].use(m["a"]);var S=new m["a"].Store({state:{bulletins:[],bulletin:{},searchBulletin:{},comments:[],id:"ssafy"},actions:(p={},Object(O["a"])(p,v.GET_BULLETINLIST,(function(t){N.get("/rest/boardlist/2").then((function(n){t.commit(v.GET_BULLETINLIST,{bulletins:n.data.data})})).catch((function(t){return alert("처리에 실패하였습니다."+t)}))})),Object(O["a"])(p,v.GET_SEARCH_BULLETINLIST,(function(t,n){N.get("/rest/boardsearch/"+n.searchBulletin.searchType+"_"+n.searchBulletin.searchWord).then((function(n){t.commit(v.GET_SEARCH_BULLETINLIST,{bulletins:n.data.data})})).catch((function(t){return alert("처리에 실패하였습니다."+t)}))})),Object(O["a"])(p,v.GET_BULLETIN,(function(t,n){N.get("/rest/board/"+n.no).then((function(n){console.log("get_bulletin"),console.log(n.data.data),t.commit(v.GET_BULLETIN,{bulletin:n.data.data})})).catch((function(t){return alert("처리에 실패하였습니다."+t)}))})),Object(O["a"])(p,v.ADD_BULLETIN_CNT,(function(t,n){N.put("/rest/board/"+n.bno).then((function(t){console.log("ADD_BULLETIN_CNT 수행"),console.log(t),console.log(n.bno)})).catch((function(t){return alert("조회수 증가에 실패하였습니다."+t)}))})),Object(O["a"])(p,v.GET_COMMENTS,(function(t,n){N.get("/rest/boardansq/"+n.qno).then((function(n){t.commit(v.GET_COMMENTS,{comments:n.data.data})})).catch((function(t){return alert("처리에 실패하였습니다."+t)}))})),Object(O["a"])(p,v.ADD_BULLETIN,(function(t,n){N.post("/rest/board",{contents:n.bulletin.contents,goods:n.bulletin.goods,hits:n.bulletin.hits,sno:n.bulletin.sno,title:n.bulletin.title,uid:n.bulletin.uid}).then((function(e){console.log(e),console.log(n.bulletin),t.dispatch(v.GET_BULLETINLIST,n.sno)})).catch((function(){return console.log("추가에 실패하였습니다.")}))})),Object(O["a"])(p,v.UPDATE_BULLETIN,(function(t,n){N.put("/rest/board",{bno:n.bulletin.bno,bregdate:"",contents:n.bulletin.contents,goods:n.bulletin.goods,hits:n.bulletin.hits,sno:n.bulletin.sno,title:n.bulletin.title,uid:n.bulletin.uid}).then((function(e){console.log("update_bulletin 실행"),console.log(e),console.log(n.bulletin),t.commit(v.GET_BULLETIN,{bulletin:n.bulletin})})).catch((function(t){console.log(t),console.log("수정에 실패하였습니다.")}))})),Object(O["a"])(p,v.DELETE_BULLETIN,(function(t,n){N.delete("rest/board/"+n.bno).then((function(e){console.log("response"),console.log(e),console.log("payload.bulletin"),console.log(n.bulletin),console.log("삭제 처리 되었습니다."),t.dispatch(v.GET_BULLETINLIST,2)})).catch((function(t){return alert("삭제 처리에 실패하였습니다"+t)}))})),Object(O["a"])(p,v.ADD_BOARDANS,(function(t,n){N.post("/rest/boardans",{sno:n.sno,title:n.title,contents:n.contents,hits:n.hits,goods:n.goods,uid:n.uid,qno:n.qno}).then((function(){t.dispatch(v.GET_COMMENTS,{qno:n.qno})})).catch((function(t){console.log(t)}))})),Object(O["a"])(p,v.GET_ID,(function(t){N.get("/session.do",{withCredentials:!0}).then((function(n){t.commit(v.GET_ID,{uid:n.data.id})})).catch((function(t){console.log(t)}))})),Object(O["a"])(p,v.REMOVE_BOARDANS,(function(t,n){N.delete("/rest/boardans/"+n.bno).then((function(){t.dispatch(v.GET_COMMENTS,{qno:n.qno})})).catch((function(t){console.log(t)}))})),Object(O["a"])(p,v.GOOD_BOARDANS,(function(t,n){N.put("/rest/goodboardans",{bno:n.bno}).then((function(){t.dispatch(v.GET_COMMENTS,{qno:n.qno})})).catch((function(t){console.log(t)}))})),p),mutations:(h={},Object(O["a"])(h,v.GET_BULLETINLIST,(function(t,n){S.state.bulletins=n.bulletins})),Object(O["a"])(h,v.GET_BULLETIN,(function(t,n){S.state.bulletin=n.bulletin})),Object(O["a"])(h,v.GET_SEARCH_BULLETINLIST,(function(t,n){S.state.bulletins=n.bulletins})),Object(O["a"])(h,v.GET_COMMENTS,(function(t,n){S.state.comments=n.comments})),Object(O["a"])(h,v.GET_ID,(function(t,n){S.state.id=n.uid})),h)}),y=S;o["a"].config.productionTip=!0,new o["a"]({render:function(t){return t(L)},store:y}).$mount("#app")},"85ec":function(t,n,e){}});
//# sourceMappingURL=app.e5b5eda0.js.map