<template>
    <div ref="tabItem" class="item-content min-w-full w-full h-full flex-grow">
        <template v-if="$parent.lazyLoad">
            <slot v-if="show"/>
        </template>
        <template v-else>
            <slot/>
        </template>
    </div>
</template>

<script>
export default {
    name: "TabItem",
    props: {
        title: String,
        active: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            show: false,
        }
    },
    mounted() {
        this.show = this.active;
        this.$parent.addItem( this );
    },
    watch: {
        show: function(val) {
            console.log(val)
        }
    }
}
</script>

<style scoped>
.itemContent{
    transition: all .3s;
}
</style>
