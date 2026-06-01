<template>
    <div>
      <section class="relative w-full min-h-screen overflow-hidden">
        <div
          class="absolute inset-0 bg  bg-cover bg-sm-blur bg-center "
          style="background-image: url('/src/assets/images/gallery/photos/gazelle.jpg');"
        ></div>
        <div class="relative z-10 min-h-screen flex flex-col  px-6">
          <div class="text-center text-white max-w-3xl mb-12">
            <h1 class="text-6xl text-blue-60 mb-6">
              Welcome To Eastern Province
            </h1>
            <h2 class="text-4xl font-bold text-yellow-400 uppercase tracking-[8px] mb-4">
              About Eastern Province
            </h2>
            <p class="text-xl">
                This is Rwanda's safari province.Which accomodates different kinds of activities but mainly acts as Rwanda's Safari Land. In the Eastern Province we find there Akagera National Park which has the big five.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 w-full max-w-4xl">
            <img
              src="/src/assets/images/gallery/photos/elephant.jpg"
              class="w-full h-48 object-cover cursor-pointer"
            />
            <img
              src="/src/assets/images/gallery/photos/Rhino.jpg"
              class="w-full h-60 object-cover cursor-pointer"
            />
            <img
              src="/src/assets/images/gallery/photos/lion.jpg"
              class="w-full h-48 object-cover cursor-pointer"
            />
            <img
              src="/src/assets/images/gallery/photos/hippo.jpg"
              class="w-full h-full object-cover bg-center cursor-pointer"
            />
          </div>
        </div>
      </section>
    </div>
  </template>