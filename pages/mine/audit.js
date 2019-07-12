// pages/mine/follow.js
var data = require('data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navLeftActive: 0,
    hini0: 'true'
  },
  goDetail(){
    wx.navigateTo({
      url: 'auditDetail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //选择分类
  chooseType(e) {
    var index = e.currentTarget.dataset.index;
    console.log(index)
    this.setData({
      navLeftActive: index
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      data: data
    })
    wx.setNavigationBarTitle({
      title: '我的审核',
    })
  },

})