// pages/billing/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number:7766,
    hours:0,
    minutes:0,
    seconds:0,
    activeText:"正在计费",
    disabled : false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '骑行计费'
    });
    this.setData({
      number : options.number? options.number:7766,
    })
    let h = 0,
        m = 0,
        s = 0;
    this.timer = setInterval(() => {
      this.setData({
        seconds : s ++,
        hours : h
      })
      if(s == 6){
        s = 0;
        m ++;
        setTimeout(()=>{
          this.setData({
            minutes: m
          })
        },100)
      };
      if(m == 6){
        m = 0;
        h ++;
        setTimeout(() => {
          this.setData({
            hours: h
          })
        }, 100)
      };
    },1000)
  },
  endride: function(){
    clearInterval(this.timer);
    this.timer = '';
    this.setData({
      activeText: "本次骑行时长",
      disabled: true
    })
  },
  movetoindex:function(){
    if (this.timer == ''){
      wx.redirectTo({
        url: '../index/index',
      })
    }else{
      wx.navigateTo({
        url: '../index/index?timer='+this.timer,
      })
    }
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