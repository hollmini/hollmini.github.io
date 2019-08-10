import Vue from "vue";
import Vuex from "vuex";
import { fetchNewsList } from "../api/index.js";
import { fetchAskList } from "../api/index.js";
import { fetchJobsList } from "../api/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_ASK(state, ask) {
      state.ask = ask;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;

    }
  },
  actions: {
    FETCH_NEWS(context) {  
      fetchNewsList()
        .then(response => {
          // console.log(response.data);
          context.commit('SET_NEWS', response.data); // mutations에 제어권을 넘기는 명령어. 
        })
        .catch(error => {
          console.log(error);
        })
    },
    FETCH_ASK(context) {
      fetchAskList()
        .then(response => {
          // console.log(response.data);
          context.commit('SET_ASK', response.data);
        })
        .catch(error => {
          console.log(error);
        })
    },
    FETCH_JOBS(context) {
      fetchJobsList()
        .then(response => {
          // console.log(response.data);
          context.commit('SET_JOBS', response.data);
        })
        .catch(error => {
          console.log('error');
        })
    }
  }
})