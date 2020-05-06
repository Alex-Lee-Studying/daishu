<template>
	<div class="main">
		<div class="main_center">
			<div class="navigation"><p>首页>关于我们</p></div>
			<div class="intro_main">
				<div class="a_intro">
					<p>
						<strong>关于我们</strong><br/>
						脚递Ashibro励志做一家真正的共享经济公司
公司成立于2020年，总部位于中国天津。世界如此广阔绚丽，我们利用共享经济打造了一个全球性的物流网络，让任何能够提供服务的用户赚取酬劳。我们以减少人们的出行费用，让所有人都有机会去环游世界！<br/> 脚递主营业务为国际快递服务，仓储代收业务；为居住/留学在他国的人员提供国际快递服务，您既可以是用户，也可以通过带货赚取酬劳。让您无论在世界何处，都能在2-5天内收到货物。
目前脚递的网点已经涵盖中国、美国、英国、俄罗斯、马来西亚等国家的多个城市，并且还在持续扩展中。<br/>
我们相信，这种双向的国际物流模式，在更快，更便宜，更安全的基础上，一定会成为国际物流的主要模式。我们将不断优化服务，越做越好！感谢用户信赖！
</p>
					<img src="../assets/aboutus.png">
				</div>
				<ul class="specfic_main">
					<li class='specfic'>
						<img src="../assets/zhuanye.png">
						<p>专业</p>
					</li>
					<li class='specfic'>
						<img src="../assets/bianjie.png">
						<p>便捷</p>
					</li>
					<li class='specfic'>
						<img  src="../assets/safe.png">
						<p>安全</p>
					</li>
					<li class='specfic'>
						<img src="../assets/speed.png">
						<p>快速</p>
					</li>
				</ul>
				<div class="intro_map_box">
					<div class="map"><img src="../assets/map.png"></div>
					<div>
						<h4>联系我们</h4>
						<p>电话 18518501618 <br/>
							邮箱 service@ashibro.com<br/>
							地址 北京朝阳区建华南路19号长安国际6号
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