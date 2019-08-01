// pages/index2/index2.js
var app = getApp();
var testData = require('data.js');//拿测试数据
Page({
  /**
   * 页面的初始数据
   */
  data: {
    city: ['广州', '深圳', '珠海', '东莞'], cityNum: 0,//城市选择器

    autoplay: true,//首页轮播自动播放
    interval: 5000,//时间间隔
    duration: 1000,//切换时长

    engine: [],// 工程搭建数据
    engineSwiperIndex: 0,
    viedoIndex: 0, //影视制作选中的下标
    informationIndex: 0,//快速咨询选中的下标
    hrIndex: 0,//人力资源选中的下标
    projectIndex: 0,//人力资源选中的下标

    // 各个部分的数据
    banner: [],  
    supplier:[],
    viedo:[],
    media:[],
    hr:[],
    performance:[],
    engine:[],
    information:[],
    project:[],
    partnar:[],

  },


  goRecommend:function(){
    wx.navigateTo({
      url: '/pages/recommend/index',
    })
  },
  goZixun:function(){
    wx.navigateTo({
      url: '/pages/news/index',
    })
  },
    //人力资源点击
  hr1Click: function (index) {
    this.setData({
      hrIndex: index.currentTarget.id
    })
  },
  hr2Click: function (index) {
    this.setData({
      hrIndex: "2"+index.currentTarget.id
    })
  },
  hr3Click: function (index) {
    this.setData({
      hrIndex: "3" +index.currentTarget.id
    })
  },
  //快速咨询点击
   informationClick: function (index) {
    this.setData({
      informationIndex: index.currentTarget.id
    })
  },
  //影视制作点击
  viedoClick:function(index){
    this.setData({
      viedoIndex: index.currentTarget.id
    })
  },
  bindPickerChange(e) {//城市选择器
    this.setData({
      cityNum: e.detail.value
    })
  },
  // 工程搭建swiper滑动
  engineSwiper:function(e){
    this.setData({
      engineSwiperIndex : e.detail.current
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }

    this.setData({
      banner: testData.banner,
      supplier: testData.supplier,
      viedo: testData.viedo,
      media: testData.media,
      hr: testData.hr, hr2: testData.hr2, hr3: testData.hr3,
      performance: testData.performance,
      engine: testData.engine,
      information: testData.information,
      project: testData.project,
      partnar: testData.partnar,
    });
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //设置tab下标
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
    wx.setNavigationBarTitle({
      title: 'AD圈',
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

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