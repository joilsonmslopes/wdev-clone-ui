import Vue from 'vue';
import VueRouter from 'vue-router';

// passando para o Vue reconhecer o vue-router
Vue.use(VueRouter);

// para criar as rotas, é necessario ter os components importados
import Home from '@/pages/Home';

// definindo nossas rotas
const routes = [
    {
        path: '/',
        component: Home
    }
];

// nova instancia do Vue para utilizar as rotas
const router = new VueRouter({
    routes,
    mode: 'history' /* para o vue processar as rotas como /home /contatos etc...*/
});

export default router;