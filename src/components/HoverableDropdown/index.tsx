import useWindowSize from '@rooks/use-window-size'
import React, { useEffect, useState } from 'react'
import NavDropdown, { NavDropdownProps } from 'react-bootstrap/NavDropdown'
import { isMobile } from 'react-device-detect'

import { gridBreakpointsMd } from '../exports.scss'

export const HoverableDropdown = ({ show = false, ...props }: NavDropdownProps) => {
  const { innerWidth } = useWindowSize()

  const [expanded, setExpanded] = useState(show)
  useEffect(() => {
    setExpanded(show)
  }, [show])
  const showDropdown = () => {
    if (!isMobile && innerWidth && innerWidth > parseInt(gridBreakpointsMd)) setExpanded(true)
  }
  const hideDropdown = () => {
    if (!isMobile && innerWidth && innerWidth > parseInt(gridBreakpointsMd)) setExpanded(false)
  }

  return (
    <NavDropdown
      show={expanded}
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
      {...props}
    />
  )
}
