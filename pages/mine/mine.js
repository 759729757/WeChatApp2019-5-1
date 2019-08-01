// pages/mine/mine.js
var app = getApp();
Page({
  data: {
    data: {}
  },
  goDetail:function(){
    wx.navigateTo({
      url: '/pages/mine/mineDetail',
    })
  },
  goAudit:function(){
    wx.navigateTo({
      url: 'audit',
    })
  },
  goPublish: function () {
    wx.navigateTo({
      url: 'pubilsh',
    })
  },
  goCredential:function(){
    wx.navigateTo({
      url: '/pages/credential/index',
    })
  },
  goFollow: function () {
    wx.navigateTo({
      url: '/pages/mine/follow',
    })
  },
  goCard:function(){
    wx.navigateTo({
      url: '/pages/vipCard/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '我的',
    })
  

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //获取用户数据
    var self = this;
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: app.globalData.apiUrl + '/restful/3.0/subscriber',
      method: 'GET',
      header: {
        Authorization: app.globalData.token
      },
      success: function (data) {
        console.log(data);
        if (data.statusCode == 200) {
          self.setData({
            data: data.data.data
          })
          app.globalData.userInfo = data.data.data
        } else {
          //状态吗不是200 没有获取到用户数据
            wx.navigateTo({
              url: '/pages/login/index'
            })
        }
        wx.hideLoading();
      }
    })

    //设置tab下标
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 4
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})