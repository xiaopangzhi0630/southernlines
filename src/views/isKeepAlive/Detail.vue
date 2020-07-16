<template>
  <div class="keepDetail">
    <el-button type="primary" @click="goBack">返回</el-button>
    <br />
    <br />
    <br />
    详情
    <div>{{msg}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: ''
      }
    },

    created() {
      this.msg = this.$route.query.name
    },


    methods: {
      //返回上一层
      goBack() {
        this.$router.go(-1)
      }
    }
  }

</script>

<style lang="less" scoped>
  .keepDetail {
    height: 100%;
    background: #ffffff;
  }

</style>
