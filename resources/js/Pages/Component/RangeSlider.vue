<template>
    <input type="range" v-model="value" :step="step" :min="min" :max="max" :class="customClass">
</template>

<script>
export default {
    name: "RangeSlider",
    props: {
        modelValue: {
            default: 0
        },
        step: {
            type: Number,
            default: 1
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        customClass: {
            type: String,
            default: 'w-full'
        },
    },
    computed: {
        value: {
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
        }
    },
}
</script>

<style scoped>

</style>
