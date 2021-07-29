<template>
	<!-- <view class="uni-flex uni-row">
		<view class="flex-item uni-bg-red">A</view>
		<view class="flex-item uni-bg-green">B</view>
		<view class="flex-item uni-bg-blue">C</view>
	</view> -->
   <view class="home-menu" >
       <view class="menu-item " @click="gohotSale()">
        <image class="item-icon" src="/static/images/home/menu-item1-icon.png"></image>
        <view class="item-text">实名认证</view>
      </view>
      <view class="menu-item"  @click="goVoucherCenter()">
        <image class="item-icon" src="/static/images/home/menu-item2-icon.png"></image>
        <view class="item-text">钱包充值</view>
      </view>
      <view class="menu-item"  @click="goCashgift()" >
        <image class="item-icon" src="/static/images/home/menu-item3-icon.png"></image>
        <view class="item-text">订购套餐</view>
      </view>
     <view class="menu-item" @click="goIntegral">
        <image class="item-icon" src="/static/images/home/menu-item4-icon.png"></image>
        <view class="item-text">新手指导</view>
      </view>
	  <view class="menu-item" @click="goIntegral">
	    <image class="item-icon" src="/static/images/home/menu-item5-icon.png"></image>
	    <view class="item-text">会员随心享</view>
	  </view>
	  <view class="menu-item" @click="goIntegral">
	    <image class="item-icon" src="/static/images/home/menu-item6-icon.png"></image>
	    <view class="item-text">续费说明</view>
	  </view>
	  <view class="menu-item" @click="goIntegral">
	    <image class="item-icon" src="/static/images/home/menu-item7-icon.png"></image>
	    <view class="item-text">网卡商城</view>
	  </view>
	  <view class="menu-item" @click="goIntegral">
	    <image class="item-icon" src="/static/images/home/menu-item8-icon.png"></image>
	    <view class="item-text">申请代理</view>
	  </view>
	  <view class="menu-item" @click="goIntegral">
	    <image class="item-icon" src="/static/images/home/menu-item9-icon.png"></image>
	    <view class="item-text">网卡更换</view>
	  </view>
	  <view class="menu-item" @click="liaotian">
	    <image class="item-icon" src="/static/images/home/menu-item10-icon.png"></image>
	    <view class="item-text">热门优惠</view>
	  </view>
    </view>
</template>

<script>
export default{
	// props:['datas'],
	data(){
		return {
			
		}
	},
	methods: {
		goVoucherCenter(){
			uni.navigateTo({
				url:'/pages/voucherCenter/index'			
			})
		},
		liaotian(){
			uni.navigateTo({
				url:'/pages/liaotian/index'			
			})
		},
	}
	
}
</script>
<style>
.home-menu {
	position: relative;
	display: block;
	width: 100%;
	background-color: #FFF;
	overflow: hidden;
	padding:30rpx 0 23rpx 0;
	/* border-bottom: #e2e2e2 1px solid; */
    }
	
	  .home-menu .menu-item {
	    position: relative;
	    float: left;
	    display: block;
	    width: 20%;
	    border: none;
	    box-sizing: border-box;
	    padding: 22rpx 0;
	  }
	
	  .home-menu .menu-item .item-icon {
	    display: block;
	    width: 79rpx;
	    height: 79rpx;
	    margin: 0 auto;
	    overflow: hidden;
	  }
	
	  .home-menu .menu-item .item-text {
	    display: block;
	    width: 100%;
	    height: 24rpx;
	    line-height: 24rpx;
	    box-sizing: border-box;
	    border: none;
	    overflow: hidden;
	    color: #404245;
	    font-size: 24rpx;
	    font-weight: normal;
	    text-align: center;
	    margin-top: 22rpx;
	  }
</style>