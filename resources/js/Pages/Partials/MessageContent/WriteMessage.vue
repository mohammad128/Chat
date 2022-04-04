<template>
    <div class="absolute left-0 right-0 bottom-0 top-0">
        <div class="write-message w-full pb-4 flex flex-row gap-2 shrink-0 w-full max-w-3xl m-auto">
            <div class="w-full flex-1 bg-white rounded-xl flex flex-row triangle-bottom-right items-end">
                <span class="p-3 text-gray-500 rounded-full cursor-pointer">
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
        </div>
    </div>
</template>

<script>
export default {
    name: "WriteMessage"
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
