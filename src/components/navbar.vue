<template>


<nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-l"> 
  <img src="../src/assets/images/gallery/photos/LOGO 1.JPEG" /> 
   <span class="text-xl font-bold">tembera igihugu cyacu🏕</span>
  <span class="flex gap-8 text-sm font-medium"></span>
      
  
  <ul class="flex gap-8 text-sm font-medium w-full justify-end">
    <li><RouterLink to="/" class="hover:text-yellow-300 ">Home</RouterLink></li>
    <li><RouterLink to="/about" class="hover:text-yellow-300 ">About Us</RouterLink></li>
    <li><a href="/services" class="hover:text-yellow-300 ">Services</a></li>


    <li class="relative group">
  <a href="#" class="hover:text-yellow-300">Gallery<span>🔽</span></a>
  <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
    <li><RouterLink to="/photos" class="block px-4 py-2 hover:bg-green-200 text-green-900">Photos</RouterLink></li>
    <li><RouterLink to="/gallery/videos" class="block px-4 py-2 hover:bg-green-200 text-green-900">Videos</RouterLink></li>
  </ul>
</li>
    <li class="relative group">
      <a href="#" class="hover:text-yellow-300 ">Language<span>🔽</span></a>
    <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
    <li> <a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-900">English</a></li>
    <li> <a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-900">French</a></li>
    </ul>
  </li>


    <li class="relative group"> 
      <a href="#" class="hover:text-yellow-300">Destinations<span>🔽</span></a> 
    <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
    <li> <a href="/city" class="block px-4 py-2 hover:bg-green-200 text-green-900">Kigali city</a></li>
    <li> <a href="/Western" class="block px-4 py-2 hover:bg-green-200 text-green-900">Western province</a></li>
    <li> <a href="/Eastern" class="block px-4 py-2 hover:bg-green-200 text-green-900">Eastern province</a></li>
    <li> <a href="/Northern" class="block px-4 py-2 hover:bg-green-200 text-green-900">Northern province</a></li>
    <li> <a href="/Southern" class="block px-4 py-2 hover:bg-green-200 text-green-900">Southern province</a></li>

    </ul>
    </li>
    <li><RouterLink to="/contact" class="hover:text-yellow-300">Contact</RouterLink></li>
    <li><RouterLink to="/login" class="bg-yellow-400 text-green-900 px-4 py-1 rounded text-semibold hover:bg-yellow-300">login</RouterLink></li>

  </ul>
</nav>
</template>
      
