<template>
  <div class="login-container">
    <el-container>
      <el-header>
        <p>L o g i n</p>
      </el-header>
      <el-main>
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item prop="username" lable="用户名">
            <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
          </el-form-item>

          <el-form-item prop="password" lable="密码">
            <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="registerBtn('form')" plain>注册</el-button>
            <el-button type="primary" @click="loginBtn('form')" plain>登录</el-button>
          </el-form-item>

        </el-form>

      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },

      rules: {
        username:
          [
            { required: true, message: '用户名不能为空！', trigger: 'blur' },
            { min: 3, max: 8, message: '用户名为3-8位！' }
          ],
        password:
          [
            { required: true, message: '密码不能为空！', trigger: 'blur' },
            { min: 8, max: 16, message: '密码为8-16位！' }
          ]
      }

    }
  },

  methods: {
    loginBtn (formName) {
      console.log('submit!');
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(valid);
          sessionStorage.setItem('this.form.username', 'this.form.password')
          this.$router.push({ name: 'main', params: { name: this.form.username } })
        }
      })
    },
    registerBtn () {
      console.log('register!');
    }
  }
}
</script>

<style lang="less" scope>
body {
  background-image: url('../../assets/login_bg.jpg');
  .login-container {
    .el-container {
      margin-top: 10%;
    }
    .el-header {
      // background-color: #9dbfec;
      color: #333;
      text-align: center;
      line-height: 60px;
      p {
        margin: 0;
        font-size: 3rem;
        font-weight: 600;
        color: #eee;
      }
    }
    .el-main {
      // background-color: #b9d2eb;
      margin-top: 80px;
      color: #333;
      text-align: center;
      line-height: 160px;
      .el-form-item__content {
        margin-top: 20px;
        .el-button--primary:nth-child(1) {
          margin-right: 50px;
        }
      }
      .el-form-item__error {
        position: relative;
        top: -30px;
        left: 100px;
      }
    }
    .el-input {
      width: 300px;
    }
  }
}
</style>
