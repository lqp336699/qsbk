<template>
	<view class="flex flex-column px-2 py-3 border-bottom">
		<view class="flex align-center justify-between">
			<view class="flex align-center">
				<image :src="listData.touxiang"  style="width:80rpx; height:80rpx"  class="mr-2 rounded-circle"></image>
				<text style="color:#aaa;" class="font-sm">{{listData.name}}</text>
			</view>
			<view class="flex justify-between align-center">
				<text class="px-2 font-sm text-center mr-2" style="background-color: rgba(100,100,100,0.1);">关注</text>
				<text style="color:#aaa;">×</text>
			</view>
		</view>
		<view class="mt-3">
			<text style="color:#222; font-size:34rpx;">如何用手改变你的一生</text>
		</view>
		<view class="flex mt-2 position-relative" style="border-radius:20rpx; height:370rpx">
			<image src="../static/11.jpeg"  style="height:370rpx; display:block; width:730rpx;" mode="scaleToFill"></image>
			<view class="iconfont rounded-circle position-absolute top-0 bottom-0 right-0 left-0 m-auto" style="color:rgba(255,255,255,0.6); font-weight:800; font-size:100rpx; width:100rpx;height:100rpx;">
				&#xe624;
			</view>
		</view>
		<view class="flex mt-3 align-center justify-between">
			<view class="flex" style="color:#333;">
				<view class="mr-3 flex align-center">
					<text class="iconfont mr-2" style="font-size: 36rpx;">&#xe60f;</text>
					<text>{{listData.zan}}</text>
				</view>
				<view class="flex align-center" >
					<text class="iconfont mr-2" style="font-size: 40rpx;">&#xe758;</text>
					<text>{{listData.cai}}</text>
				</view>
			</view>
			<view class="flex" style="color:#333;">
				<view class="mr-3 flex align-center">
					<text class="iconfont mr-2" style="font-size: 36rpx;">&#xe63a;</text>
					<text>{{listData.pinglun}}</text>
				</view>
				<view class="flex align-center" >
					<text class="iconfont mr-2" style="font-size: 40rpx;">&#xe602;</text>
					<text>{{listData.fengxiang}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				listData:{
					touxiang:"/static/touxiang.jpg",
					name:"卤大师",
					title:"用手改变你的一生？",
					zan:997,
					cai:10,
					pinglun:997,
					fengxiang:10
				}
			}
		}
	}
</script>

<style>
</style>
