import React from 'react'
import styles from './index.module.scss'

const Header = (): React.ReactElement => {
  return (
    <div className={styles.header__container}>
      <div className={styles.static__container}>
        <div className={`${styles.header} ${styles.fixed__header}`}>
          <div className={styles.nav__container}>Nav Container</div>
        </div>
      </div>
    </div>
  )
}

export default Header
