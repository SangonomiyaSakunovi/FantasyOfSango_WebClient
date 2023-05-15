<template>
    <div class="clickpop-wrapper">
        <div class="button">
            <slot name="button"></slot>
        </div>
        <div class="click-pop" v-show="props.popShow">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['popShow']);
</script>

<style scoped lang="less">
.clickpop-wrapper {
    position: relative;
}
</style>