import { createRouter, createWebHistory } from 'vue-router';
import Project from './pages/Project.vue';
import ProjectShow from './pages/ProjectShow.vue';
import NotFound from './NotFound.vue';
import Contattaci from './pages/Contattaci.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'portfolio',
            component: Project
        },
        {
            path: '/show:id',
            name: 'show',
            component: ProjectShow
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notfound',
            component: NotFound
        },
        {
            path: '/contattaci',
            name: 'contattaci',
            component: Contattaci
        },
    ]
});
export { router };

