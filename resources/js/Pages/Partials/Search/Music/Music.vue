<template>
    <div class="w-full flex flex-col gap-4 p-4">
        <MusicItem v-for="(item, index) in items" :key="index" :data="item"/>
    </div>
</template>

<script>
import MusicItem from "@/Pages/Partials/Search/Music/MusicItem";
export default {
    name: "Music",
    components: {MusicItem},
    data() {
        return {
            items: [
                {
                    title: 'Music Title 1',
                    time: 'Mar 15',
                    size: '12.33 MB',
                    sender: 'Mohammad 1',
                    src: '/uploads/medias/audios/1.mp3',
                },
                {
                    title: 'Music Title 2',
                    time: 'Mar 11',
                    size: '12.33 MB',
                    sender: 'Mohammad 2',
                    src: '/uploads/medias/audios/2.mp3',
                },
                {
                    title: 'Music Title 3',
                    time: 'Mar 1',
                    size: '12.33 MB',
                    sender: 'Mohammad 3',
                    src: '/uploads/medias/audios/3.mp3',
                },
                {
                    title: 'Music Title 3',
                    time: 'Mar 4',
                    size: '11.33 MB',
                    sender: 'Mohammad 5',
                    src:  "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3",
                },


            ]
        }
    },


}
</script>

<style scoped>

</style>
