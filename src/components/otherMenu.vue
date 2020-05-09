<template>
    <div class='main_body'>
      <header class="index_header">
        <router-link to='/' class='nav-logo'><img src="../assets/logo.png"></router-link>
        <router-link to='/shopaddress' v-bind:class="{index_select_a: $route.path == '/shopaddress'}">{{$t("title.yewu")}}</router-link>
        <router-link to='/fee' v-bind:class="{index_select_a: $route.path == '/fee'}">{{$t("title.yunfei")}}</router-link>
        <router-link to='/aboutus' v-bind:class="{index_select_a: $route.path == '/aboutus'}">{{$t("title.aboutus")}}</router-link>
        <router-link to='/faq' v-bind:class="{index_select_a: $route.path == '/faq'}">{{$t("title.faq")}}</router-link>
        <router-link to='/usercenter/profile' v-bind:class="{index_select_a: $route.path.indexOf('usercenter') > -1 }">{{$t("title.usercenter")}}</router-link>
        <span id='login' @click="$store.dispatch('app/showLogin', true)">{{$t("title.login")}}</span>
        <span id='register' @click="$store.dispatch('app/showRegister', true)">{{$t("title.register")}}</span>
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
.main_body{
  position: relative;
  height: 80px;
}
.index_header{
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 1200px;
  text-align: right;
  z-index: 999;
  overflow: hidden;
  height: 8rem;
  line-height: 8rem;
  /*background-image: url('./assets/banner_index.jpg')*/
}
.index_header a{
  margin-right: 6rem;
  font-size: 1.6rem;
  color: #1A1A1A;
  font-weight: 500;
  display: inline-block;
  height: 8rem;
}
.index_header a:hover{
  color: #3EDCFE;
}
.index_select_a{
  margin-right: 6rem;
  font-size: 1.6rem;
  color: #3EDCFE !important;
  font-weight: 500;
  display: inline-block;
  height: 7.7rem !important;
  border-bottom: .3rem solid #3EDCFE;
}
.nav-logo{
  float: left;
}
.nav-logo img{
  height: 4.4rem;
  vertical-align: middle;
}
#login{
  display: inline-block;
  border-radius: 0.5rem;
  line-height: 3.6rem;
  text-align: center;
  height: 3.6rem;
  width: 8rem;
  background-color:#fff;
  color: #3EDCFE;
  font-size: 1.6rem;
  border:1px solid #3EDCFE;
  cursor: pointer;
}
#register{
  margin-left: 3rem;
  display: inline-block;
  border-radius: 0.5rem;
  line-height: 3.6rem;
  width: 8rem;
  text-align: center;
  height: 3.6rem;
  color: #fff;
  font-size: 1.6rem;
  background-color: #3EDCFE;
  border:1px solid #3EDCFE;
  cursor: pointer;
  margin-right: 3rem;
}
.el-dropdown-link{
  cursor: pointer;
}
</style>