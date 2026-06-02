<script setup>
import Home from './views/home.vue'
import { RouterView } from 'vue-router';
import navbar from './components/navbar.vue';
import Footer from './components/footer.vue';    
import{computed} from 'vue';
import { useRoute } from 'vue-router';

const route=useRoute()
const hideLayout=computed(()=>['Dashboard'].includes(route.name))

</script>
     <template>
      <navbar v-if="!hideLayout"/>

      <router-view/>
      <!-- <Home/> -->
       <Footer v-if= "!hideLayout"/>
     </template>