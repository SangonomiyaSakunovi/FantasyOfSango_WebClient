<template>
    <div class="main">
        <TopHeader></TopHeader>
        <div class="center-content">
            <div class="content-carousel">
                <el-carousel trigger="click" height="400px">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <img class="carousel-image" src="@/assets/carousel.jpg">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <MultiNews></MultiNews>
        </div>
    </div>
</template>

<script setup>
import TopHeader from './TopHeader.vue';
import MultiNews from './MultiNews.vue';
</script>

<style>
body {
    /* https://www.jb51.net/css/836742.html */
    background: url(@/assets/background.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
}
</style>

<style scoped lang="less">
.main {
    .center-content {
        display: flex;

        width: 1280px;
        height: 400px;

        margin: 240px auto;

        .content-carousel {
            width: 640px;

            .carousel-image {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>