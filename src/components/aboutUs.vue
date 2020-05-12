<template>
  <div class="main">
    <div class="main_center">
      <div class="navigation"><p>{{$t("menu.shouye")}}>{{$t("title.aboutus")}}</p></div>
      <div class="intro_main">
        <div class="a_intro">
          <p>
            <strong>{{$t("title.aboutus")}}</strong><br/>
            {{$t("aboutus.jieshao1")}}<br/> {{$t("aboutus.jieshao2")}}<br/>{{$t("aboutus.jieshao3")}}
          </p>
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
          <div class="map_right">
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
    background-color: #fff;
    padding: 58px 60px 95px;
    position: relative;
  }
  .a_intro{
    text-align: left;
    font-size: 16px;
    line-height:30px;
    font-weight: 500;
    color: rgba(102,102,102,1);
    display: flex;
    justify-content: space-between;
  }
  .a_intro p{
    width: 565px;
  }
  .a_intro strong{
    display: inline-block;
    color: #1A1A1A;
    font-size: 24px;
    line-height: 33px;
    margin-bottom: 18px;
  }
  .a_intro img{
    width: 407px;
    height: 463px;
  }
  .specfic_main{
    width: 900px;
    height: 180px;
    margin-top: -72px;
    display: flex;
    background-color: rgba(255,255,255,1);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.13);
    border-radius: 6px;
    position: relative;
    z-index: 2;
  }
  .specfic{
    flex: 1;
  }
  .specfic img{
    width: 80px;
    height: 80px;
    margin: 30px auto 16px;
  }
  .specfic p{
    font-size: 16px;
    line-height: 22px;
  }
  .intro_map_box{
    margin-top: 60px;
    display: flex;
  }
  .intro_map_box .map img{
    display: block;
    width: 430px;
    height: 250px;
    border:1px solid #000;
  }
  .intro_map_box .map_right {    
    margin-left: 52px;
    font-size: 16px;
    line-height:35px;
    text-align: left;
    color: #999;
  }
  .intro_map_box .map_right p img{
    width: 50px;
    height: 50px;
    margin: 30px 20px 0 0;
  }
  .intro_map_box .map_right h4{
    font-size:24px;
    line-height:33px;
    font-weight:500;
    margin-bottom: 25px;
    color: #1A1A1A;
  }

  @media (max-width: 1280px){
    .intro_main{
      padding: .58rem .60rem .95rem;
    }
    .a_intro{
      font-size: .16rem;
      line-height:.30rem;
    }
    .a_intro p{
      width: 5.65rem;
    }
    .a_intro strong{
      font-size: .24rem;
      line-height: .33rem;
      margin-bottom: .18rem;
    }
    .a_intro img{
      width: 4.07rem;
      height: 4.63rem;
    }
    .specfic_main{
      width: 9.00rem;
      height: 1.80rem;
      margin-top: -.72rem;
      border-radius: .06rem;
    }
    .specfic img{
      width: .80rem;
      height: .80rem;
      margin: .30rem auto .16rem;
    }
    .specfic p{
      font-size: .16rem;
      line-height: .22rem;
    }
    .intro_map_box{
      margin-top: .60rem;
    }
    .intro_map_box .map img{
      width: 4.30rem;
      height: 2.50rem;
    }
    .intro_map_box .map_right {    
      margin-left: .52rem;
      font-size: .16rem;
      line-height:.35rem;
    }
    .intro_map_box .map_right p img{
      width: .50rem;
      height: .50rem;
      margin: .30rem .20rem 0 0;
    }
    .intro_map_box .map_right h4{
      font-size: .24rem;
      line-height: .33rem;
      margin-bottom: .25rem;
    }
  }

  @media (max-width: 981px){
    .intro_main{
      padding: .7rem .7rem;
    }
    .a_intro{
      font-size: .45rem;
      line-height:.8rem;
      flex-wrap: wrap-reverse;
    }
    .a_intro p{
      width: 10.6rem;
    }
    .a_intro strong{
      font-size: .6rem;
      line-height: .9rem;
      margin: .4rem 0;
    }
    .a_intro img{
      width: 10.6rem;
      height: 12.06rem;
    }
    .specfic_main{
      width: 10.6rem;
      height: 3rem;
      margin: .4rem 0;
      border-radius: .15rem;
    }
    .specfic img{
      width: 1.2rem;
      height: 1.2rem;
      margin: .5rem auto .2rem;
    }
    .specfic p{
      font-size: .36rem;
      line-height: .5rem;
    }
    .intro_map_box{
      margin-top: 1rem;
      flex-wrap: wrap;
    }
    .intro_map_box .map img{
      width: 10.6rem;
      height: 5.74rem;
    }
    .intro_map_box .map_right {    
      margin-left: 0;
      font-size: .45rem;
      line-height:.9rem;
    }
    .intro_map_box .map_right p img{
      width: 1rem;
      height: 1rem;
      margin: .7rem .5rem 0 0;
    }
    .intro_map_box .map_right h4{
      font-size: .6rem;
      line-height: .9rem;
      margin: .4rem 0;
    }
  }
</style>