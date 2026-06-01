<template>
  <!-- Tourism Section -->
  <section
    class="relative py-24 bg-cover bg-center bg-fixed"
    style="background-image: url('https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=2000&q=80');"
  >
    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/75"></div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-6">

      <!-- Title -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-white mb-4">
          Discover Rwanda
        </h1>

        <p class="text-xl text-green-300">
          Explore Amazing Destinations & Unforgettable Experiences
        </p>
      </div>

      <!-- Popular Destinations -->
      <h2 class="text-4xl font-bold text-center text-white mb-10">
        Popular Destinations
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        <!-- Destination 1 -->
        <div class="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 hover:scale-105 transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            class="w-full h-56 object-cover"
            alt="Volcanoes National Park"
          />
          <div class="p-5">
            <h3 class="text-xl font-bold text-green-300 mb-2">
              Volcanoes National Park
            </h3>
            <p class="text-gray-200">
              Home of mountain gorillas and stunning volcanic scenery.
            </p>
          </div>
        </div>

        <!-- Destination 2 -->
        <div class="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 hover:scale-105 transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
            class="w-full h-56 object-cover"
            alt="Lake Kivu"
          />
          <div class="p-5">
            <h3 class="text-xl font-bold text-green-300 mb-2">
              Lake Kivu
            </h3>
            <p class="text-gray-200">
              Beautiful lakeside views, beaches, and relaxing boat rides.
            </p>
          </div>
        </div>

        <!-- Destination 3 -->
        <div class="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 hover:scale-105 transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80"
            class="w-full h-56 object-cover"
            alt="Nyungwe Forest"
          />
          <div class="p-5">
            <h3 class="text-xl font-bold text-green-300 mb-2">
              Nyungwe Forest
            </h3>
            <p class="text-gray-200">
              Ancient rainforest with chimpanzees and canopy walks.
            </p>
          </div>
        </div>

        <!-- Destination 4 -->
        <div class="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 hover:scale-105 transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
            class="w-full h-56 object-cover"
            alt="Akagera National Park"
          />
          <div class="p-5">
            <h3 class="text-xl font-bold text-green-300 mb-2">
              Akagera National Park
            </h3>
            <p class="text-gray-200">
              Safari experience with lions, elephants, and giraffes.
            </p>
          </div>
        </div>

      </div>

      <!-- Tourism Experts -->
      <h2 class="text-4xl font-bold text-center text-white mt-24 mb-10">
        Meet Our Tourism Experts
      </h2>

      <div class="grid md:grid-cols-3 gap-8">

        <!-- Expert 1 -->
        <div class="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 hover:scale-105 transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
            class="w-full h-64 object-cover"
            alt="Tour Guide"
          />
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-300 mb-3">
              Professional Tour Guides
            </h3>
            <p class="text-gray-200">
              Friendly experts ready to guide you across Rwanda safely.
            </p>
          </div>
        </div>

        <!-- Expert 2 -->
        <div class="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 hover:scale-105 transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
            class="w-full h-64 object-cover"
            alt="Travel Planner"
          />
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-300 mb-3">
              Travel Planners
            </h3>
            <p class="text-gray-200">
              We design your perfect travel itinerary from start to finish.
            </p>
          </div>
        </div>

        <!-- Expert 3 -->
        <div class="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 hover:scale-105 transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
            class="w-full h-64 object-cover"
            alt="Customer Support"
          />
          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-300 mb-3">
              Customer Support Team
            </h3>
            <p class="text-gray-200">
              Available 24/7 to assist you before and during your trip.
            </p>
          </div>
        </div>

      </div>

      <!-- Contact & Hours -->
      <div class="grid md:grid-cols-3 gap-8 mt-24">

        <div class="bg-green-700/30 backdrop-blur-lg p-6 rounded-3xl border border-white/20">
          <h3 class="text-2xl font-bold text-white mb-3">Working Hours</h3>
          <p class="text-gray-200">Monday - Friday</p>
          <p class="text-green-300 font-semibold">08:00 AM - 06:00 PM</p>
        </div>

        <div class="bg-green-700/30 backdrop-blur-lg p-6 rounded-3xl border border-white/20">
          <h3 class="text-2xl font-bold text-white mb-3">Closing Hours</h3>
          <p class="text-gray-200">Sunday</p>
          <p class="text-green-300 font-semibold">Closed</p>
        </div>

        <div class="bg-green-700/30 backdrop-blur-lg p-6 rounded-3xl border border-white/20">
          <h3 class="text-2xl font-bold text-white mb-3">Contact Us</h3>
          <p class="text-gray-200">📍 Kigali, Rwanda</p>
          <p class="text-gray-200">📞 +250 792141930</p>
          <p class="text-gray-200">✉ info@rwandatourism.rw</p>
        </div>

      </div>

    </div>
  </section>
</template>