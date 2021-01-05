import React, { useCallback } from 'react'
import Button from 'react-bootstrap/cjs/Button'
import Navbar from 'react-bootstrap/Navbar'

import HeaderMenu from '~components/HeaderMenu'
import { Logo } from '~components/Logo'
import { authorize } from '~utils/auth'

import styles from './Header.module.css'

export const Header = (): React.ReactElement => {
  const handleLogin = useCallback(() => {
    authorize({})
  }, [])

  return (
    <header className={styles.root}>
      <Navbar variant="dark" expand="lg" className={styles.navbar}>
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <HeaderMenu />

        <Button onClick={handleLogin}>Login</Button>
      </Navbar>
    </header>
  )
}
