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
                TOURISM SERVICES
            </h1>

            <p class="text-2xl text-green-300 font-semibold mb-4">
                Explore Rwanda's Natural Beauty
            </p>

            <p class="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
                Discover breathtaking landscapes, mountain gorillas, wildlife safaris,
                cultural heritage sites, hiking adventures, and unforgettable travel
                experiences across the Land of a Thousand Hills.
            </p>

            <!-- Service Cards -->
            <div class="grid md:grid-cols-3 gap-6 mb-10">

                <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:scale-105 transition">
                    <h3 class="text-2xl font-bold text-green-300 mb-3">
                        Wildlife Tours
                    </h3>
                    <p class="text-gray-200">
                        Guided gorilla trekking, safari adventures, bird watching,
                        and visits to Rwanda's national parks.
                    </p>
                </div>

                <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:scale-105 transition">
                    <h3 class="text-2xl font-bold text-green-300 mb-3">
                        Cultural Experiences
                    </h3>
                    <p class="text-gray-200">
                        Traditional dance performances, local community visits,
                        museums, and historical site tours.
                    </p>
                </div>

                <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:scale-105 transition">
                    <h3 class="text-2xl font-bold text-green-300 mb-3">
                        Adventure Activities
                    </h3>
                    <p class="text-gray-200">
                        Mountain hiking, cycling trails, boat trips,
                        camping, and nature exploration.
                    </p>
                </div>

            </div>

            <!-- Information Section -->
            <div class="grid md:grid-cols-3 gap-6">

                <!-- Working Hours -->
                <div class="bg-green-700/30 backdrop-blur-md p-6 rounded-2xl">
                    <h3 class="text-2xl font-bold mb-3">
                        Opening Hours
                    </h3>

                    <p>Monday - Friday</p>
                    <p class="font-semibold text-green-300">
                        08:00 AM - 06:00 PM
                    </p>

                    <p class="mt-3">Saturday</p>
                    <p class="font-semibold text-green-300">
                        09:00 AM - 04:00 PM
                    </p>
                </div>

                <!-- Closing Hours -->
                <div class="bg-green-700/30 backdrop-blur-md p-6 rounded-2xl">
                    <h3 class="text-2xl font-bold mb-3">
                        Closing Schedule
                    </h3>

                    <p>Sunday</p>
                    <p class="font-semibold text-green-300">
                        Closed
                    </p>

                    <p class="mt-3">
                        Public holidays may have adjusted operating hours.
                    </p>
                </div>

                <!-- Contact Info -->
                <div class="bg-green-700/30 backdrop-blur-md p-6 rounded-2xl">
                    <h3 class="text-2xl font-bold mb-3">
                        Contact Us
                    </h3>

                    <p>📍 Kigali, Rwanda</p>
                    <p>📞 +250 788 123 456</p>
                    <p>✉ info@rwandatourism.rw</p>
                    <p>🌐 www.rwandatourism.rw</p>
                </div>

            </div>

            <!-- Buttons -->
            <div class="mt-10 flex flex-wrap justify-center gap-4">
                <button
                    class="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-xl font-semibold shadow-lg transition duration-300"
                >
                    Book Your Tour
                </button>

                <button
                    class="border-2 border-white hover:bg-white hover:text-black px-8 py-3 rounded-xl font-semibold transition duration-300"
                >
                    Explore Destinations
                </button>
            </div>

        </div>
    </section>
</template>