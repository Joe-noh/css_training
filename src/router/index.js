import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import FirstView from '../views/FirstView.vue';

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {path: '/', component: FirstView}
  ]
});
