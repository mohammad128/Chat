<template>
    <div class="flex flex-row gap-2 w-full cursor-pointer" v-if="data">
        <div class="shrink-0 w-12 h-12 rounded-full bg-chatListActiveBg relative" @click="playMusic">
            <transition name="fade">
                <span v-if="!play" class="absolute cursor-pointer text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
                    <mdicon name="play" :size="38"/>
                </span>
            </transition>
            <transition name="fade">
                <span v-if="play" class="absolute cursor-pointer text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
                    <mdicon name="pause" :size="35"/>
                </span>
            </transition>
        </div>
        <div class="flex flex-col flex-1" >
            <div class="flex flex-row justify-between">
                <span class="">{{ data.title }}</span>
                <span class="text-xs text-gray-500">{{ data.time }}</span>
            </div>
            <div v-if="musicPlayer.src !== data.src" class="flex flex-row gap-1 items-center">
                <span class="text-sm text-gray-500">{{ data.size }}</span>
                <span class="w-1 h-1 rounded-full bg-gray-500"></span>
                <span class="text-sm text-gray-500">{{ data.sender }}</span>
            </div>
            <div v-else class="">
                <div class="w-full flex flex-row justify-center items-center gap-2">
                    <div class="shrink-0 text-sm text-gray-500">{{ fancyTimeFormat(timeLineTime) }}</div>
                    <SearchTimeLine :max="duration" v-model="timeLineTime" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SearchTimeLine from "@/Pages/Partials/Search/Music/TimeLine";
import {mapState} from "vuex";

export default {
    name: "MusicItem",
    components: {SearchTimeLine},
    props: {
        data: {
            type: Object,
            default: null,
        }
    },
    computed: {
        ...mapState(['musicPlayer']),
        audio: {
            get() {
                return this.musicPlayer.audio;
            }
        }
    },
    data() {
        return {
            play: false,
            currentTime: 0,
            timeLineTime: 0,
            duration: 0,
            loaded: false,
            allow: true,
        }
    },
    methods: {
        playMusic() {
            if(this.play) {
                this.audio.pause();
            } else  {
                if( this.audio.src !== this.data.src )
                    this.playAudio(this.data.src);
                this.audio.play();
            }
            this.play = !this.play;
            this.musicPlayer.play = this.play;
        }
    },
    mounted() {
    },
    watch: {
        timeLineTime(val) {
            if(!this.loaded)
                return;
            if(this.allow)
                this.audio.currentTime = val;
        },
        currentTime(val) {
            this.allow = false;
            this.timeLineTime = val;
            setTimeout(()=>{
                this.allow = true;
            },50)
        },
        musicPlayer: {
            handler:function(newVal,oldVal){
                if(this.musicPlayer.src === this.data.src) {
                    this.play = this.musicPlayer.play;
                    this.audio.addEventListener(
                        "loadeddata",
                        () => {
                            // console.log(this.duration);
                            // console.log(this.currentTime);
                            this.audio.volume = .75;
                            this.duration = this.audio.duration;
                            this.currentTime = this.audio.currentTime;
                            this.loaded = true;

                            let intervalId = setInterval(() => {
                                if(this.audio && this.musicPlayer.src === this.data.src)
                                    this.currentTime = this.audio.currentTime;
                                else clearInterval(intervalId);
                            }, 500);
                        },
                        false
                    );
                }
                else {
                    this.play = false;
                }
            },
            deep:true
        },
    }
}
</script>

<style scoped>

</style>
