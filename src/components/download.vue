<template>
  <div class="main">
    <div class="navigation"><p>{{$t("menu.shouye")}}>{{$t("title.download")}}</p></div>
    <div class="downloadMain">
      <img src="../assets/banner_.png" class="banner">
      <div class="downloadCont">
        <h4>脚递</h4>
        <p class="title_">共享行李额，让每一次出行都毫无负担</p>
        <div class="btns">
          <p class="downloadBtn"><img src="../assets/iOS.png">App Atore<br/><span>下载</span></p>
          <p class="downloadBtn"><img src="../assets/android.png">Android<br/><span>下载</span></p>
        </div>
        <p class="desc">您可以在各大安卓应用市场 豌豆荚, 百度, 360, 腾讯, 小米 下载我们最新版本的手机App。环球旅行，玩转于指尖！</p>
        <p class="qrcode"><img src="../assets/wechat.jpg"><br/>微信扫码下载</p>
      </div>        
    </div>
  </div>
</template>
<style scoped>
.downloadMain {
  position: relative;
  overflow: hidden;
}
.banner {
  display: block;
  width: 1920px;
  height: 764px;
  margin-left: 50%;
  transform: translate(-50%, 0);
}
.downloadCont {
  position: absolute;
  top: 90px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 1200px;
  text-align: left;
}
.downloadCont h4 {
  font-size: 48px;
  line-height: 90px;
}
.downloadCont .title_ {
  font-size: 24px;
  line-height: 44px;
  margin-bottom: 60px;
}
.downloadCont .btns .downloadBtn {
  display: inline-block;
  width: 130px;
  height: 56px;
  padding-left: 60px;
  margin-right: 20px;
  position: relative;
  background-color: #3EDCFE;
  border-radius: 4px;
  font-size: 24px;
  padding-top: 4px;
  color: #fff;
}
.downloadCont .btns .downloadBtn img {
  position: absolute;
  height: 40px;
  top: 10px;
  left: 13px;
}
.downloadCont .btns .downloadBtn span {
  font-size: 14px;
}
.downloadCont .btns .downloadBtn:last-child {
  margin-right: 0;
}
.downloadCont .desc {
  margin: 20px 0;
  font-size: 16px;
  line-height: 30px;
}
.downloadCont .qrcode {
  display: inline-block;
  text-align: center;
  font-size: 18px;
  line-height: 25px;
  color: #1A1A1A;
}
.downloadCont .qrcode img {
  display: block;
  width: 140px;
  height: 140px;
}

@media (max-width: 1280px){
  .banner {
    display: block;
    width: 19.2rem;
    height: 7.64rem;
  }
  .downloadCont {
    top: .9rem;
    width: 12rem;
    padding-bottom: 1.4rem;
  }
  .downloadCont h4 {
    font-size: .48rem;
    line-height: 2em;
  }
  .downloadCont .title_ {
    font-size: .24rem;
    line-height: .44rem;
    margin-bottom: .6rem;
  }
  .downloadCont .btns .downloadBtn {
    width: 1.3rem;
    height: .56rem;
    padding-left: .6rem;
    margin-right: 20px;
    border-radius: .04rem;
    font-size: .24rem;
    padding-top: .04rem;
  }
  .downloadCont .btns .downloadBtn img {
    width: .4rem;
    height: .4rem;
    top: .1rem;
    left: .13rem;
  }
  .downloadCont .btns .downloadBtn span {
    font-size: .14rem;
  }
  .downloadCont .desc {
    margin: .2rem 0;
    font-size: .16rem;
    line-height: .3rem;
  }
  .downloadCont .qrcode {
    font-size: .18rem;
    line-height: .25rem;
  }
  .downloadCont .qrcode img {
    width: 1.4rem;
    height: 1.4rem;
  }
}
@media (max-width: 981px){
  .banner {
    display: block;
    width: 38.4rem;
    height: 15.28rem;
  }
  .downloadCont h4 {
    font-size: .8rem;
    line-height: 2em;
  }
  .downloadCont .title_ {
    font-size: .45rem;
    line-height: .7rem;
    margin-bottom: .5rem;
  }
  .downloadCont .btns .downloadBtn {
    width: 2.5rem;
    height: 1.2rem;
    margin-right: 20px;
    border-radius: .1rem;
    font-size: .45rem;
    padding: .1rem 0;
    padding-left: 1.2rem;
  }
  .downloadCont .btns .downloadBtn img {
    width: .7rem;
    height: .7rem;
    top: .3rem;
    left: .4rem;
  }
  .downloadCont .btns .downloadBtn span {
    font-size: .4rem;
  }
  .downloadCont .desc {
    margin: .5rem 0;
    font-size: .45rem;
    line-height: .7rem;
  }
  .downloadCont .qrcode {
    font-size: .45rem;
    line-height: .45rem;
  }
  .downloadCont .qrcode img {
    width: 3rem;
    height: 3rem;
  }
}
</style>