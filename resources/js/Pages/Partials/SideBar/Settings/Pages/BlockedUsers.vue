<template>
    <div class="w-full h-full bg-gray-200">
        <div class="relative h-full w-full bg-white flex flex-col ">
            <div class="sticky top-0 h-14 border-b-2 flex flex-row items-center justify-between px-4">
                <div class="flex flex-row items-center gap-4">
                    <span v-wave class="p-2 z-10 bg-white hover:bg-gray-100 rounded-full cursor-pointer text-gray-500"
                          @click="$emit('close')"
                    >
                        <mdicon name="arrow-left"/>
                    </span>
                    <span class="text-xl font-bold text-gray-900">Blocked Users</span>
                </div>
            </div>
            <div class="flex-1 overflow-y-auto">
                <div class="mt-4 text-sm p-4 text-gray-500 border-t-2 border-t-gray-200 border-b border-b-gray-200 bg-gray-100">
                    Blocked users can't send you messages or add you to groups. They will not see your profile pictures, online and last seen status.
                </div>
                <div class="px-2">
                    <ContextMenu :data="contextMenuData" v-model="showContextMenu">

                        <div v-for="(item, index) in blockedUsers" :key="index" v-wave
                             class="group flex flex-row w-full gap-2 p-2 rounded-lg hover:bg-gray-100 cursor-pointer select-none activeItem:bg-chatListActiveBg hover:activeItem:bg-chatListActiveBg" >

                            <Avatar class="grow grow-0" :src="item.profile_photo_url" :size="{w:48, h:48}"/>
                            <div class="flex flex-col flex-1 justify-center">
                                <div class="flex flex-row justify-between">
                                    <span class="font-semibold text-black flex-1 group-has-active:text-white">{{item.name}}</span>
                                </div>
                                <div class="flex flex-row">
                                    <div class="flex-1 line-clamp-1 text-sm text-gray-600 group-has-active:text-white">{{item.user_name}}</div>
                                </div>
                            </div>
                        </div>

                        <template #menuContent>
                            <div class="w-48">
                                <Menu container-class="''"  :data="contextMenuItems"/>
                            </div>
                        </template>

                    </ContextMenu>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ContextMenu from "@/Pages/Component/ContextMenu";
import Menu from "@/Pages/Partials/SideBar/Components/Menu/Menu";
import Avatar from "@/Pages/Component/Avatar";
export default {
    name: "BlockedUsers",
    components: {Avatar, Menu, ContextMenu},

    data() {
        return {
            contextMenuData: null,
            showContextMenu: false,
            activeItem: null,
            contextMenuItems: [
                {
                    'type': 'button',
                    'id': 1,
                    'icon': 'lock-off-outline',
                    'text': 'UnBlock',
                    'textColor': '#111827',
                    'iconColor': '#4b5563',
                    'active': false,
                    action: function () {
                        alert('Block User')
                    }
                },
            ],
            blockedUsers: [
                {
                    'name': 'mohammad',
                    'profile_photo_url': '/uploads/avatars/1.jpeg',
                    'user_name': '@anonymouse',
                },
                {
                    'name': 'Mahyar',
                    'profile_photo_url': '/uploads/avatars/2.png',
                    'user_name': '@Mahyar',
                },
                {
                    'name': 'Gholli',
                    'profile_photo_url': '/uploads/avatars/3.png',
                    'user_name': '@Gholli',
                },
                {
                    'name': 'Reza',
                    'profile_photo_url': '/uploads/avatars/6.jpeg',
                    'user_name': '@Reza',
                },
            ]
        }
    },
    methods: {
        clickOnItem(item) {
            this.activeItem = item;
            console.log(item);
        }
    },
    watch: {
        showContextMenu(newVal, OldVal) {
            console.log(newVal);
        },
    }
}
</script>

<style scoped>

</style>
