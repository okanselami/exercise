import EventService from '../utils/service';

const state = {
  eventDetail: { detail: [], loading: false },
  eventSessions: { sessions: [], loading: false },
};

/* eslint no-shadow: ["error", { "allow": ["state"] }] */
const getters = {
  getEventById: (state) => state.eventDetail,
  getEventSessions: (state) => state.eventSessions,
};

const actions = {
  getEventById({ commit }, params) {
    commit('setEventLoading');
    EventService.getEventById(params)
      .then((response) => commit('setEventById', response.data));
  },
  getEventsSessions({ commit }, params) {
    EventService.getEventsSessions(params)
      .then((response) => commit('setEventsSessions', response.data));
  },
};

const mutations = {
  setEventById(state, payload) {
    state.eventDetail.detail = payload;
    state.eventDetail.loading = false;
  },
  setEventsSessions(state, payload) {
    // Sort Sessions by Date
    state.eventSessions.sessions = payload.results
      .sort((a, b) => new Date(b.starts) - new Date(a.starts));
  },
  setEventLoading(state) {
    state.eventDetail.loading = true;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
