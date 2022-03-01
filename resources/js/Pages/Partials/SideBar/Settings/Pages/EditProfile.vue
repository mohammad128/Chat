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
                    <span class="text-xl font-bold text-gray-900">Edit Profile</span>
                </div>
            </div>
            <div class="flex-1 overflow-y-auto">
                <div class="flex flex-col">
                    <div class="flex flex-col py-6 px-6 gap-6">
                        <div class="newAvatar flex flex-row justify-center relative rounded-full cursor-pointer">
                            <div class="relative group pb-4">
                                <Avatar :size="{w:120, h:120}" src="/uploads/avatars/1.jpeg"/>
                                <span
                                    class="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 duration-300 drop-shadow-2xl"
                                >
                                    <mdicon name="camera-plus-outline" size="54"/>
                                </span>
                            </div>
                        </div>

                        <TextInput :theme="1" placeholder="Name" v-model="name"/>
                        <TextInput :theme="1" placeholder="Last Name" v-model="last_name"/>
                        <TextInput :theme="1" placeholder="Bio (optional)" v-model="bio"/>
                    </div>
                    <div class="w-full px-6 py-3 text-gray-500 border-t-2 border-b border-gray-200 text-xs bg-gray-100">
                        Any details such as age, occupation or city.
                        <br>
                        Example: 23 y.o. designer from San Francisco
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="flex flex-col py-6 px-6 gap-6">
                        <span class="text-chatListActiveBg font-bold">Username</span>
                        <TextInput :theme="1" placeholder="Username (optional)" v-model="user_name"/>
                    </div>
                    <div class="w-full px-6 py-3 text-gray-500 border-t-2 border-b border-gray-200 text-xs bg-gray-100">
                        You can choose a username on Telegram. If you do, people will be able to find you by this username and contact you without needing your phone number.
                        <br>
                        <br>
                        <br>
                        You can use a-z, 0-9 and underscores. Minimum length is 5 characters.
                        <br>
                        <br>
                        This link opens a chat with you:
                        <br>
                        <a class="text-blue-500 text-sm" href="https://t.me/anonymous070a" target="_blank">https://t.me/anonymous070a</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TextInput from "@/Pages/Component/TextInput";
import Avatar from "@/Pages/Component/Avatar";
export default {
    name: "EditProfile",
    components: {Avatar, TextInput},
    data() {
        return {
            name: 'M',
            last_name: 'J',
            bio: '',
            user_name: 'anonymous070a'
        }
    }
}
</script>

<style scoped>

</style>
