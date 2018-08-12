//index.js
Page({
  data:{
    longitude: 121.48,
    latitude: 31.22
  },
  onLoad:function(options){
    this.time = options.timer;
    wx.getLocation({
      success:(res)=>{
        this.setData({
          longitude: res.longitude,
          latitude:res.latitude
        })
      }
    });
    wx.getSystemInfo({
      success: (res)=> {
        // console.log(res);
        this.setData({
          control:[{
            id:1,
            iconPath:"/images/focus.png",
            position:{
              width:50,
              height:50,
              left:20,
              top:res.windowHeight-80
            },
            clickable:true
          },{
              id: 2,
              iconPath: "/images/use.png",
              position: {
                width: 90,
                height: 90,
                left: res.windowWidth/2 - 45,
                top: res.windowHeight - 100
              },
              clickable: true
            }, {
              id: 3,
              iconPath: "/images/warm.png",
              position: {
                width: 50,
                height: 50,
                left: res.windowWidth - 70,
                top: res.windowHeight - 80
              },
              clickable: true
            }, {
              id: 4,
              iconPath: "/images/user2.png",
              position: {
                width: 50,
                height: 50,
                left: res.windowWidth - 70,
                top: res.windowHeight - 155
              },
              clickable: true
            }, {
              id: 5,
              iconPath: "/images/location.png",
              position: {
                width: 36,
                height: 43,
                left: res.windowWidth/2 - 18,
                top: res.windowHeight/2 - 43
              }
            }
          ]
        })
      },
    })
  },
  moveToCenter: function () {
    this.mapctx.moveToLocation();
  },
  onShow:function(){
    this.mapctx = wx.createMapContext("ofo-map");
    this.moveToCenter();
  },
  bindcontroltap: function (e) {
    switch (e.controlId) {
      case 1:
        this.moveToCenter();
        break;
      case 2:
        if(this.time){
          wx.navigateBack({
            delta:1
          })
        }else{
          wx.scanCode({
            success: () => {
              wx.request({
                url: 'https://easy-mock.com/mock/5ade90f85de71a1420ead330/oao/',
                success: (res) => {
                  wx.hideLoading();
                  wx.redirectTo({
                    url: '../scanReault/index?password=' + res.data.data.password + '&number=' + res.data.data.number,
                    success: (res) => {
                      wx.showToast({
                        title: '获取密码成功',
                        duration: 1000,
                        mask: true
                      })
                    }
                  })
                }
              })
            },
            fail: () => {
              wx.showToast({
                title: '获取密码失败',
              })
            }
          })
        };
        break;
      case 3:
        wx.navigateTo({
          url: '../warn/index',
        });
        break;
      case 4:
        wx.navigateTo({
          url: '../user/index',
        });
        break;

    }
  }
  

})
