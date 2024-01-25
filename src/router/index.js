import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentAccount from '../views/StudentAccount.vue'
import TeacherAccount from '../views/TeacherAccount.vue'
import ManagerAccount from '../views/ManagerAccount.vue'
import StudentCrAccount from '../views/StudentCrAccount.vue'
import StudentPage from '../views/StudentPage.vue'
import Animation from '../views/Animation.vue'

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
      path: '/Animation',
      name: 'Animation',
      component: Animation
    },
  ]
})

export default router
