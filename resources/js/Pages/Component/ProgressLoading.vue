<template>

    <svg ref="progress"
         :style="{width: size+'px', height: size+'px'}"
         class="progress blue noselect" :data-progress="value" x="0px" y="0px" viewBox="0 0 80 80"
    >
        <path ref="track" class="track" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />
        <path ref="fill" class="fill"  d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />
        <text v-if="showText" :style="{fill: textColor}" class="value" x="50%" y="55%">{{value}}%</text>
    </svg>

</template>

<script>
export default {
    name: "ProgressLoading",
    props: {
        modelValue: {
            type: Number,
            default: 0
        },
        size: {
            type: Number,
        },
        showText: {
            type: Boolean,
            default: false
        },
        textColor: {
            type: String,
            default: "#000"
        },
        progressColor: {
            type: String,
            default: "#000"
        },
        progressBgColor: {
            type: String,
            default: "#FFF"
        },
        progressWidth: {
            type: Number,
            default: 3
        }
    },
    computed: {
        value: {
            get() {
                if(this.modelValue>100)
                    return  100;
                else if (!this.modelValue || this.modelValue<0)
                    return 0;
                return this.modelValue;
            },
            set(val) {
                this.$emit('update:modelValue', val);
            }
        }
    },
    data() {
        return {
            progress: 0
        }
    },
    methods: {
        onChangeProgress() {
            var max = -219.99078369140625;
            let percent = this.value;//this.$refs.progress.getAttribute('data-progress');
            this.$refs.progress.querySelector('.fill').setAttribute('style', 'stroke-dashoffset: ' + ((100 - percent) / 100) * max);
            this.$refs.fill.style.stroke= this.progressColor;
            this.$refs.fill.style.strokeWidth = this.progressWidth;
            this.$refs.track.style.strokeWidth = this.progressWidth;
            this.$refs.track.style.stroke= this.progressBgColor;
        }
    },
    mounted() {
        this.onChangeProgress();
    },
    watch: {
        modelValue: function (val) {
            this.onChangeProgress();
        }
    }
}
</script>

<style scoped >
/*===== The CSS =====*/
.progress{
}
@keyframes rotateProgress {
    0%{
        transform: rotate(0);
        transform-origin: center;
    }
    100% {
        transform: rotate(360deg);
        transform-origin: center;
    }
}
.progress .track, .progress .fill{
    fill: rgba(0, 0, 0, 0);
    stroke-width: 3;
    transform: rotate(90deg)translate(0px, -80px);
    animation: rotateProgress 1.5s ease-in-out infinite;
}
.progress .track{
    stroke: rgb(56, 71, 83);
}
.progress .fill {
    stroke: rgb(255, 255, 255);
    stroke-dasharray: 219.99078369140625;
    stroke-dashoffset: -219.99078369140625;
    transition: stroke-dashoffset 1s;
}
.progress.blue .fill {
    /*stroke: rgb(104, 214, 198)*/
}

.progress.green .fill {
    stroke: rgb(186, 223, 172);
}
.progress .value, .progress .text {
    font-family: 'Open Sans';
    fill: rgb(255, 255, 255);
    text-anchor: middle;
}
.progress .text {
    font-size: 12px;
}
.noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;
}
</style>
