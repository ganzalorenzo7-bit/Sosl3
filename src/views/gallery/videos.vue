<script setup>
import gorillasVideo from "../../assets/images/gallery/videos/gorillas.mp4";
import rwandaExperienceVideo from "../../assets/images/gallery/videos/rwanda experience.mp4";

const videos = [
  {
    title: "Visit Rwanda",
    location: "Rwanda",
    src: "/videos/rwanda.mp4",
  },
  {
    title: "Rwanda Experience",
    location: "Travel highlights",
    src: rwandaExperienceVideo,
  },
  {
    title: "Gorilla Trekking",
    location: "Volcanoes National Park",
    src: gorillasVideo,
  },
];
</script>

<template>
  <div class="min-h-screen bg-gray-950 text-white pb-14">
    <section
      class="relative min-h-[360px] bg-cover bg-center flex items-center justify-center px-6"
      style="background-image: url('/src/assets/images/gallery/photos/HERO BACKGROUND.jpg');"
    >
      <div class="absolute inset-0 bg-black/70"></div>
      <div class="relative z-10 text-center max-w-3xl">
        <h1 class="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
          Welcome To Our Videos
        </h1>
        <p class="text-green-300 text-lg md:text-xl">
          Watch Rwanda's beautiful places, wildlife and travel experiences.
        </p>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 relative z-20 -mt-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="video in videos"
          :key="video.src"
          class="bg-gray-900 border border-gray-800 overflow-hidden shadow-xl rounded"
        >
          <video
            class="w-full h-64 object-cover bg-black"
            controls
            preload="metadata"
          >
            <source :src="video.src" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div class="p-4">
            <h2 class="text-xl font-semibold">{{ video.title }}</h2>
            <p class="text-sm text-gray-400 mt-1">{{ video.location }}</p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
