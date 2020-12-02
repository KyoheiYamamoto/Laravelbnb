require('./bootstrap');

import VueRouter from "vue-router";
import Index from "./Index.vue";
import router from "./routes";

window.Vue = require("vue");

Vue.use(VueRouter);

const app = new Vue({
    el: "#app",
    router,
    components: {
        "index":Index
    }
});
