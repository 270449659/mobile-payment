<template>
	<view class="customer-service">
		<view class="content">
			<!-- 猜你想问 -->
			<view class="ask">
				<view class="ask-left">
					   <image src="/static/images/customerService/ask-left-iocn.png"></image>
				</view>
				<view class="ask-right">
					<view class="ask-right-list">
						<view class="ask-right-item flex-justify-content-s-b">
							<text>换套餐</text> <image class="pdr15" src="/static/images/right-ash-icon.png"></image>
						</view>
						<view class="ask-right-item flex-justify-content-s-b">
							<text>换套餐</text> <image class="pdr15" src="/static/images/right-ash-icon.png"></image>
						</view>
						<view class="ask-right-item flex-justify-content-s-b">
							<text>换套餐</text> <image class="pdr15" src="/static/images/right-ash-icon.png"></image>
						</view>
						<view class="ask-right-item flex-justify-content-s-b">
							<text>换套餐</text> <image class="pdr15" src="/static/images/right-ash-icon.png"></image>
						</view>
					</view>
				</view>
			</view>
			<!-- 猜你想问 end-->
			<!-- ask-menu -->
			<view class="ask-menu">
				<view class="menu-item" @click="gohotSale()">
					<view class="menu-item-box">
				      <view  v-if="normal" class="menu-item-box-green-dot">正常 </view>
					  <view  v-else class="menu-item-box-red-dot">授权码</view>
					  <image class="item-icon" src="/static/images/customerService/authorization-code-icon.png"></image>
					 </view>
					 <view class="item-text">实名认证</view>
			   </view>
			    <view class="menu-item" @click="gohotSale()">
					<view class="menu-item-box">
					  <view v-if="abnormal" class="menu-item-box-green-dot">正常 </view>
					  <view v-else class="menu-item-box-red-dot">异常</view>
					  <image class="item-icon" src="/static/images/customerService/real-name-icon.png"></image>
					 </view>
					 <view class="item-text">状态</view>
			    </view>
				<view class="menu-item" @click="gohotSale()">
					<view class="menu-item-box">
					 <view  v-if="normal" class="menu-item-box-green-dot">正常 </view>
					 <view  v-else class="menu-item-box-red-dot">异常</view>
					  <image class="item-icon" src="/static/images/customerService/state-icon.png"></image>
					 </view>
					 <view class="item-text">有效期</view>
				</view>
				<view class="menu-item" @click="gohotSale()">
					<view class="menu-item-box">
					 <view  v-if="normal" class="menu-item-box-green-dot">正常 </view>
					 <view  v-else class="menu-item-box-red-dot">异常</view>
					  <image class="item-icon" src="/static/images/customerService/term-of-validity-icon.png"></image>
					 </view>
					 <view class="item-text">实名</view>
				</view>
			</view> 
			<!-- ask-menu end-->
			  
			<view class="chat">  
				<view class="customer-service"><text>小移在此恭候多时,有何疑问请慢慢道来</text></view> 
				<view class="customer"><text>嗯嗯</text></view> 
			</view>  
		    <view class="chat-write-in">
				<view class="chat-input-box flex-align-items-center">
					  <input type="text" name="chatInput" class="chat-input" v-model="chatInput" placeholder="" />
					 <view class="add"><image  @click="add" class="add-icon mgl10" src="/static/images/customerService/add-icon.png"></image> </view>
				</view>
				<view class="chat-write-in-add">	  </view>
			</view>	
			
		  
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '在线客服',
				normal:true,
				abnormal:false,
				chatInput:""
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	page{
	 background-color:#F8F8FA
	}
	.content {
		margin: 25rpx 15rpx;
		// display: flex;
		// flex-direction: column;
		// align-items: center;
		// justify-content: center;
		.ask{
			position:relative;
			height: 270rpx;
			background: #fff;
			.ask-left{
				position: absolute;
				width: 100rpx;
				height: 270rpx;
				top: 0;
				left: 0;
				image{
					width: 100%;
					height:100%;
				}
			}
			.ask-right{
				margin-left: 155rpx;
				.ask-right-list{
					.ask-right-item{
						padding: 24rpx 0 20rpx 0;
						border-bottom: 1px solid #f3f3f3;
						text{
							height:24rpx;
							line-height:24rpx;
							font-size:24rpx;
						}
						image{width: 12rpx;
				              height: 18rpx;
					    }
							  
					}
				}
			}
		}
		.ask-menu {
			position: relative;
			margin:15rpx 0;
			display: block;
			background-color: #FFF;
			overflow: hidden;
			padding:35rpx 0 35rpx 0;
			box-sizing: border-box;
			/* border-bottom: #e2e2e2 1px solid; */
			.menu-item {
				position: relative;
				float: left;
				display: block;
				width: 25%;
				border: none;
				box-sizing: border-box;
				.menu-item-box{
					position: relative;
					margin:0 auto;
					width: 100rpx;
					height: 100rpx;
					.menu-item-box-green-dot{
					position: absolute;
					padding: 2rpx 6rpx;
					color: #fff;
					border-radius: 25rpx;
					z-index: 1;
					font-size: 18rpx;
					top: -25rpx;
					right:-38rpx;
					background-color: #27c267;
					}
					.menu-item-box-red-dot{
					position: absolute;
					padding: 2rpx 10rpx;
					color: #fff;
					border-radius: 25rpx;
					z-index: 1;
					font-size: 18rpx;
					top: -25rpx;
					right:-48rpx;
					background-color: #ff001c;
					}
					.item-icon {
						display: block;
						width: 100rpx;
						height: 100rpx;
						margin: 0 auto;
						overflow: hidden;
					}	
				}
				.item-text {
					display: block;
					width: 100%;
					height: 26rpx;
					line-height: 26rpx;
					box-sizing: border-box;
					border: none;
					overflow: hidden;
					color: #404245;
					font-size: 24rpx;
					font-weight: normal;
					text-align: center;
					margin-top: 12rpx;
				}
			}
	   }
	   .chat{
		   .customer-service{
			   margin-top: 40rpx;
			   width: 100%;
			   height:65rpx;
			   text{ padding: 22rpx;
				   background-color: #fff;
				   font-size: 23rpx;
				   border-radius: 25rpx;
				}
		   }
		   .customer{
			margin-top:40rpx;
			text-align: right;
			   width: 100%;
			   text{ padding: 22rpx;
			   background-color: #fff;
			   font-size: 23rpx;
			   border-radius: 25rpx;
			}
		   }
	   }
	   .chat-write-in{
		    position:absolute;
			left: 0;
			bottom: 0;
		   .chat-input-box{
			   width: 100%;
			   padding: 15rpx 26rpx 15rpx 23rpx;
			   background-color: #fff; 
			   
			   .chat-input{
				   width: 620rpx;
				   height: 55rpx;
				   background-color:#f6f6f6;
			   }
			   .add{
				   margin-left: 15rpx;
				   width: 66rpx;
				   height: 66rpx;
				   .add-icon{
					   width: 100%;
					   height: 100%;
				   }
			    }
		    }
			.chat-write-in-add{
				height: 210rpx;
			}
	   }
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
