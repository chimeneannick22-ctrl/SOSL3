<script setup>
import { ref } from 'vue'

const name = ref('')
const age = ref('')
const gender = ref('')
const email = ref('')
const phone = ref('')
const location = ref('')
const password = ref('')
const confirmPassword = ref('')
</script>

<template>
  <div
    class="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-10"
    style="background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600');"
  >
    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/50 z-0"></div>

    <!-- Registration Form -->
    <div
      class="relative z-10 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-2xl"
    >
      <h1 class="text-4xl font-bold text-center text-green-800 mb-2">
        Create Account
      </h1>

      <p class="text-center text-gray-600 mb-8">
        Join Rwanda Tourism and start exploring amazing destinations.
      </p>

      <form class="grid md:grid-cols-2 gap-5">
        <!-- Full Name -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            v-model="name"
            type="text"
            placeholder="Enter your full name"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <!-- Age -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Age
          </label>
          <input
            v-model="age"
            type="number"
            placeholder="Enter your age"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <!-- Gender -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Gender
          </label>
          <select
            v-model="gender"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <!-- Phone Number -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            v-model="phone"
            type="tel"
            placeholder="+250 xxx xxx xxx"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <!-- Location -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <input
            v-model="location"
            type="text"
            placeholder="Enter your location"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <!-- Password -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            v-model="password"
            type="password"
            placeholder="Create password"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <!-- Confirm Password -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Confirm Password
          </label>
          <input
            v-model="confirmPassword"
            type="password"
            placeholder="Confirm password"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <!-- Terms -->
        <div class="md:col-span-2">
          <label class="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" required />
            I agree to the Terms and Conditions
          </label>
        </div>

        <!-- Register Button -->
        <div class="md:col-span-2">
          <button
            type="submit"
            class="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition duration-300 shadow-lg"
          >
            Create Account
          </button>
        </div>
      </form>

      <p class="text-center text-gray-600 mt-6">
        Already have an account?
        <router-link
          to="/login"
          class="text-green-700 font-semibold hover:underline"
        >
          Sign In
        </router-link>
      </p>
    </div>
  </div>
</template>