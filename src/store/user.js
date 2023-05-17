import { defineStore } from 'pinia'
import { reactive, ref } from 'vue';
import { reqIsLogin } from '@/api';

export const useUserStore = defineStore('user', ()=>{
    const userState = ref(false);
    const userInfo = reactive({
        account: undefined,
    });

    function checkLogin() {
        reqIsLogin().then(response=>{
            if (response.data.message === "OK") userState.value = true;
            else userState.value = false;
        })
    }

    return {
        userState,
        userInfo,
        checkLogin,
    }
})