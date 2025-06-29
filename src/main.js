import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import "boxicons/css/boxicons.min.css";
import './assets/css/variables.css'


const app = createApp(App);

// Restore saved path from 404.html redirect (if any)
const redirectPath = sessionStorage.redirect;
if (redirectPath) {
  sessionStorage.removeItem("redirect");
  router.replace(redirectPath); // jump to the real path before mount
}

app.use(router).mount("#app");
