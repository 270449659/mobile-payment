<template>
	<view class="login">
		<view class="bg-set" :style="{background: 'url('+imageURL+')'}"></view>
		<view class="content">
			<view class="auth-layout">
				<view class="auth-panel">  <!-- 头部 -->
					<image class="logo" src="/static/images/user/logo.png"></image>
					<!-- <view class="title">Hi,欢迎来到my-store</view> -->
				</view>   <!-- 头部 end-->
				 <view class="form-warrap"> <!-- 内容--> 
				  <form @submit="formSubmit">  <!-- 查询表单 -->
				     <view class="uni-flex item-input cardNumber flex"> <!-- 用户名 -->
						<view class="cardNumber-icon"><image class="cardNumber-icon-img"  src="/static/images/query/cardNumber-icon.png"></image></view>		
						<input type="text" name="cardNumber" class="cardNumber-input" v-model="cardNumber" placeholder="请输入用户名" />
					</view> <!-- 用户名 end-->
					<view class="tips-register uni-flex">
						<view  class="tips">还没有卡号？<text>点此购买</text></view> 
						<view class="tips">忘记卡号？</view>
								  
					</view>
					<view class="btn-bar btn-bar-radius">  <!-- 查询按钮 -->
					<button class="btn  btn-register" formType="submit">立即查询</button>				
					</view><!-- 查询按钮 end-->
				   </form> <!-- 查询表单 end-->
				 </view><!-- 内容  end-->
			</view>	 
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				imageURL:'/static/images/user/login-background.png',
				cardNumber:''
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	page{
		
		}
		.bg-set{
		    position: fixed;
			background-size:cover !important;
		    width: 100%;
		    height: 100%;
		    top: 0;
		    left: 0;
		    z-index: -1;
		}
		.con
		.content {
			/* display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center; */
		}
		.auth-layout {
		    padding:0 80rpx 0 80rpx;
		}
		 /* 头部 */
		.auth-panel{
			flex-direction:  column;
			display: flex;
			justify-content: center;
			align-items: center; 
			box-sizing:content-box
		}      
		.logo {
			width:301rpx;
			height: 144rpx;
			margin:88rpx 0 0 0;	
		}
		.auth-panel .title{
			margin:94rpx 0 19rpx 0;
			height:51rpx;
			font-size:50rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(26,26,26,1);
			line-height:39rpx;	
		}
		/* 头部 end*/
		/* 内容*/
		.form-warrap{
			margin-top: 127rpx;
		}
		 .item-input .cardNumber-icon{
				display: block;
				width:27rpx ;
				height: 21rpx;
				line-height:21rpx;
				margin-right:14rpx;
			}
			.item-input .cardNumber-icon .cardNumber-icon-img{
				width: 100%;
				height:100%;
				margin:0;
				
				
			}
	.item-input{
			align-items: center;
			padding: 34rpx 0 34rpx 30rpx;
			border-radius: 60rpx;
			background: #fff;
			/* border-bottom: 1px solid #DDDDDD; */
		}
		.uni-input-placeholder {
		    color:#c0c0c0;  
		}
	.item-input label{ width: 200rpx; height: 1.4rem; line-height: 1.4rem; }
	 .item-input uni-input{
		display: flex;
		flex: 1;
		box-sizing: border-box;
		width: 100%;
		height:25rpx;
		font-size:24rpx;
		font-family:PingFang SC;
		color:#c0c0c0;
		line-height:25rpx;
		box-sizing: border-box;
		font-family:PingFang SC;
		font-weight:500;
	
		line-height:33rpx;		
	 }
	 .tips-register{
	 		  justify-content: space-between;
	  }
	 .tips{
		 height:25rpx;
		 line-height:25rpx;
		 font-size:25rpx;
		 font-family:PingFang SC;
		 font-weight:500;
		 color:#fff;
		 margin-top:35rpx;
	 }
	 .tips text{margin-left:25rpx;}
	 /* 提交按钮 */
	 .btn-bar .btn-register{
	 		 margin-top:40rpx;
	 }
	 .btn-register{
	 		 line-height:90rpx;
	 		 height:90rpx;
	 		 color: #FFFFFF;
	 		 background:#04b6e0;
	 		 border-radius:50rpx;
	 }	
	 /* 提交按钮 end*/
</style>
