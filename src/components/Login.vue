<template>
  <div class="dialog_class">
    <el-dialog :visible="$store.getters.loginVisible" width="570px" border :before-close="handleClose">
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
        <div @click="$store.dispatch('app/showLogin', false);$store.dispatch('app/showRegister', true)" class="dialog-toggle">
          还没有账号？立即注册>>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
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
        login:{
          provider: 'normal',
          id: '',
          pwd: ''
        },
        loginRules: {
          provider: [{ required: true, trigger: 'blur' }],
          id: [{ required: true, trigger: 'blur', validator: validateUsername }],
          pwd: [{ required: true, trigger: 'blur', validator: validatePassword }]
        }
      }
    },
    methods: {
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
              this.$store.dispatch('app/showLogin', false)
            }).catch(() => {
              this.loading = false
            })
          } else {
            console.log('error submit!!')
            return false
          }
        }) 
      },
      handleClose(done) {
        this.$store.dispatch('app/showLogin', false)
        done()
      }
    }
  }
</script>
<style scoped>
</style>
