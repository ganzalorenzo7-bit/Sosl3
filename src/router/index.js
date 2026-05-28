import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/home.vue";
import About from "../views/About.vue";
import Contact from "../views/contact.vue";
import Services from '../views/services.vue';
import Western from '../views/Western.vue';
import Southern from '../views/Southern.vue';
import Eastern from '../views/Eastern.vue';
import Northern from '../views/Northern.vue';
import city from '../views/city.vue';

const routes = [
  {
    path:"/",
    name:"Home",
    component:Home
  },

{
  path:"/about",
  name:"About",
  component:About
},

{
  path:"/contact",
  name:"Contact",
  component:Contact
},

{
  path:"/services",
  name:"Services",
  component: Services,
},

{
  path:"/Northern",
  name:"Northern",
  component: Northern,
},

{
  path:"/Southern",
  name:"Southern",
  component:Southern,
},

{
  path:"/Eastern",
  name:"Eastern",
  component:Eastern,
},

{
  path:"/Western",
  name:"Western",
  component:Western,
},
{
  path:"/city",
  name:"city",
  component:city,
},


]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
