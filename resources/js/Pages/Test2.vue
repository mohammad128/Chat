<template>
    <div class="min-h-screen w-screen relative bg-orange-300">
        <div class="flex flex-row w-full">
            <div class="w-1/4 min-h-screen bg-blue-100 ">
                <div class="sticky top-0 flex flex-col p-4 gap-4">
                    <div class="w-full p-4 bg-white rounded-lg shadow-lg" v-for="i in 16">Item {{i}}</div>
                </div>
            </div>
            <div class="flex-1 min-h-screen bg-red-100">
                <div class="w-full h-full bg-gray-100">
                    <div class="grid grid-cols-3 p-4 gap-4">
                        <div class=" bg-white rounded-lg shadow-lg" v-for="i in 33">
                            <div class="relative">
                                <img class="" src="/uploads/avatars/2.png" alt="" />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur consequatur delectus dicta dolorem eius eligendi eos ex excepturi explicabo id maxime, porro praesentium quos recusandae repudiandae sequi voluptates voluptatum?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Test",
    components: {
    },
    data() {
        return {

        }
    },
    methods:{

    },
    watch: {
    },
    mounted() {
    }
}
</script>

<style >

</style>
