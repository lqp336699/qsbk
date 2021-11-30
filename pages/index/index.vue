<template>
	<view class="">
		 <scroll-view class="scroll-x" style="white-space:nowrap; line-height:80rpx;" scroll-with-animation="true" :scroll-into-view="scrollInto" scroll-x="true">
		    <view class="item mr-5" v-for="(item,index) in tabBars" :id="item.id" @click="ontabtap" :key="item.id" :data-current="index">
				<text :class="index == this.tabIndex ? 'active' : ''">
					{{item.name}}
				</text>	
			</view>
		 </scroll-view>
		 <swiper class="swiper" :current="tabIndex">
		 	<swiper-item  v-for="item in tabBars">
				<scroll-view scroll-y="true" class="" @scrolltolower="loadMore" style="height:85vh;" >
					<view v-for="(item,index1) in swipers" >
						<lqpCard></lqpCard>
					</view>
					<view :v-show="isloading" class="text-center text-danger">
						正在加载...
					</view>
				</scroll-view>
		 	</swiper-item>
		 </swiper>
	</view>
</template>

<script>
	import lqpCard from '../../components/new_file.vue'
	export default {
		components:{lqpCard},
		data() {
			return {
				title: 'Hello',
				isloading:false,
				tabIndex:0,
				scrollInto:'',
				swipers:[{
						touxiang:"/static/touxiang.jpg",
						name:"卤大师",
						title:"用手改变你的一生？",
						zan:997,
						cai:10,
						pinglun:997,
						fengxiang:10
					},{
						touxiang:"/static/touxiang.jpg",
						name:"卤大师",
						title:"用手改变你的一生？",
						zan:997,
						cai:10,
						pinglun:997,
						fengxiang:10
					},{
						touxiang:"/static/touxiang.jpg",
						name:"卤大师",
						title:"用手改变你的一生？",
						zan:997,
						cai:10,
						pinglun:997,
						fengxiang:10
					}
				],
				tabBars: [{
				    name: '关注',
				    id: 'guanzhu'
				}, {
				    name: '推荐',
				    id: 'tuijian'
				}, {
				    name: '体育',
				    id: 'tiyu'
				}, {
				    name: '热点',
				    id: 'redian'
				}, {
				    name: '财经',
				    id: 'caijing'
				}, {
				    name: '娱乐',
				    id: 'yule'
				}, {
				    name: '军事',
				    id: 'junshi'
				}, {
				    name: '历史',
				    id: 'lishi'
				}, {
				    name: '本地',
				    id: 'bendi'
				}]
			}
		},
		onLoad() {

		},
		methods: {
			ontabtap(e){
				let index = e.target.dataset.current || e.currentTarget.dataset.current;
				this.tabIndex = index;
				this.scrollInto = this.tabBars[index].id;
			},
			loadMore(e){
				this.isloading = true;
				let newData = [{
						touxiang:"/static/touxiang.jpg",
						name:"卤大师",
						title:"用手改变你的一生？",
						zan:997,
						cai:10,
						pinglun:997,
						fengxiang:10
					}];
				setTimeout(()=>{
					this.swipers = [...this.swipers,...newData,...newData,...newData]
					this.isloading = false;
				},1000)
			},
			refresh(){
				console.log('刷新了')
			}
		}
	}
</script>

<style>
	.item{
		display:inline-block;
		margin-right: 80rpx;
	}
	.scroll-x{
		height:80rpx;
		background-color: #fff;
		border-bottom:1px solid #ccc;
		width:100vw;
		z-index:100;;
	}
	@media screen and (min-width: 1190px) {
		.scroll-x{
			top:100px;
		}
	}
	@media screen and (max-width: 1190px) {
		.scroll-x{
			top:45px;
			border: 1px solid #000;
		}
	}
	
	.active{
		color:red;
	}
	.swiper{
		height:100vh;
		background-color: #fff;
	}
	
</style>
