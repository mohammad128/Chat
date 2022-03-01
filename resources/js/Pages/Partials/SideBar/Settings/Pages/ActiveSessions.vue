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
                    <span class="text-xl font-bold text-gray-900">Active Sessions</span>
                </div>
            </div>
            <div class="flex-1 overflow-y-auto">
                <div class="px-2">
                    <span class="block w-full pl-4 text-chatListActiveBg cursor-pointer font-bold my-4">This Device</span>

                    <div class="flex flex-col bg-white hover:bg-gray-100 rounded-lg px-4 py-3 cursor-pointer" v-wave>
                        <span class="font-bold text-gray-900">Laragram Web 1.1.1</span>
                        <span class="text-sm text-gray-800">Chrome 98, Linux</span>
                        <span class="text-sm text-gray-400">84.17.47.3 - Amsterdam, Netherlands</span>
                    </div>

                    <div class="flex flex-row text-red-500 bg-white hover:bg-red-50 rounded-lg p-4 gap-8 cursor-pointer" v-wave>
                        <span class="text-red-500">
                            <mdicon name="minus-circle-outline" size="28"/>
                        </span>
                        <span class="text-red-500">Terminate All Other Sessions</span>
                    </div>
                </div>

                <div class="mt-2 w-full bg-gray-100 text-sm px-6 py-3 text-gray-500 border-t-2 border-t-gray-200 border-b border-b-gray-200">Logs out all devices except for this one.</div>

                <div class="px-2">
                    <span class="block w-full pl-4 text-chatListActiveBg cursor-pointer font-bold my-4">Active sessions</span>

                    <div v-for="n in 5" class="flex flex-col bg-white hover:bg-gray-100 rounded-lg px-4 py-3 cursor-pointer" v-wave>
                        <span class="font-bold text-gray-900">Laragram Web 1.1.1</span>
                        <span class="text-sm text-gray-800">Chrome 98, Linux</span>
                        <span class="text-sm text-gray-400">84.17.47.3 - Amsterdam, Netherlands</span>
                    </div>
                </div>

                <div class="mt-2 w-full bg-gray-100 text-sm px-6 py-3 text-gray-500 border-t-2 border-t-gray-200 border-b border-b-gray-200">
                    The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux.
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ActiveSessions"
}
</script>

<style scoped>

</style>
