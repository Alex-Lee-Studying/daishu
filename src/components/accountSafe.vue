<template>
  <div class="ua_box">
    <div class="ua_title"><h4>修改密码</h4></div>
    <div class="ua_area">
      <el-col :span="10">
        <el-form ref="userForm" :model="user" :rules="userRules" label-position="top">
          <el-form-item label="旧密码" prop="old_pwd">
            <el-input placeholder="请输入旧密码" v-model="user.old_pwd" clearable show-password></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="new_pwd">
            <el-input placeholder="请输入新密码" v-model="user.new_pwd" clearable show-password></el-input>
          </el-form-item>
          <el-form-item label="重复新密码" prop="check_pwd">
            <el-input placeholder="请重新填写新密码" v-model="user.check_pwd" clearable show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="doUpdate">保存</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </div>
  </div>
</template>
<script>
  import { updatePwd } from '@/api/user'
  export default{
    data(){
      const validateOldPwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入旧密码'))
        } else {
          if (this.user.new_pwd !== '') {
            this.$refs.userForm.validateField('new_pwd')
          }
          callback()
        }
      }
      const validateNewPwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'))
        } else if (value === this.user.old_pwd) {
          callback(new Error('新密码不可与旧密码相同!'))
        } else {
          if (this.user.check_pwd !== '') {
            this.$refs.userForm.validateField('check_pwd')
          }
          callback()
        }
      }
      const validateCheckPwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入新密码'))
        } else if (value !== this.user.new_pwd) {
          callback(new Error('两次新密码输入不一致!'))
        } else {
          callback()
        }
      }
      return {
        user:{
          old_pwd: '',
          new_pwd: '',
          check_pwd: ''
        },
        userRules: {
          old_pwd: [{ required: true, trigger: 'blur', validator: validateOldPwd  }],
          new_pwd: [{ required: true, trigger: 'blur', validator: validateNewPwd }],
          check_pwd: [{ required: true, trigger: 'blur', validator: validateCheckPwd }]
        }
      }
    },
    computed: {
      uid() {
        return this.$store.getters.userinfo.id
      }
    },
    methods: {
      doUpdate() {
        if (this.loading) return
        if (!this.uid) {
          return
        }
        this.$refs.userForm.validate(valid => {
          if (valid) {
            let params = {
              id: this.uid,
              token: this.$store.getters.token,
              data: this.user
            }
            this.loading = true
            updatePwd(params).then(response => {
              console.log(response)
              this.$message({
                message: '密码修改成功！',
                type: 'success'
              })
              this.loading = false
            }).catch(error => {
              this.loading = false
              console.log(error)
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>
<style>
</style>