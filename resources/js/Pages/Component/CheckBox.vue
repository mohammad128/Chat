<template>
    <label class="inline-block cursor-pointer">
        <label class="" style="display: flex;justify-content: center;justify-items: center;width: auto;">
            <label ref="cbLabel" class="wrapper flex items-center">
                <input class="checkbox" type="checkbox" v-model="checked" />
                <span ref="cbCheckmark" class="checkmark"></span>
            </label>
            <span v-if="label" class="pl-2 cursor-pointer">{{ label }}</span>
        </label>
    </label>
</template>

<script>
export default {
    props: {
        modelValue: {
            default: false,
            type: Boolean,
        },
        label: {
            type: String,
            default: '',
        }
    },
    computed: {
        checked: {
            get() {
                return this.modelValue;
            },
            set(val) {
                // gsap.from(
                //     this.$refs.cbLabel,
                //     {
                //         ease: "bounce.out",
                //         duration: 0.3,
                //         scale: 0.3,
                //     }
                // );
                // gsap.to(
                //     this.$refs.cbLabel,
                //     {
                //         ease: "bounce.out",
                //         duration: 0.3,
                //         scale: 1,
                //     }
                // );
                this.$emit('update:modelValue', val);
            }
        }
    },
    methods: {
    }
}
</script>

<style scoped>
/* Customize the label (the wrapper) */
.wrapper {
    display: inline-block;
    position: relative;
    cursor: pointer;
    min-height: 21px;
    width: auto;
    min-width: 21px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 16px;
}
/* Hide the browser's default checkbox */
.wrapper input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}
/* Create a custom checkbox */
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 21px;
    width: 21px;
    border-radius: 4px;
    background-color: transparent;
    border: 1px solid #aaa;
    transition: all .3s;
}
/* On mouse-over, add a grey background color */
.wrapper:hover input ~ .checkmark {
    background-color: transparent;
    transition: all .3s;
}
/* When the checkbox is checked, add a blue background */
.wrapper input:checked ~ .checkmark {
    background-color: #3390ec;
}
/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    opacity: 0;
}
/* Show the checkmark when checked */
.wrapper input:checked ~ .checkmark:after {
    opacity: 1;
    -webkit-animation: checked .3s linear forwards;
    animation: checked .3s linear forwards;
}
/* Style the checkmark/indicator */
.wrapper .checkmark:after {
    left: 7px;
    top: 0px;
    width: 7px;
    height: 15px;
    border: solid white;
    border-width: 0 2px 2px 0;
    display: block;
    opacity: 0;
}

@keyframes checked {
    0%{
        /*-webkit-transform: rotate(0) scale(0);*/
        /*-ms-transform: rotate(0) scale(0);*/
        /*transform: rotate(0) scale(0);*/

        -webkit-transform: rotate(45deg) scale(0);
        -ms-transform: rotate(45deg) scale(0);
        transform: rotate(45deg) scale(0);
    }
    100%{
        /*-webkit-transform: rotate(45deg) scale(1);*/
        /*-ms-transform: rotate(45deg) scale(1);*/
        /*transform: rotate(45deg) scale(1);*/

        -webkit-transform: rotate(45deg) scale(1);
        -ms-transform: rotate(45deg) scale(1);
        transform: rotate(45deg) scale(1);
    }
}
</style>
