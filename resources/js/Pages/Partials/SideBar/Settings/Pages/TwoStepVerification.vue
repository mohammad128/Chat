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
                    <span class="text-xl font-bold text-gray-900">Two-Step Verification</span>
                </div>
            </div>
            <div class="flex-1 overflow-y-auto">
                <div class="cursor-pointer flex flex-row justify-center items-center" @click="resetAnimation" >
                    <LockAnimation v-if="!restartAnimation" />
                </div>
                <div class="p-4">
                    <span v-wave class="cursor-pointer rounded-lg text-white bg-chatListActiveBg text-lg block p-4 text-center transform hover:contrast-[0.8] duration-300">Enable</span>
                </div>
                <div class="px-12 py-4 text-sm text-gray-500 text-center">
                    You can set a password that will be required when you log in on a new device in addition to the code you get in the SMS.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LockAnimation from "@/Pages/Component/LockAnimation";
export default {
    name: "TwoStepVerification",
    components: {LockAnimation},
    data() {
        return {
            restartAnimation: false,
        }
    },
    methods: {
        resetAnimation() {
            this.restartAnimation=true;
            this.$nextTick(()=>{
                this.restartAnimation = false;
            })
        }
    }

}
</script>

<style scoped>

</style>
