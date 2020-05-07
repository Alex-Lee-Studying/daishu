<template>
    <div class='main_body'>
      <header class="index_header">
        <router-link to='/' class='nav-logo'><img src="../assets/logo_w_i.png"></router-link>
        <router-link to='/shopaddress'>{{$t("title.yewu")}}</router-link>
        <router-link to='/fee'>{{$t("title.yunfei")}}</router-link>
        <router-link to='/aboutus'>{{$t("title.aboutus")}}</router-link>
        <router-link to='/faq'>{{$t("title.faq")}}</router-link>
        <router-link to='/usercenter'>{{$t("title.usercenter")}}</router-link>
        <span id='login' @click='loginFormVisible=true'>{{$t("title.login")}}</span>
        <span id='register' @click="dialogFormVisible = true">{{$t("title.register")}}</span>
        <el-dropdown>
          <span class="el-dropdown-link">
          中文<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>English</el-dropdown-item>
          <el-dropdown-item>русский</el-dropdown-item>
          <el-dropdown-item>lingua italiana</el-dropdown-item>
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
            <el-form ref="registerForm" :model="register" :rules="registerRules" label-position="left">
              <el-form-item label="名" prop="first_name">
                <el-input v-model="register.first_name" autocomplete="off" placeholder='请输入名'></el-input>
              </el-form-item>
              <el-form-item label="姓" prop="last_name">
                <el-input v-model="register.last_name" autocomplete="off" placeholder='请输入姓'></el-input>
              </el-form-item>
              <el-form-item label="Mobile/Email" prop="id">
                <el-input v-model="register.id" autocomplete="off" placeholder='请输入Mobile/Email'></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pwd">
                <el-input v-model="register.pwd" autocomplete="off" placeholder='请输入密码'></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <div class="grid-content">
                  <el-button style="width: 100%" type="primary" class="sub-btn sub1" @click="doRegister">注册</el-button>
                </div>
            </div>
            <div @click="dialogFormVisible = false;loginFormVisible = true;" class="dialog-toggle">
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
            <el-form ref="loginForm" :model="login" :rules="loginRules" label-position="left">
              <el-form-item label="手机号/邮箱" prop="id">
                <el-input v-model="login.id" autocomplete="off" placeholder='请输入手机号或邮箱'></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pwd">
                <el-input v-model="login.pwd" autocomplete="off" placeholder='请输入密码'></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <div class="grid-content">
                  <el-button style="width: 100%" type="primary" class="sub-btn sub1" @click="doLogin">登录</el-button>
                </div>
            </div>
            <div @click="loginFormVisible = false;dialogFormVisible = true;" class="dialog-toggle">
              还没有账号？立即注册>>
            </div>
          </div>
        </el-dialog>
      </div>
    </div>
</template>
<script>
import { smsCode } from '../api/user'

export default{
  data(){
    const validateUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error('用户名不能为空！'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error('密码不能为空！'))
      } else {
        callback()
      }
    }
    return {
      dialogFormVisible: false,
      loginFormVisible: false,
      register: {
        first_name: '',
        last_name: '',
        nick_name: '',
        gender: 0,
        language: '',
        type: 'mobile', // 注册类型 mobile:手机 email:邮件
        id: '',
        pwd: '',
        code: '',
        key: ''
      },
      registerRules: {
        type: [{ required: true, trigger: 'blur' }],
        id: [{ required: true, trigger: 'blur', validator: validateUsername }],
        pwd: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      login:{
        provider: 'normal',
        id: '',
        pwd: ''
      },
      loginRules: {
        provider: [{ required: true, trigger: 'blur' }],
        id: [{ required: true, trigger: 'blur', validator: validateUsername }],
        pwd: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      formLabelWidth: '120px',
    }
  },
  mounted() {
  },
  methods: {
    doLogin() {
      if (this.loading) return
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.login).then(() => {
            this.loading = false
            this.loginFormVisible = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      }) 
    },
    doRegister() {
      if (this.loading) return
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/register', this.register).then(() => {
            this.loading = false
            this.dialogFormVisible = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      }) 
    },
    doSmsSend() {
      if (this.loading) return
      let mobile = this.register.id
      this.loading = true
      smsCode({ mobile: mobile }).then(response => {
        this.loading = false
        this.register.key = response.key
      }).catch(error => {
        this.loading = false
        console.log(error)
      })
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
  background-color: #B2B2B2;
  color:#fff;
}
.register_header{
  font-size: 28px;
  line-height: 28px;
  color: #333333;
  font-weight: Medium;
  text-align: left;
  margin-bottom: 28px;
}
.el-form-item{
  margin-bottom: 12px;
}
.main_body{
  position: relative;
}
.index_header{
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 1280px;
  margin-top:3rem;
  text-align: right;
  z-index: 999;
  overflow: hidden;
  /*background-image: url('./assets/banner_index.jpg')*/
}
.index_header a{
  margin-right: 6rem;
  font-size: 1.6rem;
  color: #fff;
  font-weight: 500;
  display: inline-block;
  height: 8rem;
}
.nav-logo{
  float: left;
}
.nav-logo img{
  width: 11.1rem;
  height: 4.3rem;
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
  color: #fff;
}
.sub1{
  cursor: pointer;
}
.dialog-toggle {
  cursor: pointer;
}
.dialog-footer {
  margin-top: 25px;
}
</style>