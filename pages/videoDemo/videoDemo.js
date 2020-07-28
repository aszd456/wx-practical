// pages/videoDemo/videoDemo.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		danmuText:'',
		list:[{
			id:'299371',
			title:'《复仇者联盟4：终局之战》',
			videoUrl:'http://vfx.mtime.cn/Video/2019/03/14/mp4/190314223540373995.mp4'
		},{
			id:'299396',
			title:'《惊奇队长》',
			videoUrl:'http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4'
		},{
			id:'299378',
			title:'《玩具总动员》',
			videoUrl:'http://vfx.mtime.cn/Video/2019/03/19/mp4/190319212559089721.mp4'
		},{
			id:'299392',
			title:'《叶问4》',
			videoUrl:'http://vfx.mtime.cn/Video/2019/03/18/mp4/190318231014076505.mp4'
		},{
			id:'299371',
			title:'《紧急救援》',
			videoUrl:'http://vfx.mtime.cn/Video/2019/03/19/mp4/190319222227698228.mp4'
		},{
			id:'299362',
			title:'《雷霆沙赞》',
			videoUrl:'http://vfx.mtime.cn/Video/2019/03/14/mp4/190314102306987969.mp4'
		}]
	},
	getRandomColor() {
		let rgb = []
		for (let i = 0; i < 3; ++i) {
			let color = Math.floor(Math.random() * 256).toString(16)
			color = color.length == 1 ? '0' + color : color,
				rgb.push(color)
		}
		return '#' + rgb.join('')
	},
	getDanmu(e){
		this.setData({
			danmuText:e.detail.value
		})
	},
	sendDanmu(){
		let text = this.data.danmuText
		this.videoCtx.sendDanmu({
			text:text,
			color:this.getRandomColor()
		})
	},
	playVideo(e){
		this.videoCtx.stop()
		this.setData({
			src:e.currentTarget.dataset.url
		})
		this.videoCtx.play()
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		this.videoCtx = wx.createVideoContext('myVideo')
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
