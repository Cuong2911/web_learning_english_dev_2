// ------------------------------------------------------------------------

import { IRoutes } from './config';
import adminRoutes from './constants/admin';
import authRoutes from './constants/auth';
import commonsRoutes from './constants/commons';
import learning from './constants/learning';
import loginRoutes from './constants/login';

// ------------------------------------------------------------------------

const routes: Array<IRoutes> = [...commonsRoutes, ...loginRoutes, ...learning, ...authRoutes, ...adminRoutes];
export { routes };
