// pages/recommend/detail.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab:1,
    isFollow:false,
  },
  follow:function(e){
    this.setData({
      isFollow: !this.data.isFollow
    })
  },
  chooseTab:function(e){
      this.setData({
        tab : e.target.dataset.tabindex
      })
  },

  follow: function (e) {
    var self = this;
    var id = this.data.data.id
    wx.request({
      url: app.globalData.apiUrl + '/restful/3.0/attention/' + id,
      method: 'PUT',
      header: {
        Authorization: app.globalData.token
      },
      success: function (data) {
        console.log('关注', data);
        if (data.statusCode == 200) {
          wx.hideLoading();
          wx.showToast({
            title: '关注成功',
          })
        }
      }
    })
    this.setData({
      isFollow: !this.data.isFollow
    })
  },
  phoneCall: function () {
    var self = this;
    wx.makePhoneCall({
      phoneNumber: self.data.data.publishSubscriberInfo.mobilePhone //仅为示例，并非真实的电话号码
    })
  },
  unFollow: function (e) {
    var self = this;
    var id = this.data.data.id
    wx.request({
      url: app.globalData.apiUrl + '/restful/3.0/attention/' + id,
      method: 'DELETE',
      header: {
        Authorization: app.globalData.token
      },
      success: function (data) {
        console.log('取消关注', data);
        if (data.statusCode == 200) {
          wx.hideLoading();
          wx.showToast({
            title: '取消成功',
          })
        }
      }
    })
    this.setData({
      isFollow: !this.data.isFollow
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    wx.setNavigationBarTitle({
      title: '供应商'
    })
  },
  onLoad: function (o) {
    console.log(o)
    var id = o.id;
    // 获取初始资料
    var self = this;
    wx.request({
      url: app.globalData.apiUrl + '/restful/3.0/subscriber/' + id,
      method: 'GET',
      header: {
        Authorization: app.globalData.token
      },
      success: function (data) {
        console.log('供应商详情', data);
        if (data.statusCode == 200) {
          self.setData({
            data: data.data.data
          })
        }else{
          //状态吗不是200 没有获取到用户数据
          wx.navigateTo({
            url: '/pages/login/index'
          })
        }
        wx.hideLoading(); 
      }
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