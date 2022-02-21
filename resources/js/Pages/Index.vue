<template>
    <div class="w-full h-screen min-h-screen max-h-screen flex flex-row">
        <div class="w-[420px] h-full">
            <SideBar/>
        </div>
        <div class="flex-1 h-full">
            <div class="p-4">
            </div>
        </div>
    </div>
</template>

<script setup>
import SideBar from "@/Pages/Partials/SideBar/SideBar";
import Switch from "@/Pages/Component/Switch";
import {ref} from "vue";


</script>

<style scoped>

</style>
