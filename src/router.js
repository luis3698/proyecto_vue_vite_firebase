import { createRouter, createWebHistory } from "vue-router";
import {useUserStore} from "./stores/user"

import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Aboutus from "./views/About-us.vue";
import Contacts from "./views/Contacts.vue"

const requireAuth = async (to, from, next) => {
    const userStore = useUserStore();
    userStore.loading = true;
    const user = await userStore.currentUser();
    if (user) {
        next();
    } else {
        next("/login");
    }
    userStore.loading = false;
};

const routes = [
    { path: "/", component: Home, beforeEnter: requireAuth },
    { path: "/login", component: Login },
    { path: "/register", component: Register},
    { path: "/About-us", component: Aboutus},
    { path: "/contacts", component: Contacts},
];



const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;