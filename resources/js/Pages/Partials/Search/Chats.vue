<template>
    <div class="p-2 flex flex-col">
        <div class="flex flex-col border-b border-b-gray-300">
            <div class="flex flex-row justify-between p-4">
                <span class="text-gray-600">Global Search</span>
                <span class="text-sky-600 cursor-pointer" @click="showMoreGlobalSearch=!showMoreGlobalSearch">show more</span>
            </div>
            <div v-for="(item, index) in getGobalSearchItem" class="flex w-full flex-row gap-4 hover:bg-gray-100 rounded-lg px-2 py-3 cursor-pointer">
                <div class="flex flex-row ">
                    <Avatar class="bg-gray-100 rounded-full" :size="{w:48,h:48}" :src="item.profile_photo_url" alt=""/>
                </div>
                <div class="flex flex-col">
                    <span class="text-gray-900 font-bold">{{ item.title }}</span>
                    <span class="text-sm text-gray-500">{{ item.user_name }}</span>
                </div>
            </div>
        </div>
        <div class="flex flex-col border-b border-b-gray-300">
            <div class="flex flex-row justify-between p-4">
                <span class="text-gray-600">Messages</span>
            </div>
            <div v-for="(item, index) in messagesSearch" class="flex w-full flex-row gap-4 hover:bg-gray-100 rounded-lg px-2 py-3 cursor-pointer">
                <div class="flex flex-row">
                    <Avatar class="bg-white rounded-full" :size="{w:48,h:48}" :src="item.profile_photo_url" alt=""/>
                </div>
                <div class="flex flex-col">
                    <span class="text-gray-900 font-bold">{{ item.title }}</span>
                    <span class="text-sm text-gray-500">{{ item.user_name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Avatar from "@/Pages/Component/Avatar";
export default {
    name: "Chats",
    components: {Avatar},
    props: {
        modelValue: {
            type: String,
            default: '',
        }
    },
    computed: {
        search: {
            get() {
                return this.modelValue;
            },
            set(val) {
                this.$emit('update:modelValue', val)
            }
        },
        getGobalSearchItem() {
            if( this.showMoreGlobalSearch ) return this.globalSearch;
            return this.globalSearch.slice(0,3);
        }
    },
    data() {
        return {
            showMoreGlobalSearch: false,
            globalSearch: [
                {
                    title: 'Laravel',
                    user_name: '@Laravel',
                    profile_photo_url: '/uploads/laravel1.png',
                },
                {
                    title: 'Laravel2',
                    user_name: '@Laravel2',
                    profile_photo_url: '/uploads/laravel2.png',
                },
                {
                    title: 'Laravel3',
                    user_name: '@Laravel3',
                    profile_photo_url: '/uploads/laravel3.png',
                },
                {
                    title: 'Laravel4',
                    user_name: '@Laravel4',
                    profile_photo_url: '/uploads/laravel4.png',
                },
                {
                    title: 'Laravel5',
                    user_name: '@Laravel5',
                    profile_photo_url: '/uploads/laravel1.png',
                },
                {
                    title: 'Laravel6',
                    user_name: '@Laravel6',
                    profile_photo_url: '/uploads/laravel2.png',
                },
                {
                    title: 'Laravel7',
                    user_name: '@Laravel7',
                    profile_photo_url: '/uploads/laravel3.png',
                },
                {
                    title: 'Laravel7',
                    user_name: '@Laravel7',
                    profile_photo_url: '/uploads/laravel4.png',
                },
            ],
            messagesSearch: [
                {
                    title: 'Mohammad',
                    user_name: '@Mohammad',
                    profile_photo_url: '/uploads/avatars/1.jpeg',
                },
                {
                    title: 'Sasan',
                    user_name: '@Sasan',
                    profile_photo_url: '/uploads/avatars/2.png',
                },
                {
                    title: 'Alireza',
                    user_name: '@Alireza',
                    profile_photo_url: '/uploads/avatars/3.png',
                },
                {
                    title: 'Zahra',
                    user_name: '@Zahra',
                    profile_photo_url: '/uploads/avatars/5.jpeg',
                },
                {
                    title: 'Mary',
                    user_name: '@Mary',
                    profile_photo_url: '/uploads/avatars/6.jpeg',
                },
                {
                    title: 'Mohammad',
                    user_name: '@Mohammad',
                    profile_photo_url: '/uploads/avatars/1.jpeg',
                },
                {
                    title: 'Sasan',
                    user_name: '@Sasan',
                    profile_photo_url: '/uploads/avatars/2.png',
                },
                {
                    title: 'Alireza',
                    user_name: '@Alireza',
                    profile_photo_url: '/uploads/avatars/3.png',
                },
                {
                    title: 'Zahra',
                    user_name: '@Zahra',
                    profile_photo_url: '/uploads/avatars/5.jpeg',
                },
                {
                    title: 'Mary',
                    user_name: '@Mary',
                    profile_photo_url: '/uploads/avatars/6.jpeg',
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>
