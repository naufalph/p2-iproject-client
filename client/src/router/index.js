import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchResultPage from "../views/SearchResultPage/SearchResultPage.vue";
import LoadingPage from "../views/Loading.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/search",
      name: "searchres-page",
      component: SearchResultPage,
    },
    {
      path: "/loading",
      name: "loading-page",
      component: LoadingPage,
    },
  ],
});

export default router;
