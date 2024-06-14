'use strict';
const sha1 = require('sha1')
module.exports = {
	/**
	 * XXXnameXXX
	 * @url client/tool/pub/wxconfig 前端调用的url参数地址
	 * data 请求参数
	 * 
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
			url
		} = data;
		let res = {
			code: 0,
			msg: ""
		};
		// 业务逻辑开始-----------------------------------------------------------


		const appId = 'wxc1aa59ed208cdd27' //公众号appid
		const secret = '29369d5345489af58c687b6e284b32c6'

		function randomString(len) {
			len = len || 32;
			var $chars =
				'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
			var maxPos = $chars.length;
			var pwd = '';
			for (let i = 0; i < len; i++) {
				pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
			}
			return pwd;
		}
		//返回数据给客户端
		const noncestr = randomString(32)
		let timestamp = new Date().getTime() + ''
		timestamp = Number(timestamp.substring(0, 10))
		async function getAccessToekn() {
			let {
				res
			} = await uniCloud.httpclient.request('https://api.weixin.qq.com/cgi-bin/token', {
				data: {
					grant_type: 'client_credential',
					appid: appId,
					secret: secret
				},
				contentType: 'json', // 指定以application/json发送data内的数据
				dataType: 'json' // 指定返回值为json格式，自动进行parse
			})
			return res.data.access_token
		}
		let access_toekn = await getAccessToekn()
		// console.log(access_toekn);
		async function getJsapi() {
			let {
				res
			} = await uniCloud.httpclient.request(
				`https://api.weixin.qq.com/cgi-bin/ticket/getticket`, {
					data: {
						access_token: access_toekn,
						type: 'jsapi'
					},
					contentType: 'json', // 指定以application/json发送data内的数据
					dataType: 'json' // 指定返回值为json格式，自动进行parse
				})
			return res.data.ticket
		}

		let ticket = await getJsapi()
		let string1 = `jsapi_ticket=${ticket}&noncestr=${noncestr}&timestamp=${timestamp}&url=${url}`
		let signature = sha1(string1)

		return {
			code: 1,
			data: {
				access_toekn,
				ticket,
				appId,
				secret,
				nonceStr: noncestr,
				timestamp,
				signature,
				url,
				data
			}
		}



		// 业务逻辑结束-----------------------------------------------------------
	}
}