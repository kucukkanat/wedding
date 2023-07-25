<style scoped>
#main-wrapper {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30vw 15vw 0 15vw;
    background-color: rgba(0, 0, 0, 0.5);
    min-height: calc(100vh - calc(var(--vp-nav-height) + 300px));
}

#flower_wrapper {
    position: relative;
    top: -12vw;
    text-align: center;
}

#flower-image {
    --w: 60vw;
    position: relative;
    display: inline-block;
    width: calc(var(--w) * 0.8);

    animation-name: pulse;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}

.p20 {
    padding: 20px;
}

#img-kiss {
    filter: drop-shadow(0 0 2rem rgba(255, 255, 255, 0.5));
}

.center {
    text-align: center;
}

.white {
    color: #fff;
}

h2 {
    line-height: 1em;
}
</style>

<script setup>
const props = defineProps({
    lang: {
        type: String,
        default: 'en'
    }
})
const data = {
    en: {
        TITLE: "Celebrate with us!",
    },
    lt: {
        TITLE: "Švęskite su mumis!",
    },
    tr: {
        TITLE: "Evleniyoruz!",

    }
}

</script>

<template>
    <div id="main-wrapper">

        <div class="center">
            <h2 class="handwriting bold center white" style="font-size: 7vw;height: 1em">{{ data[props.lang]["TITLE"] }}</h2>
            <img id="img-kiss" style="display:inline-block" src="IMG_1111.png" />
        </div>
        <div id="flower_wrapper">
            <img id="flower-image" src="/flowers1.png" />
            <h2 class="handwriting bold center white" style="font-size: 6vw;">Ieva & Tolga</h2>
        </div>

    </div>
</template>
