<template>
  <!-- Background and Layout Wrapper matching Copilot_20260627_191635.png -->
  <div 
    class="font-['Poppins',_sans-serif] min-h-screen w-full flex justify-center items-center p-10 bg-cover bg-center bg-no-repeat bg-fixed"
    :style="backgroundStyle"
  >
    <div class="w-full max-w-6xl flex flex-col items-center text-center">
        
        <!-- Hero Section -->
        <header class="mb-14 relative">
          <h1 class="font-['Cinzel',_serif] text-5xl md:text-7xl font-bold text-[#8b3a00] tracking-wider leading-tight mb-2 flex items-center justify-center gap-4 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)] filter">
            VISIT RWANDA
            <span class="text-5xl md:text-6xl drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]">🌐</span>
          </h1>
          <p class="font-['Playfair_Display',_serif] italic text-2xl text-[#000000] mb-8 drop-shadow-[1px_1px_2px_rgba(255,255,255,0.8)]">
            Discover beauty, adventure and nature
          </p>
          <button 
            @click="exploreServices"
            class="font-['Poppins',_sans-serif] text-lg font-medium text-white bg-gradient-to-b from-[#1c4217] to-[#0d240c] px-9 py-3 border-2 border-[#bba14f] rounded shadow-[0_5px_15px_rgba(0,0,0,0.4),_inset_0_1px_0_rgba(255,255,255,0.2)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.5)] hover:from-[#24551e] hover:to-[#112e10] transition-all duration-200 cursor-pointer"
          >
            Explore Services 🌾
          </button>
        </header>

        <!-- Cards Grid Section -->
        <main class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-5">
            
            <!-- Card 1: Gallery -->
            <section 
              class="flex flex-col justify-between items-center h-[420px] p-8 border-3 border-white/50 rounded shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-transform duration-300 bg-cover bg-contain"
              :style="getCardStyle('/allrw.png')"            >
              <div>
                <h2 class="font-['Great_Vibes',_cursive] text-[3.5rem] text-[#1e1105] leading-none mb-1 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.6)]">Gallery</h2>
                <p class="text-[0.95rem] font-medium text-[#2b1a08] drop-shadow-[1px_1px_2px_rgba(255,255,255,0.7)]">Beautiful hills and nature places ⛰️</p>
              </div>
              <button 
                @click="navigateTo('gallery')" 
                class="w-[85%] font-['Playfair_Display',_serif] italic text-base py-2.5 px-8 rounded cursor-pointer transition-colors duration-200 shadow-[0_4px_10px_rgba(0,0,0,0.3)] bg-gradient-to-b from-[#603813] to-[#3a220c] text-[#f3d290] border border-[#f3d290] hover:from-[#754519] hover:to-[#4a2b10]"
              >
                View Gallery
              </button>
            </section>

            <!-- Card 2: Services -->
            <section 
              class="flex flex-col justify-between items-center h-[420px] p-8 border-3 border-white/50 rounded shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-transform duration-300 bg-cover bg-center"
              :style="getCardStyle('https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=500&q=80')"
            >
              <div>
                <h2 class="font-['Great_Vibes',_cursive] text-[3.5rem] text-[#1e1105] leading-none mb-1 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.6)]">Services</h2>
                <p class="text-[0.95rem] font-medium text-[#2b1a08] drop-shadow-[1px_1px_2px_rgba(255,255,255,0.7)]">Tours, travel and fun tips ⛺</p>
              </div>
              <button 
                @click="navigateTo('services')" 
                class="w-[85%] font-['Playfair_Display',_serif] italic text-base py-2.5 px-8 rounded cursor-pointer transition-colors duration-200 shadow-[0_4px_10px_rgba(0,0,0,0.3)] bg-gradient-to-b from-[#1c4217] to-[#0d240c] text-white border border-[#bba14f] hover:from-[#24551e] hover:to-[#112e10]"
              >
                Our Services
              </button>
            </section>

            <!-- Card 3: Destinations -->
            <section 
              class="flex flex-col justify-between items-center h-[420px] p-8 border-3 border-white/50 rounded shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-transform duration-300 bg-cover bg-center"
              :style="getCardStyle('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=500&q=80')"
            >
              <div>
                <h2 class="font-['Great_Vibes',_cursive] text-[3.5rem] text-[#1e1105] leading-none mb-1 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.6)]">Destinations</h2>
                <p class="text-[0.95rem] font-medium text-[#2b1a08] drop-shadow-[1px_1px_2px_rgba(255,255,255,0.7)]">Visit cool and amazing places 🗺️</p>
              </div>
              <button 
                @click="navigateTo('Destinations')" 
                class="w-[85%] font-['Playfair_Display',_serif] italic text-base py-2.5 px-8 rounded cursor-pointer transition-colors duration-200 shadow-[0_4px_10px_rgba(0,0,0,0.3)] bg-gradient-to-b from-[#603813] to-[#3a220c] text-[#f3d290] border border-[#f3d290] hover:from-[#754519] hover:to-[#4a2b10]"
              >
                View Destinations
              </button>
            </section>

        </main>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Dynamic Style Computations for standard background blends
const backgroundStyle = computed(() => {
  return {
    backgroundImage: ` url('/rwandaful.png')`
  }
})

// Generator for specific card background overlays
const getCardStyle = (imgUrl) => {
  return {
    backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.4) 100%), url('${imgUrl}')`
  }
}

// Interaction Methods
const exploreServices = () => {
  alert('Exploring premium Safari & Nature services...')
}

const navigateTo = (segment) => {
  alert(`Navigating to the ${segment.charAt(0).toUpperCase() + segment.slice(1)} segment.`)
}
</script>

<style scoped>
/* Google Font imports safely scoped inside the component layer */
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Great+Vibes&family=Playfair+Display:ital,wght@1,400&family=Poppins:wght@400;500&display=swap');
</style>