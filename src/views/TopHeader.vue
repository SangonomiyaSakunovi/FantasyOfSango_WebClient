<template>
    <div class="top-header">
        <div class="left-nav">
            <headerButton text="首页"></headerButton>
            <headerButton text="新闻"></headerButton>
            <headerButton text="角色"></headerButton>
        </div>
        <div class="right-user">
            <LoginDialog v-if="!store.userState"></LoginDialog>
            <UserPanel v-else></UserPanel>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

import headerButton from '@/components/headerButton.vue';
import LoginDialog from './LoginDialog.vue';
import UserPanel from './UserPanel.vue';
import { useUserStore } from '@/store/user';

const store = useUserStore();

onMounted(()=>{
    store.checkLogin();
})
</script>

<style scoped lang="less">
.top-header {
    position: fixed;
    z-index: 10000;
    top: 0;

    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 66px;

    padding: 0 60px;
    box-sizing: border-box;

    background: #111111D9;
    box-shadow: 0px 3px 7px 0px rgba(0,0,0,0.35);

    .left-nav {
        display: flex;

        & > div {
            margin: 0 30px;

            &:hover {
                text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
            }
        }
    }
}
</style>