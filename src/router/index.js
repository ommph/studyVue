import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/pages/pos'
import Cell from '@/components/pages/cell'
import Shop from '@/components/pages/shop'
import Goods from '@/components/pages/goods'
import User from '@/components/pages/user'
import Count from '@/components/pages/count'
import setVer from '@/components/pages/setver'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'pos',
      component: Pos
    },{
    	path: '/cell',
    	name: 'cell',
    	component: Cell
    },{
    	path: '/shop',
    	name: 'shop',
    	component: Shop
    },{
    	path: '/goods',
    	name: 'goods',
    	component: Goods
    },{
    	path: '/user',
    	name: 'user',
    	component: User
    },{
    	path: '/count',
    	name: 'count',
    	component: Count
    },{
    	path: '/setver',
    	name: 'setver',
    	component: setVer
    }
  ]
})
