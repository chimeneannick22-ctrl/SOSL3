<script setup lang="ts">
</script>

  <template>
      <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg w-full" >
        <img src="../assets/gori.png" class="h=10 w-20">
          <div class="h-10 w-auto"></div>

          <ul class="flex gap-8 text-sm font-medium w-full px-5 justify-end">
              <li><router-link to="/" class="hover:text-yellow-300">Home</router-link></li>
              <li><router-link to="/about" class="hover:text-yellow-300">About</router-link></li>
              <li> <router-link to="/services" class="hover:text-yellow-300">Services</router-link></li>
              <li class="relative group">
                  <a href="#" class="hover:text-yellow-300">Gallery<span> v </span></a>
                                    <ul class="invsible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-green-800 text-white rounded top-2.5 shadow w-48 mt-2 z-50 left">
                      <li><router-link to="/views/images" class="block px-4 py-2 hover:bg-green-700">Images</router-link></li>
                      <li><router-link to="/gallery/videos" class="block px-4 py-2 hover:bg-green-700">Videos</router-link></li>
                  </ul>
              </li>
               <li class="relative group">
                  <a href="#" class="hover:text-yellow-300">Destination<span> v </span></a>
                  <ul class="invsible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-green-800 text-white rounded top-2.5 shadow w-48 mt-2 z-50 left">
                      <li> <router-link to="/kigali" class="block px-4 py-2 hover:bg-green-700">Kigali</router-link></li>
                      <li><router-link to="/south" class="block px-4 py-2 hover:bg-green-700">South</router-link></li>
                       <li><router-link to="/west" class="block px-4 py-2 hover:bg-green-700">West</router-link></li>
                      <li><router-link to="/north" class="block px-4 py-2 hover:bg-green-700">North </router-link></li>
                      <li><router-link to="/east" class="block px-4 py-2 hover:bg-green-700">East</router-link></li>
                  </ul>
                  </li>
              <li> <router-link to="/contact" class="hover:text-yellow-300">Contact</router-link></li>
          </ul>
      </nav>
  </template>