<template> 
<footer class="bg-green-800 text-white px-8 py-10 mt-3">

<div class="flex flex-wrap justify-between gap-8">
<div >

<h3 class="text-yellow-300 font-bold text-lg mb-3">TEMBERA U RWANDA</h3>
<p class="text-sm text-green-200">Discover the beauty of a thousand hills</p>
</div>
<!-- Quick links -->
<div>
<h3 class="text-yellow-300 font-bold text-lg mb-3 text-right">Quick Links</h3>
<ul class="space-y-2 text-sm text-right">
    <li>
        <RouterLink to="/" class="hover:text-yellow-300 ">Home</RouterLink>
    </li>
    <li>
        <RouterLink to="/about" class="hover:text-yellow-300 ">About</RouterLink>
    </li>
    <li>
        <RouterLink to="/services" class="hover:text-yellow-300 ">Services</RouterLink>
    </li>
    <li>
        <RouterLink to="/contact" class="hover:text-yellow-300 ">Contact</RouterLink>
    </li>
</ul>
</div>
<div>
    <h3 class ="text-yellow-300 font-bold text-lg mb-3">Destinations</h3>
    <ul class="space-y-2 text-sm">
        <li>
        <RouterLink to="/" class="hover:text-yellow-300 ">Northern province</RouterLink></li>
        <li>
            <RouterLink to="/" class="hover:text-yellow-300 ">Southern province</RouterLink></li>
            <li>
                <RouterLink to="/" class="hover:text-yellow-300 ">Eastern province</RouterLink></li>
                <li>
                    <RouterLink to="/" class="hover:text-yellow-300 ">Western province</RouterLink></li>
                    <li>
                        <RouterLink to="/" class="hover:text-yellow-300 ">Kigali city</RouterLink></li>
                    </ul>
</div>
<div>
<h3 class="text-yellow-300 font-bold text-lg mb-3">Contacts</h3>
<ul class="space-y-2 text-green-300 text-sm">
    <li>ahantunyaburanga@gmail.com</li>
    <li>+0788569596</li>
    <li>Kagugu Kigali Rwanda</li>
</ul>
</div>
</div>

<!-- place for copyright -->
 <div class="border-t border-green-600 mt-8 pt-4 text-sm text-green-300">
<p class="text-center"> made by GANZA Lorenzo Anyiega.</p>  
 </div>

</footer>
</template>
