<template>
    <div ref="menuItem" v-wave v-if="data" class="hover:bg-gray-100 cursor-pointer select-none" @click="data.action()">
        <template v-if="data.type == 'button'">
            <div v-if="data" class="flex flex-row items-center gap-4 p-3">
                <span class="text-gray-600" :style="{color: data.iconColor}">
                    <mdicon :name="data.icon" :size="26"/>
                </span>
                <span class="text-gray-900" :style="{color: data.textColor}" >{{data.text}}</span>
            </div>
        </template>
        <template v-else-if="data.type == 'switch'">
            <div v-if="data" class="flex flex-row justify-between items-center p-3" @click="data.active=!data.active">
                <div class="flex-1 gap-4 w-full flex flex-row items-center">
                    <span class="text-gray-600" :style="{color: data.iconColor}">
                        <mdicon :name="data.icon" :size="26"/>
                    </span>
                    <span class="text-gray-900" :style="{color: data.textColor}">{{data.text}}</span>
                </div>
                <Switch v-model="data.active" :title="'Test Switch'"/>
            </div>
        </template>
    </div>
</template>

<script>
import Switch from "@/Pages/Component/Switch";
export default {
    components:{
        Switch,
    },
    props: {
        data: {
            type: Object,
            default: null
        },
        position: {
            left: 0,
            top: 0
        }
    },
    methods: {
    },
    mounted() {

    }
}
</script>

<style >
* {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-family: "Roboto",-apple-system,apple color emoji,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
}
</style>
