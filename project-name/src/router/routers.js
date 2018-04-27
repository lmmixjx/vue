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
      { path: '/', component: Home },
      { path: '/home', component: Home },
      { path: '/commit', component: Commit },
      { path: '/query', component: Query },
      { path: '/export', component: Export },
      { path: '/project', component: Project },
      { path: '/auth', component: Auth },
      { path: '/users', component: Users }
    ]
  },
  {
    path: '/login',
    component: Login,
    hidden: true
  }
]

export default routes
