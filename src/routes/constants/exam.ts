// ------------------------------------------------------------------------
import { ROUTES } from '~/configs/routes';
import * as modules from '~/modules';
import { Layouts } from '~/components';
// ------------------------------------------------------------------------
import { IRoutes } from '../config';
// ------------------------------------------------------------------------

const examRoutes: Array<IRoutes> = [
    {
        path: ROUTES.examList,
        component: modules.exam.ExamList,
        layout: Layouts.DefaultLayout,
        props: {},
        isPrivate: false,
    },
    {
        path: ROUTES.doExam,
        component: modules.exam.DoExam,
        layout: Layouts.StudyLayout,
        props: {},
        isPrivate: true,
    },
];
export default examRoutes;
