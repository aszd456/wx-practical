// pages/weather/weather.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		region: ['广东省', '肇庆市', '端州区'],
		now: {
			feelsLike: 0,
			temp: 0,
			text: '未知',
			icon: 999,
			humidity: 0,
			pressure: 0,
			vis: 0,
			windDir: 0,
			windSpeed: 0,
			windScale: 0
		},
		locationID: 101280904
	},
	regionChange(e) {
		var that = this
		that.setData({
			region: e.detail.value
		})
		var province = that.data.region[0]
		var city = that.data.region[1]
		var region = that.data.region[2]
		if (region == '湘潭县') { //一些特殊的要特别处理
			region = city
		}
		wx.request({
			url: 'https://geoapi.heweather.net/v2/city/lookup',
			data: {
				location: region,
				// adm: city,
				key: 'cf83e0da03da4aa0b51bc9bdd9b4f2b5'
			},
			success(res) {

				if (res.data.status == "200") {
					let location = res.data.location;
					for (let i = 0; i < location.length; i++) {
						let local = location[i]
						let adm1 = local.adm1
						let adm2 = local.adm2
						let name = local.name
						if (province.indexOf(adm1) > -1 && city.indexOf(adm2) > -1 && region.indexOf(name) > -1) {
							that.setData({
								locationID: local.id
							})
							that.getWeather()
							break;
						}
					}
					if (that.data.locationID == null) {
						wx.showToast({
							title: '获取城市信息失败',
							icon: 'none'
						})
					}
				} else {
					wx.showToast({
						title: '获取城市信息失败',
						icon: 'none'
					})
				}
				// console.log(res)
			}
		})
		
	},
	getWeather() {
		var that = this
		wx.request({
			url: 'https://devapi.heweather.net/v7/weather/now',
			data: {
				location: that.data.locationID,
				key: 'cf83e0da03da4aa0b51bc9bdd9b4f2b5'
			},
			success(res) {
				if (res.data.code == "200") {
					that.setData({
						now: res.data.now
					})
				} else {
					wx.showToast({
						title: '获取城市天气信息失败',
						icon: 'none'
					})
				}
				// console.log(res.data)

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
