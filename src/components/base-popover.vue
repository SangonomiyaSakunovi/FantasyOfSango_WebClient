<template>
    <div class="popover-wrapper">
        <slot></slot>
    </div>
    <div class="mask"></div>
</template>

<script setup>

</script>

<style scoped lang="less">
.popover-wrapper {
    position: fixed;
    z-index: 10000;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
}
.mask {
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;
}
</style>