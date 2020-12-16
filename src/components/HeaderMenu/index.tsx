import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const HeaderMenu = (): React.ReactElement => {
  return (
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavDropdown title="Products" id="new-equipments">
          <NavDropdown.Item href="/products/new">New Equipments</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown id="our-business" title="Our Business">
          <NavDropdown.Item href="/our-business/news-and-media">News & Media</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  )
}

export default HeaderMenu
