(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_template-openapi-weixin-sendMessage-sendMessage"],{"2c3c":function(n,t,e){var i=e("fb1c");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=e("967d").default;a("cae4e7b8",i,!0,{sourceMap:!1,shadowMode:!1})},"3c81":function(n,t,e){"use strict";e.r(t);var i=e("5f80"),a=e("e86e");for(var s in a)["default"].indexOf(s)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(s);e("da3d");var u=e("828b"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"6c21155c",null,!1,i["a"],void 0);t["default"]=c.exports},"4a8d":function(n,t,e){"use strict";e("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("bf0f");var i=uni.vk,a={data:function(){return{data:{}}},onLoad:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i=uni.vk,this.options=n,this.init(n)},methods:{init:function(n){},subscribeMessage1:function(){uni.requestSubscribeMessage({tmplIds:["UmINo5I6IcqktIwNt2TVorkU7f4dzd4eyNjfvOiwEC0","uf7MotUXQ3GZWx-XftvsWtT355oNaEdMHuW_zt8WAcQ","ZttnDpfQvZeu2BaqM_-rpnDp6eebXnXDsJ2nJkenT9k"]})},subscribeMessage2:function(){uni.requestSubscribeMessage({tmplIds:["iC3hOtB2iSy1T0cqy7YtyIamcA3qt2z1wMEOA76IJtA","w4oStuL2rl6Gqpy91mgN7tzk6MDt6eFPs8nofnfMcNM","NcspDBQpH6CGHos3mMADrrQpEv2gHmtfOPa5KTLs92E"]})},sendMessage:function(n){var t=this;new Promise((function(n,t){n(i.getVuex("$user.userInfo.wx_openid.mp-weixin"))})).then((function(n){i.callFunction({url:"template/openapi/weixin/pub/sendMessage",title:"请求中...",data:{openid:n},success:function(n){t.data=n}})}))}},computed:{}};t.default=a},"5f80":function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){}));var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"app"},[e("v-uni-button",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.subscribeMessage1.apply(void 0,arguments)}}},[n._v("订阅一次消息1")]),e("v-uni-button",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.subscribeMessage2.apply(void 0,arguments)}}},[n._v("订阅一次消息2")]),e("v-uni-button",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.sendMessage.apply(void 0,arguments)}}},[n._v("发送订阅消息")]),e("v-uni-view",[e("v-uni-text",{attrs:{space:"ensp"}},[n._v(n._s(JSON.stringify(n.data,null,2)))])],1)],1)},a=[]},da3d:function(n,t,e){"use strict";var i=e("2c3c"),a=e.n(i);a.a},e86e:function(n,t,e){"use strict";e.r(t);var i=e("4a8d"),a=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(s);t["default"]=a.a},fb1c:function(n,t,e){var i=e("c86c");t=i(!1),t.push([n.i,".app[data-v-6c21155c]{padding:%?30?%}.app uni-button[data-v-6c21155c]{margin-bottom:%?30?%}.tips[data-v-6c21155c]{font-size:%?28?%;color:#999;margin-bottom:%?32?%}",""]),n.exports=t}}]);