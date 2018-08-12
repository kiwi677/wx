// pages/warn/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemValue:[{
        value:"思索私用",
        checked:false,
        color:"#f40",
    }, {
      value: "车胎坏了",
      checked: false,
      color: "#f40",
      }, {
        value: "链条断了",
        checked: false,
        color: "#f40",
    }, {
      value: "车座没了",
      checked: false,
      color: "#f40",
      }, {
        value: "脚蹬坏了",
        checked: false,
        color: "#f40",
    }, {
      value: "密码不对",
      checked: false,
      color: "#f40",
      }, {
        value: "龙头坏了",
        checked: false,
        color: "#f40",
    }, {
      value: "其他",
      checked: false,
      color: "#f40",
    }
    ],
    picUrls:[],
    checkboxValue:[],
    disabled : true,
    actionText:"拍摄/相册",
    inputValue:{
      num:0,
      desc:""
    }
  },
  changeCheckbox:function(e){
    console.log(e.detail.value);
    var _value = e.detail.value;
    if(_value.length > 0){
      this.setData({
        checkboxValue: _value,
        disabled: false,     
      })
    }else{
      this.setData({
        checkboxValue: [],
        disabled: true,
      })
    }
  },
  clickPhone:function(){
    wx.chooseImage({
      success: (res)=>{
        // console.log(res);
        var _picUrls = this.data.picUrls;
        var _tfp = res.tempFilePaths;
        for(let temp of _tfp){
          _picUrls.push(temp);

        };
        this.setData({
          picUrls : _picUrls,
          actionText: _picUrls.length > 0 ? "+":"拍摄/相册"
        });
      },
    });
  },
  delPic :function(e){
    var _index = e.target.dataset.index;
    var _picUrls = this.data.picUrls;
    _picUrls.splice(_index,1);  
    this.setData({
      picUrls: _picUrls,
      actionText: _picUrls.length > 0 ? "+" : "拍摄/相册"
    }) 
  },
  changeNum: function(e){
    this.setData({
      inputValue: {
        num: e.detail.value,
        desc: this.data.inputValue.desc
      }
    }) 
  },
  changeDesc: function(e){
    this.setData({
      inputValue:{
        num: this.data.inputValue.num,
        desc: e.detail.value
      }
    })  
  },
  submit:function(){
    if (this.data.picUrls.length > 0 && this.data.checkboxValue.length > 0){
      wx.request({
        url: 'https://easy-mock.com/mock/5ade90f85de71a1420ead330/oao/submitSuccess',
        success:(res)=>{
          wx.showToast({
            title: '提交成功',
            icon: 'success',
            mask: true
          });
          wx.navigateBack({
            delta: 1
          })
        }
      })
    }else{
      wx.showModal({
        title: '请填写完整信息',
        content:'快写',
        confirmText:'我去',
        cancelText:'我不去',
        success:(res)=>{
          if(res.canfirm){

          }else{
            wx.navigateBack({
              delta:1
            })
          }

        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '故障报告'
    });
    wx.setNavigationBarTitle({
      title: '当前页面'
    })  
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