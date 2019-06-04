// pages/publishRes/publishRes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths: "",
    proType: ['类型1', '类型2', '类型3', '类型4'], proTypeIndex: '',
    proType2: ['2类型1', '2类型2', '2类型3', '2类型4'], proTypeIndex2: '',
    address: "广东佛山",
    telphone: "186****3239",

    tab: '',
    tabArr: [undefined],//用来放标签


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
    arr.unshift(this.data.tab);
    this.setData({
      tabArr: arr
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      proTypeIndex: e.detail.value
    })
  },
  bindPickerChange2: function (e) {
    this.setData({
      proTypeIndex2: e.detail.value
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