import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import Hello from '@/components/Hello'
import PostsIndex from '@/components/posts/Index.vue'
import Leaderboard from '@/components/Leaderboard.vue'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: SignIn
    },
    {
      path: '/sign_in',
      name: 'Users.sign_in',
      component: SignIn
    },
    {
      path: '/posts',
      name: 'Posts.index',
      component: PostsIndex
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/leaderboard',
      name: 'Leaderboard',
      component: Leaderboard
    },
    {
      path: '/sign_up',
      name: 'Users.sign_up',
      component: SignUp
    }
  ]
})
