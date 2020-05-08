<template>
    <div class='main_body'>
      <header class="index_header">
        <router-link to='/' class='nav-logo'><img src="../assets/logo.png"></router-link>
        <router-link to='/shopaddress' v-bind:class="{index_select_a: $route.path == '/shopaddress'}">{{$t("title.yewu")}}</router-link>
        <router-link to='/fee' v-bind:class="{index_select_a: $route.path == '/fee'}">{{$t("title.yunfei")}}</router-link>
        <router-link to='/aboutus' v-bind:class="{index_select_a: $route.path == '/aboutus'}">{{$t("title.aboutus")}}</router-link>
        <router-link to='/faq' v-bind:class="{index_select_a: $route.path == '/faq'}">{{$t("title.faq")}}</router-link>
        <router-link to='/usercenter/profile' v-bind:class="{index_select_a: $route.path.indexOf('usercenter') > -1 }">{{$t("title.usercenter")}}</router-link>
        <span id='login' @click='loginFormVisible=true'>{{$t("title.login")}}</span>
        <span id='register' @click="dialogFormVisible = true">{{$t("title.register")}}</span>
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
      <div class="dialog_class">
        <el-dialog :visible.sync="dialogFormVisible" width="570px" border>
          <div class='header_form'>
            <div class="form_logo">
              <img src="../assets/logo_w.png">
            </div>
            <div class="register_header">
              注册ashibro
            </div>
            <el-form :model="form" label-position="left">
              <el-form-item label="名">
                <el-input v-model="form.name" autocomplete="off" placeholder='请输入名'></el-input>
              </el-form-item>
              <el-form-item label="姓">
                <el-input v-model="form.name" autocomplete="off" placeholder='请输入姓'></el-input>
              </el-form-item>
              <el-form-item label="Email">
                <el-input v-model="form.name" autocomplete="off" placeholder='请输入Email'></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="form.name" autocomplete="off" placeholder='请输入密码'></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <div class="grid-content">
                  <el-button style="width: 100%" type="primary" class="sub-btn sub1">注册</el-button>
                </div>
            </div>
            <div>
              已有账号？立即登录>>
            </div>
          </div>
        </el-dialog>
      </div>
      <div class="dialog_class">
        <el-dialog :visible.sync="loginFormVisible" width="570px" border>
          <div class='header_form'>
            <div class="form_logo">
              <img src="../assets/logo_w.png">
            </div>
            <div class="register_header">
              登录ashibro
            </div>
            <el-form :model="form" label-position="left">
              <el-form-item label="手机号/邮箱">
                <el-input v-model="form.name" autocomplete="off" placeholder='请输入手机号或邮箱'></el-input>
              </el-form-item>
              <el-form-item label="验证码">
                <el-input v-model="form.name" autocomplete="off" placeholder='请输入验证码'></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <div class="grid-content">
                  <el-button style="width: 100%" type="primary" class="sub-btn sub1">登录</el-button>
                </div>
            </div>
            <div>
              还没有账号？立即注册>>
            </div>
          </div>
        </el-dialog>
      </div>
    </div>
</template>
<script>
export default{
  data(){
    return {
      dialogFormVisible: false,
      loginFormVisible: false,
      language: 'English',
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
      },
      formLabelWidth: '120px',
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
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background-color: #3EDCFE;
  margin-bottom: 20px;
}
.header_form{
  padding:0 30px;
}
.form_logo{
  height: 82px;
  width: 82px;
  border:1px solid #B2B2B2;
  border-radius: 82px;
  line-height: 82px;
  margin:0px auto;
  background-color: #3EDCFE;
  color:#fff;
}
.form_logo img{
  width: 82px;
}
.register_header{
  font-size: 28px;
  color: #333333;
  font-weight: Medium;
  text-align: left;
  margin-bottom: 44px;
}
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
.sub1{
  cursor: pointer;
}
.dialog-footer{
  cursor: pointer;
}
</style>