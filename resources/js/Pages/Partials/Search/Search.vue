<template>
    <div class="h-full w-full bg-white">
        <Tab >
            <TabItem title="Chats" active>
                <Chats v-model="search"/>
            </TabItem>
            <TabItem title="Media">
                <div class="p-4">
                    {{search}}
                </div>
            </TabItem>
            <TabItem title="Links">
                <div class="p-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex fugit minus quibusdam ullam! Accusantium, amet deserunt dicta distinctio ex ipsam laudantium praesentium quis suscipit ullam ut vero, voluptatem voluptatum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex fugit minus quibusdam ullam! Accusantium, amet deserunt dicta distinctio ex ipsam laudantium praesentium quis suscipit ullam ut vero, voluptatem voluptatum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex fugit minus quibusdam ullam! Accusantium, amet deserunt dicta distinctio ex ipsam laudantium praesentium quis suscipit ullam ut vero, voluptatem voluptatum.
                </div>
            </TabItem>
            <TabItem title="Files">
                <div class="p-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex fugit minus quibusdam ullam! Accusantium, amet deserunt dicta distinctio ex ipsam laudantium praesentium quis suscipit ullam ut vero, voluptatem voluptatum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex fugit minus quibusdam ullam! Accusantium, amet deserunt dicta distinctio ex ipsam laudantium praesentium quis suscipit ullam ut vero, voluptatem voluptatum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex fugit minus quibusdam ullam! Accusantium, amet deserunt dicta distinctio ex ipsam laudantium praesentium quis suscipit ullam ut vero, voluptatem voluptatum.
                </div>
            </TabItem>
            <TabItem title="Music">
                <div class="p-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex fugit minus quibusdam ullam! Accusantium, amet deserunt dicta distinctio ex ipsam laudantium praesentium quis suscipit ullam ut vero, voluptatem voluptatum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex fugit minus quibusdam ullam! Accusantium, amet deserunt dicta distinctio ex ipsam laudantium praesentium quis suscipit ullam ut vero, voluptatem voluptatum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex fugit minus quibusdam ullam! Accusantium, amet deserunt dicta distinctio ex ipsam laudantium praesentium quis suscipit ullam ut vero, voluptatem voluptatum.
                </div>
            </TabItem>
            <TabItem title="Voice">
                <div class="p-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex fugit minus quibusdam ullam! Accusantium, amet deserunt dicta distinctio ex ipsam laudantium praesentium quis suscipit ullam ut vero, voluptatem voluptatum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex fugit minus quibusdam ullam! Accusantium, amet deserunt dicta distinctio ex ipsam laudantium praesentium quis suscipit ullam ut vero, voluptatem voluptatum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex fugit minus quibusdam ullam! Accusantium, amet deserunt dicta distinctio ex ipsam laudantium praesentium quis suscipit ullam ut vero, voluptatem voluptatum.
                </div>
            </TabItem>
        </Tab>
    </div>
</template>

<script>
import Tab from "@/Pages/Component/Tab/Tab";
import TabItem from "@/Pages/Component/Tab/TabItem";
import Chats from "@/Pages/Partials/Search/Chats";
export default {
    name: "Search",
    props: {
        modelValue: {
            type: String,
            default: false,
        }
    },
    computed: {
        search: {
            get() {
                return this.modelValue;
            },
            set(val) {
                this.$emit('update:modelValue', val);
            }
        }
    },
    components: {Chats, TabItem, Tab}
}
</script>

<style scoped>

</style>
