<template>
   <view class="user-menu mglr30 mgt20">
       <view class="menu-item " @click="gohotSale()">
        <image class="item-icon" src="/static/images/home/item1-icon.png"></image>
        <view class="item-text">购物车</view>
      </view>
      <view class="menu-item"  @click="goPhone()">
        <image class="item-icon" src="/static/images/home/item2-icon.png"></image>
        <view class="item-text">商品订单</view>
      </view>
      <view class="menu-item"  @click="goCashgift()" >
        <image class="item-icon" src="/static/images/home/item3-icon.png"></image>
        <view class="item-text">优惠券</view>
      </view>
     <view class="menu-item" @click="goIntegral">
        <image class="item-icon" src="/static/images/home/item4-icon.png"></image>
        <view class="item-text">收件地址</view>
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
}
</script>
<style>
.user-menu {
	position: relative;
	display: block;

	background-color: #FFF;
	overflow: hidden;
	padding:30rpx 0 23rpx 0;
	border-radius: 25rpx;
	/* border-bottom: #e2e2e2 1px solid; */
    }
	
	  .user-menu .menu-item {
	    position: relative;
	    float: left;
	    display: block;
	    width: 25%;
	    border: none;
	    box-sizing: border-box;
	    padding: 22rpx 0;
	  }
	
	  .user-menu .menu-item .item-icon {
	    display: block;
	    width: 68rpx;
	    height: 68rpx;
	    margin: 0 auto;
	    overflow: hidden;
	  }
	
	  .user-menu .menu-item .item-text {
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