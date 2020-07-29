// pages/aidCardForm/aidCardForm.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		date: '2000-01-01',
		ylzk: '无',
		ylbj: '无',
		gmfy: '无',
		yy: '无',
		blood: 'A',
		qgjz: false,
		height: 100,
		weight: 50.6,
		bloodItems: ['未知', 'A', 'B', 'O', 'AB']
	},
	dateChange(e) {
		let value = e.detail.value
		this.setData({
			date: value
		})
	},
	bloodChange(e) {
		let i = e.detail.value
		this.setData({
			blood: this.data.bloodItems[i]
		})
	},
	submitForm(e) {
		console.log(e.detail.value)
		wx.showModal({
			title: '医疗卡',
			content: '创建成功',
			success: (res) => {
				wx.setStorageSync('myCard', e.detail.value)
				wx.navigateBack()
			}
		})

	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		let myCard = wx.getStorageSync('myCard')
		if (myCard != '') {
			this.setData({
				date: myCard.date,
				ylzk: myCard.ylzk,
				ylbj: myCard.ylbj,
				gmfy: myCard.gmfy,
				yy: myCard.yy,
				blood: myCard.blood,
				qgjz: myCard.qgjz,
				height: myCard.height,
				weight: myCard.weight,
				tel:myCard.tel
			})
		}
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
