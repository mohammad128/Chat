<template>
    <div class="flex flex-row gap-2 cursor-pointer" v-if="data" @click="downloadFile">
        <div class="bg-chatListActiveBg w-12 h-12 rounded-md flex flex-col items-center justify-center">
            <span class="flex flex-row justify-center items-center p-4 text-white">
                <template v-if="!downloading">
                    <mdicon name="download" :size="26"/>
                </template>
                <template v-else>
                    <div class="relative rounded-full bg-gray-900/20">
                        <ProgressLoading v-model="downloadProgress"
                                         :size="40"
                                         progress-bg-color="transparent"
                                         :progress-width="3"
                                         progress-color="#FFF"/>
                        <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <mdicon name="close" size="24"/>
                        </span>
                    </div>
                </template>
            </span>
        </div>
        <div class="flex flex-col flex-1">
            <div class="w-full flex flex-row justify-between gap-2 items-center">
                <span class="text-gray-900 flex-1 break-all line-clamp-1">{{ data.filename }}</span>
                <span class="text-gray-500 text-xs shrink-0">{{ data.time }}</span>
            </div>
            <div class="w-full flex flex-row gap-2">
                <span class="text-gray-500 text-sm">{{ data.size }}</span>
                <span class="text-gray-500 text-sm">{{ data.user.username }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import ProgressLoading from "@/Pages/Component/ProgressLoading";
export default {
    name: "FileItem",
    components: {ProgressLoading},
    props: {
        data: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            downloading: false,
            downloadProgress: 0,
        }
    },
    methods: {
        downloadFile() {
            this.downloading = !this.downloading;
            let intervalId = setInterval(()=>{
                this.downloadProgress+=  Math.floor(Math.random() * (10 - 1 + 1) + 1);
                if (this.downloadProgress===100) {
                    this.downloadProgress = 0;
                    clearInterval(intervalId);
                }
            }, 200);
        }
    }
}
</script>

<style scoped>

</style>
