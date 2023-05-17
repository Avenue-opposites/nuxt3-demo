<script lang="ts" setup>
// const response = await useFetch('/api/banner')
// console.log(response)
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
      <NuxtLink active-class="text-primary font-bold" to="/" mr-8 text-6 no-underline hover:text-primary>
        Home
      </NuxtLink>
      <NuxtLink active-class="text-primary font-bold" to="/about" text-6 no-underline hover:text-primary>
        About
      </NuxtLink>
      <button
        text-6
        absolute right-10%
        top-50% transform
        -translate-y-50% :class="isDark ? 'i-mdi:white-balance-sunny' : 'i-mdi:weather-night'"
        @click="toggleMode()"
      />
    </nav>
    <NuxtPage />
  </section>
</template>
