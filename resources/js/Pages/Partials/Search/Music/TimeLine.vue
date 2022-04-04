<template>
    <div ref="timeline" class="flex-1 relative h-[2px] w-full bg-gray-200 rounded-lg flex flex-row">
        <div ref="progress" class="relative progress left-0 top-0 w-0 h-[3px] bg-chatListActiveBg"></div>
    </div>
</template>

<script>
export default {
    name: "SearchTimeLine",
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
                    this.progressWidth = w;
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
            // this.$refs.progressPointer.style.left = val+'px';
            this.$emit('update:modelValue', (val/this.maxWidth)*this.max);
        },
        modelValue(val) {
            this.$refs.progress.style.width = (val/this.max)*this.$refs.timeline.clientWidth+'px';
            // this.$refs.progressPointer.style.left = val+'px';
        }
    }
}
</script>

<style scoped>
.progress:after{
    content: '';
    position: absolute;
    width: 0.8em;
    height: 0.8em;
    background: #3390ec;
    transform: translateY(-37%) translateX(50%);
    border-radius: 100%;
    right: 0;
    top: 0;
}
</style>
