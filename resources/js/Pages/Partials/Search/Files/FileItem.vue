<template>
    <div class="flex flex-row gap-2 cursor-pointer" v-if="data" @click="downloadFile">
        <div class="bg-chatListActiveBg w-12 h-12 rounded-md flex flex-col items-center justify-center"  v-if="status!=='COMPLETED'">
            <span class="flex flex-row justify-center items-center p-4 text-white" >
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
        <div class="bg-chatListActiveBg w-12 h-12 rounded-md flex flex-col items-center justify-center relative"  v-else>
            <div class="document-ico text-white w-full text-center break-all line-clamp-1">{{ data.type }}</div>
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

import Downloader from "downloader-with-progress";
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
            dl: null,
            status: 'NOT_STARTED'

        }
    },
    methods: {
        downloadFile() {
            if( this.status === "COMPLETED" ) {
                this.dl.save(this.data.filename);
            }
            else if( this.downloading ) {
                this.downloadProgress = 0;
                this.downloading = false;
                this.dl.abort();
            }
            else {
                this.downloading = true;
                this.downloadProgress = 2;
                this.dl = new Downloader(this.data.src);
                this.dl
                    .onProgress((percent_complete, loaded, total)=>{
                        this.downloadProgress = percent_complete < 2 ? 2 : percent_complete;
                    })
                    .onFinish((blobUrl)=>{
                        this.dl.save(this.data.filename);
                        this.status = 'COMPLETED';
                    })
                    // .onChangeState((state) => {
                    //     console.log('state', state)
                    // })
                    .start();
            }
        }
    }
}
</script>

<style scoped>
.document-ico{
    padding: 1.5625rem 0.25rem 0 0.25rem;
}
.document-ico:after {
    --size: 1.125rem;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: var(--size);
    height: var(--size);
    border-bottom-left-radius: 0.25rem;
    border-style: solid;
    border-width: calc(var(--size) / 2);
    border-left-color: rgba(0,0,0,.25);
    border-bottom-color: rgba(0,0,0,.25);
    border-top-color: #fff;
    border-right-color: #fff;
}
</style>
