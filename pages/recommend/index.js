// pages/recommend/index.js
var testData = require('../../data.js');//拿测试数据 
var app = getApp();
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
  goDetail:function(e){
    var id = e.currentTarget.dataset.id;
    wx/wx.navigateTo({
      url: 'detail?id='+id,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var data = testData.supplier;
    var l = data.length;
    var harf = Math.floor(l/2);
    // 获取供应商
    var self = this;
    wx.request({
      url: app.globalData.apiUrl + '/restful/3.0/app/subscriber/{tagCode}/1/10',
      method: 'GET',
      header: {
        Authorization: app.globalData.token
      },
      data:{
        subscriberTag:'RECOMMEND_SUPPLIER'
      },
      success: function (data) {
        console.log('供应商',data);
        if (data.statusCode == 200) {
          var list = data.data.data.content;
          var data = list;
          var l = data.length;
          var harf = Math.floor(l / 2);
          self.setData({
            list1: data.slice(0, harf),
            list2: data.slice(harf)
          })
        } 
        wx.hideLoading();
      }
    })

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

    wx.setNavigationBarTitle({
      title: '推荐供应商',
    })
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