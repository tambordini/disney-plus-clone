import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

const NotFound = (): React.ReactElement => {
  const navigate = useNavigate()

  return (
    <div className={styles.no__page}>
      <div className={styles.content__wrapper}>
        <div className={styles.error__wrapper}>
          <div className={styles.television} />
          <h3 className={styles.title}>404</h3>
          <p className={styles.info}>Oh! Page not found</p>
          <button
            onClick={() => navigate('/')}
            type="button"
            className={styles.home__btn}
          >
            Disney+ Hotstar HOME
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
