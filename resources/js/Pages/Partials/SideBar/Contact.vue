<template>
    <div class="w-full h-full bg-gray-200">
        <div class="relative h-full w-full bg-white flex flex-col ">
            <div class="sticky top-0 h-14 border-b-2 flex flex-row items-center justify-between px-4">
                <div class="w-full flex flex-row items-center gap-2">
                    <span v-wave class="p-2 z-10 bg-white hover:bg-gray-100 rounded-full cursor-pointer text-gray-500"
                          @click="$emit('close')"
                    >
                        <mdicon name="arrow-left"/>
                    </span>
                    <TextInput v-model="search" class="flex-1" type="search">
                        <template #icon>
                            <mdicon name="magnify" />
                        </template>
                    </TextInput>
                </div>
            </div>
            <div class="flex-1 overflow-y-auto p-2">
                <div v-wave v-for="(contact, index) in contacts.filter(item=>item['name'].toLowerCase().includes(search.toLowerCase()))" :key="index"
                     @click="clickOnContact(contact)"
                     class="relative flex flex-row items-center gap-4 justify-start cursor-pointer bg-white hover:bg-gray-100 rounded-lg px-4 py-3"
                >
                    <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full z-10"></div>
                    <CheckBox v-if="multiSelect" v-model="contact.selected"/>
                    <Avatar class="shrink-0" :size="{w:40, h:48}" :src="contact.profile_photo_url"/>
                    <div class="flex flex-col">
                        <span class="font-semibold text-gray-900">{{contact.name}}</span>
                        <span class="text-sm text-gray-500">{{contact.last_seen}}</span>
                    </div>
                </div>
            </div>
            <transition name="translate-from-bottom">
                <span v-if="multiSelect && selected.length" v-wave
                      class="z-20 absolute text-white p-4 bottom-6 right-4 bg-chatListActiveBg rounded-full"
                      @click="sendSelected"
                >
                    <mdicon name="arrow-right" size="24"/>
                </span>
            </transition>
        </div>
    </div>
</template>

<script>
import TextInput from "@/Pages/Component/TextInput";
import Avatar from "@/Pages/Component/Avatar";
import CheckBox from "@/Pages/Component/CheckBox";
export default {
    name: "Contact",
    components: {CheckBox, Avatar, TextInput},
    props: {
        multiSelect: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        selected() {
            return this.contacts.filter(item=>item.selected);
        }
    },
    data() {
        return {
            search: '',
            contacts: [
                {
                    user_id: 1,
                    name: 'Mohammad',
                    last_seen: 'last seen recently',
                    profile_photo_url: '/uploads/avatars/1.jpeg',

                },
                {
                    user_id: 2,
                    name: 'Alireza',
                    last_seen: 'last seen recently',
                    profile_photo_url: '/uploads/avatars/2.png',

                },
                {
                    user_id: 3,
                    name: 'Kazem',
                    last_seen: 'last seen recently',
                    profile_photo_url: '/uploads/avatars/3.png',

                },
                {
                    user_id: 4,
                    name: 'Kambiz',
                    last_seen: 'last seen recently',
                    profile_photo_url: '/uploads/avatars/6.jpeg',

                },
                {
                    user_id: 5,
                    name: 'Ahmad',
                    last_seen: 'last seen recently',
                    profile_photo_url: '/uploads/avatars/5.jpeg',
                },
                {
                    user_id: 1,
                    name: 'Mohammad',
                    last_seen: 'last seen recently',
                    profile_photo_url: '/uploads/avatars/1.jpeg',

                },
                {
                    user_id: 2,
                    name: 'Alireza',
                    last_seen: 'last seen recently',
                    profile_photo_url: '/uploads/avatars/2.png',

                },
                {
                    user_id: 3,
                    name: 'Kazem',
                    last_seen: 'last seen recently',
                    profile_photo_url: '/uploads/avatars/3.png',

                },
                {
                    user_id: 4,
                    name: 'Kambiz',
                    last_seen: 'last seen recently',
                    profile_photo_url: '/uploads/avatars/6.jpeg',

                },
                {
                    user_id: 5,
                    name: 'Ahmad',
                    last_seen: 'last seen recently',
                    profile_photo_url: '/uploads/avatars/5.jpeg',
                },
                {
                    user_id: 1,
                    name: 'Mohammad',
                    last_seen: 'last seen recently',
                    profile_photo_url: '/uploads/avatars/1.jpeg',

                },
                {
                    user_id: 2,
                    name: 'Alireza',
                    last_seen: 'last seen recently',
                    profile_photo_url: '/uploads/avatars/2.png',

                },
                {
                    user_id: 3,
                    name: 'Kazem',
                    last_seen: 'last seen recently',
                    profile_photo_url: '/uploads/avatars/3.png',

                },
                {
                    user_id: 4,
                    name: 'Kambiz',
                    last_seen: 'last seen recently',
                    profile_photo_url: '/uploads/avatars/6.jpeg',

                },
                {
                    user_id: 5,
                    name: 'Ahmad',
                    last_seen: 'last seen recently',
                    profile_photo_url: '/uploads/avatars/5.jpeg',
                },
            ].map(function (item) {
                item['selected'] = false;
                return item;
            })
        }
    },
    methods: {
        clickOnContact(contact) {
            if( ! this.multiSelect ) {
                this.search = '';
                this.$emit('selectContact', contact);
                this.$emit('close');
            }
            else {
                contact.selected = ! contact.selected;
            }
        },
        sendSelected() {
            this.search = '';
            this.$emit('selectContact', this.selected);
            this.selected.map( function (item) {
                item['selected'] = false;
                return item;
            } )
            this.$emit('close');
        }
    }
}
</script>

<style scoped>

</style>
