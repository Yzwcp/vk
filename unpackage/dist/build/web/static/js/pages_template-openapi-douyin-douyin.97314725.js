(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_template-openapi-douyin-douyin"],{"02d3":function(t,n,e){"use strict";e.r(n);var i=e("7ccb"),a=e("eb61");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("4ca9");var c=e("828b"),u=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"449eabe5",null,!1,i["a"],void 0);n["default"]=u.exports},"083d":function(t,n,e){var i=e("4891");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("967d").default;a("60472ab0",i,!0,{sourceMap:!1,shadowMode:!1})},"1fcc":function(t,n,e){"use strict";e("6a54"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=uni.vk,a={data:function(){return{imageUrl:"",data:{}}},onLoad:function(t){i=uni.vk,this.options=t,this.init(t)},methods:{init:function(t){},code2Session:function(){i.toast("请在抖音小程序中打开")},getMiniCode:function(){var t=this;i.callFunction({url:"template/openapi/douyin/pub/getMiniCode",title:"请求中...",data:{},success:function(n){t.data=n,t.imageUrl=n.base64}})}}};n.default=a},4891:function(t,n,e){var i=e("c86c");n=i(!1),n.push([t.i,".app[data-v-449eabe5]{padding:%?30?%}.app uni-button[data-v-449eabe5]{margin-bottom:%?30?%}.tips[data-v-449eabe5]{font-size:%?28?%;color:#999;margin-bottom:%?32?%}",""]),t.exports=n},"4ca9":function(t,n,e){"use strict";var i=e("083d"),a=e.n(i);a.a},"7ccb":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"app"},[e("v-uni-button",{attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.code2Session.apply(void 0,arguments)}}},[t._v("code2Session")]),e("v-uni-button",{attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.getMiniCode.apply(void 0,arguments)}}},[t._v("生成带参数的小程序码")]),t.imageUrl?e("v-uni-view",{staticStyle:{"text-align":"center"}},[e("v-uni-image",{staticStyle:{width:"400rpx",height:"400rpx"},attrs:{src:t.imageUrl}})],1):t._e(),e("v-uni-button",{attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.vk.navigateTo("msgSecCheck/msgSecCheck")}}},[t._v("文本安全检测")]),e("v-uni-button",{attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.vk.navigateTo("imgSecCheck/imgSecCheck")}}},[t._v("图片安全检测")]),e("v-uni-view",[e("v-uni-text",{attrs:{space:"ensp"}},[t._v(t._s(JSON.stringify(t.data,null,2)))])],1)],1)},a=[]},eb61:function(t,n,e){"use strict";e.r(n);var i=e("1fcc"),a=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a}}]);