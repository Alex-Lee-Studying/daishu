<template>
    <div>
        <div class="dialog_class">
        <el-dialog width="570px" border :visible.sync="isOpen">
          <div class='header_form'>
            <div class="form_logo">
              <img src="../assets/logo_w.png">
            </div>
            <div class="register_header">
              注册ashibro
            </div>
            <el-form :model="form" label-position="left">
              <el-form-item label="名">
                <el-input v-model="form.first_name" autocomplete="off" placeholder='请输入名'></el-input>
              </el-form-item>
              <el-form-item label="姓">
                <el-input v-model="form.last_name" autocomplete="off" placeholder='请输入姓'></el-input>
              </el-form-item>
              <el-form-item label="Email">
                <el-input v-model="form.email" autocomplete="off" placeholder='请输入Email'></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="form.pwd" autocomplete="off" placeholder='请输入密码'></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <div class="grid-content">
                  <el-button type="primary" class="sub-btn sub1">注册</el-button>
                </div>
            </div>
            <div>
              已有账号？立即登录>>
            </div>
          </div>
        </el-dialog>
      </div>
    </div>
</template>
<script>
export default{
  props:[
    'isOpen'
  ],
	data(){
      return {
        registerShow: false,
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
}
</script>
<style scoped>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background-color: #3EDCFE;
  margin-bottom: 20px;
}
.register_header{
  font-size: 28px;
  color: #333333;
  font-weight: Medium;
  text-align: left;
  margin-bottom: 44px;
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
</style>