/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, lazy } from 'react'
import { RouteProps } from 'react-router-dom'
import { PATH } from './paths'
import AuthGuard from '@src/modules/shared/guards/AuthGuard'
import MainLayout from '@src/modules/shared/layout/MainLayout/MainLayout'

type RouteConfig = {
  exact: boolean | null
  path: string
  component: React.ComponentType<any>
  guard?: React.ComponentType<any> | typeof Fragment | any
  layout?: React.ComponentType<any> | typeof Fragment
} & RouteProps

const routes: RouteConfig[] = [
  {
    exact: true,
    guard: AuthGuard,
    path: PATH.NOTIFICATION,
    component: lazy(() => import('../Notification')),
    layout: MainLayout,
  },
]

export default routes
