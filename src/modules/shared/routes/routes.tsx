import sharedRoutes from './sharedRoutes'
import notificationRoutes from '../../notification/routes/routes'
import authRoutes from '../../auth/routes/routes'
import dashboardRoutes from '../../dashboard/routes/routes'
import tryingRoutes from '../../trying/routes/routes'

const routes = [
  ...sharedRoutes,
  ...authRoutes,
  ...dashboardRoutes,
  ...tryingRoutes,
  ...notificationRoutes,
]

export default routes
