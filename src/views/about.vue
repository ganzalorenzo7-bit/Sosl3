<script setup>
import { computed } from 'vue'

// ─── INSERT YOUR OVERALL BACKGROUND IMAGE PATH HERE ───
// Replace the placeholder Unsplash URL with your local image file path (e.g., '@/assets/your-bg.jpg')
const customBackgroundImage = computed(() => {
  return {
    backgroundImage: `url('https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1920&q=80')`
  }
})
</script>

<template>
  <!-- Background Container replacing the purple canvas of image_14ef3d.jpg -->
  <div 
    class="relative min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed p-6 md:p-16 flex flex-col justify-between font-sans overflow-hidden"
    :style="customBackgroundImage"
  >
    <!-- Background overlay for readability -->
    <div class="absolute inset-0 bg-black/40 pointer-events-none"></div>

    <!-- Main Content Canvas Layout matching image_14ef3d.jpg -->
    <div class="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- LEFT COLUMN: Mock Browser Windows (Simulating Top-Left and Bottom-Left blocks) -->
      <div class="lg:col-span-7 flex flex-col gap-10">
        
        <!-- Top Left Block: Horizontal Layout (Simulating Chicken Showcase) -->
        <div class="border-2 border-white rounded-2xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-md">
          <!-- Browser Header Window Bars -->
          <div class="bg-white/10 px-4 py-3 border-b border-white flex items-center gap-2">
            <span class="w-3 h-3 rounded-full border border-white inline-block"></span>
            <span class="w-3 h-3 rounded-full border border-white inline-block"></span>
            <span class="w-3 h-3 rounded-full border border-white inline-block"></span>
          </div>
          <!-- Hero Body Content with Pill Shape Image/Video Clip -->
          <div class="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
            <div class="w-full md:w-1/2 h-56 rounded overflow-hidden relative border border-white/40">
              <video autoplay loop muted playsinline class="w-full h-full object-cover">
                <source src="/videos/rwanda.mp4" type="video/mp4" />
              </video>
            </div>
            <div class="w-full md:w-1/2 text-white">
              <span class="text-yellow-400 text-xs uppercase tracking-[4px] block mb-2">About Us</span>
              <h1 class="text-2xl md:text-3xl font-bold leading-tight mb-3">
                Tour The Land Of A Thousand Hills 🌍
              </h1>
              <p class="text-sm text-white/90 leading-relaxed">
                We are passionate tourism promoters dedicated to welcoming visitors from around the world to discover the beauty of Rwanda.
              </p>
            </div>
          </div>
        </div>

        <!-- Bottom Left Block: Detailed Layout (Simulating Future Kind Showcase) -->
        <div class="border-2 border-white rounded-2xl overflow-hidden shadow-2xl bg-white text-gray-900">
          <div class="bg-gray-800 px-4 py-3 flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
          </div>
          <div class="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                Our mission is to showcase Rwanda's culture, wildlife, breathtaking landscapes, and unforgettable travel experiences.
              </p>
              <p>
                Known as the "Land of a Thousand Hills," Rwanda offers mountain gorillas, vibrant culture, clean cities, and warm hospitality.
              </p>
              <p class="font-medium text-gray-900">
                Through our platform, we guide and inspire tourists to experience Rwanda safely, comfortably, and memorably. 🚙📸
              </p>
            </div>
            <!-- Features inner frame grid visual -->
            <div class="grid grid-cols-2 gap-3 bg-gray-50 p-3 rounded-xl border border-gray-200">
              <div class="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                <span class="text-xl block mb-1">🦍</span>
                <h4 class="text-xs font-bold text-gray-900">Wildlife</h4>
              </div>
              <div class="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                <span class="text-xl block mb-1">🎭</span>
                <h4 class="text-xs font-bold text-gray-900">Culture</h4>
              </div>
              <div class="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                <span class="text-xl block mb-1">🏞</span>
                <h4 class="text-xs font-bold text-gray-900">Nature</h4>
              </div>
              <div class="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                <span class="text-xl block mb-1">⛰</span>
                <h4 class="text-xs font-bold text-gray-900">Adventure</h4>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- RIGHT COLUMN: Asymmetric Capsule Card (Simulating Right Vertical Frame) -->
      <div class="lg:col-span-5 w-full bg-white text-gray-900 rounded-t-[140px] rounded-b-[140px] border-4 border-white shadow-2xl p-8 md:p-12 flex flex-col justify-between min-h-[600px]">
        <div>
          <div class="flex justify-center mb-6">
            <span class="text-xs font-bold uppercase tracking-[6px] text-emerald-800 border-b-2 border-emerald-800 pb-1">Rwanda Tourism</span>
          </div>
          <p class="text-center font-serif text-lg md:text-xl italic text-gray-800 leading-relaxed px-2">
            "Explore hills, lakes, forests, and landscapes that make Rwanda one of Africa's most beautiful destinations."
          </p>
        </div>

        <!-- Mini Feature Cards inside the capsule view -->
        <div class="my-8 space-y-4">
          <div class="bg-emerald-50 p-4 rounded-xl border-l-4 border-emerald-600">
            <h3 class="text-gray-900 font-semibold text-sm mb-1">🦍 Immersive Wilds</h3>
            <p class="text-xs text-gray-600">Discover Rwanda's mountain gorillas and rich wildlife experiences.</p>
          </div>
          <div class="bg-amber-50 p-4 rounded-xl border-l-4 border-amber-500">
            <h3 class="text-gray-900 font-semibold text-sm mb-1">🎭 Living Traditions</h3>
            <p class="text-xs text-gray-600">Experience traditions, communities, and iconic dances.</p>
          </div>
        </div>

        <div class="flex justify-around border-t border-gray-200 pt-6 text-center">
          <div>
            <span class="block text-xl font-bold text-emerald-700">1000+</span>
            <span class="text-[10px] text-gray-500 uppercase tracking-wider">Hills Visited</span>
          </div>
          <div>
            <span class="block text-xl font-bold text-emerald-700">100%</span>
            <span class="text-[10px] text-gray-500 uppercase tracking-wider">Hospitality</span>
          </div>
        </div>
      </div>

    </div>

    <!-- LARGE BOTTOM HEADER TEXT: Replicating "ABOUT US PAGES" in image_14ef3d.jpg -->
    <div class="relative z-10 w-full text-center mt-12 pointer-events-none">
      <h2 class="font-['Cinzel',_serif] tracking-widest text-6xl md:text-9xl font-bold uppercase text-white/20 select-none leading-none">
        ABOUT US
      </h2>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&display=swap');
</style>