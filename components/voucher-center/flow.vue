<template>
	<view class="flow">
		<form @submit="goProductAttr">
		<!--充流量号码-->
		<view class="charge-rate uni-flex"> 
		   <view class="charge-rate-box uni-flex"> 
			   <text class="charge-rate-title mgr20"> 充流量号码:</text>				
			   <input type="number" name="chargeRateNumber" @input="onKeyInput" maxlength="11" class="charge-rate-input" v-model="chargeRateNumber" placeholder="请输入ICCID或接入卡号" />
			  <image  @click="GetinputDelete" class="input-delete-icon mgl10" src="/static/images/voucherCenter/input-delete-icon.png"></image> 
			</view>
			<view class="flex-align-items-center mail-list">
				<image src="/static/images/voucherCenter/mail-list-icon.png"></image> 
				<text class="mail-list-text">通讯录</text>		
			</view>
		</view> 
		<!--充流量号码end-->
	
		<!-- 推荐 -->
		<view class="recommend">
			<view class="recommend-title">
				<image src="/static/images/voucherCenter/recommend-title-icon.png"></image> 
				<text class="mail-list-text mgl20">推荐</text>
			</view>
			<view class="recommend-list uni-flex">
				<view class="recommend-item flex-justify-content-center">
					<text class="recommend-item-text">仅12元</text>
					<text>5GB通用+会员</text>
				</view>
				<view class="recommend-item flex-justify-content-center">
					<image v-if="hotIcon" src="/static/images/voucherCenter/hot-icon.png"></image> 
					<text class="recommend-item-text">半价抢会员</text>
					<text>免费领好券</text>
				</view>
				<view class="recommend-item flex-justify-content-center">
					<text class="recommend-item-text">35G</text>
					<text>首月1元</text>
				</view>
			</view>
		</view>
		<!-- 推荐 end-->
	
		<!-- 包月 -->
		<view class="monthly-package mgt50">
			<view class="flex-align-items-center monthly-package-title">
				<view class="title-vertical"></view>
				<text class="monthly-package-title-text mgl20">月包</text>
				<text class="monthly-package-title-text-explain mgl20">多档任您选</text>
				<image class="mgl20" src="/static/images/voucherCenter/question-mark-icon.png"></image>
			</view>
			<view class="monthly-package-list uni-flex">
				<view @click="monthlyPackage(1)" class="monthly-package-item flex-justify-content-center">
					<image src="/static/images/voucherCenter/monthly-package-icon.png"></image> 
					<text>50M</text>
					<text class="monthly-package-item-text">5.00元</text>	
				</view>
				<view @click="monthlyPackage(2)" class="monthly-package-item flex-justify-content-center">
					<image src="/static/images/voucherCenter/monthly-package-icon.png"></image> 
					<text>100M</text>
					<text class="monthly-package-item-text">10.00元</text>	
				</view>
				<view @click="monthlyPackage(3)" class="monthly-package-item flex-justify-content-center">
					<image src="/static/images/voucherCenter/monthly-package-icon.png"></image> 
					<text>1G</text>
					<text class="monthly-package-item-text">20.00元</text>	
				</view>
				<view @click="monthlyPackage(3)" class="monthly-package-item flex-justify-content-center">
					<image src="/static/images/voucherCenter/monthly-package-icon.png"></image> 
					<text>1G</text>
					<text class="monthly-package-item-text">20.00元</text>	
				</view>
			</view>
		</view>
		<!-- 包月 end-->
	
		<!-- 加油包-->
		<view class="monthly-package superposition mgt30">
			<view class="flex-align-items-center monthly-package-title">
				<view class="title-vertical"></view>
				<text class="monthly-package-title-text mgl20">加油包</text>
				<text class="monthly-package-title-text-explain mgl20">随时补充，立即生效</text>
				<image class="mgl20" src="/static/images/voucherCenter/question-mark-icon.png"></image>
			</view>
			<view class="monthly-package-list  uni-flex">
				<view @click="monthlyPackage(4)" class="monthly-package-item flex-justify-content-center">
					<image  src="/static/images/voucherCenter/superposition-icon.png"></image>
					<text>50M</text>
					<text class="monthly-package-item-text">5.00元</text>	
				</view>
				<view @click="monthlyPackage(5)" class="monthly-package-item flex-justify-content-center">
					<image  src="/static/images/voucherCenter/superposition-icon.png"></image>
					<text>100M</text>
					<text class="monthly-package-item-text">10.00元</text>	
				</view>
				<view @click="monthlyPackage(6)" class="monthly-package-item flex-justify-content-center">
					<image  src="/static/images/voucherCenter/superposition-icon.png"></image>
					<text>1G</text>
					<text class="monthly-package-item-text">20.00元</text>	
				</view>
			</view>
		</view>
		<!-- <view class="discount mgt50 flex-justify-content-s-b">
			<label class="radio"><radio value="r1" checked="true" />优惠</label>
			<view class="discount-right-text">无可用</view>
		</view> -->
		<!-- 加油包 end-->
		
		<!-- <view  @click="goProductAttr" class="submit mgt50">
			 <text class="">￥10.00立刻支付</text>
			  <image  v-if="completed==true" class="bnt-background" src="/static/images/voucherCenter/bnt-background-true-icon.png"></image> 
			  <image  v-else class="bnt-background" src="/static/images/voucherCenter/bnt-background-icon.png"></image>
		 </view> -->
		</form>
		<!-- 订购弹框 -->
		<uni-popup ref="popup" type="bottom">
			<view class="order">
				<view class="order-title">流量包订购<text @click="close" class="close">x</text></view>
				<view class="business-name flex-justify-content-s-b mgb50">
					<text class="title">业务名称</text>
					<text class="right">流量日包1GB </text>
				</view>
				
				<view class="business-charges flex-justify-content-s-b mgb50">
					<text class="title">业务资费</text>
					<text class="right">3元1GB</text>
				</view>
				<view class="entry-into-force-time mgt50 flex-justify-content-s-b mgb25">	
					<view class="title"> 生效时间</view>
					<view> 
						<view class=""><label class="radio">立即生效<radio value="r1" checked="true" /></label></view> 
						<view class=""><label class="radio">次月生效<radio value="r1" checked="true" /></label></view> 
					</view>
				</view>
				<view class="charge-flow-number flex-justify-content-s-b mgb50">
					<text class="title">充流量号码</text>
					<text class="">8986112021808788888</text>
				</view>
				<view class="payment mgt50 flex-justify-content-s-b pdb30">
					<view class="title">付款方式</view>
					<view class=""> 
					    <view class=""><image class="payment-icon" src="/static/images/user/WeChat-icon.png"></image><label class="radio">微信<radio value="r1" checked="true" /></label></view>
					    <view class=""><image class="payment-icon" src="/static/images/user/Alipay-icon.png"></image><label class="radio">支付宝<radio value="r1" checked="true" /></label></view>
					    <view class=""><image class="payment-icon" src="/static/images/user/balance-icon.png"></image><label class="radio">钱包<radio value="r1" checked="true" /></label></view>
					    <view class=""><image class="payment-icon" src="/static/images/user/unionPay-icon.png"></image><label class="radio">银联<radio value="r1" checked="true" /></label></view>
					</view>
				</view>
				<view @click="GetOrderSubmit" class="order-submit mgt50">
					 <text class="">立刻支付</text>
				</view>
				<view class="order-explain mgt20 pdb30">
					订阅规则
				</view>
			</view>
		</uni-popup>
		<!-- 订购弹框 end-->
		</form>
	</view>
