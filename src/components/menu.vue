<template>
    <div class='main_body'>
      <header class="index_header">
        <router-link to='/' class='nav-logo'><img src="../assets/logo_w_i.png"></router-link>
        <router-link to='/shopaddress'>业务网点</router-link>
        <router-link to='/fee'>运费计算</router-link>
        <router-link to='/aboutus'>关于我们</router-link>
        <router-link to='/faq'>FAQ</router-link>
        <router-link to='/usercenter'>个人中心</router-link>
        <span id='login' @click='loginFormVisible=true'>登录</span>
        <span id='register' @click="dialogFormVisible = true">注册</span>
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
            <el-form :model="register" label-position="left">
              <el-form-item label="名">
                <el-input v-model="register.first_name" autocomplete="off" placeholder='请输入名'></el-input>
              </el-form-item>
              <el-form-item label="姓">
                <el-input v-model="register.last_name" autocomplete="off" placeholder='请输入姓'></el-input>
              </el-form-item>
              <el-form-item label="Mobile/Email">
                <el-input v-model="register.email" autocomplete="off" placeholder='请输入Mobile/Email'></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="register.pwd" autocomplete="off" placeholder='请输入密码'></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <div class="grid-content">
                  <el-button style="width: 100%" type="primary" class="sub-btn sub1" @click="doRegister">注册</el-button>
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
            <el-form :model="login" label-position="left">
              <el-form-item label="手机号/邮箱">
                <el-input v-model="login.name" autocomplete="off" placeholder='请输入手机号或邮箱'></el-input>
              </el-form-item>
              <el-form-item label="验证码">
                <el-input v-model="login.name" autocomplete="off" placeholder='请输入验证码'></el-input>
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
        register: {
            first_name: '',
            last_name: '',
            type: '',
            email: '',
            pwd: '',
        },
        login:{
          name: '',
        },
        formLabelWidth: '120px',
      }
    },
    methods: {
      doRegister(){
        let register_url = this.GLOBAL['baseUserUrl']+ 'users'
        let id = this.register.email
        console.log(register_url)
        let regiter_data = {
          "first_name": this.register.first_name,
          "last_name": this.register.last_name,
          "gender": 0,
          "language": "en",
          "type": "email",
          "id": id,
          "pwd": this.register.pwd,
          "code": "1234",
          "key": "lijl23rilj23lrij2l3jr"
        }
        this.axios.post(register_url, regiter_data).then((response) => {
            console.log(response)
        })
        // }
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
</style>