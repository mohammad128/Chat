<template>
    <div class="w-full " :class="{'bg-green-600/10': checked}" @click="clickOnItem"  @mouseleave="onMouseleave($event)" @mouseenter="onMouseenter($event)">
        <div class="element-selector-item p-4 w-full max-w-3xl m-auto flex flex-row">
            <transition name="scale">
            <span v-if="$parent.selected.length" class="shrink-0 ring w-5 h-5 flex justify-center self-end mb-4 items-center ring-white text-white p-1 rounded-full cursor-pointer transform duration-200"
                  :class="[checked ? 'bg-lime-600' : 'bg-transparent']"
            >
                <mdicon v-if="checked" name="check-bold" :size="16"/>
            </span>
            </transition>
            <div class="w-full">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ElementSelectorItem",
    props: {
        dataValue: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            key: -1,
            checked: false,
        }
    },
    methods: {
        setkey(key) {
            this.key = key
        },
        clickOnItem() {
            if(this.$parent.selected.length)
                this.checked = !this.checked
        },
        onMouseleave(e) {
            // if(!this.$parent.activeDrag)
            //     return;
            // if( this.$parent.last_action === 'checked' ) {
            //
            // }
            // if( this.$parent.last_action === 'unchecked' ) {
            //
            // }
            // else {
            //     this.checked = !this.checked;
            //     this.$parent.last_action = this.checked ? 'checked' : 'unchecked';
            // }
            //
            // console.log('onMouseleave', e, this.data)

            if(!this.$parent.activeDrag)
                return;
            if( this.$parent.last_action === 'checked' ) {
                this.checked = true;
            }
            else if( this.$parent.last_action === 'unchecked' ) {
                this.checked = false;
            }
            else {
                this.checked = !this.checked;
                this.$parent.last_action = this.checked===true ? 'checked' : 'unchecked';
            }
        },
        onMouseenter(e) {
            // if(!this.$parent.activeDrag)
            //     return;
            // if( this.$parent.last_action === 'checked' ) {
            //     this.checked = true;
            // }
            // else if( this.$parent.last_action === 'unchecked' ) {
            //     this.checked = false;
            // }
            // else {
            //     this.checked = !this.checked;
            //     this.$parent.last_action = this.checked===true ? 'checked' : 'unchecked';
            // }

            // console.log('onMouseleave', e, this.dataValue)
            // console.log('onMouseenter', e, this.dataValue)
            if(!this.$parent.activeDrag)
                return;
            if( this.$parent.last_action === 'checked' ) {
                this.checked = true;
            }
            else if( this.$parent.last_action === 'unchecked' ) {
                this.checked = false;
            }
            else {
                this.checked = !this.checked;
                this.$parent.last_action = this.checked===true ? 'checked' : 'unchecked';
            }
        },
    },
    mounted() {
        this.$parent.addItem(this);
    },
    watch: {
        checked: function () {
            this.$parent.update();
        }
    }
}
</script>

<style scoped>
bg-green-600\/10 {
    background-color: rgb(22 163 74 / 0.1);
}
</style>
