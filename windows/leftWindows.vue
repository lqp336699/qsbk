<template>
	<view class="box">
		<component :is="type" ref="pagesDetail"></component>
	</view>
</template>

<script>
	import pagesHome from '../pages/home/home'
	import pagesNews from '../pages/news/news'
	import pagesPaper from '../pages/paper/paper'
	export default{
		components:{pagesHome,pagesNews,pagesPaper},
		data(){
			return{
				type:'pagesHome'
			}
		},
		methods:{
			
		},
		created(e) {
		     
		      uni.$on('updateDetail', (e) => {
		        this.type = e.detail;
		      });
		}	
	}
	
</script>

<style>
	.box{
		width:340px;
		display: flex;
		background-color: rgb(245,245,245);
		height:80vh;
		padding:0 20px;
		box-sizing:border-box;
	}
</style>
