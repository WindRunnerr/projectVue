<template>
  <div class="login-container">
    <el-container>
      <el-header>
        <p>L o g i n</p>
      </el-header>
      <el-main>
        <el-form>
          <el-form-item prop="username" lable="用户名">
            <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="loginBtn" plain>登录</el-button>
          </el-form-item>
        </el-form>

      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      form: {
        username: '',
      },
    }
  },

  methods: {
    loginBtn() {
      sessionStorage.setItem('userName', this.form.username)
      this.$router.push(
        {
          name: 'main'
        }
      )
    },
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
