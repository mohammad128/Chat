<template>
    <div class="w-14 h-14 rounded-full overflow-hidden" :style="{width: size.w+'px',height: size.h+'px',}">
        <img class="h-full w-full" :src="src" alt="!">
    </div>
</template>

<script setup>
defineProps({
    src: {
        type: String,
        default: 'https://ui-avatars.com/api/?name=T&color=7F9CF5&background=EBF4FF'
    },
    size: {
        type: Object,
        default: {
            w: 56,
            h: 56
        }
    }
})
</script>

<style scoped>

</style>
