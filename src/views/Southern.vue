<template>
    <div>
      <section class="relative w-full min-h-screen overflow-hidden">
        <div class="absolute inset-0 bg  bg-cover bg-sm-blur bg-center "
          style="background-image: url('/src/assets/images/gallery/photos/akanyoni.png');"
        ></div>
        <div class="relative z-10 min-h-screen flex flex-col  px-6">
          <div class="text-center text-white max-w-3xl mb-12">
            <h1 class="text-6xl text-blue-60 mb-6">
              Welcome To Southern Province
            </h1>
            <h2 class="text-4xl font-bold text-yellow-400 uppercase tracking-[8px] mb-4">
              About Southern Province
            </h2>
            <p class="text-xl">
                The southern part of Rwanda is known for its cultural heritage, rolling hills, and historical sites. It is home to National Museum of Rwanda (also known as the Ethnographic Museum), which showcases Rwanda’s history and traditions. The region has a warmer climate and supports farming, education, and tourism, making it an important cultural and economic area of the country.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 w-full max-w-4xl">
            <img src="/src/assets/images/gallery/photos/canopy.jpg"
              class="w-full h-48 object-cover cursor-pointer"
            />
            <img src="/src/assets/images/gallery/photos/forest.jpg"
              class="w-full h-48 object-cover cursor-pointer"
            />
            <img src="/src/assets/images/gallery/photos/bestrw.jpg"
              class="w-full h-48 object-cover cursor-pointer"
            />
            <img src="/src/assets/images/gallery/photos/museum.jpg" 
              class="w-full h-48 object-cover cursor-pointer"
            />
          </div>
        </div>
      </section>
    </div>
  </template>