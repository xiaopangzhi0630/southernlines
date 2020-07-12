<template>
  <div class="login">
    <div class="content">
      <el-form :label-position="labelPosition" label-width='80px' :model="formLabelAlign">

        <el-form-item label="账号">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>

      </el-form>

      <div class="btn">

        <el-button type="primary" size="small" @click="handleLogin">登录</el-button>
      </div>


    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      }
    },

    methods: {
      handleLogin() {
        this.$router.push({
          name: 'dashboard'
        })
      }
    }
  }

</script>

<style lang="less" scoped>
  .login {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    // background: url('../../assets/images/login_bg.jpg') no-repeat center;
    background: url('../../assets/images/login_bg.jpg') no-repeat;
    background-size: 100% 100%;
  }

  .content {
    width: 400px;
    height: 250px;
    // border: 1px solid #cccccc;
    border-radius: 6px;
    box-sizing: border-box;
    padding-top: 70px;
    background: #ffffff;

    .el-input {
      width: 80%;
    }
  }

  .btn {
    width: 400px;
    text-align: center;
    ;

  }

</style>
