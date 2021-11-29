<template>
	<view class="uni-padding-wrap" style="background-color: rgb(245,245,245);">
		<view class="p-4 flex-1 text-center">video</view>
		<view>
			<view>
				<video id="myVideo" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4"  @error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls poster="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b1476d40-4e5f-11eb-b997-9918a5dda011.png"></video>
			</view>
		</view>
		<view>
			<view class="inp mt-4 flex p-2 justify-between align-center bg-white">
				<text class="">弹幕内容</text>
				<input type="text" class="" v-model="danmuValue" placeholder="在此处输入弹幕内容" style="width:450rpx;">
			</view>
			<view>
				<button class="mt-4" @click="sendDanmu">发送弹幕</button>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onReady(){
			this.videoContext = uni.createVideoContext('myVideo'); 
		},
		methods: {
			sendDanmu(){
				let _this = this;
				this.videoContext.sendDanmu({
					text:_this.danmuValue,
					color:_this.getRandomColor()
				})
				this.danmuValue = '';
			},
			getRandomColor: function() {
				const rgb = []
				for (let i = 0; i < 3; ++i) {
					let color = Math.floor(Math.random() * 256).toString(16)
					color = color.length == 1 ? '0' + color : color
					rgb.push(color)
				}
				return '#' + rgb.join('')
			}
		}
	}
</script>

<style>
	page{
		background-color: rgb(245,245,245);
	}
	video {
			width: 690rpx;
			width: 100%;
			height: 400px;
		}
	.inp{
		border:1px solid #eee;
	}
</style>
