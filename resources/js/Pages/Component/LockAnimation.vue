<template>
    <div class="relative h-52 w-52">
        <div id="container">
            <svg class="circles el1" height="120" width="120">
                <circle cx="60" cy="60" r="50" />
            </svg>
            <svg class="circles el2" height="40" width="40">
                <circle cx="20" cy="20" r="14" />
            </svg>
            <div class="el3-box">
                <svg class="circles el3" x="0px" y="0px" width="120px" height="150px">
                    <path class="st0" d="M5,80v-30v2c0-25.4,20.6-46,46-46s46,20.6,46,46v-2v80" />
                </svg>
            </div>
            <svg class="circles el4" x="0px" y="0px" width="10px" height="50px">
                <line x1="5" y1="10" x2="5" y2="35" />
            </svg>
        </div>
        <div id="container-shadow">
            <svg class="circles-shadow el1" height="120" width="120">
                <circle cx="60" cy="60" r="50" />
            </svg>
            <svg class="circles-shadow el2" height="40" width="40">
                <circle cx="20" cy="20" r="14" />
            </svg>
            <div class="el3-box">
                <svg class="circles-shadow el3" x="0px" y="0px" width="120px" height="150px">
                    <path class="st0" d="M5,80v-30v2c0-25.4,20.6-46,46-46s46,20.6,46,46v-2v80" />
                </svg>
            </div>
            <svg class="circles-shadow el4" x="0px" y="0px" width="10px" height="50px">
                <line x1="5" y1="10" x2="5" y2="35" />
            </svg>
        </div>
    </div>

</template>

<script>
export default {
    name: "LockAnimation",

}
</script>

<style scoped>#container,
#container-shadow {
    width: 200px;
    height: 200px;
    position: absolute;
    top: calc(50% - 100px);
    left: calc(50% - 100px);
    animation: dash0 1.5s ease;
    animation-delay: 3.5s;
    animation-fill-mode: forwards;
    transform: rotate(0deg);
}
#container-shadow {
    top: calc(50% - 104px);
    left: calc(50% - 90px);
    z-index: -2;
}
.container-run {
    top: 10px;
}
@keyframes dash0 {
    0% {
        transform: rotate(0deg) scale(1);
    }
    35% {
        transform: rotate(10deg) scale(1.1);
    }
    50% {
        transform: rotate(10deg) scale(1.1);
    }
    60% {
        transform: rotate(10deg) scale(1);
    }
    65% {
        transform: rotate(-5deg) scale(1);
    }
    80% {
        transform: rotate(5deg) scale(1);
    }
    100% {
        transform: rotate(0deg) scale(1);
    }
}
.circles,
.circles-shadow {
    position: absolute;
    fill: none;
    stroke: #3390ec;
    stroke-linecap: round;
    stroke-dashoffset: 820;
    stroke-dasharray: 820;
}
.circles-shadow {
    stroke: #3390ec;
}

@keyframes dash1 {
    from {
        stroke-dashoffset: -820;
    }
    to {
        stroke-dashoffset: 0;
    }
}

.el1 {
    top: 80px;
    left: 40px;
    stroke-width: 8;
    /*fill: blueviolet;*/
    fill: #FFF;
    animation: dash1 3s ease;
    animation-fill-mode: forwards;
}
.el2 {
    top: 130px;
    left: 80px;
    stroke-width: 5;
    animation: dash1 3s ease;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
}
.el3-box {
    top: 0px;
    position: absolute;
    animation: dash2 1s ease;
    animation-delay: 3.5s;
    animation-fill-mode: forwards;
}
@keyframes dash2 {
    0% {
        top: 0;
    }
    80% {
        top: -10px;
    }
    100% {
        top: 30px;
    }
}
.el3 {
    top: 0px;
    left: 46px;
    stroke-width: 10;
    transform: scale(0.8);
    z-index: -1;
    animation: dash1 3s ease;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
}
.el4 {
    top: 155px;
    left: 95px;
    stroke-width: 6;
    animation: dash1 3s ease;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
}

#link {
    bottom: 20px;
    color: #000;
    opacity: 0.6;
    display: flex;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
#link p {
    font-size: 20px;
    margin: 0;
    margin-left: 5px;
}
#link:hover {
    opacity: 1;
}

</style>
