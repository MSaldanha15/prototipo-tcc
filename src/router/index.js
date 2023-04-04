import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/HomeView.vue";
import Config from "../views/Config.vue";

const routes = [
  { path: '/', component: Home },
  { path: '/config', component: Config },
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router;
