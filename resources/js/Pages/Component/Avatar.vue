<template>
    <div class="w-14 h-14 rounded-full overflow-hidden"
         :style="styles">
        <img class="h-full w-full" :src="src" alt="!">
    </div>
</template>

<script setup>
import {reactive} from "vue";

let props = defineProps({
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
    },
    borderRadius: {
        default: null,
        type: String
    }
})
let styles = reactive({width: props.size.w+'px',height: props.size.h+'px' })

if (props.borderRadius) {
    styles.borderRadius = props.borderRadius+"px";
}

</script>

<style scoped>

</style>
