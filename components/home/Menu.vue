<template>
	<!-- <view class="uni-flex uni-row">
		<view class="flex-item uni-bg-red">A</view>
		<view class="flex-item uni-bg-green">B</view>
		<view class="flex-item uni-bg-blue">C</view>
	</view> -->
   <view class="home-menu" >
       <view class="menu-item " @click="gohotSale()">
        <image class="item-icon" src="/static/images/home/item1-icon.png"></image>
        <view class="item-text">套餐余量</view>
      </view>
      <view class="menu-item"  @click="goVoucherCenter()">
        <image class="item-icon" src="/static/images/home/item2-icon.png"></image>
        <view class="item-text">充值交费</view>
      </view>
      <view class="menu-item"  @click="goCashgift()" >
        <image class="item-icon" src="/static/images/home/item3-icon.png"></image>
        <view class="item-text">红包</view>
      </view>
     <view class="menu-item" @click="goIntegral">
        <image class="item-icon" src="/static/images/home/item4-icon.png"></image>
        <view class="item-text">积分</view>
      </view>
	  <view class="menu-item" @click="goIntegral">
	    <image class="item-icon" src="/static/images/home/item1-icon.png"></image>
	    <view class="item-text">积分</view>
	  </view>
	  <view class="menu-item" @click="goIntegral">
	    <image class="item-icon" src="/static/images/home/item5-icon.png"></image>
	    <view class="item-text">积分</view>
	  </view>
	  <view class="menu-item" @click="goIntegral">
	    <image class="item-icon" src="/static/images/home/item6-icon.png"></image>
	    <view class="item-text">积分</view>
	  </view>
	  <view class="menu-item" @click="goIntegral">
	    <image class="item-icon" src="/static/images/home/item7-icon.png"></image>
	    <view class="item-text">积分</view>
	  </view>
	  <view class="menu-item" @click="goIntegral">
	    <image class="item-icon" src="/static/images/home/item7-icon.png"></image>
	    <view class="item-text">积分</view>
	  </view>
	  <view class="menu-item" @click="goIntegral">
	    <image class="item-icon" src="/static/images/home/item7-icon.png"></image>
	    <view class="item-text">积分</view>
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
		}	
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
	    width: 68rpx;
	    height: 68rpx;
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