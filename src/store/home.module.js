import EventService from '../utils/service';

const state = {
  events: { results: [], loading: false },
};
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
const getters = {
  getEvents(state) {
    return state.events;
  },
};

const actions = {
  getEvents({ commit }) {
    commit('setEventsLoading');
    EventService.getAllEvents()
      .then((response) => commit('setAllEvents', response.data));
  },
};

const mutations = {
  setAllEvents(state, payload) {
    state.events.results = payload.results;
    state.events.loading = false;
  },
  setEventsLoading(state) {
    state.events.loading = true;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
