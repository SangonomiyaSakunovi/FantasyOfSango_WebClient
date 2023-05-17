import { requests } from './request';

export const reqLogin = (account, password)=>requests({
    url: '/user/login',
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    data: {
        account,
        password,
    }
})

export const reqIsLogin = ()=>requests({
    url: '/user/isLogin',
    method: 'get'
})

export const reqRegister = (account, nickName, password)=>requests({
    url: '/user/register',
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    data: {
        account,
        nickName,
        password,
    }
})