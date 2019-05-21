import Vue from 'vue';
import Vuex from 'vuex';
import gitInfo from '@/store/modules/gitInfo';

Vue.use(Vuex);

const modules = {
  gitInfo,
};

const createStore = () =>
  new Vuex.Store({
    modules,
  });

export default createStore;
