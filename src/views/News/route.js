const route = {
    path: '/news',
    name: 'news',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "News" */ './News.vue'),
    children: [
        {
            path: '/news/newsYesterday',
            name: 'newsYesterday',
            component: () => import('./componets/newsYesterday.vue')
        },
        {
            path: '/news/today',
            name: 'newsToday',
            component: () => import('./componets/newsToday.vue')
        },
        {
            path: '/news/newstom',
            name: 'newstom',
            component: () => import('./componets/newstom.vue')
        },
    ]
}
export default route