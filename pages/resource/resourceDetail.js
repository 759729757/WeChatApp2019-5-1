// pages/resource/resourceDetail.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  follow: function (e) {
    this.setData({
      isFollow: !this.data.isFollow
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({ title: '资源详情' })  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  onLoad: function (o) {
    console.log(o)
    var id = o.id;
    // 获取初始资料
    var self = this;
    wx.request({
      url: app.globalData.apiUrl + '/restful/3.0/publish/' + id,
      method: 'GET',
      header: {
        Authorization: app.globalData.token
      },
      success: function (data) {
        console.log('资源', data);
        if (data.statusCode == 200) {
          self.setData({
            data: data.data.data
          })
        }
        wx.hideLoading();
      }
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