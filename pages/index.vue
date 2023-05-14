<script lang="ts" setup>
import { Fragment } from "vue";
definePageMeta({
    layout: "document",
})
//设置页面标题
useHead({
    title: "Home",
})
</script>
<template>
    <div>
        <NuxtLayout>
            <template #header>
                <h1 my-4 text="10 green-300">Home Page.</h1>
            </template>
                <template #main>
                    <h2 text="20" w-120>易懂的Web框架</h2>
                </template>
                <template #footer>
                    <p text="6" w-120>使用Nuxt自信地构建下一个Vue.js应用程序。一个在MIT许可下的开源框架，使web开发简单而强大。</p>
                </template>
        </NuxtLayout>
    </div>
</template>