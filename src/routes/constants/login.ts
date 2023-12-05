// ------------------------------------------------------------------------
import { ROUTES } from '~/configs/routes';
import * as modules from '~/modules';
import { Layouts } from '~/components';
// ------------------------------------------------------------------------
import { IRoutes } from '../config';
// ------------------------------------------------------------------------

const loginRoutes: Array<IRoutes> = [
    {
        path: ROUTES.login,
        component: modules.Login,
        layout: Layouts.NoLayout,
        props: {
            login: true,
        },
        isPrivate: false,
    },
    {
        path: ROUTES.signup,
        component: modules.Login,
        layout: Layouts.NoLayout,
        props: {
            signup: true,
        },
        isPrivate: false,
    },
];
export default loginRoutes;
