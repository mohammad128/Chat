<template>
    <div class="absolute left-0 right-0 top-0 bottom-0 w-full h-full bg-white">

        <PageSwitcher v-model="activePage">
            <div class="w-full h-full bg-gray-200">
                <div class="relative h-full w-full bg-white flex flex-col ">
                    <div class="sticky top-0 h-14 border-b-2 flex flex-row items-center justify-between px-4">
                        <div class="flex flex-row items-center gap-4">
                            <span v-wave class="p-2 z-10 bg-white hover:bg-gray-100 rounded-full cursor-pointer text-gray-500"
                                  @click="$emit('close')"
                            >
                                <mdicon name="arrow-left"/>
                            </span>
                            <span class="text-xl font-bold text-gray-900">Privacy and Security</span>
                        </div>
                    </div>
                    <div class="flex-1 overflow-y-auto" >
                        <template v-for="(groupItem, groupKey) in items" :key="groupKey">
                            <template v-if="groupItem.type==='group'">
                                <div class="p-2">
                                    <span v-if="groupItem.title" class="text-chatListActiveBg font-bold my-2 px-4 block">{{ groupItem.title }}</span>
                                    <div v-for="(item, key) in groupItem.items" :key="key" v-wave
                                         @click="item.action($event, item)"
                                         class="w-full flex flex-row cursor-pointer hover:bg-gray-100 px-4 py-3 rounded-lg"
                                    >
                                        <div class="flex flex-row gap-6 items-stretch">
                                            <span v-if="item.icon" class="text-gray-500">
                                                <mdicon :name="item.icon" size="26"/>
                                            </span>
                                            <div class="flex flex-col">
                                                <span v-if="item.text" class="text-gray-900">{{item.text}}</span>
                                                <span v-if="item.sm_text" class="text-gray-500 text-xs">{{item.sm_text}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <template v-else-if="groupItem.type==='message'">
                                <div class="bg-gray-100 px-6 py-3 border-t-2 border-t-gray-200 border-b border-b-gray-200">
                                    <span class="text-gray-500 text-xs">{{groupItem.text}}</span>
                                </div>
                            </template>
                        </template>

                    </div>
                </div>
            </div>
            <template #items>
                <PageSwitcherItem name="blocked_users">
                    <BlockedUsers @close="activePage=''"/>
                </PageSwitcherItem>
                <PageSwitcherItem name="tow_step_verification">
                    <TwoStepVerification @close="activePage=''"/>
                </PageSwitcherItem>
                <PageSwitcherItem name="active_sessions">
                    <ActiveSessions @close="activePage=''"/>
                </PageSwitcherItem>
            </template>
        </PageSwitcher>
    </div>
</template>

<script>
import PageSwitcher from "@/Pages/Component/PageSwitcher/PageSwitcher";
import PageSwitcherItem from "@/Pages/Component/PageSwitcher/PageSwitcherItem";
import ActiveSessions from "@/Pages/Partials/SideBar/Settings/Pages/ActiveSessions";
import TwoStepVerification from "@/Pages/Partials/SideBar/Settings/Pages/TwoStepVerification";
import BlockedUsers from "@/Pages/Partials/SideBar/Settings/Pages/BlockedUsers";
export default {
    name: "PrivacyAndSecurity",
    components: {BlockedUsers, TwoStepVerification, ActiveSessions, PageSwitcherItem, PageSwitcher},
    data() {
        return {
            activePage: '',
            items: [
                {
                    type: 'group',
                    title: '',
                    items: [
                        {
                            icon: 'account-cancel-outline',
                            text: 'Blocked Users',
                            sm_text: '8 Users',
                            action: (e, item) => {
                                this.activePage = 'blocked_users';
                            },
                        },
                        {
                            icon: 'lock-outline',
                            text: 'Two-Step Verification',
                            sm_text: 'Off',
                            action: (e, item) => {
                                this.activePage = 'tow_step_verification';
                            },
                        },
                        {
                            icon: 'monitor-cellphone-star',
                            text: 'Active Sessions',
                            sm_text: '6 devices',
                            action: (e, item) => {
                                this.activePage = 'active_sessions';
                            },
                        },
                    ]
                },
                {
                    type: 'message',
                    text: 'Control your sessions on other devices.'
                },
                {
                    type: 'group',
                    title: 'Privacy',
                    items: [
                        {
                            icon: '',
                            text: 'Who can see my phone number?',
                            sm_text: 'My Contacts',
                            action: (e, item) => {
                            },
                        },
                        {
                            icon: '',
                            text: 'Who can see my profile photos & videos?',
                            sm_text: 'Everybody',
                            action: (e, item) => {
                            },
                        },
                        {
                            icon: '',
                            text: 'Who can see your Last Seen time?',
                            sm_text: 'Nobody',
                            action: (e, item) => {
                            },
                        },
                        {
                            icon: '',
                            text: 'Who can add me to group chats?',
                            sm_text: 'My Contacts',
                            action: (e, item) => {
                            },
                        },
                    ]
                },
                {
                    type: 'message',
                    text: 'Change who can add you to groups and channels.'
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>
