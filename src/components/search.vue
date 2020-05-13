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
            <div class="searchItem">
              <p>
                <el-input placeholder="出发地" v-model="searchForm.departure" clearable></el-input>
              </p>
              <p>
                <span class="flight"><img src="../assets/flight.png"></span>
              </p>
              <p>
                <el-input placeholder="目的地" v-model="searchForm.destination" clearable></el-input>
              </p>
            </div>
          </div>
          <div>
            <div><p class="s_title">时间</p></div>
            <div class="searchItem hideOnPhone">
              <p>
                <el-date-picker v-model="searchForm.start_time" type="datetime" placeholder="起飞时间"></el-date-picker>
              </p>
              <p>
                <span class="flight"><img src="../assets/flight.png"></span>
              </p>
              <p>
                <el-date-picker v-model="searchForm.end_time" type="datetime" placeholder="到达时间"></el-date-picker>
              </p>
              <p>
                <span class="search_button">搜索</span>
              </p>
            </div>
            <div class="showOnPhone">
              <div class="searchItem">
                <p>
                  <el-date-picker v-model="searchForm.start_time" type="datetime" placeholder="起飞时间"></el-date-picker>
                </p>
                <p>
                  <span class="flight"><img src="../assets/flight.png"></span>
                </p>
                <p>
                  <el-date-picker v-model="searchForm.end_time" type="datetime" placeholder="到达时间"></el-date-picker>
                </p>
              </div>
              <p>
                <span class="search_button" style="margin-top: 10px;margin-left: 0;">搜索</span>
              </p>              
            </div>

            <div class="quick_button">
              <span class="button p_selected">近三天</span>
              <span class="button">一周内</span>
              <span class="button">一月内</span>
            </div>
          </div>
        </div>
        <keep-alive>
          <component v-bind:is="currentTabComponent" ref="currTable"></component>
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
      seleted_tab: 'line',
      searchForm: {
        departure: '',
        destination: '',
        start_time: '',
        end_time: ''
      }
    }
  },
  computed: {
    uid() {
      return this.$store.getters.userinfo.id
    }
  },
  mounted() {
    this.getTravels()
  },
  methods:{
    choose(type){
      if (type == 'line') {
        this.currentTabComponent = Line
        this.seleted_tab = 'line'
        this.getTravels()
      } else {
        this.currentTabComponent = Ask
        this.seleted_tab = 'ask'
        this.getDeliveries()
      }
    },
    getTravels() {
      if (this.loading) return
      if (!this.uid) {
        return
      }
      this.searchForm.user_id = this.uid
      let params = {
        page: this.$refs.currTable.page - 1,
        pageSize: this.$refs.currTable.pageSize,
        data: this.searchForm
      }
      this.loading = true
      this.$store.dispatch('travel/getTravels', params).then(response => {
        console.log(response)
        this.loading = false
      }).catch(error => {
        this.loading = false
        console.log(error)
      })

    },
    getDeliveries() {
      if (this.loading) return
      if (!this.uid) {
        return
      }
      this.searchForm.user_id = this.uid
      let params = {
        page: this.$refs.currTable.page - 1,
        pageSize: this.$refs.currTable.pageSize,
        data: this.searchForm
      }
      this.loading = true
      this.$store.dispatch('delivery/getDeliveries', params).then(response => {
        console.log(response)
        this.loading = false
      }).catch(error => {
        this.loading = false
        console.log(error)
      })
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
.search_area .s_city {
  flex: 3;
}
.search_area .s_city+div {
  flex: 4;
  margin-left: 10px;
}
.search_area>div{
  margin-top: 10px;
}
.searchItem {
  display: flex;
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
  margin-left: 20px;
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
  padding: 0 5px;
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
  .search_area {
    flex-direction: column;
  }
  .search_area .s_city {
    flex: 1;
  }
  .search_area .s_city+div {
    flex: 1;
    margin-left: 0;
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