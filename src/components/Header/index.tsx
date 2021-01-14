import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import React, { useCallback, useState } from 'react'
import Button from 'react-bootstrap/cjs/Button'
import Navbar from 'react-bootstrap/Navbar'

import HeaderMenu from '~components/HeaderMenu'
import { Logo } from '~components/Logo'
import { authorize } from '~utils/auth'

import styles from './Header.module.scss'

export const Header = (): React.ReactElement => {
  const handleLogin = useCallback(() => {
    authorize({})
  }, [])

  const [expanded, setExpanded] = useState(false)

  const expand = () => {
    setExpanded(!expanded)
  }

  return (
    <header className={styles.root}>
      <Navbar variant="dark" expand="md" expanded={expanded} className={styles.navbar}>
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <div className={classNames(styles.hdMobileDivider, { 'd-none': !expanded })} />
        <HeaderMenu />
        <div className={styles.navbarControls}>
          <Button onClick={handleLogin}>Login</Button>
          <Button
            className={classNames(styles.navbarExpand, 'mx-2')}
            variant="outline-light"
            onClick={expand}>
            <FontAwesomeIcon
              icon={expanded ? faTimes : faBars}
              title={'Read'}
              className={styles.collapseExpand}
            />
          </Button>
        </div>
      </Navbar>
    </header>
  )
}
