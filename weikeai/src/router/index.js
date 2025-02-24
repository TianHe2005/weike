import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/appHome.vue';
import Auth from '../components/appAuth.vue';
import StudentView from '../views/StudentView.vue';
import TeacherView from '../views/TeacherView.vue';
import ParentView from '../views/ParentView.vue';
import ClassroomView from '../views/ClassroomView.vue';
import MathClassroom from '../views/MathClassroom.vue';
import myhomework from '../views/myhomework.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/student',
    name: 'StudentView',
    component: StudentView
  },
  {
    path: '/teacher',
    name: 'TeacherView',
    component: TeacherView
  },
  {
    path: '/parent',
    name: 'ParentView',
    component: ParentView
  },
  {
    path: '/classroom',
    name: 'ClassroomView',
    component: ClassroomView
  },
  {
    path: '/classroom/subject/math',
    name: 'MathClassroom',
    component: MathClassroom
  },
  {
    path: '/practice/myhomework',
    name: 'myhomework',
    component: myhomework
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;