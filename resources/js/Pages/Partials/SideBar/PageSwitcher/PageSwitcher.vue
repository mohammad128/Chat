<template>
    <div class="relative w-full h-full overflow-hidden">
        <transition :name="animations.main">
            <div class="absolute h-full w-full top-0 right-0 bottom-0 left-0"
                 v-show="!activePage">
                <slot/>
            </div>
        </transition>
        <slot name="items"/>
    </div>
</template>

<script>
export default {
    name: "PageSwitcher",
    props: {
        modelValue: {
            default: '',
            type: String
        },
        animations: {
            default: {
                main: 'slide-from-left',
                page: 'slide-from-right'
            }
        }
    },
    computed: {
        activePage: {
            get() {
                return this.modelValue;
            },
            set(val) {
                this.$emit('update:modelValue', val)
            }
        }
    },
    data() {
        return {
            pages: []
        }
    },
    methods: {
        addPage(page) {
            if(this.activePage === page.name)
                page.name = true;
            this.pages.push( page );
            console.log(this.pages);
        }
    },
    watch: {
        modelValue: function () {
            this.pages.map( item => {
                if(this.activePage === item.name) {
                    item.show = true;
                } else {
                    item.show = false;
                }
            } );
        }
    }
}
</script>

<style scoped>

</style>
