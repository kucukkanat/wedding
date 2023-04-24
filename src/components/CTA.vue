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
    display: inline-block;
    font-size: 4vw;
    padding: 10px;
    border: 2px solid #000;

}
a:hover {
    background-color: rgba(255, 178, 245, 0.5);
    transition: 1s;
    padding: 10px 30px;
}
</style>

<template>
<a :href="url"><slot></slot></a>
</template>