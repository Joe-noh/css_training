import Vue from 'vue';
import {sync} from 'vuex-router-sync';

import App from './App.vue';
import store from './store';
import router from './router';

// registers store.state.route
sync(store, router);

const app = new Vue({
  router,
  store,
  ...App
});

export {app, router, store};
