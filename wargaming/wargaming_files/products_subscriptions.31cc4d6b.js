(window["pssVueWebpackJsonp"]=window["pssVueWebpackJsonp"]||[]).push([["products~subscriptions"],{"04ff":function(e,t,s){var n=s("5ca1"),r=s("3ca5");n(n.S+n.F*(Number.parseInt!=r),"Number",{parseInt:r})},"0b98":function(e,t,s){},"12e4":function(e,t,s){"use strict";var n=s("3f84"),r=s.n(n);r.a},"1c4c":function(e,t,s){"use strict";var n=s("9b43"),r=s("5ca1"),a=s("4bf8"),i=s("1fa8"),o=s("33a4"),c=s("9def"),l=s("f1ae"),u=s("27ee");r(r.S+r.F*!s("5cc5")(function(e){Array.from(e)}),"Array",{from:function(e){var t,s,r,d,h=a(e),p="function"==typeof this?this:Array,m=arguments.length,b=m>1?arguments[1]:void 0,f=void 0!==b,g=0,y=u(h);if(f&&(b=n(b,m>2?arguments[2]:void 0,2)),void 0==y||p==Array&&o(y))for(t=c(h.length),s=new p(t);t>g;g++)l(s,g,f?b(h[g],g):h[g]);else for(d=y.call(h),s=new p;!(r=d.next()).done;g++)l(s,g,f?i(d,b,[r.value,g],!0):r.value);return s.length=g,s}})},"3ca5":function(e,t,s){var n=s("7726").parseInt,r=s("aa77").trim,a=s("fdef"),i=/^[-+]?0[xX]/;e.exports=8!==n(a+"08")||22!==n(a+"0x16")?function(e,t){var s=r(String(e),3);return n(s,t>>>0||(i.test(s)?16:10))}:n},"3f84":function(e,t,s){},"60aa":function(e,t,s){"use strict";var n={computed:{schedulePeriod:function(){var e=this,t=this.subscription.metadata.schedulePeriodNumber,s=this.subscription.metadata.schedulePeriodType,n=function(t){return{min:e.$ngettext("%d minute","%d minutes",t),hour:e.$ngettext("%d hour","%d hours",t),day:e.$ngettext("%d day","%d days",t),week:e.$ngettext("%d week","%d weeks",t),month:e.$ngettext("%d month","%d months",t),year:e.$ngettext("%d year","%d years",t)}},r=n(t)[s]||"%d ".concat(s);return this.$options.filters.sprintf(r,t)},sourceSchedulePeriod:function(){return"".concat(this.subscription.metadata.schedulePeriodNumber," ").concat(this.subscription.metadata.schedulePeriodType)},gameClass:function(){return this.title?"game-".concat(this.title):null}}};t["a"]=n},"62c8":function(e,t,s){e.exports=s.p+"img/success.ece161ff.png"},"71c7":function(e,t,s){"use strict";var n=s("950f"),r=s.n(n);r.a},"80ee":function(e,t,s){"use strict";var n=s("f6e1"),r=s.n(n);r.a},"863f":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{domProps:{innerHTML:e._s(e.message)}})},r=[],a=s("d225"),i=s("b0b4"),o=s("308d"),c=s("6bb5"),l=s("4e2b"),u=s("9ab4"),d=s("2b0e"),h=s("60a3"),p=s("8b99"),m=function(e){function t(){return Object(a["a"])(this,t),Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(i["a"])(t,[{key:"country",get:function(){return this.$store.state.auth.user.country}},{key:"message",get:function(){return this.$t('The final cost of virtual goods may vary depending on the selected payment method. For more information see <a class="link" href="%(legal_url)s" target="_blank">Legal documents</a> (or <a class="link" href="%(legal_platform_url)s" target="_blank">Platform Terms of Use</a> in case of Steel Division II and other games provided by third-party developers). %(merchant_address)s',{merchant_address:this.merchantAddress,legal_url:this.legalUrl,legal_platform_url:this.legalPlatformUrl})}},{key:"merchantAddress",get:function(){return"JP"===this.country?this.$t("Wargaming Japan Limited is an online merchant located at Premier Dogenzaka Bldg., 3 Floor, 1-18-3, Dogenzaka, Shibuya-ku, Tokyo 150-0043, Japan"):this.$t("Wargaming Group Limited is an online merchant located at 105, Agion Omologiton Avenue, Nicosia 1080, Cyprus")}},{key:"legalUrl",get:function(){return p["a"].get("URL_LEGAL_DOCUMENTS","#")}},{key:"legalPlatformUrl",get:function(){return p["a"].get("URL_LEGAL_PLATFORM_DOCUMENTS","#")}}]),t}(d["default"]);m=u["b"]([h["a"]],m);var b=m,f=b,g=s("2877"),y=Object(g["a"])(f,n,r,!1,null,null,null);t["a"]=y.exports},"91c8":function(e,t,s){var n=s("2b10"),r=s("9aff"),a=s("4b17"),i=Math.ceil,o=Math.max;function c(e,t,s){t=(s?r(e,t,s):void 0===t)?1:o(a(t),0);var c=null==e?0:e.length;if(!c||t<1)return[];var l=0,u=0,d=Array(i(c/t));while(l<c)d[u++]=n(e,l,l+=t);return d}e.exports=c},"91e5":function(e,t,s){"use strict";var n,r,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("OverlayDialog",e._g({ref:"dialog",attrs:{"popup-modifier":"popup__success","holder-modifier":"popup_holder__center-text"}},e.$listeners),[n("img",{attrs:{slot:"head",src:s("62c8"),alt:e.$t("Thank you")},slot:"head"}),n("div",[n("h2",{staticClass:"popup_heading"},[e._t("heading",[e._v(e._s(e.$t("Thank you")))])],2),n("p",{staticClass:"popup_text"},[e._t("default",[e._v("\n        "+e._s(e.$t('You have purchased Premium account subscription. To view and manage your subscriptions, go to "My subscriptions" section'))+"\n      ")])],2)]),n("template",{slot:"buttons"},[n("ShopButton",{staticClass:"button-dialog",attrs:{variant:"raised",size:"medium"},on:{click:e.close}},[e._v("\n      "+e._s(e.$t("Continue"))+"\n    ")])],1)],2)},i=[],o=s("d225"),c=s("b0b4"),l=s("308d"),u=s("6bb5"),d=s("4e2b"),h=s("2b0e"),p=s("60a3"),m=s("9d5f"),b=s("a323"),f=(n=Object(p["a"])({components:{OverlayDialog:m["a"],ShopButton:b["a"]}}),n(r=function(e){function t(){return Object(o["a"])(this,t),Object(l["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),Object(c["a"])(t,[{key:"close",value:function(){this.$refs.dialog.close()}}]),t}(h["default"]))||r),g=f,y=g,v=s("2877"),_=Object(v["a"])(y,a,i,!1,null,null,null),k=_.exports;t["a"]=k},"950f":function(e,t,s){},af35:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"price"},[e._t("label"),s("span",[e._v(e._s(e.price.amount)+" ")]),s("span",{class:e.price.code.toLowerCase(),attrs:{title:e.price.code},domProps:{innerHTML:e._s(e.$options.filters.currencySign(e.price.code))}}),e.period?s("span",{staticClass:"price_period"},[e._v(" / "+e._s(e.period))]):e._e()],2)},r=[],a={name:"SubscriptionPrice",props:{price:{type:Object,required:!0},period:{type:String,required:!1}}},i=a,o=(s("cc80"),s("2877")),c=Object(o["a"])(i,n,r,!1,null,"04803030",null);t["a"]=c.exports},b88a:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("TransitionGroup",{attrs:{appear:"",tag:"div"},on:{"before-enter":e.beforeItemEnter,enter:e.itemEnter}},[e._t("default")],2)},r=[],a=(s("c5f6"),s("04ff"),s("d225")),i=s("b0b4"),o=s("308d"),c=s("6bb5"),l=s("4e2b"),u=s("9ab4"),d=s("60a3"),h=100,p=function(e){function t(){return Object(a["a"])(this,t),Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(i["a"])(t,[{key:"beforeItemEnter",value:function(e){e.classList.add(this.itemEnterClass)}},{key:"itemEnter",value:function(e,t){var s=this,n=Number.parseInt(e.dataset.index)*this.delayMultiplier;setTimeout(function(){e.classList.remove(s.itemEnterClass),e.classList.add(s.itemEnterActiveClass),t()},n)}}]),t}(d["e"]);u["b"]([Object(d["d"])({type:String,required:!0})],p.prototype,"itemEnterClass",void 0),u["b"]([Object(d["d"])({type:String,required:!0})],p.prototype,"itemEnterActiveClass",void 0),u["b"]([Object(d["d"])({type:Number,default:h})],p.prototype,"delayMultiplier",void 0),p=u["b"]([d["a"]],p);var m=p,b=m,f=s("2877"),g=Object(f["a"])(b,n,r,!1,null,null,null);t["a"]=g.exports},cc80:function(e,t,s){"use strict";var n=s("0b98"),r=s.n(n);r.a},d9f1:function(e,t,s){"use strict";s.d(t,"b",function(){return i}),s.d(t,"a",function(){return o});s("5df3"),s("1c4c");var n=s("91c8"),r=s.n(n),a=3,i=function(e){if(e&&e.length){var t=document.createElement("div");t.innerHTML=e;var s=Array.from(t.querySelectorAll("li"));return s.map(function(e){return e.innerHTML})}},o=function(e){return 4===e.length?[e.slice(0,2),e.slice(2)]:e.length>=5?r()(e,Math.ceil(e.length/a)):[e]}},e429:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("PurchasePopup",e._g({ref:"popup",attrs:{"selected-game":e.selectedGame,"is-closable":!e.purchaseInProgress}},e.$listeners),[s("h1",{staticClass:"heading-1",attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.$t("Order Options")))]),e._m(0),s("UserAgreement",{attrs:{slot:"user-agreement",animate:e.userAgreementError},slot:"user-agreement",model:{value:e.userAgreementChecked,callback:function(t){e.userAgreementChecked=t},expression:"userAgreementChecked"}},[s("span",{domProps:{innerHTML:e._s(e.userAgreementText)}})]),s("IgpPaymentMethods",{attrs:{slot:"payment-methods","in-progress":e.purchaseInProgress,"linked-methods-tooltip":e.tooltipMessage},on:{"linked-selected":e.subscribeWithMethod,"non-linked-selected":e.redirectToBindig},slot:"payment-methods"}),e.purchaseError?s("p",{staticClass:"text-error",attrs:{slot:"purchase-error"},slot:"purchase-error"},[e._v("\n    "+e._s(e.$t("Не удалось оформить подписку. Попробуйте еще раз."))+"\n  ")]):e._e(),e.subscriptionExistError?s("p",{staticClass:"text-error",attrs:{slot:"purchase-error"},slot:"purchase-error"},[e._v("\n    "+e._s(e.$t("Такая подписка у вас уже оформлена."))+"\n  ")]):e._e(),[s("img",{staticClass:"purchase-popup_img",attrs:{src:e.subscription.metadata.detailImage&&e.subscription.metadata.detailImage.url,alt:e.subscription.metadata.title}}),s("div",{staticClass:"purchase-popup_holder"},[s("h2",{staticClass:"heading-2",domProps:{textContent:e._s(e.subscription.metadata.title)}}),s("SubscriptionPrice",{attrs:{price:e.subscription.price,period:e.schedulePeriod}})],1)],s("PackageContent",{attrs:{slot:"package-content",content:e.subscription.metadata.packageContent},slot:"package-content"}),s("AdyenThreeDsForm",{attrs:{"is-authorization":e.isAuthorization,"is-fingerprint":e.isFingerprint,"show-waiting-overlay":e.showThreeDsWaitingOverlay}})],2)},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"popup_recipient",attrs:{slot:"order-options"},slot:"order-options"},[e._v("\n    "+e._s(e.$t("For %(username)s",{username:e.username}))+"\n  ")])}],a=(s("6762"),s("2fdb"),s("7f7f"),s("96cf"),s("3b8d")),i=s("cebc"),o=s("2f62"),c=s("c909"),l=s.n(c),u=s("4668"),d=s("8b99"),h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Overlay",e._g(e._b({ref:"overlay",on:{open:e.onOpen,close:e.onClose}},"Overlay",e.$attrs,!1),e.$listeners),[s("Transition",{attrs:{name:"slide-up"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"purchase-popup js-overlay-top-content",class:e.gameBackgroundClass},[s("div",{staticClass:"purchase-popup_option"},[e._t("header",[s("h1",{staticClass:"heading-1"},[e._v(e._s(e.$t("Order Options")))])]),e._t("order-options",[s("div",{staticClass:"tab",attrs:{"data-bind":"visible: !item.isPremiumSms"}},[s("button",{staticClass:"tab_item",attrs:{"data-bind":"click: onPurchaseTabClick, css: { 'tab_item__active': isPurchaseTabVisible()}"}},[s("span",{staticClass:"tab_name"},[e._v(e._s(e.$t("For me"))+" "+e._s(e.username))])])])]),e._t("coupons"),e._t("gift-info"),e._t("user-agreement"),e._t("payment-methods"),e._t("purchase-error"),e._t("company-notation",[s("div",{staticClass:"form-row"},[s("CompanyNotation",{staticClass:"note"})],1)])],2),s("div",{staticClass:"purchase-popup_content"},[e._t("default"),e._t("package-content")],2)])])],1)},p=[],m=s("d225"),b=s("b0b4"),f=s("308d"),g=s("6bb5"),y=s("4e2b"),v=s("9ab4"),_=s("2b0e"),k=s("60a3"),O=s("f3d5"),C=s("863f"),P=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.content?s("div",[s("hr",{staticClass:"divider"}),e.firstColumn&&e.firstColumn.length?s("ul",{staticClass:"package-list package-list__heading package-list__full"},e._l(e.firstColumn,function(t,n){return s("li",{key:n,staticClass:"package-list_item",domProps:{innerHTML:e._s(t)}})}),0):e._e(),e.secondColumn&&e.secondColumn.length?s("div",{staticClass:"animated-block-fix"},[s("TransitionExpand",[s("div",{directives:[{name:"show",rawName:"v-show",value:e.showAll,expression:"showAll"}],staticClass:"animated-block"},[s("ul",{staticClass:"package-list package-list__heading package-list__full"},e._l(e.secondColumn,function(t,n){return s("li",{key:n,staticClass:"package-list_item",domProps:{innerHTML:e._s(t)}})}),0)])]),e.showAll?e._e():s("a",{staticClass:"anchor",on:{click:function(t){e.showAll=!0}}},[e._v(e._s(e.$t("Show all")))])],1):e._e()]):e._e()},j=[],w=s("6ccf"),$=s("d9f1"),M=5,S=function(e){function t(){var e;return Object(m["a"])(this,t),e=Object(f["a"])(this,Object(g["a"])(t).apply(this,arguments)),e.showAll=!1,e}return Object(y["a"])(t,e),Object(b["a"])(t,[{key:"contentItems",get:function(){return Object($["b"])(this.content)}},{key:"firstColumn",get:function(){return this.contentItems?this.contentItems.slice(0,M):null}},{key:"secondColumn",get:function(){return this.contentItems?this.contentItems.slice(M):null}}]),t}(_["default"]);v["b"]([Object(k["d"])({type:String,default:""})],S.prototype,"content",void 0),S=v["b"]([Object(k["a"])({components:{TransitionExpand:w["a"]}})],S);var x=S,E=x,A=(s("71c7"),s("2877")),T=Object(A["a"])(E,P,j,!1,null,"4302957c",null),I=T.exports,L=function(e){function t(){var e;return Object(m["a"])(this,t),e=Object(f["a"])(this,Object(g["a"])(t).apply(this,arguments)),e.show=!1,e}return Object(y["a"])(t,e),Object(b["a"])(t,[{key:"open",value:function(){this.$refs.overlay.open()}},{key:"close",value:function(){this.$refs.overlay.close()}},{key:"onOpen",value:function(){this.show=!0,this.$parent.$emit("open")}},{key:"onClose",value:function(){this.show=!1,this.$parent.$emit("close")}},{key:"gameBackgroundClass",get:function(){return this.selectedGame?"game-".concat(this.selectedGame):""}},{key:"username",get:function(){return this.$store.state.auth.username||d["a"].get("USERNAME")||""}}]),t}(_["default"]);v["b"]([Object(k["d"])(String)],L.prototype,"selectedGame",void 0),L=v["b"]([Object(k["a"])({components:{CompanyNotation:C["a"],Overlay:O["a"],PackageContent:I},inheritAttrs:!1})],L);var D=L,U=D,B=(s("80ee"),Object(A["a"])(U,h,p,!1,null,"bebba128",null)),N=B.exports,G=N,F=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"form-checkbox form-checkbox__agreement",class:{"form-checkbox__animate":e.animate},attrs:{title:"",for:"id_user_agreement"}},[s("input",{staticClass:"form-checkbox_hidden",attrs:{id:"id_user_agreement",type:"checkbox"},domProps:{checked:e.checked},on:{change:function(t){return e.$emit("change",t.target.checked)}}}),s("span",{staticClass:"form-checkbox_flag"}),s("span",{staticClass:"form-checkbox_label"},[e._t("default",[e._v("\n      "+e._s(e.$t("I hereby agree to immediate delivery of a purchased order. I will lose my right to withdraw this order since such delivery process has started except for order to purchase premium accounts."))+"\n    ")])],2),s("div",{staticClass:"tooltip hidden"},[e._v("\n    "+e._s(e.$t("You cannot purchase without accepting the payment agreement"))+"\n  ")])])},z=[],R=function(e){function t(){return Object(m["a"])(this,t),Object(f["a"])(this,Object(g["a"])(t).apply(this,arguments))}return Object(y["a"])(t,e),t}(_["default"]);v["b"]([Object(k["c"])("change",{type:Boolean})],R.prototype,"checked",void 0),v["b"]([Object(k["d"])(Boolean)],R.prototype,"animate",void 0),R=v["b"]([k["a"]],R);var W=R,H=W,q=Object(A["a"])(H,F,z,!1,null,null,null),J=q.exports,V=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.paymentMethodsError?e.paymentMethodsError?s("p",{staticClass:"text-error"},[e._v("\n  "+e._s(e.$t("В данный момент оплата невозможна по техническим причинам"))+"\n")]):e._e():s("div",{staticClass:"form-row"},[e.isPaymentMethodsLoaded?e._e():s("div",{staticClass:"waiting-block"},[s("Spinner")],1),e.isPaymentMethodsLoaded&&e.hasLinkedPaymentMethods?[s("label",{staticClass:"form-label"},[e._v("\n      "+e._s(e.$t("Pay:"))+"\n    ")]),s("div",{staticClass:"form-row_purchase"},e._l(e.linkedPaymentMethods,function(t){return s("IgpPaymentMethodButton",{key:t.name,attrs:{method:t,waiting:e.inProgress&&e.selectedMethod===t.name,disabled:e.disabled||e.inProgress&&e.selectedMethod!==t.name,tooltip:e.linkedMethodsTooltip},on:{click:function(s){return e.onLinkedMethodSelect(t)}}})}),1)]:e._e(),e.isPaymentMethodsLoaded?[e.hasLinkedPaymentMethods?e._e():s("label",{staticClass:"form-label"},[e._v("\n      "+e._s(e.$t("Select a payment method:"))+"\n    ")]),e.hasLinkedPaymentMethods?s("label",{staticClass:"form-label"},[e._v("\n      "+e._s(e.$t("Other payment methods:"))+"\n    ")]):e._e(),s("div",{staticClass:"form-row_purchase"},e._l(e.nonLinkedPaymentMethods,function(t){return s("IgpPaymentMethodButton",{key:t.name,attrs:{method:t,disabled:e.disabled||e.inProgress,tooltip:e.nonLinkedMethodsTooltip},on:{click:function(s){return e.onUnlinkedMethodSelect(t)}}})}),1)]:e._e()],2)},Y=[],Q=s("4bb5"),X=s("4c0b"),K=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("button",{directives:[{name:"tooltip",rawName:"v-tooltip.left-start",value:e.tooltip,expression:"tooltip",modifiers:{"left-start":!0}}],staticClass:"purchase-button",class:e.cssClasses,attrs:{disabled:e.disabled},on:{click:e.onClick}},[e.waiting?s("Spinner",{attrs:{variant:"dark"}}):e._e(),s("span",{staticClass:"purchase-button_container"},[s("IgpPaymentMethodImageHolder",{staticClass:"purchase-button_img qa_payment_method_button_img",attrs:{"method-name":e.method.name}})],1)],1)},Z=[],ee=s("39b3c"),te=function(e){function t(){return Object(m["a"])(this,t),Object(f["a"])(this,Object(g["a"])(t).apply(this,arguments))}return Object(y["a"])(t,e),Object(b["a"])(t,[{key:"onClick",value:function(e){this.waiting||this.disabled||this.$emit("click",e)}},{key:"cssClasses",get:function(){return{"purchase-button__disabled":this.disabled,"purchase-button__wait":this.waiting}}}]),t}(k["e"]);v["b"]([Object(k["d"])(Object)],te.prototype,"method",void 0),v["b"]([Object(k["d"])(Boolean)],te.prototype,"disabled",void 0),v["b"]([Object(k["d"])(Boolean)],te.prototype,"waiting",void 0),v["b"]([Object(k["d"])({type:String,default:""})],te.prototype,"tooltip",void 0),te=v["b"]([Object(k["a"])({components:{IgpPaymentMethodImageHolder:ee["a"],Spinner:X["a"]}})],te);var se=te,ne=se,re=(s("12e4"),Object(A["a"])(ne,K,Z,!1,null,"677eb654",null)),ae=re.exports,ie=Object(Q["b"])("payments/bindings"),oe=function(e){function t(){var e;return Object(m["a"])(this,t),e=Object(f["a"])(this,Object(g["a"])(t).apply(this,arguments)),e.selectedMethod=null,e}return Object(y["a"])(t,e),Object(b["a"])(t,[{key:"resetSelectedMethod",value:function(){this.inProgress||(this.selectedMethod=null)}},{key:"created",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.fetchIgpPaymentMethods();case 2:this.$emit("methods-loaded"),this.$emit("methods-error");case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"markSelected",value:function(e){this.selectedMethod=e.name}},{key:"onLinkedMethodSelect",value:function(e){this.markSelected(e),this.$emit("linked-selected",e)}},{key:"onUnlinkedMethodSelect",value:function(e){this.markSelected(e),this.$emit("non-linked-selected",e)}},{key:"hasLinkedPaymentMethods",get:function(){return this.linkedPaymentMethods.length>0}}]),t}(k["e"]);v["b"]([Object(k["d"])(Boolean)],oe.prototype,"inProgress",void 0),v["b"]([Object(k["d"])({type:Boolean,default:!1})],oe.prototype,"disabled",void 0),v["b"]([Object(k["d"])({type:[String,Boolean],default:""})],oe.prototype,"linkedMethodsTooltip",void 0),v["b"]([Object(k["d"])({type:[String,Boolean],default:""})],oe.prototype,"nonLinkedMethodsTooltip",void 0),v["b"]([ie.Action],oe.prototype,"fetchIgpPaymentMethods",void 0),v["b"]([ie.Getter],oe.prototype,"linkedPaymentMethods",void 0),v["b"]([ie.Getter],oe.prototype,"nonLinkedPaymentMethods",void 0),v["b"]([ie.State("igpMethodsError")],oe.prototype,"paymentMethodsError",void 0),v["b"]([ie.State("igpMethodsLoaded")],oe.prototype,"isPaymentMethodsLoaded",void 0),v["b"]([Object(k["f"])("inProgress")],oe.prototype,"resetSelectedMethod",null),oe=v["b"]([Object(k["a"])({components:{IgpPaymentMethodButton:ae,Spinner:X["a"]}})],oe);var ce=oe,le=ce,ue=Object(A["a"])(le,V,Y,!1,null,"58d1cf1a",null),de=ue.exports,he=s("ccb9"),pe=s("0359"),me=s("22ca"),be=s("af35"),fe="tapi:subscriptions:common.v1.validation-error",ge=s("60aa"),ye={name:"SubscriptionPurchasePopup",components:{IgpPaymentMethods:de,PackageContent:I,PurchasePopup:G,UserAgreement:J,SubscriptionPrice:be["a"],AdyenThreeDsForm:me["a"]},mixins:[ge["a"]],props:{subscription:{type:Object,required:!0},selectedGame:String},data:function(){return{userAgreementChecked:!1,userAgreementError:!1,purchaseInProgress:!1,purchaseError:!1,subscriptionExistError:!1,isFingerprint:!1,isAuthorization:!1,showThreeDsWaitingOverlay:!1}},computed:Object(i["a"])({},Object(o["e"])("payments/bindings",{paymentMethodsError:function(e){return e.igpMethodsError}}),{username:function(){var e=d["a"].get("USERNAME");return this.$store.state.auth.user.username||e||"me"},userAgreementText:function(){var e="".concat(Object(u["c"])(this.$store.state.ui.language),"/subscription-rules/");return this.$t("I agree that the %(subscription_name)s subscription will be automatically renewed every %(schedule_period)s by debiting the payment method linked to my account. I have read, understand, and accept the %(link_start)sSubscription Rules%(link_stop)s in their entirety.",{subscription_name:this.subscription.metadata.title,schedule_period:this.schedulePeriod,link_start:'<a class="link" href="'.concat(e,'" target="_blank">'),link_stop:"</a>"})},tooltipMessage:function(){return this.userAgreementChecked?"":this.$t("You cannot purchase without accepting the payment agreement")}}),watch:{userAgreementError:function(e){var t=this;e&&setTimeout(function(){t.userAgreementError=!1},250)},userAgreementChecked:function(e){this.$analytics.paymentAreementCheckboxInteraction(e)},paymentMethodsError:function(e){e&&this.$analytics.subscriptionError(["Payment unavailable"],this.selectedGame,this.sourceSchedulePeriod,this.subscription.titleSlugs)}},methods:Object(i["a"])({},Object(o["b"])("subscriptions",["subscribe"]),{subscribeWithMethod:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var s,n,r,a,i,o,c,l,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(s=!1,this.$analytics.linkSubscriptionPaymentMethod(t.name,this.selectedGame,s,this.sourceSchedulePeriod,this.subscription.titleSlugs),this.userAgreementChecked){e.next=5;break}return this.userAgreementError=!0,e.abrupt("return",!1);case 5:return n=this.subscription.productCode,Logger.debug("Purchasing subscription ".concat(n," with method ").concat(t.name,"...")),this.purchaseInProgress=!0,r=he["b"].getBrowserInfo(),e.prev=9,e.next=12,this.subscribe({productCode:n,paymentMethod:t.name,browserInfo:r});case 12:if(a=e.sent,i=a.meta,o=i||{},c=o.threeDs,!c){e.next=23;break}return e.next=18,pe["a"].getRedirectUrl(c.transactionId);case 18:l=e.sent,u=l.redirectUrl,new he["c"]({transactionId:c.transactionId,redirectUrl:u,onThreeDsStepChange:this.handleThreeDsStateChange.bind(this,t)}).processThreeDS(c),e.next=24;break;case 23:this.onPurchaseSuccess(t);case 24:e.next=30;break;case 26:e.prev=26,e.t0=e["catch"](9),Logger.error(e.t0),this.onPurchaseError(e.t0);case 30:case"end":return e.stop()}},e,this,[[9,26]])}));function t(t){return e.apply(this,arguments)}return t}(),handleThreeDsStateChange:function(e,t,s){switch(t){case he["a"].challengeStart:this.isFingerprint=!1,this.showThreeDsWaitingOverlay=!1,this.isAuthorization=!0,document.body.classList.add("overlay-open");break;case he["a"].challengeWaiting:this.showThreeDsWaitingOverlay=!0;break;case he["a"].fingerPrintStart:this.isFingerprint=!0;break;case he["a"].confirm:this.onPurchaseSuccess(e);break;case he["a"].error:this.onPurchaseError(s);break}},onPurchaseSuccess:function(e){this.cancelThreeDsAuthorization(),Logger.debug("Purchase subscription success!"),this.$refs.popup&&this.$refs.popup.close(),this.$emit("success")},onPurchaseError:function(e){this.cancelThreeDsAuthorization();var t=[fe],s=Object(u["d"])(["Unable to create subscription"],e,t);this.$analytics.subscriptionError(s,this.selectedGame,this.sourceSchedulePeriod,this.subscription.titleSlugs),s.includes("Subscription for product already exists")?this.subscriptionExistError=!0:this.purchaseError=!0,this.$emit("failure")},cancelThreeDsAuthorization:function(){this.purchaseInProgress=!1,this.isAuthorization=!1,document.body.classList.remove("overlay-open")},redirectToBindig:function(e){var t=!1;this.$analytics.linkSubscriptionPaymentMethod(e.name,this.selectedGame,t,this.sourceSchedulePeriod,this.subscription.titleSlugs);var s=window.location.href,n=new l.a(e.linkUrl);n.addQuery({next:s}),window.location=n}})},ve=ye,_e=(s("e8d4"),Object(A["a"])(ve,n,r,!1,null,"59bb0b65",null));t["a"]=_e.exports},e8d4:function(e,t,s){"use strict";var n=s("ec3b"),r=s.n(n);r.a},ec3b:function(e,t,s){},f1ae:function(e,t,s){"use strict";var n=s("86cc"),r=s("4630");e.exports=function(e,t,s){t in e?n.f(e,t,r(0,s)):e[t]=s}},f6e1:function(e,t,s){}}]);
//# sourceMappingURL=products~subscriptions.31cc4d6b.js.map