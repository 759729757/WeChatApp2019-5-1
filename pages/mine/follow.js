// pages/mine/follow.js
var data = require('data.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navLeftActive:0,
    navTab: ['资源产品', '项目需求','认证审核'],
    hini0:'true'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }, 
  unFollow(e){
    var self = this;
    wx.showLoading({
      title: '加载中',
    })
    var id = self.data.unFollowId;
    if (!id)return 0;
    wx.request({
      url: app.globalData.apiUrl + '/restful/3.0/attention/' + id ,
      method: 'DELETE',
      header: {
        Authorization: app.globalData.token
      },
      success: function (data) {
        console.log('删除结果', data);
        if (data.statusCode == 200) {
          self.setData({
            confirm: !self.data.confirm,
            unFollowId: ''
          })
          wx.showToast({
            title: '操作成功',
          });
          self.chooseType();
        }
      }
    })
  },
  toogleHini(e){
    var i = e ? e.currentTarget.dataset.index : '';
    var unFollowId = e ? e.currentTarget.dataset.id : '';
    this.setHiniState(i); //把menu关闭
    this.setData({//把弹框关闭
      confirm:! this.data.confirm,
      unFollowId: unFollowId
    })
  },
  //点击菜单按钮
  hini(e){
    var i = e.currentTarget.dataset.index;
    var navLeftActive = this.data.navLeftActive;
    var _hini = this.data.data[i].hini;
    var hini = 'data['+i+'].hini'
    this.setData({
      [hini]: !_hini
    })
  },
  setHiniState(index){
    if(index==undefined)return false;
    var navLeftActive = this.data.navLeftActive;
    var _hini = this.data.data[index].hini;
    var hini = 'data[' + index + '].hini'
    this.setData({
      [hini]: !_hini
    })
  },
  //选择分类
  chooseType(e) {
    if(e){
      var index = e.currentTarget.dataset.index;
    }else {
      var index = this.data.navLeftActive;
    }
    console.log(index)
    var self = this;
    switch (index){
      case 0:
        self.ziyuan();
      case 1:
        self.ziyuan('project');
      case 2:
        self.ziyuan('resource');
    }
    this.setData({
      navLeftActive: index
    })
  },
  ziyuan(type) {
    type = type || 'identity/authentication'
    // 获取初始资料
    var self = this;
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: app.globalData.apiUrl + '/restful/3.0/attention/'+type+'/1/10',
      method: 'GET',
      header: {
        Authorization: app.globalData.token
      },
      success: function (data) {
        console.log('资源', data);
        if (data.statusCode == 200) {
          self.setData({
            data: data.data.data.content
          })
        }
        wx.hideLoading('identity/authentication');
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (){
    this.setData({
      data: data
    })
    wx.setNavigationBarTitle({
      title: '关注列表',
    })
    this.ziyuan();

  },
 

})