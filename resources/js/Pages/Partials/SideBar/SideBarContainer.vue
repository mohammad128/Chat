<template>
    <div class="sideBar relative flex flex-col h-full border-r-2 border-gray-200 ">
        <div class="sidebarHeader">
            <SideBarHeader v-model="search" :menu-items="menuItems" @openSearchBox="activePage='search'" @closeSearchBox="activePage=''"  @searchInput="(e)=>search=e"/>
        </div>
        <div class="sideBarContent flex-1">
            <PageSwitcher v-model="activePage" :animations="{main: 'zoom-out', page: 'zoom-in'}">
                <SidebarContent/>
                <template #items>
                    <PageSwitcherItem name="search">
                        <Search v-if="activePage == 'search'" v-model="search"/>
                    </PageSwitcherItem>
                </template>
            </PageSwitcher>
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
                            <mdicon class="absolute pt-1" v-if="newMenuShow" name="close" size="24"></mdicon>
                            <mdicon class="absolute pt-1" v-else name="pencil" size="24"></mdicon>
                        </transition>
                    </span>
                    <template #content="{ close }">
                        <transition name="scale-from-bottom-right">
                            <div class="mr-6" v-show="newMenuShow">
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
import PageSwitcher from "@/Pages/Component/PageSwitcher/PageSwitcher";
import PageSwitcherItem from "@/Pages/Component/PageSwitcher/PageSwitcherItem";
import Search from "@/Pages/Partials/Search/Search";

export default  {
    components: {
        Search,
        PageSwitcherItem,
        PageSwitcher,
        SideBarHeader,
        SidebarContent,
        Menu
    },
    props: {
        menuItems: Array,
        newMenu: Array,
    },
    methods: {
    },
    data() {
        return {
            activePage: '',
            search: '',
            newMenuShow: false,
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
