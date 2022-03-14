<template>
    <div class="h-full overflow-hidden  bg-white">
        <Tab >
            <TabItem title="Chats" active>
                <Chats v-model="search"/>
            </TabItem>
            <TabItem title="Media">
                <Media/>
            </TabItem>
            <TabItem title="Links">
                <Links/>
            </TabItem>
            <TabItem title="Files">
                <div class="p-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex fugit minus quibusdam ullam! Accusantium, amet deserunt dicta distinctio ex ipsam laudantium praesentium quis suscipit ullam ut vero, voluptatem voluptatum.
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
import Media from "@/Pages/Partials/Search/Media";
import Links from "@/Pages/Partials/Search/Links/Links";
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
    components: {Links, Media, Chats, TabItem, Tab}
}
</script>

<style scoped>

</style>
