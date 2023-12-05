// ------------------------------------------------------------------------
import { ROUTES } from '~/configs/routes';
import * as modules from '~/modules';
import { Layouts } from '~/components';
// ------------------------------------------------------------------------
import { IRoutes } from '../config';
// ------------------------------------------------------------------------

const quizRoutes: Array<IRoutes> = [
    {
        path: ROUTES.quizList,
        component: modules.quiz.QuizList,
        layout: Layouts.DefaultLayout,
        props: {},
        isPrivate: false,
    },
    {
        path: ROUTES.doQuiz,
        component: modules.quiz.DoQuiz,
        layout: Layouts.StudyLayout,
        props: {},
        isPrivate: true,
    },
];
export default quizRoutes;
