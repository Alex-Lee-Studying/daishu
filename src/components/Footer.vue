<template>
  <div class="index_footer">
    <div class="footer_main">
      <div class="contract_us">
        <h4>{{$t("index.lxwm")}}</h4>
        <p>{{$t("index.dianhua")}}: 18518501618 <br/>{{$t("index.youxiang")}}: service@ashibro.com<br/>{{$t("index.dizhi")}}: {{$t("index.dizhi_detail")}}</p>
      </div>
      <div class="contract_us_img">
        <img src="../assets/weibo.png">
        <img src="../assets/twitter.png">
        <img src="../assets/facebook.png">
      </div>
      <div class="contract_wx">
        <div>
          <h4>微信客服</h4>
          <img src="../assets/wechat.jpg">
        </div>
        <div>
          <h4>小程序</h4>
          <img src="../assets/qrcode.jpg">
        </div>
      </div>
      <div class="icp">津ICP备20000799号-1 Copyright© 天津脚递科技有限公司 2020-2023,版权所有</div>
    </div>
  </div>
</template>
<style scoped>
  .index_footer{
    padding-top: .3rem;
    background-color: #033150;
    width: 100%;
    color: #999999;
  }
  .footer_main{
    margin: 0px auto;
    display: flex;
    width: 12rem;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
  }
  .footer_main h4{
    color: #fff;
    font-size: .18rem;
    line-height: .25rem;
    font-weight: 600;
  }
  .contract_us{
    text-align: left;
  }
  .contract_us p{
    font-size: .14rem;
    line-height: .3rem;
    color:#999;
    text-align: left;
    margin-top: .1rem;
  }
  .contract_us_img img {
    width: .5rem;
    margin-left: .2rem;
  }
  .contract_wx{
    text-align: right;
    display: flex;
  }
  .contract_wx img{
    width: .88rem;
    margin-top: .16rem;
  }
  .contract_wx>div{
    flex:1;
    margin-right: .7rem;
    text-align: center;
  }
  .contract_wx>div:last-child {
    margin-right: 0;
  }
  .icp{
    width: 100%;
    border-top: .02rem solid #1E608F;
    line-height: .3rem;
    font-size: .12rem;
    padding: .1rem 0;
    margin-top: .3rem;
  }

  @media (max-width: 981px){
    .footer_main h4{
      font-size: .5rem;
      line-height: .8rem;
    }
    .contract_us p{
      font-size: .4rem;
      line-height: .7rem;
      margin-top: .3;
    }
    .contract_us_img {
      margin: .4rem 0;
    }
    .contract_us_img img {
      width: 1.2rem;
      margin-left: .4rem;
    }
    .contract_wx {
      width: 100%;
    }
    .contract_wx img{
      width: 2.5rem;
      margin-top: .4rem;
    }
    .contract_wx>div {
      flex: none;
    }
    .icp{
      border-top: 2px solid #1E608F;
      line-height: .8rem;
      font-size: .4rem;
      padding: .3rem 0;
      margin-top: .5rem;
    }
  }
</style>