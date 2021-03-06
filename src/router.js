import Vue from "vue";
import Router from "vue-router";
import Homepage from "./views/Homepage.vue";
import ItemPages from "./views/ItemPages.vue";
import PaymentPage from "./views/PaymentPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Homepage
    },
    {
      path: "/",
      name: "paymentPage",
      component: PaymentPage
    },
    {
      path: "/itemPages",
      name: "itemPages",
      component: ItemPages
    },
    {
      path: "/printsPages",
      name: "printsPages",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/PrintsPages.vue")
    }
  ]
});
