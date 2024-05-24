'use strict';
module.exports = {
	/**
	 * 此函数名称
	 * @url client/order/pub/test 前端调用的url参数地址
	 * data 请求参数
	 * @params {String} params1  参数1
	 */
	main: async (event) => {
		let {
			data = {}, userInfo, util, originalParam
		} = event;
		let {
			customUtil,
			config,
			pubFun,
			vk,
			db,
			_
		} = util;
		let {
			uid,
			dateType
		} = data;
		let res = {
			code: 0,
			msg: ''
		};
		// 业务逻辑开始-----------------------------------------------------------
		// 可写与数据库的交互逻辑等等 
		let {
			todayEnd,
			todayStart,
			monthStart,
			monthEnd,
			weekStart,
			weekEnd,
			yesterdayStart,
			yesterdayEnd,
			yearStart,
			yearEnd
		} = vk.pubfn.getCommonTime();
		let parmas = {}
		if (dateType === 'day') {
			parmas.start = todayStart + 1000 * 60
			parmas.end = todayEnd + 1000 * 60
		} else if (dateType === 'month') {
			parmas.start = monthStart
			parmas.end = monthEnd
		} else if (dateType === 'week') {
			parmas.start = weekStart
			parmas.end = weekEnd
		} else if (dateType === 'yesterday') {
			parmas.start = yesterdayStart + 1000 * 60
			parmas.end = yesterdayEnd + 1000 * 60
		} else if (dateType === 'year') {
			parmas.start = yearStart
			parmas.end = yearEnd
		}
		let {
			rows
		} = await vk.baseDao.select({
			dbName: "power",
			pageSize: -1,
			whereJson: {
				time: _.and(_.gt(parmas.start), _.lte(parmas.end))
			},
		});
		let box = {}
		rows.forEach(item => {
			let f = ''
			if (dateType === 'year') {
				f = vk.pubfn.getDateInfo(item.time).month
			} else {
				f = vk.pubfn.getDateInfo(item.time).day
			}

			box[f] = {
				list: [],
				total: 0
			}
		})

		rows.forEach(item => {
			let f = ''
			if (dateType === 'year') {
				f = vk.pubfn.getDateInfo(item.time).month
			} else {
				f = vk.pubfn.getDateInfo(item.time).day
			}
			for (let var1 in box) {
				if (var1 == f) {
					box[var1].list.push(item.spend)
					box[var1].total += item.spend
				}
			}
		})

		res.data = {
			data: box,
			balance: rows[rows.length - 1].price
		}
		return res
		// 业务逻辑结束-----------------------------------------------------------
	}
}