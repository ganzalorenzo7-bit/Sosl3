<template>
  <div>
    <section class="relative w-full min-h-screen overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('/src/assets/images/gallery/photos/convention.png');"
      ></div>
      <div class="absolute inset-0 bg-black/40"></div>
      <div class="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">

        <div class="text-center text-white max-w-3xl mb-12">
          <h1 class="text-6xl text-blue-400 mb-6 font-bold">
            Welcome To Kigali City
          </h1>
          <h2 class="text-4xl font-bold text-yellow-400 uppercase tracking-[8px] mb-4">
            About Kigali City
          </h2>
          <p class="text-xl leading-8">
            Kigali is the capital city of Rwanda. It is known for being very
            clean, safe, and built on beautiful green hills. There are many
            nice places to see and visit around the city. There are also marsh lands as you are heading to Kabuga at a place called UMUSAMBI VILLAGE which accommodates different species of birds and other animals including crested cranes and kingfisher birds.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4 w-full max-w-4xl">
          <img
            src="/src/assets/images/gallery/photos/ubumwe.png"
            alt="Ubumwe"
            class="w-full h-48 object-cover cursor-pointer rounded-lg hover:scale-105 transition"
          />
          <img
            src="/src/assets/images/gallery/photos/umusambi2.jpeg"
            alt="Umusambi Village"
            class="w-full h-48 object-cover cursor-pointer rounded-lg hover:scale-105 transition"
          />
          <img
            src="/src/assets/images/gallery/photos/skyscraping.jpg"
            alt="Kigali Skyline"
            class="w-full h-48 object-cover cursor-pointer rounded-lg hover:scale-105 transition"
          />
          <img
            src="/src/assets/images/gallery/photos/photo10.jpg"
            alt="Kigali City"
            class="w-full h-48 object-cover cursor-pointer rounded-lg hover:scale-105 transition"
          />
        </div>
      </div>
    </section>
  </div>
</template>