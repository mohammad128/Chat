<template>
    <ElementSelector class="messages flex-1 w-full flex flex-col-reverse overflow-y-auto" v-model="selected">
        <ElementSelectorItem v-for="(message, index)  in messages" :key="index" :data-value="message">
            <div class="py-1 px-4 w-full max-w-3xl m-auto flex"
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
import { LoremIpsum } from "lorem-ipsum";

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
            ]
        }
    },
    mounted() {
        let tmp = [];

        const lorem = new LoremIpsum({
            sentencesPerParagraph: {
                max: 8,
                min: 4
            },
            wordsPerSentence: {
                max: 16,
                min: 4
            }
        });

        // console.log(lorem.generateWords(1));
        console.log();
        // console.log(lorem.generateParagraphs(7));

        for (let i=0; i< 100; i++) {
            tmp.push(
                {
                    id: i,
                    message: lorem.generateSentences(Math.floor(Math.random()*3+1)),
                    time: '12:28 AM',
                    user: Math.floor(Math.random()*2+1)
                }
            )
        }
        this.messages = tmp;
    }
}
</script>

<style scoped>

</style>
