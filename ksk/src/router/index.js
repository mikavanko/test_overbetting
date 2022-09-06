import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/table',
    component: HomeView,
    children: [
      {
        name: 'cards',
        path: '/cards',
        component: () => import(/* webpackChunkName: "cards" */ '../views/CardsView.vue'),
      },
      {
        name: 'table',
        path: '/table',
        component: () => import(/* webpackChunkName: "table" */ '../views/TableView.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
