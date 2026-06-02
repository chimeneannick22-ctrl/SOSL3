<script setup>
import { t } from '../i18n.js'
</script>

<template>

<footer class="bg-green-800 text-white px-8 py-10 mt-0">
<div class="flex flex-wrap justify-between gap-8 ">

<div>
    <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ t('footer.brand') }}</h3>
        <p class="text-green-300">{{ t('footer.description') }}</p>
      </div>


<!--Quick links-->


<div>


    <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ t('footer.quickLinksTitle') }}</h3>
    <ul class="space-y-2 text-sm">
        <li>
            <RouterLink to="/" class="hover:text-yellow-300">{{ t('footer.home') }}</RouterLink>
        </li>
        <li>
            <RouterLink to="/about" class="hover:text-yellow-300">{{ t('footer.about') }}</RouterLink>
        </li>
        <li>
            <RouterLink to="/services" class="hover:text-yellow-300">{{ t('footer.services') }}</RouterLink>
        </li>
        <li>
            <RouterLink to="/contact" class="hover:text-yellow-300">{{ t('footer.contact') }}</RouterLink>
        </li>
        
    </ul>
</div>

<!--Destination-->
<div>
    <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ t('footer.destinationTitle') }}</h3>
    <ul class="space-y-2 text-sm">
<li>
    <RouterLink to="/north" class="hover:text-yellow-300">{{ t('footer.northProvince') }}</RouterLink>
</li>
<li>
    <RouterLink to="/south" class="hover:text-yellow-300">{{ t('footer.southProvince') }}</RouterLink>
</li>
<li>
    <RouterLink to="/west" class="hover:text-yellow-300">{{ t('footer.westProvince') }}</RouterLink>
</li>
<li>
    <RouterLink to="/east" class="hover:text-yellow-300">{{ t('footer.eastProvince') }}</RouterLink>
</li>
<li>
    <RouterLink to="/kigali" class="hover:text-yellow-300">{{ t('footer.kigaliProvince') }}</RouterLink>
</li>


    </ul>
</div>


<div>

    <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ t('footer.contactTitle') }}</h3>
    <ul class="space-y-2 text-green-300">
        <li>{{ t('footer.email') }}</li>
        <li>{{ t('footer.phone') }}</li>
        <li>{{ t('footer.address') }}</li>
    </ul>
</div>

<!--This is copyright-->
<div class="w-full text-center mt-8 text-sm text-green-300">
    {{ t('footer.copyright') }}
</div>
</div>

</footer>


</template>