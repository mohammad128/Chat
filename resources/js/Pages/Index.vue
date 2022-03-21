<template>
    <div class="w-full h-screen min-h-screen max-h-screen flex flex-row">
        <div class="w-[420px] h-full ">
            <SideBar/>
        </div>
        <div class="flex-1 h-full w-full bg-cover " style="background-image: url('/uploads/bg.jpeg')">
            <MessageContent/>
        </div>
    </div>
</template>

<script >
import SideBar from "@/Pages/Partials/SideBar/SideBar";
import Switch from "@/Pages/Component/Switch";
import MessageContent from "@/Pages/Partials/MessageContent/MessageContent";

export default {
    components: {
        MessageContent,
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
