
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"145",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"authenticated"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"cm.internal.spa_id"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",1],
      "vtp_map":["list",["map","key","1","value",["macro",2]],["map","key","0","value","undefined"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var g=[{name:\"EMAIL\",regex:\/[a-zA-Z0-9.!#$%\u0026'*\/=?^_{|}~-]+(@|%40)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\/g}],f=7;a.set(\"dimension\"+f,a.get(\"clientId\"));f=\"_\"+a.get(\"trackingId\")+\"_sendHitTask\";var h=window[f]=window[f]||a.get(\"sendHitTask\"),b,c,d,e;a.set(\"sendHitTask\",function(a){c=a.get(\"hitPayload\").split(\"\\x26\");for(b=0;b\u003Cc.length;b++){d=c[b].split(\"\\x3d\");try{e=decodeURIComponent(decodeURIComponent(d[1]))}catch(k){e=\ndecodeURIComponent(d[1])}g.forEach(function(a){e=e.replace(a.regex,\"[HIDDEN \"+a.name+\"]\")});d[1]=encodeURIComponent(e);c[b]=d.join(\"\\x3d\")}a.set(\"hitPayload\",c.join(\"\\x26\"),!0);h(a)})}})();"]
    },{
      "function":"__v",
      "vtp_name":"testVersion",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"visitorType",
      "vtp_dataLayerVersion":2
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"wgnp_language"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"link_place",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return sessionStorage.getItem(\"Promo\")})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",11],8,16],".split(\"-\");return a[1]})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",10],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*(pagan\\-online\\.com).*","value",["macro",12]]]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_geo",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_project",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",11],8,16],",b={},c=document.createElement(\"a\");c.href=a;a=c.search.substring(1);a=a.split(\"\\x26\");for(c=0;c\u003Ca.length;c++){var d=a[c].split(\"\\x3d\");b[d[0]]=decodeURIComponent(d[1])}b=b.ClientId;void 0==b\u0026\u0026(b=\"none\");return b})();"]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_autoLinkDomains":"tankist.by",
      "vtp_cookieDomain":"auto",
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookiePath","value","\/shop\/"],["map","fieldName","anonymizeIp","value","true"],["map","fieldName","allowLinker","value","true"],["map","fieldName","userId","value",["macro",3]],["map","fieldName","customTask","value",["macro",4]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",5]],["map","index","3","dimension",["macro",6]],["map","index","1","dimension",["macro",7]],["map","index","6","dimension",["macro",8]],["map","index","12","dimension",["macro",9]],["map","index","5","dimension",["macro",2]],["map","index","13","dimension",["macro",13]],["map","index","11","dimension",["macro",10]],["map","index","14","dimension",["macro",14]],["map","index","15","dimension",["macro",15]],["map","index","16","dimension",["macro",16]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-8323632-73",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(new Date).getTime()+\".\"+Math.random().toString(36).substring(5)})();"]
    },{
      "function":"__r"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"eventinteraction",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"eventValue",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"eventCategory",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"eventAction",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"eventLabel",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.parentElement.className"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.dataset.bind"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",34],8,16],".split(\"?\")[0]})();"]
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm-ee-event-category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm-ee-event-action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm-ee-event-non-interaction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"spa_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cds_consumer"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cds_place"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cds_locale"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cds_spaID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cds_contentID"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__c",
      "vtp_value":"GTM-KQWDR4F"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f"
    },{
      "function":"__aev",
      "vtp_varType":"URL"
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__v",
      "vtp_name":"loyalty",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"targetGroup",
      "vtp_dataLayerVersion":2
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"alt"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"src"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=!1;if(window.XMLHttpRequest)try{a=new XMLHttpRequest}catch(b){a=!1}else if(window.ActiveXObject)try{a=new ActiveXObject(\"Microsoft.XMLHTTP\")}catch(b){a=!1}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",63],8,16],";try{a.open(\"GET\",\"",["escape",["macro",11],7],"\",!1),a.send(\"\")}catch(b){success=!1,error_msg=\"Error: \"+b}return a.status})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",51],8,16],",a=b.match(\".*\/shop\/wot\/main\/.*\");a?(a=b.split(\"?\"),a=a[0]):a=b;return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cds_isAuth"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cds_selector"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",35],
      "vtp_map":["list",["map","key","coupon_description","value","Click on coupon card"],["map","key","button_text","value","Click on coupon button"]]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__ctv"
    },{
      "function":"__dbg"
    },{
      "function":"__r"
    },{
      "function":"__cid"
    },{
      "function":"__hid"
    },{
      "function":"__v",
      "vtp_name":"gtm.videoProvider",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoDuration",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoVisible",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoCurrentTime",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleRatio",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleTime",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "metadata":["map"],
      "setup_tags":["list",["tag",108,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",17],
      "vtp_dimension":["list",["map","index","17","dimension",["macro",18]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__flc",
      "vtp_ordinalType":"STANDARD",
      "vtp_advertiserId":"4354118",
      "vtp_groupTag":"invmedia",
      "vtp_activityTag":"87wyafjy",
      "vtp_useImageTag":false,
      "vtp_customVariable":["list"],
      "vtp_userVariable":"",
      "vtp_transactionVariable":"",
      "vtp_ordinalStandard":["macro",19],
      "vtp_url":["macro",20],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":12
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Advertising",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",17],
      "vtp_eventAction":"Redirect PM click",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":17
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",17],
      "vtp_eventAction":"Top button click",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":20
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",17],
      "vtp_eventAction":"Back button click",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":21
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",24],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",25],
      "vtp_eventCategory":["macro",26],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",17],
      "vtp_eventAction":["macro",27],
      "vtp_eventLabel":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":23
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template","Video - ",["macro",29]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",17],
      "vtp_eventAction":["template",["macro",30]," - ",["macro",31]],
      "vtp_eventLabel":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":32
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Homepage Banner",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",17],
      "vtp_eventAction":"Banner listing",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":34
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",17],
      "vtp_eventAction":"Purchase overlay",
      "vtp_eventLabel":"Buy as a gift",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":36
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",17],
      "vtp_eventAction":"Purchase overlay",
      "vtp_eventLabel":"More payment methods",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":37
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Product Picture",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",17],
      "vtp_eventAction":"Picture click on page",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":39
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Product Picture",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",17],
      "vtp_eventAction":"Product pictures listing",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":40
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Outbound links",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",17],
      "vtp_eventAction":["macro",37],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":41
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":42
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":43
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Menu",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",17],
      "vtp_eventAction":"Shop menu",
      "vtp_eventLabel":["macro",38],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":45
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Homepage Banner",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",17],
      "vtp_eventAction":"Banner clicks",
      "vtp_eventLabel":["macro",34],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":48
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":54
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":56
    },{
      "function":"__paused",
      "vtp_originalTagType":"awct",
      "tag_id":64
    },{
      "function":"__paused",
      "vtp_originalTagType":"awct",
      "tag_id":66
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",41],
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",39],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",17],
      "vtp_eventAction":["macro",40],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":70
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"CDS Banner",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",17],
      "vtp_eventAction":"Banner Click",
      "vtp_eventLabel":"FIFA Promo",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":96
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"CDS Banner",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",17],
      "vtp_eventAction":"Confirm Click",
      "vtp_eventLabel":"FIFA Promo",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":97
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"CDS Banner",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",17],
      "vtp_eventAction":"Banner Shown",
      "vtp_eventLabel":"FIFA Promo",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":98
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Purchase",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",17],
      "vtp_eventAction":"TY page shown",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":99
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","\u0026uid","value",["macro",43]]],
      "vtp_eventCategory":"WGCM_data",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",17],
      "vtp_eventAction":"Data of user",
      "vtp_dimension":["list",["map","index","5","dimension",["macro",43]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":100
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value","\/shop\/waiting_page\/payment\/checkout-from-basket\/"],["map","fieldName","title","value","Checkout From Basket"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",17],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":102
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_sendPageView":true,
      "vtp_measurementId":"G-X9MTRN5LNY",
      "vtp_enableUserProperties":true,
      "tag_id":115
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":116
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value","\/open overlay"],["map","fieldName","title","value","\/Open overlay"],["map","fieldName","cookieDomain","value","auto"],["map","fieldName","customTask","value",["macro",4]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",17],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":117
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",26],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",17],
      "vtp_eventAction":["macro",27],
      "vtp_eventLabel":["template","v1|",["macro",44],"|",["macro",45],"|",["macro",46],"|",["macro",47],"|",["macro",48]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":118
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",41],
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",39],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",17],
      "vtp_eventAction":["macro",40],
      "vtp_eventLabel":["macro",34],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":234
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Coupons",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",17],
      "vtp_eventAction":"Click on coupon",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":239
    },{
      "function":"__cl",
      "tag_id":240
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"232066_16",
      "tag_id":241
    },{
      "function":"__cl",
      "tag_id":242
    },{
      "function":"__cl",
      "tag_id":243
    },{
      "function":"__cl",
      "tag_id":244
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"10, 25, 50, 75, 100",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":true,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"232066_42",
      "vtp_enableTriggerStartOption":true,
      "tag_id":245
    },{
      "function":"__cl",
      "tag_id":246
    },{
      "function":"__cl",
      "tag_id":247
    },{
      "function":"__cl",
      "tag_id":248
    },{
      "function":"__cl",
      "tag_id":249
    },{
      "function":"__cl",
      "tag_id":250
    },{
      "function":"__cl",
      "tag_id":251
    },{
      "function":"__cl",
      "tag_id":252
    },{
      "function":"__cl",
      "tag_id":253
    },{
      "function":"__cl",
      "tag_id":254
    },{
      "function":"__cl",
      "tag_id":255
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"232066_55",
      "tag_id":256
    },{
      "function":"__cl",
      "tag_id":257
    },{
      "function":"__cl",
      "tag_id":258
    },{
      "function":"__cl",
      "tag_id":259
    },{
      "function":"__cl",
      "tag_id":260
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"232066_60",
      "tag_id":261
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"232066_61",
      "tag_id":262
    },{
      "function":"__cl",
      "tag_id":263
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"232066_63",
      "tag_id":264
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"232066_64",
      "tag_id":265
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"232066_65",
      "tag_id":266
    },{
      "function":"__cl",
      "tag_id":267
    },{
      "function":"__cl",
      "tag_id":268
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"232066_74",
      "tag_id":269
    },{
      "function":"__cl",
      "tag_id":270
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"232066_80",
      "tag_id":271
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"232066_141",
      "tag_id":272
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"232066_142",
      "tag_id":273
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":".js-wgcds-event-show",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"10",
      "vtp_uniqueTriggerId":"232066_143",
      "tag_id":274
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":".popup__success",
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"5",
      "vtp_uniqueTriggerId":"232066_150",
      "tag_id":275
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"30,50,80,100",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"232066_209",
      "vtp_enableTriggerStartOption":true,
      "tag_id":276
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"232066_210",
      "tag_id":277
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":".js-wgcds-ga-track",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_onScreenDuration":"5000",
      "vtp_uniqueTriggerId":"232066_216",
      "tag_id":278
    },{
      "function":"__cl",
      "tag_id":279
    },{
      "function":"__cl",
      "tag_id":280
    },{
      "function":"__cl",
      "tag_id":281
    },{
      "function":"__cl",
      "tag_id":282
    },{
      "function":"__cl",
      "tag_id":283
    },{
      "function":"__html",
      "metadata":["map"],
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d){a[b]=a[b]||function(){(a[b].a=a[b].a||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"https:\/\/mc.yandex.ru\/metrika\/tag.js\",\"ym\");ym(22360549,\"init\",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,ecommerce:\"dataLayer\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cdiv\u003E\u003Cimg src=\"https:\/\/mc.yandex.ru\/watch\/22360549\" style=\"position:absolute; left:-9999px;\" alt=\"\"\u003E\u003C\/div\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":3
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"179385745825242\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=179385745825242\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":24
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"179385745825242\");fbq(\"track\",\"MakePurchase\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=179385745825242\u0026amp;ev=MakePurchase\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":25
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"179385745825242\");fbq(\"track\",\"AddToCart\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=179385745825242\u0026amp;ev=AddToCart\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":26
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EyaCounter22360549.reachGoal(\"Navigation from banner\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":50
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EyaCounter22360549.reachGoal(\"Click buy as a gift\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":51
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EyaCounter22360549.reachGoal(\"Product pictures listing\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":52
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EyaCounter22360549.reachGoal(\"Video\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":53
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EyaCounter22360549.reachGoal(\"Outbound links\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":55
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EyaCounter22360549.reachGoal(\"Menu icon click\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":58
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EyaCounter22360549.reachGoal(\"More payment methods\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":59
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EyaCounter22360549.reachGoal(\"Product Picture\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":60
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EyaCounter22360549.reachGoal(\"Top button click\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":61
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EyaCounter22360549.reachGoal(\"Homepage Banner listing\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":62
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EyaCounter22360549.reachGoal(\"Homepage Banner clicks\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":63
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EsessionStorage.setItem(\"Promo\",\"WGFest\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":101
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1718251885070520\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1718251885070520\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":103
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1718251885070520\");fbq(\"track\",\"buyProductClick\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1718251885070520\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":104
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1718251885070520\");fbq(\"track\",\"proceedToPayment\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1718251885070520\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":105
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1718251885070520\");fbq(\"track\",\"addProductToBasket\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1718251885070520\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":106
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar _tmr=window._tmr||(window._tmr=[]);_tmr.push({id:\"3084594\",type:\"pageView\",start:(new Date).getTime(),pid:\"USER_ID\"});(function(c,d,a){if(!c.getElementById(a)){var b=c.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.id=a;b.src=\"https:\/\/top-fwz1.mail.ru\/js\/code.js\";a=function(){var a=c.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)};\"[object Opera]\"==d.opera?c.addEventListener(\"DOMContentLoaded\",a,!1):a()}})(document,window,\"topmailru-code\");\u003C\/script\u003E\u003Cnoscript\u003E\u003Cdiv\u003E\n\u003Cimg src=\"https:\/\/top-fwz1.mail.ru\/counter?id=3084594;js=na\" style=\"border:0;position:absolute;left:-9999px;\" alt=\"Top.Mail.Ru\"\u003E\n\u003C\/div\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":107
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(b,d,c){var a=\"\";c\u0026\u0026(a=new Date,a.setTime(a.getTime()+864E5*c),a=\"; expires\\x3d\"+a.toUTCString());document.cookie=b+\"\\x3d\"+(d||\"\")+a+\"; path\\x3d\/\"}function getCookie(b){b+=\"\\x3d\";for(var d=document.cookie.split(\";\"),c=0;c\u003Cd.length;c++){for(var a=d[c];\" \"==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(b))return a.substring(b.length,a.length)}return null}function checkIfCookieExist(b,d,c){return null==getCookie(b)?setCookie(b,d,c):!1}\ncheckIfCookieExist(\"PREMSHOP-WG-RU\",\"clickBuyAndLeaveToLogin\",100);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":109
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"722630277830558\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=722630277830558\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":110
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"LoggedInUser\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":111
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/vk.com\/js\/api\/openapi.js?160\";a.onload=function(){VK.Retargeting.Init(\"VK-RTRG-348485-4AodB\");VK.Retargeting.Hit()};document.head.appendChild(a)}();\u003C\/script\u003E\u003Cnoscript\u003E\u003Cimg src=\"https:\/\/vk.com\/rtrg?p=VK-RTRG-348485-4AodB\" style=\"position:fixed; left:-999px;\" alt=\"\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":112
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"848015598910011\");fbq(\"track\",\"Purchase\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=848015598910011\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":113
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"848015598910011\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=848015598910011\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":114
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=new Event(\"ga_cds_gtm_ready\");document.dispatchEvent(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":119
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=new Event(\"ga_cds_content_view\");",["escape",["macro",52],8,16],".dispatchEvent(a)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":120
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EyaCounter22360549.reachGoal(\"thankyou\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":232
    },{
      "function":"__opt",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":["macro",53],
      "vtp_gaSettings":["macro",17],
      "tag_id":69
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"ga-payment-group-6|ga-payment-group-7|ga-payment-group-12|ga-payment-group-14"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"button-to__top"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"button-to__back"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"(^$|((^|,)232066_16($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"GAevent"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"GAevent_CDS"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"(^$|((^|,)232066_42($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"owl-dot"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":".*wargaming.net\/shop\/$|.*wargaming.net\/shop\/\\?.*"
    },{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"wargaming.net"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"owl-next"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"owl-prev"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"slider_image"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"slider_item"
    },{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"static-pss"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"(^$|((^|,)232066_64($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"(^$|((^|,)232066_65($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"tab_name tab_name__gift"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"button-idle button-idle__indent"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"form-row_purchase js-purchase-methods js-grid"
    },{
      "function":"_cn",
      "arg0":["macro",36],
      "arg1":"click: onShowMoreMethodsClick"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"media_link"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"media_item"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"mediapopup_item mediapopup_item__img js-picture-image"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"overlay_control overlay_control__right js-overlay_control-next wgslider-webkit-acceleration"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"overlay_control js-overlay_control-prev wgslider-webkit-acceleration"
    },{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"\/shop\/"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"^$"
    },{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"#"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"(^$|((^|,)232066_55($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"\/auth\/oid\/"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"(^$|((^|,)232066_210($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"benefits_text"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"benefits_image"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"benefits_single-line"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"benefits_image benefits_image__small"
    },{
      "function":"_cn",
      "arg0":["macro",35],
      "arg1":"menu_link"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"(^$|((^|,)232066_61($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"game-menu_right"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"(^$|((^|,)232066_74($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",35],
      "arg1":"purchase-button js-purchase-method"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"(^$|((^|,)232066_80($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"cps_mail="
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm-ee-event"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"Ecommerce"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"Promotion Clicks"
    },{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"cds.wargaming.net\/content\/"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"football=true"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"(^$|((^|,)232066_141($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",42],
      "arg1":"Confirm"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"(^$|((^|,)232066_142($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"(^$|((^|,)232066_143($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"(^$|((^|,)232066_150($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"WGCM_userdata_event"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"Purchase"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"Shopping cart"
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"GAevent"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"(^$|((^|,)232066_209($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"Purchase"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"Purchase overlay"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"button_text"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"coupon_button button-idle"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"coupon_description"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"coupon coupons-list-enter-active v-enter-to"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"coupons-list"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"timer_days"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"timer coupon_timer"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"coupon_footer"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"coupon coupons-list-enter-active v-enter-to"
    },{
      "function":"_re",
      "arg0":["macro",49],
      "arg1":"\\\/shop\\\/\\w+\\\/\\w+\\\/\\d+\\\/$"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.load"
    },{
      "function":"_cn",
      "arg0":["macro",50],
      "arg1":"success"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"payment-button_text"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"payment-button_edit"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":".*wgfest.*|.*\\\/(specials|main)\\\/(7238|7241|7277|7280|7281|7284|7289|7292|7321|7322|7333|7334|7335|7336|7337|7338|7901)\\\/.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"Purchase button click"
    },{
      "function":"_eq",
      "arg0":["macro",51],
      "arg1":"\/shop\/waiting_page\/payment\/"
    },{
      "function":"_eq",
      "arg0":["macro",39],
      "arg1":"Ecommerce"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"Adding a Product to a Shopping Cart"
    },{
      "function":"_cn",
      "arg0":["macro",51],
      "arg1":"\/shop\/waiting_page\/login\/"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"\/shop\/wot\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"1"
    },{
      "function":"_cn",
      "arg0":["macro",51],
      "arg1":"\/shop\/wot\/"
    },{
      "function":"_eq",
      "arg0":["macro",50],
      "arg1":"success"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"\/shop\/"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"(^$|((^|,)232066_216($|,)))"
    }],
  "rules":[
    [["if",0],["add",0,1,78,28,79,94,98,102,105,34,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,71,72,73,74,75,76,77]],
    [["if",1,2],["add",2]],
    [["if",2,3],["add",3,90]],
    [["if",4,5,6],["add",4]],
    [["if",7,8],["add",5]],
    [["if",10,11],["add",6,85]],
    [["if",2,12,13],["unless",14],["add",7,91],["block",16,92]],
    [["if",2,13,15],["unless",14],["add",7,91],["block",16,92]],
    [["if",2,13,16],["unless",14],["add",7,91],["block",16,92]],
    [["if",2,13,17],["unless",14],["add",7,91],["block",16,92]],
    [["if",2,13,18],["unless",14],["add",7,91],["block",16,92]],
    [["if",2,22],["add",8,83]],
    [["if",2,23,24,25],["add",9,88]],
    [["if",2,26,27],["add",10,89]],
    [["if",2,28],["add",11,84]],
    [["if",2,29],["add",11,84]],
    [["if",2,30],["add",11,84]],
    [["if",5,34],["unless",31,32,33],["add",12,86]],
    [["if",5,35,36],["add",12,86]],
    [["if",2,37],["add",13,17]],
    [["if",2,38],["add",13,17]],
    [["if",2,39],["add",14,18]],
    [["if",2,40],["add",14,18]],
    [["if",5,41,42],["add",15,87]],
    [["if",5,43,44],["add",15]],
    [["if",5,13,18,20],["unless",19],["add",16,82,92],["block",7,91]],
    [["if",5,13,17,21],["unless",19],["add",16,82,92],["block",7,91]],
    [["if",5,45,46],["add",19,20]],
    [["if",48],["add",21]],
    [["if",5,51,52,53],["add",22]],
    [["if",5,52,54,55],["add",23]],
    [["if",52,56,57],["add",24]],
    [["if",56,58],["add",25,107]],
    [["if",59],["add",26]],
    [["if",60,61,62,63],["add",27,96]],
    [["if",64,65],["add",29]],
    [["if",63,66,67],["add",30]],
    [["if",9],["add",31],["block",5]],
    [["if",48,49,50],["add",32],["block",21]],
    [["if",2,68,69],["add",33]],
    [["if",2,70],["add",33]],
    [["if",2,71,72],["add",33]],
    [["if",2,73,74],["add",33]],
    [["if",2,75,76],["add",33]],
    [["if",0,77],["add",35]],
    [["if",78],["add",70]],
    [["if",0,79],["add",80]],
    [["if",2,80],["add",81]],
    [["if",2,81],["add",81]],
    [["if",0,82],["add",93]],
    [["if",60,63,83],["add",95]],
    [["if",0,84],["add",96]],
    [["if",48,85,86],["add",97]],
    [["if",0,87],["add",99]],
    [["if",0,88],["add",100]],
    [["if",78,89,90],["add",101]],
    [["if",0,91],["add",103]],
    [["if",0,92],["add",104]],
    [["if",56,93],["add",106]],
    [["if",0,47],["block",19,20]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ba,ca="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},da;if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var ha={Lf:!0},ia={};try{ia.__proto__=ha;ea=ia.Lf;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=da,ka=this||self,na=/^[\w+/_-]+[=]{0,2}$/,oa=null;var pa=function(){},qa=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},ra=function(a){return"number"==typeof a&&!isNaN(a)},sa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},ua=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},wa=function(a,b){if(a&&sa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},xa=function(a,b){if(!ra(a)||
!ra(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Aa=function(a,b){for(var c=new ya,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ca=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Da=function(a){return Math.round(Number(a))||0},Ea=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Fa=function(a){var b=[];if(sa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ha=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Ia=function(){return(new Date).getTime()},ya=function(){this.prefix="gtm.";this.values={}};ya.prototype.set=function(a,b){this.values[this.prefix+a]=b};ya.prototype.get=function(a){return this.values[this.prefix+a]};
var Ja=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ka=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},La=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ma=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Oa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Pa=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Qa=function(a){var b=
[];Ca(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ra=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ta=function(a){if(null==a)return String(a);var b=Ra.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ua=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Va=function(a){if(!a||"object"!=Ta(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ua(a,"constructor")&&!Ua(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ua(a,b)},n=function(a,b){var c=b||("array"==Ta(a)?[]:{}),d;for(d in a)if(Ua(a,d)){var e=a[d];"array"==Ta(e)?("array"!=Ta(c[d])&&(c[d]=[]),c[d]=n(e,c[d])):Va(e)?(Va(c[d])||(c[d]={}),c[d]=n(e,c[d])):c[d]=e}return c};
var Xa=[],Ya={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Za=function(a){return Ya[a]},$a=/[\x00\x22\x26\x27\x3c\x3e]/g;var db=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,eb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},fb=function(a){return eb[a]};Xa[7]=function(a){return String(a).replace(db,fb)};
Xa[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(db,fb)+"'"}};var ob=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,pb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},qb=function(a){return pb[a]};Xa[16]=function(a){return a};var sb;
var tb=[],ub=[],vb=[],wb=[],xb=[],yb={},zb,Ab,Bb,Cb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Eb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=yb[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):sb(c,e,b)},Gb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Fb(a[e],b,c));
return d},Hb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=yb[b];return c?c.priorityOverride||0:0},Fb=function(a,b,c){if(sa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Fb(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=tb[f];if(!h||b.$c(h))return;c[f]=!0;try{var k=Gb(h,b,c);k.vtp_gtmEventId=b.id;d=Eb(k,b);Bb&&(d=Bb.jg(d,k))}catch(y){b.Fe&&b.Fe(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Fb(a[l],b,c)]=Fb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,p=1;p<a.length;p++){var r=Fb(a[p],b,c);Ab&&(m=m||r===Ab.Kb);d.push(r)}return Ab&&m?Ab.mg(d):d.join("");case "escape":d=Fb(a[1],b,c);if(Ab&&sa(a[1])&&"macro"===a[1][0]&&Ab.Kg(a))return Ab.ah(d);d=String(d);for(var t=2;t<a.length;t++)Xa[a[t]]&&(d=Xa[a[t]](d));return d;case "tag":var q=a[1];if(!wb[q])throw Error("Unable to resolve tag reference "+q+".");return d={se:a[2],
index:q};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Ib(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Ib=function(a,b,c){try{return zb(Gb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Jb=function(){var a=function(b){return{toString:function(){return b}}};return{Dd:a("convert_case_to"),Ed:a("convert_false_to"),Fd:a("convert_null_to"),Gd:a("convert_true_to"),Hd:a("convert_undefined_to"),Fh:a("debug_mode_metadata"),wa:a("function"),jf:a("instance_name"),pf:a("live_only"),rf:a("malware_disabled"),sf:a("metadata"),Gh:a("original_vendor_template_id"),wf:a("once_per_event"),Md:a("once_per_load"),Ud:a("setup_tags"),Wd:a("tag_id"),Xd:a("teardown_tags")}}();var Kb=null,Nb=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];Kb=Lb(a);for(var e=0;e<ub.length;e++){var f=ub[e],h=Mb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],p=0;p<wb.length;p++)c[p]&&!d[p]&&(m[p]=!0);return m},Mb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Kb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Kb(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Lb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Ib(vb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var C={ab:"_ee",Mc:"_syn",Ih:"_uei",Ac:"event_callback",Jb:"event_timeout",I:"gtag.config",fa:"allow_ad_personalization_signals",Bc:"restricted_data_processing",Za:"allow_google_signals",ia:"cookie_expires",Ib:"cookie_update",$a:"session_duration",ka:"user_properties",va:"transport_url",N:"ads_data_redaction"};C.Ee=[C.fa,C.Za,C.Ib];C.He=[C.ia,C.Jb,C.$a];C.o="ad_storage",C.H="analytics_storage",C.sh="region",C.vh="wait_for_update";var E=window,F=document,hc=navigator,ic=F.currentScript&&F.currentScript.src,jc=function(a,b){var c=E[a];E[a]=void 0===c?b:c;return E[a]},kc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},lc=function(a,b,c){var d=F.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;kc(d,b);c&&(d.onerror=c);var e;if(null===oa)b:{var f=ka.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&na.test(k)){oa=k;break b}}oa=""}e=oa;e&&d.setAttribute("nonce",e);var l=F.getElementsByTagName("script")[0]||F.body||F.head;l.parentNode.insertBefore(d,l);return d},mc=function(){if(ic){var a=ic.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},nc=function(a,b){var c=F.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=F.body&&F.body.lastChild||
F.body||F.head;d.parentNode.insertBefore(c,d);kc(c,b);void 0!==a&&(c.src=a);return c},oc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},pc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},qc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){E.setTimeout(a,0)},rc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},sc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},tc=function(a){var b=F.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},uc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},vc=function(a){hc.sendBeacon&&hc.sendBeacon(a)||oc(a)},wc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var xc={},I=function(a,b){xc[a]=xc[a]||[];xc[a][b]=!0},yc=function(a){for(var b=[],c=xc[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var zc={},Ac=function(a){return void 0==zc[a]?!1:zc[a]};var Bc=[];function Dc(){var a=jc("google_tag_data",{});a.ics||(a.ics={entries:{},set:Ec,update:Fc,addListener:Gc,notifyListeners:Hc,active:!1});return a.ics}
function Ec(a,b,c,d,e,f){var h=Dc();h.active=!0;if(void 0!=b){var k=h.entries,l=k[a]||{},m=l.region,p=c&&g(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(p===e||(p===d?m!==e:!p&&!m)){var r=!!(f&&0<f&&void 0===l.update),t={region:p,initial:"granted"===b,update:l.update,quiet:r};k[a]=t;r&&E.setTimeout(function(){k[a]===t&&t.quiet&&(t.quiet=!1,Ic(a),Hc(),I("TAGGING",2))},f)}}}
function Fc(a,b){var c=Dc();c.active=!0;if(void 0!=b){var d=Jc(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var h=Jc(a);f.quiet?(f.quiet=!1,Ic(a)):h!==d&&Ic(a)}}function Gc(a,b){Bc.push({me:a,wg:b})}function Ic(a){for(var b=0;b<Bc.length;++b){var c=Bc[b];sa(c.me)&&-1!==c.me.indexOf(a)&&(c.Ne=!0)}}function Hc(){for(var a=0;a<Bc.length;++a){var b=Bc[a];if(b.Ne){b.Ne=!1;try{b.wg.call()}catch(c){}}}}
var Jc=function(a){var b=Dc().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},Kc=function(a){return!(Dc().entries[a]||{}).quiet},Lc=function(){return Ac("gtag_cs_api")?Dc().active:!1},Mc=function(a,b){Dc().addListener(a,b)},Nc=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Kc(b[e]))return!0;return!1}if(c()){var d=!1;Mc(b,function(){d||c()||(d=!0,a())})}else a()},Oc=function(a,b){if(!1===Jc(b)){var c=!1;Mc([b],function(){!c&&Jc(b)&&(a(),c=!0)})}};var Pc=[C.o,C.H],Qc=function(a){var b=a[C.sh];b&&I("GTM",40);var c=a[C.vh];c&&I("GTM",41);for(var d=sa(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<Pc.length;f++){var h=Pc[f],k=a[Pc[f]],l=d[e];Dc().set(h,k,l,"UA","UA-14",c)}},Rc=function(a){for(var b=0;b<Pc.length;b++){var c=Pc[b],d=a[Pc[b]];Dc().update(c,d)}Dc().notifyListeners()},Sc=function(a){var b=Jc(a);return void 0!=b?b:!0},Tc=function(){for(var a=[],b=0;b<Pc.length;b++){var c=Jc(Pc[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},Uc=function(a){Oc(a,C.o)},Vc=function(a,b){Nc(a,b)};var Xc=function(a){return Wc?F.querySelectorAll(a):null},Yc=function(a,b){if(!Wc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!F.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Zc=!1;if(F.querySelectorAll)try{var $c=F.querySelectorAll(":root");$c&&1==$c.length&&$c[0]==F.documentElement&&(Zc=!0)}catch(a){}var Wc=Zc;var K={},od=null,pd=Math.random();K.s="GTM-5SB5C3";K.Ob="6h1";K.Ld="";var qd={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},rd="www.googletagmanager.com/gtm.js";
var sd=rd,td=null,ud=null,vd=null,wd="//www.googletagmanager.com/a?id="+K.s+"&cv=145",xd={},yd={},zd=function(){var a=od.sequence||0;od.sequence=a+1;return a};
var Ad=function(){return"&tc="+wb.filter(function(a){return a}).length},Dd=function(){Bd||(Bd=E.setTimeout(Cd,500))},Cd=function(){Bd&&(E.clearTimeout(Bd),Bd=void 0);void 0===Ed||Fd[Ed]&&!Gd&&!Hd||(Id[Ed]||Jd.Mg()||0>=Kd--?(I("GTM",1),Id[Ed]=!0):(Jd.ih(),oc(Ld()),Fd[Ed]=!0,Md=Nd=Hd=Gd=""))},Ld=function(){var a=Ed;if(void 0===a)return"";var b=yc("GTM"),c=yc("TAGGING");return[Od,Fd[a]?"":"&es=1",Pd[a],b?"&u="+b:"",c?"&ut="+c:"",Ad(),Gd,Hd,Nd,Md,"&z=0"].join("")},Qd=function(){return[wd,"&v=3&t=t","&pid="+
xa(),"&rv="+K.Ob].join("")},Rd="0.005000">Math.random(),Od=Qd(),Sd=function(){Od=Qd()},Fd={},Gd="",Hd="",Md="",Nd="",Ed=void 0,Pd={},Id={},Bd=void 0,Jd=function(a,b){var c=0,d=0;return{Mg:function(){if(c<a)return!1;Ia()-d>=b&&(c=0);return c>=a},ih:function(){Ia()-d>=b&&(c=0);c++;d=Ia()}}}(2,1E3),Kd=1E3,Td=function(a,b){if(Rd&&!Id[a]&&Ed!==a){Cd();Ed=a;Md=Gd="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Pd[a]="&e="+c+"&eid="+a;Dd()}},Ud=function(a,b,c){if(Rd&&!Id[a]&&
b){a!==Ed&&(Cd(),Ed=a);var d,e=String(b[Jb.wa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;Gd=Gd?Gd+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(yb[h]?"1":"2")+d;Md=Md?Md+"."+k:"&ti="+k;Dd();2022<=Ld().length&&Cd()}},Vd=function(a,b,c){if(Rd&&!Id[a]){a!==Ed&&(Cd(),Ed=a);var d=c+b;Hd=Hd?Hd+
"."+d:"&epr="+d;Dd();2022<=Ld().length&&Cd()}};var Wd={},Xd=new ya,Yd={},Zd={},be={name:"dataLayer",set:function(a,b){n(Pa(a,b),Yd);$d()},get:function(a){return ae(a,2)},reset:function(){Xd=new ya;Yd={};$d()}},ae=function(a,b){if(2!=b){var c=Xd.get(a);if(Rd){var d=ce(a);c!==d&&I("GTM",5)}return c}return ce(a)},ce=function(a){var b=a.split("."),c=!1,d=void 0;return c?d:de(b)},de=function(a){for(var b=Yd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var ee=function(a,b){Zd.hasOwnProperty(a)||(Xd.set(a,b),n(Pa(a,b),Yd),$d())},$d=function(a){Ca(Zd,function(b,c){Xd.set(b,c);n(Pa(b,void 0),Yd);n(Pa(b,c),Yd);a&&delete Zd[b]})},fe=function(a,b,c){Wd[a]=Wd[a]||{};var d=1!==c?ce(b):Xd.get(b);"array"===Ta(d)||"object"===Ta(d)?Wd[a][b]=n(d):Wd[a][b]=d},ge=function(a,b){if(Wd[a])return Wd[a][b]},he=function(a,b){Wd[a]&&delete Wd[a][b]};var ke=/:[0-9]+$/,le=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},oe=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=me(a.protocol)||me(E.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:E.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||E.location.hostname).replace(ke,"").toLowerCase());return ne(a,b,c,d,e)},ne=function(a,b,c,d,e){var f,h=me(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=pe(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(ke,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||I("TAGGING",1);
f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=ua(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=le(f,e,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},me=function(a){return a?a.replace(":","").toLowerCase():""},pe=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");
b=0>c?a.href:a.href.substr(0,c)}return b},qe=function(a){var b=F.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||I("TAGGING",1),c="/"+c);var d=b.hostname.replace(ke,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},re=function(a){function b(m){var p=m.split("=")[0];return 0>d.indexOf(p)?m:p+"=0"}function c(m){return m.split("&").map(b).filter(function(p){return void 0!=p}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),
e=qe(a),f=a.split(/[?#]/)[0],h=e.search,k=e.hash;"?"===h[0]&&(h=h.substring(1));"#"===k[0]&&(k=k.substring(1));h=c(h);k=c(k);""!==h&&(h="?"+h);""!==k&&(k="#"+k);var l=""+f+h+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function se(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var ue=function(a,b,c,d){return te(d)?se(a,String(b||document.cookie),c):[]},xe=function(a,b,c,d,e){if(te(e)){var f=ve(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=we(f,function(h){return h.Tb},b);if(1===f.length)return f[0].id;f=we(f,function(h){return h.yb},c);return f[0]?f[0].id:void 0}}};function ye(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=ue(b,f,!1,d).indexOf(c)}
var Ce=function(a,b,c){function d(q,u,v){if(null==v)return delete h[u],q;h[u]=v;return q+"; "+u+"="+v}function e(q,u){if(null==u)return delete h[u],q;h[u]=!0;return q+"; "+u}if(!te(c.Ca))return 2;var f;void 0==b?f=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=ze(b),f=a+"="+b);var h={};f=d(f,"path",c.path);var k;c.expires instanceof Date?k=c.expires.toUTCString():null!=c.expires&&(k=""+c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.Sh);f=d(f,"samesite",
c.Xh);c.Yh&&(f=e(f,"secure"));var l=c.domain;if("auto"===l){for(var m=Ae(),p=0;p<m.length;++p){var r="none"!==m[p]?m[p]:void 0,t=d(f,"domain",r);t=e(t,c.flags);if(!Be(r,c.path)&&ye(t,a,b,c.Ca))return 0}return 1}l&&"none"!==l&&(f=d(f,"domain",l));f=e(f,c.flags);return Be(l,c.path)?1:ye(f,a,b,c.Ca)?0:1},De=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Ce(a,b,c)};
function we(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function ve(a,b,c){for(var d=[],e=ue(a,void 0,void 0,c),f=0;f<e.length;f++){var h=e[f].split("."),k=h.shift();if(!b||-1!==b.indexOf(k)){var l=h.shift();l&&(l=l.split("-"),d.push({id:h.join("."),Tb:1*l[0]||1,yb:1*l[1]||1}))}}return d}
var ze=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Ee=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Fe=/(^|\.)doubleclick\.net$/i,Be=function(a,b){return Fe.test(document.location.hostname)||"/"===b&&Ee.test(a)},Ae=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Fe.test(e)||Ee.test(e)||a.push("none");
return a},te=function(a){if(!Ac("gtag_cs_api")||!a||!Lc())return!0;if(!Kc(a))return!1;var b=Jc(a);return null==b?!0:!!b};var Ge=function(){for(var a=hc.userAgent+(F.cookie||"")+(F.referrer||""),b=a.length,c=E.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ia()/1E3)].join(".")},Je=function(a,b,c,d,e){var f=He(b);return xe(a,f,Ie(c),d,e)},Ke=function(a,b,c,d){var e=""+He(c),f=Ie(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},He=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Ie=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Le(a,b,c){var d,e=a.wb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Ia())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Me=["1"],Ne={},Re=function(a){var b=Oe(a.prefix);Ne[b]||Pe(b,a.path,a.domain)||(Qe(b,Ge(),a),Pe(b,a.path,a.domain))};function Qe(a,b,c){var d=Ke(b,"1",c.domain,c.path),e=Le(c);e.Ca="ad_storage";De(a,d,e)}function Pe(a,b,c){var d=Je(a,b,c,Me,"ad_storage");d&&(Ne[a]=d);return d}function Oe(a){return(a||"_gcl")+"_au"};var Se=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Te(){for(var a=Ue,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Ve(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Ue,We;function Xe(a){Ue=Ue||Ve();We=We||Te();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,p=(h&15)<<2|k>>6,r=k&63;e||(r=64,d||(p=64));b.push(Ue[l],Ue[m],Ue[p],Ue[r])}return b.join("")}
function Ye(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=We[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Ue=Ue||Ve();We=We||Te();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Ze;var cf=function(){var a=$e,b=af,c=bf(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){pc(F,"mousedown",d);pc(F,"keyup",d);pc(F,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},df=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};bf().decorators.push(f)},ef=function(a,b,c){for(var d=bf().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,m=a,p=!!h.sameHost;if(l&&(p||m!==F.location.hostname))for(var r=0;r<l.length;r++)if(l[r]instanceof RegExp){if(l[r].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[r])||p&&0<=l[r].indexOf(m)){k=!0;break a}k=!1}if(k){var t=h.placement;void 0==t&&(t=h.fragment?2:1);t===b&&La(e,h.callback())}}return e},bf=function(){var a=jc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var ff=/(.*?)\*(.*?)\*(.*)/,gf=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,hf=/^(?:www\.|m\.|amp\.)+/,jf=/([^?#]+)(\?[^#]*)?(#.*)?/;function kf(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var mf=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Xe(String(d))))}var e=b.join("*");return["1",lf(e),e].join("*")},lf=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Ze)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Ze=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Ze[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},of=function(){return function(a){var b=qe(E.location.href),c=b.search.replace("?",""),d=le(c,"_gl",!0)||"";a.query=nf(d)||{};var e=oe(b,"fragment").match(kf("_gl"));a.fragment=nf(e&&e[3]||"")||{}}},pf=function(a){var b=of(),c=bf();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(La(d,e.query),a&&La(d,e.fragment));return d},nf=
function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=ff.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],p=0;p<b;++p)if(m===lf(k,p)){l=!0;break a}l=!1}if(l){for(var r={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)r[t[q]]=Ye(t[q+1]);return r}}}}catch(u){}};
function qf(a,b,c,d){function e(p){var r=p,t=kf(a).exec(r),q=r;if(t){var u=t[2],v=t[4];q=t[1];v&&(q=q+u+v)}p=q;var w=p.charAt(p.length-1);p&&"&"!==w&&(p+="&");return p+m}d=void 0===d?!1:d;var f=jf.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function rf(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=ef(b,1,c),e=ef(b,2,c),f=ef(b,3,c);if(Ma(d)){var h=mf(d);c?sf("_gl",h,a):tf("_gl",h,a,!1)}if(!c&&Ma(e)){var k=mf(e);tf("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,p=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){tf(m,p,r,void 0);break a}if("form"===r.tagName.toLowerCase()){sf(m,p,r);break a}}"string"==typeof r&&qf(m,p,r,void 0)}}
function tf(a,b,c,d){if(c.href){var e=qf(a,b,c.href,void 0===d?!1:d);Se.test(e)&&(c.href=e)}}
function sf(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=F.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=qf(a,b,c.action);Se.test(m)&&(c.action=m)}}}
var $e=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||rf(e,e.hostname)}}catch(h){}},af=function(a){try{if(a.action){var b=oe(qe(a.action),"host");rf(a,b)}}catch(c){}},uf=function(a,b,c,d){cf();df(a,b,"fragment"===c?2:1,!!d,!1)},vf=function(a,b){cf();df(a,[ne(E.location,"host",!0)],b,!0,!0)},wf=function(){var a=F.location.hostname,b=gf.exec(F.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(hf,""),l=e.replace(hf,""),m;if(!(m=k===l)){var p="."+l;m=k.substring(k.length-p.length,k.length)===p}return m},xf=function(a,b){return!1===a?!1:a||b||wf()};var yf=/^\w+$/,zf=/^[\w-]+$/,Af=/^~?[\w-]+$/,Bf={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Cf=function(){if(!Ac("gtag_cs_api")||!Lc())return!0;var a=Jc("ad_storage");return null==a?!0:!!a},Df=function(a,b){Kc("ad_storage")?Cf()?a():Oc(a,"ad_storage"):b?I("TAGGING",3):Nc(function(){Df(a,!0)},["ad_storage"])},Gf=function(a){var b=[];if(!F.cookie)return b;var c=ue(a,F.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=Ef(c[d]);e&&-1===ua(b,e)&&b.push(e)}return Ff(b)};
function Hf(a){return a&&"string"==typeof a&&a.match(yf)?a:"_gcl"}
var Jf=function(){var a=qe(E.location.href),b=oe(a,"query",!1,void 0,"gclid"),c=oe(a,"query",!1,void 0,"gclsrc"),d=oe(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||le(e,"gclid",void 0);c=c||le(e,"gclsrc",void 0)}return If(b,c,d)},If=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(zf))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Ac("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Lf=function(a){var b=Jf();Df(function(){return Kf(b,a)})};
function Kf(a,b,c){function d(m,p){var r=Mf(m,e);r&&(De(r,p,f),h=!0)}b=b||{};var e=Hf(b.prefix);c=c||Ia();var f=Le(b,c,!0);f.Ca="ad_storage";var h=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.bi?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return h}
var Of=function(a,b){var c=pf(!0);Df(function(){for(var d=Hf(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Bf[f]){var h=Mf(f,d),k=c[h];if(k){var l=Math.min(Nf(k),Ia()),m;b:{for(var p=l,r=ue(h,F.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(Nf(r[t])>p){m=!0;break b}m=!1}if(!m){var q=Le(b,l,!0);q.Ca="ad_storage";De(h,k,q)}}}}Kf(If(c.gclid,c.gclsrc),b)})},Mf=function(a,b){var c=Bf[a];if(void 0!==c)return b+c},Nf=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Ef(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Pf=function(a,b,c,d,e){if(sa(b)){var f=Hf(e),h=function(){for(var k={},l=0;l<a.length;++l){var m=Mf(a[l],f);if(m){var p=ue(m,F.cookie,void 0,"ad_storage");p.length&&(k[m]=p.sort()[p.length-1])}}return k};Df(function(){uf(h,b,c,d)})}},Ff=function(a){return a.filter(function(b){return Af.test(b)})},Qf=function(a,b){for(var c=Hf(b.prefix),d={},e=0;e<a.length;e++)Bf[a[e]]&&(d[a[e]]=Bf[a[e]]);Df(function(){Ca(d,function(f,h){var k=ue(c+h,F.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=Nf(l),
p={};p[f]=[Ef(l)];Kf(p,b,m)}})})};function Rf(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Sf=function(){function a(e,f,h){h&&(e[f]=h)}var b=["aw","dc"];if(Lc()){var c=Jf();if(Rf(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);vf(function(){return d},3);vf(function(){var e={};return e._up="1",e},1)}}},Tf=function(){var a;if(Cf()){for(var b=[],c=F.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({td:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].td]||(h[b[k].td]=[]),h[b[k].td].push({timestamp:l[1],yg:l[2]}))}a=h}else a={};return a};var Uf=/^\d+\.fls\.doubleclick\.net$/;function Vf(a,b){Kc(C.o)?Sc(C.o)?a():Uc(a):b?I("GTM",42):Vc(function(){Vf(a,!0)},[C.o])}function Wf(a){var b=qe(E.location.href),c=oe(b,"host",!1);if(c&&c.match(Uf)){var d=oe(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Xf(a,b,c){if("aw"==a||"dc"==a){var d=Wf("gcl"+a);if(d)return d.split(".")}var e=Hf(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Sc(C.o)&&c,h;h=Jf()[a]||[];if(0<h.length)return f?["0"]:h}var k=Mf(a,e);return k?Gf(k):[]}
var Yf=function(a){var b=Wf("gac");if(b)return!Sc(C.o)&&a?"0":decodeURIComponent(b);var c=Tf(),d=[];Ca(c,function(e,f){for(var h=[],k=0;k<f.length;k++)h.push(f[k].yg);h=Ff(h);h.length&&d.push(e+":"+h.join(","))});return d.join(";")},Zf=function(a,b){var c=Jf().dc||[];Vf(function(){Re(b);var d=Ne[Oe(b.prefix)],e=!1;if(d&&0<c.length){var f=od.joined_au=od.joined_au||{},h=b.prefix||"_gcl";if(!f[h])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;vc(l);e=f[h]=
!0}}null==a&&(a=e);if(a&&d){var m=Oe(b.prefix),p=Ne[m];p&&Qe(m,p,b)}})};var $f=/[A-Z]+/,ag=/\s/,bg=function(a){if(g(a)&&(a=Ha(a),!ag.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if($f.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],B:d}}}}},dg=function(a){for(var b={},c=0;c<a.length;++c){var d=bg(a[c]);d&&(b[d.id]=d)}cg(b);var e=[];Ca(b,function(f,h){e.push(h)});return e};
function cg(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.B[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var eg=function(){var a=!1;return a};var S=function(a,b,c,d){return(2===fg()||d||"http:"!=E.location.protocol?a:b)+c},fg=function(){var a=mc(),b;if(1===a)a:{var c=sd;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=F.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var tg=function(a){return Sc(C.o)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=re(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})};var ug=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),vg={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},wg={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},xg="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var zg=function(a){var b=ae("gtm.whitelist");b&&I("GTM",9);var c=b&&Oa(Fa(b),vg),d=ae("gtm.blacklist");d||(d=ae("tagTypeBlacklist"))&&I("GTM",3);d?
I("GTM",8):d=[];yg()&&(d=Fa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=ua(Fa(d),"google")&&I("GTM",2);var e=d&&Oa(Fa(d),wg),f={};return function(h){var k=h&&h[Jb.wa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=yd[k]||[],m=a(k,l);if(b){var p;if(p=m)a:{if(0>ua(c,k))if(l&&0<l.length)for(var r=
0;r<l.length;r++){if(0>ua(c,l[r])){I("GTM",11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var t=!1;if(d){var q=0<=ua(e,k);if(q)t=q;else{var u=Aa(e,l||[]);u&&I("GTM",10);t=u}}var v=!m||t;v||!(0<=ua(l,"sandboxedScripts"))||c&&-1!==ua(c,"sandboxedScripts")||(v=Aa(e,xg));return f[k]=v}},yg=function(){return ug.test(E.location&&E.location.hostname)};var Bg={jg:function(a,b){b[Jb.Dd]&&"string"===typeof a&&(a=1==b[Jb.Dd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Jb.Fd)&&null===a&&(a=b[Jb.Fd]);b.hasOwnProperty(Jb.Hd)&&void 0===a&&(a=b[Jb.Hd]);b.hasOwnProperty(Jb.Gd)&&!0===a&&(a=b[Jb.Gd]);b.hasOwnProperty(Jb.Ed)&&!1===a&&(a=b[Jb.Ed]);return a}};var Cg={active:!0,isWhitelisted:function(){return!0}},Dg=function(a){var b=od.zones;!b&&a&&(b=od.zones=a());return b};var Eg=function(){};var Fg=!1,Gg=0,Hg=[];function Ig(a){if(!Fg){var b=F.createEventObject,c="complete"==F.readyState,d="interactive"==F.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Fg=!0;for(var e=0;e<Hg.length;e++)G(Hg[e])}Hg.push=function(){for(var f=0;f<arguments.length;f++)G(arguments[f]);return 0}}}function Jg(){if(!Fg&&140>Gg){Gg++;try{F.documentElement.doScroll("left"),Ig()}catch(a){E.setTimeout(Jg,50)}}}var Kg=function(a){Fg?a():Hg.push(a)};var Lg={},Mg={},Ng=function(a,b,c,d){if(!Mg[a]||qd[b]||"__zone"===b)return-1;var e={};Va(d)&&(e=n(d,e));e.id=c;e.status="timeout";return Mg[a].tags.push(e)-1},Og=function(a,b,c,d){if(Mg[a]){var e=Mg[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Pg(a){for(var b=Lg[a]||[],c=0;c<b.length;c++)b[c]();Lg[a]={push:function(d){d(K.s,Mg[a])}}}
var Sg=function(a,b,c){Mg[a]={tags:[]};qa(b)&&Qg(a,b);c&&E.setTimeout(function(){return Pg(a)},Number(c));return Rg(a)},Qg=function(a,b){Lg[a]=Lg[a]||[];Lg[a].push(Ka(function(){return G(function(){b(K.s,Mg[a])})}))};function Rg(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ka(function(){b++;d&&b>=c&&Pg(a)})},Xf:function(){d=!0;b>=c&&Pg(a)}}};var Tg=function(){function a(d){return!ra(d)||0>d?0:d}if(!od._li&&E.performance&&E.performance.timing){var b=E.performance.timing.navigationStart,c=ra(be.get("gtm.start"))?be.get("gtm.start"):0;od._li={cst:a(c-b),cbt:a(ud-b)}}};var Xg={},Yg=function(){return E.GoogleAnalyticsObject&&E[E.GoogleAnalyticsObject]},Zg=!1;
var $g=function(a){E.GoogleAnalyticsObject||(E.GoogleAnalyticsObject=a||"ga");var b=E.GoogleAnalyticsObject;if(E[b])E.hasOwnProperty(b)||I("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);E[b]=c}Tg();return E[b]},ah=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Yg();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var ch=function(a){},bh=function(){return E.GoogleAnalyticsObject||"ga"};function ih(a,b,c,d){var e=wb[a],f=jh(a,b,c,d);if(!f)return null;var h=Fb(e[Jb.Ud],c,[]);if(h&&h.length){var k=h[0];f=ih(k.index,{D:f,C:1===k.se?b.terminate:f,terminate:b.terminate},c,d)}return f}
function jh(a,b,c,d){function e(){if(f[Jb.rf])k();else{var w=Gb(f,c,[]),y=Ng(c.id,String(f[Jb.wa]),Number(f[Jb.Wd]),w[Jb.sf]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var z=Ia()-B;Ud(c.id,wb[a],"5");Og(c.id,y,"success",z);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var z=Ia()-B;Ud(c.id,wb[a],"6");Og(c.id,y,"failure",z);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;Ud(c.id,f,"1");var A=function(){var z=Ia()-B;Ud(c.id,f,"7");Og(c.id,y,"exception",z);x||(x=!0,k())};var B=Ia();try{Eb(w,c)}catch(z){A(z)}}}var f=wb[a],h=b.D,k=b.C,l=b.terminate;if(c.$c(f))return null;var m=Fb(f[Jb.Xd],c,[]);if(m&&m.length){var p=m[0],r=ih(p.index,{D:h,C:k,terminate:l},c,d);if(!r)return null;h=r;k=2===p.se?l:r}if(f[Jb.Md]||f[Jb.wf]){var t=f[Jb.Md]?xb:c.qh,q=h,u=k;if(!t[a]){e=Ka(e);var v=kh(a,t,e);h=v.D;k=v.C}return function(){t[a](q,u)}}return e}
function kh(a,b,c){var d=[],e=[];b[a]=lh(d,e,c);return{D:function(){b[a]=mh;for(var f=0;f<d.length;f++)d[f]()},C:function(){b[a]=nh;for(var f=0;f<e.length;f++)e[f]()}}}function lh(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function mh(a){a()}function nh(a,b){b()};var qh=function(a,b){for(var c=[],d=0;d<wb.length;d++)if(a.xb[d]){var e=wb[d];var f=b.add();try{var h=ih(d,{D:f,C:f,terminate:f},a,d);h?c.push({We:d,Oe:Hb(e),ug:h}):(oh(d,a),f())}catch(l){f()}}b.Xf();c.sort(ph);for(var k=0;k<c.length;k++)c[k].ug();return 0<c.length};function ph(a,b){var c,d=b.Oe,e=a.Oe;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.We,k=b.We;f=h>k?1:h<k?-1:0}return f}
function oh(a,b){if(!Rd)return;var c=function(d){var e=b.$c(wb[d])?"3":"4",f=Fb(wb[d][Jb.Ud],b,[]);f&&f.length&&c(f[0].index);Ud(b.id,wb[d],e);var h=Fb(wb[d][Jb.Xd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var rh=!1,sh=function(a,b,c,d,e){if("gtm.js"==b){if(rh)return!1;rh=!0}Td(a,b);var f=Sg(a,d,e);fe(a,"event",1);fe(a,"ecommerce",1);fe(a,"gtm");var h={id:a,name:b,$c:zg(c),xb:[],qh:[],Fe:function(){I("GTM",6)}};h.xb=Nb(h);var k=qh(h,f);"gtm.js"!==b&&"gtm.sync"!==b||ch(K.s);if(!k)return k;for(var l=0;l<h.xb.length;l++)if(h.xb[l]){var m=wb[l];if(m&&!qd[String(m[Jb.wa])])return!0}return!1};function uh(a,b){}function vh(a,b){return wh()?uh(a,b):void 0}
function wh(){var a=!1;return a};var xh=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.D=function(){};this.C=function(){};this.eventId=void 0},yh=function(a){var b=new xh;b.eventModel=a;return b},zh=function(a,b){a.targetConfig=b;return a},Ah=function(a,b){a.containerConfig=b;return a},Bh=function(a,b){a.h=b;return a},Ch=function(a,b){a.globalConfig=b;return a},Dh=function(a,b){a.D=b;return a},Eh=function(a,b){a.C=b;return a};
xh.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Fh=function(a){function b(e){Ca(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ca(c,function(e){d.push(e)});return d};var Gh;if(3===K.Ob.length)Gh="g";else{var Hh="G";Gh=Hh}
var Ih={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Gh,OPT:"o"},Jh=function(a){var b=K.s.split("-"),c=b[0].toUpperCase(),d=Ih[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===K.Ob.length){var h="w";f="2"+h}else f="";return f+d+K.Ob+e};function Kh(){var a=!1;a=Lc();return a}
function Lh(a,b,c){function d(r){var t;od.reported_gclid||(od.reported_gclid={});t=od.reported_gclid;var q=f+(r?"gcu":"gcs");if(!t[q]){t[q]=!0;var u=[],v=function(B,z){z&&u.push(B+"="+encodeURIComponent(z))},w="https://www.google.com";if(Lc()){var y=Sc(C.o);v("gcs",Tc());r&&v("gcu","1");v("rnd",p);if((!f||h&&"aw.ds"!==h)&&Sc(C.o)){var x=Gf("_gcl_aw");v("gclaw",x.join("."))}v("url",String(E.location).split(/[?#]/)[0]);v("dclid",Mh(b,k));!y&&b&&(w="https://pagead2.googlesyndication.com")}
"1"===pf(!1)._up&&v("gtm_up","1");v("gclid",Mh(b,f));v("gclsrc",h);v("gtm",Jh(!c));var A=w+"/pagead/landing?"+u.join("&");vc(A)}}var e=Jf(),f=e.gclid||"",h=e.gclsrc,k=e.dclid||"",l=!a&&(!f||h&&"aw.ds"!==h?!1:!0),m=Kh();if(l||m){var p=""+Ge();m?Vc(function(){d();Sc(C.o)||Uc(function(){return d(!0)})},[C.o]):d()}}
function Mh(a,b){var c=a&&!Sc(C.o);if(b&&c)return"0";return b}
var Wh=function(a){return!(void 0===a||null===a||0===(a+"").length)},Xh=function(a,b){var c;if(2===b.X)return a("ord",xa(1E11,1E13)),!0;if(3===b.X)return a("ord","1"),a("num",xa(1E11,1E13)),!0;if(4===b.X)return Wh(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.X)c="1";else if(6===b.X)c=b.od;else return!1;Wh(c)&&a("qty",c);Wh(b.Rb)&&a("cost",b.Rb);Wh(b.transactionId)&&a("ord",b.transactionId);return!0},Zh=function(a,b,c){function d(A,B,z){r.hasOwnProperty(A)||(B=String(B),p.push(";"+A+"="+(z?B:Yh(B))))}
var e=a.Tc,f=a.rd,h=a.protocol;h+=f?"//"+e+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";var k=";",l=!0;l=Sc(C.o);var m=!l&&a.zb;m&&(h="https://ade.googlesyndication.com/ddm/activity",k="/",f=!1);var p=[k,"src="+Yh(e),";type="+Yh(a.Wc),";cat="+Yh(a.qb)],r=a.og||{};Ca(r,function(A,B){p.push(";"+Yh(A)+"="+Yh(B+""))});if(Xh(d,a)){Wh(a.vc)&&d("u",a.vc);Wh(a.uc)&&d("tran",a.uc);d("gtm",
Jh());Lc()&&(d("gcs",Tc()),c&&d("gcu","1"));"1"===pf(!1)._up&&d("gtm_up","1");!1===a.Tf&&d("npa","1");if(a.Sc){var t=void 0===a.zb?!0:!!a.zb,q=Xf("dc",a.Na,t);q&&q.length&&d("gcldc",q.join("."));var u=Xf("aw",a.Na,t);u&&u.length&&d("gclaw",u.join("."));var v=Yf(t);v&&d("gac",v);Re({prefix:a.Na,
wb:a.lg,domain:a.kg,flags:a.Mh});var w=Ne[Oe(a.Na)];w&&d("auiddc",w)}Wh(a.kd)&&d("prd",a.kd,!0);Ca(a.vd,function(A,B){d(A,B)});p.push(b||"");if(Wh(a.hc)){var y=a.hc||"";m&&(y=re(y));d("~oref",y)}var x=h+p.join("")+"?";f?nc(x,a.D):oc(x,a.D,a.C)}else G(a.C)},Yh=encodeURIComponent,$h=function(a,b){var c=!1;c=!0;c&&Lc()?Vc(function(){Zh(a,b);Sc(C.o)||
Uc(function(){Zh(a,b,!0)})},[C.o]):Zh(a,b)};function Pi(){var a=od;return a.gcq=a.gcq||new Qi}
var Ri=function(a,b,c){Pi().register(a,b,c)},Si=function(a,b,c,d){Pi().push("event",[b,a],c,d)},Ti=function(a,b){Pi().push("config",[a],b)},Ui={},Vi=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.h=!1},Wi=function(a,b,c,d,e){this.type=a;this.m=b;this.ba=c||"";this.h=d;this.i=e},Qi=function(){this.m={};this.i={};this.h=[]},Xi=function(a,b){var c=bg(b);return a.m[c.containerId]=a.m[c.containerId]||new Vi},Yi=function(a,b,c){if(b){var d=bg(b);if(d&&1===
Xi(a,b).status){Xi(a,b).status=2;var e={};Rd&&(e.timeoutId=E.setTimeout(function(){I("GTM",38);Dd()},3E3));a.push("require",[e],d.containerId);Ui[d.containerId]=Ia();if(eg()){}else{var h="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=E.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+h),l=vh(c,h)||k;lc(l)}}}},Zi=function(a,b,c,d){if(d.ba){var e=Xi(a,d.ba),f=e.m;if(f){var h=n(c),k=n(e.targetConfig[d.ba]),l=n(e.containerConfig),m=n(e.i),p=n(a.i),r=ae("gtm.uniqueEventId"),t=bg(d.ba).prefix,q=Eh(Dh(Ch(Bh(Ah(zh(yh(h),k),l),m),p),function(){
Vd(r,t,"2");}),function(){Vd(r,t,"3");});try{Vd(r,t,"1");f(d.ba,b,d.m,q)}catch(u){Vd(r,t,"4");}}}};
Qi.prototype.register=function(a,b,c){if(3!==Xi(this,a).status){Xi(this,a).m=b;Xi(this,a).status=3;c&&(Xi(this,a).i=c);var d=bg(a),e=Ui[d.containerId];if(void 0!==e){var f=od[d.containerId].bootstrap,h=d.prefix.toUpperCase();od[d.containerId]._spx&&(h=h.toLowerCase());var k=ae("gtm.uniqueEventId"),l=h,m=Ia()-f;if(Rd&&!Id[k]){k!==Ed&&(Cd(),Ed=k);var p=l+"."+Math.floor(f-e)+"."+Math.floor(m);Nd=Nd?Nd+","+p:"&cl="+p}delete Ui[d.containerId]}this.flush()}};
Qi.prototype.push=function(a,b,c,d){var e=Math.floor(Ia()/1E3);Yi(this,c,b[0][C.va]||this.i[C.va]);this.h.push(new Wi(a,e,c,b,d));d||this.flush()};
Qi.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==Xi(this,c.ba).status&&!a)return;Rd&&E.clearTimeout(c.h[0].timeoutId);break;case "set":Ca(c.h[0],function(l,m){n(Pa(l,m),b.i)});break;case "config":var d=c.h[0],e=!!d[C.jc];delete d[C.jc];var f=Xi(this,c.ba),h=bg(c.ba),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.ba]={});f.h&&e||Zi(this,C.I,d,c);f.h=!0;delete d[C.ab];k?n(d,f.containerConfig):
n(d,f.targetConfig[c.ba]);break;case "event":Zi(this,c.h[1],c.h[0],c)}this.h.shift()}};var $i=["HA","GF","GP","G"],aj="G".split(/,/);aj.push("DC");aj.push("UA");aj.push("AW");
var bj=null,cj={},dj={},ej,fj=!1;function gj(a,b){var c={event:a};b&&(c.eventModel=n(b),b[C.Ac]&&(c.eventCallback=b[C.Ac]),b[C.Jb]&&(c.eventTimeout=b[C.Jb]));return c}
var lj={config:function(a){},event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Va(a[2])&&void 0!=a[2])return;c=a[2]}var d=gj(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return fj=!0,{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Va(a[1])?b=n(a[1]):3==a.length&&
g(a[1])&&(b={},Va(a[2])||sa(a[2])?b[a[1]]=n(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};
lj.consent=function(a){if(3===a.length){var b=function(){c&&n(a[2],{subcommand:a[1]})};I("GTM",39);var c=!1;var d=a[1];if("default"===d){b();Qc(a[2]);return}if("update"===d){b();Rc(a[2]);return}}};
var mj={policy:!0},nj=function(a,b){if(a.length&&g(a[0])){var c=lj[a[0]];if(c&&(!b||!mj[a[0]]))return c(a)}};var oj=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},qj=function(a){var b=pj(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var rj=!1,sj=[];function tj(){if(!rj){rj=!0;for(var a=0;a<sj.length;a++)G(sj[a])}}var uj=function(a){rj?G(a):sj.push(a)};var Mj=function(a){if(Kj(a))return a;this.h=a};Mj.prototype.Cg=function(){return this.h};var Kj=function(a){return!a||"object"!==Ta(a)||Va(a)?!1:"getUntrustedUpdateValue"in a};Mj.prototype.getUntrustedUpdateValue=Mj.prototype.Cg;var Nj=[],Oj=!1,Pj=function(a){return E["dataLayer"].push(a)},Qj=function(a){var b=od["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Rj(a){var b=a._clear;Ca(a,function(f,h){"_clear"!==f&&(b&&ee(f,void 0),ee(f,h))});td||(td=a["gtm.start"]);var c=a.event,d=a["gtm.uniqueEventId"];if(!c)return!1;d||(d=zd(),a["gtm.uniqueEventId"]=d,ee("gtm.uniqueEventId",d));vd=c;var e=Sj(a);vd=null;switch(c){case "gtm.init":I("GTM",19),e&&I("GTM",20)}return e}
function Sj(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=od.zones;d=e?e.checkState(K.s,c):Cg;return d.active?sh(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function Tj(){for(var a=!1;!Oj&&0<Nj.length;){Oj=!0;delete Yd.eventModel;$d();var b=Nj.shift();if(null!=b){var c=Kj(b);if(c){var d=b;b=Kj(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=ae(h,1);if(sa(k)||Va(k))k=n(k);Zd[h]=k}}try{if(qa(b))try{b.call(be)}catch(u){}else if(sa(b)){var l=b;if(g(l[0])){var m=
l[0].split("."),p=m.pop(),r=l.slice(1),t=ae(m.join("."),2);if(void 0!==t&&null!==t)try{t[p].apply(t,r)}catch(u){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))&&(b=nj(b,c),!b)){Oj=!1;continue}a=Rj(b)||a}}finally{c&&$d(!0)}}Oj=!1}return!a}
function Uj(){var a=Tj();try{oj(E["dataLayer"],K.s)}catch(b){}return a}
var Wj=function(){var a=jc("dataLayer",[]),b=jc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Kg(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});uj(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<od.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Mj(arguments[f])}else e=[].slice.call(arguments,0);var h=c.apply(a,e);Nj.push.apply(Nj,e);if(300<
this.length)for(I("GTM",4);300<this.length;)this.shift();var k="boolean"!==typeof h||h;return Tj()&&k};var d=a.slice(0);Nj.push.apply(Nj,d);Vj()&&G(Uj)},Vj=function(){var a=!0;return a};var Xj={};Xj.Kb=new String("undefined");
var Yj=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Xj.Kb?b:a[d]);return c.join("")}};Yj.prototype.toString=function(){return this.h("undefined")};Yj.prototype.valueOf=Yj.prototype.toString;Xj.Ff=Yj;Xj.Lc={};Xj.mg=function(a){return new Yj(a)};var Zj={};Xj.jh=function(a,b){var c=zd();Zj[c]=[a,b];return c};Xj.ne=function(a){var b=a?0:1;return function(c){var d=Zj[c];if(d&&"function"===typeof d[b])d[b]();Zj[c]=void 0}};Xj.Kg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Xj.ah=function(a){if(a===Xj.Kb)return a;var b=zd();Xj.Lc[b]=a;return'google_tag_manager["'+K.s+'"].macro('+b+")"};Xj.Ug=function(a,b,c){a instanceof Xj.Ff&&(a=a.h(Xj.jh(b,c)),b=pa);return{Yc:a,D:b}};var ak=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||rc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},bk=function(a){od.hasOwnProperty("autoEventsSettings")||(od.autoEventsSettings={});var b=od.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},ck=function(a,b,c){bk(a)[b]=c},dk=function(a,b,c,d){var e=bk(a),f=Ja(e,b,d);e[b]=c(f)},ek=function(a,b,c){var d=bk(a);return Ja(d,b,c)};var fk=["input","select","textarea"],gk=["button","hidden","image","reset","submit"],hk=function(a){var b=a.tagName.toLowerCase();return!wa(fk,function(c){return c===b})||"input"===b&&wa(gk,function(c){return c===a.type.toLowerCase()})?!1:!0},ik=function(a){return a.form?a.form.tagName?a.form:F.getElementById(a.form):uc(a,["form"],100)},jk=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(hk(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var kk=!!E.MutationObserver,lk=void 0,mk=function(a){if(!lk){var b=function(){var c=F.body;if(c)if(kk)(new MutationObserver(function(){for(var e=0;e<lk.length;e++)G(lk[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;pc(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<lk.length;e++)G(lk[e])}))})}};lk=[];F.body?b():G(b)}lk.push(a)};
var xk=function(){var a=F.body,b=F.documentElement||a&&a.parentElement,c,d;if(F.compatMode&&"BackCompat"!==F.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,h){return f&&h?Math.min(f,h):Math.max(f,h)};I("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},yk=function(a){var b=xk(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,h=e.right-e.left;return f&&h?(1-Math.min((Math.max(0-e.left,0)+
Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},zk=function(a){if(F.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!E.getComputedStyle)return!0;var c=E.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),f=Math.min(h,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=E.getComputedStyle(d,null))}return!1};var Ak=[],Bk=!(!E.IntersectionObserver||!E.IntersectionObserverEntry),Ck=function(a,b,c){for(var d=new E.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<Ak.length;f++)if(!Ak[f])return Ak[f]=d,f;return Ak.push(d)-1},Dk=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},p={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:Ia()};G(function(){return a(p)})}for(var e=[],f=[],h=0;h<b.length;h++)e.push(0),f.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=yk(b[k]);if(l>e[k])for(;f[k]<c.length-1&&l>=c[f[k]+1];)d(b[k],l),f[k]++;else if(l<e[k])for(;0<=f[k]&&l<=c[f[k]];)d(b[k],l),f[k]--;e[k]=l}}},Ek=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Bk){var e=!1;G(function(){e||Dk(a,b,c)()});return Ck(function(f){e=!0;for(var h={Wa:0};h.Wa<f.length;h={Wa:h.Wa},h.Wa++)G(function(k){return function(){return a(f[k.Wa])}}(h))},b,c)}return E.setInterval(Dk(a,b,c),1E3)},Fk=function(a){Bk?0<=a&&a<Ak.length&&Ak[a]&&(Ak[a].disconnect(),Ak[a]=void 0):E.clearInterval(a)};
var Gk=function(a,b,c){function d(){var h=a();f+=e?(Ia()-e)*h.playbackRate/1E3:0;e=Ia()}var e=0,f=0;return{Ub:function(h,k,l){var m=a(),p=m.oe,r=void 0!==l?Math.round(l):void 0!==k?Math.round(m.oe*k):Math.round(m.ng),t=void 0!==k?Math.round(100*k):0>=p?0:Math.round(r/p*100),q=F.hidden?!1:.5<=yk(c);d();var u=ak(c,"gtm.video",[b]);u["gtm.videoProvider"]="youtube";u["gtm.videoStatus"]=h;u["gtm.videoUrl"]=m.url;u["gtm.videoTitle"]=m.title;u["gtm.videoDuration"]=Math.round(p);u["gtm.videoCurrentTime"]=
Math.round(r);u["gtm.videoElapsedTime"]=Math.round(f);u["gtm.videoPercent"]=t;u["gtm.videoVisible"]=q;Pj(u)},lh:function(){e=Ia()},Nc:function(){d()}}};var Hk=E.clearTimeout,Ik=E.setTimeout,T=function(a,b,c){if(eg()){b&&G(b)}else return lc(a,b,c)},Jk=function(){return E.location.href},Kk=function(a){return oe(qe(a),"fragment")},Lk=function(a){return pe(qe(a))},U=function(a,b){return ae(a,b||2)},Mk=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Pj(a)):d=Pj(a);return d},Nk=function(a,b){E[a]=b},W=function(a,b,c){b&&(void 0===E[a]||c&&!E[a])&&(E[a]=
b);return E[a]},Ok=function(a,b,c){return ue(a,b,void 0===c?!0:!!c)},Pk=function(a,b){if(eg()){b&&G(b)}else nc(a,b)},Qk=function(a){return!!ek(a,"init",!1)},Rk=function(a){ck(a,"init",!0)},Sk=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":sd;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";T(S("https://","http://",c))},Tk=function(a,b){var c=a[b];return c};
var Uk=Xj.Ug;function ql(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var rl=new ya;function sl(a,b){function c(h){var k=qe(h),l=oe(k,"protocol"),m=oe(k,"host",!0),p=oe(k,"port"),r=oe(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function tl(a){return ul(a)?1:0}
function ul(a){var b=a.arg0,c=a.arg1;if(a.any_of&&sa(c)){for(var d=0;d<c.length;d++)if(tl({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(t){}}e=!1}return e;case "_ew":return ql(b,c);case "_eq":return String(b)==String(c);
case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var k;k=String(b).split(",");return 0<=ua(k,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var l;var m=a.ignore_case?"i":void 0;try{var p=String(c)+m,r=rl.get(p);r||(r=new RegExp(c,m),rl.set(p,r));l=r.test(b)}catch(t){l=!1}return l;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return sl(b,c)}return!1};var vl=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var wl={},xl=encodeURI,Y=encodeURIComponent,yl=oc;var zl=function(a,b){if(!a)return!1;var c=oe(qe(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Al=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};wl.Lg=function(){var a=!1;return a};function Tm(){return E.gaGlobal=E.gaGlobal||{}}var Um=function(){var a=Tm();a.hid=a.hid||xa();return a.hid};var en=window,fn=document,gn=function(a){var b=en._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===en["ga-disable-"+a])return!0;try{var c=en.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=se("AMP_TOKEN",String(fn.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return fn.getElementById("__gaOptOutExtension")?!0:!1};function kn(a,b){delete b.eventModel[C.ab];if(a!==C.I){var c=b.getWithConfig(C.bc);if(sa(c)){I("GTM",26);for(var d={},e=0;e<c.length;e++){var f=c[e],h=b.getWithConfig(f);void 0!==h&&(d[f]=h)}b.eventModel=d}}mn(b.eventModel)}var mn=function(a){Ca(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[C.ka]||{};Ca(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var pn=function(a,b,c){Si(b,c,a)},qn=function(a,b,c){Si(b,c,a,!0)},sn=function(a,b){};
function rn(a,b){}var Z={a:{}};
Z.a.gaawc=["google"],function(){function a(b,c,d){for(var e=0;e<c.length;e++)b.hasOwnProperty(c[e])&&(b[c[e]]=d(b[c[e]]))}(function(b){Z.__gaawc=b;Z.__gaawc.b="gaawc";Z.__gaawc.g=!0;Z.__gaawc.priorityOverride=10})(function(b){var c=String(b.vtp_measurementId),d=Al(b.vtp_fieldsToSet,"name","value")||{};if(d.hasOwnProperty(C.ka)||b.vtp_userProperties){var e=d[C.ka]||{};n(Al(b.vtp_userProperties,"name","value"),e);d[C.ka]=e}a(d,C.Ee,function(f){return Ea(f)});a(d,C.He,function(f){return Number(f)});
d.send_page_view=b.vtp_sendPageView;Ti(d,c);G(b.vtp_gtmOnSuccess)})}();Z.a.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.b="ctv";Z.__ctv.g=!0;Z.__ctv.priorityOverride=0})(function(){return"145"})}();
Z.a.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var A=[],B=x.split(","),z=0;z<B.length;z++){var D=Number(B[z]);if(isNaN(D))return[];p.test(B[z])||A.push(D)}return A}function c(){var x=0,A=0;return function(){var B=xk(),z=B.height;x=Math.max(v.scrollLeft+B.width,x);A=Math.max(v.scrollTop+z,A);return{pg:x,qg:A}}}function d(){q=W("self");
u=q.document;v=u.scrollingElement||u.body&&u.body.parentNode;y=c()}function e(x,A,B,z){var D=l(A),H={},L;for(L in D){H.Ga=L;if(D.hasOwnProperty(H.Ga)){var N=Number(H.Ga);x<N||(Mk({event:"gtm.scrollDepth","gtm.scrollThreshold":N,"gtm.scrollUnits":B.toLowerCase(),"gtm.scrollDirection":z,"gtm.triggers":D[H.Ga].join(",")}),dk("sdl",A,function(P){return function(Q){delete Q[P.Ga];return Q}}(H),{}))}H={Ga:H.Ga}}}function f(){var x=y(),A=x.pg,B=x.qg,z=A/v.scrollWidth*100,D=B/v.scrollHeight*100;e(A,"horiz.pix",
r.Mb,t.Jd);e(z,"horiz.pct",r.Lb,t.Jd);e(B,"vert.pix",r.Mb,t.ae);e(D,"vert.pct",r.Lb,t.ae);ck("sdl","pending",!1)}function h(){var x=250,A=!1;u.scrollingElement&&u.documentElement&&q.addEventListener&&(x=50,A=!0);var B=0,z=!1,D=function(){z?B=Ik(D,x):(B=0,f(),Qk("sdl")&&!a()&&(qc(q,"scroll",H),qc(q,"resize",H),ck("sdl","init",!1)));z=!1},H=function(){A&&y();B?z=!0:(B=Ik(D,x),ck("sdl","pending",!0))};return H}function k(x,A,B){if(A){var z=b(String(x));dk("sdl",B,function(D){for(var H=0;H<z.length;H++){var L=
String(z[H]);D.hasOwnProperty(L)||(D[L]=[]);D[L].push(A)}return D},{})}}function l(x){return ek("sdl",x,{})}function m(x){G(x.vtp_gtmOnSuccess);var A=x.vtp_uniqueTriggerId,B=x.vtp_horizontalThresholdsPixels,z=x.vtp_horizontalThresholdsPercent,D=x.vtp_verticalThresholdUnits,H=x.vtp_verticalThresholdsPixels,L=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case r.Mb:k(B,A,"horiz.pix");break;case r.Lb:k(z,A,"horiz.pct")}switch(D){case r.Mb:k(H,A,"vert.pix");break;case r.Lb:k(L,
A,"vert.pct")}Qk("sdl")?ek("sdl","pending")||(w||(d(),w=!0),G(function(){return f()})):(d(),w=!0,v&&(Rk("sdl"),ck("sdl","pending",!0),G(function(){f();if(a()){var N=h();pc(q,"scroll",N);pc(q,"resize",N)}else ck("sdl","init",!1)})))}var p=/^\s*$/,r={Lb:"PERCENT",Mb:"PIXELS"},t={ae:"vertical",Jd:"horizontal"},q,u,v,w=!1,y;(function(x){Z.__sdl=x;Z.__sdl.b="sdl";Z.__sdl.g=!0;Z.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):uj(function(){m(x)})})}();

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;$h(b,c)}(function(b){Z.__flc=b;Z.__flc.b="flc";Z.__flc.g=!0;Z.__flc.priorityOverride=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=Al(b.vtp_customVariable||[],"key","value")||{},e={qb:b.vtp_activityTag,Sc:c,Na:b.vtp_conversionCookiePrefix||void 0,Rb:void 0,X:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,Tc:b.vtp_advertiserId,Wc:b.vtp_groupTag,C:b.vtp_gtmOnFailure,D:b.vtp_gtmOnSuccess,
hc:b.vtp_useImageTag?void 0:b.vtp_url,protocol:"",od:void 0,rd:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,uc:b.vtp_transactionVariable,transactionId:void 0,vc:b.vtp_userVariable,vd:d};var f=!Sc(C.o)&&void 0!=U(C.N)&&!1!==U(C.N);e.zb=f;if(b.vtp_enableAttribution){var h=b.vtp_attributionFields||[];if(h.length){T("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,W("google_attr").build([Al(h,
"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();

Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(ge(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=U("gtm.referrer",1)||F.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?oe(qe(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Lk(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=ak(c,"gtm.click");Mk(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!Qk("cl")){var c=W("document");pc(c,"click",a,!0);Rk("cl")}G(b.vtp_gtmOnSuccess)})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0;Z.__k.priorityOverride=0})(function(a){return Ok(a.vtp_name,U("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0;Z.__r.priorityOverride=0})(function(a){return xa(a.vtp_min,a.vtp_max)})}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=U("gtm.url",1);c=c||Jk();var d=b[a("vtp_component")];if(!d||"URL"==d)return Lk(String(c));var e=qe(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?sa(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var p=0;p<m.length;p++){var r=oe(e,"QUERY",void 0,void 0,m[p]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=oe(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=U(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){var a,b={},c=function(e){Vc(function(){d(e)},[C.H,C.o])},d=function(e){var f={},h={},k={},l={},m={};if(e.vtp_gaSettings){var p=e.vtp_gaSettings;n(Al(p.vtp_fieldsToSet,"fieldName","value"),h);n(Al(p.vtp_contentGroup,"index","group"),k);n(Al(p.vtp_dimension,"index","dimension"),l);n(Al(p.vtp_metric,"index","metric"),m);e.vtp_gaSettings=null;p.vtp_fieldsToSet=void 0;p.vtp_contentGroup=void 0;p.vtp_dimension=void 0;p.vtp_metric=void 0;var r=n(p);e=n(e,r)}n(Al(e.vtp_fieldsToSet,
"fieldName","value"),h);n(Al(e.vtp_contentGroup,"index","group"),k);n(Al(e.vtp_dimension,"index","dimension"),l);n(Al(e.vtp_metric,"index","metric"),m);Sc(C.H)||(h.storage="none"),Sc(C.o)||(h.allowAdFeatures=!1,h.storeGac=!1);var t=$g(e.vtp_functionName);if(qa(t)){var q="",u="";e.vtp_setTrackerName&&"string"==typeof e.vtp_trackerName?""!==e.vtp_trackerName&&(u=e.vtp_trackerName,q=u+"."):(u="gtm"+zd(),
q=u+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,
storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},y=function(O){var R=[].slice.call(arguments,0);R[0]=q+R[0];t.apply(window,R)},x=function(O,R){return void 0===R?R:O(R)},A=function(O,R){if(R)for(var Ba in R)R.hasOwnProperty(Ba)&&y("set",O+Ba,R[Ba])},B=function(){var O=function(wn,Lj,xn){if(!Va(Lj))return!1;for(var nd=Ja(Object(Lj),xn,[]),Ag=0;nd&&Ag<nd.length;Ag++)y(wn,nd[Ag]);return!!nd&&0<nd.length},R;
if(e.vtp_useEcommerceDataLayer){var Ba=!1;Ba||(R=U("ecommerce",1))}else e.vtp_ecommerceMacroData&&(R=e.vtp_ecommerceMacroData.ecommerce);if(!Va(R))return;R=Object(R);var Sa=Ja(h,"currencyCode",R.currencyCode);void 0!==Sa&&y("set","&cu",Sa);O("ec:addImpression",R,"impressions");if(O("ec:addPromo",R[R.promoClick?"promoClick":"promoView"],"promotions")&&
R.promoClick){y("ec:setAction","promo_click",R.promoClick.actionField);return}for(var za="detail checkout checkout_option click add remove purchase refund".split(" "),Na="refund purchase remove checkout checkout_option add click detail".split(" "),Wa=0;Wa<za.length;Wa++){var nb=R[za[Wa]];if(nb){O("ec:addProduct",nb,"products");y("ec:setAction",za[Wa],nb.actionField);if(Rd)for(var Db=0;Db<Na.length;Db++){var Cc=R[Na[Db]];if(Cc){Cc!==nb&&I("GTM",13);break}}break}}},
z=function(O,R,Ba){var Sa=0;if(O)for(var za in O)if(O.hasOwnProperty(za)&&(Ba&&v[za]||!Ba&&void 0===v[za])){var Na=w[za]?Ea(O[za]):O[za];"anonymizeIp"!=za||Na||(Na=void 0);R[za]=Na;Sa++}return Sa},D={name:u};z(h,D,!0);t("create",
e.vtp_trackingId||f.trackingId,D);y("set","&gtm",Jh(!0));Lc()&&y("set","&gcs",Tc());e.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(O,R){void 0!==e[R]&&y("set",O,e[R])})("nonInteraction","vtp_nonInteraction");A("contentGroup",
k);A("dimension",l);A("metric",m);var H={};z(h,H,!1)&&y("set",H);var L;e.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var O=h&&h.hitCallback;qa(O)&&O();e.vtp_gtmOnSuccess()});if("TRACK_EVENT"==e.vtp_trackType){e.vtp_enableEcommerce&&
(y("require","ec","ec.js"),B());var N={hitType:"event",eventCategory:String(e.vtp_eventCategory||f.category),eventAction:String(e.vtp_eventAction||f.action),eventLabel:x(String,e.vtp_eventLabel||f.label),eventValue:x(Da,e.vtp_eventValue||f.value)};z(L,N,!1);y("send",N);}else if("TRACK_SOCIAL"==e.vtp_trackType){}else if("TRACK_TRANSACTION"==e.vtp_trackType){}else if("TRACK_TIMING"==e.vtp_trackType){}else if("DECORATE_LINK"==e.vtp_trackType){}else if("DECORATE_FORM"==e.vtp_trackType){}else if("TRACK_DATA"==e.vtp_trackType){}else{e.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());if(e.vtp_doubleClick||"DISPLAY_FEATURES"==e.vtp_advertisingFeaturesType){var X="_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:X})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==e.vtp_advertisingFeaturesType){var va="_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");y("require","adfeatures",{cookieName:va})}L?y("send","pageview",L):y("send","pageview");e.vtp_autoLinkDomains&&ah(q,e.vtp_autoLinkDomains,!!e.vtp_useHashAutoLink,!!e.vtp_decorateFormsAutoLink);}if(!a){var ta=e.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";e.vtp_useInternalVersion&&!e.vtp_useDebugVersion&&(ta="internal/"+ta);a=!0;var Ga=vh(h._x_19,"/analytics.js"),
la=S("https:","http:","//www.google-analytics.com/"+ta,h&&h.forceSSL);T("analytics.js"===ta&&Ga?Ga:la,function(){var O=Yg();O&&O.loaded||e.vtp_gtmOnFailure();},e.vtp_gtmOnFailure)}}else G(e.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();



Z.a.ytl=["google"],function(){function a(){var w=Math.round(1E9*Math.random())+"";return F.getElementById(w)?a():w}function b(w,y){if(!w)return!1;for(var x=0;x<t.length;x++)if(0<=w.indexOf("//"+t[x]+"/"+y))return!0;return!1}function c(w){var y=-1!==w.indexOf("?")?"&":"?";if(-1<w.indexOf("origin="))return w+y+"enablejsapi=1";if(!u){var x=W("document");u=x.location.protocol+"//"+x.location.hostname;x.location.port&&(u+=":"+x.location.port)}return w+y+"enablejsapi=1&origin="+encodeURIComponent(u)}function d(w,
y){var x=w.getAttribute("src");if(b(x,"embed/")){if(0<x.indexOf("enablejsapi=1"))return!0;if(y)return w.setAttribute("src",c(x)),!0}return!1}function e(w,y){if(!w.getAttribute("data-gtm-yt-inspected-"+y.ud)&&(w.setAttribute("data-gtm-yt-inspected-"+y.ud,"true"),d(w,y.ve))){w.id||(w.id=a());var x=W("YT"),A=x.get(w.id);A||(A=new x.Player(w.id));var B=h(A,y),z={},D;for(D in B)z.Xa=D,B.hasOwnProperty(z.Xa)&&A.addEventListener(z.Xa,function(H){return function(L){return B[H.Xa](L.data)}}(z)),z={Xa:z.Xa}}}
function f(w){G(function(){function y(){for(var A=x.getElementsByTagName("iframe"),B=A.length,z=0;z<B;z++)e(A[z],w)}var x=W("document");y();mk(y)})}function h(w,y){var x,A;function B(){fa=Gk(function(){return{url:V,title:aa,oe:J,ng:w.getCurrentTime(),playbackRate:X}},y.ud,w.getIframe());J=0;aa=V="";X=1;return z}function z(la){switch(la){case q.PLAYING:J=Math.round(w.getDuration());V=w.getVideoUrl();if(w.getVideoData){var O=w.getVideoData();aa=O?O.title:""}X=w.getPlaybackRate();y.hg?fa.Ub("start"):
fa.Nc();M=m(y.dh,y.bh,w.getDuration());return D(la);default:return z}}function D(){va=w.getCurrentTime();ta=(new Date).getTime();fa.lh();ma();return H}function H(la){var O;switch(la){case q.ENDED:return N(la);case q.PAUSED:O="pause";case q.BUFFERING:var R=w.getCurrentTime()-va;O=1<Math.abs(((new Date).getTime()-ta)/1E3*X-R)?"seek":O||"buffering";w.getCurrentTime()&&(y.gg?fa.Ub(O):fa.Nc());Q();return L;case q.UNSTARTED:return B(la);default:return H}}function L(la){switch(la){case q.ENDED:return N(la);
case q.PLAYING:return D(la);case q.UNSTARTED:return B(la);default:return L}}function N(){for(;A;){var la=x;Hk(A);la()}y.fg&&fa.Ub("complete",1);return B(q.UNSTARTED)}function P(){}function Q(){A&&(Hk(A),A=0,x=P)}function ma(){if(M.length&&0!==X){var la=-1,O;do{O=M[0];if(O.Da>w.getDuration())return;la=(O.Da-w.getCurrentTime())/X;if(0>la&&(M.shift(),0===M.length))return}while(0>la);x=function(){A=0;x=P;0<M.length&&M[0].Da===O.Da&&(M.shift(),fa.Ub("progress",O.Me,O.Te));ma()};A=Ik(x,1E3*la)}}var fa,
M=[],J,V,aa,X,va,ta,Ga=B(q.UNSTARTED);A=0;x=P;return{onStateChange:function(la){Ga=Ga(la)},onPlaybackRateChange:function(la){va=w.getCurrentTime();ta=(new Date).getTime();fa.Nc();X=la;Q();ma()}}}function k(w){for(var y=w.split(","),x=y.length,A=[],B=0;B<x;B++){var z=parseInt(y[B],10);isNaN(z)||100<z||0>z||A.push(z/100)}A.sort(function(D,H){return D-H});return A}function l(w){for(var y=w.split(","),x=y.length,A=[],B=0;B<x;B++){var z=parseInt(y[B],10);isNaN(z)||0>z||A.push(z)}A.sort(function(D,H){return D-
H});return A}function m(w,y,x){var A=w.map(function(D){return{Da:D,Te:D,Me:void 0}});if(!y.length)return A;var B=y.map(function(D){return{Da:D*x,Te:void 0,Me:D}});if(!A.length)return B;var z=A.concat(B);z.sort(function(D,H){return D.Da-H.Da});return z}function p(w){w.vtp_triggerStartOption?r(w):Kg(function(){r(w)})}function r(w){var y=!!w.vtp_captureStart,x=!!w.vtp_captureComplete,A=!!w.vtp_capturePause,B=k(w.vtp_progressThresholdsPercent+""),z=l(w.vtp_progressThresholdsTimeInSeconds+""),D=!!w.vtp_fixMissingApi;
if(y||x||A||B.length||z.length){var H={hg:y,fg:x,gg:A,bh:B,dh:z,ve:D,ud:void 0===w.vtp_uniqueTriggerId?"":w.vtp_uniqueTriggerId},L=W("YT"),N=function(){f(H)};G(w.vtp_gtmOnSuccess);if(L)L.ready&&L.ready(N);else{var P=W("onYouTubeIframeAPIReady");Nk("onYouTubeIframeAPIReady",function(){P&&P();N()});G(function(){for(var Q=W("document"),ma=Q.getElementsByTagName("script"),fa=ma.length,M=0;M<fa;M++){var J=ma[M].getAttribute("src");if(b(J,"iframe_api")||b(J,"player_api"))return}for(var V=Q.getElementsByTagName("iframe"),
aa=V.length,X=0;X<aa;X++)if(!v&&d(V[X],H.ve)){T("https://www.youtube.com/iframe_api");v=!0;break}})}}else G(w.vtp_gtmOnSuccess)}var t=["www.youtube.com","www.youtube-nocookie.com"],q={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},u,v=!1;Z.__ytl=p;Z.__ytl.b="ytl";Z.__ytl.g=!0;Z.__ytl.priorityOverride=0}();
Z.a.opt=["google"],function(){var a,b=function(c){var d={};if(c.vtp_gaSettings){var e=c.vtp_gaSettings;n(Al(e.vtp_fieldsToSet,"fieldName","value"),d);c.vtp_gaSettings=null;e.vtp_fieldsToSet=void 0;var f=n(e);c=n(c,f)||{}}n(Al(c.vtp_fieldsToSet,"fieldName","value"),d);var h=$g(c.vtp_functionName);if(qa(h)){h.r=!0;var k="",l="";c.vtp_setTrackerName&&"string"===typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(l=c.vtp_trackerName,k=l+"."):(l="gtm"+zd(),k=l+".");var m={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},p={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},r=function(y,x,A){var B=0,z;for(z in y)if(y.hasOwnProperty(z)&&
(A&&m[z]||!A&&void 0===m[z])){var D=p[z]?Ea(y[z]):y[z];"anonymizeIp"!==z||D||(D=void 0);x[z]=D;B++}return B},t={name:l};r(d,t,!0);var q={"&gtm":Jh(!0)};r(d,q,!1);var u=encodeURI(S("https:","http:","//www.google-analytics.com/"+(c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!d.forceSSL));h("create",c.vtp_trackingId,t);h(k+"set",q);h(k+"require",c.vtp_optimizeContainerId,{dataLayer:"dataLayer"});h(c.vtp_gtmOnSuccess);h(k+"require","render");a||(a=!0,T(u,function(){return Yg().loaded||
c.vtp_gtmOnFailure()},c.vtp_gtmOnFailure));var v=W("dataLayer"),w=v&&v.hide;w&&(w.end||!0===w["GTM-5SB5C3"])&&(w[c.vtp_optimizeContainerId]=!0)}else G(c.vtp_gtmOnFailure)};Z.__opt=b;Z.__opt.b="opt";Z.__opt.g=!0;Z.__opt.priorityOverride=0}();
Z.a.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.b="cid";Z.__cid.g=!0;Z.__cid.priorityOverride=0})(function(){return K.s})}();


Z.a.aev=["google"],function(){function a(q,u){var v=ge(q,"gtm");if(v)return v[u]}function b(q,u,v,w){w||(w="element");var y=q+"."+u,x;if(p.hasOwnProperty(y))x=p[y];else{var A=a(q,w);if(A&&(x=v(A),p[y]=x,r.push(y),35<r.length)){var B=r.shift();delete p[B]}}return x}function c(q,u,v){var w=a(q,t[u]);return void 0!==w?w:v}function d(q,u){if(!q)return!1;var v=e(Jk());sa(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<u.length;y++)if(u[y]instanceof RegExp){if(u[y].test(q))return!1}else{var x=
u[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;w.push(e(x))}}return!zl(q,w)}function e(q){m.test(q)||(q="http://"+q);return oe(qe(q),"HOST",!0)}function f(q,u,v){switch(q){case "SUBMIT_TEXT":return b(u,"FORM."+q,h,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+q,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(u,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(q){switch(q.tagName.toLowerCase()){case "input":return rc(q,"value");case "button":return sc(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var u=0,v=0;v<q.elements.length;v++)hk(q.elements[v])&&u++;return u}}function l(q,u,v){var w=a(q,"interactedFormField");return w&&rc(w,u)||v}var m=/^https?:\/\//i,p={},r=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(q){var u=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||
v;case "TEXT":return b(u,w,sc)||v;case "URL":var x;a:{var A=String(a(u,"elementUrl")||v||""),B=qe(A),z=String(q.vtp_component||"URL");switch(z){case "URL":x=A;break a;case "IS_OUTBOUND":x=d(A,q.vtp_affiliatedDomains);break a;default:x=oe(B,z,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var D;if(void 0===q.vtp_attribute)D=c(u,w,v);else{var H=q.vtp_attribute,L=a(u,"element");D=L&&rc(L,H)||v||""}return D;case "MD":var N=q.vtp_mdValue,P=b(u,"MD",tk);return N&&P?wk(P,N)||
v:P||v;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),u,v);default:return c(u,w,v)}})}();
Z.a.gas=["google"],function(){function a(b,c,d){b.vtp_fieldsToSet=b.vtp_fieldsToSet||[];var e=b[c];void 0!==e&&(b.vtp_fieldsToSet.push({fieldName:d,value:e}),delete b[c])}(function(b){Z.__gas=b;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(b){var c=n(b),d=c;d[Jb.wa]=null;d[Jb.jf]=null;c=d;a(c,"vtp_cookieDomain","cookieDomain");return c})}();


Z.a.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.b="remm";Z.__remm.g=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=0;f<c.length;f++){var h=c[f].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[f].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();
Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Al(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){G(a.vtp_gtmOnFailure)})}();
Z.a.hid=["google"],function(){(function(a){Z.__hid=a;Z.__hid.b="hid";Z.__hid.g=!0;Z.__hid.priorityOverride=0})(function(){return Xj.Kb})}();
Z.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=F.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var p=k.getAttribute("data-gtmsrc");p&&(m.src=p,kc(m,l));d.insertBefore(m,null);p||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(t){G(h)}}}var c=function(d){if(F.body){var e=
d.vtp_gtmOnFailure,f=Uk(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Yc,k=f.D;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(F.body,tc(h),k,e)()}else Ik(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();

Z.a.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.b="dbg";Z.__dbg.g=!0;Z.__dbg.priorityOverride=0})(function(){return!1})}();




Z.a.lcl=[],function(){function a(){var c=W("document"),d=0,e=function(f){var h=f.target;if(h&&3!==f.which&&!(f.Jg||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;h=uc(h,["a","area"],100);if(!h)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=ek("lcl",k?"nv.mwt":"mwt",0),m;m=k?ek("lcl","nv.ids",[]):ek("lcl","ids",[]);if(m.length){var p=ak(h,"gtm.linkClick",m);if(b(f,h,c)&&!k&&l&&h.href){var r=String(Tk(h,"rel")||""),t=!!wa(r.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
t&&I("GTM",36);var q=W((Tk(h,"target")||"_self").substring(1)),u=!0;if(Mk(p,Qj(function(){var v;if(v=u&&q){var w;a:if(t){var y;try{y=new MouseEvent(f.type)}catch(x){if(!c.createEvent){w=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.Jg=!0;f.target.dispatchEvent(y);w=!0}else w=!1;v=!w}v&&(q.location.href=Tk(h,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else Mk(p,function(){},l||2E3);return!0}}};pc(c,"click",e,!1);pc(c,"auxclick",e,!1)}
function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=Tk(d,"href"),h=f.indexOf("#"),k=Tk(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=Lk(f),m=Lk(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||
0>=f)f=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(f,m)};dk("lcl","mwt",k,0);e||dk("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};dk("lcl","ids",l,[]);e||dk("lcl","nv.ids",l,[]);Qk("lcl")||(a(),Rk("lcl"));G(c.vtp_gtmOnSuccess)})}();
Z.a.evl=["google"],function(){function a(){var f=Number(U("gtm.start"))||0;return(new Date).getTime()-f}function b(f,h,k,l){function m(){if(!zk(f.target)){h.has(d.Nb)||h.set(d.Nb,""+a());h.has(d.Dc)||h.set(d.Dc,""+a());var r=0;h.has(d.Pb)&&(r=Number(h.get(d.Pb)));r+=100;h.set(d.Pb,""+r);if(r>=k){var t=ak(f.target,"gtm.elementVisibility",[h.h]),q=yk(f.target);t["gtm.visibleRatio"]=Math.round(1E3*q)/10;t["gtm.visibleTime"]=k;t["gtm.visibleFirstTime"]=Number(h.get(d.Dc));t["gtm.visibleLastTime"]=Number(h.get(d.Nb));
Mk(t);l()}}}if(!h.has(d.eb)&&(0==k&&m(),!h.has(d.Ha))){var p=W("self").setInterval(m,100);h.set(d.eb,p)}}function c(f){f.has(d.eb)&&(W("self").clearInterval(Number(f.get(d.eb))),f.i(d.eb))}var d={eb:"polling-id-",Dc:"first-on-screen-",Nb:"recent-on-screen-",Pb:"total-visible-time-",Ha:"has-fired-"},e=function(f,h){this.element=f;this.h=h};e.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.h)};e.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.h)};e.prototype.set=function(f,h){this.element.setAttribute("data-gtm-vis-"+f+this.h,h)};e.prototype.i=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.h)};(function(f){Z.__evl=f;Z.__evl.b="evl";Z.__evl.g=!0;Z.__evl.priorityOverride=0})(function(f){function h(){var y=!1,x=null;if("CSS"===l){try{x=Xc(m)}catch(H){I("GTM",46)}y=!!x&&v.length!=x.length}else if("ID"===l){var A=F.getElementById(m);A&&(x=[A],y=1!=v.length||v[0]!==A)}x||(x=[],y=0<v.length);if(y){for(var B=0;B<v.length;B++){var z=
new e(v[B],q);c(z)}v=[];for(var D=0;D<x.length;D++)v.push(x[D]);0<=w&&Fk(w);0<v.length&&(w=Ek(k,v,[t]))}}function k(y){var x=new e(y.target,q);y.intersectionRatio>=t?x.has(d.Ha)||b(y,x,r,"ONCE"===u?function(){for(var A=0;A<v.length;A++){var B=new e(v[A],q);B.set(d.Ha,"1");c(B)}Fk(w);if(p&&lk)for(var z=0;z<lk.length;z++)lk[z]===h&&lk.splice(z,1)}:function(){x.set(d.Ha,"1");c(x)}):(c(x),"MANY_PER_ELEMENT"===u&&x.has(d.Ha)&&(x.i(d.Ha),x.i(d.Pb)),x.i(d.Nb))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var p=!!f.vtp_useDomChangeListener,r=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,t=(Number(f.vtp_onScreenRatio)||50)/100,q=f.vtp_uniqueTriggerId,u=f.vtp_firingFrequency,v=[],w=-1;h();p&&mk(h);G(f.vtp_gtmOnSuccess)})}();


var tn={};tn.macro=function(a){if(Xj.Lc.hasOwnProperty(a))return Xj.Lc[a]},tn.onHtmlSuccess=Xj.ne(!0),tn.onHtmlFailure=Xj.ne(!1);tn.dataLayer=be;tn.callback=function(a){xd.hasOwnProperty(a)&&qa(xd[a])&&xd[a]();delete xd[a]};function un(){od[K.s]=tn;La(yd,Z.a);Ab=Ab||Xj;Bb=Bg}
function vn(){zc.gtm_3pds=!0;zc.gtag_cs_api=!0;od=E.google_tag_manager=E.google_tag_manager||{};if(od[K.s]){var a=od.zones;a&&a.unregisterChild(K.s);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)tb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)wb.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)vb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],r={},t=0;t<p.length;t++)r[p[t][0]]=Array.prototype.slice.call(p[t],1);ub.push(r)}yb=Z;zb=tl;un();Wj();Fg=!1;Gg=0;if("interactive"==F.readyState&&!F.createEventObject||"complete"==F.readyState)Ig();else{pc(F,
"DOMContentLoaded",Ig);pc(F,"readystatechange",Ig);if(F.createEventObject&&F.documentElement.doScroll){var q=!0;try{q=!E.frameElement}catch(y){}q&&Jg()}pc(E,"load",Ig)}rj=!1;"complete"===F.readyState?tj():pc(E,"load",tj);a:{if(!Rd)break a;E.setInterval(Sd,864E5);
}ud=(new Date).getTime();}}
(function(a){a()})(vn);

})()
