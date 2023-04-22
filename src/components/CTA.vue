<script>
export default {
    props: {
        url : {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
a {
    font-size: 4vw;
    padding: 10px;
    border: 2px solid #fff;
    position:relative;
    top: 10px;
    color:#FFF
}
a:hover {
    background-color: rgba(0,0,0,0.5);
    transition: 1s;
    padding: 10px 30px;
}
</style>

<template>
<a :href="url"><slot></slot></a>
</template>