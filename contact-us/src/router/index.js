// contact-us/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ContactUs from '../views/ContactUs.vue';

const routes = [
  {
    path: '/',
    name: 'ContactUs',
    component: ContactUs,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
