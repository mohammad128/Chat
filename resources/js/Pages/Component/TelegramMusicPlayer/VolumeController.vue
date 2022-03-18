<template>

    <div class="text-chatListActiveBg relative" @mouseover="showVolumeProgress" @mouseleave="hideVolumeProgress">
        <span @click="volumeOff" v-wave class="rounded-full hover:bg-chatListActiveBg/10 transition duration-300 cursor-pointer w-[40px] h-[40px] flex justify-center items-center">
            <!-- volume-high  volume-medium volume-low volume-off-->
            <mdicon v-if="value===0" name="volume-off" size="24"/>
            <mdicon v-else-if="value<20" name="volume-low" size="24"/>
            <mdicon v-else-if="value<50" name="volume-medium" size="24"/>
            <mdicon v-else name="volume-high" size="24"/>
        </span>

        <transition name="fade">
            <div v-show="show===true" class="absolute h-[110px] py-4 w-full flex flex-row justify-center items-center">
                <div class="w-[28px] h-full bg-white rounded-lg flex flex-row justify-center items-center py-3">
                    <div ref="volumeController" class="bg-white w-[6px] h-full  flex flex-col-reverse group">
                        <div ref="volumeProgress" class="relative h-[0px] rounded-lg relative w-full bg-chatListActiveBg">
                            <div class="w-[14px] h-[14px] absolute top-0 left-0 transform -translate-y-1/2 -translate-x-[4px] hover:scale-125 duration-100 z-10 rounded-full bg-chatListActiveBg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>

    </div>

</template>

<script>
export default {
    name: "VolumeController",
    props: {
        modelValue: {
            type: Number,
            default: 0,
        }
    },
    data() {
        return {
            maxHeight: 0,
            show: false,
            activeDrag: false,
            oldVolume: null,
        }
    },
    computed: {
        value: {
            get() {
                return this.modelValue;
            },
            set(val) {
                return this.$emit('update:modelValue', val);
            }
        },
    },
    methods: {
        volumeOff() {
            if( this.oldVolume == null ) {
                this.oldVolume = this.value;
                this.value = 0;
            }
            else {
                this.value = this.oldVolume;
                this.oldVolume = null;
            }
        },
        showVolumeProgress() {
            this.show = true;
            this.setupVolumeController();
        },
        hideVolumeProgress() {
            setTimeout(()=>{
                if(!this.activeDrag)
                    this.show = false;
            }, 500)
        },
        convertToPercent(max, current) {
            return Math.floor((current*100)/max );
        },
        convertPercentToNumber(max, percent) {
            return Math.floor((percent *max)/100 );
        },
        setupVolumeController() {
            this.maxHeight = this.$refs.volumeController.clientHeight;
            this.$refs.volumeProgress.style.height = this.convertPercentToNumber(this.maxHeight, this.value)+'px';

            this.$refs.volumeController.addEventListener('mousedown', (e) => {
                this.activeDrag = true;
                this.showVolumeProgress();

                let handleMousemove = (mouseMoveEvent) => {
                    let mousePosition = {x: 0, y: 0};
                    mousePosition.x = mouseMoveEvent.pageX;
                    mousePosition.y = mouseMoveEvent.pageY;

                    let rect = this.$refs.volumeController.getBoundingClientRect();
                    let h = (mousePosition.y - rect.top);

                    if(h<0)
                        h=0;
                    else if (h > this.maxHeight)
                        h = this.maxHeight;
                    h = Math.abs(h - this.maxHeight);
                    this.$refs.volumeProgress.style.height = h+'px';

                    this.value = this.convertToPercent(this.maxHeight, h);
                }

                document.addEventListener('mousemove', handleMousemove);
                document.addEventListener('mouseup',  () => {
                    document.removeEventListener('mousemove', handleMousemove)
                    this.activeDrag = false;
                    this.hideVolumeProgress();
                })

                // let h = Math.abs(e.offsetY-this.$refs.volumeController.clientHeight);
                // console.log(h);
                // this.$refs.volumeProgress.style.height = h+'px';
            })
            // $(document).bind('mousemove',function(mouseMoveEvent){
            //     mousePosition.x = mouseMoveEvent.pageX;
            //     mousePosition.y = mouseMoveEvent.pageY;
            // });
        }
    },
    mounted() {
        this.setupVolumeController();
    },
    watch: {
    }
}
</script>

<style scoped>

</style>
