<template>
    <div class='main_body'>
      <header class="index_header">
        <router-link to='/' class='nav-logo'><img src="../assets/logo_w_i.png"></router-link>
        <router-link to='/shopaddress'>{{$t("title.yewu")}}</router-link>
        <router-link to='/fee'>{{$t("title.yunfei")}}</router-link>
        <router-link to='/aboutus'>{{$t("title.aboutus")}}</router-link>
        <router-link to='/faq'>{{$t("title.faq")}}</router-link>
        <router-link to='/usercenter'>{{$t("title.usercenter")}}</router-link>
        <span class="menuBtn" id='login' @click="$store.dispatch('app/showLogin', true)">{{$t("title.login")}}</span>
        <span class="menuBtn" id='register' @click="$store.dispatch('app/showRegister', true)">{{$t("title.register")}}</span>
        <el-dropdown  @command="handleCommand" trigger="click">
          <span class="el-dropdown-link">
          {{language}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="en">English</el-dropdown-item>
            <el-dropdown-item command='zh'>中文</el-dropdown-item>
          <!-- <el-dropdown-item>русский</el-dropdown-item>
          <el-dropdown-item>lingua italiana</el-dropdown-item> -->
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
  mounted() {
  },
  methods: {
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
}
.index_header{
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 12rem;
  margin-top:.3rem;
  text-align: right;
  z-index: 999;
  overflow: hidden;
  /*background-image: url('./assets/banner_index.jpg')*/
}
.index_header a{
  margin-right: .5rem;
  font-size: .16rem;
  color: #fff;
  font-weight: 500;
  display: inline-block;
  line-height: .22rem;
}
.nav-logo{
  float: left;
}
.nav-logo img{
  width: 1.1rem;
}
.menuBtn {
  display: inline-block;
  border-radius: .06rem;
  text-align: center;
  width: .8rem;
  height: .36rem;
  line-height: .36rem;
  font-size: .16rem;
  cursor: pointer;
  margin-right: .3rem;
}
#login{
  background-color:#fff;
  color: #3EDCFE;
  border: .01rem solid #3EDCFE;
}
#register{
  background-color: #3EDCFE;
  color: #fff;
  border: .01rem solid #3EDCFE;
}
.el-dropdown-link{
  cursor: pointer;
  color: #fff;
}
</style>