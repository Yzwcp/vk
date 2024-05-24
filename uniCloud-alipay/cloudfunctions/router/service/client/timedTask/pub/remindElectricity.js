'use strict';
const cheerio = require('cheerio');
module.exports = {
	/**
	 * XXXnameXXX
	 * @url client/timedTask/pub/remindElectricity 前端调用的url参数地址
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
			uid
		} = data;
		let res = {
			code: 0,
			msg: ""
		};
		// 业务逻辑开始-----------------------------------------------------------

		let html = await uniCloud.httpclient.request('http://www.wap.cnyiot.com/nat/pay.aspx?mid=19500772603', {
			dataType: "text"
		})
		const $cheerio = cheerio.load(html.data);
		const labelElement = $cheerio('label[style="min-width:75px;margin-left:5px;display:inline-block;"]')
			.first()
		const value = Number(labelElement.text())


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
		res.data = await vk.baseDao.add({
			dbName: "power",
			dataJson: {
				spend: (lastPrice - value).toFixed(2) - 0,
				price: value,
				time: new Date().getTime(),
			}
		});

		// 业务逻辑结束-----------------------------------------------------------
		return {
			res,
		};
	}
}