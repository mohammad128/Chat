<template>
    <ContextMenu :data="contextMenuData" v-model="showContextMenu">
        <chat-list-item v-for="(item, index) in data"
                        :key="index"
                        :data="item"
                        :active="item == activeItem"
                        @clickOnItem="clickOnItem($event)"
                        @contextmenu="contextMenuData=item;showContextMenu=false;showContextMenu=true"
                        @click="showContextMenu=false" />

        <template #menuContent>
            <div class="w-48">
                <Menu :data="contextMenuItems"/>
            </div>
        </template>

    </ContextMenu>
</template>

<script>
import ChatListItem from "@/Pages/Partials/ChatList/ChatListItem";
import ContextMenu from "@/Pages/Component/ContextMenu";
import Menu from "@/Pages/Partials/SideBar/Components/Menu/Menu";


export default  {
    components: {
        Menu,
        ChatListItem,
        ContextMenu
    },
    props: {
        data: {
            type: Object,
            default: null,
        }
    },
    data() {
        return {
            contextMenuData: null,
            showContextMenu: false,
            activeItem: null,
            contextMenuItems: [
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
            ],
        }
    },
    methods: {
        clickOnItem(item) {
            this.activeItem = item;
            console.log(item);
        }
    },
    watch: {
        showContextMenu(newVal, OldVal) {
            console.log(newVal);
        },
    }
}
</script>

<style scoped>

</style>
