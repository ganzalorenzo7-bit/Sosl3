
<template>
  <section
    class="min-h-screen bg-cover bg-center p-6"
    style="background-image: url('/photo7.png');"
  >
    <div
      class="min-h-screen rounded-3xl backdrop-blur-sm bg-black/50 p-10"
    >
      <div class="text-center text-white mb-14">
        <h1 class="text-5xl font-bold text-yellow-400 mb-4">
          VISIT RWANDA 🌍
        </h1>
        <p class="text-lg text-gray-200">
          Discover beauty, adventure and nature
        </p>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <div
          class="relative group overflow-hidden rounded-2xl shadow-lg bg-white/10"
        >
          <transition name="slide" mode="out-in">
            <img
              :key="galleryImages[currentImage]"
              :src="galleryImages[currentImage]"
              class="h-72 w-full object-cover transition duration-500 group-hover:blur-sm group-hover:scale-105"
            />
          </transition>
          <div
            class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center"
          >
            <h2 class="text-white text-2xl font-bold mb-4">
              View Gallery
            </h2>
            <p class="text-gray-200 text-center px-6 mb-5">
              Explore Rwanda tours and beautiful adventures
            </p>
          </div>
          <div class="p-5 text-white">
            <h2 class="text-2xl font-semibold mb-2">
              Gallery
            </h2>
            <p class="text-gray-300">
              Beautiful hills and nature places 🏕
            </p>
          </div>
        </div>
        <div
          class="relative group overflow-hidden rounded-2xl shadow-lg bg-white/10"
        >
          <img
            src="/location.jpeg"
            class="h-72 w-full object-cover transition duration-500 group-hover:blur-sm group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center"
          >
            <h2 class="text-white text-2xl font-bold mb-4">
              Explore our services
            </h2>
          </div>
          <div class="p-5 text-white">
            <h2 class="text-2xl font-semibold mb-2">
              Services
            </h2>
            <p class="text-gray-300">
              Tours, travel and fun tips 🚀
            </p>
          </div>
        </div>
        <div
          class="relative group overflow-hidden rounded-2xl shadow-lg bg-white/10"
        >
          <div
            class="absolute inset-0 bg-cover bg-center blur-sm scale-110"
            style="background-image: url('/photo9.jpeg');"
          ></div>
          <img
            src="/photo9.jpeg"
            class="relative h-72 w-full object-cover transition duration-500 group-hover:blur-sm group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center"
          >
            <h2 class="text-white text-2xl font-bold mb-4">
              View Destinations
            </h2>
          </div>
          <div class="relative p-5 text-white">
            <h2 class="text-2xl font-semibold mb-2">
              Destinations
            </h2>
            <p class="text-gray-300">
              Visit cool and amazing places 🏝
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.7s ease;
}
.slide-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
<script setup>
import { ref, onMounted } from "vue";
const galleryImages = [
  "/photo8.jpg",
  "/photo7.png",
  "/photo9.jpeg",
];
const currentImage = ref(0);
onMounted(() => {
  setInterval(() => {
    currentImage.value =
      (currentImage.value + 1) % galleryImages.length;
  }, 5000);
});
</script>