// pages/mine/pubilsh.js
var data = require('data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: ['广州', '深圳', '珠海', '东莞'], cityNum: 0,//城市选择器
    filterActive:1,
    navLeftActive: 0,
  },
  bindPickerChange(e) {//城市选择器
    this.setData({
      cityNum: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      data: data
    })
    wx.setNavigationBarTitle({
      title: '我的发布',
    })
  },
  toogleHini(e) {
    var i = e ? e.currentTarget.dataset.index : '';
    this.setHiniState(i); //把menu关闭
    this.setData({
      confirm: !this.data.confirm
    })
  },
  //点击菜单按钮
  hini(e) {
    var i = e.currentTarget.dataset.index;
    var navLeftActive = this.data.navLeftActive;
    var _hini = this.data.data[navLeftActive].data[i].hini;
    var hini = 'data[' + navLeftActive + '].data[' + i + '].hini'
    this.setData({
      [hini]: !_hini
    })
  },
  setHiniState(index) {
    if (index == undefined) return false;
    var navLeftActive = this.data.navLeftActive;
    var _hini = this.data.data[navLeftActive].data[index].hini;
    var hini = 'data[' + navLeftActive + '].data[' + index + '].hini'
    this.setData({
      [hini]: !_hini
    })
  },

})