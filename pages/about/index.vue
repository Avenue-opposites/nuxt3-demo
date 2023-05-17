<script lang="ts" setup>
useHead({
    title: "About",
})
const shareState = useShareState();
const counterRef = ref();
function onClick() {
    const count = counterRef.value.count;
    shareState.value = count;
}
</script>
<template>
    <div>
        <NuxtLayout>
            <h1 py-4 text="10 green-300">About Page</h1>
            <p text="6">以下为content目录的md文件形成的组件(使用前先按照@nuxt/content)。</p>
            <p my-4>1.使用&lt;ContentDoc&gt;</p>
            <ContentDoc ml-4 path="/" />
            <p my-4>2.使用&lt;ContentDoc&gt;+&lt;ContentRenderer&gt;</p>
            <ContentDoc path="/about" v-slot="{ doc }">
                <div ml-4>
                    <h3>content slot</h3>
                    <ContentRenderer :value="doc" />
                </div>
            </ContentDoc>
            <p my-4>3.counter 组件</p>
            <Counter ref="counterRef" mt-4 />
            <p my-4>
                4.获取useState状态:
                <span mx-2 text-primary>{{ shareState }}</span>
                <button 
                btn 
                @click="onClick"
                >change</button>
            </p>  
            <h3 text-10>Grid 布局</h3>
            <Grid />
        </NuxtLayout>
    </div>
</template>