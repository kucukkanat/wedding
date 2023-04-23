<script setup>
import CoolHeader from "./CoolHeader.vue";
import CTA from "./CTA.vue"
</script>
<style scoped>
h1,a {
    line-height: 1em;
    margin: 15px 0px;
}
h1 {
    font-size: 6vw;
    text-shadow: 0px 0px 5px #000
}

</style>
<template>
<CoolHeader imageUrl="/hoogevuursche1.jpeg"> 
<h1> Kasteel de Hooge Vuursche </h1> 
<h1> June 23rd, 2023 </h1> 
<div> <CTA url="/info">More information </CTA> </div>
</CoolHeader>
</template>