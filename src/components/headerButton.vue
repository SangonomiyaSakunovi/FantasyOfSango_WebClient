<template>
    <div class="header-button">
        <router-link to="/">
            {{ props.text }}
        </router-link>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['text']);
</script>

<style scoped lang="less">
.header-button {
    height: 66px;
    line-height: 66px;

    cursor: pointer;

    a {
        color: #fff;
        font-size: 17px;
        font-weight: lighter;
        letter-spacing: 5px;

        text-decoration: none;
    }
}
</style>