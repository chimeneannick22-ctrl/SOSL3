<script setup>
import { t } from '../i18n.js'
</script>

<template>
    <!-- Hero Section -->
    <section
        class="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white py-20"
        style="background-image: url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80');"
    >
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/65"></div>

        <!-- Content -->
        <div class="relative z-10 text-center px-6 max-w-6xl">

            <h1 class="text-5xl md:text-7xl font-bold mb-4">
                {{ t('services.title') }}
            </h1>

            <p class="text-2xl text-green-300 font-semibold mb-4">
                {{ t('services.subtitle') }}
            </p>

            <p class="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
                {{ t('services.description') }}
            </p>

            <!-- Service Cards -->
            <div class="grid md:grid-cols-3 gap-6 mb-10">

                <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:scale-105 transition">
                    <h3 class="text-2xl font-bold text-green-300 mb-3">
                        {{ t('services.wildlifeTours.title') }}
                    </h3>
                    <p class="text-gray-200">
                        {{ t('services.wildlifeTours.description') }}
                    </p>
                </div>

                <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:scale-105 transition">
                    <h3 class="text-2xl font-bold text-green-300 mb-3">
                        {{ t('services.culturalExperiences.title') }}
                    </h3>
                    <p class="text-gray-200">
                        {{ t('services.culturalExperiences.description') }}
                    </p>
                </div>

                <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:scale-105 transition">
                    <h3 class="text-2xl font-bold text-green-300 mb-3">
                        {{ t('services.adventureActivities.title') }}
                    </h3>
                    <p class="text-gray-200">
                        {{ t('services.adventureActivities.description') }}
                    </p>
                </div>

            </div>

            <!-- Information Section -->
            <div class="grid md:grid-cols-3 gap-6">

                <!-- Working Hours -->
                <div class="bg-green-700/30 backdrop-blur-md p-6 rounded-2xl">
                    <h3 class="text-2xl font-bold mb-3">
                        {{ t('services.openingHoursTitle') }}
                    </h3>

                    <p>{{ t('services.weekdays') }}</p>
                    <p class="font-semibold text-green-300">
                        {{ t('services.weekdayHours') }}
                    </p>

                    <p class="mt-3">{{ t('services.saturday') }}</p>
                    <p class="font-semibold text-green-300">
                        {{ t('services.saturdayHours') }}
                    </p>
                </div>

                <!-- Closing Hours -->
                <div class="bg-green-700/30 backdrop-blur-md p-6 rounded-2xl">
                    <h3 class="text-2xl font-bold mb-3">
                        {{ t('services.closingTitle') }}
                    </h3>

                    <p>{{ t('services.sunday') }}</p>
                    <p class="font-semibold text-green-300">
                        {{ t('services.closed') }}
                    </p>

                    <p class="mt-3">
                        {{ t('services.holidayNote') }}
                    </p>
                </div>

                <!-- Contact Info -->
                <div class="bg-green-700/30 backdrop-blur-md p-6 rounded-2xl">
                    <h3 class="text-2xl font-bold mb-3">
                        {{ t('services.contactUsTitle') }}
                    </h3>

                    <p>{{ t('services.locationText') }}</p>
                    <p>{{ t('services.phoneText') }}</p>
                    <p>{{ t('services.emailText') }}</p>
                    <p>{{ t('services.contactWebsite') }}</p>
                </div>

            </div>

            <!-- Buttons -->
            <div class="mt-10 flex flex-wrap justify-center gap-4">
                <button
                    class="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-xl font-semibold shadow-lg transition duration-300"
                >
                    {{ t('services.bookTour') }}
                </button>

                <button
                    class="border-2 border-white hover:bg-white hover:text-black px-8 py-3 rounded-xl font-semibold transition duration-300"
                >
                    {{ t('services.exploreDestinations') }}
                </button>
            </div>

        </div>
    </section>
</template>