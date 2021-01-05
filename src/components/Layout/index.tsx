import '../fonts.css'
import './index.scss'

import React, { FC } from 'react'

import Footer from '~components/Footer'
import { Header } from '~components/Header'

import styles from './Layout.module.scss'

type Props = Record<string, unknown>

const Layout: FC<Props> = (props): React.ReactElement => (
  <div className={styles.container}>
    <Header />
    <main>{props.children}</main>
    <Footer />
  </div>
)

export default Layout
