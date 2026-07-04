<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
const openDropdown = ref(null)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  openDropdown.value = null
}

const toggleDropdown = (name) => {
  openDropdown.value = openDropdown.value === name ? null : name
}

const closeMenus = () => {
  menuOpen.value = false
  openDropdown.value = null
}
</script>

<template>
  <nav class="sticky top-0 z-[9999] bg-green-800/95 backdrop-blur-md text-white border-b border-white/20 shadow-lg">
    <div class="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
      <RouterLink to="/" class="flex min-w-0 items-center gap-3" @click="closeMenus">
        <img
          src="../assets/images/gallery/photos/LOGO-1.JPEG"
          alt="Tembera igihugu cyacu logo"
          class="h-11 w-12 shrink-0 rounded-full object-cover md:h-12 md:w-14"
        />
        <span class="truncate text-base font-bold sm:text-xl">tembera igihugu cyacu</span>
      </RouterLink>

      <button
        type="button"
        class="inline-flex h-10 w-10 items-center justify-center rounded border border-white/30 text-2xl md:hidden"
        aria-label="Toggle navigation menu"
        @click="toggleMenu"
      >
        <span v-if="menuOpen">x</span>
        <span v-else>☰</span>
      </button>

      <ul
        :class="[
          'absolute left-0 right-0 top-full flex-col gap-1 bg-green-800/98 px-4 py-4 text-sm font-medium shadow-xl md:static md:flex md:flex-row md:items-center md:justify-end md:gap-8 md:bg-transparent md:p-0 md:shadow-none',
          menuOpen ? 'flex' : 'hidden'
        ]"
      >
        <li>
          <RouterLink to="/" class="block rounded px-3 py-2 hover:text-yellow-300 md:p-0" @click="closeMenus">
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/about" class="block rounded px-3 py-2 hover:text-yellow-300 md:p-0" @click="closeMenus">
            About Us
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/services" class="block rounded px-3 py-2 hover:text-yellow-300 md:p-0" @click="closeMenus">
            Services
          </RouterLink>
        </li>

        <li class="relative md:group">
          <button
            type="button"
            class="flex w-full items-center justify-between rounded px-3 py-2 hover:text-yellow-300 md:w-auto md:p-0"
            @click="toggleDropdown('gallery')"
          >
            <span>Gallery</span>
            <span class="ml-1 text-xs">▼</span>
          </button>
          <ul
            :class="[
              'mt-1 overflow-hidden rounded bg-white text-green-900 shadow md:invisible md:absolute md:left-0 md:top-full md:z-[10000] md:mt-3 md:w-48 md:opacity-0 md:transition md:group-hover:visible md:group-hover:opacity-100',
              openDropdown === 'gallery' ? 'block md:visible md:opacity-100' : 'hidden md:block'
            ]"
          >
            <li>
              <RouterLink to="/photos" class="block px-4 py-2 hover:bg-green-200" @click="closeMenus">
                Photos
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/gallery/videos" class="block px-4 py-2 hover:bg-green-200" @click="closeMenus">
                Videos
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="relative md:group">
          <button
            type="button"
            class="flex w-full items-center justify-between rounded px-3 py-2 hover:text-yellow-300 md:w-auto md:p-0"
            @click="toggleDropdown('language')"
          >
            <span>Language</span>
            <span class="ml-1 text-xs">▼</span>
          </button>
          <ul
            :class="[
              'mt-1 overflow-hidden rounded bg-white text-green-900 shadow md:invisible md:absolute md:left-0 md:top-full md:z-[10000] md:mt-3 md:w-48 md:opacity-0 md:transition md:group-hover:visible md:group-hover:opacity-100',
              openDropdown === 'language' ? 'block md:visible md:opacity-100' : 'hidden md:block'
            ]"
          >
            <li><a href="#" class="block px-4 py-2 hover:bg-green-200">English</a></li>
            <li><a href="#" class="block px-4 py-2 hover:bg-green-200">French</a></li>
          </ul>
        </li>

        <li class="relative md:group">
          <button
            type="button"
            class="flex w-full items-center justify-between rounded px-3 py-2 hover:text-yellow-300 md:w-auto md:p-0"
            @click="toggleDropdown('destinations')"
          >
            <span>Destinations</span>
            <span class="ml-1 text-xs">▼</span>
          </button>
          <ul
            :class="[
              'mt-1 overflow-hidden rounded bg-white text-green-900 shadow md:invisible md:absolute md:left-0 md:top-full md:z-[10000] md:mt-3 md:w-56 md:opacity-0 md:transition md:group-hover:visible md:group-hover:opacity-100',
              openDropdown === 'destinations' ? 'block md:visible md:opacity-100' : 'hidden md:block'
            ]"
          >
            <li>
              <RouterLink to="/city" class="block px-4 py-2 hover:bg-green-200" @click="closeMenus">
                Kigali city
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/Western" class="block px-4 py-2 hover:bg-green-200" @click="closeMenus">
                Western province
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/Eastern" class="block px-4 py-2 hover:bg-green-200" @click="closeMenus">
                Eastern province
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/Northern" class="block px-4 py-2 hover:bg-green-200" @click="closeMenus">
                Northern province
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/Southern" class="block px-4 py-2 hover:bg-green-200" @click="closeMenus">
                Southern province
              </RouterLink>
            </li>
          </ul>
        </li>

        <li>
          <RouterLink to="/contact" class="block rounded px-3 py-2 hover:text-yellow-300 md:p-0" @click="closeMenus">
            Contact
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/login"
            class="block rounded bg-yellow-400 px-4 py-2 font-semibold text-green-900 hover:bg-yellow-300 md:py-1"
            @click="closeMenus"
          >
            Login
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
