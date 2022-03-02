<template>
    <div class="relative w-full h-full ">
        <PageSwitcher v-model="sidebarPage">
            <SideBarContainer :menu-items="menuItems" :new-menu="newMenu"/>

            <template #items>
                <PageSwitcherItem name="settings">
                    <Settings @close="sidebarPage=''"/>
                </PageSwitcherItem>
                <PageSwitcherItem name="contact">
                    <Contact @close="sidebarPage=''" @selectContact="contactCallbackFunction" :multi-select="mutliSelectContact"/>
                </PageSwitcherItem>
            </template>
        </PageSwitcher>
    </div>
</template>

<script>
import SideBarContainer from "@/Pages/Partials/SideBar/SideBarContainer";
import Settings from "@/Pages/Partials/SideBar/Settings/Settings";
import PageSwitcher from "@/Pages/Partials/SideBar/PageSwitcher/PageSwitcher";
import PageSwitcherItem from "@/Pages/Partials/SideBar/PageSwitcher/PageSwitcherItem";
import Contact from "@/Pages/Partials/SideBar/Contact";

export default {
    name: "SideBar",
    components: {Contact, PageSwitcherItem, PageSwitcher, Settings, SideBarContainer},
    data() {
        return{
            contactCallbackFunction: null,
            sidebarPage: '',
            mutliSelectContact: false,
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
                    action: () => {
                        this.mutliSelectContact = false;
                        this.contactCallbackFunction = this.selectContact;
                        this.sidebarPage = 'contact'
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
                    action: () => {
                        this.mutliSelectContact = true;
                        this.contactCallbackFunction = this.selectedContactForCreateGroup;
                        this.sidebarPage = 'contact'
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
    methods: {
        selectContact(e) {
            alert('selectContact');
            console.log(e);
        },
        selectedContactForCreateGroup(e) {
            alert('selectedContactForCreateGroup');
            console.log(e);
        }
    },
    mounted() {
        this.sidebarPage = '';
    }

}
</script>

<style scoped>

</style>
