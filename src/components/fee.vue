<template>
	<div class="main">
		<div class="navigation"><p>{{$t("menu.shouye")}}>{{$t("title.yunfei")}}</p></div>
		<div class="main_center">
			<div class="banner">
				<img src="../assets/fee_banner.png">
				<div class='title'>{{$t("title.yunfei")}}</div>
			</div>
			<div class="c_b_area">
				<span class="country_button" :class="{selected: country== 'China'}">中国</span>
				<span class="country_button">俄罗斯</span>
			</div>
			<div class="calculation">
				<ul class="uc_main">
					<li>
						<label>物品类型</label>
						<el-row>
							<el-col :span="24">
								<el-select v-model="things_kind" placeholder="请选择" allow-create filterable style="width: 100%">
									<el-option v-for="item in kinds" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
							</el-col>
						</el-row>
					</li>
					<li>
						<label>快递类型</label>
						<el-col :span="24">
							<el-select v-model="express_kind" placeholder="请选择" style="width: 100%">
								<el-option v-for="item in e_kinds" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</el-col>
					</li>
					<li>
						<label>重量</label>
						<el-col :span="24">
							<el-input  clearable></el-input>
						</el-col>
					</li>
				</ul>
				<div class="total">{{$t("yunfei.zongji")}}：<strong>12元</strong></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data() {
			return {
				country: 'China',
				things_kind: '',
				express_kind: '',
				kinds:[
					{'value': 1,'label':'文件'},
					{'value': 2,'label':'化妆品'},
					{'value': 3,'label':'衣物鞋子'},
					{'value': 4,'label':'电子产品'},
					{'value': 5,'label':'液体'},
					{'value': 6,'label':'其他(直接输入即可)'}],
				e_kinds:[{'value': 1,'label':'专人配送'},]
			}
		}
	}
</script>
<style scoped>
	.banner{
		position: relative;
	}
	.banner img{
		width: 100%;
	}
	.main_center{
		width: 100%;
		background: #fff;
	}
	.title{
		position: absolute;
		width:100%;
		height:76px;
		font-size:30px;
		font-weight:600;
		color:rgba(255,255,255,1);
		line-height:76px;
		text-align: center;
		top:112px;
	}
	.navigation{
		width: 1200px;
		text-align: left;
		padding:16px auto 17px;
		line-height: 45px;
		height: 45px;
		margin:0px auto;
	}
	.calculation{
		width: 450px;
		margin:60px auto 40px;
	}
	.c_b_area{
		margin-top: 30px;
	}
	.country_button{
		display: inline-block;
		width: 140px;
		border-radius:21px;
		height: 42px;
		font-size:18px;
		line-height: 42px;
		background-color: #F7F7F7;
		margin-left: 28px;
		margin-right: 28px;
		cursor: pointer;
	}
	.total{
		text-align: right;
	}
	.total strong{
		color: #FF5A5E;
		font-size: 24px;
	}
	.selected{
		background-color: #3EDCFE;
		color: #fff;
	}
</style>