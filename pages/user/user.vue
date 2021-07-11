<template>
	<view class="user">
		<view class="uni-flex  uni-page-head">
			<view class="uni-page-head-left"></view><!-- uni-page-head-left end-->
			<view class="uni-flex uni-page-head-right">	
				<view class="uni-page-head-right-btn" ><svg t="1625733985990" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7243" width="64" height="64"><path d="M512.25928 704c-108.8 0-192-83.2-192-192s83.2-192 192-192 192 83.2 192 192-83.2 192-192 192z m0-320c-70.4 0-128 57.6-128 128s57.6 128 128 128 128-57.6 128-128-57.6-128-128-128z" p-id="7244" fill="#ffffff"></path><path d="M640.25928 1024H384.25928c-19.2 0-32-12.8-32-32v-121.6c-25.6-12.8-51.2-25.6-70.4-38.4l-102.4 64c-12.8 6.4-32 6.4-44.8-12.8l-128-224C-6.14072 640 0.25928 620.8 19.45928 614.4l102.4-64v-76.8l-102.4-64C0.25928 403.2-6.14072 384 6.65928 364.8l128-224c6.4-12.8 25.6-19.2 44.8-6.4l102.4 64c19.2-12.8 44.8-32 70.4-38.4V32c0-19.2 12.8-32 32-32h256c19.2 0 32 12.8 32 32v121.6c25.6 12.8 51.2 25.6 70.4 38.4l102.4-64c12.8-6.4 32-6.4 44.8 12.8l128 224c12.8 19.2 6.4 38.4-12.8 44.8l-102.4 64v76.8l102.4 64c12.8 6.4 19.2 25.6 12.8 44.8l-128 224c-6.4 12.8-25.6 19.2-44.8 12.8l-102.4-64c-19.2 12.8-44.8 32-70.4 38.4V992c0 19.2-12.8 32-32 32z m-224-64h192v-108.8c0-12.8 6.4-25.6 19.2-32 32-12.8 64-32 89.6-51.2 12.8-6.4 25.6-6.4 38.4 0l96 57.6 96-166.4-96-57.6c-12.8-12.8-19.2-25.6-12.8-38.4 0-19.2 6.4-32 6.4-51.2s0-32-6.4-51.2c0-12.8 6.4-25.6 12.8-32l96-57.6-96-166.4-96 57.6c-12.8 6.4-25.6 6.4-38.4 0-25.6-19.2-57.6-38.4-89.6-51.2-12.8-12.8-19.2-25.6-19.2-38.4V64H416.25928v108.8c0 12.8-6.4 25.6-19.2 32-32 12.8-64 32-89.6 51.2-12.8 6.4-25.6 6.4-38.4 0l-96-51.2-96 166.4 96 57.6c12.8 6.4 19.2 19.2 12.8 32 0 19.2-6.4 32-6.4 51.2 0 19.2 0 32 6.4 51.2 6.4 12.8 0 25.6-12.8 32l-96 57.6 96 166.4 96-57.6c12.8-6.4 25.6-6.4 38.4 0 25.6 19.2 57.6 38.4 89.6 51.2 12.8 6.4 19.2 19.2 19.2 32V960z" p-id="7245" fill="#ffffff"></path></svg></view>
			    <view class="uni-page-head-right-btn" ><svg t="1625801060750" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13124" width="64" height="64"><path d="M220.05 791.21c-57.31 0-103.93-46.62-103.93-103.93V566.1c0-57.31 46.62-103.93 103.93-103.93s103.93 46.62 103.93 103.93v121.18c0 57.31-46.62 103.93-103.93 103.93z m0-281.04c-30.84 0-55.93 25.09-55.93 55.93v121.18c0 30.84 25.09 55.93 55.93 55.93s55.93-25.09 55.93-55.93V566.1c0-30.84-25.09-55.93-55.93-55.93zM888.18 791.21c-57.31 0-103.93-46.62-103.93-103.93V566.1c0-57.31 46.62-103.93 103.93-103.93 57.31 0 103.93 46.62 103.93 103.93v121.18c0.01 27.75-10.8 53.86-30.43 73.49-19.64 19.63-45.74 30.44-73.5 30.44z m0-281.04c-30.84 0-55.93 25.09-55.93 55.93v121.18c0 30.84 25.09 55.93 55.93 55.93 14.94 0 28.99-5.82 39.55-16.38 10.56-10.56 16.38-24.61 16.38-39.54V566.1c0-30.84-25.09-55.93-55.93-55.93z" p-id="13125" fill="#ffffff"></path><path d="M653.63 904.08c-10.27 0-19.77-6.64-22.94-16.97-3.89-12.67 3.24-26.1 15.91-29.98 34.18-10.48 66.36-26.33 95.67-47.12a339.46 339.46 0 0 0 75.58-73.76c7.93-10.62 22.97-12.79 33.59-4.86 10.62 7.93 12.79 22.97 4.86 33.59a387.152 387.152 0 0 1-86.25 84.17c-33.49 23.76-70.29 41.88-109.37 53.87a24.36 24.36 0 0 1-7.05 1.06zM190.11 510.49c-1.07 0-2.14-0.07-3.23-0.22-13.14-1.77-22.35-13.85-20.59-26.99 12.32-91.54 57.45-175.75 127.08-237.12 70.27-61.93 160.58-96.03 254.31-96.03 93.55 0 183.73 33.97 253.94 95.66 69.56 61.12 114.78 145.04 127.33 236.31 1.8 13.13-7.38 25.24-20.51 27.04-13.13 1.81-25.24-7.38-27.04-20.51-10.98-79.85-50.56-153.29-111.46-206.79-61.44-53.99-140.38-83.72-222.26-83.72-82.03 0-161.08 29.85-222.57 84.04-60.96 53.73-100.47 127.42-111.24 207.51-1.63 12.07-11.93 20.82-23.76 20.82z" p-id="13126" fill="#ffffff"></path><path d="M641.39 924.89H538.97c-24.75 0-44.82-20.06-44.82-44.82 0-24.75 20.06-44.82 44.82-44.82H641.4c24.75 0 44.82 20.06 44.82 44.82-0.01 24.75-20.07 44.82-44.83 44.82z" p-id="13127" fill="#ffffff"></path></svg></view>
				<view class="uni-page-head-right-btn"><svg t="1625800858802" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10696" width="64" height="64"><path d="M268.2 957.9c-6.4 0-12.8-1.9-18.2-5.7-9.3-6.4-14.5-17.3-13.7-28.6l11.8-165.1c0.1-2-1.5-3.8-3-4.8-55.3-34.5-101.3-80-133-131.7C79 567.9 61.5 506.8 61.5 445.3c0-52.2 12.1-102.8 36-150.4 22.9-45.5 55.5-86.3 96.9-121.2 84.1-70.9 195.7-109.9 314.1-109.9s229.9 39 314.1 109.9c41.5 34.9 74.1 75.7 96.9 121.2 23.9 47.6 36 98.2 36 150.4 0 184-153.6 341.7-365.1 375.1-15.4 2.4-28.3 6.1-39.6 11.3L281.6 955c-4.3 1.9-8.8 2.9-13.4 2.9z m240.3-830c-211.2 0-383 142.4-383 317.5 0 50.4 13.9 98.6 41.2 143.2 26.5 43.3 65.3 81.6 112.2 110.8 22.2 13.8 34.8 38.2 33 63.6l-8 111.3L524 773.5c16.6-7.6 35-12.9 56.3-16.3 87.2-13.8 166.6-52.8 223.5-110 27.9-28 49.6-59.4 64.5-93.3 15.3-34.7 23.1-71.3 23.1-108.6 0.1-175-171.7-317.4-382.9-317.4zM280 760.7z" fill="#ffffff" p-id="10697"></path><path d="M320.1 447.1m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#ffffff" p-id="10698"></path><path d="M512.1 447.1m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#ffffff" p-id="10699"></path><path d="M704.1 447.1m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#ffffff" p-id="10700"></path></svg></i></view>
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
			}
 
			
		}
	}
</script>

<style>
	page{background-color: #f6f6f6;}
	.uni-page-head{
		background-color: #3e7cf3;
		justify-content: space-between;
		padding:30rpx 30rpx;
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
	.content {
		/* display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center; */
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
