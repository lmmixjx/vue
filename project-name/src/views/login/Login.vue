<template>
  <el-form class="login-container" :model="LoginInfo" ref="LoginInfo" :rules="LoginRule">
    <el-form-item>
      <el-row >
        <el-col :span="12"><div style="height: 15px"/><img :src="img"  style=""/></el-col>
        <el-col :span="12" class="col"><h1 style="color: white;font-size:30px;">SQL管理平台</h1></el-col>
      </el-row>
    </el-form-item>
    <el-form-item prop="username">
      <el-input v-model="LoginInfo.username" style="text-transform: uppercase;"  type="text" placeholder="用户名称" clearable/>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="LoginInfo.password" type="password" placeholder="密码" clearable @keyup.enter.native="loginmethod"/>
    </el-form-item>
    <el-form-item style="text-align:center" >
      <el-button class="btn" type="primary" :loading="loding" @click="loginmethod">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      LoginInfo: {
        username: '',
        password: ''
      },
      LoginRule: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      loding: false,
      img: require('@/assets/foxhis.png')
    }
  },
  methods: {
    loginmethod () {
      this.$refs.LoginInfo.validate((valid) => {
        if (valid) {
          this.loding = true
          var data = {username: this.LoginInfo.username, password: this.LoginInfo.password}
          console.log(data)
          this.$axios.post('/empno/login', data).then(res => {
            var obj = JSON.parse(res.data)
            if (obj.success === true) {
              console.log('登录成功')
              this.loding = false
              sessionStorage.setItem('sqlmanageruser', JSON.stringify(obj.user))
              this.$message({
                type: 'success',
                showClose: true,
                message: obj.msg,
                duration: 1000
              })
              this.$store.commit('setTitle', 'SQL管理平台首页')
              this.$store.commit('setUsername', this.LoginInfo.username)
              this.$router.push({ path: '/AppkeyMain' })
            } else {
              this.loding = false
              this.$message({
                type: 'error',
                showClose: true,
                message: obj.msg
              })
            }
          })
        } else {
          this.$message({
            type: 'error',
            showClose: true,
            message: '请输入用户名和密码'
          })
        }
      })
    }
  }
}
</script>

<style>
  .logininput{
    /*background-color: rgba(255,255,255,0);*/
    /*margin-top: 104px;*/
    /*margin-left: 88px;*/
    /*margin-left: 17px;*/
    /*border: none;*/
    width: 100%;
    height: 44px;
    line-height: 45px;
    font-size: 16px;
    /*outline:none;*/
    text-transform:uppercase;
    /*background-color: #fdd;*/
  }
</style>

<style lang="scss" scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 20px;
    border-radius: 20px;
    -moz-border-radius: 20px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 478px;
    height: 304px;
    padding: 35px 35px 15px 35px;
    /*background: #fff;*/
    /*border: 1px solid #eaeaea;*/
    box-shadow: 0 0 25px #cac6c6;
    background-color: #fdd;
    /*background-image: url('~loginbg');*/
    /*background-attachment: fixed;*/
    background-position-x: center;
    background-position-y: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .col {
      vertical-align:middle;
      height: 100%;
    }
    .btn {
      margin-top: 20px;
      width: 60%;
      align-items: center;
      text-align:center;
    }
  }
</style>
