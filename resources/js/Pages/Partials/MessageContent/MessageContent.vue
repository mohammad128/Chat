<template>
        <AsideSwitcher v-model="aside">
            <div class="messageContent flex flex-col flex-1">
                <div class="messageHeader w-full h-14 bg-white flex flex-row items-center px-4 justify-between">
                    <div class="flex flex-row items-center gap-4 flex-1 cursor-pointer" @click="aside='aside2'">
                        <Avatar class="w-10 h-10" :src="'/uploads/avatars/1.jpeg'" :size="{w:42, h:42}"/>
                        <div class="flex flex-col ">
                            <span class="font-bold text-gray-900">Speed Vpn</span>
                            <span class="text-sm text-gray-400">last seen recently</span>
                        </div>
                    </div>
                    <div class="flex flex-row items-center">
                        <button @click="aside = 'aside1'" v-wave class="bg-white rounded-full p-2 mr-2 text-gray-500 font-bold hover:bg-gray-100">
                            <mdicon name="magnify"></mdicon>
                        </button>

                        <Popper arrow offsetDistance="4"
                                placement="left"
                                @open:popper="showMenu=true"
                                @close:popper="showMenu=false" >
                            <button v-wave class="bg-white rounded-full p-2 text-gray-500 font-bold hover:bg-gray-100" @click="aside=''">
                                <mdicon name="dots-vertical"></mdicon>
                            </button>
                            <template #content="{ close }">
                                <transition name="scale-from-top-right">
                                    <div class="-mr-10 mt-16" v-show="showMenu">
                                        <div class="w-52">
                                            <Menu :data="menuItems" />
                                        </div>
                                    </div>
                                </transition>
                            </template>
                        </Popper>
                    </div>

                </div>
                <div class="messages h-full flex-1 ">
                </div>
            </div>

            <template #aside1>
                <div class="messageAside bg-white border-l-2 border-gray-200 w-full">
                    This is Aside 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corporis id suscipit! Ab accusamus aliquid blanditiis dolorum qui! Accusantium aut delectus facere numquam pariatur quidem vitae voluptatibus? Deserunt, id, quidem.
                    This is Aside 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corporis id suscipit! Ab accusamus aliquid blanditiis dolorum qui! Accusantium aut delectus facere numquam pariatur quidem vitae voluptatibus? Deserunt, id, quidem.
                    This is Aside 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corporis id suscipit! Ab accusamus aliquid blanditiis dolorum qui! Accusantium aut delectus facere numquam pariatur quidem vitae voluptatibus? Deserunt, id, quidem.
                </div>
            </template>
            <template #aside2>
                <div class="messageAside bg-white border-l-2 border-gray-200 w-1/2">
                    This is Aside 2
                </div>
            </template>

        </AsideSwitcher>
</template>

<script>
import Avatar from "@/Pages/Component/Avatar";
import Menu from "@/Pages/Partials/SideBar/Components/Menu/Menu";
import AsideSwitcher from "@/Pages/Component/AsideSwitcher";
export default {
    name: "MessageContent",
    components: {AsideSwitcher, Menu, Avatar},
    data() {
        return {
            aside: '',
            showMenu: false,
            menuItems: [
                {
                    'type': 'button',
                    'id': 1,
                    'icon': 'message-badge-outline',
                    'text': 'Mark As Read',
                    'textColor': '#111827',
                    'iconColor': '#4b5563',
                    'active': false,
                    action: function () {
                        alert('Saved Messages')
                    }
                },
                {
                    'type': 'button',
                    'id': 2,
                    'icon': 'pin-outline',
                    'text': 'Pin',
                    'textColor': '#111827',
                    'iconColor': '#4b5563',
                    'active': false,
                    action: function () {
                        alert('Contact')
                    }
                },
                {
                    'type': 'button',
                    'id': 3,
                    'icon': 'cog-outline',
                    'text': 'Mute',
                    'textColor': '#111827',
                    'iconColor': '#4b5563',
                    'active': false,
                    action: function () {
                        alert('Settings')
                    }
                },
                {
                    'type': 'button',
                    'id': 4,
                    'icon': 'bell-off-outline',
                    'text': 'Mute',
                    'textColor': '#111827',
                    'iconColor': '#4b5563',
                    'active': false,
                    action: function () {
                        alert('Settings')
                    }
                },
                {
                    'type': 'button',
                    'id': 5,
                    'icon': 'delete-outline',
                    'text': 'Delete Chat',
                    'textColor': '#dc2626',
                    'iconColor': '#ef4444',
                    'active': false,
                    action: function () {
                        alert('Settings')
                    }
                },
            ]
        }
    }

}
</script>

<style scoped>

</style>
