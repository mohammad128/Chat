<template>
    <div class="absolute left-0 right-0 top-0 bottom-0 w-full h-full bg-white">

        <div class="relative h-full w-full bg-white flex flex-col ">
            <div class="sticky top-0 h-14 border-b-2 flex flex-row items-center justify-between px-4">
                <div class="flex flex-row items-center gap-4">
                    <span v-wave class="p-2 z-10 bg-white hover:bg-gray-100 rounded-full cursor-pointer text-gray-500"
                          @click="$emit('close')"
                    >
                        <mdicon name="arrow-left"/>
                    </span>
                    <span class="text-xl font-bold text-gray-900">Settings</span>
                </div>
                <div class="flex flex-row gap-2">
                    <span v-wave class="p-2 z-10 bg-white hover:bg-gray-100 rounded-full cursor-pointer text-gray-500">
                        <mdicon name="pencil-outline"/>
                    </span>
                    <span v-wave class="p-2 z-10 bg-white hover:bg-gray-100 rounded-full cursor-pointer text-gray-500">
                        <mdicon name="dots-vertical"/>
                    </span>
                </div>
            </div>
            <div class="flex-1 overflow-y-auto">
                <div class="bg-">

                </div>
                <ul>
                    <li v-for="i in 30" :key="i">This Is Item {{i}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Settings"
}
</script>

<style scoped>

</style>
