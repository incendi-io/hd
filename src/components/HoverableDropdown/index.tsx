import React, { useState } from 'react'
import NavDropdown, { NavDropdownProps } from 'react-bootstrap/NavDropdown'

export const HoverableDropdown = ({ ...props }: NavDropdownProps) => {
  const [show, setShow] = useState(false)
  const showDropdown = () => {
    setShow(!show)
  }
  const hideDropdown = () => {
    setShow(false)
  }

  return (
    <NavDropdown show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown} {...props} />
  )
}
