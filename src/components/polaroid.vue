<style scoped>
.polaroid{
    --w: 200px;
    --padding: 15px;
    width: calc(var(--w) + var(--padding));
    height: calc(var(--w) + var(--padding) + calc(var(--padding) * 4));
    padding: var(--padding) var(--padding) 60px var(--padding);
    background-color: #fff;
    box-shadow: 0px 0px 10px rgb(0,0,0,.5);
    border-radius: 5px;
}

img {
    width: var(--w);
    height: var(--w);
    object-fit: cover;
    border: 1px solid #f3f3f3;
}
</style>

<script>
export default {
    props: {
        imageUrl: {
            type: String,
            required: true
        },
        delay: {
          type: Number,
        }
    }
}
</script>

<template>
<div class="polaroid">
    <img :src="this.imageUrl" />
</div>
</template>