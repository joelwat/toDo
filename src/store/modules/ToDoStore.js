const stateObj = {
  items: [],
};

const getters = {
  items() {
    return stateObj.items;
  },
};

const actions = {
  addItem({ commit }, item) {
    commit('pushItem', item);
  },
};

const mutations = {
  pushItem(state, item) {
    state.items.push(item);
  },
};

export default {
  namespaced: true,
  state     : stateObj,
  getters,
  actions,
  mutations,
};
