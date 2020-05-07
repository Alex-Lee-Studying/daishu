<template>
	<div class="uc_box">
		<div class="uc_title"><h4>{{$t("usercenter.xinxi")}}</h4></div>
		<div class="uc_area">
			<ul class="uc_main">
				<li>
					<label>{{$t("usercenter.nicheng")}}</label>
					<el-col :span="10">
						<el-input v-model="user.name" clearable></el-input>
					</el-col>
				</li>
				<li>
					<label>{{$t("usercenter.mobile")}}</label>
					<el-col :span="10">
						<el-input v-model="user.mobile" clearable></el-input>
					</el-col>
				</li>
				<li>
					<label>{{$t("usercenter.youxiang")}}</label>
					<el-col :span="10">
						<el-input v-model="user.email" clearable></el-input>
					</el-col>
				</li>
				<li>
					<label>{{$t("usercenter.zsxm")}}</label>
					<el-col :span="10">
						<el-input v-model="user.true_name" clearable></el-input>
					</el-col>
				</li>
			</ul>
		</div>
		<div class="uc_button">
			<el-button type="primary">{{$t("button.baocun")}}</el-button>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				user:{
					name: 'Alex',
					mobile: 18611111111,
					email: 'alexleemine@gmail.com',
					true_name: '张湿湿',
				}
			}
		},
		computed: {
			uid() {
				return this.$store.getters.userinfo.id
			}
		},
		mounted() {
			this.getInfo()
		},
		methods: {
			getInfo() {
				if (this.loading) return
				if (!this.uid) {
					return
				}
				this.loading = true
				this.$store.dispatch('user/getInfo', { id: this.uid }).then(response => {
					console.log(response)
					this.loading = false
				}).catch(error => {
					this.loading = false
					console.log(error)
				})
			}
		}
	}
</script>
<style>
	.uc_box{
		height: 750px;
	}
	.uc_title h4{
		width:200px;
		height:33px;
		font-size:24px;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:33px;
		margin: 34px auto 35px 30px;
	}
	.uc_area{
		width: 920px;
		margin:0 auto 20px;
	}
	.uc_button{
		text-align: left;
		width: 980px;
		height: 50px;
	}
	.uc_button button{
		margin-left: 30px;
	}
	.uc_main li{
		width: 100%;
		display: inline-block;
		margin-bottom: 20px;
	}
	.uc_main li label{
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