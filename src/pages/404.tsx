import React, { FC, ReactElement } from 'react'
import Button from 'react-bootstrap/cjs/Button'

import Layout from '~components/Layout'

import styles from './404.module.scss'

const NotFoundPage: FC<unknown> = (): ReactElement => (
  <Layout>
    <div className={`${styles.promoHero} component promo promo-hero col-12`}>
      <div className="component-content d-flex justify-content-center align-items-center h-100">
        <div className="promo-background">
          <div>
            <span className={styles.backgroundSection} />
            <span className={styles.backgroundOverlay} />
          </div>
        </div>
        <div className="container">
          <div className={`${styles.promoText} offset-md-1`}>
            <h2 className={styles.promoTextH2}>Oops</h2>
            <h1 className={styles.promoHeading}>We didn&apos;t find anything!</h1>
          </div>
          <div className={`${styles.promoCtaSection} offset-md-1`}>
            <div className={styles.promoCtaSection}>
              <Button
                as={'a'}
                href={'/'}
                variant={'light'}
                size={'lg'}
                className="btn-white uppercase">
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
