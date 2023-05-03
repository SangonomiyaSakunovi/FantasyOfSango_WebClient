<template>
    <div class="top-header">
        <div class="left-nav">
            <headerButton text="首页"></headerButton>
            <headerButton text="新闻"></headerButton>
            <headerButton text="角色"></headerButton>
        </div>
        <div class="right-user">
            <div class="user-login">
                <span>登录</span>
                <img src="@/assets/user.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import headerButton from '@/components/headerButton.vue';

</script>

<style scoped lang="less">
.top-header {
    position: absolute;
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
    .right-user {
        .user-login {
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
    }
}
</style>