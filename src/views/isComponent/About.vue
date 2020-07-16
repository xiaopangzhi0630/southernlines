<template>
  <div>

    <div class="about-main">
      <div class="about-main-title">
        Oracle
      </div>
      <div class="about-main-des">
        Oracle是甲骨文公司的一款关系数据库管理系统。它是在数据库领域一直处于领先地位的产品。
        是目前世界上流行的关系数据库管理系统。它是一种高效率、可靠性好的、适应高吞吐量的数据库方案。
        提供开箱可用的oracle资源作为数据库基础资源供使用。
      </div>
      <button class="about-main-btn" @click="handleToForm">
        创建服务（{{typeText}}资源）
      </button>
      <div class="about-main-cover" />
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        typeText: ''
      }
    },

    methods: {
      handleToForm() {
        this.$emit('to', "FormCreate")
      }
    }

  }

</script>

<style lang="less" scoped>
  .about-main {
    position: relative;
    width: 896px;
    height: 291px;
    padding: 40px;
    background: url('../../assets/bg.png') no-repeat;
    background-size: contain;
  }

  .about-main-title {
    font-size: 26px;
    margin-bottom: 20px;
    font-weight: bold;
  }

  .about-main-des {
    max-width: 600px;
    word-break: break-all;
    color: #666;
  }

  .about-main-btn {
    // position: absolute;
    // bottom: 39px;
    // width: 176px;
    // height: 42px;
    // font-size: 13px;
    // border: none;
    // background-color: rgb(4, 70, 131);
    // color: #fff;
    position: absolute;
    bottom: 96px;
    width: 198px;
    height: 48px;
    font-size: 15px;
    border: none;
    background-color: #044683;
    color: #fff;
    cursor: pointer;
  }

  .about-main-cover {
    // position: absolute;
    // left: 229px;
    // bottom: 39px;
    // width: 177px;
    // height: 42px;
    // background-color: rgba(240, 242, 250, 1);
    position: absolute;
    left: 244px;
    bottom: 97px;
    width: 214px;
    height: 46px;
    background-color: #f0f2fa;
  }

</style>
