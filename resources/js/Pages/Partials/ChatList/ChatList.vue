<template>
    <div>
        <chat-list-item v-for="(item, index) in data" :key="index" :data="item"/>
    </div>
</template>

<script setup>

import ChatListItem from "@/Pages/Partials/ChatList/ChatListItem";

defineProps({
    data: {
        type: Object,
        default: null,
    }

})

</script>

<style scoped>

</style>
