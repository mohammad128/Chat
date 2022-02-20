<template>
    <div class="sideBar flex flex-col h-screen border-r-2 ">
        <div class="sidebarHeader">
            <SideBarHeader/>
        </div>
        <div class="sideBarContent flex-1 p-2 h-full">
            <div class="h-full">
                <SidebarContent/>
            </div>
        </div>
    </div>
</template>

<script setup>
import SideBarHeader from "@/Pages/Partials/SideBar/SideBarHeader";
import SidebarContent from "@/Pages/Partials/SideBar/SidebarContent";
</script>

<style scoped>

</style>
