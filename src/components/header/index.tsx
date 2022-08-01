import React from 'react'
import { Link } from 'react-router-dom'
import LogoImage from '../../assets/images/logo.svg'
import './index.scss'

const Hamburger = (): React.ReactElement => {
  return (
    <div id="btn-hamburger" className="btn__hamburger">
      <div className="icon__wrapper">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </div>
  )
}

const Logo = (): React.ReactElement => {
  return (
    <div className="nav__logo">
      <Link to="/" target="">
        <img
          className="brand__logo"
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
            <div className="dropdown__container">
              <Link className="nav__link" to={item.to} target="">
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
    <div className="header__container">
      <div className="static__container">
        <div className="header fixed__header}`">
          <div className="nav__container">
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
