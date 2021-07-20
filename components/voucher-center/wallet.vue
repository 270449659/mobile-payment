<template>
	<!-- 钱包 -->
	<view class="wallet">
		<!--充钱包号码-->
		<view class="charge-rate uni-flex"> 
		   <view class="charge-rate-box uni-flex">   
			    <view class="charge-rate-box-list uni-flex">   	   
				  <input type="number" name="chargeRateNumber" @input="onKeyInput" maxlength="30" class="charge-rate-input" v-model="chargeRateNumber" placeholder="请输入ICCID或接入卡号" />
				  <image  @click="GetinputDelete" class="input-delete-icon mgl10" src="/static/images/voucherCenter/input-delete-icon.png"></image> 
			    </view>
			    <view class="charge-rate-explain"> 仅支持钱包账户充值</view>	
			</view>
			<view class="rights uni-flex">  
				<view class="flex-align-items-center mail-list">
					<image src="/static/images/voucherCenter/mail-list-icon.png"></image> 
					<text class="mail-list-text">家人充</text>		
				</view>
				<view class="flex-align-items-center mail-list">
					<image src="/static/images/voucherCenter/mail-list-icon.png"></image> 
					<text class="mail-list-text">他人充</text>		
				</view>
			</view> 	
		</view> 
		<!--充钱包号码end-->
		<!-- 充余额-->
		<view class="charge-balance superposition mgt50">
			<view class="flex-align-items-center charge-balance-title">
				<text class="charge-balance-title-text mgl20">充余额</text>
			</view>
			<view class="charge-balance-list  uni-flex"> 
				<view @click="chargeBalance(1)" v-bind:class="active==1 ? 'active' : ''" class="charge-balance-item flex-justify-content-center">
					<image v-if="active==1" src="/static/images/voucherCenter/choice-icon.png"></image>
					<text>10元</text>	
				</view>
				<view @click="chargeBalance(2)" v-bind:class="active==2 ? 'active' : ''" class="charge-balance-item flex-justify-content-center">
					<image v-if="active==2" src="/static/images/voucherCenter/choice-icon.png"></image>
					<text>30元</text>		
				</view>
				<view @click="chargeBalance(3)" v-bind:class="active==3 ? 'active' : ''" class="charge-balance-item flex-justify-content-center">	
				<image v-if="active==3" src="/static/images/voucherCenter/choice-icon.png"></image>
					<text>50元</text>	
				</view>
			</view>
		</view>
		<view class="balance flex-justify-content-s-b mgt30 mgb50"> 
		   <view class="balance-left"> 钱包余额:<text class="balance-text">22.11</text>元 </view> <view class="balance-right">到账金额:<text class="balance-text">22.11</text>元 </view>  
		</view>
		<!-- 充余额 end-->
		<view class="payment mgt50 pdb30">
			     <view class="flex-justify-content-s-b mgb40"><view class="payment-title"><image class="payment-icon" src="/static/images/user/WeChat-icon.png"></image>微信</view><label class="radio"><radio value="r1" checked="true" /></label></view>
			    <view class="flex-justify-content-s-b mgb40"> <view class="payment-title"><image class="payment-icon" src="/static/images/user/Alipay-icon.png"></image>支付宝</view><label class="radio"><radio value="r1" checked="true" /></label></view>
			    <view class="flex-justify-content-s-b mgb40"> <view class="payment-title"> <image class="payment-icon" src="/static/images/user/balance-icon.png"></image>钱包</view><label class="radio"><radio value="r1" checked="true" /></label></view>
			    <view class="flex-justify-content-s-b "> <view class="payment-title"><image class="payment-icon" src="/static/images/user/balance-icon.png"></image>银联</view><label class="radio"><radio value="r1" checked="true" /></label></view>
		</view>
		<view class="discount mgt50 flex-justify-content-s-b">
			<label class="radio"><radio value="r1" checked="true" />优惠</label>
			<view class="discount-right-text">无可用</view>
		</view>
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
				inputValue:null,//监听号码
				active:1
			}
		},
		onLoad() {

		},
		methods: {
			//输入框删除
			GetinputDelete(){
				this.chargeRateNumber='';
			},
			//输入框删除-end
			
			//监听号码
			 onKeyInput: function(event) {
			   console.log(event)  
			    this.inputValue = event.target.value
				if(this.inputValue){
				   if(this.inputValue.length>11){
					   uni.showToast({
							title: '请输入11位码号',
							duration: 1000
						});
				   }else{
					   this.completed=true;
					// this.$refs.popup.open('bottom')				  
				   }
				}
			 },
			 //监听号码
           goProductAttr(){
			   
		   },
		   chargeBalance(number){
			   this.active=number;
		   }
		}
	}
