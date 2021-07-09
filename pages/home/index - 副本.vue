<template>
	<view class="home">
		<!-- header --><Header></Header><!-- header end-->
		<!-- content -->
		<view class="content">
		   <!-- 轮播图 --><Banner></Banner><!-- 轮播图 -->
		   <!-- Menu --><Menu></Menu><!-- Menu end-->
		   <!-- 广告 --><Advertisement></Advertisement><!-- 广告 end-->
		   <!-- 查看余额 -->
		   <Balance></Balance>
		    <!-- 查看余额  end-->
			<!-- 资讯 -->
			<Information></Information>
			<!-- 资讯 end-->
			<!-- 视频 --><Video> </Video><!-- 视频 end-->
			
		</view>
		<!-- content end-->
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	import  Header from '@/components/home/Header'
	import Banner from '@/components/home/Banner'
	import  Menu from '@/components/home/Menu'
	import  Advertisement from '@/components/home/Advertisement'
	import  Balance from '@/components/home/Balance'
	import  Information from '@/components/home/Information'
	import  Video from '@/components/home/Video'
	
	
	export default {
		components: {
			Header,
			Banner,
			Menu,
			Advertisement,
			Balance,
			Information,
	        Video
		},
		data() {
			return {
			text: '',
			login:false
			};
		},
		onLoad(){
			this.imageLoad()
			this.$store.dispatch('setHome')
		},
		methods: {
			imageLoad(){
				const windowWidth = uni.getSystemInfoSync().windowWidth;
				console.log('windowWidth',windowWidth)
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{background-color:#F8F8FA}
	.content {
	    width: 100%;
	    margin-top:116rpx;
	    padding-bottom: 2rem;
	}
</style>
