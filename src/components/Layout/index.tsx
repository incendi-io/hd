import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../fonts.css'

import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import BackToTop from 'react-back-to-top'

import Footer from '~components/Footer'
import { Header } from '~components/Header'

import styles from './Layout.module.scss'

type Props = Record<string, unknown>

const Layout: FC<Props> = (props): React.ReactElement => (
  <div className={styles.container}>
    <Header />
    <main>{props.children}</main>
    <Footer />
    <BackToTop
      mainStyle={{
        background: 'var(--bg-grey)',
      }}
      offsetTop={0}
      step={50}
      isPercent={false}>
      <FontAwesomeIcon icon={faChevronUp} title={'Read'} />
    </BackToTop>
  </div>
)

export default Layout
