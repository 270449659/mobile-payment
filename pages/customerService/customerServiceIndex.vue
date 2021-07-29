<template>
	<view  class="customer-service">
		<view class="content" >	
			<view class="content-box">
				<view class="content-box-list">
					<!-- 猜你想问 -->
					<view class="ask">
						<view class="ask-left">
							<image src="/static/images/customerService/ask-left-iocn.png"></image>
							<view @click="changeIt" class="ask-left-bnt"></view>
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
					   {{windowWidth}}
					   {{customerImgWidths}}
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
							  <image  class="item-icon" src="/static/images/customerService/term-of-validity-icon.png"></image>
							 </view>
							 <view class="item-text">实名</view>
						</view>
					</view> 
					<!-- ask-menu end-->
					<!-- 聊天记录 -->
					<view class="chat">  
						<view class="customer-services"><text>小移在此恭候多时,有何疑问请慢慢道来</text></view> 
						<view  class="customer" v-for="(item,index) in talkList" :key="index" :id="`msg-${item.id}`">
							<view  v-if="item.img" class="customer-picture  flex_col" :class=" item.type == 1 ? 'push':'pull' ">
							  <view class="customer-picture-box" :style="{width:item.width + 'px',height:item.height + 'px'}">
							   <image  @load="imageLoads" class="customer-picture-icon" :src="item.img"></image>
							  </view>
							</view>
							<view  v-else class="customer-item flex_col" :class=" item.type == 1 ? 'push':'pull' ">
							   {{item.content}}
							</view>
		
						</view>
					</view>  
					 <!-- 聊天记录 -->
				 </view>
			</view>
			<!-- content-box end-->
			
			<!-- chat-write-in -->
			 <!-- <view :style="{bottom:windowBottom+ 'px'}" class="chat-write-in" > -->
		    <view  class="chat-write-in" >
				<view class="chat-input-box flex-align-items-center">
					  <view class="flex_grow"><input type="text" @focus="onfocusInput"  @input="onKeyInput"class="chat-input" v-model="chatInput" placeholder=" " :cursor-spacing="6"/></view>
					  <view v-if="sendOut" @click="getSendOut"  class="send-out">发送</view>
					  <view v-else class="add"><image  @click="add" class="add-icon" src="/static/images/customerService/add-icon.png"></image> </view>
				</view>
				<view v-if="chatWriteInAdd" class="chat-write-in-add">	
				    <view class="chat-write-in-add-list">
						 <view  @click="takePhoto" class="chat-write-in-add-item">
							 <image class="item-icon" src="/static/images/customerService/photo-icon.png"></image>
							 <text>相册</text>
						 </view>
				         <!--  <camera device-position="back" flash="off" @error="error" style="width: 100%; height: 300px;"></camera> -->
				          <!-- <button type="primary" @click="takePhoto">拍照</button> -->
				         <!--  <view>预览</view>
				           <image mode="widthFix" :src="src"></image> -->
				       </view>
				 </view>
			</view>	
			<!-- chat-write-in end-->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '在线客服',
				normal:true,//正常
				abnormal:false,
				chatInput:"",//输入
				src:"",
				windowBottom:'',
				windowWidth:'',
				chatWriteInAdd:false,//调用输入功能
				sendOut:false,//发送
				talkList:[{"id":"1","content": "这是历史记录的第1条消息","type": "1"}],
				imgwidths:'',
				imgheights:'',
				customerImgWidths:''
			}
		},
		onLoad() {
		  this.imageLoad()	
		},
		methods: {
			imageLoad(){
				uni.getSystemInfo({
				　　success:(res)=>{ // res - 各种参数
				　　   console.log(res.windowWidth); // 屏幕的宽度 
				         this.windowWidth=res.windowWidth;     
				    }
				});
			},
			imageLoads(e){
				let imgwidth = e.detail.width;
				let	imgheight = e.detail.height;
				//console.log('windowWidth',imgheight)
				this.imgwidths= (imgwidth) /2
				this.imgheights = (imgheight) /2
			},
			// 换一换
			changeIt(){
				console.log('换一换')  
				uni.showToast({
					title:'换一换',
					icon:'none'
				})
			},
			// 换一换-end
			
			//输入焦点
			onfocusInput(event){
				console.log('event',event);
				this.$nextTick(()=>{
					// 清空内容框中的内容
					uni.pageScrollTo({
						scrollTop: 999999,	// 设置一个超大值，以保证滚动条滚动到底部
						duration: 0
					});
				})
				this.chatWriteInAdd=false;
			},
			//输入焦点
			
			//监听输入
			 onKeyInput: function(event) {
			    this.inputValue = event.target.value;
				//console.log('res');
				if(this.inputValue){
					this.sendOut=true;		  		 
				}else{
					this.sendOut=false;		   	   
				}
			 },
			 //监监听输入
			 
			 //发送
			 getSendOut(){
				if(!this.inputValue){
					 uni.showToast({
						title:'请输入有效的内容',
						icon:'none'
					})
					return; 		 
				} 
				setTimeout(()=>{
					let data = {
						"id":new Date().getTime(),
						"content":this.inputValue,
						"type":1,
					}
					this.talkList.push(data);
					this.$nextTick(()=>{
						// 清空内容框中的内容
						uni.pageScrollTo({
							scrollTop: 999999,	// 设置一个超大值，以保证滚动条滚动到底部
							duration: 0
						});
					})
					this.chatInput='';
					this.inputValue='';
					this.sendOut=false;	
					this.chatWriteInAdd=false;
				},100);	
				
			 },
			 //发送-end
			 
			//点击加号
			add(){
				if(this.chatWriteInAdd){
					this.chatWriteInAdd=false
				}else{
					this.chatWriteInAdd=true
				}
			},
			//点击加号
			
			takePhoto() {
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['camera','album'], //这要注意，camera掉拍照，album是打开手机相册
					success: (res)=> {
						let that=this;
						//console.log(res);
						const tempFilePaths = res.tempFilePaths;
						//console.log('res',tempFilePaths[0]);
						const customerImg=tempFilePaths[0];
						uni.getImageInfo({
							src:customerImg,
							success(res){
								//console.log('customerImg',res);
								let customerImgWidth='';
								let customerImgHeight='';
								let customerImgWidths='';
								let customerImgHeights='';
							        customerImgWidth=res.width;
							        customerImgHeight=res.height;
								if(customerImgWidth>800){
									uni.showToast({
										title:'1',
										icon:'none'
									})
									customerImgWidths=res.width/4;
									customerImgHeights=res.height/4;
								}else if(customerImgWidth>750 &&customerImgWidth<801){
									uni.showToast({
										title:'2',
										icon:'none'
									})
								    customerImgWidths=res.width/3;
								    customerImgHeights=res.height/3;
								}else if(customerImgWidth>375 &&customerImgWidth<751){
									uni.showToast({
										title:'3',
										icon:'none'
									})
								    customerImgWidths=res.width/2.5;
								    customerImgHeights=res.height/2.5;
								}else if(customerImgWidth>200 &&customerImgWidth<376){
									uni.showToast({
										title:'4',
										icon:'none'
									})
								    customerImgWidths=res.width/2;
								    customerImgHeights=res.height/2;
								}else{
									uni.showToast({
										title:'5',
										icon:'none'
									})
								     customerImgWidths=res.width;
								     customerImgHeights=res.height;
								}
								
								let data = {
									"id":new Date().getTime(),
									"content":'',
									"img":customerImg,
									"width":customerImgWidths,
									"height":customerImgHeights,
									"type":1,
								}
								that.getTakePhoto(data);
							}
						})			
					}
				});
			},	
			getTakePhoto(data) {
				this.customerImgWidths=data.width;
				//console.log('data',data)
				this.talkList.push(data);
				this.$nextTick(()=>{
					// 清空内容框中的内容
					uni.pageScrollTo({
						scrollTop: 999999,	// 设置一个超大值，以保证滚动条滚动到底部
						duration: 0
					});
				})
				this.chatWriteInAdd=false;
			}
				 
   //        takePhoto() {
   //          const ctx = uni.createCameraContext();
   //          ctx.takePhoto({
   //              quality: 'high',
   //              success: (res) => {
   //                  this.src = res.tempImagePath
   //              }
   //          });
   //         },
			// error(e) {
			// 	console.log(e.detail);
			//  }
		}
	}
