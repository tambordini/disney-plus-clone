import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/footer'
import Header from '../components/header'
import NotFound from '../pages/404'
import { routes } from '../routeConfig'

const Layout = (): React.ReactElement => {
  return (
    <>
      <React.Suspense fallback={<>Loading ...</>}>
        <Header />
        <Routes>
          {routes.map(({ key, path, component: Component }) => (
            <Route key={key} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </React.Suspense>
    </>
  )
}

export default Layout
