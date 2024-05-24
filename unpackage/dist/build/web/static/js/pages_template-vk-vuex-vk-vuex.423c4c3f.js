(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_template-vk-vuex-vk-vuex"],{"0c14":function(e,t,n){var r=n("c86c");t=r(!1),t.push([e.i,".content[data-v-3c0c0170]{padding:15px;font-size:%?28?%;color:#303133}.content uni-input[data-v-3c0c0170]{height:46px;border:solid 1px #ddd;border-radius:5px;margin-bottom:15px;padding:0 15px;display:block}.content uni-button[data-v-3c0c0170]{margin-bottom:15px}.content uni-navigator[data-v-3c0c0170]{display:inline-block;color:#007aff;border-bottom:solid 1px #007aff;font-size:16px;line-height:24px;margin-bottom:15px}.tips[data-v-3c0c0170]{text-align:center;line-height:20px;font-size:14px;color:#999;margin-bottom:20px}",""]),e.exports=t},"192b":function(e,t,n){"use strict";n.r(t);var r=n("6392"),u=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=u.a},"3b97":function(e,t,n){"use strict";n.r(t);var r=n("5102"),u=n("192b");for(var a in u)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return u[e]}))}(a);n("5383");var o=n("828b"),i=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,"3c0c0170",null,!1,r["a"],void 0);t["default"]=i.exports},5102:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",[e._v("Vuex可以用来做全局状态管理。\n\t\t而此例子是演示将当前登录用户信息存入Vuex，以便于在其他页面中也能直接渲染或获取用户信息")]),n("v-uni-view",{staticStyle:{"margin-top":"10rpx"}},[e._v("说明:"),n("v-uni-view",{staticStyle:{"margin-top":"10rpx"}},[e._v("1、"),n("v-uni-text",[e._v("$user")]),e._v("对应 store/modules 目录下的js文件"),n("br"),e._v("以下两个方式均可以对 vuex 数据进行操作"),n("br"),n("br"),e._v("方式一："),n("br"),e._v("获取 Vuex 数据："),n("br"),e._v("vk.getVuex('$user.userInfo')"),n("br"),e._v("更新 Vuex 数据："),n("br"),e._v("vk.setVuex('$user.userInfo.avatar', avatar)"),n("br"),n("br"),e._v("方式二："),n("br"),e._v("获取 Vuex 数据："),n("br"),e._v("vk.vuex.get('$user.userInfo')"),n("br"),e._v("更新 Vuex 数据："),n("br"),e._v("vk.vuex.set('$user.userInfo.avatar', avatar);"),n("br"),e._v("触发 Vuex action："),n("br"),e._v("vk.vuex.dispatch('$user/addFootprint', data);"),n("br")],1)],1),e.vk.getVuex("$user.userInfo._id")?n("v-uni-view",{staticStyle:{color:"red","margin-top":"10rpx","font-size":"36rpx"}},[e._v("当前登录用户："+e._s(e.vk.getVuex("$user.userInfo.nickname")||e.vk.getVuex("$user.userInfo.username"))),n("v-uni-image",{staticStyle:{width:"70rpx",height:"70rpx","border-radius":"50%"},attrs:{src:e.vk.getVuex("$user.userInfo.avatar"),mode:"aspectFill"}})],1):e._e(),n("v-uni-view",{staticStyle:{"margin-top":"20rpx"}},[n("v-uni-input",{attrs:{type:"text",placeholder:"用户名/邮箱/手机号"},model:{value:e.form1.username,callback:function(t){e.$set(e.form1,"username",t)},expression:"form1.username"}}),n("v-uni-input",{attrs:{type:"text",password:"true",placeholder:"密码"},model:{value:e.form1.password,callback:function(t){e.$set(e.form1,"password",t)},expression:"form1.password"}}),n("v-uni-button",{attrs:{type:"default"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.register.apply(void 0,arguments)}}},[e._v("注册")]),n("v-uni-button",{attrs:{type:"default"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.login.apply(void 0,arguments)}}},[e._v("登录")]),n("v-uni-button",{attrs:{type:"default"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.uploadAvatar.apply(void 0,arguments)}}},[e._v("上传到云储存(并设置为头像)")]),n("v-uni-button",{attrs:{type:"default"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.logout.apply(void 0,arguments)}}},[e._v("退出")])],1)],1)},u=[]},5383:function(e,t,n){"use strict";var r=n("56e8"),u=n.n(r);u.a},"56e8":function(e,t,n){var r=n("0c14");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var u=n("967d").default;u("061774fe",r,!0,{sourceMap:!1,shadowMode:!1})},6392:function(e,t,n){"use strict";n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=uni.vk,u={data:function(){return{form1:{username:"admin",password:"123456"}}},onLoad:function(e){r=uni.vk},methods:{register:function(){var e=this.form1;r.userCenter.register({data:e,success:function(e){r.alert("注册成功!")}})},login:function(){var e=this.form1;r.userCenter.login({data:e,success:function(e){r.setVuex("$user.userInfo",e.userInfo),r.alert("登陆成功!")}})},logout:function(){r.userCenter.logout({success:function(e){r.setVuex("$user.userInfo",{}),r.alert("退出成功")}})},uploadAvatar:function(){uni.chooseImage({count:1,sizeType:["compressed"],success:function(e){r.uploadFile({title:"上传中...",filePath:e.tempFilePaths[0],fileType:"image",success:function(e){r.userCenter.setAvatar({data:{avatar:e.url},success:function(){r.setVuex("$user.userInfo.avatar",e.url)}})}})}})}},computed:{}};t.default=u}}]);