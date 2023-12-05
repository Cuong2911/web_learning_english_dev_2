// ------------------------------------------------------------------------
import { ROUTES } from '~/configs/routes';
import * as modules from '~/modules';
import { Layouts } from '~/components';
// ------------------------------------------------------------------------
import { IRoutes } from '../config';
// ------------------------------------------------------------------------

const authRoutes: Array<IRoutes> = [
    {
        path: ROUTES.authDetail,
        component: modules.auth.AuthDetail,
        layout: Layouts.DefaultLayout,
        props: {},
        isPrivate: true,
    },
    {
        path: ROUTES.authCourse,
        component: modules.auth.AuthCourse,
        layout: Layouts.DefaultLayout,
        props: {},
        isPrivate: true,
    },
];
export default authRoutes;
