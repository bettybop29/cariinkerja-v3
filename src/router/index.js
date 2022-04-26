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
import ResetPasswordView from '../views/VerificationPassword.vue'
import ActivationView from '@/views/ActivationView.vue'
import ResetPassword from '@/views/ResetPassword.vue'
import ChangePassword from '@/views/ChangePassword.vue'
import VerificationPassword from '@/views/VerificationPassword.vue'
import ExpiredView from '@/views/ExpiredForgotView.vue'
import ExpiredSignup from '@/views/ExpiredSignup.vue'

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
    path: '/activation',
    name: 'activation',
    component: ActivationView, 
  },
  {
    path: '/resetpassword',
    name: 'ResetPassword',
    component: ResetPassword, 
  },
  {
    path: '/changepassword/:token',
    name: 'ChangePassword',
    component: ChangePassword, 
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView 
  },
  {
    path: '/verificationpassword',
    name: 'VerificationPassword',
    component: VerificationPassword
  },
  {
    path: '/expiredforgot',
    name: 'ExpiredView',
    component: ExpiredView
  },
  {
    path: '/expiredsignup',
    name: 'ExpiredSignup',
    component: ExpiredSignup
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
