// pages/weather/weather.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		region: ['广东省', '肇庆市', '端州区'],
		now: {
			tmp: 0,
			cond_txt: '未知',
			cond_code: '999',
			hum: 0,
			pres: 0,
			vis: 0,
			wind_dir: 0,
			wind_spd: 0,
			wind_sc: 0
		}
	},
	regionChange(e) {
		this.setData({
			region: e.detail.value
		})
		this.getWeather()
	},
	getWeather() {
		var that = this
		wx.request({
			url: 'https://devapi.heweather.net/v7/weather/now',
			data: {
				location: 101010100,
				key: 'cf83e0da03da4aa0b51bc9bdd9b4f2b5'
			},
			success(res) {
				console.log(res.data)
				that.setData({
					now: res.data.now
				})
			}
		})
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		this.getWeather()
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
