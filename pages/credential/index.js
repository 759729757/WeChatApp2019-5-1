// pages/credential/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    identity:{},
    enterprise:{},
    qualifications:{}
  },
  goIndividual:function(){
    wx.navigateTo({
      url: 'individual',
    })
  },
  goAssociation: function () {
    wx.navigateTo({
      url: 'association',
    })
  },
  goCompany: function () {
    wx.navigateTo({
      url: 'company',
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
        title: '我的认证'
      });
    //获取用户数据
    var self = this;
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: app.globalData.apiUrl + '/restful/3.0/authentication/identity',
      method: 'GET',
      header: {
        Authorization: app.globalData.token
      },
      success: function (data) {
        console.log(data);
        if (data.statusCode == 200) {
          self.setData({
            identity: data.data
          })
        } else {
          //转台吗不是200 没有获取到用户数据
          wx.navigateTo({
            url: '/pages/login/index'
          })
        }
        wx.hideLoading();
      }
    })
    wx.request({
      url: app.globalData.apiUrl + '/restful/3.0/authentication/enterprise',
      method: 'GET',
      header: {
        Authorization: app.globalData.token
      },
      success: function (data) {
        console.log(data);
        if (data.statusCode == 200) {
          self.setData({
            enterprise: data.data
          })
        } else {
          //转台吗不是200 没有获取到用户数据
          wx.navigateTo({
            url: '/pages/login/index'
          })
        }
        wx.hideLoading();
      }
    })
    wx.request({
      url: app.globalData.apiUrl + '/restful/3.0/authentication/qualifications',
      method: 'GET',
      header: {
        Authorization: app.globalData.token
      },
      success: function (data) {
        console.log(data);
        if (data.statusCode == 200) {
          self.setData({
            qualifications: data.data
          })
        } else {
          //转台吗不是200 没有获取到用户数据
          wx.navigateTo({
            url: '/pages/login/index'
          })
        }
        wx.hideLoading();
      }
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