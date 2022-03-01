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
                General Settings
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "GeneralSettings"
}
</script>

<style scoped>

</style>
