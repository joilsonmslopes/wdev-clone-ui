import Vue from 'vue';
import VueRouter from 'vue-router';

// passando para o Vue reconhecer o vue-router
Vue.use(VueRouter);

// para criar as rotas, é necessario ter os components importados
import Home from '@/pages/Home';
import Videos from '@/pages/Videos';
import Sobre from '@/pages/Sobre';
import Contato from '@/pages/Contato';

// definindo nossas rotas
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/videos',
        component: Videos
    },
    {
        path: '/sobre',
        component: Sobre
    },
    {
        path: '/contato',
        component: Contato
    }
];

// nova instancia do Vue para utilizar as rotas
const router = new VueRouter({
    routes,
    mode: 'history' /* para o vue processar as rotas como /home /contatos etc...*/
});

export default router;