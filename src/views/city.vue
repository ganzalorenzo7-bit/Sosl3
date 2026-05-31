<template>
    <div>
      <section class="relative w-full min-h-screen overflow-hidden">
        <div
          class="absolute inset-0 bg bg-cover bg-center "
          style="background-image: url('/src/assets/images/gallery/photos/convention.png');"
        ></div>
        <div class="relative z-10 min-h-screen flex flex-col  px-6">

          <div class="text-center text-white max-w-3xl mb-12">
            <h1 class="text-6xl text-blue-60 mb-6">
              Welcome To Kigali City
            </h1>
            <h2 class="text-4xl font-bold text-yellow-400 uppercase tracking-[8px] mb-4">
              About Kigali City
            </h2>
            <p class="text-xl">
              Kigali is the capital city of Rwanda. It is known for being very
              clean, safe, and built on beautiful green hills. There are many
              nice places to see and visit around the city.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 w-full max-w-4xl">
            <img
              src="/src/assets/photo 10.jpg"
              class="w-full h-48 object-cover cursor-pointer"
            />
            <img
              src="/src/assets/photo 10.jpg"
              class="w-full h-48 object-cover cursor-pointer"
            />
            <img
              src="/src/assets/photo 10.jpg"
              class="w-full h-48 object-cover cursor-pointer"
            />
            <img
              src="/src/assets/photo 10.jpg"
              class="w-full h-48 object-cover cursor-pointer"
            />
          </div>
        </div>
      </section>
    </div>
  </template>