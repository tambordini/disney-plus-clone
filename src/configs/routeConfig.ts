import React, { ComponentType, LazyExoticComponent } from 'react'

interface IRouteConfig {
  key: string
  path: string
  component: LazyExoticComponent<ComponentType<AnyValue>>
}

export const routes: IRouteConfig[] = [
  {
    key: 'landing',
    path: '/',
    component: React.lazy(() => import('../pages/landing/index'))
  },
  {
    key: 'genres',
    path: '/genres',
    component: React.lazy(() => import('../pages/genres/index'))
  }
]
