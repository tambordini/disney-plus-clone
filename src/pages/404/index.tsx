import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.scss'

const NotFound = (): React.ReactElement => {
  const navigate = useNavigate()

  return (
    <div className="no__page">
      <div className="content__wrapper">
        <div className="error__wrapper">
          <div className="television" />
          <h3 className="title">404</h3>
          <p className="info">Oh! Page not found</p>
          <button
            onClick={() => navigate('/')}
            type="button"
            className="home__btn"
          >
            Disney+ Hotstar HOME
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
