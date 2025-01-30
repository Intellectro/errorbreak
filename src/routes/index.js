import { createRouter, createWebHistory } from "vue-router";
import {Home, Terms, PrivacyPolicy} from "../views";

const routes = [
    {
        name: "home",
        path: "/",
        component: Home,
        children: [
            {
                name: "home+services",
                path: "#services"
            }
        ]
    },
    {
        name: "terms",
        path: "/terms-and-condition",
        component: Terms
    },
    {
        name: "privacy",
        path: "/privacy-policy",
        component: PrivacyPolicy
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;