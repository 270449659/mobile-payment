
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/home/index","pages/user/user","pages/user/card-information","pages/query/index","pages/customerService/customerServiceIndex","pages/voucherCenter/index","pages/login/login","pages/index/index"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#656565","selectedColor":"#029ffe","backgroundColor":"#fff","borderStyle":"black","list":[{"pagePath":"pages/home/index","iconPath":"static/images/tabBar/home-cur.png","selectedIconPath":"static/images/tabBar/home.png","text":"首页"},{"pagePath":"pages/query/index","iconPath":"static/images/tabBar/query-cur.png","selectedIconPath":"static/images/tabBar/query.png","text":"查询"},{"pagePath":"pages/customerService/customerServiceIndex","iconPath":"static/images/tabBar/query-cur.png","selectedIconPath":"static/images/tabBar/query.png","text":"客服"},{"pagePath":"pages/user/user","iconPath":"static/images/tabBar/user.png","selectedIconPath":"static/images/tabBar/user-cur.png","text":"我"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"mobile-payment","compilerVersion":"3.1.22","entryPagePath":"pages/home/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/home/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","enablePullDownRefresh":true,"titleNView":false}},{"path":"/pages/user/user","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","enablePullDownRefresh":true,"titleNView":false}},{"path":"/pages/user/card-information","meta":{},"window":{"navigationBarBackgroundColor":"#3e7cf3","navigationBarTitleText":"卡片信息","navigationBarTextStyle":"white"}},{"path":"/pages/query/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#03b7e0","navigationBarTitleText":"查询","navigationBarTextStyle":"white"}},{"path":"/pages/customerService/customerServiceIndex","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#03b7e0","navigationBarTitleText":"在线客服","navigationBarTextStyle":"white"}},{"path":"/pages/voucherCenter/index","meta":{},"window":{"navigationBarBackgroundColor":"#03b7e0","navigationBarTitleText":"充值中心","navigationBarTextStyle":"white"}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarBackgroundColor":"#03b7e0","navigationBarTitleText":"登录","navigationBarTextStyle":"white"}},{"path":"/pages/index/index","meta":{},"window":{"navigationBarTitleText":"uni-app"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});