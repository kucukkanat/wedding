<script setup>
import CoolHeader from "./CoolHeader.vue";
</script>
<style scoped>
h1,a {
    line-height: 1em;
    margin: 15px 0px;
}
h1 {
    font-size: 6vw;
    
}
a {
    font-size: 5vw;
    padding: 10px;
    border: 2px solid #fff;
    position:relative;
    top: 10px;
}
a:hover {
    background-color: rgba(0,0,0,0.5);
    transition: 1s;
    padding: 10px 30px;
}
</style>
<template>
<CoolHeader imageUrl="/hoogevuursche1.jpeg"> 
<h1> June 23rd, 2023 </h1> 
<div> <a href="/venue">Go To The Venue</a> </div>
</CoolHeader>
</template>