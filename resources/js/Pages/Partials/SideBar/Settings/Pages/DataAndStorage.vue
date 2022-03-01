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
                    <span class="text-xl font-bold text-gray-900">Data and Storage</span>
                </div>
            </div>
            <div class="flex-1 overflow-y-auto">
                <div v-for="(group, index) in notificationsSettingsData" :key="index"
                     class="p-2 flex flex-col"
                >
                    <template v-if="group.type === 'line'">
                        <hr class="">
                    </template>
                    <template v-else-if="group.type === 'checkGroup'">
                        <span class="text-chatListActiveBg p-3 font-bold">{{ group.title }}</span>
                        <div class=" flex flex-col">
                            <div v-for="(item, key) in group.items"
                                 class="relative py-3 px-4 cursor-pointer rounded-lg hover:bg-gray-100 flex flex-row gap-6 "
                                 @click="item.enable = !item.enable; item.action($event, item)"
                            >
                                <div class="absolute top-0 left-0 bottom-0 right-0 w-full h-full z-10"></div>
                                <span class="pt-1">
                                <CheckBox v-model="item.enable" />
                            </span>
                                <div class="flex flex-col">
                                    <span class="text-gray-900">{{ item.text }}</span>
                                    <span class="text-gray-500 text-sm">{{ item.enable ? 'Enabled' : 'Disabled' }}</span>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import CheckBox from "@/Pages/Component/CheckBox";
export default {
    name: "DataAndStorage",
    components: {CheckBox},
    data() {
        return {
            notificationsSettingsData: [
                {
                    type: 'checkGroup',
                    title: 'Auto-download Photo',
                    items: [
                        {
                            text: 'Private Chats',
                            enable: true,
                            action: (e, item) => {
                                console.log(item)
                            }
                        },
                        {
                            text: 'Group Chats',
                            enable: true,
                            action: (e, item) => {
                                console.log(item)
                            }
                        },
                        {
                            text: 'Channels',
                            enable: true,
                            action: (e, item) => {
                                console.log(item)
                            }
                        },
                    ]
                },
                {type: 'line'},
                {
                    type: 'checkGroup',
                    title: 'Auto-download Video',
                    items: [
                        {
                            text: 'Private Chats',
                            enable: true,
                            action: (e, item) => {
                                console.log(item)
                            }
                        },
                        {
                            text: 'Group Chats',
                            enable: true,
                            action: (e, item) => {
                                console.log(item)
                            }
                        },
                        {
                            text: 'Channels',
                            enable: true,
                            action: (e, item) => {
                                console.log(item)
                            }
                        },
                    ]
                },
                {type: 'line'},
                {
                    type: 'checkGroup',
                    title: 'Auto-download Files',
                    items: [
                        {
                            text: 'Private Chats',
                            enable: true,
                            action: (e, item) => {
                                console.log(item)
                            }
                        },
                        {
                            text: 'Group Chats',
                            enable: true,
                            action: (e, item) => {
                                console.log(item)
                            }
                        },
                        {
                            text: 'Channels',
                            enable: true,
                            action: (e, item) => {
                                console.log(item)
                            }
                        },
                    ]
                },

            ],
        }
    }
}
</script>

<style scoped>

</style>
