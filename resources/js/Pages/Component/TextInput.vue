<template>
    <div class="w-full relative text-gray-400 focus-within:text-sky-600">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2 text-lg" v-if="$slots.icon">
            <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                <slot name="icon"></slot>
            </button>
        </span>
        <input v-model="modelValue"
               @input="onInput"
               class="w-full transition duration-300 py-2.5 text-gray-400 rounded-3xl outline-0 border-0 ring-1 ring-gray-300 focus:ring-2 focus:ring-sky-600 focus:text-gray-900"
               :class="{'pl-11': $slots.icon, 'pr-11': type =='search'}"
               placeholder="Search..." autocomplete="off">

        <span v-if="type =='search' && modelValue.length" v-wave
              class="absolute inset-y-0 right-0 flex items-center justify-center w-eq px-1 text-lg hover:bg-sky-50 rounded-full">
            <button @click="modelValue='';$emit('update:modelValue', '');" type="submit" class="p-1 w-full focus:outline-none focus:shadow-outline">
                <mdicon name="close"></mdicon>
            </button>
        </span>
    </div>
</template>

<script>
export default {
    name: "TextInput",
    props: {
        modelValue: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'text'
        }
    },
    data() {
        return{
        }
    },
    methods: {
        onInput(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    },
}
</script>

<style scoped>

</style>
