<template>
    <div class="w-72 h-full h-96 bg-white rounded-lg shadow-2xl ring-2 ring-gray-200 py-2">
        <MenuItem v-for="(item, index) in menuItems" :key="index" :data="item"></MenuItem>
    </div>
</template>

<script setup>
import {reactive} from "vue";
import MenuItem from "@/Pages/Partials/SideBar/Components/Menu/MenuItem";

let menuItems = reactive([
    {
        'type': 'button',
        'id': 1,
        'icon': 'bookmark-outline',
        'text': 'Saved Messages',
        'textColor': '#000',
    },
    {
        'type': 'button',
        'id': 2,
        'icon': 'account-outline',
        'text': 'Contact',
        'textColor': '#000',
    },
    {
        'type': 'button',
        'id': 3,
        'icon': 'cog-outline',
        'text': 'Settings',
        'textColor': '#000',
    },
    {
        'id': 4,
        'type': 'switch',
        'active': true,
        'icon': 'weather-night',
        'text': 'Dark Mode',
        'textColor': '#000',
    },
    {
        'type': 'button',
        'id': 3,
        'icon': 'bug-outline',
        'text': 'Report Bug',
        'textColor': '#000',
    },
    {
        'type': 'button',
        'id': 3,
        'icon': 'information-outline',
        'text': 'About',
        'textColor': '#000',
    },
])
</script>

<style scoped>

</style>
