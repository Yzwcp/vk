(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_template-db-test-db-test"],{3061:function(t,n,i){var e=i("4a4c");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("967d").default;a("8ed4a3e0",e,!0,{sourceMap:!1,shadowMode:!1})},"46a9":function(t,n,i){"use strict";i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){}));var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"app"},[i("v-uni-scroll-view",{staticStyle:{"max-height":"500rpx"},attrs:{"scroll-y":!0}},t._l(t.data.rows,(function(n,e){return i("v-uni-view",{key:n._id},[t._v(t._s(e+1)+": {_id: "+t._s(n._id.substring(20))+", money: "+t._s(n.money)+"} 距您 "+t._s(t.calcLocationFn(n.position,t.myPosition))+" km")])})),1),i("v-uni-view",{staticStyle:{"margin-bottom":"20rpx","font-size":"36rpx"}},[t._v("当前共有: "+t._s(t.data.total)+" 条记录")]),i("v-uni-button",{staticStyle:{"margin-left":"50rpx"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.pageTo("list/list")}}},[t._v("查看更多")]),i("v-uni-view",{staticStyle:{display:"flex"}},[i("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.add()}}},[t._v("add(添加一条记录)")]),i("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.adds()}}},[t._v("adds(添加多条记录)")])],1),i("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.count()}}},[t._v("count(获取集合共有多少条记录)")]),i("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.del()}}},[t._v("del(删除集合所有数据)")]),i("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.findById()}}},[t._v("findById(根据id获取一条记录)")]),i("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.findByWhereJson()}}},[t._v("findByWhereJson(根据条件获取一条记录)")]),i("v-uni-view",[i("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.getList1()}}},[t._v("select(获取多条数据)")]),i("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.selects()}}},[t._v("selects(万能连表查询)")])],1),i("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.sample()}}},[t._v("随机获取1条记录（一般用于抽奖）")]),i("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.update()}}},[t._v("update(修改记录)")]),i("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.updateById()}}},[t._v("updateById(修改并返回修改后的数据)")]),i("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.updateAndReturn()}}},[t._v("updateAndReturn(原子操作)")]),i("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.groupCount()}}},[t._v("groupCount(分组count)")]),i("v-uni-view",{staticStyle:{display:"flex"}},[i("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.sum()}}},[t._v("sum(取总和值)")]),i("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.avg()}}},[t._v("avg(取平均值)")])],1),i("v-uni-view",{staticStyle:{display:"flex"}},[i("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.max()}}},[t._v("max(取最大值)")]),i("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.min()}}},[t._v("min(取最小值)")])],1),i("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.getGeoList()}}},[t._v("geo(地理位置 搜索4公里内)")]),i("v-uni-view",[t._v(t._s(JSON.stringify(t.item)))])],1)},a=[]},"4a4c":function(t,n,i){var e=i("c86c");n=e(!1),n.push([t.i,".app[data-v-28d8cb80]{padding:15px}.app uni-input[data-v-28d8cb80]{height:46px;border:solid 1px #ddd;border-radius:5px;margin-bottom:15px;padding:0 15px}.app uni-button[data-v-28d8cb80]{margin-bottom:15px;font-size:%?32?%;margin-left:auto;margin-right:auto;padding-left:14px;padding-right:14px}.app uni-navigator[data-v-28d8cb80]{display:inline-block;color:#007aff;border-bottom:solid 1px #007aff;font-size:16px;line-height:24px;margin-bottom:15px}",""]),t.exports=n},cce7:function(t,n,i){"use strict";i.r(n);var e=i("46a9"),a=i("e300");for(var u in a)["default"].indexOf(u)<0&&function(t){i.d(n,t,(function(){return a[t]}))}(u);i("dac9");var c=i("828b"),o=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,"28d8cb80",null,!1,e["a"],void 0);n["default"]=o.exports},dac9:function(t,n,i){"use strict";var e=i("3061"),a=i.n(e);a.a},e300:function(t,n,i){"use strict";i.r(n);var e=i("f437"),a=i.n(e);for(var u in e)["default"].indexOf(u)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(u);n["default"]=a.a},f437:function(t,n,i){"use strict";i("6a54"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,i("d4b5");var e=uni.vk,a={data:function(){return{form1:{},data:{},item:{},myPosition:{longitude:120.12792,latitude:30.228932}}},onLoad:function(t){e=uni.vk,this.init(t)},methods:{init:function(t){this.getList(!0)},pageTo:function(t){e.navigateTo(t)},add:function(){var t=this;e.callFunction({url:"template/db_api/pub/add",title:"请求中...",success:function(n){e.alert(JSON.stringify(n)),t.item=n,t.getList()}})},adds:function(){var t=this;e.callFunction({url:"template/db_api/pub/adds",title:"请求中...",success:function(n){e.alert(JSON.stringify(n)),t.item=n,t.getList()}})},count:function(){var t=this;e.callFunction({url:"template/db_api/pub/count",title:"请求中...",success:function(n){e.alert(JSON.stringify(n)),t.item=n}})},del:function(){var t=this;e.callFunction({url:"template/db_api/pub/del",title:"请求中...",success:function(n){e.alert(JSON.stringify(n)),t.item=n,t.getList()}})},getFirstId:function(){var t;return this.data&&this.data.rows[0]&&this.data.rows[0]._id&&(t=this.data.rows[0]._id),t},findById:function(){var t=this,n={_id:t.getFirstId()};e.callFunction({url:"template/db_api/pub/findById",title:"请求中...",data:n,success:function(n){e.alert(JSON.stringify(n)),t.item=n}})},findByWhereJson:function(){var t=this,n={_id:t.getFirstId()};e.callFunction({url:"template/db_api/pub/findById",title:"请求中...",data:n,success:function(n){e.alert(JSON.stringify(n)),t.item=n}})},getList:function(t){var n=this;e.callFunction({url:"template/db_api/pub/select",title:t?"请求中...":"",data:{},success:function(t){n.data=t}})},getList1:function(){var t=this;e.callFunction({url:"template/db_api/pub/select",title:"请求中...",data:{},success:function(n){t.data=n,e.alert(JSON.stringify(n)),t.item=n}})},selects:function(){var t=this;e.callFunction({url:"template/db_api/pub/selects",title:"请求中...",data:{},success:function(n){t.data=n,e.alert(JSON.stringify(n)),t.item=n}})},sample:function(){e.callFunction({url:"template/db_api/pub/sample",title:"请求中...",data:{},success:function(t){t.list&&t.list[0]&&e.alert(JSON.stringify(t.list[0]))}})},update:function(){var t=this,n={_id:t.getFirstId()};e.callFunction({url:"template/db_api/pub/update",title:"请求中...",data:n,success:function(n){e.alert(JSON.stringify(n)),t.item=n,t.getList()}})},updateById:function(){var t=this,n={_id:t.getFirstId()};e.callFunction({url:"template/db_api/pub/updateById",title:"请求中...",data:n,success:function(n){e.alert(JSON.stringify(n)),t.item=n,t.getList()}})},updateAndReturn:function(){var t=this,n={_id:t.getFirstId()};e.callFunction({url:"template/db_api/pub/updateAndReturn",title:"请求中...",data:n,success:function(n){e.alert("当前money的值：".concat(n.info.money," \n 提示：此为原子操作，可以应用于类似id自增，数字自减等业务。")),t.item=n,t.getList()}})},groupCount:function(){var t=this,n={_id:t.getFirstId()};e.callFunction({url:"template/db_api/pub/groupCount",title:"请求中...",data:n,success:function(n){e.alert(JSON.stringify(n.rows)),t.item=n,t.getList()}})},sum:function(){var t=this;e.callFunction({url:"template/db_api/pub/sum",title:"请求中...",success:function(n){e.alert(JSON.stringify(n)),t.item=n}})},avg:function(){var t=this;e.callFunction({url:"template/db_api/pub/avg",title:"请求中...",success:function(n){e.alert(JSON.stringify(n)),t.item=n}})},max:function(){var t=this;e.callFunction({url:"template/db_api/pub/max",title:"请求中...",success:function(n){e.alert(JSON.stringify(n)),t.item=n}})},min:function(){var t=this;e.callFunction({url:"template/db_api/pub/min",title:"请求中...",success:function(n){e.alert(JSON.stringify(n)),t.item=n}})},getGeoList:function(t){var n=this;e.callFunction({url:"template/db_api/pub/geo",title:"请求中...",data:{},success:function(t){n.data=t}})},calcLocation:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(void 0==n.longitude||void 0==n.latitude)return"";var i={},e=0,a=0,u=n.longitude,c=n.latitude,o=t.longitude,l=t.latitude;return e=Math.sqrt((u-o)*(u-o)+(c-l)*(c-l))/180*Math.PI*63e5,e=e.toFixed(1),a=(e/1e3).toFixed(2),i.str=e>=1e6?"很遥远":e>=1e3?a+" km":e+" m",i.m=e,i.km=a,i},calcLocationFn:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.calcLocation(t,n).km}}};n.default=a}}]);