// pages/credential/association.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    card1: '',
    card2: '',
    data:{}
  },
  name2Input: function (e) {
    this.setData({
      ['data.associationName2']: e.detail.value
    })
  },
  nameInput: function (e) {
    this.setData({
      ['data.associationName']: e.detail.value
    })
  },
  chooseCard1: function () {
    var self = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths);
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
                ['data.associationPic']: imgUrl
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

      }
    })
  },
  chooseCard2: function () {
    var self = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths);
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
                ['data.associationPic2']: imgUrl
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

      }
    })
  },
  send: function () {
    wx.showLoading({
      title: '加载中',
    })
    var data = this.data;
    var self = this;
    //可编辑转态
    wx.request({//保存用户数据
      url: app.globalData.apiUrl + '/restful/3.0/authentication/qualifications',
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
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '协会认证'
    });

    //获取信息
    var self = this;
    wx.showLoading({
      title: '加载中',
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

})