// pages/recommend/index.js
var testData = require('../../data.js');//拿测试数据 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:[],
    list1:[],
    list2:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  goDetail:function(){
    wx/wx.navigateTo({
      url: 'detail'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '推荐供应商',
    })
    var data = testData.supplier;
    var l = data.length;
    var harf = Math.floor(l/2);

    this.setData({
      data: data,
      list1:data.slice(0,harf),
      list2:data.slice(harf)
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