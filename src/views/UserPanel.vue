<template>
    <base-clickpop :popShow="popShow">
        <template #button>
            <div class="user-button" @click="popShow=!popShow">
                <span>{{ store.userInfo.account }}</span>
                <!-- <img src="" alt=""> -->
            </div>
        </template>
        <template #content>
            <div class="pop-content">
                <ul class="user-action-list">
                    <!-- <li class="user-action-item">用户信息</li>
                    <li class="user-action-item">用户信息</li> -->
                </ul>
                <div class="logout">
                    退出登录
                </div>
            </div>
        </template>
    </base-clickpop>
</template>

<script setup>
import { ref } from 'vue';

import baseClickpop from '@/components/base-clickpop.vue';
import { useUserStore } from '@/store/user';

const store = useUserStore();

const popShow = ref(false);

</script>

<style scoped lang="less">
.user-button {
    display: flex;
    align-items: center;

    height: 66px;
    line-height: 66px;

    cursor: pointer;

    &:hover > span {
        color: #fff;
    }
    span {
        color: #ccc;
        font-size: 17px;
        font-weight: 320;
        letter-spacing: 5px;
    }
    img {
        width: 27px;
        height: 27px;

        margin-left: 17px;
    }
}
.pop-content {
    position: absolute;
    top: 50px;
    left: -25px;

    width: 100px;
    padding: 10px;

    box-sizing: border-box;
    border-radius: 5px;

    background-color: #fff;

    .user-action-list {

        .user-action-item {
            height: 20px;
            line-height: 20px;
            text-align: center;

            cursor: pointer;
        }
    }
    .logout {
        height: 20px;
        line-height: 20px;
        text-align: center;

        cursor: pointer;
    }
}
</style>