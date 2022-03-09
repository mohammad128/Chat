<template>
    <transition :name="$parent.animations.page">
        <div class="PageSwitcherItem absolute h-full w-full top-0 right-0 bottom-0 left-0 "
             v-show="show"
        >
            <slot/>
        </div>
    </transition>
</template>

<script>
export default {
    name: "PageSwitcherItem",
    props: {
        name: String,
    },
    data() {
        return {
            show: false,

        }
    },
    mounted() {
        this.$parent.addPage(this);
    }
}
</script>

<style scoped>
.PageSwitcherItem{
    box-shadow: 0 0 10px #aaa;
}
</style>
