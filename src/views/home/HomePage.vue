<template>
  <div class="pagehome">
    pagehome---yemian
    <br />
    <br />
    <br />
    <div>

      <!-- {{this.$store.state.count}} -->
      <button @click="min">-</button><button @click="add">+</button>
    </div>
  </div>
</template>

<script>
  import {
    mapState,
    mapActions,
    mapGetters,
    mapMutations
  } from 'vuex';

  export default {
    // name: 'Home',

    data() {
      return {

      }
    },

    created() {
      console.log(this.$store);
    },

    computed: {
      // ...mapState('homePageStore', ['count'])
    },

    methods: {

      min() {
        console.log('---');
        // this.$Store.commit('handleMin')
      },

      add() {
        // console.log(111);
        // this.$store.commit('increment')
        // console.log(this.$store.state.count)
        this.$store.dispatch('HomePageStore/handleAdd')
      console.log(this.$store.state.HomePageStore.count);
     
     },

      // ...mapMutations('homePageStore', ['handleAdd'])


    }




  }

</script>


<style lang="less" scoped>
  .pagehome {
    width: 100%;
    height: 100%;
    background: #ffffff;
  }

</style>
