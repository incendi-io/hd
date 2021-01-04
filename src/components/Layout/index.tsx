import '../fonts.css'
import '../colors.css'
import './index.scss'

import React, { FC } from 'react'

import Footer from '~components/Footer'
import { Header } from '~components/Header'

type Props = Record<string, unknown>

const Layout: FC<Props> = (props): React.ReactElement => (
  <>
    <Header />
    <main>{props.children}</main>
    <Footer />
  </>
)

export default Layout
