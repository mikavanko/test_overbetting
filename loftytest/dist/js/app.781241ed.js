(function(t){function e(e){for(var n,i,s=e[0],c=e[1],d=e[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},o={app:0},r=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"57388cf6"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=o[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=n);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var d=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}o[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/loftytest/dist/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=d;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1725:function(t){t.exports=JSON.parse('[{"artnumber":"123456","name":"Корм 1","brand":"Felix","weight":"1500","quantity":"20","price":"1500","stock":"1"},{"artnumber":"123457","name":"Корм 2","brand":"Felix","weight":"1100","quantity":"10","price":"1400","stock":"0"},{"artnumber":"123458","name":"Корм 3","brand":"Felix","weight":"1500","quantity":"20","price":"3500","stock":"1"},{"artnumber":"123459","name":"Корм 4","brand":"Felix","weight":"1500","quantity":"30","price":"3450","stock":"0"},{"artnumber":"1234510","name":"Корм 5","brand":"Sheba","weight":"1500","quantity":"20","price":"20","stock":"0"},{"artnumber":"1234511","name":"Корм 6","brand":"Sheba","weight":"1500","quantity":"60","price":"50","stock":"1"},{"artnumber":"1234512","name":"Корм 7","brand":"Royal Canin","weight":"150","quantity":"10","price":"150","stock":"1"},{"artnumber":"1234512","name":"Корм 8","brand":"Royal Canin","weight":"9000","quantity":"1","price":"6000","stock":"0"},{"artnumber":"1234513","name":"Корм 9","brand":"Whiskas","weight":"800","quantity":"1","price":"10","stock":"1"},{"artnumber":"1234515","name":"Корм 10","brand":"Whiskas","weight":"1500","quantity":"1","price":"860","stock":"0"},{"artnumber":"1234514","name":"Корм 11","brand":"Petcurean","weight":"800","quantity":"20","price":"1150","stock":"1"},{"artnumber":"123456654","name":"Корм 12","brand":"AlmoNature","weight":"500","quantity":"10","price":"1800","stock":"1"}]')},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("Popup"),a("Table")],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pl-0 pr-0",attrs:{fluid:""}},[a("v-btn",{staticClass:"mb-5 ml-5",attrs:{color:"teal",dark:""},on:{click:t.editRow}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-plus")]),a("span",[t._v("Создать новый товар")])],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.getData,"items-per-page":10},scopedSlots:t._u([{key:"item.controls",fn:function(e){return[a("v-btn",{staticClass:"mr-2",attrs:{icon:"",small:""},on:{click:function(a){return t.editRow(e.item)}}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-pencil")])],1),a("v-btn",{staticClass:"mr-2",attrs:{icon:"",small:""},on:{click:function(a){return t.deleteRow(e.item)}}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-delete")])],1)]}}])})],1)},s=[],c=(a("c975"),a("a434"),a("5530")),d=a("2f62"),u={name:"Table",components:{},data:function(){return{headers:[{text:"Артикул",sortable:!1,value:"artnumber"},{text:"Название товара",value:"name"},{text:"Бренд",value:"brand"},{text:"Вес",value:"weight"},{text:"Фасовка",value:"quantity"},{text:"Цена",value:"price"},{text:"Наличие",value:"stock"},{text:"",value:"controls",sortable:!1}]}},created:function(){this.$store.dispatch("initData")},computed:Object(c["a"])({},Object(d["b"])(["getData"])),methods:{editRow:function(t){var e=this.getData.indexOf(t);e>-1&&(this.$store.dispatch("setEditedIdx",e),this.$store.dispatch("setEditedRow",t)),this.$store.dispatch("togglePopup")},deleteRow:function(t){var e=this.getData.indexOf(t);confirm("Вы уверены что хотите удалить этот товар?")&&this.getData.splice(e,1)}}},l=u,p=a("2877"),f=a("6544"),m=a.n(f),b=a("8336"),v=a("a523"),g=a("8fea"),h=a("132d"),w=Object(p["a"])(l,i,s,!1,null,null,null),x=w.exports;m()(w,{VBtn:b["a"],VContainer:v["a"],VDataTable:g["a"],VIcon:h["a"]});var y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.getPopup,callback:function(e){t.getPopup=e},expression:"getPopup"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.popupTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Название тотвара"},model:{value:t.getEditedRow.name,callback:function(e){t.$set(t.getEditedRow,"name",e)},expression:"getEditedRow.name"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Бренд"},model:{value:t.getEditedRow.brand,callback:function(e){t.$set(t.getEditedRow,"brand",e)},expression:"getEditedRow.brand"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Вес"},model:{value:t.getEditedRow.weight,callback:function(e){t.$set(t.getEditedRow,"weight",e)},expression:"getEditedRow.weight"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Фасовка"},model:{value:t.getEditedRow.quantity,callback:function(e){t.$set(t.getEditedRow,"quantity",e)},expression:"getEditedRow.quantity"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Цена"},model:{value:t.getEditedRow.price,callback:function(e){t.$set(t.getEditedRow,"price",e)},expression:"getEditedRow.price"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Наличие"},model:{value:t.getEditedRow.stock,callback:function(e){t.$set(t.getEditedRow,"stock",e)},expression:"getEditedRow.stock"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"teal darken-2",text:""},on:{click:t.close}},[t._v("Отмена")]),a("v-btn",{attrs:{color:"teal darken-2",text:""},on:{click:t.save}},[t._v("Сохранить")])],1)],1)],1)},k=[],R={name:"Popup",computed:Object(c["a"])({popupTitle:function(){return-1===this.getEditedIdx?"Новый товар":"Редактирование товара"},getPopup:{get:function(){return this.$store.getters.getPopup},set:function(){this.close()}}},Object(d["b"])(["getData","getEditedRow","getEditedIdx"])),methods:{save:function(){this.$store.dispatch("setData"),this.close()},close:function(){var t=this;this.$store.dispatch("togglePopup"),this.$nextTick((function(){console.log("close"),t.$store.dispatch("resetToDefaultRow")}))}}},E=R,O=a("b0af"),P=a("99d9"),_=a("62ad"),j=a("169a"),D=a("0fd9"),T=a("2fa4"),$=a("8654"),q=Object(p["a"])(E,y,k,!1,null,null,null),C=q.exports;m()(q,{VBtn:b["a"],VCard:O["a"],VCardActions:P["a"],VCardText:P["b"],VCardTitle:P["c"],VCol:_["a"],VContainer:v["a"],VDialog:j["a"],VRow:D["a"],VSpacer:T["a"],VTextField:$["a"]});var V={name:"App",components:{Table:x,Popup:C}},I=V,S=a("7496"),A=a("a75b"),F=Object(p["a"])(I,o,r,!1,null,null,null),M=F.exports;m()(F,{VApp:S["a"],VContent:A["a"]});a("d3b7");var J=a("8c4f"),B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Table")],1)},H=[],L={name:"Home",components:{Table:x}},N=L,W=Object(p["a"])(N,B,H,!1,null,null,null),z=W.exports;n["a"].use(J["a"]);var G=[{path:"/",name:"Home",component:z},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],K=new J["a"]({mode:"history",base:"/loftytest/dist/",routes:G}),Q=K,U=(a("25f0"),a("1725"));n["a"].use(d["a"]);var X=new d["a"].Store({state:{data:null,popup:!1,editedIdx:-1,editedRow:{artnumber:0,name:"",brand:"",weight:0,quantity:0,price:0,stock:0},defaultRow:{artnumber:0,name:"",brand:"",weight:0,quantity:0,price:0,stock:0}},mutations:{initData:function(t,e){t.data=e},togglePopup:function(t){t.popup=!t.popup},setEditedIdx:function(t,e){t.editedIdx=e},setEditedRow:function(t,e){console.log(e),t.editedRow=Object.assign({},e)},setData:function(t){t.editedIdx>-1?Object.assign(t.data[t.editedIdx],t.editedRow):(t.editedRow.artnumber=Math.random().toString().substr(2,7),t.data.unshift(t.editedRow))},resetToDefaultRow:function(t){t.editedRow=Object.assign({},t.defaultRow),t.editedIdx=-1}},actions:{initData:function(t){var e=U;t.commit("initData",e)},togglePopup:function(t){t.commit("togglePopup")},setEditedIdx:function(t,e){t.commit("setEditedIdx",e)},setEditedRow:function(t,e){t.commit("setEditedRow",e)},setData:function(t){t.commit("setData")},resetToDefaultRow:function(t){t.commit("resetToDefaultRow")}},getters:{getData:function(t){return t.data},getPopup:function(t){return t.popup},getEditedRow:function(t){return t.editedRow},getEditedIdx:function(t){return t.editedIdx}}}),Y=a("f309");n["a"].use(Y["a"]);var Z=new Y["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:Q,store:X,vuetify:Z,render:function(t){return t(M)}}).$mount("#app")}});
//# sourceMappingURL=app.781241ed.js.map