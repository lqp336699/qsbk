<template>
	<view>
		<view class=" mt-4 bg-white" v-for="(item,index) in list">
			<view class="list flex align-center px-3 justify-between" :class="item.open?'active':''"  @click="changeCallapse(index,item.id)">
				<text>{{item.title}}</text>
				<text class="iconfont font-lg" v-if="!item.open">&#xeb04;</text>
				<text class="iconfont font-lg" v-if="item.open">&#xeb03;</text>
			</view>
			<view v-if="item.open" v-for="(item1,index1) in item.pages">
				<view class="list listItem flex align-center px-3 justify-between" @click="goPage(item1)">
					<text>{{item1}}</text>
					<text class="iconfont font-lg">&#xe8f1;</text>
				</view>
				</view>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[{
					title:'媒体组件',
					open:false,
					pages:[
						'image',
						'video'
					]
				},
				{
					title:'导航',
					open:false,
					pages:[
						"navigateTo"
					]
				},
				{
					title:'表单组件',
					open:false,
					pages:[
						"button",
						"checkout"
					]
				},
				{
					title:'地图',
					open:false,
					pages:[
						"map"
						
					]
				}
				]
			}
		},
		methods: {
			changeCallapse(index,id){
				console.log(index)
				for(let i in this.list){
					if(index == i){
						console.log(!this.list[index].open)
						this.list[index].open = !this.list[index].open;
					}else{
						this.list[i].open=false;
					}
				}
			},
			goPage(item1){
				console.log(item1)
				let url = `${item1}/${item1}`
				console.log(url)
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: rgb(248,248,248);
		padding:20rpx;
	}
	.list{
		height:100rpx;
		display: block;
	}
	.active{
		background-color: rgb(240,240,240);
	}
	.listItem{
		border-bottom: 0.5px solid #eee;
	}
	.listItem:last-of-type{
		border:none;
	}
</style>
