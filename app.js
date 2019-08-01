//app.js
App({
  onLaunch: function () {
    //获取本地的token
    var self = this;
    self.globalData.token = wx.getStorageSync('token')
    if (self.globalData.token){
      //获取用户数据
      wx.showLoading({
        title: '加载中',
      })
      wx.request({
        url: self.globalData.apiUrl + '/restful/3.0/subscriber',
        method: 'GET',
        header: {
          Authorization: self.globalData.token
        },
        success: function (data) {
          if (data.statusCode == 200) {
            self.globalData.userInfo = data.data.data
          } else {
            //状态吗不是200 没有获取到用户数据
            wx.navigateTo({
              url: '/pages/login/index'
            })
          }
          wx.hideLoading();
        }
      })
    }
    
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    apiUrl: 'http://47.92.103.76:18080',//api地址
    token: "",
    
  }
})