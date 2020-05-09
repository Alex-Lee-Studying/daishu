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
          <h4>微信扫码关注</h4>
          <img src="../assets/wechat.jpg">
        </div>
        <div>
          <h4>微信扫码下载</h4>
          <img src="../assets/wechat.jpg">
        </div>
      </div>
      <div class="icp">粤ICP备15048723号-2 Copyright© 深圳市飘飘宝贝有限公司 2016-2019,版权所有</div>
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
</style>