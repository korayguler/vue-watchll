import { createWebHistory, createRouter } from 'vue-router';
import Homepage from './components/Homepage.vue';
import NewMoviePage from './components/NewMoviePage.vue';
import NotFoundPage from './components/NotFoundPage.vue';
404;
const routes = [
  { path: '/', name: 'Home Page', component: Homepage },
  { path: '/new-movie', name: 'New Movie Page', component: NewMoviePage },
  { path: '/*', name: 'Not Found', component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
