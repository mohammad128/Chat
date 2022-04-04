<template>
    <div class="w-screen h-screen flex flex-row bg-red-100 items-center justify-center">

        <div class="w-[480px] h-screen bg-white overflow-y-auto">
            {{selected}}
            <ElementSelector class="flex flex-col" v-model="selected">
                <ElementSelectorItem  v-for="(item, i) in items"  :data-value="item">
                    <div class="w-full p-4 hover:bg-gray-300 bg-yellow-200">
                        {{item.id}}:
                        <span class="font-bold">{{ item.title }}</span>
                    </div>
                </ElementSelectorItem>
            </ElementSelector>
        </div>

    </div>

</template>

<script>

import ElementSelector from "@/Pages/Component/ElementSelector/ElementSelector";
import ElementSelectorItem from "@/Pages/Component/ElementSelector/ElementSelectorItem";
export default {
    name: "Test",
    components: {
        ElementSelectorItem,
        ElementSelector
    },
    data() {
        return {
            selected: [],
            items: [
                {
                    id: 1,
                    title: 'item 1'
                },
                {
                    id: 2,
                    title: 'item 2'
                },
                {
                    id: 3,
                    title: 'item 3'
                },
                {
                    id: 4,
                    title: 'item 4'
                },
                {
                    id: 5,
                    title: 'item 5'
                },
                {
                    id: 6,
                    title: 'item 6'
                },
            ]
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
