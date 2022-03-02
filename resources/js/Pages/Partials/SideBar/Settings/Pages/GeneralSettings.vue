<template>
    <div class="w-full h-full bg-gray-200">
        <div class="relative h-full w-full bg-white flex flex-col ">
            <div class="sticky top-0 h-14 border-b-2 flex flex-row items-center justify-between px-4">
                <div class="flex flex-row items-center gap-4">
                    <span v-wave class="p-2 z-10 bg-white hover:bg-gray-100 rounded-full cursor-pointer text-gray-500"
                          @click="$emit('close')"
                    >
                        <mdicon name="arrow-left"/>
                    </span>
                    <span class="text-xl font-bold text-gray-900">General Settings</span>
                </div>
            </div>
            <div class="flex-1 overflow-y-auto">

                <div class="px-2">
                    <span class="block w-full pl-4 text-chatListActiveBg cursor-pointer font-bold my-4">Settings</span>

                    <div class="flex flex-col bg-white rounded-lg px-4 py-3 gap-4" v-wave>
                        <div class="flex flex-row justify-between">
                            <span class="text-gray-900">Message Text Size</span>
                            <span class="text-gray-500">
                                {{fontSize}}
                            </span>
                        </div>
                        <div class="w-full">
                            <RangeSlider v-model="fontSize" :min="10" :max="20" :step="1" />
                        </div>
                    </div>

                    <div class="relative flex flex-row bg-white rounded-lg px-4 py-4 gap-8 cursor-pointer" v-wave @click="enableAnimations=!enableAnimations">
                        <div class="absolute z-10 top-0 left-0 right-0 bottom-0 w-full h-full"></div>
                        <CheckBox v-model="enableAnimations"/>
                        <span>Enable Animations</span>
                    </div>
                    <hr class="my-4">

                    <span class="block w-full pl-4 text-chatListActiveBg cursor-pointer font-bold my-4">Settings</span>
                    <div class="relative flex flex-row bg-white rounded-lg px-4 py-4 gap-8 cursor-pointer" v-wave @click="sendBy='sendByEnter'">
                        <div class="absolute z-10 top-0 left-0 right-0 bottom-0 w-full h-full"></div>
                        <Radio v-model="sendBy" value="sendByEnter"/>
                        <div class="flex flex-col">
                            <span>Send By Enter</span>
                            <span class="text-sm text-gray-500">
                                New line by Shift + Enter
                            </span>
                        </div>
                    </div>
                    <div class="relative flex flex-row bg-white rounded-lg px-4 py-4 gap-8 cursor-pointer" v-wave @click="sendBy='sendByCtrlEnter'">
                        <div class="absolute z-10 top-0 left-0 right-0 bottom-0 w-full h-full"></div>
                        <Radio v-model="sendBy" value="sendByCtrlEnter"/>
                        <div class="flex flex-col">
                            <span>Send By Ctrl + Enter</span>
                            <span class="text-sm text-gray-500">
                               New line by Enter
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RangeSlider from "@/Pages/Component/RangeSlider";
import CheckBox from "@/Pages/Component/CheckBox";
import Radio from "@/Pages/Component/Radio";

export default {
    name: "GeneralSettings",
    components: {Radio, CheckBox, RangeSlider},
    data() {
        return {
            fontSize: 16,
            enableAnimations: true,
            sendBy: 'sendByEnter'
        }
    },
    mounted() {
    }
}
</script>

<style scoped>

</style>
