import Vue from 'vue'
import Router from 'vue-router'
// 引入组件
import index from '../components/index.vue'
import joinus from '../components/joinus.vue'
import more from '../components/more.vue'

Vue.use(Router)
// Vue.use(Element)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/components/index',
      name: 'index',
      component: index
    },
    {
      path: '/components/joinus',
      name: 'joinus',
      component: joinus
    },
    {
      path: '/components/more',
      name: 'more',
      component: more
    }
  ]
})
// const index = r => require.ensure([], () => r(require('../components/index')), 'index')

// export default [{
//   path: '/',
//   component: index
// }]
