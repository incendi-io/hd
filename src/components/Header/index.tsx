import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

import { Logo } from '~components/Logo'

export const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">
      <Logo />
    </Navbar.Brand>
  </Navbar>
)
