// pages/mine/follow.js
var data = require('data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navLeftActive:0,
    hini0:'true'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }, 
  toogleHini(e){
    var i = e ? e.currentTarget.dataset.index : '';
    this.setHiniState(i); //把menu关闭
    this.setData({
       confirm:! this.data.confirm
    })
  },
  //点击菜单按钮
  hini(e){
    var i = e.currentTarget.dataset.index;
    var navLeftActive = this.data.navLeftActive;
    var _hini = this.data.data[navLeftActive].data[i].hini;
    var hini = 'data['+navLeftActive+'].data['+i+'].hini'
    this.setData({
      [hini]: !_hini
    })
  },
  setHiniState(index){
    if(index==undefined)return false;
    var navLeftActive = this.data.navLeftActive;
    var _hini = this.data.data[navLeftActive].data[index].hini;
    var hini = 'data[' + navLeftActive + '].data[' + index + '].hini'
    this.setData({
      [hini]: !_hini
    })
  },
  //选择分类
  chooseType(e) {
    var index = e.currentTarget.dataset.index;
    console.log(index)
    this.setData({
      navLeftActive: index
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
      title: '关注列表',
    })
  },

})