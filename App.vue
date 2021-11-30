<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* #ifdef APP-PLUS */
	
	/* #endif */
	@import url('common/uni.css');
	@import url('common/iconfont/iconfont.css');
	@import url('common/free.css');
	@import url('common/common.css');
	@media screen and (min-width:  1180px){
		page{
			width:840px;
			float:right;
			overflow: hidden;
			margin: 0 auto;
		}
		.uni-app--showleftwindow + .uni-tabbar-bottom {
		    display: none;
		}
		#app{
			background-color: rgb(239,239,244);
		}  
	}
</style>
