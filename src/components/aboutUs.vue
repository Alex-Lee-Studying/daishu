<template>
	<div class="main">
		<div class="main_center">
			<div class="navigation"><p>{{$t("menu.shouye")}}>{{$t("title.aboutus")}}</p></div>
			<div class="intro_main">
				<div class="a_intro">
					<p>
						<strong>{{$t("title.aboutus")}}</strong><br/>
						{{$t("aboutus.jieshao1")}}<br/> {{$t("aboutus.jieshao2")}}<br/>{{$t("aboutus.jieshao3")}}</p>
					<img src="../assets/aboutus.png">
				</div>
				<ul class="specfic_main">
					<li class='specfic'>
						<img src="../assets/zhuanye.png">
						<p>{{$t("aboutus.zhuanye")}}</p>
					</li>
					<li class='specfic'>
						<img src="../assets/bianjie.png">
						<p>{{$t("aboutus.bianjie")}}</p>
					</li>
					<li class='specfic'>
						<img  src="../assets/safe.png">
						<p>{{$t("aboutus.anquan")}}</p>
					</li>
					<li class='specfic'>
						<img src="../assets/speed.png">
						<p>{{$t("aboutus.kuaisu")}}</p>
					</li>
				</ul>
				<div class="intro_map_box">
					<div class="map"><img src="../assets/map.png"></div>
					<div>
						<h4>{{$t("index.lxwm")}}</h4>
						<p>{{$t("index.dianhua")}} 18518501618 <br/>
							{{$t("index.youxiang")}} service@ashibro.com<br/>
							{{$t("index.dizhi")}} 北京朝阳区建华南路19号长安国际6号
						</p>
						<p><img src="../assets/weibo.png"><img src="../assets/twitter.png"><img src="../assets/facebook.png"></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.intro_main{
		width: 1140px;
		background-color: #fff;
		padding-top: 58px;
		padding-left: 60px;
		position: relative;
		padding-bottom: 95px;
	}
	.a_intro{
		text-align: left;
		font-size:16px;
		font-weight:500;
		color:rgba(102,102,102,1);
		display: flex;
		line-height:30px;
	}
	.a_intro p{
		width: 565px;
		font-size:16px;
		line-height:30px;
		color:rgba(102,102,102,1);
	}
	.a_intro strong{
		color: #1A1A1A;
		font-size: 24px;
		line-height: 33px;
		display: inline-block;
		margin-bottom: 18px;
	}
	.a_intro img{
		width: 407px;
		margin-left:110px;
		height: 463px;
	}
	.specfic_main{
		width: 900px;
		height: 180px;
		margin: -72px auto 0px 0px;
		position: absolute;
		display: flex;
		background-color: rgba(255,255,255,1);
		box-shadow:0px 0px 10px 0px rgba(0,0,0,0.13);
		border-radius:6px;
		z-index: 999;
		vertical-align: middle;
	}
	.specfic{
		width: 25%;
		vertical-align: middle;
	}
	.specfic img{
		width: 80px;
		margin-top: 30px;
		margin-bottom: 16px;
	}
	.specfic p{
		font-size: 16px;
	}
	.intro_map_box{
		margin-top: 102px;
		display: flex;
		padding-top: 60px;
	}
	.map{
		width: 430px;
		height: 250px;
		border:1px solid #000;
	}
	.map img{
		width: 430px !important;
		height: 250px;
	}
	.intro_map_box p{
		width: 540px;
		margin-left: 52px;
		font-size: 16px;
		text-align: left;
		line-height:35px;
		margin-top: 14px;
	}
	.intro_map_box p img{
		margin-top: 10px;
	}
	.intro_map_box img{
		width: 50px;
		margin-right: 20px;
	}
	.intro_map_box h4{
		margin-left: 52px;
		margin-bottom: 25px;
		width: 540px;
		width:97px;
		height:33px;
		font-size:24px;
		font-weight:500;
		color:rgba(26,26,26,1);
		line-height:33px;
	}
</style>