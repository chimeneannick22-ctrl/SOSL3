<script setup>
import { locale, setLocale, t } from '../i18n.js'
</script>

    <template>
            <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg w-full" >
                <img src="../assets/gori.png" class="h=10 w-20">
                    <div class="h-10 w-auto"></div>

                    <ul class="flex gap-6 text-sm font-medium w-full px-5 justify-end items-center">
                            <li><router-link to="/" class="hover:text-yellow-300">{{ t('home') }}</router-link></li>
                            <li><router-link to="/about" class="hover:text-yellow-300">{{ t('about') }}</router-link></li>
                            <li> <router-link to="/services" class="hover:text-yellow-300">{{ t('services') }}</router-link></li>
                            <li class="relative group">
                                    <a href="#" class="hover:text-yellow-300">{{ t('gallery') }}<span> v </span></a>
                                                                        <ul class="invsible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-green-800 text-white rounded top-2.5 shadow w-48 mt-2 z-50 left">
                                            <li><router-link to="/gallery/images" class="block px-4 py-2 hover:bg-green-700">{{ t('images') }}</router-link></li>
                                            <li><router-link to="/gallery/videos" class="block px-4 py-2 hover:bg-green-700">{{ t('videos') }}</router-link></li>
                                    </ul>
                            </li>
                             <li class="relative group">
                                    <a href="#" class="hover:text-yellow-300">{{ t('destination') }}<span> v </span></a>
                                    <ul class="invsible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-green-800 text-white rounded top-2.5 shadow w-48 mt-2 z-50 left">
                                            <li> <router-link to="/kigali" class="block px-4 py-2 hover:bg-green-700">Kigali</router-link></li>
                                            <li><router-link to="/south" class="block px-4 py-2 hover:bg-green-700">South</router-link></li>
                                             <li><router-link to="/west" class="block px-4 py-2 hover:bg-green-700">West</router-link></li>
                                            <li><router-link to="/north" class="block px-4 py-2 hover:bg-green-700">North </router-link></li>
                                            <li><router-link to="/east" class="block px-4 py-2 hover:bg-green-700">East</router-link></li>
                                    </ul>
                                    </li>
                            <li> <router-link to="/contact" class="hover:text-yellow-300">{{ t('contact') }}</router-link></li>

                            <!-- Language selector -->
                                                        <li class="ml-4">
                                                                <select v-model="locale" @change="setLocale($event.target.value)" class="bg-green-700 text-white rounded px-2 py-1 text-sm">
                                    <option value="en">EN</option>
                                    <option value="fr">FR</option>
                                    <option value="rw">RW</option>
                                </select>
                            </li>
                    </ul>
            </nav>
    </template>