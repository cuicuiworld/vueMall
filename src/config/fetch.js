import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';
Vue.prototype.$http = axios;

const prefix = '';

const ajaxURL = {
    login: prefix + ''
}

/**
 * 箭头函数封装axios
 * @param {*String} type 
 * @param {*String} url 
 * @param {*Object} data 
 */
export const fetch = async(type = 'POST', url = '', data = {}) => {
    let result;
    type = type.toUpperCase();
    url = ajaxURL[url];
    switch (type) {
        case 'GET':
            await axios.get(url, {
                params: data
            }).then((res) => {
                result = res.data;
            })
            break;
        case 'POST':
            await axios.post(url, {
                params: data
            }).then((res) => {
                result = res.data;
            })
            break;
    }
    return result;
}