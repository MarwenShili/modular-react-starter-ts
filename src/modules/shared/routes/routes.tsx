import sharedRoutes from './sharedRoutes'
import authRoutes from '../../auth/routes/routes'
import viewBookRoutes from '../../book/routes/routes'
import dashboardRoutes from '../../dashboard/routes/routes'

const routes = [...sharedRoutes, ...authRoutes, ...viewBookRoutes, ...dashboardRoutes]

export default routes
