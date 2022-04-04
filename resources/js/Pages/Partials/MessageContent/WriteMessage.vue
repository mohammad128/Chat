<template>
    <div class="absolute left-0 right-0 bottom-0 top-0">
        <div class="relative write-message w-full pb-4 flex flex-row gap-2 shrink-0 w-full max-w-3xl m-auto">
            <div class="w-full flex-1 bg-white rounded-xl flex flex-row triangle-bottom-right items-end" >
                <span class="p-3 text-gray-500 rounded-full cursor-pointer"  @mouseenter="onShowEmoji()" @click="showEmoji=!showEmoji">
                    <mdicon name="emoticon-happy-outline" :size="28"/>
                </span>
                    <textarea class="w-full flex-1 leading-4 message-input"></textarea>
                <span class="p-3 text-gray-500 rounded-full cursor-pointer transform -rotate-45">
                    <mdicon name="attachment" :size="28"/>
                </span>
            </div>
            <span class="p-3 bg-chatListActiveBg text-white rounded-full">
                <mdicon name="microphone-outline" :size="28"/>
            </span>

            <transition name="scale-fade-from-bottom-left">
                <div v-show="showEmoji"  class="bg-red-50 absolute bottom-[110%] rounded-2xl overflow-hidden" @mousemove="showEmoji=true" @mouseleave="showEmoji=false">
                    <Emoji/>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import Emoji from "@/Pages/Component/EmojiPicker/Emoji";
export default {
    name: "WriteMessage",
    components: {Emoji},
    data() {
        return {
            showEmoji: false,
        }
    },
    methods: {
        onShowEmoji() {
            console.log('show')
            setTimeout(()=>{
                this.showEmoji = true;
            }, 100);
        }
    }

}
</script>

<style scoped>
.message-input {
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    caret-color: #3390ec;

    resize: none; /*remove the resize handle on the bottom right*/
}
</style>
