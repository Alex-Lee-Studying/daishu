<template>
    <div class='main_body'>
      <header class="index_header">
        <router-link to='/' class='nav-logo'><img src="../assets/logo.png"></router-link>
        <router-link to='/shopaddress' v-bind:class="{index_select_a: $route.path == '/shopaddress'}">{{$t("title.yewu")}}</router-link>
        <router-link to='/fee' v-bind:class="{index_select_a: $route.path == '/fee'}">{{$t("title.yunfei")}}</router-link>
        <router-link to='/aboutus' v-bind:class="{index_select_a: $route.path == '/aboutus'}">{{$t("title.aboutus")}}</router-link>
        <router-link to='/faq' v-bind:class="{index_select_a: $route.path == '/faq'}">{{$t("title.faq")}}</router-link>
        <router-link to='/usercenter/profile' v-bind:class="{index_select_a: $route.path.indexOf('usercenter') > -1 }">{{$t("title.usercenter")}}</router-link>
        <span class="menuBtn" id='login' @click="$store.dispatch('app/showLogin', true)">{{$t("title.login")}}</span>
        <span class="menuBtn" id='register' @click="$store.dispatch('app/showRegister', true)">{{$t("title.register")}}</span>
        <el-dropdown @command="handleCommand" trigger="click">
          <span class="el-dropdown-link">
          {{language}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="en">English</el-dropdown-item>
            <el-dropdown-item command='zh'>中文</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </header>

      <Login/>
      <Register/>
    </div>
</template>
<script>
import Login from './Login'
import Register from './Register'

export default{
  components: { Login, Register },
  data(){
    return {
      language: 'English'
    }
  },
  methods:{
    handleCommand(command) {
      switch(command){
        case 'zh':
          this.language = "中文"
          break
        case 'en':
          this.language = "English"
          break
      }
      this.$i18n.locale = command
    }
  }
}
</script>
<style scoped>
.main_body {
  position: relative;
}
.index_header{
  margin: 0 auto;
}
.index_header a{
  color: #1A1A1A;
}
.index_header a:hover{
  color: #3EDCFE;
}
.index_select_a{
  font-size: 16px;
  color: #3EDCFE !important;
  font-weight: 500;
  height: 76px !important;
  border-bottom: 4px solid #3EDCFE;
}
.el-dropdown-link{
  color: #1A1A1A;
}
@media (max-width: 1280px){
  .index_select_a{
    font-size: .16rem;
    height: .76rem !important;
    border-bottom: .04rem solid #3EDCFE;
  }
}
</style>