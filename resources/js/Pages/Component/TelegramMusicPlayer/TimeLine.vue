<template>
    <div class="w-full relative ">
        <div ref="timeline" class="absolute left-0 right-0 bottom-0 w-full h-[2px] hover:h-[4px] hover:bg-gray-200 transition transition-all duration-300"
            :class="{'h-[4px]': activeDrag}">
            <div ref="progress" class="w-[0] transition-all duration-100 h-full bg-chatListActiveBg"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TimeLine",
    props: {
        modelValue: {
            type: Number,
            default: 0,
        },
        max: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            activeDrag: false,
            maxWidth: 0,
            progressWidth: 0,
        }
    },
    computed: {
        value: {
            get() {
                return this.modelValue;
            },
            set(val) {
                this.$emit('update:modelValue', val);
                this.$emit('@onChange', val);
            }
        },
    },
    methods: {
        setupTimeLine() {
            this.$refs.timeline.addEventListener('mousedown', (e) => {
                this.maxWidth = this.$refs.timeline.clientWidth;
                // this.$refs.progress.style.width = e.offsetX+'px';
                this.progressWidth = e.offsetX;

                let handleMousemove = (mouseMoveEvent) => {
                    this.activeDrag = true;
                    let mousePosition = {x: 0, y: 0};
                    mousePosition.x = mouseMoveEvent.pageX;
                    mousePosition.y = mouseMoveEvent.pageY;

                    let rect = this.$refs.timeline.getBoundingClientRect();
                    let w = (mousePosition.x - rect.left);

                    if(w<0)
                        w=0;
                    else if (w > this.maxWidth)
                        w = this.maxWidth;
                    // this.$refs.progress.style.width = w+'px';
                    this.progressWidth = w;

                    // this.value = this.convertToPercent(this.maxHeight, w);
                }

                document.addEventListener('mousemove', handleMousemove);
                document.addEventListener('mouseup',  () => {
                    document.removeEventListener('mousemove', handleMousemove)
                    this.activeDrag = false;
                })
            })
        }
    },
    mounted() {
        this.setupTimeLine();
    },
    watch: {
        progressWidth(val) {
            this.$refs.progress.style.width = val+'px';
            this.$emit('update:modelValue', (val/this.maxWidth)*this.max);
        },
        modelValue(val) {
            this.$refs.progress.style.width = (val/this.max)*this.$refs.timeline.clientWidth+'px';
        }
    }
}
</script>

<style scoped>

</style>
