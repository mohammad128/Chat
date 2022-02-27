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
        </div>
    </div>

    <div class="w-[300px]">
        <vue-carousel :data="data"></vue-carousel>

        <agile>
            <div class="slide" v-for="n in 6" :key="n" :class="`slide--${n}`">
                <h3>{{ n }}</h3>
            </div>
            <template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
            <template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
        </agile>

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

import { Fancybox } from "@fancyapps/ui/src/Fancybox/Fancybox.js";
import "@fancyapps/ui/dist/fancybox.css";
import { VueAgile } from 'vue-agile'

export default {
    name: "Test",
    components: {
        PageSwitcherItem, PageSwitcher,
        agile: VueAgile
    },
    data() {
        return {
            activePage: '',
            activePageSearch: '',
            userImages: [
                'https://lipsum.app/id/61/1600x1200',
                'https://lipsum.app/id/62/1600x1200',
            ],

            data: [
                `<div class="example-slide">
                    <a
                        data-fancybox="gallery"
                        data-caption="Vestibulum lobortis ultricies ipsum, a maximus ligula dignissim in"
                        href="https://lipsum.app/id/61/1600x1200"
                    >
                        <img class="rounded" src="https://lipsum.app/id/61/200x150" />
                    </a>
                </div>`,
                `<div class="example-slide">
                    <a
                        data-fancybox="gallery"
                        data-caption="Vestibulum lobortis ultricies ipsum, a maximus ligula dignissim in"
                        href="https://lipsum.app/id/62/1600x1200"
                    >
                        <img class="rounded" src="https://lipsum.app/id/62/200x150" />
                    </a>
                </div>`,
                `<div class="example-slide">
                    <a
                        data-fancybox="gallery"
                        data-caption="Vestibulum lobortis ultricies ipsum, a maximus ligula dignissim in"
                        href="https://lipsum.app/id/63/1600x1200"
                    >
                        <img class="rounded" src="https://lipsum.app/id/63/200x150" />
                    </a>
                </div>`,
            ],
        }
    },
    methods:{

    },
    watch: {
    },
    mounted() {
        Fancybox.bind("[data-fancybox]", {
        });
    }
}
</script>

<style >

.agile {
    width: 100%;
}
.agile__actions {
    margin-top: 20px;
}
.agile__nav-button {
    background: transparent;
    border: none;
    color: #ccc;
    cursor: pointer;
    font-size: 24px;
    transition-duration: 0.3s;
}
.agile__nav-button:hover {
    color: #888;
}
.agile__dot {
    margin: 0 10px;
}
.agile__dot button {
    background-color: #eee;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: block;
    height: 10px;
    font-size: 0;
    line-height: 0;
    margin: 0;
    padding: 0;
    transition-duration: 0.3s;
    width: 10px;
}
.agile__dot--current button, .agile__dot:hover button {
    background-color: #888;
}

.slide {
    align-items: center;
    color: #fff;
    display: flex;
    height: 300px;
    justify-content: center;
}
.slide h3 {
    font-size: 32px;
    font-weight: 300;
}

.slide--1 {
    background-color: #f1c40f;
}

.slide--2 {
    background-color: #e67e22;
}

.slide--3 {
    background-color: #e74c3c;
}

.slide--4 {
    background-color: #9b59b6;
}

.slide--5 {
    background-color: #3498db;
}

.slide--6 {
    background-color: #2ecc71;
}
</style>
