import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = (): React.ReactElement => {
  const navigate = useNavigate()

  return (
    <div className="no-page">
      <div className="content-wrapper">
        <div className="error-wrapper">
          <div className="television" />
          <h3 className="title">404</h3>
          <p className="info">Oh! Page not found</p>
          <button
            onClick={() => navigate('/')}
            type="button"
            className="home-btn"
          >
            Disney+ Hotstar HOME
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
