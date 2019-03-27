import 'bootstrap'; // It installs the JS asset only
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/main.scss';
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.use(VueAxios, axios);
Vue.use(Loading);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
