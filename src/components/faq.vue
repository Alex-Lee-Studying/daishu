<template>
	<div class="main">
		<div class="main_center">
			<div class="navigation"><p>{{$t("menu.shouye")}}>{{$t("title.faq")}}</p></div>
			<div class="faq_box">
				<div class="faq_title"><h4>{{$t("title.faq")}}</h4></div>
				<ul class="question_box">
					<li class="question_area">
						<div class="question_header"><img src="../assets/question.png"><h5 class="question">脚递ashibro能为你做什么？</h5></div>
						<p class="answer show_2line">脚递是一个连接旅客及物品求带者的国际物流信息服务平台，app应用智能匹配、实时追踪、交易担保等一系列围绕用户之间帮带物品的功能。通过脚递ashibro app，您可以快速简便的寄国际快递，避免很多寄国际快递带来的繁琐文件。</p>
						<p class="more"><span @click="showAll">展开<i class="iconfont icon-shousuoxiajiantou"></i></span><span @click="showEllipsis">收起<i class="iconfont icon-shousuoshangjiantou"></i></span></p>
					</li>
					<li class="question_area">
						<div class="question_header"><img src="../assets/question.png"><h5 class="question">服务是否包含关税</h5></div>
						<p class="answer show_2line">根据规定，居民旅客（短期多次往返旅客除外）在境外获取的总值不超过人民币5000元（含5000元）数量合理的自用物品，海关予以免税放行；超过5000元时，需向海关申报，经审核确属自用的，海关仅对超出部分征税，对不可分割的单件物品，全额征税。
当您寄不超过人民币价值5000以上的物品时不会收取其他额外费用，如果超过这个价值建议在寄物品时将物品价值写上，购买保险。</p>
						<p class="more"><span @click="showAll">展开<i class="iconfont icon-shousuoxiajiantou"></i></span><span @click="showEllipsis">收起<i class="iconfont icon-shousuoshangjiantou"></i></span></p>
					</li>
					<li class="question_area">
						<div class="question_header"><img src="../assets/question.png"><h5 class="question">哪些物品不能使用脚递运输</h5></div>
						<p class="answer show_2line">1、大麻、鸦片等毒品，吸毒用具 2、枪支、弹药及其零部件，爆炸物品、火药、化学武器的原材料 3、硬币、纸币、有价证券的伪造制品 4、带有色情内容的杂志、录像带、光盘等 5、假冒、伪造、盗版等侵害知识产权的物品  6、 特殊液体、凝胶及喷雾类物品；7、价值RMB20,000以上的奢侈箱包，珠宝首饰或服装衣帽。8、禁止携带某些保护动物制品（鳄鱼、象牙等）、加工品、动物、植物出入境。9、非个人使用的某些医药品、保健品、化妆品，超出一定限量，限量例：医药品（2个月用量）、 医生指定药品（1个月用量）化妆品、美容保健品每种24个。10、 不符合目的地国家的海关规定的其他物品。</p>
						<p class="more"><span @click="showAll">展开<i class="iconfont icon-shousuoxiajiantou"></i></span><span @click="showEllipsis">收起<i class="iconfont icon-shousuoshangjiantou"></i></span></p>
					</li>
					<li class="question_area">
						<div class="question_header"><img src="../assets/question.png"><h5 class="question">费用如何计算</h5></div>
						<p class="answer show_2line">我们有两种计费规则
