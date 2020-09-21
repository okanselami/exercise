import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/event/:id',
    name: 'Event',
    component: () => import('../views/Event.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
