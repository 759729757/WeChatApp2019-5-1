// pages/publish/publish.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  gopro:function(e){
    wx.navigateTo({
      url: '../publishPro/publishPro'
    })
  },
  gores: function (e) {
    wx.navigateTo({
      url: '../publishRes/publishRes'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //如果没有登录，跳转到登录页面
    if (!app.globalData.token){
      wx.navigateTo({
        url: '/pages/login/index'
      })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '发布',
    })
    //设置tab下标
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  },


})