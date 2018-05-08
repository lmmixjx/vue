const DrawLayoutPanel = r => require.ensure([], () => r(require('@/components/DrawLayoutPanel')), 'DrawLayoutPanel')
const Login = r => require.ensure([], () => r(require('@/views/login/Login')), 'Login')
const Home = r => require.ensure([], () => r(require('../views/home/Home')), 'Home')
const Commit = r => require.ensure([], () => r(require('../views/SQLPage/Commit')), 'Commit')
const Query = r => require.ensure([], () => r(require('../views/SQLPage/Query')), 'Query')
const Export = r => require.ensure([], () => r(require('../views/SQLPage/Export')), 'Export')
const Project = r => require.ensure([], () => r(require('../views/Project/Project')), 'Project')
const Auth = r => require.ensure([], () => r(require('../views/Auth/Auth')), 'Auth')
const Users = r => require.ensure([], () => r(require('../views/Users/Users')), 'Users')

let routes = [
  {
    path: '/',
    component: DrawLayoutPanel,
    children: [
      {
        path: '/',
        component: Home,
        meta: {
          title: '西软SQL管理平台'
        }
      },
      {
        path: '/home',
        component: Home,
        meta: {
          title: '西软SQL管理平台'
        }
      },
      {
        path: '/commit',
        component: Commit,
        meta: {
          title: '西软SQL管理平台'
        }
      },
      {
        path: '/query',
        component: Query,
        meta: {
          title: '西软SQL管理平台'
        }
      },
      {
        path: '/export',
        component: Export,
        meta: {
          title: '西软SQL管理平台'
        }
      },
      {
        path: '/project',
        component: Project,
        meta: {
          title: '西软SQL管理平台'
        }
      },
      {
        path: '/auth',
        component: Auth,
        meta: {
          title: '西软SQL管理平台'
        }
      },
      {
        path: '/users',
        component: Users,
        meta: {
          title: '西软SQL管理平台'
        }
      }
    ],
    meta: {
      title: '西软SQL管理平台'
    }
  },
  {
    path: '/login',
    component: Login,
    hidden: true,
    meta: {
      title: '登录'
    }
  }
]

export default routes
