import Home from '../components/home/Home.vue'
import AppkeyTable from '../components/appkey/AppkeyTable.vue'
import DrawLayoutPanel from '@/components/DrawLayoutPanel'
import Login from '@/views/login/Login'

let routes = [
  {
    path: '/',
    component: DrawLayoutPanel,
    children: [
      { path: '/', component: Home },
      { path: '/AppkeyMain', component: AppkeyTable }
    ]
  },
  {
    path: '/login',
    component: Login,
    hidden: true
  }
]

export default routes
