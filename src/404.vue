<script setup>
import CTA from "./components/CTA.vue"
</script>
<style scoped>
.ieva {
    position: relative;
    display: inline-block;
    width: 150px;
    bottom: 0;
    left: 0;
    animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-delay: 0.2s;
}

.tolga {
    position: relative;
    display: inline-block;
    width: 150px;
    bottom: 0;
    left: 0;
    animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}

#wrapper {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column
}

h1,h2 {
    display:block;
    line-height: 1em;
    font-size: 35px;
    color: #FFF;
    font-weight: bold;
    margin: 15px 0px;
}
h2 {
    font-size: 25px;
    font-weight: normal
}

.center {
    text-align: center;
    
}
</style>
<template>
    <div id="wrapper">
        <div>
            <img class="ieva" src="/ieva_muisje.png" />
            <img class="tolga" src="/tolga_muisje.png" />
        </div>
        <div class="center">
            <h1>Page not found</h1>
            <h2>(Sayfa bulunamadı)</h2>
            <div style="margin-top: 20px">
                <CTA url="/">Go to homepage</CTA>
            </div>
        </div>
    </div>
</template>