</template>

<script>
	var graceChecker = require("@/common/graceChecker.js");
	import uniPopup from '@/components/uni-popup/components/uni-popup/uni-popup.vue'
	//import productAttrModal from '@/components/product-attr-modal/index.vue'
	
export default{
	components: {
		uniPopup
	},
	// props:['datas'],
	data(){
		return {
			chargeRateNumber:'',
			hotIcon:true,
			completed:false,//已填为true
			inputValue:null//监听号码
			
		}
	},
	onLoad() {
		//this.goProductAttr()
	},
	methods:{
		    
			//输入框删除
			GetinputDelete(){
				this.chargeRateNumber='';
				
			},
			//输入框删除-end
			
			goProductAttr(e) {  
               // console.log(e)  
			   
			   if(this.chargeRateNumber){
				   this.completed=true;
				   console.log('22',this.completed)  
				   this.$refs.popup.open('bottom')
			   }else{
				   this.completed=false;
			   }	
				//this.productAttrModalState=true;
				//
			},
			// 关闭弹框
			close(){
				this.$refs.popup.close()
			},
			// 关闭弹框-end
			GetOrderSubmit(){
				this.$refs.popup.close()
			},
			//监听号码
			 onKeyInput: function(event) {
			   //console.log(event)  
			    this.inputValue = event.target.value
			 },
			 //监听号码
			 
			// 确定
			monthlyPackage(key){
				var rule_Verify = [
					{name:"mobile", checkType : "notnull", checkRule:" ",  errorMsg:"手机号码不能为空"},
					{name:"mobile", checkType : "phoneno", checkRule:" ",  errorMsg:"手机号码不正确"},
					
				];
				// 			var formData = this.chargeRateNumber;
				// 			let checkRes = graceChecker.check(formData, rule_Verify);
				// 			 if(checkRes){
				// 			 }else{

				// 				uni.showToast({ title: graceChecker.error, icon: "none" });
				// 			}
	            //console.log(this.inputValue)
				if(this.inputValue){
				   if(this.inputValue.length<11){
					   uni.showToast({
							title: '请输入11位码号',
							duration: 1000
						});
				   }else{
					 this.$refs.popup.open('bottom')				  
				   }
			    }else{
					uni.showToast({
						title: '手机号码不能为空',
						duration: 1000
					});
				}
			}
			// 确定-end
	},		
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
   .recommend{
   	margin-top: 32rpx;
   }
   .recommend .recommend-title image{
   	width:35rpx;
   	height: 37rpx;
   }
   .recommend .recommend-title{
    font-size: 34rpx;
    line-height: 35rpx;
    margin-bottom: 28rpx;
   }
   .recommend .recommend-title .text{
    font-size: 34rpx;
   }
   .recommend .recommend-list{justify-content:space-between;}
   .recommend .recommend-item{position: relative; width: 222rpx; flex-direction: column; padding: 40rpx 0;  background-image: linear-gradient(#fa5654, #f76951, #f7814f);border-radius: 25rpx;   }
   .recommend .recommend-item:nth-child(2){background-image: linear-gradient(#53aff5, #7ac1f9, #a3d3fb);}
   .recommend .recommend-item:nth-child(3){background-image: linear-gradient(#2cbfae, #6ad5c4, #adebdc);}
   .recommend .recommend-item image{
   	position: absolute; top: 0; left: 0;
   	width:79rpx;
   	height: 29rpx;
   	}
   .recommend .recommend-item text{color: #FFFFFF; text-align: center; font-size: 18rpx; line-height:18rpx;}
   .recommend .recommend-item text.recommend-item-text{font-size: 33rpx; line-height:33rpx; margin-bottom: 15rpx;}
   
   .monthly-package{}
   .monthly-package .monthly-package-title{margin-bottom: 28rpx;}
   .monthly-package .monthly-package-title .title-vertical{width: 9rpx; height: 33rpx; background:#ff6711; border-radius: 20rpx;}
   .monthly-package .monthly-package-title text{line-height:30rpx; font-size: 30rpx; color: #333333;}
   .monthly-package .monthly-package-title text.monthly-package-title-text-explain{line-height:20rpx;color: #9b9b9b; font-size: 20rpx;}
   .monthly-package .monthly-package-title image{
   	width:29rpx;
   	height: 28rpx;
   	}
   .monthly-package .monthly-package-list{justify-content:space-between; flex-wrap: wrap;}
   .monthly-package .monthly-package-item{position: relative; width: 218rpx; border: 1px solid #f0aa82; flex-direction: column; padding: 30rpx 0;  margin-bottom: 20rpx; border-radius: 25rpx;   }
   	
   .monthly-package .monthly-package-item image{
   	position: absolute; bottom: 0; left: 0;
   	width:55rpx;
   	height: 65rpx;
   	border-radius: 0 0 0 25rpx;
   	}
   .monthly-package .monthly-package-item text{ text-align: center; font-size: 26rpx; line-height:26rpx;  }
   .monthly-package .monthly-package-item text.monthly-package-item-text{margin-top:20rpx; color:#949494; font-size:20rpx; line-height:20rpx; }
   .voucher-center .discount .discount {font-size:26rpx;}
   .voucher-center .discount .discount uni-radio{font-size:26rpx;}
   .voucher-center .discount .discount-right-text{ font-size:26rpx; color:#999999;}
   .voucher-center .submit{position: relative; text-align: center; margin: 0 auto; padding: 0; width: 640rpx; height: 110rpx;}
   .voucher-center .submit text{position: relative; z-index: 1; top:15rpx; font-size: 25rpx; height: 25rpx; line-height: 25rpx; color: #FFFFFF; }
   .voucher-center .submit .bnt-background{position: absolute;  top: 0; left: 0; z-index: 0; width: 640rpx; height: 110rpx;}
   /* 弹框 */
   .order{ padding: 0 25rpx; background-color: #FFFFFF; border-radius: 50rpx 50rpx 0 0;}
   .order .order-title{position: relative; text-align: center; padding:50rpx 0 70rpx 0;}
   .order .order-title .close{    
   	color: #c8c8c8;
   	position: absolute;
       right: 0;
   	font-size: 35rpx;
   }
   .order .title{color: #666666;font-size: 25rpx; height: 25rpx; line-height:25rpx;}
   .order .right{font-size: 28rpx;height:28rpx; line-height:28rpx;}	
   .order .entry-into-force-time,.order .payment{align-items: end;}
   .order .payment .payment-icon{ margin-right:20rpx; width: 30rpx;height:30rpx;}
   .order .order-submit{ position: relative; text-align: center;
        margin: 0 auto; padding: 0; width: 640rpx; height: 100rpx;
       border-radius: 50rpx; 
       background: linear-gradient(135deg,#fe7a13 0,#ff6e11 45%,#fe620d 83%,#ff5608 100%);
   }
   .order .order-submit text{position: relative;   font-size: 25rpx; height: 100rpx;line-height: 100rpx; color: #FFFFFF; }
   .order .order-explain{text-align: center; color: #fd8b51; font-size: 25rpx; text-decoration: underline;}
</style>