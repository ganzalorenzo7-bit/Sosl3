<script setup></script>
<template>
  <section class="relative w-full h-screen overflow-hidden">
    <video
      autoplay loop muted playsinline
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/videos/rwanda.mp4" type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-black/30"></div>
  </section>
  <section
    class="relative py-24 px-6 md:px-24 bg-cover bg-center"
    style="background-image: url('/images/flower.JPG');"
  >
    <div class="absolute inset-0 bg-black/40"></div>
    <div
      class="relative z-10 w-full
             bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-10 md:p-16"
    >
      <p class="text-yellow-400 uppercase tracking-[8px] mb-4 text-center">
        About Us
      </p>
      <h1 class="text-white text-4xl md:text-6xl font-bold text-center mb-10">
        Tour The Land Of A Thousand Hills 🌍
      </h1>
      <p class="text-white text-lg leading-9 mb-6">
        We are passionate tourism promoters dedicated to welcoming visitors
        from around the world to discover the beauty of Rwanda. Our mission
        is to showcase Rwanda's culture, wildlife, breathtaking landscapes,
        and unforgettable travel experiences.
      </p>
      <p class="text-white text-lg leading-9 mb-6">
        Known as the "Land of a Thousand Hills," Rwanda offers mountain
        gorillas, vibrant culture, clean cities, and warm hospitality. We
        help travelers explore the best destinations and adventures across
        the country.
      </p>
      <p class="text-white text-lg leading-9 mb-12">
        Through our platform, we guide and inspire tourists to experience
        Rwanda safely, comfortably, and memorably. 🚙📸
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition"
        >
          <h3 class="text-yellow-400 text-xl font-semibold mb-3">
            🦍 Wildlife
          </h3>
          <p class="text-white/80">
            Discover Rwanda's mountain gorillas and enjoy
            wildlife experiences in national parks.
          </p>
        </div>
        <div
          class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition"
        >
          <h3 class="text-yellow-400 text-xl font-semibold mb-3">
            🎭 Culture
          </h3>
          <p class="text-white/80">
            Experience Rwanda's traditions, communities,
            traditional dances, and culture.
          </p>
        </div>
        <div
          class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition"
        >
          <h3 class="text-yellow-400 text-xl font-semibold mb-3">
            🏞 Nature
          </h3>
          <p class="text-white/80">
            Explore hills, lakes, forests, and landscapes
            that make Rwanda one of Africa's most beautiful destinations.
          </p>
        </div>
        <div
          class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition"
        >
          <h3 class="text-yellow-400 text-xl font-semibold mb-3">
            ⛰ Adventure
          </h3>
          <p class="text-white/80">
            Enjoy safaris, photography tours, and
            adventures across Rwanda.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>