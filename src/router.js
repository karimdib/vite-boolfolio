import { createRouter, createWebHistory } from 'vue-router';
import Project from './pages/Project.vue';
import ProjectShow from './pages/ProjectShow.vue';
import NotFound from './NotFound.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'project',
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
        }
    ]
});
export { router };

