import sharedRoutes from './sharedRoutes'
import authRoutes from '../../auth/routes/routes'
import viewBookRoutes from '../../book/routes/routes'
import dashboardRoutes from '../../dashboard/routes/routes'
import tryingRoutes from '../../trying/routes/routes'

const routes = [
  ...sharedRoutes,
  ...authRoutes,
  ...viewBookRoutes,
  ...dashboardRoutes,
  ...tryingRoutes,
]

export default routes
