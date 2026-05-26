<template>
  <div>
    <navbar/>
    
    <section class="text-center p-10">
      <h1 class="font-bold text-center text-blue-500">SOS Blog</h1>
      <p class="mt-4">SOS Tech school is a tech school for skills and innovation</p>
    </section>
    
    <section class="grid md:grid-cols-3 gap-5 p-6">
      <img src="/SOS.JPG" class="rounded-lg w-64 w-full object-cover" alt="SOS Image 1" />
      <img src="/SOS2.JPEG" class="rounded-lg w-64 w-full object-cover" alt="SOS Image 2" />
    </section>
    
    <p class="text-center p-6">
      WE ARE WELCOMING STUDENTS FROM QBROAD TOO TO COME AND STUDY IN AN INNOVATIVE SCHOOL WITH SKILLS AND KNOWLEDGE
    </p>
    
    
  </div>
</template>

<style scoped></style>
<script setup>
import navbar from '/src/components/navbar.vue'
import footer from '/src/components/footer.vue'
</script>