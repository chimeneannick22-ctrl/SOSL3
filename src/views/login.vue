<script setup>
import { ref } from 'vue'

const Email = ref('')
const Password = ref('')
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
    style="background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600');"
  >
    <div class="absolute inset-0 bg-black/50"></div>

    <div
      class="relative bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md"
    >
      <h2 class="text-3xl font-bold text-green-800 text-center mb-2">
        Welcome Back
      </h2>

      <p class="text-center text-gray-600 mb-8">
        Sign in to continue exploring Rwanda Tourism
      </p>

      <form class="flex flex-col gap-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>

          <input
            v-model="Email"
            type="email"
            placeholder="Enter your email"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>

          <input
            v-model="Password"
            type="password"
            placeholder="Enter your password"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition"
          />
        </div>

        <div class="flex justify-between text-sm">
          <label class="flex items-center gap-2 text-gray-600">
            <input type="checkbox" />
            Remember me
          </label>

          <a href="#" class="text-green-700 hover:text-green-900">
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          class="bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition duration-300 shadow-lg"
        >
          Sign In
        </button>
      </form>

      <p class="text-center text-sm mt-6 text-gray-600">
        Don't have an account?
        <router-link
          to="/register"
          class="text-green-700 font-semibold hover:underline"
        >
          Register
        </router-link>
      </p>
    </div>
  </div>
</template>