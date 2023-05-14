<script lang="ts" setup>

</script>
<template>
  <section>
    <nav px-20 py-5 relative flex="~" items-center>
      <a href="https://nuxt.com.cn/">
        <h1 mr-80 text="8" inline-flex="~" items-center>
          <img mr-2 w-8 h-8 src="~/public/favicon.ico" alt="Nuxt">
          Nuxt3
        </h1>
      </a>
      <NuxtLink to="/" mr-8 text-6 no-underline>Home</NuxtLink>
      <NuxtLink to="/about" text-6 no-underline>About</NuxtLink>
      <button 
      @click="toggleMode()" 
      text-6 absolute
      right-10%  top-50% 
      transform -translate-y-50%
        :class="isDark ? 'i-mdi:white-balance-sunny' : 'i-mdi:weather-night'" />
    </nav>
    <NuxtPage />
  </section>
</template>
