<template>
   <view class="user-menu mglr30 mgt20 mgb20">
	   <view class="menu-total pdb30">我的服务 </view>
	   <view class="uni-flex menu-list" > 
		   <view class="menu-item " @click="gohotSale()">
		      <image class="item-icon" src="/static/images/home/item1-icon.png"></image>
		      <view class="item-text">套餐余量</view>
		    </view>
		    <view class="menu-item"  @click="goPhone()">
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
	.user-menu .menu-total{margin:0 30rpx;border-bottom:1rpx solid #e2e2e2;}
	.menu-list{ 
		padding-top:22rpx; 
	    flex-direction:row;
		 flex-wrap:wrap;
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
	    height: 28rpx;
	    line-height: 28rpx;
	    box-sizing: border-box;
	    border: none;
	    overflow: hidden;
	    color: #404245;
	    font-size: 28rpx;
	    font-weight: normal;
	    text-align: center;
	    margin-top: 22rpx;
	  }
</style>