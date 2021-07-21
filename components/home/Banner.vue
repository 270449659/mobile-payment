<template>
    <view class="page-section">
		<div class="swipe-botton"> </div>
    	<view class="page-section-spacing">
    		<swiper class="swiper" :style="{height:imgheights + 'px'}" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
    			<swiper-item   v-for="(bannerList,index) in banner" :key="index" :id="bannerList.id" >
					<view class="swiper-item" >
					    <image :src="bannerList.img_src"  @load="imageLoad" :data-url="bannerList.link"></image>
    			    </view>
				</swiper-item>		
    		</swiper>
    	</view>
    </view>
</template>

<script>
export default{
	// props:['datas'],
	data(){
		return {
			banner:[{"id":"1","link": "details?id=84","img_src":"http://uniapp.atongweb.com/images/home/banner1.jpg"},{"id":"2","link":"details?id=84","img_src":"http://atongweb.com/data/afficheimg/20200227onkzcr.jpg"},{"id":"3","link":"details?id=84","img_src":"http://atongweb.com/data/afficheimg/20190722fgszmm.jpg"}],
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
			imgheights:'',//商品主图片高度
		}
	},
	onShow() {
	   
		
	},
	computed:{
	
    },
	mounted(){
		//console.log('modules', this.modules)
	},
	methods:{
			imageLoad(e){
				let imgwidth = e.detail.width;
				let	imgheight = e.detail.height;
				//console.log('d')
				//设备宽度			
				const windowWidth = uni.getSystemInfoSync().windowWidth;
				//console.log('windowWidth',windowWidth)
				this.imgheights = (windowWidth/imgwidth) * imgheight
			},
	},		
	watch:{
		// datas(){
		// 	 console.log('datas', this.datas) 
		// }
	}
	
}
</script>
<style>
.page-section{
	padding-top:7rpx;
	position: relative;
	background-color: #FFF;
}
.swipe-botton{
    width: 100%;
    height: 100px;
    background:#0d92df;
    top: 0px;
    position: absolute;
    border-radius:0 0 60px 60px;
  }
.page-section .page-section-spacing{ 
	position: relative;
	height: 100%;
    z-index: 90;
}

.page-section .swiper-item{    
	padding: 0 25rpx;
	margin:  auto;
	width: auto;
    height: 100%;
    border-radius: 15rpx;
    position: relative;
    display: block;
	}
.page-section .swiper-item image{
	width:100%;
	height: 100%;    
	border-radius: 15rpx
	}
	.page-section .swiper-item image img{
		width:100%;
		height: 333px;    
	
		}
</style>