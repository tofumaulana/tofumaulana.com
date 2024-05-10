import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '../views/Dashboard.vue';
import AboutView from '../views/About.vue';
import ProjectView from '../views/Project.vue';
import ContactView from '../views/Contact.vue';
import TelkomsatView from '../views/Telkomsat.vue';
import PokemonView from '../views/Pokemon.vue';
import UserIndexView from '../views/UserIndex.vue';

const routes = [
  {
    path: '',
    component: DashboardView,
  },
  {
    path: '/about',
    component: AboutView,
  },
  {
    path: '/project',
    component: ProjectView,
  },
  {
    path: '/contact',
    component: ContactView,
  },
  {
    path: '/project/:name',
    component: UserIndexView,
    children: [
      {
        path: '/project/:name/telkomsat',
        component: TelkomsatView,
      },
      {
        path: '/project/:name/pokemon',
        component: PokemonView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
