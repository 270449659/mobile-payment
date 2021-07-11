<template>
	<view class="user">
		<view class="content">
			<view  class="card-information-section">
				<!-- 流量状态 -->
				<view class="flow-status-info-box flow-status">
					<view class="flow-status-box">
						<view class="flow-status-box-number">0<text>MB</text></view>
						<view class="flow-status-box-font">剩余流量</view>
					</view>
				</view>
				<!-- 流量状态 end-->
				<view class="flow-status-info-box uni-block mgt65">
					<view class="uni-flex flow-status-info-box-list">
						<view class="flow-status-info-box-item mglr45">
						   <view class="flow-status-info-box-item-number mgb25">0MB</view>
						   <view class="flow-status-info-box-item-font">总流量</view>
						</view>
						<view class="flow-status-info-box-item mglr45">
							<view class="flow-status-info-box-item-number mgb25">0MB</view>
							<view class="flow-status-info-box-item-font">已用流量</view>
						</view>
						<view class="flow-status-info-box-item mglr45">
							<view class="flow-status-info-box-item-number mgb25">没实名</view>
							<view class="flow-status-info-box-item-font">实名状态</view>
						</view>
						
					</view>
				</view>
			
			</view><!-- 流量信息-end -->
			<!-- 片信息 -->
			<view class="card-information-info">
				<view class="uni-flex card-information-item">
					<view>ICCID卡号:<text>111111111111111111</text></view><view class="card-information-item-r">已激活</view>
				</view>
				<view class="uni-flex card-information-item img">
					<image src="/static/images/user/card-information-info-icon.png"></image>
				</view>
				<view class="card-information-item">
					<view>当前服务商:<text>YD通道-电信流量卡</text></view>	
				</view>
			</view>
			<!-- 片信息 end-->
			<!-- 菜单 -->
			<UserMenu></UserMenu>
			<!-- 菜单 -->
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	import  UserMenu from '@/components/user/UserMenu'

	export default {
		components: {
		
			UserMenu,
		
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
            
			
 
			
		}
	}
</script>

<style>
	page{background-color: #f6f6f6;}

	.content {
		/* display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center; */
	}
    .card-information-section{
	  padding: 20rpx 30rpx 40rpx 30rpx;
      position: relative;
	  background-color: #3e7cf3;
	   border-radius: 0 0 20rpx 20rpx;
	  
	 }
	.flow-status-section .bg {
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: 100%;
	    height: 100%;
	    -webkit-filter: blur(1px);
	    filter: blur(1px);
	
	}
	.flow-status-info-box{
		display: flex;
		align-items: center;
		z-index: 1;
		color: #fff;
	}
	.flow-status-info-box.mgt65{margin-top: 65rpx;}
	.flow-status{justify-content: center;}
	.flow-status-box{ 
	  width:245rpx; 
	  height:245rpx;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  flex-direction: column;
	  border: 1px solid #2397e5; 
	  border-radius: 50%;
	  background-color: #5dbeff;
	 }
	.flow-status-box .flow-status-box-number{ font-size:58rpx; height:59rpx; line-height:59rpx; }
	.flow-status-box .flow-status-box-number text{font-size:23rpx; line-height:24rpx;}
	.flow-status-box .flow-status-box-font{ margin-top:23rpx; font-size:20rpx; line-height:21rpx;}
	.user-info-box.uni-block{display: block;}
	.card-information-info{margin:20rpx 30rpx;  background-color: #ffff;}
	.card-information-info .card-information-item{color: #787878; font-size:25rpx;line-height:25rpx; justify-content: space-between;}
    .card-information-info .card-information-item:nth-child(1){ padding:33rpx 27rpx 0  27rpx; }
	.card-information-info .card-information-item:nth-child(3){ padding:0 27rpx 33rpx   27rpx; }
	.card-information-info .card-information-item-r{color: #3c99e8; justify-content: space-between;}
    .card-information-info .card-information-item.img{margin-left:-29rpx;padding:0rpx;  width:58rpx; height:58rpx;}
	.card-information-info .card-information-item.img image{ width:100%; height:100%;}
</style>
