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
            <p class="answer show_2line">我们有两种计费规则
1)  自行联系旅客给出帮带价格，建议不要低于我们平台建议价格。价格不统一，您可以根据物品价值以及时效性为
2)  通过脚递官方寄件，只需寄到脚递官方地址，会由我们官方委托出行旅客帮您带去物品，省去您的沟通时间，您只需等待我们专人派送人员到达您国家与他联系即可。运费计算可以通过我们网站得出。<router-link to='/fee' style="color:#3EDCFE">详情请点（跳转到运费计算页面）</router-link></p>
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
  .faq_title{
    font-size:24px;
    line-height:33px;
    font-weight:500;
    color:rgba(51,51,51,1);
    text-align: left;
    padding: 40px 0 0 40px;
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
    margin: 40px 0 0 40px;
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
</style>