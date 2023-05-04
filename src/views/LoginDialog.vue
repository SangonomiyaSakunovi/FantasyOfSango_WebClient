<template>
    <base-dialog :dialogShow="dialogShow">
        <template #button>
            <div class="user-login" @click="dialogShow=true">
                <span>登录</span>
                <img src="@/assets/user.png" alt="">
            </div>
        </template>
        <template #dialog>
            <div class="login-wrapper">
                <img class="close-button" @click="dialogShow=false" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADB0lEQVRYR8XZSXLTQBQG4P9lBRQnSFFcQ7JkkHwTQhKmAAEWkHkeYAcEwjyuqOIQlqssW+YCsKUqrNiwgV38KLnsRGl3Sy3Jlr20WurP/2t1t2Sq+d8uMtr7AJ1i8FLFNr9ghJ9aI5hlxiaA34SxCfL84BeA8a6JmflKpVx6OwqjVw9WQFiP9P0jBP4FcCbyJQN81bVLb4pESnBh9wdUbQRzxNgVMIUiFTgmpgkKYVW/tUXgxVEga35rlcFrYt9EuOZY5usOMPzU/GCTgSVVw2GUOwkX9nkELBqpg+sDFoWs+s01Aq3qVOtEgkWUW4VTzRxSYAj16sEGCMv9v5KuO5bxKsuY9BrBOhgraW5GJXDQyCw46RgUk1ElyUw3KmXjpU6SKpzOqhWbYK9zdQfJyDw4rQTzINXp66/3WglmQSpvMqZpp2y80xkaqRJMQgI849qlF7E3V0pcJmB4UsxcNkOgcemSmQGXGRiDlFWOiTDlWOZ73bJG26Uag2IHiiSjzXLhciV4vCxKt0vh4dy4gQAVe8kOEMBN1zb3s5S2d07OEks3umKJbzmW+TwrMjPQ85vbAC0IHbcBjImbASJkRmYCqnBEmOY2zglPZp1yM9PtStl4ljbJ1MCY5KZc2/zQnajFx8fMyFRArxHsgDEvKesRLrLiLIOxIZY7bZLawDS4QSK1gArcIYDpXllVY8trBNIkAZ517dJe0phMBNbqwS4T5oQLaeF651T95hKBwvctJ6YgHWQscBA4DeQd1y49VSWpBA4Slwcpf+xUlJXBUxW79DFp3MQdjym3NMk+YNVvPSTwA3HMDQJ3vMFoLjJoSzIm+5AngEXgkpBEuOtY5pO+zYLnNx8BdF9MjpgmnbLxKU9ZVefWfHmSUWQnwVHgjibzemsBxNt9Kw7hXsUyH5NiIj0cZnJiop4CCWAyfAX8D8DpyEmF4hKSPCDPb/4E6Hy34SERXXYs4/MwxlzSNb16MA/CTqTdd/LqrQsg3gPoLAjzrmV8TbrQMI93/4YIXwn/aVP70n+OfBhghPU19QAAAABJRU5ErkJggg==">
                <div class="login-type">密码登录</div>
                <div class="input-area">
                    <el-input 
                        v-model="loginInput.username" 
                        placeholder="手机号/邮箱" 
                        autofocus 
                        size="large"
                    />
                    <el-input
                        v-model="loginInput.password"
                        type="password"
                        placeholder="密码"
                        show-password
                        size="large"
                    />
                </div>
                <div class="login-button">登录</div>
            </div>
        </template>
    </base-dialog>
</template>

<script setup>
import baseDialog from '@/components/base-dialog.vue'
import { reactive, ref } from 'vue';

const dialogShow = ref(false);
const loginInput = reactive({
    username: undefined,
    password: undefined,
})

</script>

<style scoped lang="less">
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
.login-wrapper {
    position: relative;

    width: 450px;
    height: 320px;

    padding: 30px 40px 50px;

    box-sizing: border-box;

    background-color: #fff;

    border-radius: 4px;

    .close-button {
        position: absolute;
        top: 15px;
        right: 15px;

        width: 16px;
        height: 16px;

        margin: 10px;

        cursor: pointer;
    }
    .login-type {
        color: #3c4044;
        font-size: 20px;
        font-weight: 700;
        text-align: center;

        margin: 30px 0;
    }
    .input-area {
        & > div {
            margin-bottom: 20px;
        }
    }
    .login-button {
        color: #fff;
        line-height: 48px;
        font-size: 18px;
        text-align: center;
        letter-spacing: 10  px;
        
        background-color: #3b4354;

        border-radius: 4px;

        cursor: pointer;
    }
}
</style>