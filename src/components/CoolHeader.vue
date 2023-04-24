<style scoped>
    .wrapper {
        display: block;
        background-size: cover;
        background-position: center center;
    }
    .curtain {
        padding: 100px 0px;
        background-color: rgba(0,0,0,0.5);
        color: #fff;
        font-family: handwriting;
        font-weight: bold;
        font-size: 1em;
        line-height: 1em;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .wrapper a {
        font-size: 40px;
    }
</style>
<script>
export default {
    props: {
        imageUrl: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
<div class="wrapper" :style="{backgroundImage: `url(${imageUrl})`}">
    <div class="curtain">
        <slot></slot>
    </div>
</div>
</template>