<template>
    <div class="sideBar relative flex flex-col h-full border-r-2 border-gray-200 ">
        <div class="sidebarHeader">
            <SideBarHeader/>
        </div>
        <div class="sideBarContent flex-1 px-2 overflow-y-auto">
            <SidebarContent/>
        </div>

        <div v-wave class="w-14 h-14 ring-2 ring-gray-200 cursor-pointer  rounded-full text-white bg-chatListActiveBg absolute bottom-4 right-4 flex flex-col items-center justify-center">
            <div class="relative">

                <Popper arrow offsetDistance="4"
                        placement="top"
                        @open:popper="newMenuShow=true"
                        @close:popper="newMenuShow=false"
                >
                    <span  class="w-14 h-14 cursor-pointer  rounded-full block flex flex-col justify-center items-center"
                    >
                        <transition name="scale">
                            <mdicon class="absolute" v-if="newMenuShow" name="close" size="24"></mdicon>
                            <mdicon class="absolute" v-else name="pencil" size="24"></mdicon>
                        </transition>
                    </span>
                    <template #content="{ close }">
                        <transition name="scale-from-bottom-right">
                            <div class="mr-44 mb-2" v-show="newMenuShow">
                                <div class="w-56">
                                    <Menu :data="newMenu" />
                                </div>
                            </div>
                        </transition>
                    </template>
                </Popper>

            </div>
        </div>


    </div>
</template>

<script >
import SideBarHeader from "@/Pages/Partials/SideBar/SideBarHeader";
import SidebarContent from "@/Pages/Partials/SideBar/SidebarContent";
import Menu from "@/Pages/Partials/SideBar/Components/Menu/Menu";

export default  {
    components: {
        SideBarHeader,
        SidebarContent,
        Menu
    },
    data() {
        return {
            newMenuShow: false,
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
    }

}
</script>

<style scoped>
.popper{
    background: red;
    width: 0 !important;
}
</style>
