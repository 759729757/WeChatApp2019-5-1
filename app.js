//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

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
    token: "1EDEAE56E17AA94C8A51D04A998341651BBC84F4311859A8E87805A79B5184238FA197DE8FA6ABA134C7014C73BA049704BAB93C87BC6FAEBB0B0D9935E26643E75A2436B26311A77377EB023C2B9933AC849274A1835F941A643DE960C4B6A7CEC53DBCF5CAA25A79D023FD6D89F2EFFC12D04A8D59BA0E940FAAA3BC54462BBA07EE9C9F804FEEC1C34FD940AE0AD6EF5438D7BD4E7467055B233A1788C65E83B0A602896B691D22FB34F6476F4C2D",
    
  }
})