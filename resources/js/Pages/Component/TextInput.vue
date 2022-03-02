<template>
    <div>
        <template v-if="theme === 0">
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
        <template v-if="theme === 1">
            <div class="theme2 w-full relative"
                 :class="{'notEmpty': value}"
            >
                <input ref="input" type="text" v-model="value"
                       pattern="\S+.*" required
                       class="w-full leading-9 border-0 outline-0 rounded-lg ring-1 ring-gray-300 hover:ring-chatListActiveBg focus:ring-2  focus:ring-chatListActiveBg "
                >
                <span @click="$refs.input.focus()" class="placeholder z-0">{{placeholder}}</span>
            </div>
        </template>
    </div>
</template>

<script>
import Input from "@/Jetstream/Input";
export default {
    name: "TextInput",
    components: {Input},

    props: {
        modelValue: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'text'
        },
        theme: {
            default: 0,
            type: Number
        },
        placeholder: {
            default: '',
            type: String
        }
    },
    computed: {
        value: {
            get() {
                return this.inputValue;
            },
            set(val) {
                this.inputValue = val;
                this.$emit('update:modelValue', val)
            }
        }
    },
    data() {
        return{
            inputValue: '',
        }
    },
    methods: {
        onInput(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    },
    mounted() {
        this.inputValue = this.modelValue;
    }
}
</script>

<style scoped>
.theme2 {
    position: relative;
}
.theme2.notEmpty {
}

.theme2 input {
    background: transparent;
}

.theme2 .placeholder {
    position: absolute;
    left: 1em;
    top: 50%;
    font-size: 15px;
    transform: translateY(-50%);
}


.theme2 input {
    background: white;
    transition: all .2s;
}
.theme2 input ~ .placeholder{
    color: #b4b4b4;
    transition: all .2s;
}

.theme2 input:focus ~ .placeholder{
    color: #3390ec;
    top: 0;
    background: white;
    padding: 2px 6px;
    font-size: 12px;
}

.theme2.notEmpty .placeholder{
    top: 0;
    font-size: 12px;
    background: white;
    padding: 2px 6px;
}
.theme2 input:hover ~ .placeholder{
    color: #3390ec;
}

</style>
