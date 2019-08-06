// pages/mine/pubilsh.js
var data = require('data.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: ['广州', '深圳', '珠海', '东莞'], cityNum: 0,//城市选择器
    filterActive: 0, filterType: ['project', 'resource'],
    
    navLeftActive: 0,
    deleteId:'',
  },
  bindPickerChange(e) {//城市选择器
    this.setData({
      cityNum: e.detail.value
    })
  },
  onShow:function(){
    wx.setNavigationBarTitle({
      title: '我的发布',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      data: data
    })
    this.InitData();
  
  },
  InitData:function(){
    //获取用户数据
    var self = this;
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: app.globalData.apiUrl + '/restful/3.0/publish/subscriber/' + self.data.filterType[self.data.filterActive]+'/1/10',
      method: 'GET',
      header: {
        Authorization: app.globalData.token
      },
      success: function (data) {
        console.log(data);
        if (data.statusCode == 200) {
          self.setData({
            data: data.data.data.content
          })
        } else {
          //状态吗不是200 没有获取到用户数据
          wx.navigateTo({
            url: '/pages/login/index'
          })
        }
        wx.hideLoading();
      }
    })
  },
  toogleHini(e) {
    var i = e ? e.currentTarget.dataset.index : '';
    // this.setHiniState(i); //把menu关闭
    this.setData({
      confirm: !this.data.confirm,
      deleteId:i
    })
  },
  setTab1(){
    this.setData({
      filterActive:0
    })
    this.InitData();
  },
  setTab2() {
    this.setData({
      filterActive: 1
    })
    this.InitData();
  },
  deleteById(id) {
   
    //获取用户数据
    var self = this;
    wx.showLoading({
      title: '删除中',
    })
    wx.request({
      url: app.globalData.apiUrl + '/restful/3.0/publish/'+self.data.deleteId,
      method: 'DELETE',
      header: {
        Authorization: app.globalData.token
      },
      success: function (data) {
        console.log(data);
        if (data.statusCode == 200) {
          self.setData({
            confirm: !self.data.confirm,
            deleteId: ''
          })
          self.InitData();
        } else {

        }
        wx.hideLoading();
      }
    })
  },

})