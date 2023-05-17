<script lang="ts" setup>
definePageMeta({
    layout: "document",
})
//设置页面标题
useHead({
    title: "Home",
})
const { $greet } = useNuxtApp()
const shareState = useShareState("Nuxt3");
const greet_Mosh = $greet("Mosh");
const count = ref(0);
const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-orange-500",
    "bg-green-500",
    "bg-primary",
    "bg-purple-500",
    "bg-pink-500"
];


function getRadomElement<T>(elements: T[]) {
    return elements[random(0, elements.length - 1)];
}

</script>
<template>
    <div h-3000>
        <NuxtLayout>
            <template #header>
                <h1 my-4 text="10 green-300">Home Page.</h1>
            </template>
            <template #main>
                    <h2 text="20" w-120>易懂的Web框架</h2>
                    <p text="6" w-120>使用Nuxt自信地构建下一个Vue.js应用程序。一个在MIT许可下的开源框架，使web开发简单而强大。</p>
                    <p my-4>
                        <input 
                        v-model="shareState"
                        focus:outline="2 solid primary" 
                        border-none rounded-1 text="4" p-2 
                        type="text" />
                        使用useState可以共享状态
                    </p>
                    <button @click="greet_Mosh" btn>greet</button>
            </template>
            <template #footer>
                    <div h-2000 mt-10>
                        <ScrollAnimate grid="~ cols-5 gap-4 justify-items-center">
                            <div w-h-10 rounded :class="getRadomElement(colors)" v-for="i in 20" />
                        </ScrollAnimate>
                    </div>
                    <h1 mt-20 text="30 center">精美绝伦</h1>
            </template>
        </NuxtLayout>
        <div ml-16>
        </div>
    </div>
</template>