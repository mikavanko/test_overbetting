(function(t){function e(e){for(var o,a,c=e[0],s=e[1],l=e[2],d=0,p=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/hackathon/dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"4ab2":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],a={name:"App"},c=a,s=(n("034f"),n("2877")),l=Object(s["a"])(c,r,i,!1,null,null,null),u=l.exports,d=n("8c4f"),p=n("2f62"),f=n("bc3a"),m=n.n(f),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v(" "+t._s(t.progressText)+" "),t.isLoading?n("span",[t._v(" : "+t._s(t.progress)+" ")]):t._e()]),n("br"),n("Form",{on:{submit:t.submitForm}}),n("br"),n("UploadedList",{attrs:{list:t.recognizedList}})],1)},g=[],v=n("1da1"),b=(n("96cf"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{attrs:{action:"https://storage.googleapis.com/hakathon",enctype:"multipart/form-data"},on:{submit:t.submit}},[n("input",{attrs:{name:"file",type:"file"},on:{change:t.handleFileUpload}}),n("input",{attrs:{type:"submit",value:"Upload"}})])}),w=[],y=(n("b0c0"),{name:"Form",props:{},data:function(){return{form:{},file:""}},methods:{handleFileUpload:function(t){this.file=t.target.files[0]},submit:function(t){t.preventDefault();var e=new FormData;e.append("file",this.file),e.append("key",this.file.name),this.$emit("submit",e)}}}),k=y,_=Object(s["a"])(k,b,w,!1,null,"076f20b3",null),x=_.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[t._v(" Распознанные аудио: "),t._l(t.listAdapter,(function(e,o){return n("div",{key:o,staticClass:"list-row"},[n("div",{staticClass:"list-row__name"},[t._v(" "+t._s(e.name)+" ")]),n("router-link",{staticClass:"list-row__link",attrs:{to:"/"+e.name}},[t._v(" Перейти ")])],1)}))],2)},L=[],O=(n("d81d"),{name:"UploadedList",props:{list:{type:Array,default:function(){return[]}}},computed:{listAdapter:function(){return this.list.map((function(t){return{name:t.name}}))}}}),z=O,R=(n("7cea"),Object(s["a"])(z,j,L,!1,null,"1e61c288",null)),$=R.exports,I=(n("d3b7"),n("99af"),"d4eridc8huj6c6crgnpu"),E=function(t,e){var n=e.params;return t.$axios.post("https://storage.googleapis.com/hakathon",n)},T=function(t,e){var n=e.params;return fetch("https://functions.yandexcloud.net/".concat(I,"?action=").concat(n.action,"&file=").concat(n.file),{method:"post"}).then((function(t){return t.json()}))},C=function(t,e){var n=e.params;return fetch("https://functions.yandexcloud.net/".concat(I,"?action=").concat(n.action,"&operationId=").concat(n.operationId),{method:"get"}).then((function(t){return t.json()}))},F=function(t,e){var n=e.url;return t.$axios.get(n).then((function(t){return t.data}))},P=1e3,U={name:"Home",components:{Form:x,UploadedList:$},data:function(){return{polling:null,percent:0,operationId:null,isLoading:!1,progressText:""}},computed:{recognizedList:function(){return this.$store.getters.getRecognizedList},progress:function(){return"".concat(this.percent,"%")}},methods:{pollData:function(t,e){var n=this;this.polling=setInterval((function(){t().then((function(t){n.percent=t.percent,t.done&&(e(t),clearInterval(n.polling))}))}),P)},recognizeFile:function(t){var e=this,n={action:"recognize",file:t.get("key")};return T(this,{params:n}).then((function(t){e.operationId=t.operationId})).catch((function(t){console.log(t)}))},checkProgress:function(){var t={action:"check",operationId:this.operationId};return C(this,{params:t}).catch((function(t){console.log(t)}))},submitForm:function(t){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.progressText="Загрузка на сервер...",n.next=3,E(e,{params:t});case 3:return n.next=5,e.recognizeFile(t);case 5:e.progressText="Загрузка",e.isLoading=!0,e.pollData(e.checkProgress,function(){var n=Object(v["a"])(regeneratorRuntime.mark((function n(o){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,F(e,{url:o.resultUrl});case 2:r=n.sent,e.$store.dispatch("setRecognizedList",{name:t.get("key"),data:r});case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}());case 8:case"end":return n.stop()}}),n)})))()}},mounted:function(){console.log("this",this.$store)},beforeDestroy:function(){clearInterval(this.polling)}},A=U,S=Object(s["a"])(A,h,g,!1,null,null,null),D=S.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"edit-page"},[n("editor",{attrs:{"content-arr":t.content}})],1)},J=[],B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor"},[n("editor",{attrs:{"api-key":"no-api-key",init:{height:500,plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],toolbar1:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",toolbar2:"print preview media | forecolor backcolor emoticons",image_advtab:!0,templates:[{title:"Test template 1",content:"Test 1"},{title:"Test template 2",content:"Test 2"}],extended_valid_elements:"word[time]",custom_elements:"~word",init_instance_callback:t.initInstanceCallback},"model-events":"click"},on:{click:t.keydown},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),n("br"),n("button",{on:{click:t.onClick}},[t._v("Load docx")])],1)},H=[],q=(n("a15b"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),n("ca72")),G={name:"Editor",components:{editor:q["a"]},props:{contentArr:{type:Array,default:function(){return null}}},data:function(){return{content:""}},watch:{contentArr:function(t){this.content=t.map((function(t){return t.confidence<.6?'<span style="background-color: red;"><word time="'.concat(t.startTime,'">').concat(t.word,"</word></span>"):'<word time="'.concat(t.startTime,'">').concat(t.word,"</word>")})).join(" ")}},mounted:function(){},methods:{initInstanceCallback:function(t){t.on("click",(function(t){console.log("Element clicked:",t.target)}))},keydown:function(t){console.log(t)},downloadBlob:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"file.docx",n=URL.createObjectURL(t),o=document.createElement("a");o.href=n,o.download=e,document.body.appendChild(o),o.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window})),document.body.removeChild(o)},onClick:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log(t.content);case 1:case"end":return e.stop()}}),e)})))()}}},K=G,N=Object(s["a"])(K,B,H,!1,null,null,null),Q=N.exports,V={name:"Edit",components:{Editor:Q},data:function(){return{content:null}},mounted:function(){var t=this.$route.params.id;this.content=this.$store.getters.getRecognizedItem(t),console.log(this.content)}},W=V,X=Object(s["a"])(W,M,J,!1,null,null,null),Y=X.exports,Z=[{path:"/",component:D},{path:"/:id",component:Y}],tt=(n("7db0"),{state:{recognizedList:[]},mutations:{setRecognizedList:function(t,e){t.recognizedList.push(e)}},actions:{setRecognizedList:function(t,e){var n=t.commit;n("setRecognizedList",e)}},getters:{getRecognizedList:function(t){return t.recognizedList},getRecognizedItem:function(t){return function(e){return console.log("id",e),t.recognizedList.find((function(t){return t.name===e})).data}}}});o["a"].prototype.$axios=m.a,o["a"].use(p["a"]),o["a"].use(d["a"]);var et=new p["a"].Store(tt),nt=new d["a"]({routes:Z,mode:"history"});o["a"].config.productionTip=!1,new o["a"]({store:et,router:nt,render:function(t){return t(u)}}).$mount("#app")},"7cea":function(t,e,n){"use strict";n("4ab2")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.26a6ff11.js.map