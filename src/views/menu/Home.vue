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
        <i :class="isCollapse ? 'el-icon-s-unfold': 'el-icon-s-fold' "></i>
      </div>
      <img src="@/assets/images/logo.png" alt="图片加载失败" class="loginImg" @click="handleLogo" />
      <!-- <h2 style="width: 300px;  margin-left: 50px; display: inline-block;" @click="handleLogo">南航后台管理系统</h2> -->

      <div class="userMsg">
        <span>admin</span>
        <a @click="logout">退出!</a>
      </div>
    </div>

    <div class="container">
      <!-- 菜单栏 -->
      <div class="aside">
        <el-menu default-active="1-1" class="el-menu-vertical-demo" :unique-opened=true :router=true @open="handleOpen"
          @close="handleClose" :collapse="isCollapse" @select="handleSelect">
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
          </el-submenu>

          <el-menu-item @click="handleReset" index="isComponent">
            <i class="el-icon-setting"></i>
            <span slot="title">动态组件</span>
          </el-menu-item>


          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">缓存组件</span>
            </template>
            <el-menu-item index="isKeepAlive">列表页</el-menu-item>
          </el-submenu>

        </el-menu>

      </div>
      <!-- 内容区域 -->
      <div class="main">
        <!-- 缓存组件 -->
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>

        <router-view v-if="!$route.meta.keepAlive && isReset"></router-view>
        <!-- <router-view></router-view> -->

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
        isCollapse: false,
        isReset: true
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
        this.$router.push({
          path: '/login'
        })
      },

      handleLogo() {
         this.$router.push({
          path: '/'
        })
      },

      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        this.isReset = false
        this.$nextTick(function () {
          this.isReset = true; //再打开
        })

      },

      handleReset() {
        console.log(11111);
        // this.isReset = false
        // this.$nextTick(function () {
        //   this.isReset = true; //再打开
        // })
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

<style lang="less" scoped>
  .home {
    width: 100%;
    min-width: 600px;
    height: 100%;
  }

  // 头部
  .header {
    height: 60px;
    line-height: 60px;
    border-bottom: 2px solid #cccccc69;
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

  // 主体部分
  .container {
    height: calc(100vh - 60px);

    // box-sizing: border-box;
    // 菜单栏
    .aside {
      float: left;
      height: 100%;
      overflow: auto;
      // width: 200px;
      // background-color: rgba(0.5, 0.5, 0.5, 0.1);

    }

    // 内容区域
    .main {
      height: 100%;
      // margin-left: 200px;
      margin-left: 65px;
      overflow: hidden;
      padding: 20px;
      box-sizing: border-box;
      background-color: #cccccc47;
      //  background-color: #fff;
    }
  }

  // 显示与隐藏
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

</style>
