<template>
    <div class="dialog-wrapper">
        <div class="button">
            <slot name="button"></slot>
        </div>
        <div class="dialog" v-if="props.dialogShow">
            <base-popover>
                <slot name="dialog"></slot>
            </base-popover>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

import basePopover from './base-popover.vue';

const props = defineProps(['dialogShow']);
</script>

<style scoped lang="less">

</style>