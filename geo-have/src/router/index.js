import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
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
      path: "/pointshop",
      name: "pointshop",
      component: () => import("@/views/PointShopView.vue"),
    },
    {
      path: "/skattejagt",
      name: "skattejagt",
      component: () => import("@/views/TreasureHuntView.vue"),
    },
    {
      path: "/skattejagt/kort",
      name: "kort",
      component: () => import("@/views/TreasuremapView.vue"),
    },

    {
      path: "/quiz",
      name: "QuizPage",
      component: () => import("@/views/QuizView.vue"),
    },
    {
      // Catch-all route for unmatched routes
      path: "/:catchAll(.*)",
      name: "404Page",
      component: NotFoundView,
    },
    {
      path: "/PointSystem",
      name: "Point",
      component: () => import("@/views/PointView.vue"),
    },
    {
      path: "/opgave",
      name: "opgave",
      component: () => import("@/views/OverlayView.vue"),
    },
  ],
});

export default router;
