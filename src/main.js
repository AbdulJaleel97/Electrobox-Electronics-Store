import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// FontAwesome
import "@fortawesome/fontawesome-free/css/all.min.css";

// Main CSS File
import "@/scss/style.css";

// jQuery Exists

// WoW.js Animations
import "animate.css";

createApp(App).use(store).use(router).mount("#app");
