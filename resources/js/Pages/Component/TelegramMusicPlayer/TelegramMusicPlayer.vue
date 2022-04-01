<template>
    <div class="w-full bg-white cursor-pointer" v-if="musicPlayer.src"  >
        <div class="flex flex-col w-full" >
            <div class="w-full  flex flex-row items-center gap-4 px-4 py-1">
                <div class="flex flex-row justify-center text-chatListActiveBg">
                    <span v-wave class="rounded-full hover:bg-chatListActiveBg/10 transition duration-300 cursor-pointer w-[40px] h-[40px] flex justify-center items-center">
                        <mdicon name="rewind" size="24"/>
                    </span>
                    <span @click="play=!play" v-wave class="rounded-full hover:bg-chatListActiveBg/10 transition duration-300 cursor-pointer w-[40px] h-[40px] flex justify-center items-center">
                        <!-- play pause -->
                        <mdicon v-if="play" name="pause"  size="24"/>
                        <mdicon v-else name="play"  size="24"/>
                    </span>
                    <span v-wave class="rounded-full hover:bg-chatListActiveBg/10 transition duration-300 cursor-pointer w-[40px] h-[40px] flex justify-center items-center">
                        <mdicon name="fast-forward" size="24"/>
                    </span>
                </div>
                <div class="flex flex-col flex-1">
                    <span class="font-bold text-gray-900 text-sm w-full line-clamp-1">4 Shanbe Soori 1401</span>
                    <span class="text-gray-500 text-sm w-full line-clamp-1">T.me/Cafe_Musicam</span>
                </div>
                <div class="flex flex-row gap-2">
                    <VolumeController v-model="volume" />
                    <div class="" @click="stopAudio()">
                        <span v-wave class="text-gray-600 rounded-full hover:bg-gray-100 transition duration-300 cursor-pointer w-[40px] h-[40px] flex justify-center items-center">
                            <mdicon name="close" size="24"/>
                        </span>
                    </div>
                </div>
            </div>
            <TimeLine :max="duration" v-model="timeLineTime"/>
        </div>
    </div>
</template>

<script>
import VolumeController from "@/Pages/Component/TelegramMusicPlayer/VolumeController";
import TimeLine from "@/Pages/Component/TelegramMusicPlayer/TimeLine";
import {mapState} from 'vuex'

export default {
    name: "TelegramMusicPlayer",
    components: {TimeLine, VolumeController},
    props: {
        src: {
            type: String,
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
            // audio: null,
            volume: 75,
            play: false,
            duration: 0,
            currentTime: 0,
            timeLineTime: 0,
            loaded: false,
            allow: true,
        }
    },
    methods: {
    },
    mounted() {
        this.loaded = false;
        // this.audio = new Audio(
        //     "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3"
        // );
        // let that = this;
        // this.audio.addEventListener(
        //     "loadeddata",
        //     () => {
        //         // console.log(this.duration);
        //         // console.log(this.currentTime);
        //         this.audio.volume = .75;
        //         this.duration = this.audio.duration;
        //         this.currentTime = this.audio.currentTime;
        //         this.loaded = true;
        //
        //         setInterval(() => {
        //             this.currentTime = this.audio.currentTime;
        //         }, 500);
        //     },
        //     false
        // );

    },
    watch: {
        musicPlayer: {
            handler:function(newVal,oldVal){
                if(this.audio) {
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
                                if(this.audio)
                                    this.currentTime = this.audio.currentTime;
                                else clearInterval(intervalId);
                            }, 500);
                        },
                        false
                    );
                }
            },
            deep:true
        },
        play(val){
            if(!this.loaded)
                return;
            if (val) {
                this.audio.play();
            } else {
                this.audio.pause();
            }
            this.musicPlayer.play = val;
        },
        volume(val) {
            if(!this.loaded)
                return;
            this.audio.volume = val/100;
        },
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
        }
    }
}
</script>

<style scoped>

</style>
