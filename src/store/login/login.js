import {
    setLocalStorage
} from '@/config/cache';

import {
    fetch
} from '@/config/cache';

export default {
    namespaced: true, // 解决不同模块命名冲突的问题
    state: {
        isLogin: 'wx', //是否登录，空为未登录
    },
    getters: {
        // 拿到登录状态
        isLogin: state => {
            return state.isLogin;
        }
    },
    mutations: {
        // 储存登录状态
        setIsLogin: (state, val) => {
            state.isLogin = val;
            return setLocalStorage('isLogin', val);
        }
    },
    actions: {
        // 获取用户信息
        getUserInfo({
            commit
        }, userid) {
            let params = {
                type: 'check',
                userid: userid
            }

            fetch('post', 'login', params).then((res) => {
                if (res.data) {
                    commit('setIsLogin', res.data);
                }
            });
        }
    }
}