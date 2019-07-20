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
    token:'1EDEAE56E17AA94C8A51D04A998341651BBC84F4311859A8E87805A79B5184232EDCE6D4C4CC53711853F55D578D4982A0B0E0218ABECF9D9FAEADAAE63A3C39159FBA83EBAFB13D61AF929A476CD3DD2B3716E72B49324ADB1BE2845F620F6387F263387ACA3BAC70AEC23FCF4944C134FDACE66F1FD8F1F29BF6EBF3677B2974BFA0132F457AF56302D17C93BA92AF',
    
  }
})