<template>
    <div class="w-full h-full grid grid-cols-3">
        <div class="relative inline-block" v-for="(media, index) in medias" :key="index">
            <div class="example-slide flex">
                <a
                    v-if="media.type === 'image'"
                    class="w-full"
                    data-fancybox="gallery2"
                    :href="media.src"
                >
                    <img class="rounded w-full" :src="media.src" />
                </a>
                <a
                    v-else-if="media.type === 'video'"
                    class="w-full"
                    data-fancybox="gallery3"
                    :href="media.src"
                >
                    <video class="rounded w-full" :src="media.src" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { Fancybox } from "@fancyapps/ui/src/Fancybox/Fancybox.js";
import "@fancyapps/ui/dist/fancybox.css";

export default {
    name: "Media",
    data() {
        return {
            medias: [
                {
                    id: 100,
                    type: 'video',
                    captions: 'This this caption 2...',
                    src: '/uploads/medias/videos/2.mp4',
                },
                {
                    id: 1,
                    type: 'image',
                    captions: 'This this caption 1...',
                    src: '/uploads/medias/images/1.png',
                },
                {
                    id: 101,
                    type: 'video',
                    captions: 'This this caption 1...',
                    src: '/uploads/medias/videos/1.mp4',
                },
                {
                    id: 2,
                    type: 'image',
                    captions: 'This this caption 2...',
                    src: '/uploads/medias/images/2.png',
                },
                {
                    id: 3,
                    type: 'image',
                    captions: 'This this caption 3...',
                    src: '/uploads/medias/images/3.png',
                },
                {
                    id: 4,
                    type: 'image',
                    captions: 'This this caption 4...',
                    src: '/uploads/medias/images/4.png',
                },
                {
                    id: 5,
                    type: 'image',
                    captions: 'This this caption 5...',
                    src: '/uploads/medias/images/5.png',
                },
                {
                    id: 6,
                    type: 'image',
                    captions: 'This this caption 6...',
                    src: '/uploads/medias/images/6.png',
                },
                {
                    id: 7,
                    type: 'image',
                    captions: 'This this caption 7...',
                    src: '/uploads/medias/images/7.png',
                },
                {
                    id: 8,
                    type: 'image',
                    captions: 'This this caption 8...',
                    src: '/uploads/medias/images/8.png'
                },
                {
                    id: 9,
                    type: 'image',
                    captions: 'This this caption 9...',
                    src: '/uploads/medias/images/9.png',
                },
                {
                    id: 10,
                    type: 'image',
                    captions: 'This this caption 10...',
                    src: '/uploads/medias/images/10.png',
                },
                {
                    id: 11,
                    type: 'image',
                    captions: 'This this caption 11...',
                    src: '/uploads/medias/images/11.png'
                },
                {
                    id: 100,
                    type: 'video',
                    captions: 'This this caption 2...',
                    src: '/uploads/medias/videos/2.mp4',
                },
                {
                    id: 1,
                    type: 'image',
                    captions: 'This this caption 1...',
                    src: '/uploads/medias/images/1.png',
                },
                {
                    id: 101,
                    type: 'video',
                    captions: 'This this caption 1...',
                    src: '/uploads/medias/videos/1.mp4',
                },
                {
                    id: 2,
                    type: 'image',
                    captions: 'This this caption 2...',
                    src: '/uploads/medias/images/2.png',
                },
                {
                    id: 3,
                    type: 'image',
                    captions: 'This this caption 3...',
                    src: '/uploads/medias/images/3.png',
                },
                {
                    id: 4,
                    type: 'image',
                    captions: 'This this caption 4...',
                    src: '/uploads/medias/images/4.png',
                },
                {
                    id: 5,
                    type: 'image',
                    captions: 'This this caption 5...',
                    src: '/uploads/medias/images/5.png',
                },
                {
                    id: 6,
                    type: 'image',
                    captions: 'This this caption 6...',
                    src: '/uploads/medias/images/6.png',
                },
                {
                    id: 7,
                    type: 'image',
                    captions: 'This this caption 7...',
                    src: '/uploads/medias/images/7.png',
                },
                {
                    id: 8,
                    type: 'image',
                    captions: 'This this caption 8...',
                    src: '/uploads/medias/images/8.png'
                },
                {
                    id: 9,
                    type: 'image',
                    captions: 'This this caption 9...',
                    src: '/uploads/medias/images/9.png',
                },
                {
                    id: 10,
                    type: 'image',
                    captions: 'This this caption 10...',
                    src: '/uploads/medias/images/10.png',
                },
                {
                    id: 11,
                    type: 'image',
                    captions: 'This this caption 11...',
                    src: '/uploads/medias/images/11.png'
                },
            ]
        }
    },
    mounted() {
        Fancybox.bind("[data-fancybox]", {
        });
    }
}
</script>

<style scoped>

</style>
