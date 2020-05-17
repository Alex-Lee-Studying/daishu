<template>
  <div class="main">
    <div class="main_center">
      <div class="navigation"><p>{{$t("menu.shouye")}}>{{$t("title.faq")}}</p></div>
      <div class="faq_box">
        <div class="faq_title"><h4>{{$t("title.faq")}}</h4></div>
        <ul class="question_box">
          <li class="question_area">
            <div class="question_header"><img src="../assets/question.png"><h5 class="question">{{$t("faq.q_jdnzsm")}}</h5></div>
            <p class="answer show_2line">{{$t("faq.a_jdnzsm")}}</p>
            <p class="more"><span @click="showAll">{{$t("faq.zhankai")}}<i class="iconfont icon-shousuoxiajiantou"></i></span><span @click="showEllipsis">{{$t("faq.shouqi")}}<i class="iconfont icon-shousuoshangjiantou"></i></span></p>
          </li>
          <li class="question_area">
            <div class="question_header"><img src="../assets/question.png"><h5 class="question">{{$t("faq.q_fwbhgs")}}</h5></div>
            <p class="answer show_2line">{{$t("faq.a_fwbhgs")}}</p>
            <p class="more"><span @click="showAll">{{$t("faq.zhankai")}}<i class="iconfont icon-shousuoxiajiantou"></i></span><span @click="showEllipsis">{{$t("faq.shouqi")}}<i class="iconfont icon-shousuoshangjiantou"></i></span></p>
          </li>
          <li class="question_area">
            <div class="question_header"><img src="../assets/question.png"><h5 class="question">{{$t("faq.q_nxbn")}}</h5></div>
            <p class="answer show_2line">{{$t("faq.a_nxbn")}}</p>
            <p class="more"><span @click="showAll">{{$t("faq.zhankai")}}<i class="iconfont icon-shousuoxiajiantou"></i></span><span @click="showEllipsis">{{$t("faq.shouqi")}}<i class="iconfont icon-shousuoshangjiantou"></i></span></p>
          </li>
          <li class="question_area">
            <div class="question_header"><img src="../assets/question.png"><h5 class="question">{{$t("faq.q_yfjs")}}</h5></div>
            <p class="answer show_2line">{{$t("faq.a_yfjs")}}<router-link to='/fee' style="color:#3EDCFE">{{$t("faq.a_yfjs1")}}</router-link></p>
            <p class="more"><span @click="showAll">{{$t("faq.zhankai")}}>></span><span @click="showEllipsis">{{$t("faq.shouqi")}}<a></a></span></p>
          </li>
          <li class="question_area">
            <div class="question_header"><img src="../assets/question.png"><h5 class="question">{{$t("faq.q_dxjd")}}</h5></div>
            <p class="answer show_2line">{{$t("faq.a_dxjd")}}</p>
            <p class="more"><span @click="showAll">{{$t("faq.zhankai")}}<i class="iconfont icon-shousuoxiajiantou"></i></span><span @click="showEllipsis">{{$t("faq.shouqi")}}<i class="iconfont icon-shousuoshangjiantou"></i></span></p>
          </li>
          <li class="question_area">
            <div class="question_header"><img src="../assets/question.png"><h5 class="question">{{$t("faq.q_sxx")}}</h5></div>
            <p class="answer show_2line">{{$t("faq.a_sxx")}}</p>
            <p class="more"><span @click="showAll">{{$t("faq.zhankai")}}<i class="iconfont icon-shousuoxiajiantou"></i></span><span @click="showEllipsis">{{$t("faq.shouqi")}}<i class="iconfont icon-shousuoshangjiantou"></i></span></p>
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
  .faq_box{
    background-color: #fff;
  }
  .faq_title{
    font-size:24px;
    line-height:33px;
    font-weight:500;
    color:rgba(51,51,51,1);
    text-align: left;
    padding: 40px 0 0 40px;
  }
  .question_box{
    display: flex;
    flex-wrap: wrap;
  }
  .question_area{
    width: 320px;
    margin: 40px 0 0 40px;
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
    margin-top: 3px;
  }
  .question{
    font-size:18px;
    font-weight:500;
    color:#000;
    line-height: 28px;
    text-align: left;
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
  @media (max-width: 981px){
    .faq_title {
      padding: .5rem 0 0 .5rem;
    }
    .question_area {
      margin: .5rem 0 0 .5rem;
    }
    /*.answer {
      margin-left: 0;
    }*/
    /*.more {
      padding-left: 0;
    }*/
  }
</style>