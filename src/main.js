import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

// ----------- Assets -----------

import './assets/css/fonts.css'
import './assets/css/colors.css'

// ------------------------------


const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        component: () => import('./components/HomePage.vue'),
      },
      {
        path: '/about-us',
        component: () => import('./components/AboutUs.vue'),
      },
      {
        path: '/contact-us',
        component: () => import('./components/ContactUs.vue'),
      },
    ],
  });

  const app = createApp(App);
  app.use(router);
  app.mount('#app');
// createApp(App).mount('#app')
