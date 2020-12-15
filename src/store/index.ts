import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate"
import memories from "./modules/memories";

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    memories
  },
  plugins: [createPersistedState()]
});