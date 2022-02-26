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
                    <transition name="scale-from-top-left">
                        <div class="pl-4" v-show="showMenu">
                            <div class="w-72">
                                <Menu :data="menuItems" >
                                    <template #footer>
                                        <div class="bg-gray-100 p-2.5 flex flex-row justify-center">
                                            <span class="text-gray-500 text-sm">LaraGram v 1.1.1</span>
                                        </div>
                                    </template>
                                </Menu>
                            </div>
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

<script >

import Menu from "@/Pages/Partials/SideBar/Components/Menu/Menu";
import TextInput from "@/Pages/Component/TextInput";
export  default  {
    components: {TextInput, Menu},
    props: {
        menuItems: Array
    },
    data() {
        return {
            showMenu: false,
            search: '',
        }
    },
    watch: {
        search: function (newVal, oldVal) {
            console.log('search', newVal);
        }
    }
}


</script>

<style scoped>
</style>
