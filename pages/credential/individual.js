// pages/credential/individual.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
      card1:'',
      card2:'',
      headImg:'',
      name:'',
      idcard:'',
      tel:'',
      data:{}
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
      title: '个人身份证'
    })
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
            data: data.data
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
    this.setData({
      headImg: app.globalData.userInfo.headPortrait
    })
   
  },
  edit: function () {
      wx.showLoading({
        title: '加载中',
      })
      var data = this.data;
      var self = this;
      //可编辑转态
      wx.request({//保存用户数据
        url: app.globalData.apiUrl + '/restful/3.0/authentication/identity',
        method: 'POST',
        header: {
          Authorization: app.globalData.token
        },
        data: data.data,
        success: function (data) {
          console.log(data);
          self.setData({
            isEdit: false,
          })
          wx.hideLoading();
          wx.showToast({
            title: '修改成功',
          })
        }, fail: function (e) {
          wx.hideLoading();
          wx.showToast({
            title: '发送失败',
          })
        }
      })
  },
  nameInput: function (e) {
    this.setData({
      ['data.name']: e.detail.value
    })
  },
  idInput: function (e) {
    this.setData({
      ['data.cardNo']: e.detail.value
    })
  },
  telInput: function (e) {
    this.setData({
      ['data.tel']: e.detail.value
    })
  },
  clear: function () {
    this.setData({
      data:{}
    })
  },
  chooseCard1: function () {
    var self = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        const tempFilePaths = res.tempFilePaths
        wx.showLoading({
          title: '上传图片中',
        });
        wx.uploadFile({
          url: app.globalData.apiUrl + '/restful/3.0/common/upload',
          filePath: tempFilePaths[0],
          name: 'file',
          success(res) {
            console.log(res)
            var _data = res.data
            var data = JSON.parse(_data.replace(/↵|\r|\n/g, ''))
            var imgUrl = data.data;
            if (imgUrl) {
              self.setData({
                ['data.cardPic1']: tempFilePaths[0]
              })
            }
            wx.hideLoading();
            if (res.statusCode == 400) {
              wx.showToast({
                title: '提交失败',
              })
            }
          }, fail(e) {
            console.log('error', e);
            wx.hideLoading();
            wx.showToast({
              title: '提交失败',
            })
          }
        })
      },
    })
  },
  chooseCard2: function () {
    var self = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: app.globalData.apiUrl + '/restful/3.0/common/upload',
          filePath: tempFilePaths[0],
          name: 'file',
          success(res) {
            console.log(res)
            var _data = res.data
            var data = JSON.parse(_data.replace(/↵|\r|\n/g, ''))
            var imgUrl = data.data;
            if (imgUrl) {
              self.setData({
                ['data.cardPic2'] : res.tempFilePaths[0]
              })
            }
            wx.hideLoading();
            if (res.statusCode == 400) {
              wx.showToast({
                title: '提交失败',
              })
            }
          }, fail(e) {
            console.log('error', e);
            wx.hideLoading();
            wx.showToast({
              title: '提交失败',
            })
          }
        })

      },
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})