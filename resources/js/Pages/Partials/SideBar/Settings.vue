<template>
    <div class="absolute left-0 right-0 top-0 bottom-0 w-full h-full bg-white">

        <div class="relative h-full w-full bg-white flex flex-col ">
            <div class="sticky top-0 h-14 border-b-2 flex flex-row items-center justify-between px-4">
                <div class="flex flex-row items-center gap-4">
                    <span v-wave class="p-2 z-10 bg-white hover:bg-gray-100 rounded-full cursor-pointer text-gray-500"
                          @click="$emit('close')"
                    >
                        <mdicon name="arrow-left"/>
                    </span>
                    <span class="text-xl font-bold text-gray-900">Settings</span>
                </div>
                <div class="flex flex-row gap-2">
                    <span v-wave class="p-2 z-10 bg-white hover:bg-gray-100 rounded-full cursor-pointer text-gray-500">
                        <mdicon name="pencil-outline"/>
                    </span>
                    <span v-wave class="p-2 z-10 bg-white hover:bg-gray-100 rounded-full cursor-pointer text-gray-500">
                        <mdicon name="dots-vertical"/>
                    </span>
                </div>
            </div>
            <div class="flex-1 overflow-y-auto">
                <div class="userImages w-full relative">

                    <div class="w-full" v-if="loaded">
                        <vue-carousel :autoplay="false" :data="userImages"></vue-carousel>

                    </div>

                    <span v-wave class="p-4 z-10 bg-chatListActiveBg text-white rounded-full cursor-pointer absolute -bottom-6 right-4">
                        <mdicon name="camera-plus-outline" size="24"/>
                    </span>
                    <div class="flex flex-col absolute bottom-4 left-8">
                        <span class="font-bold text-lg text-white">MJ</span>
                        <span class="text-sm text-white">online</span>
                    </div>
                </div>

                <div class="flex flex-col p-2">
                    <template v-for="(item, index) in settingsListItem" :key="index">
                        <hr v-if="item === 'line'" class="my-4"/>
                        <div v-else v-wave
                             @click="item.action($event, item)"
                             class="flex flex-row gap-6 items-center hover:bg-gray-100 bg-white px-4 rounded-lg cursor-pointer"
                             :class="[ item.sm_text ? 'py-3' : 'py-5' ]"
                        >
                            <span class="text-gray-500">
                                <mdicon :name="item.icon"/>
                            </span>
                            <div class="flex flex-col">
                                <span v-if="item.text" class="text-gray-900">{{ item.text }}</span>
                                <span v-if="item.sm_text" class="text-gray-500 text-sm">{{ item.sm_text }}</span>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageSwitcherItem from "@/Pages/Partials/SideBar/PageSwitcher/PageSwitcherItem";
import PageSwitcher from "@/Pages/Partials/SideBar/PageSwitcher/PageSwitcher";
import { VueAgile } from 'vue-agile'
import { Fancybox } from "@fancyapps/ui/src/Fancybox/Fancybox.js";
import "@fancyapps/ui/dist/fancybox.css";

export default {
    name: "Settings",
    components: {
        PageSwitcherItem,
        PageSwitcher,
        agile: VueAgile
    },
    data() {
        return {
            loaded: false,
            userImages: [
                'https://lipsum.app/id/61/1600x1200',
                'https://lipsum.app/id/62/1600x1200',
            ].map(item=>
                `<div class="example-slide flex">
                    <a
                    class="w-full"
                        data-fancybox="gallery"
                        href="${item}"
                    >
                        <img class="rounded w-full" src="${item}" />
                    </a>
                </div>`
            ),
            settingsListItem: [
                {
                    icon: 'phone-outline',
                    text: '+989363680395',
                    sm_text: 'Phone',
                    action: (e, item) => {
                        this.copyToClipboard(item.text);
                        this.makeToast('Phone copied to clipboard');
                    }
                },
                {
                    icon: 'account',
                    text: 'anonumouse070a',
                    sm_text: 'Username',
                    action: (e, item) => {
                        this.copyToClipboard('@'+item.text);
                        this.makeToast('Phone copied to clipboard');
                    }
                },
                'line',
                {
                    icon: 'bell-outline',
                    text: 'Notifications and Sounds',
                    action: function (e) {

                    }
                },
                {
                    icon: 'database-outline',
                    text: 'Data and Storage',
                    action: function (e) {

                    }
                },
                {
                    icon: 'lock-outline',
                    text: 'Privacy and Security',
                    action: function (e) {

                    }
                },
                {
                    icon: 'cog-outline',
                    text: 'General Settings',
                    action: function (e) {

                    }
                },
                {
                    icon: 'cog-outline',
                    text: 'Devices',
                    text_after: '6',
                    action: function (e) {

                    }
                },
            ]

        }
    },
    mounted() {
        this.$nextTick(() => this.loaded=true);
        Fancybox.bind("[data-fancybox]", {
        });
    }
}
</script>

<style >
.vue-carousel__indicators.vue-carousel__indicators--line{
    top: 0;
    bottom: auto;
}
</style>
