import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PostJobView from '../views/PostJobView.vue'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue' 
import SignupView from '../views/SignupView.vue'
import JobDetail from '../components/JobDetail.vue'
import UpdateProfile from '../components/UpdateProfile.vue'
import CreditView from '../views/CreditView'
import AplicantDetail from '../components/AplicantDetail.vue'
import ResetPasswordView from '../views/ResetPasswordView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/postjob',
    name: 'postjob',
    component: PostJobView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView 
  },
  {
    path: '/credit',
    name: 'credit',
    component: CreditView 
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView 
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView 
  },
  {
    path: '/jobdetail/:id',
    name: 'jobdetail',
    component: JobDetail, 
  },
  {
    path: '/aplicantdetail/:id',
    name: 'aplicantdetail',
    component: AplicantDetail, 
  },
  {
    path: '/updateprofile/:id',
    name: 'updateprofile',
    component: UpdateProfile, 
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView 
  },
  {
    path: '/resetpassword',
    name: 'resetpassword',
    component: ResetPasswordView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
