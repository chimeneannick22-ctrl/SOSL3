<script setup>
import { ref } from 'vue'
const Email = ref('')
const Passwaord = ref('')
</script>
<template>
    <div class="flex item-center  justify-center bg-green-100 main-h-screen">
        <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 class="text-2x1 font-bold text-green-800 mb-6 text-center">Login</h2>
            <form class="flex flex-col gap-4">
                <input v-model="Email" type="email" placeholder="Please enter user email" required
                class="border border-gray-300 rounded px-4 py-2 focus:outline.one focus:border-green-600"/>

                  <input v-model="Passwaord" type="password" placeholder="Please enter password" required
                class="border border-gray-300 rounded px-4 py-2 focus:outline.one focus:border-green-600"/>

                <button type="submit"
                class="bg-green-800 text-white py02 rounded hover:bg-green-700 font-semibold">Sign in</button>
            </form>
            <p class="text-center text-sm mt-4 text-grey-600">
                    Dont have account? Please create it here

                    <!-- <RouterLink to="/register" class="text-green-700 font-semibold hover:undreline">Register</RouterLink> -->
                </p>

        </div>
    </div>
    </template>