<template>
	<view>
		<view class="tool">
			<div :class="item.key===curKey?'active':''" v-for="item in tabs" :key="item.id" size='small'
				@click="init(item.key)">
				{{item.name}}
			</div>

			<div class="go"><span @click='go'>去充值</span></div>
		</view>
		<view class="tool">
			<div>消费</div>
			<div class="balance">{{spend}}</div>
			<div>余额</div>
			<div class="balance">{{balance}}</div>
			<div class="go">
				<div>充值金额</div>
				<input v-model="input" type="text" placeholder="请输入">
				<div @click='updateBalance'>确认</div>
			</div>
		</view>
		<!-- <view class="data">
			<view class="" v-for="(item,index) in allData" :key='index'>
				<view>{{index}}号</view>
				<view>
					<view v-for="(price,subIndex) in allData[index]" :key="subIndex">{{price}}</view>
				</view>
			</view>
		</view> -->
		<view class="canvas">
			<qiun-data-charts :rotate='true' type="line" :opts="opt" :chartData="chartData" />
		</view>
	</view>
</template>


<script>
	var vk = uni.vk;
	export default {
		data() {
			// 页面数据变量
			return {
				balance: 0,
				spend: 0,
				curKey: 'day',
				tabs: [{
					id: 0,
					key: 'yesterday',
					name: '昨天'
				}, {
					id: 1,
					key: 'day',
					name: '今天'
				}, {
					id: 2,
					key: 'week',
					name: '本周'
				}, {
					id: 3,
					key: 'month',
					name: '本月'
				}, {
					id: 4,
					key: 'year',
					name: '今年'
				}, ],
				// init请求返回的数据
				opt: {
					fontSize: 10,
					rotate: true,
					height: '900px',
					width: '900px',
					color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
						"#ea7ccc"
					],
					enableScroll: false,
					legend: {},
					xAxis: {
						disableGrid: true,
						fontSize: 11
					},
					yAxis: {
						gridType: "dash",
						dashLength: 2,
						fontSize: 11
					},
					extra: {
						line: {
							type: "curve",
							width: 1,
							activeType: "solid",
							onShadow: true
						}
					}
				},
				chartData: {},
				// 表单请求数据
				form1: {

				},
				scrollTop: 0,
				input: null
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		// 监听 - 页面每次【加载时】执行(如：前进)
		onLoad(options = {}) {
			vk = uni.vk;
			this.options = options;
			console.log(vk.pubfn.getCommonTime());
		},
		// 监听 - 页面【首次渲染完成时】执行。注意如果渲染速度快，会在页面进入动画完成前触发
		onReady() {
			this.init();
		},
		// 监听 - 页面每次【显示时】执行(如：前进和返回) (页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面)
		onShow() {

		},
		// 监听 - 页面每次【隐藏时】执行(如：返回)
		onHide() {

		},
		// 监听 - 点击右上角转发时
		onShareAppMessage(options) {

		},
		// 函数
		methods: {
			go() {
				window.open('http://www.wap.cnyiot.com/nat/nat.aspx?id=qAgQWFzrtuxl2%2BeVfpAB4w%3D%3D')
			},
			updateBalance() {
				if (!this.input) return
				vk.callFunction({
					url: 'client/power/pub/updateBalance',
					title: '请求中...',
					data: {
						rechargeBalance: this.input
					},
					success: ({
						data,
						msg
					}) => {
						if (data === 1) {
							vk.toast(msg, 'none', () => {
								this.init()
							})

						}
					}
				});
			},
			// 页面数据初始化函数
			init(dateType = 'day') {
				this.chartData = {}
				let that = this
				this.curKey = dateType
				vk.callFunction({
					url: 'client/power/pub/getList',
					title: '请求中...',
					data: {
						dateType: dateType || 'day'
					},
					success: (res) => {
						let {
							data,
							balance
						} = res.data
						let totalPrice = []
						// Object.keys(cData).forEach(item => {
						// 	totalPrice.push(cData[item].total)
						// })
						if (dateType === 'day' || dateType === 'yesterday') {
							let everyHours = []
							for (var i = 1; i <= 24; i++) {
								everyHours.push(i)
							}
							let day = vk.pubfn.getDateInfo().day
							if (dateType === 'yesterday') {
								const {
									yesterdayStart
								} = vk.pubfn.getCommonTime();
								day = vk.pubfn.getDateInfo(yesterdayStart).day
							}
							let allData = {
								categories: everyHours,
								series: [{
									name: "电费",
									data: data[day].list
								}]
							}
							this.chartData = allData
						} else if (dateType === 'week' || dateType === 'month' || dateType === 'year') {
							let c = []
							let d = []
							for (let key in data) {
								c.push(key)
								d.push((data[key].total).toFixed(2))
							}
							if (dateType === 'week') {
								let name = ['一', '二', '三', '四', '五', '六', '日']
								c = c.map((item, index) => {
									return item + '(周' + name[index] + ')'
								})
							}
							let allData = {
								categories: c,
								series: [{
									name: "电费",
									data: d
								}]
							}
							this.chartData = allData
						}
						for (let key in data) {
							totalPrice.push((data[key].total).toFixed(2))
						}
						this.spend = 0
						totalPrice.forEach(item => {
							this.spend += Number(item)
						})
						this.spend = this.spend.toFixed(2)
						this.balance = balance
					}
				});
			},
			pageTo(path) {
				vk.navigateTo(path);
			}
		},
		// 监听器
		watch: {

		},
		// 计算属性
		computed: {

		}
	}
</script>
<style lang="scss" scoped>
	.data {
		padding: 20rpx;

	}

	.canvas {
		height: calc(100vh - 140rpx);
	}

	.tool {
		position: relative;
		background-color: #eff6f9;
		padding: 20rpx;
		height: 70rpx;
		box-sizing: border-box;
		display: flex;


		font-size: 28rpx;

		.balance {
			color: firebrick;
		}

		>div {
			margin-right: 20rpx;
		}

		.go {
			position: absolute;
			right: 20rpx;
			top: 20rpx;
			width: 350rpx;
			display: flex;
			align-items: center;
			justify-content: flex-end;
		}

		.active {
			color: #1890FF;
		}

		input {
			margin: 0 20rpx;
			font-size: 28rpx;
			width: 110rpx;
		}
	}
</style>