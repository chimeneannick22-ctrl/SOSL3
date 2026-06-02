<script setup>
import { locale, setLocale, t } from '../i18n.js'
</script>

    <template>
            <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg w-full" >
                <img src="../assets/gori.png" class="h=10 w-20">
                    <div class="h-10 w-auto"></div>

                    <ul class="flex gap-6 text-sm font-medium w-full px-5 justify-end items-center">
                            <li><router-link to="/" class="hover:text-yellow-300">{{ t('nav.home') }}</router-link></li>
                            <li><router-link to="/about" class="hover:text-yellow-300">{{ t('nav.about') }}</router-link></li>
                            <li> <router-link to="/services" class="hover:text-yellow-300">{{ t('nav.services') }}</router-link></li>
                            <li class="relative group">
                                    <a href="#" class="hover:text-yellow-300">{{ t('nav.gallery') }}<span> v </span></a>
                                                                        <ul class="invsible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-green-800 text-white rounded top-2.5 shadow w-48 mt-2 z-50 left">
                                            <li><router-link to="/gallery/images" class="block px-4 py-2 hover:bg-green-700">{{ t('nav.images') }}</router-link></li>
                                            <li><router-link to="/gallery/videos" class="block px-4 py-2 hover:bg-green-700">{{ t('nav.videos') }}</router-link></li>
                                    </ul>
                            </li>
                             <li class="relative group">
                                    <a href="#" class="hover:text-yellow-300">{{ t('nav.destination') }}<span> v </span></a>
                                    <ul class="invsible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-green-800 text-white rounded top-2.5 shadow w-48 mt-2 z-50 left">
                                            <li> <router-link to="/kigali" class="block px-4 py-2 hover:bg-green-700">{{ t('nav.kigali') }}</router-link></li>
                                            <li><router-link to="/south" class="block px-4 py-2 hover:bg-green-700">{{ t('nav.south') }}</router-link></li>
                                             <li><router-link to="/west" class="block px-4 py-2 hover:bg-green-700">{{ t('nav.west') }}</router-link></li>
                                            <li><router-link to="/north" class="block px-4 py-2 hover:bg-green-700">{{ t('nav.north') }}</router-link></li>
                                            <li><router-link to="/east" class="block px-4 py-2 hover:bg-green-700">{{ t('nav.east') }}</router-link></li>
                                    </ul>
                                    </li>
                            <li> <router-link to="/contact" class="hover:text-yellow-300">{{ t('nav.contact') }}</router-link></li>

                            <!-- Language selector -->
                            <li class="ml-4">
                                <div class="flex flex-col items-end gap-2 rounded-lg border border-green-500 bg-green-900/40 p-2 text-right">
                                    <span class="text-[10px] uppercase tracking-[0.18em] text-green-200">Lang</span>
                                    <select v-model="locale.value" @change="setLocale($event.target.value)" class="bg-green-700 text-white rounded px-2 py-1 text-sm outline-none border border-green-500 focus:border-yellow-300">
                                        <option value="en">{{ t('translations.en') }}</option>
                                        <option value="fr">{{ t('translations.fr') }}</option>
                                        <option value="rw">{{ t('translations.rw') }}</option>
                                    </select>
                                </div>
                            </li>
                    </ul>
            </nav>
    </template>