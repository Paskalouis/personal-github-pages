import Vue from 'vue';
import Vuex from 'vuex';
import repository from '@/store/modules/repository';

Vue.use(Vuex);

const modules = {
  repository,
};

const createStore = () =>
  new Vuex.Store({
    modules,
  });

export default createStore;
