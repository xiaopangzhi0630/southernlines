<template>
  <div class="isComponent">
    <!-- 父组件index -->
    <!-- <div>---------------</div> -->

    <component :is="curComponent" @to="handleTo" />


  </div>
</template>

<script>
  import About from './About';
  import FormCreate from './FormCreate';

  export default {
    data() {
      return {
        curComponent: 'About'
      }
    },

    components: {
      About,
      FormCreate
    },

    mounted() {
      console.log('初始化');
      console.log(this.$route.path);
    },

    watch: {
      $route: {
        handler: function (val, oldVal) {
          console.log(val);
        },
        // 深度观察监听
        deep: true
      }
    },

    methods: {
      handleTo(target) {
        console.log(target);
        // console.log( this[`handleTo${target}`](options));
        this.curComponent = `${target}`
      }
    }

  }

</script>

<style lang="less" scoped>
  .isComponent {
    height: 100%;
    background: #ffffff;
    overflow: auto;
  }

</style>
