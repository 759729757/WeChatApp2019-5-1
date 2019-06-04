

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    banner: [{
      image: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      title: '广告平台1',
      describe: '中式客厅吸顶灯套餐中式客厅吸顶灯套餐中式客厅吸客厅吸客厅吸顶灯套餐'
    }, {
      image: 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      title: '广告平台2',
      describe: '中式客厅吸顶灯套餐中式客厅吸顶灯套餐中式客厅吸客厅吸客厅吸顶灯套餐'
    }, {
      image: 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640',
      title: '广告平台3',
      describe: '中式客厅吸顶灯套餐中式客厅吸顶灯套餐中式客厅吸客厅吸客厅吸顶灯套餐'
    }
    ],
    autoplay: true,//首页轮播自动播放
    interval: 5000,//时间间隔
    duration: 1000,//切换时长
    city: ['广州', '深圳', '珠海', '东莞'], cityNum: 0,//城市选择器

  },
  bindPickerChange(e) {//城市选择器
    this.setData({
      cityNum: e.detail.value
    })
  },
  onLoad: function () {

  }
})
