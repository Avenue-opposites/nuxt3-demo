<script lang="ts" setup>
const count = ref(0);
defineExpose({
    count
});
</script>
<template>
    <div>
        <button btn @click="count++">+</button>
        <span mx-4>{{ count }}</span>
        <button btn @click="count--">-</button>
    </div>
</template>