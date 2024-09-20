import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from './components/indexPage.vue';
import Signup from './components/signupPage.vue';
import Login from './components/loginPage.vue';
import Welcome from './components/welcomePage.vue';


const routes = [
    { path: '/', component: IndexPage },
    { path: '/signup', component: Signup },
    { path: '/login', component: Login },
    { path: '/welcome', component: Welcome }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
import { Skapi } from "skapi-js"
const skapi = new Skapi("ap22MXeGjqdJjon79Sdw", "a4dd8739-ceac-4fec-b708-8019b3cf131a");
export { skapi };

