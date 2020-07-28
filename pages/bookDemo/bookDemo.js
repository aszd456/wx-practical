// pages/bookDemo/bookDemo.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		isDownloading: false,
		percentNum: 0,
		bookList: [{
			id: '0',
			title: '《Spring Boot 2企业应用实战》',
			poster: 'https://img9.doubanio.com/view/subject/l/public/s29785016.jpg'
		}, {
			id: '1',
			title: '《Spring Data JPA从入门到精通》',
			poster: 'https://img9.doubanio.com/view/subject/l/public/s29800655.jpg'
		}, {
			id: '2',
			title: '《SpringBoot2精髓》',
			poster: 'https://img1.doubanio.com/view/subject/l/public/s29588927.jpg'
		}, {
			id: '3',
			title: '《springmybatis企业应用实战第2版》',
			poster: 'https://img3.doubanio.com/view/subject/l/public/s29742900.jpg'
		}, {
			id: '4',
			title: '《MySQL必知必会》',
			poster: 'https://img9.doubanio.com/view/subject/l/public/s5968156.jpg'
		}, {
			id: '5',
			title: '《深入浅出Spring Boot 2》',
			poster: 'https://img3.doubanio.com/view/subject/l/public/s29875871.jpg'
		}]
	},
	readBook(e) {
		let bookId = e.currentTarget.dataset.id
		let path = wx.getStorageSync(bookId)
		let questUrl = 'http://127.0.0.1:8082/bili/downloadFile/' + bookId + '.pdf'
		if (path == '') {
			this.setData({
				isDownloading: true
			})
			const downloadTask = wx.downloadFile({
				url: questUrl,
				header:{'Content-Type':'application/pdf'},
				success: (res) => {
					this.setData({
						isDownloading: false
					})
					if (res.statusCode == 200) {
						path = res.tempFilePath
						this.saveBook(bookId, path)
					} else {
						this.showTips('暂时无法下载')
					}
				},
				fail: (err) => {
					this.setData({
						isDownloading: false
					})
					this.showTips(err.errMsg)
				}
			})
			downloadTask.onProgressUpdate((res) => {
				let progress = res.progress
				this.setData({
					percentNum: progress
				})
			})
		} else {
			this.openBook(path)
		}
	},
	openBook(path) {
		wx.openDocument({
			filePath: path,
			success: function(res) {
				console.log('打开图书成功')
			},
			fail: function(err) {
				console.log(err)
			}
		})
	},
	saveBook(id, path) {
		wx.saveFile({
			tempFilePath: path,
			success: (res) => {
				let newPath = res.savedFilePath
				wx.setStorageSync(id, newPath)
				this.openBook(newPath)
			},
			fail:(err) =>{
				console.log(err)
				this.showTips('文件保存失败')
			}
		})
	},
	showTips(content) {
		wx.showModal({
			title: '提醒',
			content: content,
			showCancel: false
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
