// pages/scanReault/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:9,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '你的密码'
    })
    // console.log(options);
    let time = 9;
    this.setData({
      password: options.password ? options.password : 2211
    });
    this.timer = setInterval(()=>{
      this.setData({
        time:--time
      });
      if(time <= 0){
        clearInterval(this.timer);
        wx.redirectTo({
          url:'../billing/index',
        });
        wx.showToast({
          title: '开始计费',
          icon:'loading',
          mask: true
        })
      }
    },300)
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