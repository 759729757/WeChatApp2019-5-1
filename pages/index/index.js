// pages/index2/index2.js
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

  //项目翻页
  // projectPre:function(){
  //   var i = this.data.projectIndex - 1
  //   if(i<=0) i=0;
  //   this.setData({
  //     projectIndex: i
  //   })
  // },
  // //项目翻页
  // projectNext: function () {
  //   var i = this.data.projectIndex + 1
  //   if (i >= this.data.project.length) i = this.data.project.length - 1;
  //   this.setData({
  //     projectIndex: i
  //   })
  // },
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('拿到数据',testData);
    this.setData({
      banner: testData.banner,
      supplier: testData.supplier,
      viedo: testData.viedo,
      media: testData.media,
      hr: testData.hr,
      performance: testData.performance,
      engine: testData.engine,
      information: testData.information,
      project: testData.project,
      partnar: testData.partnar,
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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