<template>
    <div class="" ref="emojiPicker">
    </div>
</template>

<script>
import { Picker } from 'emoji-picker-element';

export default {
    name: "Emoji",
    mounted() {
        const picker = new Picker();
        const style = document.createElement('style');
        style.textContent = `
        ::-webkit-scrollbar {
            width: 5px;
            height: 16px;
        }
        ::-webkit-scrollbar-track {
            border-radius: 100vh;
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: #c4c4c4;
            border-radius: 100vh;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #a0aec0;
        }
        input.search:focus,
        input.search{
            border: 0 !important;
            outline:0;
        }
        `;
        picker.shadowRoot.appendChild(style);
        this.$refs.emojiPicker.appendChild(picker);
    }
}
</script>

<style scoped>

</style>
