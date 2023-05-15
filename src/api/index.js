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