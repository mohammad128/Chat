<template>
    <div class="h-full bg-white rounded-lg shadow-2xl ring-2 ring-gray-200" v-if="data">
        <div :class="containerClass">
            <MenuItem v-for="(item, index) in data" :key="index" :data="item"></MenuItem>
        </div>
        <slot name="footer">
        </slot>
    </div>
</template>

<script >
import MenuItem from "@/Pages/Partials/SideBar/Components/Menu/MenuItem";
export default {
    components: {
        MenuItem,
    },
    props: {
        data: {
            type: Object,
            default: null
        },
        containerClass: {
            default: 'pt-2',
            type: String
        }
    },
}
</script>

<style scoped>

</style>
