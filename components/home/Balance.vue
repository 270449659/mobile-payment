<template>
	<view class="balance">
	  <view class="uni-flex uni-row balance-main"> 
		   <view class="flex-item flow balance-item">
			  <text class="flow-title">通用流量剩余</text>		
			  <text v-if="login" class="flow-text">通用流量剩余</text>			 
			  <button v-else class="login-to-view-btn mini-btn" type="default" size="default">登录查看</button>
			</view>
		   <view class="uni-flex flex-item telephone-charge-surplus balance-item">
			  <text class="telephone-charge-surplus-title">话费剩余</text>
			  <text class="telephone-charge-surplus-text">--元</text>
			</view>
			<view class="uni-flex flex-item telephone-charge-surplus balance-item">
			   <text class="telephone-charge-surplus-title">语音剩余</text>
			   <text class="telephone-charge-surplus-text">--分钟</text>
			 </view>
			 <view class="uni-flex flex-item telephone-charge-surplus balance-item">
				<text class="telephone-charge-surplus-title">积分</text>
				<text class="telephone-charge-surplus-text">--分</text>
			  </view>
	   </view>
	</view>
</template>

<script>
export default{
	// props:['datas'],
	data(){
		return {
			login:false
		}
	},
	onLoad() {
	
	},
	methods:{	
	},		
}
</script>
<style lang="scss" scoped>

.balance{
		// width: 100%; 
		margin: 5rpx 0 13rpx 0;
		padding: 0 25rpx;
		background-color:#FFF;
		// background-color:#F8F8FA;
		.balance-main{
			flex-direction: unset;
			justify-content:space-between;
		    background-color:#FFFFFF;
			border-radius:15rpx;
			box-shadow: 0px 0px 6rpx #bfbfbf;
		   .balance-item{
			   padding:25rpx 32rpx 20rpx 32rpx;
			   font-size: 22rpx;
			   flex-direction: column;
			   .flow-title{color: #737373; }
			   .flow-text{color: #404245;}
			    .telephone-charge-surplus-title{color: #737373;}
			   .login-to-view-btn{
				   margin: 14rpx 0 0 0;
				   // padding:8rpx 14rpx 13rpx 14rpx;
				   padding:5rpx 0 8rpx 0;
				   font-size: 22rpx;
				   width:120rpx;
				   // height: 35rpx;
				   color: #059CE1;
				   line-height: 35rpx;
				   border: 1px solid #059CE1;
			   }
		   }
		}
	}
</style>