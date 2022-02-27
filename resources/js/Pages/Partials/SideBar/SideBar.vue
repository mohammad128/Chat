<template>
    <div class="relative w-full h-full ">
        <PageSwitcher v-model="sidebarPage">
            <SideBarContainer :menu-items="menuItems" :new-menu="newMenu"/>

            <template #items>
                <PageSwitcherItem name="settings">
                    <Settings @close="sidebarPage=''"/>
                </PageSwitcherItem>
            </template>
        </PageSwitcher>
    </div>
</template>

<script>
import SideBarContainer from "@/Pages/Partials/SideBar/SideBarContainer";
import Settings from "@/Pages/Partials/SideBar/Settings";
import PageSwitcher from "@/Pages/Partials/SideBar/PageSwitcher/PageSwitcher";
import PageSwitcherItem from "@/Pages/Partials/SideBar/PageSwitcher/PageSwitcherItem";

export default {
    name: "SideBar",
    components: {PageSwitcherItem, PageSwitcher, Settings, SideBarContainer},
    data() {
        return{
            sidebarPage: '',
            menuItems: [
                {
                    'type': 'button',
                    'id': 1,
                    'icon': 'bookmark-outline',
                    'text': 'Saved Messages',
                    'textColor': '#111827',
                    'iconColor': '#4b5563',
                    action: function () {
                        alert('Locout')
                    }
                },
                {
                    'type': 'button',
                    'id': 2,
                    'icon': 'account-outline',
                    'text': 'Contact',
                    'textColor': '#111827',
                    'iconColor': '#4b5563',
                    action: function () {
                        alert('Locout')
                    }
                },
                {
                    'type': 'button',
                    'id': 3,
                    'icon': 'cog-outline',
                    'text': 'Settings',
                    'textColor': '#111827',
                    'iconColor': '#4b5563',
                    action: () => this.sidebarPage = 'settings'
                },
                {
                    'id': 4,
                    'type': 'switch',
                    'active': true,
                    'icon': 'weather-night',
                    'text': 'Dark Mode',
                    'textColor': '#111827',
                    'iconColor': '#4b5563',
                    action: function () {
                        alert('Locout')
                    }
                },
                {
                    'type': 'button',
                    'id': 3,
                    'icon': 'bug-outline',
                    'text': 'Report Bug',
                    'textColor': '#111827',
                    'iconColor': '#4b5563',
                    action: function () {
                        alert('Locout')
                    }
                },
                {
                    'type': 'button',
                    'id': 3,
                    'icon': 'github',
                    'text': 'Github',
                    'textColor': '#111827',
                    'iconColor': '#4b5563',
                    action: function () {
                        alert('Locout')
                    }
                },
                {
                    'type': 'button',
                    'id': 3,
                    'icon': 'information-outline',
                    'text': 'About',
                    'textColor': '#111827',
                    'iconColor': '#4b5563',
                    action: function () {
                        alert('Locout')
                    }
                },
                {
                    'type': 'button',
                    'id': 3,
                    'icon': 'logout',
                    'text': 'Logout',
                    'textColor': '#dc2626',
                    'iconColor': '#ef4444',
                    action: function () {
                        alert('Locout')
                    }
                },
            ],
            newMenu:[
                {
                    'type': 'button',
                    'id': 1,
                    'icon': 'bullhorn-outline',
                    'text': 'New Channel',
                    'textColor': '#000',
                    action: function () {
                        alert('Channel')
                    }
                },
                {
                    'type': 'button',
                    'id': 2,
                    'icon': 'account-group-outline',
                    'text': 'New Group',
                    'textColor': '#000',
                    action: function () {
                        alert('Group')
                    }
                },
                {
                    'type': 'button',
                    'id': 3,
                    'icon': 'account-outline',
                    'text': 'New Private Chat',
                    'textColor': '#000',
                    action: function () {
                        alert('Private')
                    }
                },
            ],
        }
    },
    mounted() {
        this.sidebarPage = 'settings';
    }

}
</script>

<style scoped>

</style>
