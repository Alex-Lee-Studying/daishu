<template>
  <div class="main">
    <div class="main_center">
      <div class="navigation"><p>{{$t("menu.shouye")}}>{{$t("title.yewu")}}</p></div>
      <div class="yw_box">
        <table class="yw_ul">
          <tr class="yw_main">
            <td class="yw_logo"><img src="../assets/chinese.png"></td>
            <td class="yw_country">中国</td>
            <td class="yw_city">北京</td>
            <td class="yw_intro">
              <p>{{$t("yewu.dizhi")}}:朝阳区建华南路19号楼长安6号</p>
              <p>{{$t("yewu.dianhua")}}:18518501618</p>
              <p>{{$t("yewu.lianxiren")}}:池诗诗 </p>
              <p>{{$t("yewu.youbian")}}:100022</p>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr class="yw_main">
            <td class="yw_logo"><img src="../assets/russia.png"></td>
            <td class="yw_country">俄罗斯</td>
            <td class="yw_city">圣彼得堡</td>
            <td class="yw_intro">
              <p>{{$t("yewu.dizhi")}}:улица Фёдора Абрамова, дом 23, корпус 1, город Санкт-Петербург</p>
              <p>{{$t("yewu.dianhua")}}:+7(921)599-16-84</p>
              <p>{{$t("yewu.lianxiren")}}:максим хопин </p>
              <p>{{$t("yewu.youbian")}}:194358</p>
            </td>
            <td class="yw_city hideOnPhone-td">叶卡捷琳堡</td>
            <td class="yw_intro hideOnPhone-td">
              <p>{{$t("yewu.dizhi")}}:улица Большакова, 79 Екатеринбург</p>
              <p>{{$t("yewu.dianhua")}}:+7 (982) 662-77-89</p>
              <p>{{$t("yewu.lianxiren")}}:李哲凯 </p>
              <p>{{$t("yewu.youbian")}}:620 000</p>
            </td>
            <td class="showOnPhone-td"></td>
            <td class="showOnPhone-td"></td>
          </tr>
          <tr class="yw_main showOnPhone-tr">
            <td></td>
            <td></td>
            <td class="yw_city">叶卡捷琳堡</td>
            <td class="yw_intro">
              <p>{{$t("yewu.dizhi")}}:улица Большакова, 79 Екатеринбург</p>
              <p>{{$t("yewu.dianhua")}}:+7 (982) 662-77-89</p>
              <p>{{$t("yewu.lianxiren")}}:李哲凯 </p>
              <p>{{$t("yewu.youbian")}}:620 000</p>
            </td>
            <td class="showOnPhone-td"></td>
            <td class="showOnPhone-td"></td>
          </tr>
          <tr class="yw_main">
            <td class="yw_logo"><img src="../assets/usa.png"></td>
            <td class="yw_country">美国</td>
            <td class="yw_city">纽约</td>
            <td class="yw_intro">
              <p>{{$t("yewu.dizhi")}}:120 Meyer Road apartment 107, buffalo, New York, US</p>
              <p>{{$t("yewu.dianhua")}}:+1716-465-0550</p>
              <p>{{$t("yewu.lianxiren")}}:Koro</p>
              <p>{{$t("yewu.youbian")}}:14226</p>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr class="yw_main">
            <td class="yw_logo"><img src="../assets/malaixiya.png"></td>
            <td class="yw_country">马来西亚</td>
            <td class="yw_city">槟城</td>
            <td class="yw_intro" colspan="3">
              <p>{{$t("yewu.dizhi")}}:58, Lorong Rajawali 13, Taman Berjaya, 14300 nibong tebal, Pulau Pinang, Malaysia</p>
              <p>{{$t("yewu.dianhua")}}:+60 0125685715</p>
              <p>{{$t("yewu.lianxiren")}}:Lee peiying </p>
              <p>{{$t("yewu.youbian")}}:14300</p>
            </td>
          </tr>
          <tr class="yw_main">
            <td class="yw_logo"><img src="../assets/eng.png"></td>
            <td class="yw_country">英国</td>
            <td class="yw_city">伦敦</td>
            <td class="yw_intro">
              <p>{{$t("yewu.dizhi")}}:Gabor Hall (Central)Princes Gardens London United Kingdom</p>
              <p>{{$t("yewu.dianhua")}}:+44 7529938866</p>
              <p>{{$t("yewu.lianxiren")}}:Cosmos</p>
              <p>{{$t("yewu.youbian")}}:SW7 1AZ</p>
            </td>
            <td class="yw_city hideOnPhone-td">曼切斯顿</td>
            <td class="yw_intro hideOnPhone-td">
              <p>{{$t("yewu.dizhi")}}:Upper brook st,liberty park,f14.04</p>
              <p>{{$t("yewu.dianhua")}}:+44 7852427680</p>
              <p>{{$t("yewu.lianxiren")}}:David</p>
              <p>{{$t("yewu.youbian")}}:M13 0FZ</p>
            </td>
            <td class="showOnPhone-td"></td>
            <td class="showOnPhone-td"></td>
          </tr>
          <tr class="yw_main showOnPhone-tr">
            <td></td>
            <td></td>
            <td class="yw_city">曼切斯顿</td>
            <td class="yw_intro">
              <p>{{$t("yewu.dizhi")}}:Upper brook st,liberty park,f14.04</p>
              <p>{{$t("yewu.dianhua")}}:+44 7852427680</p>
              <p>{{$t("yewu.lianxiren")}}:David</p>
              <p>{{$t("yewu.youbian")}}:M13 0FZ</p>
            </td>
            <td class="showOnPhone-td"></td>
            <td class="showOnPhone-td"></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .yw_box{
    background-color: #fff;
  }
  .yw_ul{
    width: 100%;
  }
  .yw_main{
    width: 100%;
    text-align: left;
    font-size: 14px;
    line-height:26px;
    color: #888;
    font-weight:500;
    border-bottom: 1px solid #DCDCDC;
  }
  .yw_logo{
    width: 8%;
    text-align: center;
  }
  .yw_logo img{
    width: 50%;
  }
  .yw_country{
    width: 8%;
    font-size: 16px;
    color: #1A1A1A;
    text-align: center;
  }
  .yw_city{
    width: 10%;
    padding: 0 10px;
  }
  .yw_intro{
    padding: 15px 0;
  }
  .showOnPhone-tr {
    display: none;
  }
  .showOnPhone-td {
    display: none;
  }
  .hideOnPhone-td {
    display: table-cell;
  }

  @media (max-width: 981px){
    .showOnPhone-tr {
      display: table-row;
    }
    .showOnPhone-td {
      display: table-cell;
    }
    .hideOnPhone-td {
      display: none;
    }
    .yw_main{
      font-size: .4rem;
      line-height: .6rem;
    }
    .yw_logo{
      width: 12%;
    }
    .yw_country{
      width: 15%;
      font-size: .42rem;
    }
    .yw_city{
      width: 15%;
    }
  }
</style>