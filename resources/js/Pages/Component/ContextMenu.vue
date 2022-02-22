<template>
    <div
        @contextmenu="showMenu($event)"
        v-click-outside="outSideClick">
        <slot/>

        <div class="fixed w-0 h-0"
             :style="{left: position.left+'px', top: position.top+'px' }"
             @contextmenu.stop="false">

            <Popper arrow offsetDistance="4"
                    placement="bottom"
                    :show="activeMenu"
                    @open:popper="newMenuShow=true"
                    @close:popper="newMenuShow=false"
            >
                <div></div>
                <template #content="{ close }">
                    <transition name="scale-from-top-left">
                        <div class="bg-white shadow-2xl ring ring-2 ring-gray-100 rounded-lg break-words" v-show="newMenuShow">
                            <slot name="menuContent"/>
                        </div>
                    </transition>
                </template>
            </Popper>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContextMenu",
    props: {
        modelValue: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        activeMenu: {
            set(val) {
                this.$emit('update:modelValue', val);
            },
            get() {
                return this.modelValue;
            }
        }
    },
    data() {
        return {
            position: {
                top: 0,
                left:0
            },
            newMenuShow: false,
            // activeMenu: false
        }
    },
    methods: {
        showMenu(e) {
            e.preventDefault();
            this.position.left = e.pageX;
            this.position.top = e.pageY;
            this.activeMenu= true;
            console.log(e.pageX);
            console.log(e.pageY);
        },
        outSideClick() {
            this.activeMenu = false;
        }
    }
}
</script>

<style scoped>

</style>
