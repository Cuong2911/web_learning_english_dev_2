// ------------------------------------------------------------------------
import { ROUTES } from '~/configs/routes';
import * as modules from '~/modules';
import { Layouts } from '~/components';
// ------------------------------------------------------------------------
import { IRoutes } from '../config';
// ------------------------------------------------------------------------

const adminRoutes: Array<IRoutes> = [
    {
        path: ROUTES.admin,
        component: modules.admin.Home,
        layout: Layouts.AdminLayout,
        props: {},
        isPrivate: true,
    },
    {
        path: ROUTES.adminUser,
        component: modules.admin.User,
        layout: Layouts.AdminLayout,
        props: {},
        isPrivate: true,
    },
    {
        path: ROUTES.adminCourse,
        component: modules.admin.Course,
        layout: Layouts.AdminLayout,
        props: {},
        isPrivate: true,
    },
    {
        path: ROUTES.adminExam,
        component: modules.admin.Exam,
        layout: Layouts.AdminLayout,
        props: {},
        isPrivate: true,
    },
    {
        path: ROUTES.adminQuiz,
        component: modules.admin.Quiz,
        layout: Layouts.AdminLayout,
        props: {},
        isPrivate: true,
    },
];
export default adminRoutes;
