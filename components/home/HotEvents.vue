<template>
	<view class="Hot-events">
		<view class="uni-flex Hot-events-header">
			<view class="uni-flex Hot-events-header-tltle"><text class="Hot-events-header-tltle-text">热门活动</text> <image class="Hot-events-header-tltle-icon" src="/static/images/home/Hot-title-icon.png"></image></view>
		    <view class="uni-flex Hot-events-header-more"><text class="Hot-events-header-more-text">更多</text> <image class="Hot-events-header-more-icon" src="/static/images/home/Hot-more-icon.png"></image></view>
		</view>
		<view class="uni-flex Hot-events-list">
			<view class="uni-flex Hot-events-item">
				<image class="Hot-events-header-more-icon" src="http://uniapp.atongweb.com/images/home/Hot-events-item.png"></image>
			</view>
			<view class="uni-flex Hot-events-item">
				<image class="Hot-events-header-more-icon" src="http://uniapp.atongweb.com/images/home/Hot-events-item2.png"></image>
			</view>
		</view>
		<scroll-view scroll-x="true" class="Hot-events-goods" style=" white-space: nowrap; display: flex" >
			<view class="Hot-events-goods-list">
				<view v-for="(tab,index) in goods" :key="tab.id"   class="Hot-events-goods-item">
					<image class="Hot-events-goods-item-img" :src="tab.img_src"></image>
				  </view>
			</view>
		</scroll-view>	
		<!--  display: inline-block-->
		  
		<!-- <scroll-view id="tab-bar" class="Hot-events-scroll uni-swiper-tab snb_tab" scroll-x  :scroll-left="scrollLeft" show-scrollbar="true" >
			<view v-for="(tab,index) in goods" :key="tab.id" class="swiper-tab-list" :class="tabIndex==index ? 'active' : ''"
			 :id="tab.type+tab.id" :data-current="index" @click="tapTab">
			<img class="Hot-events-header-more-icon" :src="tab.img_src"/> 
			 </view>
		</scroll-view> -->
</view>
</template>

<script>
export default{
	// props:['datas'],
	data(){
		return {
			scrollLeft: 0,
			goods:[{"id":"1","link": "details?id=84","img_src":"http://uniapp.atongweb.com/images/home/Hot-events-item-img.png"},{"id":"2","link":"details?id=84","img_src":"http://uniapp.atongweb.com/images/home/Hot-events-item-img.png"},{"id":"3","link":"details?id=84","img_src":"http://uniapp.atongweb.com/images/home/Hot-events-item-img.png"},{"id":"4","link":"details?id=84","img_src":"http://uniapp.atongweb.com/images/home/Hot-events-item-img.png"},{"id":"5","link":"details?id=84","img_src":"http://uniapp.atongweb.com/images/home/Hot-events-item-img.png"}],
		}
	},
	onLoad() {
		
	},
	methods:{
			 scroll: function(e) {
					console.log(e)
					this.old.scrollTop = e.detail.scrollTop
				},
	},		
}
</script>
<style lang="scss" scoped>

.Hot-events{
   background-color: #f0f7fd;
    margin:0 25rpx 25rpx 25rpx;
    padding: 15rpx;
	border-radius:15rpx;
    .Hot-events-header{
		align-items: center;
		justify-content:space-between;
		.Hot-events-header-tltle{
			.Hot-events-header-tltle-text{font-family:Microsoft YaHei; font-size:33rpx;margin-right: 10rpx;}
			.Hot-events-header-tltle-icon{width: 38rpx; height:41rpx;}
		}
		.Hot-events-header-more{
			padding: 6rpx 0;
			background-color: #2782eb;
			border-radius: 25rpx;
			align-items: center;
			.Hot-events-header-more-text{margin-left:15rpx; color: #fff; font-family:Microsoft YaHei; font-size:20rpx}
			.Hot-events-header-more-icon{margin:0 15rpx 0 8rpx;  width: 8rpx; height:15rpx;}
		}
	}
	.Hot-events-list{
		margin-top: 19rpx;
		margin-bottom: 16rpx;
		justify-content:space-between;
		.Hot-events-item{ 
			width: 330rpx;
			height:136rpx;
		}
		.Hot-events-item .Hot-events-header-more-icon{
			width:100%;
			height:100%;
		}
	}
	.Hot-events-goods{
		.Hot-events-goods-list{
			.Hot-events-goods-item{ display: inline-block; margin-right: 16rpx; width: 190rpx; height: 205rpx; 
			  .Hot-events-goods-item-img{width:100%; height:100%;}
			}
		}
	}
		.swiper-tab-list{width: auto; padding:0 30upx;}
	
}

</style>