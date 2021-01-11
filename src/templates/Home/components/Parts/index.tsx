import React, { FC, ReactElement } from 'react'
import Container from 'react-bootstrap/cjs/Container'
import Dropdown from 'react-bootstrap/cjs/Dropdown'

const Parts: FC<unknown> = (): ReactElement => (
  //TODO: add Component or something, that will automatically add "component row-splitter" and maybe other classes
  <div className="row-splitter container-dark-background pb-0 pt-0">
    <Container fluid className="container pb-0 pt-0">
      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-basic"
          className="btn btn-secondary container-dark-background btn-sm dropdown-toggle py-3 pb-2 border-0">
          <span className="h4 text-capitalize text-white pr-1">Shop For Parts</span>
        </Dropdown.Toggle>

        <Dropdown.Menu className="position-center">
          <Dropdown.Header className="text-primary">Buying Online</Dropdown.Header>
          <Dropdown.Item
            className="text-light text-secondary bg-light"
            rel="noopener noreferrer"
            target="_blank"
            href="https://parts.cat.com/en/hastingsdeering?utm_source=hastingsdeering.com.au&amp;utm_content=home+page+visit+online+store+btn">
            Visit Online Store
          </Dropdown.Item>
          <Dropdown.Item className="text-light" href="/parts/how-to-order-online">
            How To / Tutorials
          </Dropdown.Item>

          <Dropdown.Header className="text-primary">Learn More</Dropdown.Header>
          <Dropdown.Item className="text-light" href="/parts/cat-undercarriage">
            Undercarriage
          </Dropdown.Item>
          <Dropdown.Item className="text-light" href="/parts/ground-engaging-tools">
            Ground Engaging Tools
          </Dropdown.Item>
          <Dropdown.Item className="text-light" href="/parts/hose-and-couplings">
            Hydraulics: Hose &amp; Couplings
          </Dropdown.Item>
          <Dropdown.Item className="text-light" href="/parts/cat-oils-fluids-filters">
            Oils, Fluids &amp; Filters
          </Dropdown.Item>
          <Dropdown.Item className="text-light" href="/parts/cat-batteries">
            Batteries
          </Dropdown.Item>
          <Dropdown.Item className="text-light" href="/owning/repair-options">
            Repair Options
          </Dropdown.Item>
          <Dropdown.Item className="text-light" href="/owning/repair-options/rebuild">
            Certified Rebuilds
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  </div>
)

export default Parts
