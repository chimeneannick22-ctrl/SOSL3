<script setup>
import { t } from '../i18n.js'
</script>

<template>
    <section
        class="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style="background-image: url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1920&q=80');"
    >
        <div class="absolute inset-0 bg-black/50"></div>

        <div class="relative text-center px-4 max-w-5xl mx-auto">

            <!-- HERO TEXT -->
            <h1 class="text-5xl md:text-7xl font-bold mb-4">
                {{ t('contact.title') }}
            </h1>

            <p class="text-xl md:text-2xl mb-6 text-green-300 font-semibold">
                {{ t('contact.subtitle') }}
            </p>

            <p class="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
                {{ t('contact.description') }}
            </p>

            <!-- TAGS -->
            <div class="flex flex-wrap justify-center gap-3 mb-8">
                <span class="bg-green-600/80 px-4 py-2 rounded-full">🦍 {{ t('contact.gorillaTrekking') }}</span>
                <span class="bg-green-600/80 px-4 py-2 rounded-full">🌋 {{ t('contact.volcanoes') }}</span>
                <span class="bg-green-600/80 px-4 py-2 rounded-full">🦁 {{ t('contact.akagera') }}</span>
                <span class="bg-green-600/80 px-4 py-2 rounded-full">🌳 {{ t('contact.nyungwe') }}</span>
            </div>

            <!-- BUTTONS -->
            <div class="flex justify-center gap-4 mb-10">
                <button class="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full font-semibold">
                    {{ t('contact.exploreButton') }}
                </button>

                <button class="border-2 border-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-semibold">
                    {{ t('contact.learnMoreButton') }}
                </button>
            </div>

            <!-- CONTACT INFO SECTION -->
            <div class="bg-black/40 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20">

                <h2 class="text-2xl md:text-3xl font-bold mb-4 text-green-300">
                    {{ t('contact.supportTitle') }}
                </h2>

                <div class="grid md:grid-cols-3 gap-6 text-sm md:text-base">

                    <!-- Contact -->
                    <div>
                        <h3 class="font-bold text-white mb-2">📞 {{ t('contact.phoneLabel') }}</h3>
                        <p>{{ t('contact.phone1') }}</p>
                        <p>{{ t('contact.phone2') }}</p>
                    </div>

                    <!-- Email -->
                    <div>
                        <h3 class="font-bold text-white mb-2">✉ {{ t('contact.emailLabel') }}</h3>
                        <p>{{ t('contact.email1') }}</p>
                        <p>{{ t('contact.email2') }}</p>
                    </div>

                    <!-- Location & Hours -->
                    <div>
                        <h3 class="font-bold text-white mb-2">📍 {{ t('contact.locationLabel') }}</h3>
                        <p>{{ t('contact.office') }}</p>
                        <p>{{ t('contact.hoursWeek') }}</p>
                        <p>{{ t('contact.hoursSaturday') }}</p>
                    </div>

                </div>

                <!-- SOCIAL / SUPPORT -->
                <div class="mt-6 text-center text-gray-300">

                    <p class="mb-2">
                        💬 {{ t('contact.whatsappSupport') }}
                    </p>

                    <p>
                        {{ t('contact.followUs') }}
                        <span class="text-green-300">Facebook</span> |
                        <span class="text-green-300">Instagram</span> |
                        <span class="text-green-300">Twitter</span>
                    </p>

                </div>

            </div>

        </div>
    </section>
</template>