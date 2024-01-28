// ------------------------------------------------------------------------
import { ROUTES } from '~/configs/routes';
import * as modules from '~/modules';
import { Layouts } from '~/components';
// ------------------------------------------------------------------------
import { IRoutes } from '../config';
// ------------------------------------------------------------------------

const adminRoutes: Array<IRoutes> = [
    {
        path: ROUTES.adminUser,
        component: modules.admin.User,
        layout: Layouts.AdminLayout,
        props: {},
        isPrivate: true,
    },
];
export default adminRoutes;
