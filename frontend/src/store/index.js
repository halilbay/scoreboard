import Vue from "vue";
import Vuex from "vuex";
import { PlayerService } from '../services/players.service'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    players: [],
  },
  mutations: {
    SET_PLAYERS(state, data) {
      state.players = data
    },
  },
  actions: {
    async fetchPlayers({ commit }) {
      const result = await PlayerService.getListPublic()
      commit('SET_PLAYERS', result.data.content)
    },
  },
  modules: {},
});
