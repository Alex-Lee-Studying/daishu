<template>
  <div class="main">
    <div class="main_center">
      <div class="navigation"><p>首页>搜索行程</p></div>
      <div class="sc_box">
        <div class="search_header">
          <span class="country_button" :class="{selected: seleted_tab == 'line'}" @click="choose('line')">出行信息</span>
          <span class="country_button" :class="{selected: seleted_tab == 'ask'}" @click="choose('ask')">求带信息</span>
        </div>
        <div class="search_area">
          <div class="s_city">
            <div><p class="s_title">地点</p></div>
            <div>
              <el-col :span="10">
                <el-input placeholder="出发地" clearable></el-input>
              </el-col>
              <el-col :span="3">
                <span class="flight"><img src="../assets/flight.png"></span>
              </el-col>
              <el-col :span="10">
                <el-input placeholder="目的地" clearable></el-input>
              </el-col>
            </div>
          </div>
          <div>
            <div><p class="s_title">时间</p></div>
            <div class="hideOnPhone">
              <el-col :span="10">
                <el-input placeholder="起飞时间" clearable></el-input>
              </el-col>
              <el-col :span="3">
                <span class="flight"><img src="../assets/flight.png"></span>
              </el-col>
              <el-col :span="10">
                <el-input placeholder="到达时间" clearable></el-input>
              </el-col>
              <el-col :span="1">
                <span class="search_button">搜索</span>
              </el-col>
            </div>

            <div class="showOnPhone">
              <el-col :span="10">
                <el-input placeholder="起飞时间" clearable></el-input>
              </el-col>
              <el-col :span="3">
                <span class="flight"><img src="../assets/flight.png"></span>
              </el-col>
              <el-col :span="10">
                <el-input placeholder="到达时间" clearable></el-input>
              </el-col>
            </div>
            <div class="showOnPhone">
              <span class="search_button" style="margin-top: 10px;margin-left: 0;">搜索</span>
            </div>

            <div class="quick_button">
              <span class="button p_selected">近三天</span>
              <span class="button">一周内</span>
              <span class="button">一月内</span>
            </div>
          </div>
        </div>
        <keep-alive>
          <component v-bind:is="currentTabComponent"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
import Line from './line'
import Ask from './ask'
export default {
  components:{
    Line,
    Ask,
  },
  data() {
    return {
      currentTabComponent: Line,
      seleted_tab: 'line'
    }
  },
  methods:{
    choose(type){
      if (type == 'line') {
        this.currentTabComponent = Line
        this.seleted_tab = 'line'
      } else {
        this.currentTabComponent = Ask
        this.seleted_tab = 'ask'
      }
    }
  }
 }
</script>
<style scoped>
.table_area{
  border:1px solid #DCDCDC;
  margin: 30px 20px 40px 0px;
}
.sc_box{
  background-color: #fff;
  padding: 30px 30px 0;
}
.search_header{
  margin-bottom: 20px;
}
.search_header .country_button{
  display: inline-block;
  width: 140px;
  height: 42px;
  border-radius:21px;
  font-size: 18px;
  line-height: 42px;
  background-color: #F7F7F7;
  margin-right: 56px;
  cursor: pointer;
}
.search_header .country_button:last-child {
  margin-right: 0;
}
.search_header .country_button.selected{
  background-color: #3EDCFE;
  color: #fff;
}
.search_area{
  display: flex;
  flex-wrap: wrap;
}
.search_area>div{
  margin-top: 10px;
}
/*.search_area .s_city{
  width: 480px;
}*/
.search_area .s_title{
  text-align: left;
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 7px;
}
.search_area .search_button{
  display: inline-block;
  width: 80px;
  height: 40px;
  background: rgba(62,220,254,1);
  border-radius: 6px;
  font-size: 14px;
  line-height: 40px;
  font-weight: 400;
  color: rgba(255,255,255,1);
  margin-left: 30px;
}
.quick_button{
  text-align: left;
}
.quick_button .button{
  display: inline-block;
  width: 80px;
  height: 36px;
  line-height: 36px;
  color: #999999;
  background: rgba(247,247,247,1);
  border-radius: 6px;
  margin: 20px 10px 30px 0px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}
.quick_button .button.p_selected{
  color: #3EDCFE;
  font-weight: 400;
  background-color: #D9FAFF;
}
.flight{
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.showOnPhone {
  display: none;
}
@media (max-width: 981px){
  .hideOnPhone {
    display: none;
  }
  .showOnPhone {
    display: block;
  }
  .search_header .country_button{
    display: inline-block;
    width: 4rem;
    height: 1.3rem;
    border-radius: 1.3rem;
    font-size: .55rem;
    line-height: 1.3rem;
    background-color: #F7F7F7;
    margin-right: 1rem;
    cursor: pointer;
  }
} 
</style>