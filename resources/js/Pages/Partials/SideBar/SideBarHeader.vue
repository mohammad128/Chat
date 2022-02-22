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

<script setup>
import TextInput from "@/Pages/Component/TextInput";
import {reactive, ref, watch} from "vue";
import Menu from "@/Pages/Partials/SideBar/Components/Menu/Menu";

let showMenu = ref(false);
const search = ref('');
watch(search, function (newVal, oldVal) {
    console.log('search', newVal);
})



let menuItems = reactive([
    {
        'type': 'button',
        'id': 1,
        'icon': 'bookmark-outline',
        'text': 'Saved Messages',
        'textColor': '#111827',
        'iconColor': '#4b5563',
        action: function () {
            alert('Locout')
        }
    },
    {
        'type': 'button',
        'id': 2,
        'icon': 'account-outline',
        'text': 'Contact',
        'textColor': '#111827',
        'iconColor': '#4b5563',
        action: function () {
            alert('Locout')
        }
    },
    {
        'type': 'button',
        'id': 3,
        'icon': 'cog-outline',
        'text': 'Settings',
        'textColor': '#111827',
        'iconColor': '#4b5563',
        action: function () {
            alert('Locout')
        }
    },
    {
        'id': 4,
        'type': 'switch',
        'active': true,
        'icon': 'weather-night',
        'text': 'Dark Mode',
        'textColor': '#111827',
        'iconColor': '#4b5563',
        action: function () {
            alert('Locout')
        }
    },
    {
        'type': 'button',
        'id': 3,
        'icon': 'bug-outline',
        'text': 'Report Bug',
        'textColor': '#111827',
        'iconColor': '#4b5563',
        action: function () {
            alert('Locout')
        }
    },
    {
        'type': 'button',
        'id': 3,
        'icon': 'github',
        'text': 'Github',
        'textColor': '#111827',
        'iconColor': '#4b5563',
        action: function () {
            alert('Locout')
        }
    },
    {
        'type': 'button',
        'id': 3,
        'icon': 'information-outline',
        'text': 'About',
        'textColor': '#111827',
        'iconColor': '#4b5563',
        action: function () {
            alert('Locout')
        }
    },
    {
        'type': 'button',
        'id': 3,
        'icon': 'logout',
        'text': 'Logout',
        'textColor': '#dc2626',
        'iconColor': '#ef4444',
        action: function () {
            alert('Locout')
        }
    },
])
</script>

<style scoped>
</style>
