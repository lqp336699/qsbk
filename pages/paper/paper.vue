<template>
	<view class="page flex justify-start flex-column">
		<view class="list bg-white mt-3" v-for="(item,index) in list" >
			<view class="flex justify-between align-center p-3" @click="changescllspase(index)">
				<text>{{item.title}}</text>
				<text class="iconfont">&#xeb04;</text>
			</view>
			<view class="" v-if="item.open" v-for="(item1,index1) in item.pages">
				<view class="flex justify-between align-center p-3">
					<text>{{item1.title}}</text>
					<text class="iconfont">&#xe8f1;</text>
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
					title:"媒体",
					open:false,
					pages:[{
						url:'pages/paper/img',
						title:"图片"
					},{
						url:'pages/paper/audio',
						title:"音频"
					},{
						url:'pages/paper/video',
						title:"视频"
					},]
				},{
					title:"设备",
					open:false,
					pages:[{
						url:'pages/paper/wifi',
						title:"获取设备网络状态"
					},{
						url:'pages/paper/info',
						title:"获取设备系统信息"
					},{
						url:'pages/paper/call',
						title:"打电话"
					}]
				},{
					title:"网络",
					open:false,
					pages:[{
						url:'pages/paper/nav',
						title:"设置导航条"
					}]
				}
				]
			}
		},
		methods: {
			changescllspase(index){
				for(var i=0; i<this.list.length; i++ ){
					if(i==index){
						this.list[index].open=!this.list[index].open;
						console.log(!this.list[index].open)
					}else{
						this.list[i].open = false
					}
				}
			}
		}
	}
</script>

<style>

	@media screen and (max-width: 1190px){
		.page{
			padding:30rpx;
			height:100vh;
			background-color: rgb(245,245,245);
		}
		
	}
	@media screen and (min-width: 1190px){
		.list{
			width:300px;
			background-color: #fff;
		}
	}
</style>
