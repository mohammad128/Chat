<template>
    <div v-if="data"
         class="group flex flex-row w-full gap-2 p-2 rounded-lg hover:bg-gray-100 cursor-pointer select-none
         activeItem:bg-chatListActiveBg hover:activeItem:bg-chatListActiveBg"
         :class="{'active': active}"
         @click="itemClicked" >

        <Avatar class="grow grow-0" :src="data.profile_photo_url"/>
        <div class="flex flex-col flex-1 justify-center">
            <div class="flex flex-row justify-between">
                <span class="font-semibold text-black flex-1 group-has-active:text-white">{{data.name}}</span>
                <span class="text-xs text-gray-400 group-has-active:text-white">{{data.last_message.time}}</span>
            </div>
            <div class="flex flex-row">
                <div class="flex-1 line-clamp-1 text-sm text-gray-600 group-has-active:text-white">{{data.last_message.message}}</div>
                <span class="text-xs px-2 py-1 font-bold bg-gray-300 text-white rounded-xl group-has-active:text-chatListActiveBg group-has-active:bg-white">{{data.unread_message_count}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import Avatar from "@/Pages/Component/Avatar";
import ContextMenu from "@/Pages/Component/ContextMenu";

export default  {
    components: {
        ContextMenu,
        Avatar
    },
    emits: [
        'clickOnItem',
    ],
    inject: [
        'chatListOnItemClicked'
    ],
    props: {
        data: {
            type: Object,
            default: null
        },
        active: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
        }
    },
    methods: {
        itemClicked() {
            this.chatListOnItemClicked(this.data);
            this.$emit('clickOnItem', this.data);
        },
    }
}
</script>

<style scoped>

</style>
