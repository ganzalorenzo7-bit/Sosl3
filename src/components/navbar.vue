<template>
  <nav class="bg-green-500 text-white px-10 py-4">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-2">
        <img src="/logo 1.jpg" class="h-15 w-15 rounded-full object-cover"/>
        <span class="text-xl font-bold">tembera igihugu cyacu🏕</span>
      </div>
      <ul class="flex gap-6">
        <li>
          <router-link to="/" class="text-white">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="text-white">About</router-link>
        </li>
        <li>
          <router-link to="/images" class="text-white">Images</router-link>
        </li>
        <li>
          <router-link to="/contact" class="text-white">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
