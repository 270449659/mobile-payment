<template>
	<view class="voucher-center">
		<view class="search-filter uni-flex">
			<view class="filter-item" v-bind:class="sort_key == 'asc' ? 'active' : ''"   @click="goOrderTap" :data-id="sortkeyA">
			   <span class="text">综合</span>
			</view>
			<view class="filter-item" v-bind:class="sort_key == 'ascb' ? 'active' : ''"  @click="goOrderTap"  :data-id="sortkeyB">
			   <span class="text">销量</span>
			</view>
			<!-- <view class="filter-item" v-bind:class="sort_key == 5 ? 'active' : ''"  @click="goOrderTap"  :data-id="5">
			   <span class="text">新品</span>
			</view> -->
			<view class="filter-item by-price" v-if="sort_key == 1" v-bind:class="sort_key == 1 ? 'active' : '' "  @click="goOrderTap"  :data-id="1">
			   <view v-if="sort_value == 1" class="arrow">
				   <img class="ind" src="/static/images/goods/ind-arrow-upa.png"/>
				   <img class="ind" src="/static/images/goods/ind-arrow-down.png"/>
			   </view>
			   <view v-else-if="sort_value == 2" class="arrow">
				 <img class="ind" src="/static/images/goods/ind-arrow-up.png"/>
				 <img class="ind" src="/static/images/goods/ind-arrow-downb.png"/>
			   </view>
			   <span class="text">价格</span>
			</view>
			<view v-else class="filter-item by-price"  @click="goOrderTap"  :data-id="1">
			   <span class="text">价格</span>
			   <view class="arrow">
				 <img class="ind" src="/static/images/goods/ind-arrow-upa.png"/>
				 <img class="ind" src="/static/images/goods/ind-arrow-downb.png"/>
			   </view>
			</view>
		</view>  <!--search-filter end-->
		<view class="content">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.search-filter {
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
		
		.search-filter .filter-item {
		    position: relative;
		    width: 33%;
		    height: 88rpx;
		    overflow: hidden;
		    box-sizing: border-box;
		}
		.search-filter .filter-item .arrow{
		    position: absolute;
		    top: 34rpx;
		    right: 10rpx;
		    width: 24rpx;
		    height: 100%;
		}
		.search-filter .filter-item .arrow .ind{
		    position: relative;
		    display: block;
		    width: 16rpx;
		    height: 8rpx;
		    overflow: hidden;
		    box-sizing: border-box;
		    margin-bottom:4px;
		    opacity: 1;
		}
		.search-filter .filter-item .text {
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
		.search-filter .filter-item.active .text {
		    color:red;
		}
</style>
