<template>

    <div class="w-screen h-screen flex flex-row">
        <div class="w-[420px] h-full  relative">
            <PageSwitcher v-model="activePage">
                <div class="bg-gray-100 h-full w-full p-4 flex flex-col gap-4">
                    SideBar <br><br>
                    <button class="p-4 bg-gray-900 text-white"
                            @click="activePage='settings'"
                    >
                        Settings
                    </button>

                    <input class="w-full bg-transparent outline-0 ring ring-2 ring-fuchsia-800 rounded-2xl leading-8 px-4"
                           @focusin="activePageSearch = 'search'"
                           @focusout="activePageSearch = ''"
                    >
                    <PageSwitcher v-model="activePageSearch" :animations="{main: 'zoom-out', page: 'zoom-in'}">
                        <div class="w-full h-full bg-red-100 flex flex-col gap-4 p-4">
                            <ul class="gap-4 flex flex-col">
                                <li>Item1 numquam sequi tempora? Reiciendis.</li>
                                <li>Item2 numquam sequi tempora? Reiciendis.</li>
                                <li>Item3 numquam sequi tempora? Reiciendis.</li>
                                <li>Item4 numquam sequi tempora? Reiciendis.</li>
                                <li>Item5 numquam sequi tempora? Reiciendis.</li>
                            </ul>
                        </div>
                        <template #items>
                            <PageSwitcherItem name="search">
                                <div class="h-full w-full bg-red-100">
                                    This is Search Page
                                    <button class="p-4 bg-gray-900 text-white"
                                            @click="activePageSearch=''"
                                    >
                                        Close
                                    </button>
                                </div>
                            </PageSwitcherItem>
                        </template>
                    </PageSwitcher>

                </div>

                <template #items>
                    <PageSwitcherItem name="settings">
                        <div class="h-full w-full bg-red-100">
                            This is Settings Page
                            <button class="p-4 bg-gray-900 text-white"
                                    @click="activePage=''"
                            >
                                Close
                            </button>
                        </div>
                    </PageSwitcherItem>
                </template>

            </PageSwitcher>
        </div>

        <div class="flex-1 flex flex-col gap-8">
            <carousel :items-to-show="1.5">
                <slide v-for="slide in 10" :key="slide">
                    <a
                        data-fancybox="gallery"
                        href="https://lipsum.app/id/61/1600x1200"
                    >
                        <img class="rounded" src="https://lipsum.app/id/61/200x150" />
                    </a>
                </slide>

                <template #addons>
                    <navigation />
                    <pagination />
                </template>
            </carousel>
        </div>
    </div>

    <h1 class="mt-12 mb-8 px-6 text-center text-lg md:text-2xl font-semibold">
        Place caption at the top
    </h1>
    <div class="carousel">
        <div class="carousel__slide">1</div>
        <div class="carousel__slide">2</div>
        <div class="carousel__slide">3</div>
    </div>
    <div class="flex flex-wrap gap-5 justify-center max-w-5xl mx-auto px-6">
        <a
            data-fancybox="gallery"
            data-caption="Vestibulum lobortis ultricies ipsum, a maximus ligula dignissim in"
            href="https://lipsum.app/id/61/1600x1200"
        >
            <img class="rounded" src="https://lipsum.app/id/61/200x150" />
        </a>
        <a
            data-fancybox="gallery"
            data-caption="Etiam at lobortis ligula"
            href="https://lipsum.app/id/62/1600x1200"
        >
            <img class="rounded" src="https://lipsum.app/id/62/200x150" />
        </a>
    </div>
</template>

<script>
import PageSwitcher from "@/Pages/Partials/SideBar/PageSwitcher/PageSwitcher";
import PageSwitcherItem from "@/Pages/Partials/SideBar/PageSwitcher/PageSwitcherItem";
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
// import { Fancybox } from "@fancyapps/ui";
// or
import { Fancybox } from "@fancyapps/ui/src/Fancybox/Fancybox.js";
import "@fancyapps/ui/dist/fancybox.css";

export default {
    name: "Test",
    components: {
        PageSwitcherItem, PageSwitcher,
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data() {
        return {
            activePage: '',
            activePageSearch: '',
        }
    },
    methods:{

    },
    watch: {
    },
    mounted() {
        Fancybox.bind("[data-fancybox]", {
            // Your options go here
        });
    }
}
</script>

<style scoped>
.carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color:  var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}
</style>
