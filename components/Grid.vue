<template>
    <div grid="~ cols-3 gap-4">
        <div row-span-3 flex="~ items-center justify-center" text="10 center" bg-primary rounded>-1</div>
        <div v-for="i in 10" text="10 center" bg-primary rounded>{{ i }}</div>
    </div>
</template>