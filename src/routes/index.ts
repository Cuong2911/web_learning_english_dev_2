// ------------------------------------------------------------------------

import { IRoutes } from './config';
import adminRoutes from './constants/admin';
import authRoutes from './constants/auth';
import commonsRoutes from './constants/commons';
import examRoutes from './constants/exam';
import learningRoutes from './constants/learning';
import loginRoutes from './constants/login';
import quizRoutes from './constants/quiz';

// ------------------------------------------------------------------------

const routes: Array<IRoutes> = [
    ...commonsRoutes,
    ...loginRoutes,
    ...learningRoutes,
    ...examRoutes,
    ...quizRoutes,
    ...authRoutes,
    ...adminRoutes,
];
export { routes };
