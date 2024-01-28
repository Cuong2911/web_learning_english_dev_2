// ------------------------------------------------------------------------
import { ROUTES } from '~/configs/routes';
import * as modules from '~/modules';
import { Layouts } from '~/components';
// ------------------------------------------------------------------------
import { IRoutes } from '../config';
// ------------------------------------------------------------------------

const learning: Array<IRoutes> = [
    {
        path: ROUTES.listen,
        component: modules.learning.ListenPage,
        layout: Layouts.DefaultLayout,
        props: {},
        isPrivate: false,
    },
    {
        path: ROUTES.voca,
        component: modules.learning.VocaPage,
        layout: Layouts.DefaultLayout,
        props: {},
        isPrivate: false,
    },
    {
        path: ROUTES.grammar,
        component: modules.learning.GrammarPage,
        layout: Layouts.DefaultLayout,
        props: {},
        isPrivate: false,
    },
    {
        path: ROUTES.pronounce,
        component: modules.learning.PronouncePage,
        layout: Layouts.DefaultLayout,
        props: {},
        isPrivate: false,
    },
    {
        path: ROUTES.game,
        component: modules.learning.GamePage,
        layout: Layouts.DefaultLayout,
        props: {},
        isPrivate: false,
    },
];
export default learning;
