import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TreasureHuntView from "../views/TreasureHuntView.vue";
import NotFoundView from "../views/Http404View.vue"; // Import the 404 view

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("@/views/SigninView.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("@/views/SignupView.vue"),
    },
    {
      path: "/skattejagt",
      name: "skattejagt",
      component: () => import("@/views/TreasureHuntView.vue")
    },
    {
      path: "/quiz",
      name: "QuizPage",
      component: () => import("@/views/QuizView.vue")
    },
    {
      // Catch-all route for unmatched routes
      path: "/:catchAll(.*)",
      name: "404Page",
      component: NotFoundView
    },
    {
      path:"/collect",
      name: "Collect",
      component: () => import("@/views/CollectView.vue")
    }
  ],
});

export default router;
