<template>
  <div class="dialog_class">
    <el-dialog :visible="$store.getters.registerVisible" border :before-close="handleClose">
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
        <div @click="$store.dispatch('app/showRegister', false);$store.dispatch('app/showLogin', true);" class="dialog-toggle">
          已有账号？立即登录>>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import { smsCode } from '../api/user'

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
        isShowSendSms: false,
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
        }
      }
    },
    methods: {
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
              this.$store.dispatch('app/showRegister', false)
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
      },
      handleClose(done) {
        this.$store.dispatch('app/showRegister', false)
        done()
      }
    }
  }
</script>
<style scoped>
</style>
