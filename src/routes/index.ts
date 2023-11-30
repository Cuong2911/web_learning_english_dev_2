// ------------------------------------------------------------------------
import { ROUTES } from '~/configs/routes';
import * as modules from '~/modules';
import { Layouts } from '~/components';
// ------------------------------------------------------------------------
import { IpublicRoutes, IprivateRoutes } from './constants';
// ------------------------------------------------------------------------

// publicroutes
const publicRoutes: Array<IpublicRoutes> = [
    {
        path: ROUTES.home,
        component: modules.Home,
        layout: Layouts.DefaultLayout,
        props: {},
    },
    {
        path: ROUTES.login,
        component: modules.Auth,
        layout: Layouts.NoLayout,
        props: {
            login: true,
        },
    },
    {
        path: ROUTES.signup,
        component: modules.Auth,
        layout: Layouts.NoLayout,
        props: {
            signup: true,
        },
    },
    {
        path: ROUTES.listCourses,
        component: modules.Learning.ListCourses,
        layout: Layouts.DefaultLayout,
        props: {},
    },
    {
        path: ROUTES.infoCourse,
        component: modules.Learning.InforCourse,
        layout: Layouts.DefaultLayout,
        props: {},
    },
    {
        path: ROUTES.learningCourse,
        component: modules.Learning.LearningCourse,
        layout: Layouts.StudyLayout,
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
const privateRoutes: Array<IprivateRoutes> = [];

export { publicRoutes, privateRoutes };
