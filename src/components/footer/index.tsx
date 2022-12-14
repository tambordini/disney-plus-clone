import React from 'react'
import { Link } from 'react-router-dom'

const FooterLeft = (): React.ReactElement => {
  const footerItems = [
    {
      to: '/about-us',
      label: 'About Disney+ Hotstar'
    },
    {
      to: '/terms-of-use',
      label: 'Terms of Use'
    },
    {
      to: '/privacy-policy',
      label: 'Privacy Policy (New)'
    },
    {
      to: 'https://help.hotstar.com/',
      label: 'FAQ'
    },
    {
      to: '/feedback',
      label: 'Feedback'
    }
  ]

  return (
    <div className="footer-left col-xs-12 col-sm-12 col-sm-7">
      <ul>
        {footerItems.map((item) => (
          <li key={item.to}>
            <Link rel="noopener noreferrer" target="_blank" to={item.to}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <p className="copyright">
        © 2022 Disney and its related entities. All Rights Reserved. © 2022
        Disney’s licensor entities. All Rights Reserved.
      </p>
    </div>
  )
}

const FooterRight = (): React.ReactElement => {
  return (
    <div className="footer-right col-xs-12 col-sm-12 col-sm-5">
      <div className="app-unit col-xs-8">
        <div className="store-wrapper">
          <p>Disney+ Hotstar App</p>
          <Link
            className="playstore"
            to="/"
            target="_blank"
            rel="noopener noreferrer"
          ></Link>
          <Link
            className="appstore"
            to="/"
            target="_blank"
            rel="noopener noreferrer"
          ></Link>
        </div>
      </div>
      <div className="social-unit col-xs-4">
        <div>
          <p>Connect with us</p>
          <a
            className="fb"
            href="https://www.facebook.com/DisneyPlusHotstarTH"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            className="tw"
            href="https://twitter.com/disneyplusth"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </div>
    </div>
  )
}

const Footer = (): React.ReactElement => {
  return (
    <div className="footer">
      <div className="container">
        <FooterLeft />
        <FooterRight />
      </div>
    </div>
  )
}

export default Footer
