<template>
	<div class="ua_box">
		<div class="ua_title"><h4>我的信息</h4></div>
		<div class="ua_area">
			<ul class="ua_main">
				<li>
					<label>旧密码</label>
					<el-col :span="10">
						<el-input placeholder="请输入旧密码" v-model="user.o_passwd" clearable show-password></el-input>
					</el-col>
				</li>
				<li>
					<label>新密码</label>
					<el-col :span="10">
						<el-input placeholder="请输入新密码" v-model="user.n_passwd" clearable show-password></el-input>
					</el-col>
				</li>
				<li>
					<label>重复新密码</label>
					<el-col :span="10">
						<el-input placeholder="请重新填写新密码" v-model="user.rn_passwd" clearable show-password></el-input>
					</el-col>
				</li>
			</ul>
		</div>
		<div class="ua_button">
			<el-button type="primary">{{$t("button.baocun")}}</el-button>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				user:{
					o_passwd: '',
					n_passwd: '',
					rn_passwd: '',
				}
			}
		}
	}
</script>
<style>
	.ua_box{
		height: 750px;
	}
	.ua_title h4{
		width:96px;
		height:33px;
		font-size:24px;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:33px;
		margin: 34px auto 35px 30px;
	}
	.ua_area{
		width: 920px;
		margin:0 auto 20px;
	}
	.ua_button{
		text-align: left;
		width: 980px;
		height: 50px;
	}
	.ua_button button{
		margin-left: 30px;
	}
	.ua_main li{
		width: 100%;
		display: inline-block;
		margin-bottom: 20px;
	}
	.ua_main li label{
		display: inline-block;
		width:100%;
		height:20px;
		font-size:14px;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height:20px;
		margin-bottom: 7px;
		text-align: left;
	}
</style>