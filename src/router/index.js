import Vue from 'vue';
import Router from 'vue-router';
import Google from '@/components/login/Google';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Google',
      component: Google,
    },
  ],
});
