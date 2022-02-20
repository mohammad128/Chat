<template>
    <div class="w-14 h-14 rounded-full overflow-hidden">
        <img class="h-full w-full" :src="src" alt="!">
    </div>
</template>

<script setup>
defineProps({
    src: {
        type: String,
        default: 'https://ui-avatars.com/api/?name=T&color=7F9CF5&background=EBF4FF'
    }
})
</script>

<style scoped>

</style>
