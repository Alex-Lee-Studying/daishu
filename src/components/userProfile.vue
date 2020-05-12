<template>
  <div class="ua_box">
    <div class="ua_title"><h4>{{$t("usercenter.xinxi")}}</h4></div>
    <div class="ua_area">
      <div class="ua_form">
        <el-form ref="userForm" :model="user" :rules="userRules" label-position="top">
          <el-form-item label="名字" prop="first_name">
            <el-input placeholder="请输入名字" v-model="user.first_name" clearable></el-input>
          </el-form-item>
          <el-form-item label="姓氏" prop="last_name">
            <el-input placeholder="请输入姓氏" v-model="user.last_name" clearable></el-input>
          </el-form-item>
          <el-form-item label="昵称" prop="nick_name">
            <el-input placeholder="请输入昵称" v-model="user.nick_name" clearable></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="gender">
            <el-radio-group v-model="user.gender">
              <el-radio :label="0">未知</el-radio>
              <el-radio :label="1">男</el-radio>
              <el-radio :label="2">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="语言" prop="language">
            <el-input placeholder="请输入语言" v-model="user.language" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="doUpdate">{{$t("button.baocun")}}</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>

  export default{
    data(){
      return {
        loading: false,
        user:{
          first_name: '',
          last_name: '',
          nick_name: '',
          gender: 0,
          language: 'en'
        },
        userRules: {
          first_name: [{ trigger: 'blur' }],
          last_name: [{ trigger: 'blur' }],
          nick_name: [{ trigger: 'blur' }],
          language: [{ trigger: 'blur' }]
        }
      }
    },
    computed: {
      uid() {
        return this.$store.getters.userinfo.id
      }
    },
    mounted() {
      this.getInfo()
    },
    methods: {
      getInfo() {
        if (this.loading) return
        if (!this.uid) {
          return
        }
        this.loading = true
        this.$store.dispatch('user/getInfo', { id: this.uid }).then(response => {
          console.log(response)
          this.loading = false
        }).catch(error => {
          this.loading = false
          console.log(error)
        })
      },
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
            this.$store.dispatch('user/updateInfo', params).then(response => {
              console.log(response)
              this.$message({
                message: '个人信息修改成功！',
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