<template>
	<div class="main">
		<div class="main_center">
			<div class="navigation"><p>首页>个人中心</p></div>
			<div class="user_main">
				<div class="side_bar">
					<ul>
						<li v-bind:class="{selected: $route.path.indexOf('profile') > -1 }">
							<router-link to='/usercenter/profile'>我的信息</router-link>
						</li>
						<li v-bind:class="{selected: $route.path.indexOf('order') > -1 }">
							<router-link to='/usercenter/order'>我的订单</router-link>
						</li>
						<li v-bind:class="{selected: $route.path.indexOf('accountsafe') > -1 }">
							<router-link to='/usercenter/accountsafe'>账号安全</router-link>
						</li>
						<li v-bind:class="{selected: $route.path.indexOf('feedback') > -1 }">
							<router-link to='/usercenter/feedback'>意见反馈</router-link>
						</li>
					</ul>
				</div>
				<div class="usercenter_area">
					<router-view></router-view>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				test: 1
			}
		}
	}
</script>
<style scoped>
	.user_main{
		display: flex;
	}
	.side_bar{
		width: 200px;
		background-color: #FFFFFF;
		height: auto;
		padding-top: 14px;
	}
	.side_bar li{
		width:196px;
		font-size:18px;
		font-weight:500;
		color:rgba(62,220,254,1);
		line-height:54px;
		text-align: center;
		margin-bottom: 14px;
	}
	.selected{
		border-left: 4px solid #3EDCFE;
		background-color: #E9FBFF;
		height: 54px;
		color:#3EDCFE !important;
	}
	.usercenter_area{
		width: 980px;
		margin-left: 20px;
		background-color: #fff;
	}
</style>