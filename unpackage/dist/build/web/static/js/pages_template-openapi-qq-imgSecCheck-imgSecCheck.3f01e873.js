(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_template-openapi-qq-imgSecCheck-imgSecCheck"],{1684:function(t,e,n){"use strict";var a=n("b33e"),i=n.n(a);i.a},"1dee":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"app"},[n("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImage.apply(void 0,arguments)}}},[t._v("上传图片,并检测图片是否违规")]),n("v-uni-text",{attrs:{space:"ensp"}},[t._v(t._s(JSON.stringify(t.data,null,2)))])],1)},i=[]},2592:function(t,e,n){"use strict";n.r(e);var a=n("1dee"),i=n("389f");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("1684");var u=n("828b"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"7704efe4",null,!1,a["a"],void 0);e["default"]=c.exports},"389f":function(t,e,n){"use strict";n.r(e);var a=n("b002"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},b002:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=uni.vk,i={data:function(){return{data:{},form1:{}}},onLoad:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a=uni.vk,this.options=t,this.init(t)},methods:{init:function(t){},chooseImage:function(){var t=this;uni.chooseImage({count:1,sizeType:["compressed"],success:function(e){var n=e.tempFiles[0];a.pubfn.fileToBase64({file:n}).then((function(e){if(n.size/1024/1024>1)return a.toast("图片不能大于1M","none"),!1;a.callFunction({url:"template/openapi/qq/pub/imgSecCheck",title:"检测中...",data:{base64:e},success:function(e){t.data=e},fail:function(e){t.data=e,a.toast(e.msg,"none")}})}))}})}},computed:{}};e.default=i},b33e:function(t,e,n){var a=n("dc2e");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("967d").default;i("3409f0da",a,!0,{sourceMap:!1,shadowMode:!1})},dc2e:function(t,e,n){var a=n("c86c");e=a(!1),e.push([t.i,".app[data-v-7704efe4]{padding:%?30?%}.app uni-button[data-v-7704efe4]{margin-bottom:%?30?%}",""]),t.exports=e}}]);