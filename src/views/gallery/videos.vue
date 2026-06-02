<template>
  <div class="bg-gray-950 min-h-screen text-white pb-12">
    <section class="relative h-[450px] flex items-center justify-center overflow-hidden">
      <div 
        class="absolute inset-0 bg-cover bg-center blur-md opacity-80"
        style="background-image: url('/images/photo 7.png');"
      ></div>
      <div class="absolute inset-0 bg-black/60"></div>
      <div class="relative z-10 text-center px-4">
        <h1 class="text-white text-5xl md:text-6xl font-bold mb-3">
          Take a look at our videos🎞
        </h1>
        <p class="text-green-500 text-base uppercase tracking-[6px]">
          "Dutemberane igihugu cy'imisozi igihumbi".
        </p>
      </div>
    </section>
    <main class="relative max-w-6xl mx-auto px-4 py-12 mt-4 rounded-sm overflow-hidden">
      <div 
        class="absolute inset-0 bg-cover bg-center blur-lg scale-110 opacity-20"
        style="background-image: url('/images/photo 7.png');"
      ></div>
      <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="space-y-2">
          <video autoplay loop muted playsinline class="w-full h-64 object-cover rounded-sm bg-black">
            <source src="/videos/rwanda.mp4" type="video/mp4" />
          </video>
          <div class="grid grid-cols-2 gap-2">
            <img src="/images/photo 8.jpg" class="w-full h-24 object-cover rounded-sm" />
            <img src="/images/photo 9.jpeg" class="w-full h-24 object-cover rounded-sm" />
          </div>
        </div>
        <div class="space-y-2">
          <video controls loop muted playsinline class="w-full h-64 object-cover rounded-sm bg-black">
            <source src="/videos/gorillas.mp4" type="video/mp4" />
          </video>
          <div class="grid grid-cols-2 gap-2">
            <img src="/images/photo 10.jpg" class="w-full h-24 object-cover rounded-sm" />
            <img src="/images/flower.JPG" class="w-full h-24 object-cover rounded-sm" />
          </div>
        </div>
        <div class="space-y-2">
          <video controls loop muted playsinline class="w-full h-64 object-cover rounded-sm bg-black">
            <source src="/videos/rwanda experience.mp4" type="video/mp4" />
          </video>
          <div class="grid grid-cols-2 gap-2">
            <img src="/images/photo 7.png" class="w-full h-24 object-cover rounded-sm" />
            <img src="/images/photo 8.jpg" class="w-full h-24 object-cover rounded-sm" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>