import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import App from '../pages/App.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/app',
    name: 'App',
    component: App,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
