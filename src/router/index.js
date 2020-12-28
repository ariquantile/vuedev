
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Login from "@/components/Login.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
      },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

export default routes;