import { defineStore } from 'pinia'
import { reactive, ref } from 'vue';

export const useUserStore = defineStore('user', ()=>{
    const userState = ref(false);
    const userInfo = reactive({
        account: undefined,
    })

    return {
        userState,
        userInfo,
    }
})