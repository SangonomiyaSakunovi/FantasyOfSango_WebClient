<template>
    <div class="main">
        <TopHeader></TopHeader>
        <div class="article-wrapper">
            <div class="title">《原神》「派蒙的画作科颜氏联动篇」联动主题表情包即将上架~</div>
            <div class="content">
                科颜氏×原神 「巡林奇遇，自在净颜」联动活动已开启！

                亲爱的旅行者，科颜氏联动主题表情包「派蒙的画作科颜氏篇」陆续开放下载，欢迎旅行者前往【QQ表情包商城】、【微信表情包商城】以及【抖音表情包商城】下载使用！

                QQ表情包（即将上架）获取Tips：
                1-进入聊天界面，点击聊天框下方表情按钮；
                2-点击左下角“+”，进入QQ表情商城；
                3-搜索「原神科颜氏」，即可下载使用。
            </div>
        </div>
    </div>
</template>

<script setup>
import TopHeader from './TopHeader.vue';
</script>

<style>
body {
    background: url(@/assets/background.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
}
</style>

<style scoped lang="less">
.main {
    .article-wrapper {

        width: 80%;
        max-width: 1280px;
        height: 1280px;

        margin: 120px auto;
        padding: 50px 80px;

        box-sizing: border-box;

        background-color: #f0f0f0;

        .title {
            line-height: 40px;
            font-size: 32px;
            color: #333333;
        }
        .content {
            font-size: 14px;
            color: #7d7d7d;
            line-height: 24px;
            
            margin-top: 50px;
        }
    }
}
</style>