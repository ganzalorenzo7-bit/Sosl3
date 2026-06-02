<script setup></script>
import { ref } from vue
<template>
    <div class="flex items-center justify-center bg-green-100 min-h-screen">
<div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
<h2 class="text-2xl font-bold text-green-800 mb-6 text-center">Register</h2>

<form class="flex flex-col gap-4">
    <input v-model="name" type="text" placeholder="Enter Full Name" required
class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"/>

    <input v-model="age" type="number" placeholder="Enter your age" required
class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"/>

    <input v-model="gender" type="text" placeholder="Enter your gender" required
class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"/>

    <input v-model="phone" type="tel" placeholder="Enter your phone number" required
class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"/>

    <input v-model="email" type="email" placeholder="Please enter user email" required
class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"/>

<input v-model="password" type="password" placeholder="Enter password" required
class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"/>
<input v-model="password" type="password" placeholder="Confirm password" required
class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"/>

<button type="submit"
class="bg-green-800 text-white py-2 rounded hover:bg-green-700 font-semibold">Register</button>
</form>
<p class="text-sm text-gray-600 mt-4 text-gray-600 text-center">
    Already have an account? Please login here
    <RouterLink to="/login" class="text-green-700 font-semibold hover:underline">Login</RouterLink>
    </p>
</div>
    </div>


</template>