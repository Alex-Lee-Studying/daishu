<template>
  <div id="app">
    <template v-if="thisRouter === 'index'">
      <Menu></Menu>
    </template>
    <template v-else>
      <OMenu></OMenu>
    </template>
    <router-view></router-view>
    <div class="index_footer">
      <div class="footer_main">
        <div class="contract_us">
          <h4>{{$t("index.lxwm")}}</h4>
          <p>{{$t("index.dianhua")}}: 18518501618 <br/>{{$t("index.youxiang")}}: service@ashibro.com<br/>{{$t("index.dizhi")}} {{$t("index.dizhi_detail")}}</p>
        </div>
        <div class="contract_us_img">
          <img src="./assets/weibo.png">
          <img src="./assets/twitter.png">
          <img src="./assets/facebook.png">
        </div>
        <div class="contract_wx">
          <div>
            <h4>微信扫码关注</h4>
            <img src="./assets/wechat.jpg">
          </div>
          <div>
            <h4>微信扫码下载</h4>
            <img src="./assets/wechat.jpg">
          </div>
        </div>
        <div class="icp">粤ICP备15048723号-2 Copyright© 深圳市飘飘宝贝有限公司 2016-2019,版权所有</div>
      </div>
    </div>
  </div>
</template>
<script>
import Menu from './components/menu.vue'
import OMenu from './components/otherMenu.vue'
export default {
  name: 'App',
  components: {
    Menu,
    OMenu
  },
  computed:{
    thisRouter: function(){
      if (this.$route.path == '/') {
        return 'index'
      } else {
        return 'other'
      }
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.index_footer{
    padding-top: 40px;
    background-color: #033150;
    width: 100%;
    height: 225px;
    color: #999999;
  }
  .footer_main{
    margin: 0px auto;
    display: flex;
    width: 1200px;
    flex-wrap: wrap;
  }
  .contract_us{
    width: 260px;
    height: 140px;
    text-align: left;
    margin:0px 16px;
  }
  .contract_us p{
    line-height: 30px;
  }
  .contract_us_img{
    height:140px;
  }
  .contract_us_img img {
    width:50px;
    margin: 70px 10px 0px 10px;
  }
  .contract_wx{
    height: 140px;
    text-align: right;
    margin-left:339px;
    display: flex;
  }
  .contract_wx img{
    width: 88px;
    margin-top: 18px;
  }
  .contract_wx div{
    flex:1;
    height: 160px;
    margin-left: 70px;
    text-align: center;
  }
  .footer_main p{
    font-size:1.4rem;
    color:#999;
    width: 310px;
    text-align: left;
    margin-top: 16px;
  }
  .footer_main h4{
    color: #fff;
    font-size: 1.8rem;
    font-weight:600;
  }
  .icp{
    width: 1200px;
    border-top:2px solid #1E608F;
    line-height: 30px;
    font-size: 15px;
    height: 50px;
    padding-top: 9px;
    margin-top: 29px;
  }
</style>
