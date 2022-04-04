<template>
    <ElementSelector class="messages flex-1 w-full flex flex-col-reverse overflow-y-auto" v-model="selected">
        <ElementSelectorItem v-for="(message, index)  in messages" :key="index" :data-value="message">
            <div class="p-4 w-full max-w-3xl m-auto flex"
                 :class="[message.user === 1  ? 'flex-row-reverse' : 'flex-row' ]"
            >
                <div class="w-auto align-bottom max-w-[480px] p-3 select-text rounded-lg whitespace-pre-line ignore-select"
                     :class="[message.user === 1  ? 'bg-light-green triangle-bottom-right' : 'bg-white triangle-bottom-left' ]"
                >
                    {{ message.message }}
                    <span class="float-right pt-2 text-gray-500 text-xs">{{ message.time }}</span>
                </div>
            </div>
        </ElementSelectorItem>
    </ElementSelector>
</template>

<script>
import ElementSelector from "@/Pages/Component/ElementSelector/ElementSelector";
import ElementSelectorItem from "@/Pages/Component/ElementSelector/ElementSelectorItem";
import {mapState} from "vuex";
export default {
    name: "PrivateMessages",
    props: {
    },
    components: {ElementSelectorItem, ElementSelector},
    computed: {
        ...mapState(['selectedMessages']),
        selected: {
            get() {
                return this.selectedMessages;
            },
            set( val ) {
                this.$store.commit('setSelectedMessages', val)
            }
        }
    },
    data() {
        return {
            messages: [
                {
                    id: 1,
                    message: 'Login code: 30311. Do not give this code to anyone, even if they say they are from Telegram!\n' +
                        '\n' +
                        'This code can be used to log in to your Telegram account. We never ask it for anything else.\n' +
                        '\n' +
                        'If you didn\'t request this code by trying to log in on another device, simply ignore this message.',
                    time: '12:28 AM',
                    user: 1
                },
                {
                    id: 1,
                    message: 'Login code: 30311. Do not give this code to anyone, even if they say they are from Telegram!\n' +
                        '\n' +
                        'This code can be used to log in to your Telegram account. We never ask it for anything else.\n' +
                        '\n' +
                        'If you didn\'t request this code by trying to log in on another device, simply ignore this message.',
                    time: '11:18 AM',
                    user: 1
                },
                {
                    id: 1,
                    message: 'Login code: 30311. Do not give this code to anyone, even if they say they are from Telegram!\n' +
                        '\n' +
                        'This code can be used to log in to your Telegram account. We never ask it for anything else.\n' +
                        '\n' +
                        'If you didn\'t request this code by trying to log in on another device, simply ignore this message.',
                    time: '10:18 AM',
                    user: 2
                },
                {
                    id: 1,
                    message: 'Login code: 30311. Do not give this code to anyone, even if they say they are from Telegram!\n' +
                        '\n' +
                        'This code can be used to log in to your Telegram account. We never ask it for anything else.\n' +
                        '\n' +
                        'If you didn\'t request this code by trying to log in on another device, simply ignore this message.',
                    time: '09:18 AM',
                    user: 1
                },
                {
                    id: 1,
                    message: 'Login code: 30311. Do not give this code to anyone, even if they say they are from Telegram!\n' +
                        '\n' +
                        'This code can be used to log in to your Telegram account. We never ask it for anything else.\n' +
                        '\n' +
                        'If you didn\'t request this code by trying to log in on another device, simply ignore this message.',
                    time: '09:18 AM',
                    user: 2
                },
                {
                    id: 1,
                    message: 'Login code: 30311. Do not give this code to anyone, even if they say they are from Telegram!\n' +
                        '\n' +
                        'This code can be used to log in to your Telegram account. We never ask it for anything else.\n' +
                        '\n' +
                        'If you didn\'t request this code by trying to log in on another device, simply ignore this message.',
                    time: '09:18 AM',
                    user: 2
                },
            ]
        }
    },
}
</script>

<style scoped>

</style>
