//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      '/image/banner1.jpg',
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    navnum:0,
    scrollTop: 0,
    scrollHeight: 0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  scroll: function (event) {
    //   该方法绑定了页面滚动时的事件，我这里记录了当前的position.y的值,为了请求数据之后把页面定位到这里来。
    this.setData({
      scrollTop: event.detail.scrollTop
    });
  },
  scroll1:function(){
    console.log(111);
    this.setData({
      scrollTop:920
    })
  },
  scroll2: function () {
    console.log(111);
    this.setData({
      scrollTop: 1300
    })
  },
  scroll3: function () {
    console.log(111);
    this.setData({
      scrollTop: 1650
    })
  },
  scroll4: function () {
    console.log(111);
    this.setData({
      scrollTop: 2000
    })
  },
  onShareAppMessage: function () {
    return {
      title: '孕家国际',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  nav:function(e){
   console.log(e);
   this.setData({
     navnum: e.currentTarget.dataset.index
   });
  },
  tel:function(){
    wx.makePhoneCall({
      phoneNumber: '400-777-1660' //仅为示例，并非真实的电话号码
    })
  },
  tel2: function () {
    wx.makePhoneCall({
      phoneNumber: '13510694071' //仅为示例，并非真实的电话号码
    })
  },
  address:function(){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度  
      success: function (res) {
        //var latitude = res.latitude
        //var longitude = res.longitude
        wx.openLocation({
          latitude: 22.5413900000, 
          longitude: 114.1203800000,
          name: "深圳市罗湖区南湖路国贸商住大厦",
          scale: 28
        })
      }
    })  
  },
  imageLoad: function (e) {
    var _this = this;
    var $width = e.detail.width,    //获取图片真实宽度  
      $height = e.detail.height,
      ratio = $width / $height;   //图片的真实宽高比例  
    var viewWidth = 800,           //设置图片显示宽度，  
      viewHeight = 800 / ratio;    //计算的高度值     
    this.setData({
      imgwidth: viewWidth,
      imgheight: viewHeight
    })
  }  ,
  onLoad: function () {
    console.log('onLoad');
    var that = this;
    var _this = this;
    wx.getSystemInfo({
      success: function (res) {
        //  console.log(res.windowHeight)
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });
   /* wx.request({
      url: 'https://www.xiwenkeji.com/home/banner/index', //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          imgUrl:res.data.data[0]['img']
        })
      },
      fail: function (err) {
        console.log(err);
      },
      complete: function (res) {
        console.log('submit complete');
      }  
    }); 
*/
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          screenHeight: res.windowHeight,
          screenWidth: res.windowWidth,
        });
      }
    });  
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
