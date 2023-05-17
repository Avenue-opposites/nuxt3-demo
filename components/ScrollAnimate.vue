<script lang="ts" setup>
const containerRef = ref<HTMLDivElement>();
const map = new Map();
onMounted(() => {
    map.clear()
    const container = containerRef.value!;
    for(const child of container.children) {
        map.set(child, getItem(child as HTMLElement));
    }
    document.addEventListener("scroll",scrollHandler);
});
onBeforeUnmount(() => {
    document.removeEventListener("scroll",scrollHandler);
});
function getItem(item:HTMLElement) {
    const container = containerRef.value!;
    const parent = container.parentElement!;
    const c_rect = parent.getBoundingClientRect();
    const rect = item.getBoundingClientRect();
    const start = c_rect.top;
    const end = c_rect.top + c_rect.height - container.clientHeight;
    const opacity = createAnimate(0,1,start,end);
    const scale = createAnimate(0.5,1,start,end);
    const x = createAnimate(rect.width / 2,0,start,end);
    const y = createAnimate(rect.width / 2,0,start,end);
    const transform = (scroll:number) => {
        return `scale(${scale(scroll)}) translate(${x(scroll)}px,${y(scroll)}px)`;
    };
    // console.log(rect);
    return {
        opacity:(scroll:number) => opacity(scroll),
        transform
    }
}
function scrollHandler() {
    const scroll = window.scrollY;
    for(const [el,cssProp] of map) {
        for(const prop in cssProp) {
            el.style[prop] = cssProp[prop](scroll);
        }
    }
}
</script>
<template>
    <div sticky top-25% w-h-full ref="containerRef">
        <slot />
    </div>
</template>