<template>
    <div class="flex flex-row gap-2 w-full cursor-pointer" v-if="data">
        <div class="w-12 h-12 rounded-full bg-chatListActiveBg relative">
            <transition name="fade">
                <span v-if="!play" @click="playMusic" class="absolute cursor-pointer text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
                    <mdicon name="play" :size="38"/>
                </span>
            </transition>
            <transition name="fade">
                <span v-if="play" @click="playMusic" class="absolute cursor-pointer text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
                    <mdicon name="pause" :size="35"/>
                </span>
            </transition>
        </div>
        <div class="flex flex-col flex-1">
            <div class="flex flex-row justify-between">
                <span class="">{{ data.title }}</span>
                <span class="text-xs text-gray-500">{{ data.time }}</span>
            </div>
            <div class="flex flex-row gap-1 items-center">
                <span class="text-sm text-gray-500">{{ data.size }}</span>
                <span class="w-1 h-1 rounded-full bg-gray-500"></span>
                <span class="text-sm text-gray-500">{{ data.sender }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MusicItem",
    props: {
        data: {
            type: Object,
            default: null,
        }
    },
    data() {
        return {
            play: false,
        }
    },
    methods: {
        playMusic() {
            if(this.play) {
            } else  {

            }
            this.play = !this.play;
        }
    }
}
</script>

<style scoped>

</style>
