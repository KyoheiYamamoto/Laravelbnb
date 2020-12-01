require('./bootstrap');

import VueRouter from "vue-router";
import router from "./routes";

window.Vue = require("vue");
Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);
Vue.component(
    "example-2",
);

Vue.use(VueRouter);

const app = new Vue({
    el: "#app",
    router
});
