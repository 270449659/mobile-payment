<template>
	<view class="user">
		<view class="uni-flex  uni-page-head fixed-top">
			<view class="uni-page-head-left"></view><!-- uni-page-head-left end-->
			<view class="uni-flex uni-page-head-right">
				<view class="uni-page-head-right-btn"><image class="setUp-icon" src="/static/images/user/setUp-icon.png"></image></view>
			    <view @click="getCustomerService"   class="uni-page-head-right-btn"><image class="customerService-icon" src="/static/images/user/customerService-icon.png"></image></view>
				<view @click="getNews" class="uni-page-head-right-btn"><image class="news-icon" src="/static/images/user/news-icon.png"></image></view>
			</view>
		</view><!-- uni-page-head end-->
		<view class="content">
			<view  class="user-section">
				<!-- -->
				<view class="user-info-box">
					<view class="portrait-box">
						<image class="portrait" src="https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/missing-face.png"></image>
					</view>
					<view  class="info-box uni-flex">
						<text class="user-number">12311111111 <button class="mini-btn" @click="Login"  type="default" size="mini">登录</button></text>
						<text class="user-name">广东广州</text>
					</view>
				</view><!--user-info-box end-->
				<view class="uni-flex user-info-box mgt20">
					<view class="uni-flex set-meal"><text>我的套餐</text><image src="/static/images/right-iocn.png"></image></view>
					<view class="uni-flex credit-score"><text>我的套餐</text><image src="/static/images/right-iocn.png"></image></view>
				</view>
				<view class="user-info-box uni-block mgt50">
					<view class="uni-flex user-info-box-list">
						<view class="user-info-box-item mglr45">
						   <view class="user-info-box-item-number mgb25">0</view>
						   <view class="user-info-box-item-font">卡券</view>
						</view>
						<view class="user-info-box-item mglr45">
							<view class="user-info-box-item-number mgb25">0<text>m</text></view>
							<view class="user-info-box-item-font">流量</view>
						</view>
						<view class="user-info-box-item mglr45">
							<view class="user-info-box-item-number mgb25">0</view>
							<view class="user-info-box-item-font">5G金币</view>
						</view>
						<view class="user-info-box-item mglr45">
							<view class="user-info-box-item-number mgb25">482</view>
							<view class="user-info-box-item-font">积分</view>
						</view>
					</view>
				</view>
			</view><!-- 个人信息-end -->
			<!-- 介绍 -->
			<UserIntroduce></UserIntroduce>
		    <!-- 介绍 -->
			<!-- 菜单 -->
			<UserMenu></UserMenu>
			<!-- 菜单 -->
			<!-- 我的服务 -->
			<MyService></MyService>
			<!-- 我的服务 end-->	
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	import  UserIntroduce from '@/components/user/UserIntroduce'
	import  UserMenu from '@/components/user/UserMenu'
	import  MyService from '@/components/user/MyService'
	
	export default {
		components: {
			UserIntroduce,
			UserMenu,
			MyService
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		onShow(){
			  this.isLogin=this.$isLogin()
			  if(this.isLogin){
				uni.startPullDownRefresh();
			  }
		},
		methods: {
             outer(url){
				 console.log('dd',this.$isLogin())
				if(this.$isLogin()){
					uni.navigateTo({
					  url: url
					});	
				}else{
					uni.navigateTo({
					 url: "/pages/login/login"
					});
				}
			},	
			Login(){
				uni.navigateTo({
				 url: "/pages/login/login"
				});
			},
			getNews(){
				uni.navigateTo({
				 url: "/pages/news/newsIndex"
				});
			},
           getCustomerService(){
			   uni.navigateTo({
			    url: "/pages/customerService/customerServiceIndex"
			   });
			}
			
		}
	}
</script>

<style lang="scss">
	/* #ifdef APP-PLUS */
	.user .uni-page-head {height: 160rpx; padding-top:55rpx;} 
	.user .content{ margin-top:160rpx;}  
	/* #endif */
	page{background-color: #f6f6f6;}
	.uni-page-head{
		width: 100%;
		height: 105rpx;
		z-index: 100;
		background-color: #3e7cf3;
		justify-content: space-between;
		padding:30rpx 30rpx;
		box-sizing: border-box;
	}
	.uni-page-head .uni-page-head-right{}
	.uni-page-head .uni-page-head-right-btn {
	    display: flex;
	    align-items: center;
	    width: 45rpx;
	    height: 45rpx;
	    border-radius: 50%;
		margin-left: 30rpx;
	}
	.setUp-icon{
		width:100%;
		height:100%;
	}
	.customerService-icon{
		width:100%;
		height:100%;
	}
	.news-icon{
		width:100%;
		height:100%;
	}
	.content {
		width: 100%;
		margin-top:105rpx;
		padding-bottom:25rpx;
		
	}
    .user-section{
	  padding: 20rpx 30rpx 100rpx 30rpx;
      position: relative;
	  background-color: #3e7cf3;
	   border-radius: 0 0 300rpx 300rpx/0 0 20rpx 20rpx;
	  
	 }
	.user-section .bg {
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: 100%;
	    height: 100%;
	    -webkit-filter: blur(1px);
	    filter: blur(1px);
	
	}
	.user-info-box{
		display: flex;
		align-items: center;
		z-index: 1;
		color: #fff;
	}
	.user-info-box.uni-block{display: block;}
	.user-info-box .portrait-box{
	    width: 90rpx;
	    height:90rpx;
	    border: 2px solid #fff;
	    border-radius: 50%;
	}
	.user-info-box .portrait{
	    width: 100%;
	    height:100%;
	    border-radius: 50%;
	}
	.info-box{flex-direction:column; z-index: 1;}
	.user-info-box .user-number {
	    font-size: 38rpx;
	    margin-left: 33rpx;
	}
	.user-info-box .user-name {
	    font-size: 23rpx;
	    margin-left: 33rpx;
	}
	.user-info-box .set-meal,.user-info-box .credit-score{
		padding: 4rpx 15rpx;
		border: 1px solid #fff;
		border-radius: 25rpx; 
		 align-items: center;
		z-index: 1;
		margin-right: 12rpx;
	}
	.user-info-box .set-meal text,.user-info-box .credit-score text{
		font-size:20rpx;
		margin-right: 15rpx;
	}
	.user-info-box .set-meal image,.user-info-box .credit-score image{  width:7rpx; height: 13rpx;
	}
	.user-info-box-list{justify-content:space-around;}
	.user-info-box-list .user-info-box-item{ text-align: center;}
	.user-info-box-list .user-info-box-item .user-info-box-item-number{font-size: 33rpx; line-height: 34rpx; height: 34rpx;}
	.user-info-box-list .user-info-box-item .user-info-box-item-number text{font-size: 18rpx;}
	.user-info-box-list .user-info-box-item .user-info-box-item-font{font-size: 22rpx;}
	uni-image {
	    max-width: 100%;
	    display: inline-block;
	    position: relative;
	    z-index: 0;
	}
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}
	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
