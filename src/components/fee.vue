<template>
  <div class="main">
    <div class="navigation"><p>{{$t("menu.shouye")}}>{{$t("title.yunfei")}}</p></div>
    <div class="main_center">
      <div class="banner">
        <img src="../assets/fee_banner.png">
        <div class='title'>{{$t("title.yunfei")}}</div>
      </div>
      <div class="c_b_area">
        <span class="country_button" :class="{selected: country== 'China'}">中国</span>
        <span class="country_button">俄罗斯</span>
      </div>
      <div class="calculation">
        <div class="uc_main ua_area">
          <el-form ref="feeForm" :model="feeForm" :rules="feeRules" label-position="top">
            <el-form-item label="物品类型" prop="things_kind">
              <el-select v-model="feeForm.things_kind" placeholder="请选择物品类型" allow-create filterable style="width: 100%">
                <el-option v-for="item in kinds" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="快递类型" prop="express_kind">
              <el-select v-model="feeForm.express_kind" placeholder="请选择快递类型" style="width: 100%">
                <el-option v-for="item in e_kinds" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="重量" prop="heavy">
              <el-input placeholder="请填写物品重量" v-model="feeForm.heavy" clearable></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="total">{{$t("yunfei.zongji")}}：<strong>12元</strong></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        country: 'China',
        feeForm: {
          things_kind: '',
          express_kind: '',
          heavy: ''
        },
        feeRules: {
        },
        kinds:[
          {'value': 1,'label':'文件'},
          {'value': 2,'label':'化妆品'},
          {'value': 3,'label':'衣物鞋子'},
          {'value': 4,'label':'电子产品'},
          {'value': 5,'label':'液体'},
          {'value': 6,'label':'其他(直接输入即可)'}],
        e_kinds:[{'value': 1,'label':'专人配送'},]
      }
    }
  }
</script>
<style scoped>
  .banner{
    position: relative;
    width: 100%;
    height: 15.6vw;
  }
  .banner img{
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, 0);
    width: 100vw;
    height: 15.6vw;
    display: block;
  }
  .banner .title{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 15.6vw;
    font-size: 30px;
    font-weight: 600;
    color: rgba(255,255,255,1);
    line-height: 15.6vw;
    text-align: center;
  }
  .c_b_area{
    background-color: #fff;
    padding: 30px 0 40px;
  }
  .country_button{
    display: inline-block;
    width: 140px;
    height: 42px;
    border-radius: 21px;
    font-size: 18px;
    line-height: 42px;
    background-color: #F7F7F7;
    margin-right: 50px;
    cursor: pointer;
  }
  .country_button:last-child {
    margin-right: 0;
  }
  .country_button.selected{
    background-color: #3EDCFE;
    color: #fff;
  }
  .calculation{
    background-color: #fff;
  }
  .uc_main {
    width: 37.5%;
    margin: 0 auto;
  }
  .total{
    width: 37.5%;
    margin: 0 auto;
    padding-bottom: 40px;
    text-align: right;
  }
  .total strong{
    color: #FF5A5E;
    font-size: 24px;
  }
  @media (max-width: 1280px){
    .banner .title {
      font-size: .3rem;
    }
    .country_button{
      width: 1.40rem;
      height: .42rem;
      border-radius: .21rem;
      font-size: .18rem;
      line-height: .42rem;
      margin-right: .50rem;
    }
    .uc_main {
      width: 50%;
    }
    .total{
      width: 50%;
    }
  }
  @media (max-width: 981px){
    .banner .title {
      font-size: .6rem;
    }
    .country_button{
      width: 2.8rem;
      height: .9rem;
      border-radius: .5rem;
      font-size: .45rem;
      line-height: .9rem;
      margin-right: 1rem;
    }
    .uc_main {
      width: 80%;
    }
    .total{
      width: 80%;
    }
  }
</style>