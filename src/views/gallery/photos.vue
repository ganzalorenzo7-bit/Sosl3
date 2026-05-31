<template>
    <div class="relative min-h-screen bg-gray-900 pb-12">
      <section
        class="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style="background-image: url('/src/assets/images/gallery/photos/HERO BACKGROUND.jpg');"
      >
        <div
          class="absolute inset-0   bg-gradient-to-b  from-black/80    via-black/50   to-black/90"
        ></div>
        <div
          class="absolute inset-0 bg-cover bg-center blur-sm scale-110"
          style="background-image: url('/src/assets/images/gallery/photos/HERO BACKGROUND.jpg');"
        ></div>
        <div class="relative z-10 text-center px-6">
          <h1 class="text-white text-5xl md:text-7xl font-bold mb-4">
            Welcome To Our Photos🌟📸
          </h1>
          <p class="text-green-600 text-lg uppercase tracking-[8px]">
            "Dutemberane igihugu cy'imisozi igihumbi".
          </p>
        </div>
      </section>
      <div class="max-w-7xl mx-auto px-4 relative z-20 -mt-20">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          <div class="bg-gray-800 border border-gray-700/50 overflow-hidden shadow-xl rounded-sm">
            <img 
              src="/src/assets/images/gallery/photos/hills.png"  
              class="w-full h-64 object-cover"
            />
            <div class="p-3">
              <h3 class="text-white font-medium text-sm"> Hills</h3>
              <p class="text-gray-400 text-xs mt-1">Rwanda</p>
            </div>
          </div>
          <div class="bg-gray-800 border border-gray-700/50 overflow-hidden shadow-xl rounded-sm">
            <img 
              src="/src/assets/images/gallery/photos/canopy.jpg" 
              alt="Rwanda Landscape" 
              class="w-full h-64 object-cover"
            />
            <div class="p-3">
              <h3 class="text-white font-medium text-sm">Nyungwe Canopy</h3>
              <p class="text-gray-400 text-xs mt-1">West Province</p>
            </div>
          </div>
          <div class="bg-gray-800 border border-gray-700/50 overflow-hidden shadow-xl rounded-sm">
            <img 
              src="/src/assets/images/gallery/photos/giraffe.png" 
              alt="Rwanda Landscape" 
              class="w-full h-64 object-cover"
            />
            <div class="p-3">
              <h3 class="text-white font-medium text-sm">Akagera Safari</h3>
              <p class="text-gray-400 text-xs mt-1">East Province</p>
            </div>
          </div>
          <div class="bg-gray-800 border border-gray-700/50 overflow-hidden shadow-xl rounded-sm">
            <img 
              src="/src/assets/images/gallery/photos/western 2.jpg" 
              class="w-full h-64 object-cover"
            />
            <div class="p-3">
              <h3 class="text-white font-medium text-sm">Lake Kivu Sunset</h3>
              <p class="text-gray-400 text-xs mt-1">Rubavu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>