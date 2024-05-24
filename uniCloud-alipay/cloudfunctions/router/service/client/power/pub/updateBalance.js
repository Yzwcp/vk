'use strict';
module.exports = {
	/**
	 * XXXnameXXX
	 * @url client/power/pub/updateBalance 前端调用的url参数地址
	 * data 请求参数
	 * @param {String} params1  参数1
	 */
	main: async (event) => {
		let {
			data = {}, userInfo, util, filterResponse, originalParam
		} = event;
		let {
			customUtil,
			uniID,
			config,
			pubFun,
			vk,
			db,
			_,
			$
		} = util;
		let {
			uid,
			rechargeBalance
		} = data;
		let res = {
			code: 0,
			msg: ""
		};
		// 业务逻辑开始-----------------------------------------------------------
		let lastData = await vk.baseDao.select({
			dbName: "power",
			whereJson: {},
			pageSize: 1,
			sortArr: [{
				'name': 'time',
				'type': 'desc'
			}]
		});
		let lastPrice = lastData.rows[0].price
		let price = Number((Number(rechargeBalance) + lastPrice).toFixed(2))
		res.data = await vk.baseDao.updateById({
			dbName: "power",
			id: lastData.rows[0]._id,
			dataJson: {
				price
			},
		});
		res.msg = '充值成功'
		// 业务逻辑结束-----------------------------------------------------------
		return res;
	}
}