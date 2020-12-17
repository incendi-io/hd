import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

import HeaderMenu from '~components/HeaderMenu'
import { Logo } from '~components/Logo'

export const Header = (): React.ReactElement => (
  <header>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">
        <Logo />
      </Navbar.Brand>
      <HeaderMenu />
    </Navbar>
  </header>
)
