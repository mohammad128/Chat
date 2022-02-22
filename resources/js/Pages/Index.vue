<template>
    <div class="w-full h-screen min-h-screen max-h-screen flex flex-row">
        <div class="w-[420px] h-full">
            <SideBar/>
        </div>
        <div class="flex-1 h-full bg-cover " style="background-image: url('/uploads/bg.jpeg')">
            <div class="w-full h-full p-4">

            </div>
        </div>
    </div>
</template>

<script >
import SideBar from "@/Pages/Partials/SideBar/SideBar";
import Switch from "@/Pages/Component/Switch";

export default {
    components: {
        SideBar,
        Switch,
    },
    data() {
        return {

        }
    },
    methods: {
        chatListOnItemClicked(item) {
            alert();
            console.log('chatListOnItemClicked', item);
        }
    },
    provide() {
        return {
            chatListOnItemClicked: this.chatListOnItemClicked
        }
    }
}


</script>

<style scoped>

</style>
