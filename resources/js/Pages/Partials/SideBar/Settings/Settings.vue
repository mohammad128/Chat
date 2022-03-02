<template>
    <div class="absolute left-0 right-0 top-0 bottom-0 w-full h-full bg-white">

        <PageSwitcher v-model="activePage">
            <div class="relative h-full w-full bg-white flex flex-col ">

                <div class="sticky z-20 top-0 h-14 border-b-2 flex flex-row items-center justify-between px-4">
                    <div class="flex flex-row items-center gap-4">
                    <span v-wave class="p-2 z-10 bg-white hover:bg-gray-100 rounded-full cursor-pointer text-gray-500"
                          @click="$emit('close')"
                    >
                        <mdicon name="arrow-left"/>
                    </span>
                        <span class="text-xl font-bold text-gray-900">Settings</span>
                    </div>
                    <div class="flex flex-row gap-2">
                        <span @click="activePage='edit_profile'" v-wave class="p-2 z-10 bg-white hover:bg-gray-100 rounded-full cursor-pointer text-gray-500">
                            <mdicon name="pencil-outline"/>
                        </span>

                        <Popper arrow offsetDistance="4"
                                @open:popper="showMenu=true"
                                @close:popper="showMenu=false" >
                            <button v-wave class="bg-white rounded-full p-2 text-gray-500 hover:bg-gray-100">
                                <mdicon name="dots-vertical" />
                            </button>
                            <template #content="{ close }">
                                <transition name="scale-from-top-right">
                                    <div class="pr-4 pt-2" v-show="showMenu">
                                        <div class="w-40">
                                            <Menu :data="menuItems" :container-class="'py-2'" >
                                            </Menu>
                                        </div>
                                    </div>
                                </transition>
                            </template>
                        </Popper>
                    </div>
                </div>

                <div class="flex-1 overflow-y-auto z-10">
                    <div class="userImages w-full relative">

                        <div class="w-full" >
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

            <template #items>
                <PageSwitcherItem name="notifications">
                    <NotificationAndSound @close="activePage=''"/>
                </PageSwitcherItem>
                <PageSwitcherItem name="storage">
                    <DataAndStorage @close="activePage=''"/>
                </PageSwitcherItem>
                <PageSwitcherItem name="security">
                    <PrivacyAndSecurity @close="activePage=''"/>
                </PageSwitcherItem>
                <PageSwitcherItem name="general_settings">
                    <GeneralSettings @close="activePage=''"/>
                </PageSwitcherItem>
                <PageSwitcherItem name="active_sessions">
                    <ActiveSessions @close="activePage=''"/>
                </PageSwitcherItem>
                <PageSwitcherItem name="edit_profile">
                    <EditProfile @close="activePage=''"/>
                </PageSwitcherItem>
            </template>
        </PageSwitcher>
    </div>
</template>

<script>
import PageSwitcherItem from "@/Pages/Partials/SideBar/PageSwitcher/PageSwitcherItem";
import PageSwitcher from "@/Pages/Partials/SideBar/PageSwitcher/PageSwitcher";
import { VueAgile } from 'vue-agile'
import { Fancybox } from "@fancyapps/ui/src/Fancybox/Fancybox.js";
import "@fancyapps/ui/dist/fancybox.css";
import Test from "@/Pages/Test";
import NotificationAndSound from "@/Pages/Partials/SideBar/Settings/Pages/NotificationAndSound";
import DataAndStorage from "@/Pages/Partials/SideBar/Settings/Pages/DataAndStorage";
import PrivacyAndSecurity from "@/Pages/Partials/SideBar/Settings/Pages/PrivacyAndSecurity";
import GeneralSettings from "@/Pages/Partials/SideBar/Settings/Pages/GeneralSettings";
import ActiveSessions from "@/Pages/Partials/SideBar/Settings/Pages/ActiveSessions";
import EditProfile from "@/Pages/Partials/SideBar/Settings/Pages/EditProfile";
import Menu from "@/Pages/Partials/SideBar/Components/Menu/Menu";

export default {
    name: "Settings",
    components: {
        Menu,
        EditProfile,
        ActiveSessions,
        GeneralSettings,
        PrivacyAndSecurity,
        DataAndStorage,
        NotificationAndSound,
        Test,
        PageSwitcherItem,
        PageSwitcher,
        agile: VueAgile
    },
    data() {
        return {
            showMenu: false,
            menuItems: [
                {
                    'type': 'button',
                    'id': 1,
                    'icon': 'logout',
                    'text': 'Logout',
                    'textColor': '#111827',
                    'iconColor': '#4b5563',
                    action: function () {
                        alert('Locout')
                    }
                },
            ],
            activePage: '',
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
                        this.makeToast('Username copied to clipboard.');
                    }
                },
                'line',
                {
                    icon: 'bell-outline',
                    text: 'Notifications and Sounds',
                    action: (e) => {
                        this.activePage = 'notifications'
                    }
                },
                {
                    icon: 'database-outline',
                    text: 'Data and Storage',
                    action: (e) => {
                        this.activePage = 'storage'
                    }
                },
                {
                    icon: 'lock-outline',
                    text: 'Privacy and Security',
                    action: (e) => {
                        this.activePage = 'security'
                    }
                },
                {
                    icon: 'cog-outline',
                    text: 'General Settings',
                    action: (e) => {
                        this.activePage = 'general_settings'
                    }
                },
                {
                    icon: 'cog-outline',
                    text: 'Devices',
                    text_after: '6',
                    action: (e) => {
                        this.activePage = 'active_sessions'
                    }
                },
            ]

        }
    },
    mounted() {
        Fancybox.bind("[data-fancybox]", {
        });
        this.activePage = '';
    }
}
</script>

<style >
.vue-carousel__indicators.vue-carousel__indicators--line{
    top: 0;
    bottom: auto;
}
</style>
