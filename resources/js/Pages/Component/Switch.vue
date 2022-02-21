<template>
    <label
        @click="checked != checked"
        class="switchContainer flex items-center cursor-pointer"
    >
        <div class="relative">
            <input v-model="checked" type="checkbox" class="sr-only" />
            <div class="switchContent w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
            <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
        </div>
        <div class="ml-3 text-gray-700 font-medium" v-if="text">
            {{ text }}
        </div>
    </label>
</template>

<script>
export default {
    name: "Switch",
    components: {
    },
    props: {
        text: {
            default: '',
            type: String
        },
        modelValue: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        checked: {
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
    methods: {

    }
}
</script>

<style scoped >
.switchContent{
    background: #d0d0d0;
}
.dot {
    border: 3px solid #d0d0d0;
}

input:checked ~ .dot {
    transform: translateX(100%);
    border: 3px solid #3390ec;
}
input:checked ~ .switchContent {
    background: #3390ec;
}
</style>
