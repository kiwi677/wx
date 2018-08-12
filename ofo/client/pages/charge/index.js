// pages//charge/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '充值中心'
    })
  },
  input:function(e){
    this.setData({
      money: e.detail.value,
    })    
  },
  charge:function(){
    if (this.data.money <= 0 || isNaN(this.data.money)){
      wx.showModal({
        title: '充值失败',
        content: '只支持人民币哦！',
        confirmText:'去放血',
        cancelText: '平穷限制'
      })
      // wx.showActionSheet({
      //   itemList: ['A', 'B', 'C'],
      //   success: function (res) {
      //     console.log(res.tapIndex)
      //   },
      //   fail: function (res) {
      //     console.log(res.errMsg)
      //   }
      // })
    }else{
      wx.getStorage({
        key: 'money',
        success: (res) =>{
          // console.log(res.data)
          wx.setStorage({
            key: 'money',
            data: parseInt(res.data) + parseInt(this.data.money)
          })
        },
        fail: ()=>{
          wx.setStorage({
            key: 'money',
            data: this.data.money
          })
        },
      })
      wx.redirectTo({
        url:'../wallet/index'
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