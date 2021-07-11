<template>
	<view  class="user-introduce mglr30">
		<view class="uni-flex user-introduce-list">
			<view class="uni-flex user-introduce-item">
				<view class="user-introduce-item-left"><image src="/static/images/user/brand-icon.png"></image></view>
				<view class="user-info-box-item-right">
				   <view class="title">招聘合作商</view>
				   <view class="text">去了解</view>
				</view>
			</view>
			<view class="uni-flex user-introduce-item">
				<view class="user-introduce-item-left"><image src="/static/images/user/gold-member-icon.png"></image></view>
				<view class="user-info-box-item-right">
				   <view class="title">黄金会员</view>
				   <view class="text">限时1元购</view>
				</view>
			</view>
		</view>	
	</view>	
</template>

<script>
export default{
	// props:['datas'],
	data(){
		return {
			
		}
	},
}
</script>
<style lang="scss" scoped>
	.user-introduce{
		position:relative;
		margin: -70rpx 0 0 0;
		background-color: #ffffff;
		z-index: 1;
		border-radius: 25rpx;
		.user-introduce-list{
			padding: 40rpx 0;
			justify-content: space-around;
		}
	}
	//.information .information-main .information-item[data-v-6d966b17]:first-child
	.user-introduce-item{
		.user-introduce-item-left{
			width: 70rpx;
			height: 78rpx;
			margin-right: 30rpx;
			image{
				width:100%;
				height:100%;
			}
		}
		.user-info-box-item-right{
			.title{ font-size:28rpx; height:28rpx; margin-bottom: 15rpx;}
			.text{font-size:22rpx; height:22rpx; color:#838383;}
		}
	}
</style>