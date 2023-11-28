// static
import { IpublicRoutes, IprivateRoutes } from './constants';
import { ROUTES } from '~/configs/routes';
import * as modules from '~/modules';

// publicroutes
const publicRoutes: Array<IpublicRoutes> = [
    {
        path: ROUTES.home,
        component: modules.Home,
        props: {},
    },
    {
        path: ROUTES.login,
        component: modules.Auth,
        props: {
            login: true,
        },
    },
    {
        path: ROUTES.signup,
        component: modules.Auth,
        props: {
            signup: true,
        },
    },
    {
        path: ROUTES.listCourses,
        component: modules.ListCourses,
        props: {},
    },
    {
        path: ROUTES.infoCourse,
        component: modules.InforCourse,
        props: {},
    },
    {
        path: ROUTES.learningCourse,
        component: modules.LearningCourse,
        props: {},
    },
    {
        path: ROUTES.notfound,
        component: modules.NotFoundPage,
        props: {},
    },
];
// privateRoutes
const privateRoutes: Array<IprivateRoutes> = [];

export { publicRoutes, privateRoutes };