1)	自行联系旅客给出帮带价格，建议不要低于我们平台建议价格。价格不统一，您可以根据物品价值以及时效性为
2)	通过脚递官方寄件，只需寄到脚递官方地址，会由我们官方委托出行旅客帮您带去物品，省去您的沟通时间，您只需等待我们专人派送人员到达您国家与他联系即可。运费计算可以通过我们网站得出。<router-link to='/fee' style="color:#3EDCFE">详情请点（跳转到运费计算页面）</router-link></p>
						<p class="more"><span @click="showAll">展开>></span><span @click="showEllipsis">收起<a></a></span></p>
					</li>
					<li class="question_area">
						<div class="question_header"><img src="../assets/question.png"><h5 class="question">东西寄丢坏了怎么办</h5></div>
						<p class="answer show_2line">当您在使用脚递ashibro的服务过程中，发生任何丢失，破损，延误等事故，均可通过脚递ashibro微信公共号或service@ashibro.com进行申诉。在客服收到申诉后，会第一时间和您取得联系并进入流程。在正常情况下，脚递ashibro可以在3个工作日内完成理赔。</p>
						<p class="more"><span @click="showAll">展开<i class="iconfont icon-shousuoxiajiantou"></i></span><span @click="showEllipsis">收起<i class="iconfont icon-shousuoshangjiantou"></i></span></p>
					</li>
					<li class="question_area">
						<div class="question_header"><img src="../assets/question.png"><h5 class="question">ashibro的时效性有多高</h5></div>
						<p class="answer show_2line">我们最快可以在收到货物后48小时内从一个国家送达到另一个国家的收件人手里。</p>
						<p class="more"><span @click="showAll">展开<i class="iconfont icon-shousuoxiajiantou"></i></span><span @click="showEllipsis">收起<i class="iconfont icon-shousuoshangjiantou"></i></span></p>
					</li>
				</ul>
				<div class="page">
					<!-- <span class="page_button" v-bind:class="{active: page==1}">&nbsp;</span>
					<span class="page_button"></span>
					<span class="page_button"></span>
					<span class="page_button"></span> -->
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				page: 1,
				index: 0,
			}
		},
		methods:{
			showAll:function(e){
				let clickDom = e.currentTarget
				let p = clickDom.parentElement.previousElementSibling
				p.classList.remove('show_2line')
				clickDom.style.display = 'none'
				let span = clickDom.nextElementSibling
				span.style.display = 'block'
			},
			showEllipsis:function(e){
				let clickDom = e.currentTarget
				let p = clickDom.parentElement.previousElementSibling
				p.classList.add('show_2line')
				clickDom.style.display = 'none'
				let span = clickDom.previousElementSibling
				span.style.display = 'block'
			}
		}
	}
</script>
<style scoped>
	.faq_title{
		height:33px;
		font-size:24px;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:33px;
		text-align: left;
		padding-top: 40px;
		margin-left: 60px;
	}
	.faq_box{
		background-color: #fff;
	}
	.question_header{
		width:320px;
		display: flex;
		margin-bottom: 18px;
		height: auto;
	}
	.question_header img{
		width: 22px;
		height: 22px;
		margin-right: 10px;
	}
	.question_area{
		width: 320px;
		margin-top: 49px;
		margin-left: 56px;
	}
	.question_box{
		display: flex;
		flex-wrap: wrap;
	}
	.question{
		font-size:18px;
		font-weight:500;
		color:#000;
		line-height: 28px;
	}
	.answer{
		font-size:16px;
		line-height: 25px;
		height: auto;
		color:rgba(51,51,51,1);
		font-weight:400;
		width:288px;
		margin-left: 32px;
		text-align: left;
	}
	.show_2line{
		overflow: hidden;
		text-align: left;
		height: 50px;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.more{
		width:288px;
		margin-top: 13px;
		text-align: left;
		padding-left: 32px;
		display: inline-block;
		height:16px;
		font-size:16px;
		font-weight:400;
		color:rgba(62,220,254,1);
		line-height:16px;
		cursor: pointer;
	}
	.more span:last-child {
		display: none;
	}
	.page{
		margin: 24px auto 0px;
		padding-bottom: 54px;
	}
	.page_button{
		display: inline-block;
		height: 8px;
		width: 8px;
		border-radius: 8px;
		margin:0px 5px;
		background-color: rgba(220,220,220,1);
	}
	.active{
		background-color: #1A1A1A;
	}
</style>