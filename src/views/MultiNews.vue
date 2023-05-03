<template>
    <div class="multi-news">
        <ul class="news-type">
            <li class="type-item type-active">最新</li>
            <li class="type-item">新闻</li>
            <li class="type-item">公告</li>
            <li class="type-item">活动</li>
        </ul>
        <div class="line"></div>
        <ul class="news-list">
            <li class="news-item" v-for="item in 5" :key="item">
                <div class="title">I'm title</div>
                <div class="time">2023/05/03</div>
            </li>
        </ul>
        <div class="more">查看全部资讯</div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="less">
.multi-news {
    position: relative;

    flex: 1;
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    padding: 35px 20px;

    box-sizing: border-box;

    background: rgba(38,18,12,0.62);
    .news-type {
        display: flex;

        .type-item {
            color: #fff;
            font-size: 18px;
            font-weight: lighter;

            padding: 0 19px 12px;

            box-sizing: border-box;

            cursor: pointer;
        }
    }
    .line {
        width: 100%;
        height: 3px;

        background-color: rgba(255,255,255,0.1);
    }
    .news-list {
        .news-item {
            display: flex;
            justify-content: space-between;
            align-items: center;

            height: 50px;
            padding: 0 20px;

            box-sizing: border-box;

            border-bottom: 2px solid rgba(255,255,255,0.08);

            cursor: pointer;

            .title {
                color: #fff;
                font-size: 16px;
                font-weight: lighter;
            }
            .time {
                color: #ffffff59;
                font-size: 14px;

            }
        }
    }
    .more {
        position: absolute;
        right: 30px;
        bottom: 36px;

        color: #ffffffbf;
        font-size: 18px;
        font-weight: lighter;

        cursor: pointer;
    }
}

.type-active {
    position: relative;
    color: #ffd49f !important;

    &::after {
        position: absolute;
        left: 0;
        bottom: -3px;

        display: block;
        content: '';
        
        width: 100%;
        height: 3px;

        background: #ffd49f;

    }
}
</style>