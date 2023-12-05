// ------------------------------------------------------------------------
import { ROUTES } from '~/configs/routes';
import * as modules from '~/modules';
import { Layouts } from '~/components';
// ------------------------------------------------------------------------
import { IRoutes } from '../config';
// ------------------------------------------------------------------------

const commonsRoutes: Array<IRoutes> = [
    {
        path: ROUTES.home,
        component: modules.Home,
        layout: Layouts.DefaultLayout,
        props: {},
        isPrivate: false,
    },
    {
        path: ROUTES.about,
        component: modules.About,
        layout: Layouts.DefaultLayout,
        props: {},
        isPrivate: false,
    },
    {
        path: ROUTES.setting,
        component: modules.Setting,
        layout: Layouts.DefaultLayout,
        props: {},
        isPrivate: false,
    },
    {
        path: ROUTES.notfound,
        component: modules.NotFoundPage,
        layout: Layouts.NoLayout,
        props: {},
        isPrivate: false,
    },
];
export default commonsRoutes;
