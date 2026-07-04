<template>
  <!-- Load Jwrey Font and alternative display fonts -->
  <link href="https://fonts.cdnfonts.com/css/jwrey" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"/>

  <div class="bg-gradient-to-b from-[#1c4217] to-[#0d240c] min-h-screen py-12 px-4 md:px-8 font-sans text-[#e8eaf6] flex flex-col gap-8 w-full mx-auto selection:bg-[#7c6aff]/30">
    
    <!-- BLOCK 1: HERO BANNER (Matches top card of image_18a0fe.jpg with Jwrey Headings) -->
    <section 
      class="relative h-[450px] rounded-3xl overflow-hidden bg-cover bg-center shadow-2xl border border-[#2a2f4a] flex flex-col justify-between p-8 md:p-12 transition-all duration-500 group hover:border-[#7c6aff]/50"
      style="background-image: url('/birunga.png');"
    >
      <!-- Dark overlay with interactive hover glow -->
      <div class="absolute inset-0 bg-gradient-to-t from-[#0d0f1a] via-[#0d0f1a]/40 to-black/60 transition-opacity duration-500 group-hover:opacity-90"></div>

      <!-- Mini-nav header from reference image_18a0fe.jpg -->
      

      <!-- Hero Main Typography with Jwrey Font -->
      <div class="relative z-10">
        <h1 class="font-['Cinzel',_serif] text-5xl md:text-7xl font-bold text-[#8b3a00] tracking-wider leading-tight mb-2 flex items-center justify-center gap-4 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)] filter">
            TEMBERA u RWANDA
          </h1>
        <div class="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
          <p class="font-font-['Poppins',_sans-serif] italic text-2xl text-black mb-8 drop-shadow-[1px_1px_2px_rgba(255,255,255,0.8)]">
            Discover beauty, adventure and nature
          </p>
          <p class="text-[#4fffb0] text-xs tracking-[4px]  font-['Poppins',_sans-serif] bg-yellow/10 px-3 py-1 rounded-full border border-[#4fffb0]/20">
            "Dutemberane igihugu cy'imisozi igihumbi"
          </p>
        </div>
      </div>
    </section>

    <!-- BLOCK 2: OUR SERVICES (4 columns with JS File Accent Color Hovers) -->
    <section class="bg-[#151824] rounded-3xl p-8 md:p-12 border border-[#2a2f4a] shadow-2xl">
      <h2 class="font-['Jwrey',_sans-serif] text-3xl tracking-wider uppercase mb-8 text-[#e8eaf6] hover:text-[#7c6aff] transition-colors duration-300">
        Our Services
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Service 01: Gorilla Trekking (Accented with --accent2 purple) -->
        <div class="flex flex-col p-4 rounded-2xl bg-[#1c2035]/50 border border-transparent hover:border-[#7c6aff]/40 hover:bg-[#1c2035] transition-all duration-300 group/card">
          <div class="h-44 rounded-xl overflow-hidden mb-4 bg-[#0d0f1a] relative">
            <img src="/bestrw.jpg" alt="Gorilla Trekking" class="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110" />
          </div>
          <span class="font-mono text-xl font-bold text-[#7880a4] block mb-1 group-hover/card:text-[#7c6aff] transition-colors">01</span>
          <h3 class="font-['Jwrey',_sans-serif] text-base tracking-wider mb-2 text-white group-hover/card:text-[#7c6aff] transition-colors">Gorilla Trekking</h3>
          <p class="text-[#7880a4] text-xs leading-relaxed">
            Elegant, high-impact wildlife encounters that elevate your journey's unique essence.
          </p>
        </div>

        <!-- Service 02: Guided Safaris (Accented with --accent1 green) -->
        <div class="flex flex-col p-4 rounded-2xl bg-[#1c2035]/50 border border-transparent hover:border-[#4fffb0]/40 hover:bg-[#1c2035] transition-all duration-300 group/card">
          <div class="h-44 rounded-xl overflow-hidden mb-4 bg-[#0d0f1a] relative">
            <img src="/safari.png" alt="Guided Tours" class="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110" />
          </div>
          <span class="font-mono text-xl font-bold text-[#7880a4] block mb-1 group-hover/card:text-[#4fffb0] transition-colors">02</span>
          <h3 class="font-['Jwrey',_sans-serif] text-base tracking-wider mb-2 text-white group-hover/card:text-[#4fffb0] transition-colors">Guided Safaris</h3>
          <p class="text-[#7880a4] text-xs leading-relaxed">
            Smart, refined tour layouts that seamlessly harmonize with the natural landscape.
          </p>
        </div>

        <!-- Service 03: Luxury Lodging (Accented with --accent4 yellow) -->
        <div class="flex flex-col p-4 rounded-2xl bg-[#1c2035]/50 border border-transparent hover:border-[#ffc94a]/40 hover:bg-[#1c2035] transition-all duration-300 group/card">
          <div class="h-44 rounded-xl overflow-hidden mb-4 bg-[#0d0f1a] relative">
            <img src="/lodging.jpg" alt="Accommodation" class="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110" />
          </div>
          <span class="font-mono text-xl font-bold text-[#7880a4] block mb-1 group-hover/card:text-[#ffc94a] transition-colors">03</span>
          <h3 class="font-['Jwrey',_sans-serif] text-base tracking-wider mb-2 text-white group-hover/card:text-[#ffc94a] transition-colors">Luxury Lodging</h3>
          <p class="text-[#7880a4] text-xs leading-relaxed">
            Timeless regional resort selections blending form, function, and deep sophistication.
          </p>
        </div>

        <!-- Service 04: Cultural Immersion (Accented with --accent5 blue) -->
        <div class="flex flex-col p-4 rounded-2xl bg-[#1c2035]/50 border border-transparent hover:border-[#4ac8ff]/40 hover:bg-[#1c2035] transition-all duration-300 group/card">
          <div class="h-44 rounded-xl overflow-hidden mb-4 bg-[#0d0f1a] relative">
            <img src="/photo 99.jpg" alt="Cultural Experiences" class="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110" />
          </div>
          <span class="font-mono text-xl font-bold text-[#7880a4] block mb-1 group-hover/card:text-[#4ac8ff] transition-colors">04</span>
          <h3 class="font-['Jwrey',_sans-serif] text-base tracking-wider mb-2 text-white group-hover/card:text-[#4ac8ff] transition-colors">Cultural Immersion</h3>
          <p class="text-[#7880a4] text-xs leading-relaxed">
            Purposeful heritage interactions designed for cultural flow, balance, and quiet luxury.
          </p>
        </div>

      </div>
    </section>

    <!-- BLOCK 3: TOUR PLAN SPECIFICATIONS (Table style with reactive item hover effects) -->
    <section class="bg-[#151824] rounded-3xl p-8 md:p-12 border border-[#2a2f4a] shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
      <!-- Left Side: Table List -->
      <div>
        <h2 class="font-['Jwrey',_sans-serif] text-3xl tracking-wider uppercase mb-2 text-white">
          Tour Overview
        </h2>
        <p class="font-mono text-xs uppercase tracking-widest text-[#7880a4] mb-6">
          Total Duration: 7 Days
        </p>

        <!-- Spec List Table Style using File Palette -->
        <div class="flex flex-col text-xs md:text-sm font-sans">
          <div class="flex justify-between py-3 border-b border-[#2a2f4a] hover:bg-[#1c2035] px-2 rounded transition-colors group">
            <span class="text-[#7880a4] group-hover:text-white transition-colors">Volcanoes National Park</span>
            <span class="font-mono font-medium text-[#7c6aff]">2 Days</span>
          </div>
          <div class="flex justify-between py-3 border-b border-[#2a2f4a] hover:bg-[#1c2035] px-2 rounded transition-colors group">
            <span class="text-[#7880a4] group-hover:text-white transition-colors">Akagera National Park</span>
            <span class="font-mono font-medium text-[#7c6aff]">2 Days</span>
          </div>
          <div class="flex justify-between py-3 border-b border-[#2a2f4a] hover:bg-[#1c2035] px-2 rounded transition-colors group">
            <span class="text-[#7880a4] group-hover:text-white transition-colors">Nyungwe Canopy Walk</span>
            <span class="font-mono font-medium text-[#4fffb0]">1 Day</span>
          </div>
          <div class="flex justify-between py-3 border-b border-[#2a2f4a] hover:bg-[#1c2035] px-2 rounded transition-colors group">
            <span class="text-[#7880a4] group-hover:text-white transition-colors">Lake Kivu Relaxation</span>
            <span class="font-mono font-medium text-[#ffc94a]">1 Day</span>
          </div>
          <div class="flex justify-between py-3 border-b border-[#2a2f4a] hover:bg-[#1c2035] px-2 rounded transition-colors group">
            <span class="text-[#7880a4] group-hover:text-white transition-colors">Kigali Cultural Arts Tour</span>
            <span class="font-mono font-medium text-[#4ac8ff]">1 Day</span>
          </div>
          <div class="flex justify-between py-3 hover:bg-[#1c2035] px-2 rounded transition-colors group">
            <span class="text-[#7880a4] group-hover:text-white transition-colors">Chauffeur & Photography Setup</span>
            <span class="font-mono font-medium text-[#4fffb0] animate-pulse">Included</span>
          </div>
        </div>
      </div>

      <!-- Right Side: Feature Image layout from image_18a0fe.jpg -->
      <div class="rounded-2xl overflow-hidden shadow-xl border border-[#2a2f4a] h-80 md:h-full min-h-[300px] group/img relative">
        <div class="absolute inset-0 bg-[#7c6aff]/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
        <img 
          src="/location.jpeg" 
          class="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
        />
      </div>

    </section>

  </div>
</template>