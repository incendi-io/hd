import 'bootstrap/dist/css/bootstrap.css'

import React, { FC } from 'react'
import Container from 'react-bootstrap/Container'

import { Header } from '~components/Header'
import Footer from '~components/Footer'

type Props = Record<string, unknown>

const Layout: FC<Props> = (props): React.ReactElement => (
  <>
    <Header />
    <Container className="mr-0 p-0" fluid>
      {props.children}
    </Container>
    <Footer />
  </>
)

export default Layout
