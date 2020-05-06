<template>
	<div class="main">
		<div class="main_center">
			<div class="navigation"><p>首页>业务网点</p></div>
			<div class="yw_box">
				<table class="yw_ul">
					<tr class="yw_main">
						<td class="yw_logo"><img src="../assets/chinese.png"></td>
						<td class="yw_country">中国</td>
						<td class="yw_city">北京</td>
						<td class="yw_intro">
							<p class="yw_address">地址：朝阳区建华南路19号楼长安6号</p>
							<p class="yw_address">电话：18518501618</p>
							<p class="yw_address">联系人:池诗诗 </p>
							<p class="yw_address">邮编:100022</p>
						</td>
						<td></td>
						<td></td>
					</tr>
					<tr class="yw_main">
						<td class="yw_logo"><img src="../assets/russia.png"></td>
						<td class="yw_country">俄罗斯</td>
						<td class="yw_city">圣彼得堡</td>
						<td class="yw_intro">
							<p class="yw_address">地址：улица Фёдора Абрамова, дом 23, корпус 1, город Санкт-Петербург</p>
							<p class="yw_address">电话：+7(921)599-16-84</p>
							<p class="yw_address">联系人:максим хопин </p>
							<p class="yw_address">邮编:194358</p>
						</td>
						<td class="yw_city">叶卡捷琳堡</td>
						<td class="yw_intro">
							<p class="yw_address">地址：улица Большакова, 79 Екатеринбург</p>
							<p class="yw_address">电话：+7 (982) 662-77-89</p>
							<p class="yw_address">联系人:李哲凯 </p>
							<p class="yw_address">邮编:620 000</p>
						</td>
					</tr>
					<tr class="yw_main">
						<td class="yw_logo"><img src="../assets/usa.png"></td>
						<td class="yw_country">美国</td>
						<td class="yw_city">纽约</td>
						<td class="yw_intro">
							<p class="yw_address">地址：120 Meyer Road apartment 107, buffalo, New York, US</p>
							<p class="yw_address">电话:+1716-465-0550</p>
							<p class="yw_address">联系人:Koro</p>
							<p class="yw_address">邮编:14226</p>
						</td>
						<td></td>
						<td></td>
					</tr>
					<tr class="yw_main">
						<td class="yw_logo"><img src="../assets/malaixiya.png"></td>
						<td class="yw_country">马来西亚</td>
						<td class="yw_city">槟城</td>
						<td class="yw_intro" colspan="3">
							<p class="yw_address">地址:58, Lorong Rajawali 13, Taman Berjaya, 14300 nibong tebal, Pulau Pinang, Malaysia</p>
							<p class="yw_address">电话：+60 0125685715</p>
							<p class="yw_address">联系人:Lee peiying </p>
							<p class="yw_address">邮编:14300</p>
						</td>
					</tr>
					<tr class="yw_main">
						<td class="yw_logo"><img src="../assets/eng.png"></td>
						<td class="yw_country">英国</td>
						<td class="yw_city">伦敦</td>
						<td class="yw_intro">
							<p class="yw_address">地址：Gabor Hall (Central)Princes Gardens London United Kingdom</p>
							<p class="yw_address">电话:+44 7529938866</p>
							<p class="yw_address">联系人:Cosmos</p>
							<p class="yw_address">邮编:SW7 1AZ</p>
						</td>
						<td class="yw_city">曼切斯顿</td>
						<td>
							<p class="yw_address">地址：Upper brook st,liberty park,f14.04</p>
							<p class="yw_address">电话:+44 7852427680</p>
							<p class="yw_address">联系人:David</p>
							<p class="yw_address">邮编:M13 0FZ</p>
						</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.main{
		width: 100%;
		height: auto;
		background-color: #FCF9FC;
	}
	.main_center{
		width: 1200px;
		margin: 0px auto;
	}
	.yw_box{
		background-color: #fff;
	}
	.yw_ul{
		width: 100%;
	}
	.navigation{
		width: 1200px;
		text-align: left;
		padding:16px auto 17px;
		line-height: 45px;
		height: 45px;
	}
	.yw_main{
		text-align: left;
		line-height:26px;
		height: 153px;
		border-bottom: 1px solid #DCDCDC;
		width: 100%;
	}
	.yw_logo{
		width: 90px;
		text-align: center;
	}
	.yw_logo img{
		width: 40px;
		margin-left: 30px;
		margin-right: 20px;
	}
	.yw_intro{
		width: 430px;
	}
	.yw_country{
		font-size: 16px;
		color: #1A1A1A;
		font-weight:500;
		width: 70px;
		text-align: center;
	}
	.yw_city{
		font-size: 14px;
		color: #888;
		font-weight:500;
		width: 84px;
		padding-left: 20px;
	}
	.yw_address{
		font-size: 14px;
		color: #888;
		font-weight:500;
	}
</style>