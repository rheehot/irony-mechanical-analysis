(this["webpackJsonpr3f-svg-react-spring-transitions"]=this["webpackJsonpr3f-svg-react-spring-transitions"]||[]).push([[0],{32:function(e,t,n){e.exports=n(44)},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(16),c=n.n(r),o=n(0),s=n.n(o),i=n(13),u=n(4),p=n(15);var l=function(e){var t=e.shape,n=e.rotation,r=e.position,c=e.color,o=e.opacity,i=e.index;return s.a.createElement(p.a.mesh,{rotation:n,position:r.interpolate((function(e,t,n){return[e,t,n+50*-i]}))},s.a.createElement(p.a.meshPhongMaterial,{attach:"material",color:c,opacity:o,side:a.DoubleSide,depthWrite:!1,transparent:!0}),s.a.createElement("shapeBufferGeometry",{attach:"geometry",args:[t]}))},h=n(6),f=n(8),m={happy:0,sad:1,angry:2,surprise:3,calm:4,anticipated:5},g=new(function(){function e(){Object(h.a)(this,e),this.pageDispatcher=null}return Object(f.a)(e,[{key:"setPageDispatcher",value:function(e){this.pageDispatcher=e}},{key:"setPage",value:function(e){this.pageDispatcher(m[e])}}]),e}()),d=["#ffbcb7","#21242d","#ea5158","#0d4663","#2d4a3e","#8bd8d2"],v=n(29),b=n(31),y=["happy","sad","angry","surprise","calm","anticipated"].map((function(e){return"https://raw.githubusercontent.com/doong-jo/irony-mechanical-analysis/master/src/resources/images/svg/sad.svg"})).map((function(e){return new Promise((function(t){return(new v.a).load(e,(function(e){return t(Object(b.a)(e.paths.map((function(e,t){return e.toShapes(!0).map((function(n){return{shape:n,color:e.color,index:t}}))}))))}))}))}));var O=function(){var e=Object(o.useState)(0),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(o.useState)([]),i=Object(u.a)(c,2),h=i[0],f=i[1];g.setPageDispatcher(r),Object(o.useEffect)((function(){y[n].then(f)}),[n]);var m=Object(p.b)({color:d[n]}).color,v=Object(p.c)(h,(function(e){return e.shape.uuid}),{from:{rotation:[0,-Math.PI/4,0],position:[0,50,-200],opacity:0},enter:{rotation:[0,0,0],position:[0,0,0],opacity:1},leave:{rotation:[0,.25,0],position:[0,-50,10],opacity:0},order:["leave","enter","update"],trail:5,lazy:!0});return s.a.createElement(s.a.Fragment,null,s.a.createElement("mesh",{scale:[2e4,2e4,1],rotation:[0,a.Math.degToRad(-20),0]},s.a.createElement("planeGeometry",{attach:"geometry",args:[1,1]}),s.a.createElement(p.a.meshPhongMaterial,{attach:"material",color:m,depthTest:!1})),s.a.createElement("group",{position:[1600,-700,n],rotation:[0,a.Math.degToRad(180),0]},v.map((function(e){var t=e.item,n=e.key,a=e.props;return s.a.createElement(l,Object.assign({key:n},t,a))}))))},k=n(14),E=n.n(k),j=n(18),x=[{name:"\uc5c4\ub9c8\uc57c \ub204\ub098\uc57c",sentences:[{content:"\uc5c4\ub9c8\uc57c \ub204\ub098\uc57c \uac15\ubcc0 \uc0b4\uc790",length:2e3},{content:"\ub730\uc5d0\ub294 \ubc18\uc9dd\uc774\ub294 \uae08\ubaa8\ub798\ube5b",length:4e3},{content:"\ub4b7\ubb38\ubc16\uc5d0\ub294 \uac08\uc78e\uc758 \ub178\ub798",length:6e3},{content:"\uc5c4\ub9c8\uc57c \ub204\ub098\uc57c \uac15\ubcc0 \uc0b4\uc790",length:8e3},{content:"\uc5c4\ub9c8\uc57c \ub204\ub098\uc57c \uac15\ubcc0 \uc0b4\uc790",length:2e3},{content:"\ub730\uc5d0\ub294 \ubc18\uc9dd\uc774\ub294 \uae08\ubaa8\ub798\ube5b",length:4e3},{content:"\ub4b7\ubb38\ubc16\uc5d0\ub294 \uac08\uc78e\uc758 \ub178\ub798",length:6e3},{content:"\uc5c4\ub9c8\uc57c \ub204\ub098\uc57c \uac15\ubcc0 \uc0b4\uc790",length:8e3}]}],w=function(e){return"".concat("https://gcp-nlp-api-server.herokuapp.com","/api/gcp-lang/emotion?text=").concat(e)},I=function(e){return"".concat("https://gcp-nlp-api-server.herokuapp.com","/api/gcp-lang/entity?text=").concat(e)};function S(e,t){return T.apply(this,arguments)}function T(){return(T=Object(j.a)(E.a.mark((function e(t,n){var a,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n,e.next="EMOTION"===e.t0?3:"ENTITY"===e.t0?7:11;break;case 3:return e.next=5,fetch(w(t));case 5:return a=e.sent,e.abrupt("break",12);case 7:return e.next=9,fetch(I(t));case 9:return a=e.sent,e.abrupt("break",12);case 11:return e.abrupt("return");case 12:return e.next=14,a.json();case 14:return r=e.sent,e.abrupt("return",r);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("https://gcp-nlp-api-server.herokuapp.com");var D=new(function(){function e(){Object(h.a)(this,e),this.sentencesHand=0,this.songIndex=0,this.emotionsOfSongs={},this.subtitleDispatcher=null}return Object(f.a)(e,[{key:"setSubTitleDispatcher",value:function(e){this.subtitleDispatcher=e}},{key:"flattenSentences",value:function(e){return e.sentences.map((function(e){var t=e.content;return"".concat(t,". ")})).join("")}},{key:"researchEmotion",value:function(){var e=Object(j.a)(E.a.mark((function e(t){var n,a,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=x[t].name,!this.emotionsOfSongs[n]){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,S(this.flattenSentences(x[t]),"EMOTION");case 5:a=e.sent,r=a.sentences,this.emotionsOfSongs[n]=r;case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"playIntervalCallback",value:function(){this.sentencesHand++,this.playInterval(this.songIndex)}},{key:"playInterval",value:function(e){var t=this;this.songIndex=e;var n=x[e],a=n.name,r=n.sentences;if(this.sentencesHand!==r.length){var c=r[this.sentencesHand],o=c.content,s=c.length,i=this.emotionsOfSongs[a][this.sentencesHand].score,u=function(e){return e>=.5?"happy":e>=.3?"surprise":e>0?"anticipated":e<=-.5?"angry":e<=-.3?"sad":e<=0?"calm":void 0}(i);g.setPage(u),this.subtitleDispatcher(o),console.log(i),console.log("emotion",u),console.log(a,o),setTimeout((function(){t.playIntervalCallback()}),s)}}},{key:"play",value:function(){var e=Object(j.a)(E.a.mark((function e(){var t,n=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:0,this.sentencesHand=0,e.next=4,this.researchEmotion(t);case 4:this.playInterval(t);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}());var M=function(){var e=Object(o.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1];return D.setSubTitleDispatcher(a),s.a.createElement(i.b,{position:[2e3,-1900,100]},s.a.createElement("h1",null,n))};n(43);c.a.render(s.a.createElement((function(){return D.play(),s.a.createElement(i.a,{concurrent:!0,camera:{fov:80,position:[0,0,2e3],rotation:[0,a.Math.degToRad(-20),a.Math.degToRad(180)],near:.1,far:2e4}},s.a.createElement("ambientLight",{intensity:.5}),s.a.createElement("spotLight",{intensity:.5,position:[300,300,4e3]}),s.a.createElement(M,null),s.a.createElement(O,null))}),null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.f5cfbaba.chunk.js.map