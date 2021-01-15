import './404.modules.scss'

import React, { FC, ReactElement } from 'react'
import Button from 'react-bootstrap/cjs/Button'

import Layout from '~components/Layout'

//TODO: css modules not working, check gatsby or webpack config for 404.tsx
import styles from './404.modules.scss'

const NotFoundPage: FC<unknown> = (): ReactElement => (
  <Layout>
    <div className="component promo promo-hero col-12">
      <div className="component-content">
        <div className="promo-background">
          <div>
            <span className="background-section"></span>
            <span className="background-overlay"></span>
          </div>
        </div>
        <div className="container">
          <div className="promo-text offset-md-1">
            <h2 className="promo-text-h2">Oops</h2>
            <h1 className="promo-heading">We didn&apos;t find anything!</h1>
          </div>
          <div className="promo-cta-section offset-md-1">
            <div className="promo-cta-section">
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
