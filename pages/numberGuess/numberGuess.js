// pages/numberGuess/numberGuess.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},
	initial() {
		this.setData({
			answer: Math.round(Math.random() * 100),
			count: 0,
			tip: '',
			x: -1,
			isGameStart: true,
			min:0,
			max:100
		})
	},
	getNumber(e) {
		this.setData({
			x: e.detail.value
		})
	},
	restartGame() {
		this.initial()
	},
	guess() {
		let x = this.data.x
		this.setData({
			x: -1
		})
		if (x < 0) {
			wx.showToast({
				title: '不能小于0',
				icon: 'none'
			})
		} else if (x > 100) {
			wx.showToast({
				title: '不能大于100',
				icon: 'none'
			})
		} else {
			let count = this.data.count + 1;
			let tip = this.data.tip
			let answer = this.data.answer
			let min = this.data.min
			let max = this.data.max
			if (x == answer) {
				tip += '\n第' + count + '回合：' + x + ',猜对了!'
				this.setData({
					isGameStart: false
				})
			} else{ 
				if (x > answer) {
					this.setData({
						max:x
					});
				} else {
					this.setData({
						min:x
					});
				}
				tip += '\n第' + count + '回合:' + this.data.min + '到'+this.data.max
			}
			if (count == 8) {
				tip += '\n游戏结束'
				this.setData({
					isGameStart: false
				})
			}
			let topNum = Math.round(Math.random() * 150);
			console.log(topNum)
			this.setData({
				tip: tip,
				count: count
			})
			setTimeout(() => {
						this.setData({
							scrollTop: 99999
						})
					}, 0)
		}
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		this.initial()
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
