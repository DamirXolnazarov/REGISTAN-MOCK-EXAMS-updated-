import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentAccount from '../views/StudentAccount.vue'
import TeacherAccount from '../views/TeacherAccount.vue'
import ManagerAccount from '../views/ManagerAccount.vue'
import StudentCrAccount from '../views/StudentCrAccount.vue'
import StudentPage from '../views/StudentPage.vue'
import Profile from '../views/Profile.vue'
import LevelTest from '../views/LevelTest.vue'
import Games from '../views/Games.vue'
import News from '../views/News.vue'
import IELTS_tips from '../views/IELTS_tips.vue'
import PersonalDetails from '../views/PersonalDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/createStudentAcc',
      name: 'studentAcc',
      component: StudentAccount
    },
    {
      path: '/createTeacherAcc',
      name: 'teacherAcc',
      component: TeacherAccount
    },
    {
      path: '/createManagerAcc',
      name: 'managerAcc',
      component: ManagerAccount
    },
    {
      path: '/StudentCrAccount',
      name: 'studentCrAcc',
      component: StudentCrAccount
    },
    {
      path: '/StudentPage',
      name: 'StudentPage',
      component: StudentPage
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/LevelTest',
      name: 'LevelTest',
      component: LevelTest
    },
    {
      path: '/Games',
      name: 'Games',
      component: Games
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/IELTS_tips',
      name: 'IELTS_tips',
      component: IELTS_tips
    },
    {
      path: '/PersonalDetails',
      name: 'PersonalDetails',
      component: PersonalDetails
    },
  
    
  
  ]
})

export default router
