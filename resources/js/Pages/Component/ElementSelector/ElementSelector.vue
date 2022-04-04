<template>
    <div class="element-selector" ref="elementSelector">
        <slot/>
    </div>
</template>

<script>
export default {
    name: "ElementSelector",
    props: {
        modelValue: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            activeDrag: false,
            items: [],
            last_item_index: -1,
            last_action: '',
        }
    },
    computed: {
        selected: {
            get() {
                return this.modelValue;
            },
            set(val) {
                this.$emit('update:modelValue', val)
            }
        }
    },
    methods: {
        update() {
            this.selected = this.items.filter((item)=>{
                return item.checked;
                // this.selected.push(item);
            }).map( item => item.dataValue );
        },
        addItem(elementSelectorItem) {
            this.last_item_index++;
            this.items.push(elementSelectorItem);
            elementSelectorItem.setkey(this.last_item_index);
        },
        setup() {
            this.$refs.elementSelector.addEventListener('mousedown', (e) => {
                if (e.target.classList.contains('ignore-select')) return

                let handleMousemove = (mouseMoveEvent) => {
                    this.activeDrag = true;
                }

                document.addEventListener('mousemove', handleMousemove);
                document.addEventListener('mouseup',  () => {
                    document.removeEventListener('mousemove', handleMousemove)
                    this.activeDrag = false;
                    this.last_action = '';
                })
            })
        }
    },
    mounted() {
        this.setup();
    },
    watch: {
        modelValue: {
            handler() {
                console.log(this.$store.state.selectedMessages.length)
                if (!this.$store.state.selectedMessages.length)
                    this.items.map(item=>item.checked=false)
            },
            deep: true
        }
    }
}
</script>

<style scoped>

</style>
