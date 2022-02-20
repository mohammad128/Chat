<template>
    <div class="w-full">
        <div class="flex flex-row px-4 py-2 gap-2">
            <button v-wave class="bg-white rounded-full p-2 text-gray-500">
                <mdicon name="menu" />
            </button>


            <TextInput v-model="search" class="flex-1" type="search">
                <template #icon>
                    <mdicon name="magnify" />
                </template>
            </TextInput>

        </div>
    </div>
</template>

<script setup>
import TextInput from "@/Pages/Component/TextInput";
import {reactive, ref, watch} from "vue";

const search = ref('');
watch(search, function (newVal, oldVal) {
    console.log('search', newVal);
})


</script>

<style scoped>

</style>
