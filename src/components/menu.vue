<template>
    <div class='main_body'>
      <header class="index_header">
        <router-link to='/' class='nav-logo'><img src="../assets/logo_w_i.png"></router-link>
        <router-link to='/shopaddress'>{{$t("title.yewu")}}</router-link>
        <router-link to='/fee'>{{$t("title.yunfei")}}</router-link>
        <router-link to='/aboutus'>{{$t("title.aboutus")}}</router-link>
        <router-link to='/faq'>{{$t("title.faq")}}</router-link>
        <!-- <router-link to='/usercenter'>{{$t("title.usercenter")}}</router-link> -->
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

      <header class="index_header_phone">
        <router-link to='/' class='nav-logo'><img src="../assets/logo_.png"></router-link>
        <el-dropdown>
          <span class="el-dropdown-link-menu"><img src="../assets/menu.png"></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><router-link to='/fee'>{{$t("title.yunfei")}}</router-link></el-dropdown-item>
            <el-dropdown-item divided><router-link to='/shopaddress'>{{$t("title.yewu")}}</router-link></el-dropdown-item>
            <el-dropdown-item divided><router-link to='/aboutus'>{{$t("title.aboutus")}}</router-link></el-dropdown-item>
            <el-dropdown-item divided><router-link to='/faq'>{{$t("title.faq")}}</router-link></el-dropdown-item>
            <el-dropdown-item divided>
              <el-dropdown  @command="handleCommand" trigger="click">
                <span class="el-dropdown-link-language">{{language}}<i class="el-icon-arrow-down el-icon--right"></i></span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="en">English</el-dropdown-item>
                  <el-dropdown-item command='zh'>中文</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span v-if="$store.getters.userinfo.id" class="menuBtn_phone" @click="$router.push('/usercenter')"><img src="../assets/avatar-tmp.png">张明</span>
        <span v-else class="menuBtn_phone" @click="$store.dispatch('app/showLogin', true)">登录/注册</span>
      </header>
    </div>
</template>
<script>
export default{
  data(){
    return {
      language: 'English',
      activeIndex: ''
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
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style scoped>
  .main_body {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 999;
    overflow: hidden;
  }
  .index_header a{
    color: #fff;
  }
  .index_header .el-dropdown-link{
    color: #fff;
  }
  @media (max-width: 981px){
    .main_body {
      position: relative;
      height: 1.7rem;
    }
  }
</style>