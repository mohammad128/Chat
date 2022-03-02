<template>
    <div class="radio flex flex-row justify-center items-center inline-block" style="display: inline-block">
        <input type="radio" class="cursor-pointer" v-model="val" :name="name" :value="value" ref="input" >
        <span v-if="label" class="pl-2 cursor-pointer" @click="$refs.input.click()">{{label}}</span>
    </div>
</template>

<script>
export default {
    name: "Radio",
    props: {
        modelValue: {
            default: null
        },
        name: {
            default: '',
            type: String
        },
        value: {
            default: '',
            type: String
        },
        label: {
            default: '',
            type: String
        }
    },
    computed: {
        val: {
            get() {
                return this.modelValue;
            },
            set(val) {
                this.$emit('update:modelValue', val);
            }
        }
    }
}
</script>

<style scoped>

</style>
