<template>
    <div class="messageContainer w-full h-full flex flex-row">
        <slot/>
        <template v-for="(item, key) in $slots" :key="key">
            <transition name="slide">
                <slot v-if="key == activeSlot" :name="key"></slot>
            </transition>
        </template>
    </div>
</template>

<script>
export default {
    name: "AsideSwitcher",
    props: {
        modelValue: {
            type: String,
            default: ''
        }
    },
    computed: {
        activeSlot: {
            get() {
                return this.modelValue;
            },
            set( val ) {
                this.$emit('update:modelValue', val);
            }
        },
    },
    data() {
        return {
        }
    },
    methods: {
    },
    mounted() {
        console.log( this.$slots );
    }
}
</script>

<style scoped>

</style>
