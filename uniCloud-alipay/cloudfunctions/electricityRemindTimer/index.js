'use strict';
exports.main = async (event, context) => {
	/**
	 * 定时器1号 - xxxxx
	 */
	let res = {
		code: 0,
		msg: ""
	};
	res.callFunctionResult = await uniCloud.callFunction({
		name: "router",
		data: {
			// 需要执行的云函数路径
			$url: "client/timedTask/pub/remindElectricity",
			// 请求参数，这里加个key可以有效防止云函数被直接访问，云函数中加判断条件，如果key不是666666，则不运行。
			data: {
				key: "666666"
			}
		}
	});
	return res;
};