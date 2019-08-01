// pages/project/project.js
var data = require('data.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: ['广州', '深圳', '珠海', '东莞'], cityNum: 0,//城市选择器
    isFilter:false,
    data:[],//页面全部数据
    filterActive:1,
    navLeftActive:0,
    navContentActive:"",

    
  },
  // 确认筛选
  companyNav(e){
    this.setData({
      isFilter: false
    })
  },
  goDetail(){
    wx.navigateTo({
      url: 'projectDetail',
    })
  },
  //清除
  clearNav(e){
    this.setData({
      navContentActive: ""
    })
  },
  //选择分类内容
  chooseTypeCon(e){
    var index = e.currentTarget.dataset.index
      , navContent = this.data.navContentActive;
    if (navContent.indexOf(index) == -1){
      this.setData({
        navContentActive: navContent + index
      })
    }else{
      navContent = navContent.replace(index,"");
      this.setData({
        navContentActive: navContent
      })
    }
  },
  //选择分类
  chooseType(e){
    var index = e.currentTarget.dataset.index;
    console.log(index)
    this.setData({
      navLeftActive: index
    })
  },
  shaixuan(e){
    // 筛选 
    this.setData({
      filterActive: e.currentTarget.dataset.index,
      isFilter:true
    })
  },
  bindPickerChange(e) {//城市选择器
    this.setData({
      cityNum: e.detail.value
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
      title: '找项目',
    })
    this.setData({
      data: data
    })
    // 获取初始资料
    var self = this;
    wx.request({
      url: app.globalData.apiUrl + '/restful/3.0/app/publish/PROJECT/1/10',
      method: 'GET',
      header: {
        Authorization: app.globalData.token
      },
      success: function (data) {
        console.log('资源', data);
        if (data.statusCode == 200) {
          self.setData({
            // data: data.data.data
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
    //设置tab下标
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // 获取初始资料
    var self = this;
    wx.request({
      url: app.globalData.apiUrl + '/restful/3.0/app/publish/PROJECT/1/10',
      method: 'GET',
      header: {
        Authorization: app.globalData.token
      },
      success: function (data) {
        console.log('资源', data);
        if (data.statusCode == 200) {
          self.setData({
            // data: data.data.data
          })
        }
        wx.hideLoading();
      }
    })
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