import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import HomePage from "./Components/Pages/HomePage.vue";
import ProductForm from "./Components/Pages/ProductForm.vue";
import ProductsPage from "./Components/Pages/ProductsPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/products",
    component: ProductsPage,
  },
  {
    path: "/add",
    component: ProductForm,
  },
  {
    path: "/products/:id",
    component: ProductForm,
  },
];

let router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App).use(router).mount("#app");