</script>

<style lang="scss">
	/* #ifdef MP-WEIXIN */
	.customer-service .content .chat-write-in{bottom:0;}  
	/* #endif */
	page{
	 background-color:#F8F8FA
	}
	uni-view{box-sizing: border-box;}
	.content {
		margin: 25rpx 0 0 0;
		// display: flex;
		// flex-direction: column;
		// align-items: center;
		// justify-content: center;
		.content-box{
			width: 100%;
			height: auto;
			padding-bottom: 95rpx;
			box-sizing: content-box;
			/* 兼容iPhoneX */
			margin-bottom: 0;  
			margin-bottom: constant(safe-area-inset-bottom);  
			margin-bottom: env(safe-area-inset-bottom);  
			.content-box-list{
				margin-bottom: 20rpx;
			}
		}
		.ask{
			margin:0 15rpx;
			position:relative;
			height: 270rpx;
			background: #fff;
			border-radius: 25rpx;
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
				.ask-left-bnt{
					position: absolute;
					left: 0;
					bottom: 0;
					width: 100rpx;
					height:35rpx;
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
		    margin:0 15rpx;
		   .customer-services{
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
			   .customer-item{
				   display: inline-block;
				   padding: 22rpx;
				   background-color: #fff;
				   font-size: 23rpx;
				   border-radius: 25rpx;
			   }
			   .customer-picture{
			    display: inline-block;
			   	width: 100%;
			   	.customer-picture-box{
			   		float: right;
			   		image{width::100%; height:100%;}
			   	}
			   	
			   }
		    }
			
	   }
	   .chat-write-in{
		        position: fixed;
		   		left: 0;
		   		width: 100%;
		   		bottom: 100rpx;
		   		height: auto;
		   		z-index: 2;
		   		border-top: #e5e5e5 solid 1px;
		   		box-sizing: content-box;
		   		background-color: #F3F3F3;
		   		
		   		/* 兼容iPhoneX */
		   		padding-bottom: 0;  
		   		padding-bottom: constant(safe-area-inset-bottom);  
		   		padding-bottom: env(safe-area-inset-bottom);  
		   .chat-input-box{
			   // width: 100%;
			   height: 95rpx;
			   padding: 0 23rpx 0 23rpx;
			   background-color: #fff; 
			   flex-direction: row;
			   flex-wrap: nowrap;
			   justify-content: flex-start;
			   align-content: center;
			   /* 弹性盒子弹性容器 */
			  .flex_grow{width:0;flex-grow: 1;}
			   .chat-input{
				  // width: 550rpx;
				   height: 65rpx;
				   padding: 0 10rpx;
				   background-color:#f6f6f6;
				   border-radius: 10rpx;
			   }
			   .send-out{ 
				   margin-left: 12rpx; 
				   width:90rpx;height:58rpx;
				   line-height:58rpx;
				   text-align: center;
				   color: #fff;
				   font-size: 25rpx;
				   //padding: 0 15rpx;
				   background-color: #1393eb;
				   border-radius: 15rpx;
				}
			   .add{
				   margin-left: 12rpx;
				   width:58rpx;
				   height: 58rpx;
				   .add-icon{
					   width: 100%;
					   height: 100%;
				   }
			    }
		    }
			.chat-write-in-add{
				// height: 210rpx;
				.chat-write-in-add-list{
					.chat-write-in-add-item{
					    width:80rpx;
						margin: 40rpx 40rpx 40rpx 40rpx;
						display: flex;					
						flex-direction: column;
						justify-content: center;
						align-items: center;
						.item-icon{
							width:80rpx;
							height:80rpx;
						}
						text{
							margin-top: 16rpx;
							font-size: 20rpx;
						}
					}
				}
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
