<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="header">
      <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="true">展开</el-radio-button>
        <el-radio-button :label="false">收起</el-radio-button>
      </el-radio-group> -->
      <div class="isCollapse" @click="isShowMenu">
        <i class="el-icon-s-operation"></i>
      </div>

      <img src="@/assets/images/logo.png" alt="图片加载失败" class="loginImg" />

      <div class="userMsg">
        <span>admin</span>
        <a @click="logout">退出!</a>
      </div>
    </div>

    <div class="container clearfix">
      <!-- 菜单栏 -->
      <div class="aside">
        <el-menu default-active="1-1" class="el-menu-vertical-demo" :unique-opened=true :router=true @open="handleOpen"
          @close="handleClose" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">首页</span>
            </template>
            <el-menu-item index="dashboard">仪表盘</el-menu-item>
            <el-menu-item index="homePage">首页详情</el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">订票管理</span>
            </template>
            <el-menu-item index="order">订单详情</el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">用户管理</span>
            </template>
            <el-menu-item index="userManger">用户权限</el-menu-item>
            <!-- <el-menu-item index="3-2">选项2</el-menu-item>
            <el-menu-item index="3-3">选项3</el-menu-item> -->
          </el-submenu>

        </el-menu>

      </div>
      <!-- 内容区域 -->
      <div class="main">
        <router-view></router-view>
      </div>

    </div>

  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    // name: 'Home',

    data() {
      return {
        isCollapse: false
      }
    },

    components: {
      // HelloWorld
    },

    mounted() {

    },

    methods: {
      // 退出登录
      logout() {
        console.log('tuichu');
      },

      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },

      // 菜单栏展开与收缩
      isShowMenu() {
        console.log(this.isCollapse);
        if (!this.isCollapse) {
          this.isCollapse = true
        } else {
          this.isCollapse = false
        }
      }

    }
  }

</script>

<style lang="less">
  .home {
    width: 100%;
    min-width: 600px;
    height: 100%;
  }

  // 头部
  .header {
    height: 60px;
    line-height: 60px;
    border-bottom: 2px solid #cccccc;
    box-sizing: border-box;

    .loginImg {
      height: 56px;
      line-height: 56px;
      cursor: pointer;
    }

    .userMsg {
      float: right;
      width: 200px;
      line-height: 60px;

      a {
        color: #999;
        margin-left: 30px;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }

  .container {
    height: calc(100vh - 60px);

    // box-sizing: border-box;
    .aside {
      float: left;
      height: 100%;
      // width: 200px;
      // background-color: rgba(0.5, 0.5, 0.5, 0.1);
     
    }

    .main {
      height: 100%;
      margin-left: 200px;
      padding: 20px;
      box-sizing: border-box;
      background-color: gainsboro;
      //  background-color: #7bbfea;
    }
  }

  .isCollapse {
    position: relative;
    width: 30px;
    height: 30px;
    float: left;
    // line-height: 60px;
    background: #fff;
    z-index: 100;
    border-radius: 50%;
    margin: 15px 0 0 15px;

    i {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .isCollapse:hover {
    cursor: pointer;
    background: #ccc;
  }


  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    height: 100%;
    // background-color: #7bbfea;
  }

  .el-menu--collapse {
    height: 100%;

  }

  .clearfix :after {
    content: '';
    height: 0;
    display: block;
    visibility: hidden;
    clear: both;
  }

  .clearfix {
    *zoom: 1
  }

  ;

</style>
