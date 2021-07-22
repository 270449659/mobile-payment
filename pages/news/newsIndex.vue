<template>
	<view class="news">
		<view class="content">
			<!-- 头部 -->
			<view class="news-headr">
				<view class="news-headr-bg"></view>
				<view class="news-menu">
					<view class="menu-item" @click="gohotSale()">
					<view class="menu-item-box">
					  <view class="menu-item-box-red-dot"> </view>
					  <image class="item-icon" src="/static/images/news/mobile-announcement-icon.png"></image>
					 </view>
					 <view class="item-text">实名认证</view>
				   </view>
				   <view class="menu-item"  @click="goVoucherCenter()">
					 <image class="item-icon" src="/static/images/news/preferential-promotion-icon.png"></image>
					 <view class="item-text">钱包充值</view>
				   </view>
				   <view class="menu-item"  @click="goCashgift()" >
					 <image class="item-icon" src="/static/images/news/online-service-icon.png"></image>
					 <view class="item-text">订购套餐</view>
				   </view>
				</view>   
			</view>
			<!-- 头部 end-->
			
			<view class="news-main">
				<view class="news-main-list">
					<view class="news-main-list-item flex-align-items-center mgl30 mgb25">
						<view class="news-main-list-item-left mgr25">
							<view class="red-dot"></view>
							<image class="item-icon" src="/static/images/news/account-notification-icon.png"></image>
						</view>
						<view class="news-main-list-item-right flex-direction-column">
							<div class="news-main-list-item-right-title flex-justify-content-s-b mgb20"><text>账号通知</text><text class="text">06-24</text></div>
							<text class="text">【中国移动】尊敬的客户，您参与"签到有礼"活动活动活动活动</text>
						</view>
					</view>
					<view class="news-main-list-item flex-align-items-center mgl30 mgb25">
						<view class="news-main-list-item-left mgr25">
							<image class="item-icon" src="/static/images/news/product-news-icon.png"></image>
						</view>
						<view class="news-main-list-item-right flex-direction-column">
							<div class="news-main-list-item-right-title flex-justify-content-s-b mgb20"><text>账号通知</text><text class="text">06-24</text></div>
							<text class="text">【中国移动】尊敬的客户，您参与"签到有礼"活动活动活动活动</text>
						</view>
					</view>
					<view class="news-main-list-item flex-align-items-center mgl30 mgb25">
						<view class="news-main-list-item-left mgr25">
							<image class="item-icon" src="/static/images/news/139mailbox.png"></image>
						</view>
						<view class="news-main-list-item-right flex-direction-column">
							<div class="news-main-list-item-right-title flex-justify-content-s-b mgb20"><text>账号通知</text><text class="text">06-24</text></div>
							<text class="text">【中国移动】尊敬的客户，您参与"签到有礼"活动活动活动活动</text>
						</view>
					</view>
				</view>
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

<style lang="scss" scoped>
	.news .news-headr{  
		position:relative;
		height:210rpx;
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
.news-menu .menu-item .menu-item-box{
	position: relative;
	margin:0 auto;
	width: 79rpx;
	height: 79rpx;
	}
	.news-menu .menu-item .menu-item-box-red-dot{
	position: absolute;
	border: 4rpx solid #fff;
	border-radius: 25rpx;
	width: 20rpx;
	height:20rpx;
	
	z-index: 1;
	top: -8rpx;
	right:-8rpx;
	background-color: #ff001c;
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
   .news-main{
	   margin-top: 100rpx;
	   .news-main-list{
		    .news-main-list-item{
				.news-main-list-item-left{
					position: relative;
					.red-dot{ 
						border: 4rpx solid #fff;
						border-radius: 25rpx;
						width: 20rpx;
						height:20rpx;
						position: absolute;
						z-index: 1;
						top: -10rpx;
						right:-10rpx;
					    background-color: #ff001c;
					}
					.item-icon{
						 width: 90rpx;
						 height: 90rpx;
					}
				}
				.news-main-list-item-right{
					padding: 24rpx 24rpx 24rpx 0;
					// margin-right: 24rpx;
					border-bottom: 1px solid #ececec;
					font-size: 31rpx;
					.news-main-list-item-right-title{
						height:31rpx;
						.text{font-size: 31rpx;}
					}
					.text{
					  display: -webkit-box;
					  	font-size: 25rpx;
					  height:26rpx;
					  line-height:26rpx;
					  color: #969696;
					  overflow: hidden;
					  word-break: break-all;
					  text-overflow: ellipsis;
					  -webkit-box-orient: vertical;
					  -webkit-line-clamp: 1;  
					}
				}
			}
	    }
   }
  

  
</style>
