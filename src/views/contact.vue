<template>
    <section
        class="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style="background-image: url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1920&q=80');"
    >
        <div class="absolute inset-0 bg-black/50"></div>

        <div class="relative text-center px-4 max-w-5xl mx-auto">

            <!-- HERO TEXT -->
            <h1 class="text-5xl md:text-7xl font-bold mb-4">
                WELCOME TO RWANDA
            </h1>

            <p class="text-xl md:text-2xl mb-6 text-green-300 font-semibold">
                LAND OF A THOUSAND HILLS
            </p>

            <p class="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
                Discover breathtaking landscapes, mountain gorillas,
                vibrant culture, and unforgettable adventures in the heart of Africa.
            </p>

            <!-- TAGS -->
            <div class="flex flex-wrap justify-center gap-3 mb-8">
                <span class="bg-green-600/80 px-4 py-2 rounded-full">🦍 Gorilla Trekking</span>
                <span class="bg-green-600/80 px-4 py-2 rounded-full">🌋 Volcanoes National Park</span>
                <span class="bg-green-600/80 px-4 py-2 rounded-full">🦁 Akagera Safaris</span>
                <span class="bg-green-600/80 px-4 py-2 rounded-full">🌳 Nyungwe Forest</span>
            </div>

            <!-- BUTTONS -->
            <div class="flex justify-center gap-4 mb-10">
                <button class="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full font-semibold">
                    Explore Rwanda
                </button>

                <button class="border-2 border-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-semibold">
                    Learn More
                </button>
            </div>

            <!-- CONTACT INFO SECTION -->
            <div class="bg-black/40 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20">

                <h2 class="text-2xl md:text-3xl font-bold mb-4 text-green-300">
                    Contact Rwanda Tourism Support
                </h2>

                <div class="grid md:grid-cols-3 gap-6 text-sm md:text-base">

                    <!-- Contact -->
                    <div>
                        <h3 class="font-bold text-white mb-2">📞 Phone</h3>
                        <p>+250 788 123 456</p>
                        <p>+250 722 456 789</p>
                    </div>

                    <!-- Email -->
                    <div>
                        <h3 class="font-bold text-white mb-2">✉ Email</h3>
                        <p>info@rwandatourism.rw</p>
                        <p>support@visitrwanda.rw</p>
                    </div>

                    <!-- Location & Hours -->
                    <div>
                        <h3 class="font-bold text-white mb-2">📍 Location & Hours</h3>
                        <p>Kigali Tourism Office</p>
                        <p>Mon - Fri: 08:00 - 18:00</p>
                        <p>Sat: 09:00 - 14:00</p>
                    </div>

                </div>

                <!-- SOCIAL / SUPPORT -->
                <div class="mt-6 text-center text-gray-300">

                    <p class="mb-2">
                        💬 WhatsApp Support: +250 788 123 456
                    </p>

                    <p>
                        Follow us:
                        <span class="text-green-300">Facebook</span> |
                        <span class="text-green-300">Instagram</span> |
                        <span class="text-green-300">Twitter</span>
                    </p>

                </div>

            </div>

        </div>
    </section>
</template>