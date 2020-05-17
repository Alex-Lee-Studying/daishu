<template>
  <div>
    <div class="index_main">
      <div class="banner_img">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide><img src="../assets/banner1.png"></swiper-slide>
          <swiper-slide><img src="../assets/banner2.png"></swiper-slide>
          <swiper-slide><img src="../assets/banner3.png"></swiper-slide>
          <swiper-slide><img src="../assets/banner4.png"></swiper-slide>
          <swiper-slide><img src="../assets/banner5.png"></swiper-slide>
        </swiper>
      </div>
      <div class="fixedWidth banner_main">
        <p id="banner_slogan">寄国际快递<br/>上脚递app</p>
        <p id="banner_buttons">
          <span class="bannerBtn" id="begin_travel">{{$t("index.xiadan")}}</span>
          <span class="bannerBtn" id="search_travel">{{$t("index.xingcheng")}}</span>
        </p>
      </div>
    </div>
    <div class="fixedWidth">
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
    </div>
    <div class='middle_banner'>
      <p>『{{$t("index.tggxjsintro")}}』</p>
    </div>
    <div class="fixedWidth">
      <p class="index_why">FAQ</p>
      <ul class="middle_list">
        <li><img src="../assets/faq1.png"><p><router-link to='/faq'>{{$t("index.q_jdnzsm")}}</router-link></p></li>
        <li><img src="../assets/faq2.png"><p><router-link to='/faq'>{{$t("index.q_fwbhgs")}}</router-link></p></li>
        <li><img src="../assets/faq3.png"><p><router-link to='/faq'>{{$t("index.q_nxbn")}}</router-link></p></li>
        <li><img src="../assets/faq4.png"><p><router-link to='/faq'>{{$t("index.q_dxjd")}}</router-link></p></li>
        <li><img src="../assets/faq5.png"><p><router-link to='/faq'>{{$t("index.q_yfjs")}}</router-link></p></li>
        <li><img src="../assets/faq6.png"><p><router-link to='/faq'>{{$t("index.q_sxx")}}</router-link></p></li>
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
    height: 500px;
    position: relative;
    overflow-x: hidden;
  }
  .banner_img {
    width: 1920px;
    height: 500px;
    margin-left: calc((100vw - 1920px) / 2);
  }
  .banner_img img{
    width: 100%;
    display: block;
  }
  .fixedWidth {
    width: 1200px;
    margin: 0 auto;
  }
  .banner_main{
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, 0);
    z-index: 999;
    /*position: */
    /*color: #fff;*/
    text-align: left;
    color: #fff;
    margin-top: 138px;
  }
  #banner_buttons{
    margin-top: 39px;
  }
  #banner_slogan{
    line-height: 76px;
    font-size: 50px;
  }
  #banner_slogan_en{
    line-height: 37px;
    color:rgba(255,255,255,0.5);
    font-size: 24px;
    height: 74px;
  }
  .bannerBtn {
    display: inline-block;
    font-size: 16px;
    width: 112px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    border-radius: 6px;
    cursor: pointer;
  }
  #search_travel{
    border: 2px solid #fff;
    margin-left: 20px;
  }
  #begin_travel{
    border: 2px solid #3EDCFE;
    background-color: #3EDCFE;
  }

  .index_why{
    font-size: 24px;
    color: #1A1A1A;
    line-height: 33px;
    margin: 63px auto 44px;
  }
  .index_intro{
    display: flex;
    justify-content: center;
  }
  .index_intro li{
    border-radius: 10px;
    border: 1px solid rgba(227,227,227,1);
    width: 285px;
    height: 367px;
    margin-right: 20px;
  }
  .index_intro li:last-child {
    margin-right: 0;
  }
  .index_intro li:hover{
    border-bottom: 8px solid #3EDCFE;
    cursor: pointer;
  }
  .index_intro li img{
    width: 100px;
    height: 100px;
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
    font-size: 16px;
    line-height: 22px;
    color: rgba(102,102,102,1);
    letter-spacing: 1px;
  }
  .intro_line{
    display: inline-block;
    height: 8px;
    width: 60px;
    border-radius: 4px;
    margin: 30px auto;
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
    background: url(../assets/middle_banner.png) no-repeat scroll center center;
    width: 100%;
    height: 300px;
    margin-top: 60px;
    overflow-x: hidden;
  }
  .middle_banner p{
    font-size: 40px;
    height: 56px;
    line-height: 56px;
    text-align: center;
    font-weight: 500;
    color: rgba(255,255,255,1);
    padding-top: 122px;
  }
  .middle_list{
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
  }
  .middle_list li{
    width: 590px;
    height: 100px;
    margin: 0 20px 20px 0;
    position: relative;
    cursor: pointer;
  }
  .middle_list li:nth-child(2n) {
    margin-right: 0;
  }
  .middle_list li img{
    width: 100%;
    height: auto;
  }
  .middle_list li p{
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    height: 18px;
    line-height: 18px;
  }

  .middle_list li p a{
    color:rgba(255,255,255,1);
  }

  .more_question{
    margin: 40px auto 60px;
    width: 144px;
    height: 48px;
    line-height: 48px;
    font-size: 16px;
    background-color: #3EDCFE;
    border-radius: 6px;
    display: inline-block;
    font-weight:500;
  }
  .more_question a{
    cursor: pointer;
    color:rgba(255,255,255,1);
  }

  @media (max-width: 1280px){
    .index_main{
      width: 12.8rem;
      height: 5rem;
      position: relative;
      overflow-x: hidden;
    }
    .banner_img {
      width: 19.2rem;
      height: 5rem;
      margin-left: calc((100vw - 19.2rem) / 2);
    }
    .banner_img img {
      /*height: 5rem;
      width: auto;*/
    }
    .fixedWidth {
      width: 12rem;
    }
    .banner_main{
      margin-top: 1.38rem;
    }
    #banner_buttons{
      margin-top: .39rem;
    }
    #banner_slogan{
      line-height: .76rem;
      font-size: .5rem;
    }
    #banner_slogan_en{
      line-height: .37rem;
      font-size: .24rem;
      height: .74rem;
    }
    .bannerBtn {
      font-size: .16rem;
      width: 1.12rem;
      height: .48rem;
      line-height: .48rem;
      border-radius: .06rem;
    }
    #search_travel{
      border: .02rem solid #fff;
      margin-left: .2rem;
    }
    #begin_travel{
      border: .02rem solid #3EDCFE;
      background-color: #3EDCFE;
    }

    .index_why{
      font-size: .24rem;
      line-height: .33rem;
      margin: .63rem auto .44rem;
    }
    .index_intro li{
      border-radius: .1rem;
      border: .01rem solid rgba(227,227,227,1);
      width: 2.85rem;
      height: 3.67rem;
      margin-right: .2rem;
    }
    .index_intro li:hover{
      border-bottom: .08rem solid #3EDCFE;
    }
    .index_intro li img{
      width: 1rem;
      height: 1rem;
      margin-top: .2rem;
    }
    .intro_title{
      font-size: .3rem;
      height: .42rem;
      line-height: .42rem;
      margin-top: .32rem;
    }
    .intro_content{
      font-size: .16rem;
      line-height: .22rem;
      letter-spacing: .01rem;
    }
    .intro_line{
      height: .08rem;
      width: .6rem;
      border-radius: .04rem;
      margin: .3rem auto;
    }

    .middle_banner{
      width: 12.8rem;
      height: 3rem;
      margin-top: .6rem;
    }
    .middle_banner p{
      font-size: .4rem;
      height: .56rem;
      line-height: .56rem;
      padding-top: 1.22rem;
    }
    .middle_list{
      width: 12rem;
    }
    .middle_list li{
      width: 5.9rem;
      height: 1rem;
      margin: 0 .2rem .2rem 0;
    }
    .middle_list li p{
      font-size: .18rem;
      height: .18rem;
      line-height: .18rem;
    }

    .more_question{
      margin: .4rem auto .6rem;
      width: 1.44rem;
      height: .48rem;
      line-height: .48rem;
      font-size: .16rem;
      border-radius: .06rem;
    }
  }

  @media (max-width: 981px){
    .index_main{
      width: 12.8rem;
      height: 7.5rem;
      position: relative;
      overflow-x: hidden;
    }
    .banner_img {
      width: 28.8rem;
      height: 7.5rem;
      margin-left: calc((100vw - 28.8rem) / 2);
    }
    .banner_img img {
      height: 7.5rem;
      width: auto;
    }
    .fixedWidth {
      width: 12rem;
    }
    .banner_main{
      position: absolute;
      left: .5rem;
      top: 0;
      transform: translate(0,0);
      z-index: 999;
      text-align: left;
      color: #fff;
      margin-top: 1.8rem;
    }
    #banner_buttons{
      margin-top: .7rem;
    }
    #banner_slogan{
      line-height: 1rem;
      font-size: .7rem;
    }
    #banner_slogan_en{
      line-height: .37rem;
      font-size: .24rem;
      height: .74rem;
    }
    .bannerBtn {
      font-size: .45rem;
      width: 2.8rem;
      height: 1rem;
      line-height: 1rem;
      border-radius: .18rem;
    }
    #search_travel{
      border: .02rem solid #fff;
      margin-left: .2rem;
    }
    #begin_travel{
      border: .02rem solid #3EDCFE;
      background-color: #3EDCFE;
    }

    .index_why{
      font-size: .6rem;
      line-height: 1rem;
      margin: .63rem auto .44rem;
    }
    .index_intro {
      display: flex;
      flex-direction: column;
      border: .02rem solid rgba(227,227,227,1);
      border-radius: .1rem;
    }
    .index_intro li{
      display: flex;
      flex-wrap: wrap;
      border-radius: 0;
      border: none;
      border-bottom: .02rem solid rgba(227,227,227,1);
      width: 12rem;
      height: auto;
      margin-right: 0;
      padding: .4rem 0;
      text-align: left;
    }
    .index_intro li:last-child {
      border: none;
    }
    .index_intro li:hover{
      border-bottom: none;
    }
    .index_intro li img{
      width: 1.5rem;
      height: 1.5rem;
      margin: 0 .4rem;
    }
    .intro_title{
      font-size: .5rem;
      width: 9.7rem;
      height: 1.5rem;
      line-height: 1.5rem;
      margin-top: 0;
    }
    .intro_content{
      padding: 0 .4rem 0 2.3rem;
      font-size: .42rem;
      line-height: .6rem;
      letter-spacing: .02rem;
    }
    .intro_line{
      display: none;
    }

    .middle_banner{
      width: 12.8rem;
      height: 3rem;
      margin-top: .6rem;
    }
    .middle_banner p{
      font-size: .6rem;
      height: .7rem;
      line-height: .7rem;
      padding-top: 1rem;
    }
    .middle_list li{
      width: 12rem;
      height: 2rem;
      margin: 0;
      margin-bottom: .4rem;
    }
    .middle_list li p{
      font-size: .5rem;
      height: .5rem;
      line-height: .5rem;
    }

    .more_question{
      margin: .4rem auto .6rem;
      width: 4.5rem;
      height: 1.2rem;
      line-height: 1.2rem;
      font-size: .48rem;
      border-radius: .18rem;
    }
  }
</style>
