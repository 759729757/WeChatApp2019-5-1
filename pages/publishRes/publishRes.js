// pages/publishPro/publishPro.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths: "",
    proType: ['类型1', '类型2', '类型3', '类型4'], proTypeIndex: '',
    proType2: ['请先选一级分类'], proTypeIndex2: '',
    address: "",
    telphone: "",
    tabValue: '',
    tab: '',
    tabArr: [],//用来放标签
    name: '暂无',


  },
  telInput: function (e) {
    this.setData({
      telphone: e.detail.value
    })
  },
  addInput: function (e) {
    this.setData({
      address: e.detail.value
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
      url: app.globalData.apiUrl + '/restful/3.0/publish/RESOURCE',
      method: 'PUT',
      header: {
        "Content-Type": "application/json",
        Authorization: app.globalData.token
      },
      data: {
        "address": data.address,
        "contactPhone": data.telphone,
        // "createdBy": "string",
        // "createdTime": "2019-07-25T14:49:00.287Z",
        "firstLevelClassify": data.proTypeIndex,
        "publishPic": data.tempFilePaths,
        "publishSynopsis": "暂无",
        "publishType": 1,
        "secondLevelClassify": data.proTypeIndex2,
        "tagNames": data.tabArr,
        "name": data.name,
      },
      success: function (data) {
        console.log(data);
        wx.hideLoading();
        wx.showToast({
          title: '修改成功',
        })
        setTimeout(function () {
          wx.switchTab({
            url: "/pages/publish/publish"
          })
        }, 1000)
      }, fail: function (e) {
        wx.hideLoading();
        wx.showToast({
          title: '发送失败',
        })
      }
    })
  },
  removeTab: function (e) {
    console.log(e);
    var arr = this.data.tabArr;
    var index = e.currentTarget.dataset.index;
    delete arr[index];
    this.setData({
      tabArr: arr
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      tab: e.detail.value
    })
  },
  addTab: function (e) {
    var arr = this.data.tabArr;
    arr.unshift(this.data.tabValue);
    this.setData({
      tabArr: arr,
      tabValue: ''
    })

  },
  tabInput: function (e) {
    this.setData({
      tabValue: e.detail.value
    })
  },
  bindPickerChange: function (e) {
    var pickerArr = this.data.pickerArr
      , index = e.detail.value
      , _pickerArr = [];
    for (var i = 0; i < pickerArr[index].secondClassifys.length; i++) {
      _pickerArr.push(pickerArr[index].secondClassifys[i].name)
    }
    this.setData({
      proTypeIndex: index,
      proType2: _pickerArr
    })
  },
  bindPickerChange2: function (e) {
    this.setData({
      proTypeIndex2: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获取发布类型
    var self = this;
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: app.globalData.apiUrl + '/restful/3.0/publish/classify/RESOURCE',
      method: 'GET',
      header: {
        Authorization: app.globalData.token
      },
      success: function (data) {
        console.log(data);
        var pickerArr = data.data.data, _pickerArr = [];
        for (var i = 0; i < pickerArr.length; i++) {
          _pickerArr.push(pickerArr[i].name)
        }
        self.setData({
          pickerArr: pickerArr,
          proType: _pickerArr
        })
        wx.hideLoading();
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '发布资源',
    })
  },
  getImg: function () {
    var that = this;
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
                tempFilePaths: imgUrl
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


})