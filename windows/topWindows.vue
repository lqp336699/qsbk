<template>
	<view class="nav flex justify-between align-center bg-danger px-4">
		<view>
			hellow uni-app
		</view>
		<view class="navbar">
			<text @click="onnavtap('pagesHome')">内置组件</text>
			<text @click="onnavtap('pagesNews')">接口</text>
			<text @click="onnavtap('pagesPaper')">扩展组件</text>
			<text @click="onnavtap('pagesHome')">模板</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods:{
			onnavtap(type){
				uni.$emit('updateDetail', {
				    detail:type
				})
			}
		}
	}
</script>

<style>
.nav{
	position: fixed;
	z-index: 1000000;
	box-sizing: border-box;
	left: 0;
	right: 0;
	width:1190px;
	height:55px;
	margin:auto;
	border:1px solid #ccc;
	top:0;
	background-color: #fff;
}
.navbar text{
	margin-right: 40px;
}
</style>

