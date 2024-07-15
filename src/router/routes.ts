import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
        children: [
          {
            path: 'school',
            component: () => import('components/SchoolDashboard.vue')
          },
          {
            path: 'company',
            component: () => import('components/CompanyDashboard.vue')
          }
        ]
      }
    ],
  },
  {
    path: '/auth',
    component: () => import('pages/AuthPage.vue'),
    children: [
      {
        path: 'sign-in', component: () => import('components/SignInForm.vue')
      },

      {
        path: 'sign-up', component: () => import('components/SignUpFormSelection.vue'),
        children: [
          {path: '', redirect: 'sign-up/school'} ,
          {path: 'school', component: () => import('components/SignUpFormSchool.vue')},
          {path: 'company', component: () => import('components/SignUpFormCompany.vue')},
          {path: 'tutor', component: () => import('components/SignUpFormTutor.vue')},
        ]
      },

      {
        path: '', redirect: 'auth/sign-in'
      }
    ]
  },
  {
    path: '/student/:id',
    component: () => import('pages/StudentSummaryPage.vue'),
    props: true,
  },
  {
    path: '/teacher/:id',
    component: () => import('pages/TeacherSummaryPage.vue'),
    props: true,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
