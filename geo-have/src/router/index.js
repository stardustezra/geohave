import { inMemoryPersistence } from "firebase/auth";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import { name } from "newrelic/lib/symbols";

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
      path: "/points",
      name: "points",
      component: () => import("@/views/PointsView.vue"),
    },
    {
      path: "/skattejagt",
      name: "skattejagt",
      component: () => import("@/views/TreasureHuntView.vue"),
    },
    {
      path: "/quiz",
      name: "QuizPage",
      component: () => import("@/views/QuizView.vue"),
    },
    {
      path: "/skattejagt/kort",
      name: "kort",
      component: () => import("@/views/TreasuremapView.vue"),
    },
    {
      path: "/PointSystem",
      name: "Point",
      component: () => import("@/views/PointView.vue"),


    },
  ],
});

export default router;
