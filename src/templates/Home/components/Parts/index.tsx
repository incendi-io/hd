import React, { FC, ReactElement } from 'react'
import Container from 'react-bootstrap/cjs/Container'
import Dropdown from 'react-bootstrap/cjs/Dropdown'

const Parts: FC<unknown> = (): ReactElement => (
  <Container fluid>
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">Shop For Parts</Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Header>Buying Online</Dropdown.Header>
        <Dropdown.Item
          rel="noopener noreferrer"
          target="_blank"
          href="https://parts.cat.com/en/hastingsdeering?utm_source=hastingsdeering.com.au&amp;utm_content=home+page+visit+online+store+btn">
          Visit Online Store
        </Dropdown.Item>
        <Dropdown.Item href="/parts/how-to-order-online">How To / Tutorials</Dropdown.Item>
        <Dropdown.Header>Learn More</Dropdown.Header>
        <Dropdown.Item href="/parts/cat-undercarriage">Undercarriage</Dropdown.Item>
        <Dropdown.Item href="/parts/ground-engaging-tools">Ground Engaging Tools</Dropdown.Item>
        <Dropdown.Item href="/parts/hose-and-couplings">
          Hydraulics: Hose &amp; Couplings
        </Dropdown.Item>
        <Dropdown.Item href="/parts/cat-oils-fluids-filters">
          Oils, Fluids &amp; Filters
        </Dropdown.Item>
        <Dropdown.Item href="/parts/cat-batteries">Batteries</Dropdown.Item>
        <Dropdown.Item href="/owning/repair-options">Repair Options</Dropdown.Item>
        <Dropdown.Item href="/owning/repair-options/rebuild">Certified Rebuilds</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Container>
)

export default Parts
