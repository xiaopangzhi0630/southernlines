export default {
  namespaced: true,

  state: {
    count: 1
  },

  mutations: {

    handleAdd(state, payload) {
      console.log(111);
      return state.count += 1
    },

    handleMin(state, payload) {
      return state.count -= 1
    }

  },

  actions: {
    handleAdd(context, payload) {
      console.log(111);
      // return state.count += 1
    },
  }

}