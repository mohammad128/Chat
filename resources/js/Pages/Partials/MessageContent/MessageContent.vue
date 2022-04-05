<template>
    <div class="messageContainer w-full h-full max-h-screen flex flex-row">
        <div class="messageContent flex flex-col w-full h-full">

            <div class="messageHeader border-b border-b-gray-200 w-full h-14 bg-white flex flex-row items-center px-4 justify-between">
                <div class="flex flex-row items-center gap-4 flex-1 cursor-pointer" @click="aside='aside2'">
                    <Avatar class="w-10 h-10" :src="'/uploads/avatars/1.jpeg'" :size="{w:42, h:42}"/>
                    <div class="flex flex-col ">
                        <span class="font-bold text-gray-900">MohammadJavadi</span>
                        <span class="text-sm text-gray-400">last seen recently</span>
                    </div>
                </div>
                <div class="flex flex-row items-center">
                    <button @click="aside = 'aside1'" v-wave class="bg-white rounded-full p-2 mr-2 text-gray-500 font-bold hover:bg-gray-100">
                        <mdicon name="magnify"></mdicon>
                    </button>

                    <Popper arrow offsetDistance="4"
                            placement="left"
                            @open:popper="showMenu=true"
                            @close:popper="showMenu=false" >
                        <button v-wave class="bg-white rounded-full p-2 text-gray-500 font-bold hover:bg-gray-100" @click="aside=''">
                            <mdicon name="dots-vertical"></mdicon>
                        </button>
                        <template #content="{ close }">
                            <transition name="scale-from-top-right">
                                <div class="-mr-10 mt-16" v-show="showMenu">
                                    <div class="w-52">
                                        <Menu :data="menuItems" />
                                    </div>
                                </div>
                            </transition>
                        </template>
                    </Popper>
                </div>
            </div>

            <TelegramMusicPlayer/>

            <div class="messages h-full flex flex-col flex-1 relative overflow-hidden">
                <Messages/>
                <div class="relative h-17 w-full pb-4 shrink-0 w-full max-w-3xl m-auto">
                    <transition name="scale-fade">
                        <WriteMessage v-if="!selectedMessages.length"/>
                        <SelectedMessagesActions v-else/>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Avatar from "@/Pages/Component/Avatar";
import Menu from "@/Pages/Partials/SideBar/Components/Menu/Menu";
import AsideSwitcher from "@/Pages/Component/AsideSwitcher";
import TextInput from "@/Pages/Component/TextInput";
import CheckBox from "@/Pages/Component/CheckBox";
import RangeSlider from "@/Pages/Component/RangeSlider";
import Radio from "@/Pages/Component/Radio";
import Tab from "@/Pages/Component/Tab/Tab";
import TabItem from "@/Pages/Component/Tab/TabItem";
import Search from "@/Pages/Partials/Search/Search";
import Links from "@/Pages/Partials/Search/Links/Links";
import Downloader from 'downloader-with-progress';
import ProgressLoading from "@/Pages/Component/ProgressLoading";
import Files from "@/Pages/Partials/Search/Files/Files";
import TelegramMusicPlayer from "@/Pages/Component/TelegramMusicPlayer/TelegramMusicPlayer";
import Music from "@/Pages/Partials/Search/Music/Music";
import {mapState} from "vuex";
import WriteMessage from "@/Pages/Partials/MessageContent/WriteMessage";
import Messages from "@/Pages/Partials/MessageContent/Messages/Messages";
import SelectedMessagesActions from "@/Pages/Partials/MessageContent/SelectedMessagesActions";


export default {
    name: "MessageContent",
    components: {
        SelectedMessagesActions,
        Messages,
        WriteMessage,
        Music,
        TelegramMusicPlayer,
        Files,
        ProgressLoading,
        Links, Search, TabItem, Tab, Radio, RangeSlider, CheckBox, TextInput, AsideSwitcher, Menu, Avatar
    },
    computed: {
        ...mapState(['musicPlayer','selectedMessages']),
    },
    data() {
        return {
            progress: 0,
            dl: null,

            aside: '',
            showMenu: false,
            menuItems: [
                {
                    'type': 'button',
                    'id': 1,
                    'icon': 'message-badge-outline',
                    'text': 'Mark As Read',
                    'textColor': '#111827',
                    'iconColor': '#4b5563',
                    'active': false,
                    action: function () {
                        alert('Saved Messages')
                    }
                },
                {
                    'type': 'button',
                    'id': 2,
                    'icon': 'pin-outline',
                    'text': 'Pin',
                    'textColor': '#111827',
                    'iconColor': '#4b5563',
                    'active': false,
                    action: function () {
                        alert('Contact')
                    }
                },
                {
                    'type': 'button',
                    'id': 3,
                    'icon': 'cog-outline',
                    'text': 'Mute',
                    'textColor': '#111827',
                    'iconColor': '#4b5563',
                    'active': false,
                    action: function () {
                        alert('Settings')
                    }
                },
                {
                    'type': 'button',
                    'id': 4,
                    'icon': 'bell-off-outline',
                    'text': 'Mute',
                    'textColor': '#111827',
                    'iconColor': '#4b5563',
                    'active': false,
                    action: function () {
                        alert('Settings')
                    }
                },
                {
                    'type': 'button',
                    'id': 5,
                    'icon': 'delete-outline',
                    'text': 'Delete Chat',
                    'textColor': '#dc2626',
                    'iconColor': '#ef4444',
                    'active': false,
                    action: function () {
                        alert('Settings')
                    }
                },
            ]
        }
    },
    methods: {
        downloadFile() {
            let that = this;
            console.log("Start Download")
            // let url = '/uploads/medias/videos/2.mp4';
            let url = 'http://cachefly.cachefly.net/100mb.test';
            if(!this.dl) {
                this.dl = new Downloader(url, 'move.mp4');
                this.dl.onProgress((percent, loaded, total) => {
                    console.log('percent: ' + percent, 'loaded: ' + loaded, 'total: ' + total);
                    this.progress = percent;
                })
                .onChangeState((state) => {
                    console.log('state', state);
                })
                .onFinish((blobUrl) => {
                    // dl.save('filename.ext');
                    console.log('finshed', blobUrl)
                })
                .start();
            }
            else {
                this.dl.abort()
            }
        }
    },
    mounted() {
        // setTimeout(
        //     () => {
                this.playAudio("https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3")
        //     },
        //     1000
        // )
    },
    watch: {
    }

}
</script>

<style >

.example {
    background: #ffffff;
    margin: 20px;
    border-color: #e7e7e7;
    padding: 40px;
}

.example pre {
    background: #f9f9f9;
    padding: 18px 6px;
    overflow-x: scroll;
    margin-top: 10px;
}

.output {
    font-family: Courier, Courier New, Lucida Console, Monaco, Consolas;
    background: #000000;
    color: #ffffff;
    padding: 20px;
    margin-bottom: 50px;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    font-size: 13px;
}

.slider-vertical {
    margin: -30px auto 0;
}


</style>
