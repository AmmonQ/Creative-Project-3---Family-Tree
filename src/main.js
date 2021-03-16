import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.prototype.current_id = 250;

let data = {
    savedPeople: []
}

new Vue({
  router,
    data,
  render: h => h(App)
}).$mount("#app");
