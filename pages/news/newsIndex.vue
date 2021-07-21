<template>
	<view class="news">
		<view class="content">
			<view class="news-headr">
				<view class="news-headr-bg"></view>
				<view class="news-menu">
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
				</view>   
			</view>
			<view class="text-area">
				<text class="title">{{title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.news .news-headr{  
		position:relative;
	 }
	.news .news-headr .news-headr-bg{
	   position: absolute;
       top: 0; 
	   width: 100%;
	   height:210rpx;
	    background-color: #2e9aff;
	   }
	.news-menu {
		position: absolute;
		top:40rpx; 
		border-radius: 25rpx;
		margin: 0 25rpx;
		display: block;
		width: 700rpx;
		background-color: #FFF;
		overflow: hidden;
		padding:30rpx 0 23rpx 0;
		box-shadow: 0px 0px 3px #bfbfbf;
		box-sizing: border-box;
		/* border-bottom: #e2e2e2 1px solid; */
	}
		
  .news-menu .menu-item {
	position: relative;
	float: left;
	display: block;
	width: 33.3%;
	border: none;
	box-sizing: border-box;
	padding: 22rpx 0;
  }
		
  .news-menu .menu-item .item-icon {
	display: block;
	width: 79rpx;
	height: 79rpx;
	margin: 0 auto;
	overflow: hidden;
  }
		
  .news-menu .menu-item .item-text {
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