</script>

<style>
	.wallet .charge-rate{ align-items:center;justify-content: space-between; border-bottom: 1px solid #c9c9c9;}
	.wallet .charge-rate-box{ padding-bottom:35rpx;  flex-direction: column;}
	.wallet .charge-rate-box-list {align-items: center; margin-bottom: 10rpx;}
	.wallet .charge-rate-box-list .uni-input-placeholder{color:#c9c9c9;}
	.wallet .charge-rate-box .input-delete-icon{  
		width: 33rpx;
	    height: 34rpx;
	
		}
	.wallet .charge-rate .charge-rate-explain{
	 font-size: 24rpx;
	 	color:#c9c9c9;
	}
	.wallet .charge-rate .charge-rate-input{
	  height: 46rpx;
	 font-size: 30rpx;
	 
	}
	.wallet .charge-rate .mail-list{flex-direction:column; margin-left:32rpx; }
	.wallet .charge-rate .mail-list .mail-list-text{
		color:#189ce7;
		font-size: 13rpx;
	}
	.wallet .charge-rate .charge-rate-icon{
       margin-right: 5px;
	}
	.wallet .charge-rate .mail-list image{
		width:29rpx;
		height: 33rpx;
		line-height: 33rpx;
	}
	.wallet .charge-balance{}
	.wallet .charge-balance .charge-balance-title{margin-bottom: 28rpx;}
	.charge-balance .charge-balance-title .title-vertical{width: 9rpx; height: 33rpx; background:#ff6711; border-radius: 20rpx;}
	.charge-balance .charge-balance-title text{line-height:30rpx; font-size: 30rpx; color: #333333;}
	.charge-balance .charge-balance-title text.charge-balance-title-text-explain{line-height:20rpx;color: #9b9b9b; font-size: 20rpx;}
	.charge-balance .charge-balance-title image{
		width:29rpx;
		height: 28rpx;
		}
	.charge-balance .charge-balance-list{justify-content:space-between;}
	.charge-balance .charge-balance-item{position: relative; width: 218rpx; border: 1px solid #e8e8e8; flex-direction: column; padding: 30rpx 0;  border-radius: 15rpx;   }
	.charge-balance .charge-balance-item.active{  border: 1px solid #41bafe;}
	.charge-balance .charge-balance-item image{
		position: absolute; bottom: 0; right: 0;
		width:32rpx;
		height: 32rpx;
		border-radius: 0 0 10rpx 0 ;
	
		}
	.charge-balance .charge-balance-item text{ text-align: center; font-size: 26rpx; line-height:26rpx;  }
	.charge-balance .charge-balance-item text.charge-balance-item-text{margin-top:20rpx; color:#949494; font-size:20rpx; line-height:20rpx; }
     .balance{font-size: 25rpx;}
	 .balance .balance-text{ color:#027fff;} 
    .payment{align-items: end;}
	.payment .payment-icon{ margin-right:20rpx; width: 30rpx;height:30rpx;}
	.wallet .payment .payment-title{ font-size: 32rpx;}
	.wallet .discount .discount {font-size:26rpx;}
    .wallet .discount .discount uni-radio{font-size:26rpx;}
    .wallet .discount .discount-right-text{ font-size:26rpx; color:#999999;}
    .wallet .submit{position: relative; text-align: center; margin: 0 auto; padding: 0; width: 640rpx; height: 110rpx;}
    .wallet .submit text{position: relative; z-index: 1; top:15rpx; font-size: 25rpx; height: 25rpx; line-height: 25rpx; color: #FFFFFF; }
    .wallet .submit .bnt-background{position: absolute;  top: 0; left: 0; z-index: 0; width: 640rpx; height: 110rpx;}
</style>
