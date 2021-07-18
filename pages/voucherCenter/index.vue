<template>
	<!-- 充值中心 -->
	<view class="voucher-center">
		<view class="voucher-center-filter uni-flex">
			<view class="filter-item" v-bind:class="state_key == 0 ? 'active' : ''"   @click="goStateTap(0)" >
			   <span class="text">钱包</span>
			</view>
			<view class="filter-item" v-bind:class="state_key == 1 ? 'active' : ''"   @click="goStateTap(1)"  >
			   <span class="text">流量</span>
			</view>
			<view class="filter-item" v-bind:class="state_key == 2 ? 'active' : ''"   @click="goStateTap(2)" >
			   <span class="text">给家人充值</span>
			</view>
		</view>  <!--search-filter end-->
		<view class="content mgt40">
			 <Wallet v-if="state_key == 0"></Wallet>
			 <Flow v-else></Flow>
		</view>
	</view>
</template>

<script>
	import  Wallet from '@/components/voucher-center/wallet'//钱包
	import  Flow from '@/components/voucher-center/flow'//流量
	//import uniPopup from '@/components/uni-popup/components/uni-popup/uni-popup.vue'
	//import productAttrModal from '@/components/product-attr-modal/index.vue'
	export default {
		components: {
			Wallet,
			Flow,
			//uniPopup
		},
		data() {
			return {
				title: '充值中心',
				state_key:0,
				
			}
		},
		onLoad() {
			
         // this.aa()
		},
		methods: {
			// 切换页面
			goStateTap(key){
				 let stateKey = key;
				 this.state_key=stateKey;
			},
			// aa(){
			// 	var that=this;
			// setTimeout(function (){
			//  that.$refs.popup.open('bottom')
				
			// }, 100);
			// },
			
			// 切换页面-end
			goProductAttr(){
				alert('')
				//this.productAttrModalState=true;
			//this.$refs.popup.open('bottom')
			},
			
		}
	}
</script>

<style>
	.content {
	padding: 0 25rpx;	
	}
	.voucher-center-filter {
		    width: 100%;
		    height: 88rpx;
		    color: #404245;
		    font-size: 28rpx;
		    font-weight: normal;
		    text-align: center;
		    line-height: 88rpx;
		    /* position: fixed;
		    top: 0;
		    z-index: 1000;
		    margin-top:  88px; */
		    overflow: hidden;
		    padding: 0;
		    box-sizing: border-box;
		    background-color: #ffffff;
		}
		
		.voucher-center-filter .filter-item {
		    position: relative;
		    width: 33%;
		    height: 88rpx;
		    overflow: hidden;
		    box-sizing: border-box;
			border-bottom: 1px solid #FFFFFF;
		}
		.voucher-center-filter .filter-item .arrow{
		    position: absolute;
		    top: 34rpx;
		    right: 10rpx;
		    width: 24rpx;
		    height: 100%;
		}
		.voucher-center-filter .filter-item .arrow .ind{
		    position: relative;
		    display: block;
		    width: 16rpx;
		    height: 8rpx;
		    overflow: hidden;
		    box-sizing: border-box;
		    margin-bottom:4px;
		    opacity: 1;
		}
		.voucher-center-filter .filter-item .text {
		    display: block;
		    width: 90%;
		    height: 100%;
		    color: #404245;
		    font-size: 28rpx;
		    font-weight: normal;
		    text-align: center;
		    line-height: 88rpx;
		    box-sizing: border-box;
		    margin: 0 auto;
		}
		
		.voucher-center-filter .filter-item.active{border-bottom: 1px solid #0d9ae9;}
		.voucher-center-filter .filter-item.active .text {
		    color:#0d9ae9;
		}
		
		
		
</style>
