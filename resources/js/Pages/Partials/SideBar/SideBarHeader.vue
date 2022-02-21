<template>
    <div class="w-full">
        <div class="flex flex-row pl-4 pr-6 py-2 gap-2">
            <Popper arrow offsetDistance="4"
                    @open:popper="showMenu=true"
                    @close:popper="showMenu=false" >
                <button v-wave class="bg-white rounded-full p-2 text-gray-500 hover:bg-gray-100">
                    <mdicon name="menu" />
                </button>
                <template #content="{ close }">
                    <transition name="bounce">
                        <div class="pl-4" v-show="showMenu">
                            <Menu />
                        </div>
                    </transition>
                </template>
            </Popper>
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
import Menu from "@/Pages/Partials/SideBar/Components/Menu/Menu";

let showMenu = ref(false);
const search = ref('');
watch(search, function (newVal, oldVal) {
    console.log('search', newVal);
})


</script>

<style scoped>
.bounce-enter-active {
    animation: bounce-in 0.2s ease-in-out;
}
.bounce-leave-active {
    animation: bounce-in 0.2s ease-in-out reverse;
}
@keyframes bounce-in {
    0% {
        transform-origin: top left;
        opacity: .5;
        transform: scale(.5);
    }
    100% {
        opacity: 1;
        transform-origin: top left;
        transform: scale(1);
    }
}
</style>
