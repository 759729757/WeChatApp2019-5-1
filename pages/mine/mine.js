// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  goCredential:function(){
    wx.navigateTo({
      url: '/pages/credential/index',
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