export default function (router) {
    router.map({
        //首页
        '/': {
            name: 'home',
            component: require('./views/Home.vue')
        },
        //首页
        '/home': {
            name: 'home',
            component: require('./views/Home.vue')
        },
        //合作商
        '/partnermall': {
            name: 'partnermall',
            component(resolve) {
                require(['./views/Partnermall.vue'], resolve)
            }
        },
        //404
        '*': {
            component(resolve) {
                require(['./views/error/Not_found.vue'], resolve)
            }
        }
    });
}