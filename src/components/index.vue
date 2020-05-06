<template>
	<div>
		<div class="index_main">
            <div class="nav">
              <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide><img src="../assets/banner_index.png"></swiper-slide>
                <swiper-slide><img src="../assets/banner_index2.png"></swiper-slide>
              </swiper>
            </div>
            <div class="banner_main">
              <p id="banner_slogan">寄国际快递<br/>上脚递app</p>
              <p id="banner_buttons">
                <span id="begin_travel">我要下单</span>
                <span id="search_travel">创建行程</span>
              </p>
            </div>
          </div>
      <div class="index_why">为什么选择ashibro</div>
      <ul class="index_intro">
        <li>
          <img src="../assets/zhuanren.png" width="120px;">
          <p class="intro_title">专人速递</p>
          <span class="intro_line in_z"></span>
          <p class="intro_content">由全球旅客构架而成的物流<br/>网络，确保货物以最快的速<br/>度到达目的地。</p>
        </li>
        <li>
          <img src="../assets/price.png" width="120px;">
          <p class="intro_title">价格实惠</p>
          <span class="intro_line in_p"></span>
          <p class="intro_content">低于国际物流行业服务的价<br/>格，享受高于行业服务的标准。</p>
        </li>
        <li>
          <img src="../assets/express_b.png" width="120px;">
          <p class="intro_title">网点代收</p>
          <span class="intro_line in_e"></span>
          <p class="intro_content">脚递在多国设有业务网点，代收<br/>代寄，为您的订单提供保障。</p>
        </li>
        <li>
          <img src="../assets/hand_heart.png" width="120px;">
          <p class="intro_title">即时客服</p>
          <span class="intro_line in_h"></span>
          <p class="intro_content">关于业务的任何问题，都可通过<br/>微信或者站内信直接联系客服<br/>，快速解决。</p>
        </li>
      </ul>
      <div class='middle_banner'>
        <p>『通过共享经济模式，让您的每一次旅程无负担』</p>
      </div>
      <div class="middle_faq">
        <p class="index_why">FAQ</p>
        <ul class="middle_list">
          <li><img src="../assets/faq1.png"><p>脚递ashibro能为你做什么？</p></li>
          <li><img src="../assets/faq2.png"><p>服务是否包含关税？</p></li>
          <li><img src="../assets/faq3.png"><p>那些物品不能使用脚递运输？</p></li>
          <li><img src="../assets/faq4.png"><p>东西寄丢寄坏了怎么办？</p></li>
          <li><img src="../assets/faq5.png"><p>费用如何计算？</p></li>
          <li><img src="../assets/faq6.png"><p>ashibro的时效性有多强？</p></li>
        </ul>
        <span class="more_question"><router-link to='/faq'>更多常见问题</router-link></span>
      </div>
    </div>
</template>

<script>
  export default{
    data(){
      return {
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
        },
        formLabelWidth: '120px',
        swiperOption:{
          autoplay: true,
          delay: 3000,
        }
      }
    }
  }
</script>
<style scoped>
	.index_main{
		width: 100%;
		height: 27.6%;
		position: relative;
	}
	.banner_main{
		position: absolute;
		left: 50%;
		top:50%;
		transform: translate(-50%, -50%);
		z-index: 999;
		/*position: */
		/*color: #fff;*/
		width: 1280px;
		text-align: left;
		color: #fff;
		padding: 0px 0px;
		margin:0px 0px;
	}
	.index_main img{
		width: 100%;
	}
	.banner_title{
		font-size: 6.2rem;
		line-height: 6.2rem;
		height: 6.2rem;
	}
	#banner_buttons{
		margin-top: 3.9rem;
	}
	#banner_slogan{
		line-height: 6.2rem;
		font-size: 5rem;
		vertical-align: bottom;
	}
	#banner_slogan_en{
		line-height: 3.7rem;
		color:rgba(255,255,255,0.5);
		font-size: 2.4rem;
		height: 7.4rem;
	}
	#search_travel{
		display: inline-block;
		font-size: 1.3rem;
		width: 11.2rem;
		height: 4.8rem;
		line-height: 4.8rem;
		text-align: center;
		border:0.2rem solid #fff;
		border-radius: 0.5rem;
		margin-left: 2rem;
		cursor: pointer;
	}
	#begin_travel{
		background-color: #3EDCFE;
		line-height: 4.8rem;
		text-align: center;
		display: inline-block;
		font-size: 1.6rem;
		width: 11.2rem;
		height: 4.8rem;
		border-radius: 0.5rem;
		border:0.2rem solid #3EDCFE;
		cursor: pointer;
	}
	.index_why{
		font-size: 2.4rem;
		color: #1A1A1A;
		line-height: 3.3rem;
		height: 3.3rem;
		margin-top: 6.3rem;
	}
	.index_intro{
		margin-top: 4.4rem;
		width: 1280px;
		margin:4.4rem auto 0 auto;
		display: flex;
	}
	.index_intro li{
		border-radius:10px;
		border:1px solid rgba(227,227,227,1);
		width: 285px;
		height: 367px;
		margin: 0 26px;
	}
	.index_intro li:hover{
		border-bottom: 5px solid #3EDCFE;
		cursor: pointer;
	}
	.index_intro li img{
		width: 100px;
		margin-top: 20px;
	}
	.intro_title{
		font-size: 30px;
		height: 42px;
		line-height: 42px;
		margin-top: 32px;
		font-weight: 500;
	}
	.intro_content{
		font-size: 1.6rem;
		line-height: 33px;
		height: 33px;
		color:rgba(102,102,102,1);
		letter-spacing:1px;
	}
	.intro_line{
		display: inline-block;
		height: 8px;
		width: 60px;
		border-radius: 4px;
		margin-top: 33px;
		margin-bottom: 27px;
	}
	.in_z{
		background-color: #3EA3FE;
	}
	.in_p{
		background-color: #F7B500;
	}
	.in_e{
		background-color: #3EDCFE;
	}
	.in_h{
		background-color: #FA6400;
	}
	.middle_banner{
		background-image: url(../assets/middle_banner.png);
		width: 100%;
		height: 15.7vw;
		margin-top: 60px;
		vertical-align: middle;
	}
	.middle_banner p{
		font-size: 4rem;
		width:100%;
		text-align: center;
		height:15.7vw;
		font-weight:500;
		color:rgba(255,255,255,1);
		line-height:15.7vw;
	}
	.middle_list{
		display: flex;
		width: 1200px;
		margin: 44px auto 0;
		align-content: flex-start;
		flex-wrap: wrap;
	}
	.middle_list li{
		width: 590px;
		height: 100px;
		margin:0 5px 20px;
		position: relative;
		cursor: pointer;
	}
	.middle_list li p{
		position: absolute;
		top: 38px;
		font-size: 18px;
		height: 25px;
		line-height: 25px;
		color:rgba(255,255,255,1);
		width: 590px;
	}
	.more_question{
		margin-top: 40px;
		margin-bottom: 60px;
		height:48px;
		width: 144px;
		font-size:16px;
		background-color: #3EDCFE;
		border-radius:6px;
		line-height:48px;
		display: inline-block;
		font-weight:500;
	}
	.more_question a{
		cursor: pointer;
		color:rgba(255,255,255,1);
	}
</style>
