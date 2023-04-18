<template>
    <div class="bounce-container">
        <img :src="imageUrl" :style="delaystyle" class="bounce-image" />
    </div>
</template>

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
    },
    computed: {
        delaystyle() {
            return `animation-delay: ${this.delay}s`;
        }
    }
}
</script>

<style>
.bounce-container {
    display: inline-block;
}

.bounce-image {
    position: relative;
    display: inline-block;
    width: 100px;
    bottom: 0;
    left: 0;
    animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1) ;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}

:root {
  --jump-modifier: 0.1;
}



</style>