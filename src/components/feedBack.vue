<template>
  <div class="ua_box">
    <div class="ua_title"><h4>意见反馈</h4></div>
    <div class="ua_area">
      <!-- <el-col :span="10"> -->
        <el-form ref="feedbackForm" :model="feedback" :rules="feedbackRules" label-position="top">
          <el-form-item label="" prop="content">
            <el-input type="textarea" :rows="8" placeholder="请输入内容" v-model="feedback.content"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="doCreate">保存</el-button>
          </el-form-item>
        </el-form>
      <!-- </el-col> -->
    </div>
  </div>
</template>
<script>
  import { createAccusation } from '@/api/other'
  export default{
    data(){
      return {
        feedback: {
          content: ''
        },
        feedbackRules: {
          content: [{ required: true, trigger: 'blur', message: '请填写反馈内容！' }]
        }
      }
    },
    methods: {
      doCreate() {
        if (this.loading) return

        this.$refs.feedbackForm.validate(valid => {
          if (valid) {
            let params = {
              token: this.$store.getters.token,
              data: this.feedback
            }
            this.loading = true
            createAccusation(params).then(response => {
              console.log(response)
              this.$message({
                message: '意见提交成功！',
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