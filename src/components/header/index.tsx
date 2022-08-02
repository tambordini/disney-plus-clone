import React from 'react'
import { Link } from 'react-router-dom'
import LogoImage from '../../assets/images/logo.svg'

const Hamburger = (): React.ReactElement => {
  return (
    <div id="btn-hamburger" className="btn-hamburger">
      <div className="icon-wrapper">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </div>
  )
}

const Logo = (): React.ReactElement => {
  return (
    <div className="nav-logo">
      <Link to="/" target="">
        <img
          className="brand-logo"
          src={LogoImage}
          alt="Disney+&nbsp;Hotstar"
        />
      </Link>
    </div>
  )
}

const Navigation = (): React.ReactElement => {
  const navigationItems = [
    {
      to: '/tv',
      label: 'Series'
    },
    {
      to: '/movie',
      label: 'Movies'
    },
    {
      to: '/disneyplus',
      label: 'Disney+'
    },
    {
      to: '/local',
      label: 'Asian'
    },
    {
      to: '',
      label: '',
      isKid: true
    }
  ]

  return (
    <div className="navigations" role="navigation">
      <ul>
        {navigationItems.map((item) => (
          <li key={item.label}>
            <div className="dropdown-container">
              <Link className="nav-link" to={item.to} target="">
                <div className={item.isKid ? 'iconClass kids' : ''}>
                  {item.label}
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Header = (): React.ReactElement => {
  return (
    <div className="header-container">
      <div className="static-container">
        <div className="header fixed-header}`">
          <div className="nav-container">
            <Hamburger />
            <Logo />
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
