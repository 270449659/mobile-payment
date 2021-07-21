<template>
	<header class="header fixed-top">
		<view  class="header-top">	</view>
		<view class="search" @click="goSearch">
			<image class="search-icon" src="/static/images/home/header-search.png"></image>
			<span class="search-text">请输入您要搜索的商品</span>
		</view>
		<view class="header-right">
			<!-- 消息 -->
			<view @click="getNews" class="news" >
				<image class="news-icon" src="/static/images/home/news-icon.png"></image>
			</view>
			<!-- 消息 end-->
			<!-- 选择功能 -->
			<view class="multi-function " >
				<image class="multi-function-icon" src="/static/images/home/multi-function-icon.png"></image>
			</view>
			<!-- 选择功能 end-->
		</view>	
	</header>	 
</template>

<script>
export default{
	// props:['datas'],
	data(){
		return {
			
		}
	},
	methods: {
		getNews(){
			uni.navigateTo({
				url:'/pages/news/newsIndex'			
			})
		}	
	}
}
</script>
<style>
/* #ifdef APP-PLUS */
header.fixed-top{padding-top: 33rpx;}  
/* #endif */
    .header{
		z-index: 100;
		width: 100%;
		display: flex;
		flex-direction: unset;
		align-items: center;
		justify-content:space-between;
		height: 116rpx; 
		box-sizing: border-box;
		border-bottom:none!important;
		background-color: #0d92df!important;
		box-shadow:none !important;
		/* box-shadow: rgba(0, 0, 0, .05) 0 1px 3px; */
	}
	.search {
		width: 560rpx;
		position: relative;
		height: 60rpx;
		margin: 28rpx 0 28rpx 25rpx;
		box-sizing: border-box;
		overflow: hidden;
		background-color: #58B3EA;
		border-radius: 34rpx;
	}
	
	.search .search-icon {
		position: absolute;
		top: 6rpx;
		left: 12rpx;
		display: block;
		width:48rpx;
		height: 48rpx;
		box-sizing: border-box;
		overflow: hidden;
	}
	.search .search-text {
		display: block;
		width: 100%;
		height: 60rpx;
		margin: 0 auto;
		padding-left: 76rpx;
		box-sizing: border-box;
		overflow: hidden;
		color: #ffff;
		font-size: 28rpx;
		font-weight: normal;
		line-height: 60rpx;
	}
	.header-right{display: flex; margin: 0 25rpx 0 0; flex-direction: unset; align-items: center;}
	.news{width: 46rpx; height: 46rpx;margin: 0 25rpx;}
	.news .news-icon{width:100%; height:100%;}
	.multi-function{display: flex; width: 43rpx; height: 11rpx;}
	.multi-function .multi-function-icon{width:100%; height:100%;}
</style>