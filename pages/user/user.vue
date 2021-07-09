<template>
	<view class="user">
		<view class="uni-flex  uni-page-head">
			<view class="uni-page-head-right">
				<view class="uni-page-head-right-btn" ><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 24px; font-weight: normal; font-family: font1625734044795;"></i></view>
				<view class="uni-page-head-right-btn"><i class="uni-btn-icon"></i></view>
			</view>
		</view><!-- uni-page-head end-->
		<view class="content">
			<view  class="user-section">
				<image class="bg" src="https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/user-bg.png" ></image>     
				<view class="user-info-box ">
					<view class="portrait-box">
						<image class="portrait" src="https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/missing-face.png"></image>
					</view>
					<view  class="info-box uni-flex">
						<text class="user-number">123</text>
						<text class="user-name">123</text>
					</view>
				</view>
			</view><!-- 个人信息-end -->
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view class="user-function-list">
			<view class="user-item-title">
				 <button class="mini-btn" @click="Login"  type="default" size="mini">登录</button>
				<view @click="outer(isLogin)" class="more">全部订单<uni-icon type="forward" size="18" color="#999999"></uni-icon></view>
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
	.uni-page-head{
		background-color: #3e7cf3;
		justify-content: space-between;
	}
	.uni-page-head .uni-page-head-right-btn {
	    display: flex;
	    align-items: center;
	    width: 32px;
	    height: 32px;
	    border-radius: 50%;
	    background-color: rgba(0,0,0,.5);
	}
	.content {
		/* display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center; */
	}
    .user-section{
	  padding: 140rpx 50rpx 0;
      position: relative;
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
	}
	.user-info-box .portrait{
	    width: 65px;
	    height: 65px;
	    border: 2px solid #fff;
	    border-radius: 50%;
	}
	.info-box{flex-direction:column; z-index: 1;}
	.user-info-box .user-number {
	    font-size: 56rpx;
	    color: #fff;
	    margin-left: 10px;
	}
	.user-info-box .user-name {
	    font-size: 35rpx;
	    color: #fff;
	    margin-left: 10px;
	}
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
