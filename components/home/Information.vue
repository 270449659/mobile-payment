<template>
	<view class="information">
	  <view class="uni-flex uni-row information-main"> 
	    <view class="uni-flex information-left"> 
			<view class="flex-item headlines information-item">
			  <text class="headlines-text">头</text><text class="headlines-text">条</text>		
			</view>
			<view class="flex-item investigation-and-research information-item">
				<view class="uni-flex investigation-and-research-main">
					 <view class="investigation-and-research-title" >调研</view>
					 <text class="investigation-and-research-text">用户满意度调研</text>	  
				</view>   
			</view> 
		</view>	
		<!-- information-left end-->
		<view class="nav-right">
			<image class="news-icon" src="/static/images/home/nav-right.png"></image>
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
	onLoad() {
	
	},
	methods:{	
	},		
}
</script>
<style lang="scss" scoped>

.information{
	// width: 100%; 
	margin:0;
	
	padding:10rpx 25rpx 25rpx 25rpx;
	background-color:#FFFFFF; 
	.information-main{ 
		width: 100%; 
		background-color:#F6F7FC; 
		flex-direction: unset;   
		align-items: center;
		justify-content:space-between;
		border-radius:10rpx;
		padding: 13rpx 0;
	   .information-left{flex-direction: unset;
	   }
	   .information-item{
		   display: flex;
		   flex-direction: unset;
		   	align-items: center;
		   .headlines-text{ line-height: 30rpx; height: 30rpx; padding:0; margin: 0; font-size: 30rpx;}
		   .headlines-text:first-child{ padding:0 5rpx 0 0;color: #3C62DE;}
	   }
	   .information-item:first-child{  border-right:1px solid #dae4f7; padding:0 23rpx 0 17rpx;}
	   .investigation-and-research{
			flex-direction: unset;
			align-items: center;
		   .investigation-and-research-main{
				flex-direction: unset;
				padding-left:24rpx;
				.investigation-and-research-title{
				   margin:0 24rpx 0 0;
				   padding:2rpx 11rpx 2rpx 11rpx;
				   font-size: 20rpx;
				   // width:120rpx;
				   color: #8dacf6;
				   // line-height: 35rpx;
				   border: 1px solid #8dacf6;
				}	
				.investigation-and-research-text{ font-size: 30rpx;}
			} 
			
		}
		.nav-right{ display: flex; margin-right: 15rpx; width: 10rpx; height:18rpx;
		   .news-icon{width:100%; height:100%;}
		}
	}
}
</style>