import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/HomeView.vue";
import Config from "../views/Config.vue";
import Login from "../views/Login.vue"

const routes = [
  { path: '/', component: Login },
  { path: '/config', component: Config },
  {path: '/home', component: Home}
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router;
