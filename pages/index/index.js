Page({
	data: {
		list: [
			[{
				id: 0,
				text: '九宫格',
				icon: '/images/part3/moments.png',
				url: '/pages/wxWallet/wxWallet'
			}],
			[{
					id: 1,
					text: '猜数字游戏',
					icon: '/images/part3/scan.png',
					url: '/pages/numberGuess/numberGuess'
				},
				{
					id: 2,
					text: '天气查询',
					icon: '/images/part3/shake.png',
					url: '/pages/weather/weather'
				}
			],
			[{
					id: 3,
					text: '看一看',
					icon: '/images/part3/topStories.png'
				},
				{
					id: 4,
					text: '搜一搜',
					icon: '/images/part3/search.png'
				}
			],
			[{
					id: 5,
					text: '购物',
					icon: '/images/part3/shopping.png'
				},
				{
					id: 6,
					text: '游戏',
					icon: '/images/part3/games.png'
				}
			],
			[{
				id: 7,
				text: '小程序',
				icon: '/images/part3/miniProgram.png'
			}],
		]
	},
	navigateTo(e) {
		wx.navigateTo({
			url: e.currentTarget.dataset.url
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
