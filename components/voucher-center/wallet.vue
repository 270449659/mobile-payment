<template>
	<!-- 钱包 -->
	<view class="wallet">
		<!--充流量号码-->
		<view class="charge-rate uni-flex"> 
		   <view class="charge-rate-box uni-flex"> 
			   <text class="charge-rate-title mgr20"> 充流量号码:</text>				
			   <input type="text" name="chargeRateNumber" class="charge-rate-input" v-model="chargeRateNumber" placeholder="请输入ICCID或接入卡号" />
			  <image  @click="GetinputDelete" class="input-delete-icon mgl10" src="/static/images/voucherCenter/input-delete-icon.png"></image> 
			</view>
			<view class="flex-align-items-center mail-list">
				<image src="/static/images/voucherCenter/mail-list-icon.png"></image> 
				<text class="mail-list-text">通讯录</text>		
			</view>
		</view> 
		<!--充流量号码end-->
		<!-- 加油包-->
		<view class="monthly-package superposition mgt50">
			<view class="flex-align-items-center monthly-package-title">
				<text class="monthly-package-title-text mgl20">充余额</text>
			</view>
			<view class="monthly-package-list  uni-flex">
				<view class="monthly-package-item flex-justify-content-center">
					<image  src="/static/images/voucherCenter/choice-icon.png"></image>
					<text>10元</text>	
				</view>
				<view class="monthly-package-item flex-justify-content-center">	
					<text>30元</text>		
				</view>
				<view class="monthly-package-item flex-justify-content-center">	
					<text>50元</text>	
				</view>
			</view>
		</view>
		<view class="discount mgt50 flex-justify-content-s-b">
			<label class="radio"><radio value="r1" checked="true" />优惠</label>
			<view class="discount-right-text">无可用</view>
		</view>
		<!-- 加油包 end-->
		
		 <view  @click="goProductAttr" class="submit mgt50">
			 <text class="">￥10.00立刻支付</text>
			  <image  v-if="completed==true" class="bnt-background" src="/static/images/voucherCenter/bnt-background-true-icon.png"></image> 
			  <image  v-else class="bnt-background" src="/static/images/voucherCenter/bnt-background-icon.png"></image>
		 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				chargeRateNumber:null,
				hotIcon:true,
				completed:false,//已填为true
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.charge-rate{ align-items: flex-end;justify-content: flex-end;}
	.charge-rate-box .input-delete-icon{  
		
		width: 33rpx;
	    height: 34rpx;
		}
	.charge-rate .charge-rate-title{
	 font-size: 24rpx;
	}
	.charge-rate .charge-rate-input{
	  border-bottom: 1px solid #262626;
	  height: 46ppx;
	 font-size: 30rpx;
	 
	}
	.charge-rate .mail-list{flex-direction:column; margin-left:32rpx; }
	.charge-rate .mail-list .mail-list-text{
		color:#189ce7;
		font-size: 13rpx;
	}
	.charge-rate .charge-rate-icon{
		
		margin-right: 5px;
	}
	
	.charge-rate .mail-list image{
		width:29rpx;
		height: 33rpx;
		line-height: 33rpx;
	}
	.monthly-package{}
	.monthly-package .monthly-package-title{margin-bottom: 28rpx;}
	.monthly-package .monthly-package-title .title-vertical{width: 9rpx; height: 33rpx; background:#ff6711; border-radius: 20rpx;}
	.monthly-package .monthly-package-title text{line-height:30rpx; font-size: 30rpx; color: #333333;}
	.monthly-package .monthly-package-title text.monthly-package-title-text-explain{line-height:20rpx;color: #9b9b9b; font-size: 20rpx;}
	.monthly-package .monthly-package-title image{
		width:29rpx;
		height: 28rpx;
		}
	.monthly-package .monthly-package-list{justify-content:space-between;}
	.monthly-package .monthly-package-item{position: relative; width: 218rpx; border: 1px solid #e8e8e8; flex-direction: column; padding: 30rpx 0;  border-radius: 15rpx;   }
		
	.monthly-package .monthly-package-item image{
		position: absolute; bottom: 0; right: 0;
		width:32rpx;
		height: 32rpx;
		border-radius: 0 0 10rpx 0 ;
	
		}
	.monthly-package .monthly-package-item text{ text-align: center; font-size: 26rpx; line-height:26rpx;  }
	.monthly-package .monthly-package-item text.monthly-package-item-text{margin-top:20rpx; color:#949494; font-size:20rpx; line-height:20rpx; }
    .wallet .discount .discount {font-size:26rpx;}
    .wallet .discount .discount uni-radio{font-size:26rpx;}
    .wallet .discount .discount-right-text{ font-size:26rpx; color:#999999;}
    .wallet .submit{position: relative; text-align: center; margin: 0 auto; padding: 0; width: 640rpx; height: 110rpx;}
    .wallet .submit text{position: relative; z-index: 1; top:15rpx; font-size: 25rpx; height: 25rpx; line-height: 25rpx; color: #FFFFFF; }
    .wallet .submit .bnt-background{position: absolute;  top: 0; left: 0; z-index: 0; width: 640rpx; height: 110rpx;}
</style>
