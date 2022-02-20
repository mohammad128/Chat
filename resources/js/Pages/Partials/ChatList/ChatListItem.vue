<template>
    <div class="flex flex-row w-full gap-2 p-2 rounded-lg hover:bg-gray-100" v-if="data">
        <Avatar class="grow grow-0" :src="data.profile_photo_url"/>
        <div class="flex flex-col flex-1">
            <div class="flex flex-row justify-between">
                <span class="font-bold text-black flex-1">{{data.name}}</span>
                <span class="text-xs text-gray-400">{{data.last_message.time}}</span>
            </div>
            <div class="flex flex-row">
                <div class="flex-1 text-sm text-gray-600">{{data.last_message.message}}</div>
                <span class="text-sm px-2 py-1 bg-gray-300 text-white rounded-xl">{{data.unread_message_count}}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import Avatar from "@/Pages/Component/Avatar";

defineProps({
    data: {
        type: Object,
        default: null
    }
})

</script>

<style scoped>

</style>
