import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/home.vue";
import About from "../views/about.vue";
import Contact from "../views/contact.vue";
import Services from '../views/services.vue';
import Western from '../views/Western.vue';
import Southern from '../views/Southern.vue';
import Eastern from '../views/Eastern.vue';
import Northern from '../views/Northern.vue';
import City from '../views/city.vue';
import Photos from '../views/gallery/photos.vue';
import Videos from '../views/gallery/videos.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Dashboard from '../views/Dashboard/Dashboard.vue';
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/services", name: "Services", component: Services },
  { path: "/Northern", name: "Northern", component: Northern },
  { path: "/Southern", name: "Southern", component: Southern },
  { path: "/Eastern", name: "Eastern", component: Eastern },
  { path: "/Western", name: "Western", component: Western },
  { path: "/city", name: "City", component: City },
  { path: "/photos", name: "Photos", component: Photos },
  { path: "/videos", name: "Videos", component: Videos, alias: "/gallery/videos" },
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
