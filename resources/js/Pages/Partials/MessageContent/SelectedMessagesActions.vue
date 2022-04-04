<template>
    <div class="absolute left-0 right-0 bottom-0 top-0">
        <div class="write-message w-full pb-4 flex flex-row gap-2 shrink-0 w-full max-w-lg m-auto">
            <div class="w-full flex-1 py-1 px-2 bg-white rounded-xl flex flex-row items-center justify-between">
                <div class="flex flex-row items-center">
                    <span class="p-3 text-gray-500 rounded-full cursor-pointer hover:bg-red-50" v-wave @click="$store.commit('setSelectedMessages', [])">
                        <mdicon name="close" :size="24"/>
                    </span>
                    <span class="pl-2 text-gray-900 font-bold text-sm">
                        {{selectedMessages.length}} Messages
                    </span>
                </div>
                <div class="flex flex-row items-center">
                    <span v-wave class="py-2 px-4 bg-transparent hover:bg-red-50 text-gray-900 flex flex-row items-center cursor-pointer font-bold text-sm rounded-lg">
                        <span class="text-gray-500">
                            <mdicon name="share-outline" :size="24"/>
                        </span>
                        Forward
                    </span>
                    <span v-wave class="py-2 px-4 bg-transparent hover:bg-red-50 text-red-500 flex flex-row items-center cursor-pointer font-bold text-sm rounded-lg">
                        <mdicon name="delete-outline" :size="24"/>
                        Delete
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "SelectedMessagesActions",
    components: {},

    computed: {
        ...mapState(['selectedMessages'])
    }
}
</script>

<style scoped>

</style>
