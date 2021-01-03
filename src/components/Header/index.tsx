import React, { useCallback } from 'react'
import Button from 'react-bootstrap/cjs/Button'
import Navbar from 'react-bootstrap/Navbar'

import HeaderMenu from '~components/HeaderMenu'
import { Logo } from '~components/Logo'
import { authorize } from '~utils/auth'

export const Header = (): React.ReactElement => {
  const handleLogin = useCallback(() => {
    authorize({})
  }, [])

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <HeaderMenu />

        <Button onClick={handleLogin}>Login</Button>
      </Navbar>
    </header>
  )
}
