// pages/mine/mineDetail.js
var app = getApp();

function getNowFormatDate() {
  var date = new Date();
  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex: ['请选择性别', '男', '女'],
    index:0,
    nickName:"关关",
    renzheng:'个人认证',
    zhuce:'2019-02-12',
    credit:'500',
    nowDate: getNowFormatDate(),
    brithday:'请填写您的生日',
    
    data:{},
    
    status: "编辑",
    isEdit: false,
  },
  chooseImg:function(){
    var self =this;
    if(this.data.isEdit){
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
            url: app.globalData.apiUrl +'/restful/3.0/common/upload', 
            filePath: tempFilePaths[0],
            name: 'file',
            success(res) {
              console.log(res)
              var _data = res.data
              var data = JSON.parse(_data.replace(/↵|\r|\n/g, ''))
              var imgUrl = data.data;
              if(imgUrl){
                  self.setData({
                    ['data.headPortrait'] : imgUrl
                  })
              }
              wx.hideLoading();
              if(res.statusCode==400){
                wx.showToast({
                  title: '提交失败',
                })
              }
            },fail(e){
              console.log('error',e);
              wx.hideLoading();
              wx.showToast({
                title: '提交失败',
              })
            }
          })

        }
      })
    }
  },

  edit: function () {
    if (this.data.isEdit) {
      wx.showLoading({
        title: '加载中',
      })
      var data = this.data;
      var self = this;
      //可编辑转态
      wx.request({//保存用户数据
        url: app.globalData.apiUrl +'/restful/3.0/subscriber',
        method: 'POST',
        header: {
          // "Content-Type": "application/json",
          Authorization: app.globalData.token
        },
        data:data.data,
        success: function (data) {
          console.log(data);
          self.setData({
            status: "编辑",
            isEdit: false,
          })
          wx.hideLoading();
          wx.showToast({
            title: '修改成功',
          })
        },fail:function(e){
          wx.hideLoading();
          wx.showToast({
            title: '发送失败',
          })
        }
      })
    } else {
      this.setData({
        status: "保存资料",
        isEdit: true,
      })
    }
  },
  bindbriChange:function(e){
    this.setData({
      ['data.birthday']: e.detail.value
    })
  },
  bindDateChange: function (e) {
    this.setData({
      ['data.createdTime']: e.detail.value
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      ['data.sex']: e.detail.value
    })
  },
  locInput:function(e){
    this.setData({
      ['data.location']: e.detail.value
    })
  },
  nameInput:function(e){
    this.setData({
      ['data.nickName']: e.detail.value
    })
  },
    /**
       * 生命周期函数--监听页面加载
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var self = this;
    wx.setNavigationBarTitle({
      title: '会员资料'
    })
    wx.showLoading({
      title: '加载中',
    })
    wx.request({//获取用户数据
      url: app.globalData.apiUrl + '/restful/3.0/subscriber',
      method: 'GET',
      header: {
        Authorization: app.globalData.token
      },
      success: function (data) {
        console.log(data);
        self.setData({
          data:data.data.data
        })
        wx.hideLoading();
      }
    })
  }
})