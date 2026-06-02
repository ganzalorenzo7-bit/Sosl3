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
import photos from '../views/gallery/photos.vue';
import videos from '../views/gallery/videos.vue';
import login from '../views/login.vue';
import register from '../views/register.vue';


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
{
  path:"/photos",
  name:"photos",
  component:photos,
},
{
  path:"/videos",
  name:"videos",
  component:videos,
},
{
  path:"/login",
  name:"login",
  component:login,
},
{
  path:"/register",
  name:"register",
  component:register,
},


]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
