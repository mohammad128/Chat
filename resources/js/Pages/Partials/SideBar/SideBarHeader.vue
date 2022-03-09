<template>
    <div class="w-full">
        <div class="flex flex-row pl-4 pr-6 py-2 gap-2">

            <Popper arrow offsetDistance="4"
                    @open:popper="showMenu=true"
                    @close:popper="showMenu=false" >

                <button v-if="!searchFocus" :class="{'rotate-left': !searchFocus}"  v-wave class="bg-white rounded-full p-2 text-gray-500 hover:bg-gray-100">
                    <mdicon name="menu" />
                </button>
                <button v-else-if="searchFocus" :class="{'rotate-right': searchFocus}" v-wave class="bg-white rounded-full p-2 text-gray-500 hover:bg-gray-100"
                        @click.stop="$emit('closeSearchBox');searchFocus=false;search=''"
                >
                    <mdicon name="arrow-left" />
                </button>

                <template v-if="!searchFocus" #content="{ close }">
                    <transition name="scale-from-top-left">
                        <div class="pl-4" v-show="showMenu">
                            <div class="w-72">
                                <Menu :data="menuItems" >
                                    <template #footer>
                                        <div class="bg-gray-100 p-2.5 flex flex-row justify-center">
                                            <span class="text-gray-500 text-sm">LaraGram v 1.1.1</span>
                                        </div>
                                    </template>
                                </Menu>
                            </div>
                        </div>
                    </transition>
                </template>
            </Popper>

            <TextInput v-model="search" class="flex-1" type="search" @focusin="$emit('openSearchBox'); searchFocus=true" >
                <template #icon>
                    <mdicon name="magnify" />
                </template>
            </TextInput>
        </div>
    </div>
</template>

<script >

import Menu from "@/Pages/Partials/SideBar/Components/Menu/Menu";
import TextInput from "@/Pages/Component/TextInput";
export  default  {
    components: {TextInput, Menu},
    props: {
        menuItems: Array,
        modelValue: {
            type: String,
            default: ''
        }
    },
    computed: {
        search: {
            get() {
                return this.modelValue;
            },
            set(val) {
                this.$emit('update:modelValue', val);
            }
        }
    },
    data() {
        return {
            showMenu: false,
            // search: '',
            searchFocus: false,
        }
    },
    watch: {
        search: function (newVal, oldVal) {
            this.$emit('searchInput', newVal);
        }
    }
}


</script>

<style scoped>
</style>
