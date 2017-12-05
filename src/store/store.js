import Vue from 'vue';
import Vuex from 'vuex';

import loginModule from './login/index';
import IndexModule from './index/index';

Vue.use(Vuex);

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {

}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        login: loginModule,
        index: indexModule
    }
})