<template>
    <div class="sideBar flex flex-col h-full border-r-2 border-gray-200 ">
        <div class="sidebarHeader">
            <SideBarHeader/>
        </div>
        <div class="sideBarContent flex-1 p-2 overflow-y-auto">
            <SidebarContent/>
        </div>
    </div>
</template>

<script setup>
import SideBarHeader from "@/Pages/Partials/SideBar/SideBarHeader";
import SidebarContent from "@/Pages/Partials/SideBar/SidebarContent";
</script>

<style scoped>

</style>
