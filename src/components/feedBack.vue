<template>
	<div class="fb_box">
		<div class="fb_title"><h4>意见反馈</h4></div>
		<div class="fb_area"><el-input type="textarea" :rows="8" placeholder="请输入内容" v-model="textarea"></el-input></div>
		<div class="fb_button">
			<el-button type="primary">提交</el-button>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				textarea : ''
			}
		}
	}
</script>
<style>
	.fb_box{
		height: 750px;
	}
	.fb_title h4{
		width:96px;
		height:33px;
		font-size:24px;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:33px;
		margin: 34px auto 35px 30px;
	}
	.fb_area{
		width: 920px;
		margin:0 auto 20px;
	}
	.fb_button{
		text-align: right;
		width: 980px;
		height: 50px;
	}
	.fb_button button{
		margin-right: 30px;
	}
</style>