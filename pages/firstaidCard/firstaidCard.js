// pages/firstaidCard/firstaidCard.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		myCard: null
	},
	goToForm() {
		wx.navigateTo({
			url: '../aidCardForm/aidCardForm'
		})
	},
	delMyCard() {
		wx.showModal({
			title: '删除医疗急救卡',
			content: '确定删除？',
			success: (res) => {
				if (res.confirm) {
					wx.removeStorageSync('myCard')
					this.setData({
						myCard: null
					})
				}
			}
		})

	},
	makeCall() {
		wx.makePhoneCall({
			phoneNumber: this.data.myCard.tel
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {

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
		let myCard = wx.getStorageSync('myCard')
		if (myCard != '') {
			this.setData({
				myCard: myCard
			})
		}
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
