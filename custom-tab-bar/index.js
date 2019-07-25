Component({
  data: {
    selected: 0,
    color: "#e6e6e6",
    selectedColor: "#EBC682",
    list: [
      {
        "pagePath": "/pages/index/index",
        "text": "首页",
        "iconPath": "/images/_homeIcon.png",
        "selectedIconPath": "/images/homeIcon.png"
      },
      {
        "pagePath": "/pages/project/project",
        "text": "找项目",
        "iconPath": "/images/_projectIcon.png",
        "selectedIconPath": "/images/projectIcon.png"
      },
      {
        "pagePath": "/pages/publish/publish",
        "iconPath": "/images/addIcon.png",
        "selectedIconPath": "/images/addIcon.png"
      },
      {
        "pagePath": "/pages/resource/resource",
        "text": "找资源",
        "iconPath": "/images/_ziyuanIcon.png",
        "selectedIconPath": "/images/ziyuanIcon.png"
      },
      {
        "pagePath": "/pages/mine/mine",
        "text": "我的",
        "iconPath": "/images/_mineIcon.png",
        "selectedIconPath": "/images/mineIcon.png"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})