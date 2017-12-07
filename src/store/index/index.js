import fetch from '@/config/fetch';
import {
    getSessionStorage,
    setSessionStorage,
    getLocalStorage,
    setLocalStorage,
} from '@/config/cache';

export default {
    namespaced: true, // 解决不同模块命名冲突的问题
    state: {
        indexColumn: [{
            name: '票券',
            id: '1',
            path: 'ticket',
            icon: '&#xe602;'
        }]
    },
    getters: {
        indexColumn: state => {
            return state.indexColumn;
        }
    },
    mutations: {
        setIndexColumn(state, arr) {
            state.indexColumn = arr;
            return setLocalStorage('indexColumn', arr);
        }
    },
    actions: {

    }
}