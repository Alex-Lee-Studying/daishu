<template>
	<div>
		<div class="up_title"><h4>{{$t("usercenter.dingdan")}}</h4></div>
		<div class="up_search">
			<el-row :gutter="5">
				<el-col :span="6">
					<el-input placeholder="请输入订单信息" v-model="input" clearable></el-input>
				</el-col>
				<el-col :span="3">
					<el-button type="primary">{{$t("button.sousuo")}}</el-button>
				</el-col>
			</el-row>
		</div>
		<div class="table_area">
			<el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName" :cell-style="tableCell" :header-cell-style="headBack">
				<el-table-column prop="date" label="日期" width="157" align="center"> </el-table-column>
				<el-table-column prop="name" label="行程编号" width="123" align="center"></el-table-column>
				<el-table-column prop="flight" label="航班" width="90" align="center"> </el-table-column>
				<el-table-column prop="address" label="地点" width="123" align="center"> </el-table-column>
				<el-table-column prop="fight_time" label="时间" width="180" align="center"> </el-table-column>
				<el-table-column prop="weight" label="携带行李额" width="90" align="center"> </el-table-column>
				<el-table-column prop="money" label="费用" width="123" align="center"> </el-table-column>
				<el-table-column prop="status" label="状态" width="123" align="center"> </el-table-column>
			</el-table>
		</div>
		<div class="up_page">
			<el-pagination background  layout="prev, pager, next"  :total="100"></el-pagination>
		</div>
	</div>
</template>
<script>
	export default{
		methods: {
			tableRowClassName({rowIndex}) {
			if (rowIndex === 1) {
				return 'warning-row';
			} else if (rowIndex === 3) {
				return 'success-row';
			}
				return '';
			},
			tableCell(){
				return 'color:#1A1A1A'
			},
			headBack(){
				return 'background-color:#F7F9FA'
			}
		},
		data() {
		return {
			tableData: [{
					date: '2016-05-02',
					name: '王小二',
					flight: 'CZ3456',
					address: '中国-缅甸',
					fight_time: '2019/09/23-2019/10/11',
					weight: '12kg',
					money: '298元',
					status: '开始',
				},
				{
					date: '2016-05-02',
					name: '李师师',
					flight: 'CZ3456',
					address: '中国-缅甸',
					fight_time: '2019/09/23-2019/10/11',
					weight: '12kg',
					money: '298元',
					status: '开始',
				},
				{
					date: '2016-05-02',
					name: '刘诗诗',
					flight: 'CZ3456',
					address: '中国-缅甸',
					fight_time: '2019/09/23-2019/10/11',
					weight: '12kg',
					money: '298元',
					status: '开始',
				},
				{
					date: '2016-05-02',
					name: '张湿湿',
					flight: 'CZ3456',
					address: '中国-缅甸',
					fight_time: '2019/09/23-2019/10/11',
					weight: '12kg',
					money: '298元',
					status: '开始',
				}],
			}
		}
	}
</script>
<style scoped>
	.table_area{
		border:1px solid #DCDCDC;
		margin: 0px 29px 40px 31px;
	}
	.el-table .warning-row {
		background: oldlace;
	}
	.el-table .success-row {
		background: #f0f9eb;
	}
	.up_title h4{
		width:96px;
		height:33px;
		font-size:24px;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:33px;
		margin: 34px auto 35px 30px;
	}
	.up_search{
		height: 44px;
		margin: 0px auto 20px 30px;
	}
	.up_page{
		margin-bottom: 40px;
		text-align: right;
		padding-right: 20px;
	}
</style>