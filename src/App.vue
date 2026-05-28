<script setup>
// import Home from './views/home.vue
import { RouterView } from 'vue-router';
import navbar from './components/navbar.vue';
import Footer from './components/footer.vue';     
</script>
     <template>
      <navbar/>
      <router-view/>
      <!-- <Home/> -->
       <Footer/>
     </template>