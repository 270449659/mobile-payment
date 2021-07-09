<template>
	<view class="home-video">
		<video class="video-mian" id="myVideo"  src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4"
			@error="videoErrorCallback"  enable-danmu danmu-btn controls></video>
	</view>
</template>

<script>
export default{
	// props:['datas'],
	data(){
		return {
			imgWidth:''
		}
	},
	onLoad() {
		this.imageLoad()
	},
	methods:{
			imageLoad(e){
				//let imgwidth = e.detail.width;
				//let	imgheight = e.detail.height;
				//console.log('d')
				//设备宽度			
				const windowWidth = uni.getSystemInfoSync().windowWidth;
				console.log('windowWidth',windowWidth)
				this.imgWidth = windowWidth;
				//this.imgheights = (windowWidth/imgwidth) * imgheight
			},
	},		
}
</script>
<style lang="scss" scoped>

.home-video{
	// width: 100%; 
    padding: 0 25rpx;
	 .video-mian{width:100%; }
}

</style>