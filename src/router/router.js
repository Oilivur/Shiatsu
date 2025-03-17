import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Admin from "@/views/Admin.vue";
import Termas from "@/views/Termas.vue";
import Shindo from "@/views/Shindo.vue";
import Hinnakiri from "@/views/Hinnakiri.vue";
import Minust from "@/views/Minust.vue";
import Kontakt from "@/views/Kontakt.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/admin", component: Admin },
  { path: '/termas', name: 'termas', component: Termas },
  { path: '/shindo', name: 'shindo', component: Shindo },
  { path: '/hinnakiri', name: 'hinnakiri', component: Hinnakiri },
  { path: '/minust', name: 'minust', component: Minust },
  { path: '/kontakt', name: 'kontakt', component: Kontakt }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
