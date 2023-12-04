// ------------------------------------------------------------------------
import { ROUTES } from '~/configs/routes';
import * as modules from '~/modules';
import { Layouts } from '~/components';
// ------------------------------------------------------------------------
import { IRoutes } from './constants';
// ------------------------------------------------------------------------

// publicroutes
const publicRoutes: Array<IRoutes> = [
    {
        path: ROUTES.home,
        component: modules.Home,
        layout: Layouts.DefaultLayout,
        props: {},
    },
    {
        path: ROUTES.login,
        component: modules.Login,
        layout: Layouts.NoLayout,
        props: {
            login: true,
        },
    },
    {
        path: ROUTES.signup,
        component: modules.Login,
        layout: Layouts.NoLayout,
        props: {
            signup: true,
        },
    },

    {
        path: ROUTES.infoCourse,
        component: modules.learning.InforCourse,
        layout: Layouts.DefaultLayout,
        props: {},
    },
    {
        path: ROUTES.learningCourse,
        component: modules.learning.LearningCourse,
        layout: Layouts.StudyLayout,
        props: {},
    },
    {
        path: ROUTES.examList,
        component: modules.exam.ExamList,
        layout: Layouts.DefaultLayout,
        props: {},
    },
    {
        path: ROUTES.doExam,
        component: modules.exam.DoExam,
        layout: Layouts.StudyLayout,
        props: {},
    },
    {
        path: ROUTES.quizList,
        component: modules.quiz.QuizList,
        layout: Layouts.DefaultLayout,
        props: {},
    },
    {
        path: ROUTES.doQuiz,
        component: modules.quiz.DoQuiz,
        layout: Layouts.StudyLayout,
        props: {},
    },
    {
        path: ROUTES.about,
        component: modules.About,
        layout: Layouts.DefaultLayout,
        props: {},
    },
    {
        path: ROUTES.authDetail,
        component: modules.auth.AuthDetail,
        layout: Layouts.DefaultLayout,
        props: {},
    },
    {
        path: ROUTES.authCourse,
        component: modules.auth.AuthCourse,
        layout: Layouts.DefaultLayout,
        props: {},
    },
    {
        path: ROUTES.setting,
        component: modules.Setting,
        layout: Layouts.DefaultLayout,
        props: {},
    },
    {
        path: ROUTES.admin,
        component: modules.admin.Home,
        layout: Layouts.AdminLayout,
        props: {},
    },
    {
        path: ROUTES.adminUser,
        component: modules.admin.User,
        layout: Layouts.AdminLayout,
        props: {},
    },
    {
        path: ROUTES.adminCourse,
        component: modules.admin.Course,
        layout: Layouts.AdminLayout,
        props: {},
    },
    {
        path: ROUTES.adminExam,
        component: modules.admin.Exam,
        layout: Layouts.AdminLayout,
        props: {},
    },
    {
        path: ROUTES.adminQuiz,
        component: modules.admin.Quiz,
        layout: Layouts.AdminLayout,
        props: {},
    },
    {
        path: ROUTES.notfound,
        component: modules.NotFoundPage,
        layout: Layouts.NoLayout,
        props: {},
    },
];
// privateRoutes
const privateRoutes: Array<IRoutes> = [
    {
        path: ROUTES.listCourses,
        component: modules.learning.ListCourses,
        layout: Layouts.DefaultLayout,
        props: {},
    },
];

export { publicRoutes, privateRoutes };
