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
                <span id="begin_travel">{{$t("index.xiadan")}}</span>
                <span id="search_travel">{{$t("index.xingcheng")}}</span>
              </p>
            </div>
          </div>
      <div class="index_why">{{$t("index.wsmashi")}}</div>
      <ul class="index_intro">
        <li>
          <img src="../assets/zhuanren.png" width="120px;">
          <p class="intro_title">{{$t("index.zrsd")}}</p>
          <span class="intro_line in_z"></span>
          <p class="intro_content">{{$t("index.zrsdintro")}}</p>
        </li>
        <li>
          <img src="../assets/price.png" width="120px;">
          <p class="intro_title">{{$t("index.jgsh")}}</p>
          <span class="intro_line in_p"></span>
          <p class="intro_content">{{$t("index.jgshintro")}}</p>
        </li>
        <li>
          <img src="../assets/express_b.png" width="120px;">
          <p class="intro_title">{{$t("index.wdds")}}</p>
          <span class="intro_line in_e"></span>
          <p class="intro_content">{{$t("index.wddsintro")}}</p>
        </li>
        <li>
          <img src="../assets/hand_heart.png" width="120px;">
          <p class="intro_title">{{$t("index.jskf")}}</p>
          <span class="intro_line in_h"></span>
          <p class="intro_content">{{$t("index.jskfintro")}}</p>
        </li>
      </ul>
      <div class='middle_banner'>
        <p>『{{$t("index.tggxjsintro")}}』</p>
      </div>
      <div class="middle_faq">
        <p class="index_why">FAQ</p>
        <ul class="middle_list">
          <li><img src="../assets/faq1.png"><p>{{$t("index.q_jdnzsm")}}</p></li>
          <li><img src="../assets/faq2.png"><p>{{$t("index.q_fwbhgs")}}</p></li>
          <li><img src="../assets/faq3.png"><p>{{$t("index.q_nxbn")}}</p></li>
          <li><img src="../assets/faq4.png"><p>{{$t("index.q_dxjd")}}</p></li>
          <li><img src="../assets/faq5.png"><p>{{$t("index.q_yfjs")}}</p></li>
          <li><img src="../assets/faq6.png"><p>{{$t("index.q_sxx")}}</p></li>
        </ul>
        <span class="more_question"><router-link to='/faq'>{{$t("index.gdcj")}}</router-link></span>
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
