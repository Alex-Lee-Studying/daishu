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
      <div class="dialog_class">
        <el-dialog :visible.sync="dialogFormVisible" width="570px" border>
          <div class='header_form'>
            <div class="form_logo">
              <img src="../assets/logo_w.png">
            </div>
            <div class="register_header">
              注册ashibro
            </div>
            <el-form ref="registerForm" :model="register" :rules="registerRules" label-position="top">
              <el-form-item label="名字" prop="first_name">
                <el-input v-model="register.first_name" autocomplete="off" placeholder='请输入名字'></el-input>
              </el-form-item>
              <el-form-item label="姓氏" prop="last_name">
                <el-input v-model="register.last_name" autocomplete="off" placeholder='请输入姓氏'></el-input>
              </el-form-item>
              <el-form-item label="昵称" prop="nick_name">
                <el-input v-model="register.nick_name" autocomplete="off" placeholder='请输入昵称'></el-input>
              </el-form-item>
              <el-form-item label="性别" prop="gender">
                <el-radio-group v-model="register.gender">
                  <el-radio :label="0">未知</el-radio>
                  <el-radio :label="1">男</el-radio>
                  <el-radio :label="2">女</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="Mobile/Email" prop="id">
                <el-input v-model="register.id" autocomplete="off" placeholder='请输入Mobile/Email'></el-input>
              </el-form-item>
              <el-form-item label="验证码" prop="code" v-if="isShowSendSms">
                <el-col :span="16">
                  <el-input v-model="register.code" autocomplete="off" placeholder='请输入验证码'></el-input>
                </el-col>
                <el-col :span="7" :offset="1">
                  <el-button @click="doSmsSend" style="width: 100%;">发送验证码</el-button>
                </el-col>
              </el-form-item>
              <el-form-item label="密码" prop="pwd">
                <el-input type="password" v-model="register.pwd" autocomplete="off" placeholder='请输入密码'></el-input>
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
            <el-form ref="loginForm" :model="login" :rules="loginRules" label-position="top">
              <el-form-item label="手机号/邮箱" prop="id">
                <el-input v-model="login.id" autocomplete="off" placeholder='请输入手机号或邮箱'></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pwd">
                <el-input type="password" v-model="login.pwd" autocomplete="off" placeholder='请输入密码'></el-input>
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
      // var emailReg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/
      var mobileReg = /^1[0-9]{10}$/
      if (!value) {
        callback(new Error('用户名不能为空！'))
      // } else if (emailReg.test(value)) {
      //   callback()
      } else if (mobileReg.test(value)) {
        this.isShowSendSms = true
        callback()
      } else {
        callback(new Error('手机号或邮箱格式错误！'))
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
      loading: false,
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
      isShowSendSms: false,
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
    },
    doLogin() {
      if (this.loading) return
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          let params = {
            data: this.login
          }
          this.loading = true
          this.$store.dispatch('user/login', params).then(() => {
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
          let params = {
            data: this.register
          }
          this.loading = true
          this.$store.dispatch('user/register', params).then(() => {
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
  text-align: center;
}
.dialog-footer {
  margin-top: 25px;
}
</style>