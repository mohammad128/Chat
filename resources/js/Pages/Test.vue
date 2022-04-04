<template>
    <div class="w-screen h-screen flex flex-row bg-red-100 items-center justify-center">

        <div class="w-[480px] h-screen bg-white overflow-y-auto">

            <Emoji/>
        </div>

    </div>

</template>

<script>
import Emoji from "@/Pages/Component/EmojiPicker/Emoji";
export default {
    name: "Test",
    components: {
        Emoji,
    },
    methods: {
    }
}
</script>

<style >
</style>
