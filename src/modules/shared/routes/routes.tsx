import sharedRoutes from './sharedRoutes'
import authRoutes from '../../auth/routes/routes'
import dashboardRoutes from '../../dashboard/routes/routes'
import tryingRoutes from '../../trying/routes/routes'

const routes = [...sharedRoutes, ...authRoutes, ...dashboardRoutes, ...tryingRoutes]

export default routes
