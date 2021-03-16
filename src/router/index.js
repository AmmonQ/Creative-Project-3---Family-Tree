import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PersonViewer from "../views/PersonViewer.vue";
import SavedPeople from "../views/SavedPeople.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
    {
        path: "/view",
        name: "PersonViewer",
        component: PersonViewer
    },
    {
        path: "/saved",
        name: "SavedPeople",
        component: SavedPeople
    }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
