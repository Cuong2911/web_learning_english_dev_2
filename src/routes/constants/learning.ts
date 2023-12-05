// ------------------------------------------------------------------------
import { ROUTES } from '~/configs/routes';
import * as modules from '~/modules';
import { Layouts } from '~/components';
// ------------------------------------------------------------------------
import { IRoutes } from '../config';
// ------------------------------------------------------------------------

const learningRoutes: Array<IRoutes> = [
    {
        path: ROUTES.listCourses,
        component: modules.learning.ListCourses,
        layout: Layouts.DefaultLayout,
        props: {},
        isPrivate: false,
    },
    {
        path: ROUTES.infoCourse,
        component: modules.learning.InforCourse,
        layout: Layouts.DefaultLayout,
        props: {},
        isPrivate: false,
    },
    {
        path: ROUTES.learningCourse,
        component: modules.learning.LearningCourse,
        layout: Layouts.StudyLayout,
        props: {},
        isPrivate: true,
    },
];
export default learningRoutes;
